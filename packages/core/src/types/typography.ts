import type { typography } from "../stitches/theme";
import type { ThemeTokens, TokenValue } from "./stitches";

export type TypographyMeta<T extends TypographyDefinition> = {
  roles: ReadonlyArray<keyof T>;
  sizes: ReadonlyArray<TypographySize>;
  tokens: ReadonlyArray<TypographyToken<T>>;
};

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

export type TypographySize = "lg" | "md" | "sm";

export type TypographyToken<T extends TypographyDefinition> = `${keyof T &
  string}${Capitalize<TypographySize>}`;

export type TypographyScales<
  T extends TypographyDefinition = TypographyDefinition,
  Scales extends Partial<Record<TypographyScale, ThemeTokens>> = Partial<
    Record<TypographyScale, ThemeTokens>
  >
> = {
  [Scale in TypographyScale]: Record<TypographyToken<T>, TokenValue> &
    Scales[Scale];
};

export type TypographyStyles = Record<TypographyCssProperty, TokenValue>;

export type TypographyDefinition = Record<
  string,
  Record<TypographySize, TypographyStyles>
>;

export type TypographyMetaToken = (typeof typography)["tokens"][number];

export type TypographyMetaRole = (typeof typography)["roles"][number];
