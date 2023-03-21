import type * as Stitches from "@stitches/react";
import type * as CssUtil from "@stitches/react/types/css-util";
import type { config } from "../stitches.config";

export type Css = Stitches.CSS<typeof config>;

export type TokenName = string | number;

export type TokenValue = boolean | number | string;

export type ThemeTokens = Record<TokenName, TokenValue>;

export type PropertyValue<
  Property extends keyof CssUtil.CSSProperties,
  Config = null
> = Stitches.PropertyValue<Property, Config> & string;

export type ScaleValue<Scale, Config = null> = Stitches.ScaleValue<
  Scale,
  Config
> &
  string;
