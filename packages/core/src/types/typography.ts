import type { ThemeTokens, TokenValue } from "./stitches";

export type TypographyCssProperty =
  | "fontFamily"
  | "fontSize"
  | "lineHeight"
  | "fontWeight"
  | "letterSpacing";

export type TypographyScale =
  | "fonts"
  | "fontSizes"
  | "fontWeights"
  | "letterSpacings"
  | "lineHeights";

export type TypographyRole =
  | "display"
  | "headline"
  | "title"
  | "body"
  | "label";

export type TypographySize = "sm" | "md" | "lg";

export type TypographyToken = `${TypographyRole}${Capitalize<TypographySize>}`;

export type TypographyTokens = Record<TypographyToken, TokenValue>;

export type TypographyStyles = Record<TypographyCssProperty, TokenValue>;

export type TypographyScales<
  Tokens extends ThemeTokens = ThemeTokens,
  Scales extends Partial<TypographyScales> = Record<
    TypographyScale,
    ThemeTokens
  >
> = {
  [Scale in TypographyScale]: Tokens & Scales[Scale];
};

export type Typographies = Record<
  TypographyRole,
  Record<TypographySize, TypographyStyles>
>;
