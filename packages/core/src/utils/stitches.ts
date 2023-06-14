import {
  createFromEntries,
  getEntries,
  isString,
} from "@ayloncarrijo/utilities";
import type { DefaultThemeMap } from "@stitches/core";

export const addRgbToColorToken = (value: string): string =>
  value.replace(/(\$.*?(?=$|\s))/g, "rgb($1)");

export const createRgbUtilities = (
  themeMap: DefaultThemeMap
): Record<string, (value: unknown) => Record<string, unknown>> =>
  createFromEntries(
    getEntries(themeMap)
      .filter(([, value]) => value === "colors")
      .map(([key]) => [
        key,
        (value: unknown) => ({
          [key]: isString(value) ? addRgbToColorToken(value) : value,
        }),
      ])
  );
