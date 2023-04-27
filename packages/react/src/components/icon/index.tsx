import { convertPxToRem } from "@ayloncarrijo/utilities";
import { styled } from "@vista-ui/core";

export type IconProps = React.ComponentProps<typeof Icon>;

export const Icon = styled("span", {
  whiteSpace: "nowrap",
  wordWrap: "normal",
  direction: "ltr",
  lineHeight: 1,
  letterSpacing: "normal",
  textTransform: "none",
  display: "inline-block",
  userSelect: "none",
  fontFamily: "$icons",
  fontWeight: "normal",
  fontStyle: "normal",
  fontVariationSettings: "'FILL' $$fill, 'wght' 400, 'GRAD' 0, 'opsz' 24",
  WebkitFontFeatureSettings: "'liga'",
  WebkitFontSmoothing: "antialiased",
  variants: {
    variant: {
      filled: {
        $$fill: "1",
      },
      outlined: {
        $$fill: "0",
      },
    },
    size: {
      xs: {
        fontSize: convertPxToRem(16),
      },
      sm: {
        fontSize: convertPxToRem(18),
      },
      md: {
        fontSize: convertPxToRem(24),
      },
      lg: {
        fontSize: convertPxToRem(36),
      },
      xl: {
        fontSize: convertPxToRem(48),
      },
    },
  },
  defaultVariants: {
    variant: "outlined",
    size: "md",
  },
});
