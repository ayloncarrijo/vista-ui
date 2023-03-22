import {
  capitalize,
  createFromEntries,
  getEntries,
  isString,
} from "@ayloncarrijo/utilities";
import type * as Material from "@importantimport/material-color-utilities";
import {
  argbFromHex,
  argbFromRgb,
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
  themeFromSourceColor,
} from "@importantimport/material-color-utilities";
import { normal } from "color-blend";
import type {
  Color,
  ColorGroup,
  ColorScheme,
  ColorSchemes,
  CustomColors,
  Rgba,
  SchemeType,
  SourceColors,
} from "../types/color-scheme";

const identifyColorGroup = <T extends string>(
  colorName: T,
  colorGroup: Material.ColorGroup
): ColorGroup<T, number> =>
  createFromEntries(
    getEntries(colorGroup).map(([key, value]) => [
      key
        .replace("color", colorName.toLowerCase())
        .replace("Color", capitalize(colorName)),
      value,
    ])
  ) as ColorGroup<T, number>;

const flattenCustomColors = (
  customColors: Array<Material.CustomColorGroup>,
  schemeType: SchemeType
): CustomColors =>
  customColors
    .map((customColor) =>
      identifyColorGroup(customColor.color.name, customColor[schemeType])
    )
    .reduce(
      (accumulator, colorGroup) => ({ ...accumulator, ...colorGroup }),
      {}
    ) as CustomColors;

const blendColors = (backdrop: Rgba, source: Rgba): number => {
  const { r, g, b } = normal(backdrop, source);
  return argbFromRgb(r, g, b);
};

const convertArgbToRgba = (color: number, alpha = 1): Rgba => ({
  r: redFromArgb(color),
  g: greenFromArgb(color),
  b: blueFromArgb(color),
  a: alpha,
});

const convertColorToArgb = (color: Color): number =>
  isString(color) ? argbFromHex(color) : argbFromRgb(color.r, color.g, color.b);

const convertValuesToRgb = <T extends Record<string, number>>(
  obj: T
): Record<keyof T, string> =>
  createFromEntries(
    getEntries(obj).map(([key, value]) => {
      const { r, g, b } = convertArgbToRgba(value);
      return [key, `${r} ${g} ${b}`];
    })
  );

const extractColorScheme = (
  { schemes, customColors }: Material.Theme,
  schemeType: SchemeType
): ColorScheme => {
  const scheme = schemes[schemeType];

  return convertValuesToRgb({
    ...scheme.toJSON(),
    surface1: blendColors(
      convertArgbToRgba(scheme.surface),
      convertArgbToRgba(scheme.primary, 0.05)
    ),
    surface2: blendColors(
      convertArgbToRgba(scheme.surface),
      convertArgbToRgba(scheme.primary, 0.08)
    ),
    surface3: blendColors(
      convertArgbToRgba(scheme.surface),
      convertArgbToRgba(scheme.primary, 0.11)
    ),
    surface4: blendColors(
      convertArgbToRgba(scheme.surface),
      convertArgbToRgba(scheme.primary, 0.12)
    ),
    surface5: blendColors(
      convertArgbToRgba(scheme.surface),
      convertArgbToRgba(scheme.primary, 0.14)
    ),
    ...flattenCustomColors(customColors, schemeType),
  } satisfies Record<keyof ColorScheme, number>);
};

export const createColorSchemes = ({
  primary,
  secondary,
  tertiary,
  warning = "#9c4400",
  success = "#1b6d24",
  error = "#ba1a1a",
  info = "#00639a",
}: SourceColors): ColorSchemes => {
  const theme = themeFromSourceColor(
    convertColorToArgb(primary),
    getEntries({
      primary,
      secondary,
      tertiary,
      warning,
      success,
      error,
      info,
    } satisfies SourceColors)
      .filter((entry): entry is [keyof SourceColors, Color] => entry[1] != null)
      .map(([key, value]) => ({
        name: key,
        value: convertColorToArgb(value),
        blend: false,
      }))
  );

  return {
    light: extractColorScheme(theme, "light"),
    dark: extractColorScheme(theme, "dark"),
  };
};
