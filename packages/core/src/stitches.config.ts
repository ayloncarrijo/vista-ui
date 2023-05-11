import type { ValueOf } from "@ayloncarrijo/utilities";
import type * as Stitches from "@stitches/react";
import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  borderWidths,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
} from "./stitches/theme";
import type { TypographyMetaToken } from "./types/typography";
import { createColorSchemes } from "./utils/color-scheme";
import { createRgbUtilities } from "./utils/stitches";

const { light } = createColorSchemes({
  primary: "#7c43ab",
});

const privateThemeMap: Record<string, ValueOf<Stitches.DefaultThemeMap>> = {
  $$ringWidth: "borderWidths",
  $$ringColor: "colors",
};

const themeMap = {
  ...defaultThemeMap,
  ...privateThemeMap,
  animation: "transitions",
  opacity: "opacities",
  translate: "space",
} as const;

const stitches = createStitches({
  prefix: "vistaUi",
  themeMap,
  theme: {
    zIndices,
    colors: {
      ...colors,
      ...light,
    },
    opacities,
    radii,
    shadows,
    sizes,
    space,
    transitions,
    borderWidths,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
  },
  media: {
    xs: `(min-width: ${sizes.xs})`,
    sm: `(min-width: ${sizes.sm})`,
    md: `(min-width: ${sizes.md})`,
  },
  utils: {
    ...createRgbUtilities(themeMap),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    ring: (value: Stitches.ScaleValue<"borderWidths">) => ({
      boxShadow: "$$ringInset 0 0 0 $$ringWidth $$ringColor",
      $$ringInset: "",
      $$ringWidth: value,
      $$ringColor: "CurrentColor",
    }),
    ringInset: (inset: boolean) => ({
      $$ringInset: inset ? "inset" : "",
    }),
    ringWidth: (value: Stitches.ScaleValue<"borderWidths">) => ({
      $$ringWidth: value,
    }),
    ringColor: (value: Stitches.PropertyValue<"color">) => ({
      $$ringColor: value,
    }),
    typography: (value: `$${TypographyMetaToken}`) => ({
      fontFamily: value,
      fontSize: value,
      fontWeight: value,
      letterSpacing: value,
      lineHeight: value,
    }),
  },
});

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = stitches;
