import { createTypographyVariants, styled } from "@you-ui/core";

export type TextProps = React.ComponentProps<typeof Text>;

export const Text = styled("p", {
  variants: {
    typography: createTypographyVariants(),
    prose: {
      true: {
        maxWidth: "$prose",
      },
    },
  },
  defaultVariants: {
    typography: "bodyLg",
  },
});
