import {
  capitalize,
  createFromEntries,
  getEntries,
  getKeys,
} from "@ayloncarrijo/utilities";
import type { ThemeTokens, TokenValue } from "../types/stitches";
import type {
  TypographyCssProperty,
  TypographyDefinition,
  TypographyMeta,
  TypographyScale,
  TypographyScales,
  TypographyToken,
} from "../types/typography";

const mapTokensToPropertyValue = <T extends TypographyDefinition>(
  typographies: T,
  property: TypographyCssProperty
): Record<TypographyToken<T>, TokenValue> => {
  return createFromEntries(
    getEntries(typographies).flatMap(([role, sizes]) =>
      getEntries(sizes).map(
        ([size, styles]) =>
          [`${role}${capitalize(size)}`, styles[property]] as const
      )
    )
  );
};

export const createTypographyScales = <
  T extends TypographyDefinition,
  Scales extends Partial<Record<TypographyScale, ThemeTokens>>
>(
  typographies: T,
  scales?: Scales
): TypographyScales<T, Scales> & { typography: TypographyMeta<T> } => {
  const roles = getKeys(typographies);

  const sizes = ["lg", "md", "sm"] as const;

  const tokens = roles.flatMap((role) =>
    sizes.map((size) => `${String(role)}${capitalize(size)}` as const)
  );

  return {
    typography: {
      roles,
      sizes,
      tokens,
    },
    ...createFromEntries(
      getEntries({
        fonts: "fontFamily",
        fontSizes: "fontSize",
        fontWeights: "fontWeight",
        letterSpacings: "letterSpacing",
        lineHeights: "lineHeight",
      } as const).map(([scale, property]) => [
        scale,
        {
          ...mapTokensToPropertyValue(typographies, property),
          ...scales?.[scale],
        },
      ])
    ),
  };
};
