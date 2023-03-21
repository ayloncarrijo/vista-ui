import {
  capitalize,
  createFromEntries,
  getEntries,
} from "@ayloncarrijo/utilities";
import type { Css } from "../types/stitches";
import type {
  Typographies,
  TypographyCssProperty,
  TypographyScales,
  TypographyToken,
  TypographyTokens,
} from "../types/typography";

const mapTokensToPropertyValue = (
  typographies: Typographies,
  property: TypographyCssProperty
): TypographyTokens => {
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
  Scales extends Partial<TypographyScales>
>(
  typographies: Typographies,
  scales?: Scales
): TypographyScales<TypographyTokens, Scales> => {
  return createFromEntries(
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
  );
};

export const createTypographyVariants = (): Record<TypographyToken, Css> => {
  const roles = ["display", "headline", "title", "body", "label"] as const;

  const sizes = ["sm", "md", "lg"] as const;

  const tokens = roles.flatMap((role) =>
    sizes.map((size) => `${role}${capitalize(size)}` as const)
  );

  return createFromEntries(
    tokens.map((token) => [token, { typography: `$${token}` }] as const)
  );
};
