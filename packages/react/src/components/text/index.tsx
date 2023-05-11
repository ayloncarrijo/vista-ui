import { createFromEntries } from "@ayloncarrijo/utilities";
import { styled, typography } from "@vista-ui/core";

export type TextProps = React.ComponentProps<typeof Text>;

export const Text = styled("p", {
  variants: {
    typography: createFromEntries(
      typography.tokens.map(
        (token) => [token, { typography: `$${token}` }] as const
      )
    ),
    prose: {
      true: {
        maxWidth: "$prose",
      },
    },
  },
});
