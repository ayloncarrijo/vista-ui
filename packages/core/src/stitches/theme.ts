import { convertPxToRem } from "@ayloncarrijo/utilities";
import { createTypographyScales } from "../utils/typography";

export const zIndices = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};

export const colors = {
  disabledContainer: "$onSurface/0.12",
  disabledContent: "$onSurface/0.38",
};

export const opacities = {
  hover: 0.08,
  focus: 0.12,
  pressed: 0.12,
  dragged: 0.16,
};

export const radii = {
  xs: convertPxToRem(4),
  sm: convertPxToRem(8),
  md: convertPxToRem(12),
  lg: convertPxToRem(16),
  xl: convertPxToRem(28),
  full: "9999px",
};

export const shadows = {
  "1dp":
    "0px 0px 1px rgba(0, 0, 0, 0.039), 0px 0.5px 1.5px rgba(0, 0, 0, 0.19)",
  "2dp":
    "0px 0.25px 1px rgba(0, 0, 0, 0.039), 0px 0.85px 3px rgba(0, 0, 0, 0.19)",
  "3dp":
    "0px 0.333333px 1.5px rgba(0, 0, 0, 0.039), 0px 1.25px 5px rgba(0, 0, 0, 0.19)",
  "4dp":
    "0px 0.5px 1.75px rgba(0, 0, 0, 0.039), 0px 1.85px 6.25px rgba(0, 0, 0, 0.19)",
  "6dp":
    "0px 0.25px 3px rgba(0, 0, 0, 0.039), 0px 2.75px 9px rgba(0, 0, 0, 0.19)",
  "8dp":
    "0px 0.5px 5px rgba(0, 0, 0, 0.039), 0px 3.75px 11px rgba(0, 0, 0, 0.19)",
  "12dp":
    "0px 1px 6px rgba(0, 0, 0, 0.039), 0px 5.5px 16px rgba(0, 0, 0, 0.19)",
  "16dp": "0px 3px 6px rgba(0, 0, 0, 0.039), 0px 7px 24px rgba(0, 0, 0, 0.19)",
  "24dp":
    "0px 3px 13px rgba(0, 0, 0, 0.039), 0px 10.5px 36px rgba(0, 0, 0, 0.19)",
  elevation1: "$1dp",
  elevation2: "$3dp",
  elevation3: "$6dp",
  elevation4: "$8dp",
  elevation5: "$12dp",
};

export const sizes = {
  px: "1px",
  prose: "65ch",
  4: convertPxToRem(4),
  8: convertPxToRem(8),
  12: convertPxToRem(12),
  16: convertPxToRem(16),
  20: convertPxToRem(20),
  24: convertPxToRem(24),
  28: convertPxToRem(28),
  32: convertPxToRem(32),
  36: convertPxToRem(36),
  40: convertPxToRem(40),
  44: convertPxToRem(44),
  48: convertPxToRem(48),
  64: convertPxToRem(64),
  80: convertPxToRem(80),
  96: convertPxToRem(96),
  112: convertPxToRem(112),
  128: convertPxToRem(128),
  144: convertPxToRem(144),
  160: convertPxToRem(160),
  176: convertPxToRem(176),
  192: convertPxToRem(192),
  208: convertPxToRem(208),
  224: convertPxToRem(224),
  240: convertPxToRem(240),
  256: convertPxToRem(256),
  288: convertPxToRem(288),
  320: convertPxToRem(320),
  384: convertPxToRem(384),
  448: convertPxToRem(448),
  512: convertPxToRem(512),
};

export const space = sizes;

export const transitions = {
  all: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  default:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  colors:
    "color, background-color, border-color, text-decoration-color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  shadow: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)",
};

export const borderWidths = {
  0: 0,
  1: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
};

export const {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  typography,
} = createTypographyScales(
  {
    display: {
      lg: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(57),
        lineHeight: convertPxToRem(64),
        fontWeight: 400,
        letterSpacing: 0,
      },
      md: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(45),
        lineHeight: convertPxToRem(52),
        fontWeight: 400,
        letterSpacing: 0,
      },
      sm: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(36),
        lineHeight: convertPxToRem(44),
        fontWeight: 400,
        letterSpacing: 0,
      },
    },
    headline: {
      lg: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(32),
        lineHeight: convertPxToRem(40),
        fontWeight: 400,
        letterSpacing: 0,
      },
      md: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(28),
        lineHeight: convertPxToRem(36),
        fontWeight: 400,
        letterSpacing: 0,
      },
      sm: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(24),
        lineHeight: convertPxToRem(32),
        fontWeight: 400,
        letterSpacing: 0,
      },
    },
    title: {
      lg: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(22),
        lineHeight: convertPxToRem(28),
        fontWeight: 400,
        letterSpacing: 0,
      },
      md: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(16),
        lineHeight: convertPxToRem(24),
        fontWeight: 500,
        letterSpacing: convertPxToRem(0.15),
      },
      sm: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(14),
        lineHeight: convertPxToRem(20),
        fontWeight: 500,
        letterSpacing: convertPxToRem(0.1),
      },
    },
    body: {
      lg: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(16),
        lineHeight: convertPxToRem(24),
        fontWeight: 400,
        letterSpacing: convertPxToRem(0.5),
      },
      md: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(14),
        lineHeight: convertPxToRem(20),
        fontWeight: 400,
        letterSpacing: convertPxToRem(0.25),
      },
      sm: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(12),
        lineHeight: convertPxToRem(16),
        fontWeight: 400,
        letterSpacing: convertPxToRem(0.4),
      },
    },
    label: {
      lg: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(14),
        lineHeight: convertPxToRem(20),
        fontWeight: 500,
        letterSpacing: convertPxToRem(0.1),
      },
      md: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(12),
        lineHeight: convertPxToRem(16),
        fontWeight: 500,
        letterSpacing: convertPxToRem(0.5),
      },
      sm: {
        fontFamily: "$sans",
        fontSize: convertPxToRem(11),
        lineHeight: convertPxToRem(16),
        fontWeight: 500,
        letterSpacing: convertPxToRem(0.5),
      },
    },
  },
  {
    fonts: {
      icons: "'Material Symbols Outlined'",
      sans: "Roboto, sans-serif",
      serif: "'Roboto Serif', serif",
      mono: "'Roboto Mono', monospace",
    },
  }
);
