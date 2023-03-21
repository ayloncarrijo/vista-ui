import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
} from "./stitches/theme";
import type { PropertyValue } from "./types/stitches";
import type { TypographyToken } from "./types/typography";
import { createColorSchemes } from "./utils/color-scheme";

const { light } = createColorSchemes({
  primary: "#7c43ab",
});

const stitches = createStitches({
  prefix: "youUi",
  themeMap: { ...defaultThemeMap, opacity: "opacities", $$ringColor: "colors" },
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
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 976px)",
    xl: "(min-width: 1440px)",
  },
  utils: {
    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    ring: (value: number) => ({
      boxShadow: "$$ringInset 0 0 0 $$ringWidth $$ringColor",
      $$ringInset: "",
      $$ringWidth: `${value}px`,
      $$ringColor: "currentColor",
    }),
    ringInset: (inset: boolean) => ({
      $$ringInset: inset ? "inset" : "",
    }),
    ringWidth: (value: number) => ({
      $$ringWidth: `${value}px`,
    }),
    ringColor: (value: PropertyValue<"color">) => ({
      $$ringColor: value,
    }),
    typography: (value: `$${TypographyToken}`) => ({
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
