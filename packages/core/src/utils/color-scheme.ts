import {
  capitalize,
  createFromEntries,
  getEntries,
  isString,
  omit,
  type NonNullableEntry,
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

const convertArgbToRgba = (color: number, alpha = 1): Rgba => ({
  r: redFromArgb(color),
  g: greenFromArgb(color),
  b: blueFromArgb(color),
  a: alpha,
});

const convertColorToArgb = (color: Color): number =>
  isString(color) ? argbFromHex(color) : argbFromRgb(color.r, color.g, color.b);

const convertValuesToRgb = <T extends Record<keyof T, number>>(
  obj: T
): Record<keyof T, string> =>
  createFromEntries(
    getEntries(obj).map(([key, value]) => {
      const { r, g, b } = convertArgbToRgba(value);
      return [key, `${r} ${g} ${b}`];
    })
  );

const extractColorScheme = (
  { schemes, customColors, palettes }: Material.Theme,
  schemeType: SchemeType
): ColorScheme => {
  const scheme = schemes[schemeType];

  return convertValuesToRgb({
    ...omit(scheme.toJSON(), ["background", "onBackground", "surfaceVariant"]),
    ...{
      light: {
        surface: palettes.neutral.tone(98),
        surfaceDim: palettes.neutral.tone(87),
        surfaceBright: palettes.neutral.tone(98),
        surfaceContainerLowest: palettes.neutral.tone(100),
        surfaceContainerLow: palettes.neutral.tone(96),
        surfaceContainer: palettes.neutral.tone(94),
        surfaceContainerHigh: palettes.neutral.tone(92),
        surfaceContainerHighest: palettes.neutral.tone(90),
      },
      dark: {
        surface: palettes.neutral.tone(6),
        surfaceDim: palettes.neutral.tone(6),
        surfaceBright: palettes.neutral.tone(24),
        surfaceContainerLowest: palettes.neutral.tone(4),
        surfaceContainerLow: palettes.neutral.tone(10),
        surfaceContainer: palettes.neutral.tone(12),
        surfaceContainerHigh: palettes.neutral.tone(17),
        surfaceContainerHighest: palettes.neutral.tone(22),
      },
    }[schemeType],
    ...flattenCustomColors(customColors, schemeType),
  });
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
    } satisfies Record<keyof SourceColors, Color | undefined>)
      .filter(
        (entry): entry is NonNullableEntry<typeof entry> => entry[1] != null
      )
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
