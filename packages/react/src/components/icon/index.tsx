import { convertPxToRem } from "@ayloncarrijo/utilities";
import { styled } from "@you-ui/core";

export type IconProps = React.ComponentProps<typeof Icon>;

export const Icon = styled("span", {
  fontFamily: "$icons",
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: "normal",
  textTransform: "none",
  display: "inline-block",
  whiteSpace: "nowrap",
  wordWrap: "normal",
  direction: "ltr",
  WebkitFontFeatureSettings: "'liga'",
  WebkitFontSmoothing: "antialiased",
  variants: {
    variant: {
      filled: {
        fontVariationSettings: "'FILL' 1",
      },
      outlined: {
        fontVariationSettings: "'FILL' 0",
      },
    },
    size: {
      xs: {
        fontSize: convertPxToRem(18),
      },
      sm: {
        fontSize: convertPxToRem(24),
      },
      md: {
        fontSize: convertPxToRem(36),
      },
      lg: {
        fontSize: convertPxToRem(48),
      },
    },
  },
  defaultVariants: {
    variant: "outlined",
    size: "sm",
  },
});
