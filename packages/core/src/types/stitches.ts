import type * as Stitches from "@stitches/core";
import type { config } from "../stitches.config";

export type TokenName = string | number;

export type TokenValue = boolean | number | string;

export type ThemeTokens = Record<TokenName, TokenValue>;

export type Css = Stitches.CSS<typeof config>;

export type Media = typeof config.media;
