import type * as Material from "@importantimport/material-color-utilities";

export interface Rgb {
  r: number;
  g: number;
  b: number;
}

export interface Rgba extends Rgb {
  a: number;
}

export type Hexadecimal = `#${string}`;

export type Color = Hexadecimal | Rgb;

export type SchemeType = "light" | "dark";

export type MainColor = "primary" | "secondary" | "tertiary";

export type HelperColor = "warning" | "success" | "error" | "info";

export type ColorGroup<T extends string, V> = {
  [K in T as
    | K
    | `on${Capitalize<K>}`
    | `${K}Container`
    | `on${Capitalize<K>}Container`]: V;
};

export type ColorScheme = ColorGroup<HelperColor, string> &
  Record<keyof ReturnType<Material.Scheme["toJSON"]>, string> & {
    surface1: string;
    surface2: string;
    surface3: string;
    surface4: string;
    surface5: string;
  };

export type ColorSchemes = Record<SchemeType, ColorScheme>;

export type CustomColors = ColorGroup<HelperColor, number> &
  Partial<ColorGroup<"secondary" | "tertiary", number>>;

export interface SourceColors {
  primary: Color;
  secondary?: Color;
  tertiary?: Color;
  warning?: Color;
  success?: Color;
  error?: Color;
  info?: Color;
}
