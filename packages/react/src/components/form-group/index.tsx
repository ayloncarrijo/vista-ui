import { styled } from "@vista-ui/core";

export type FormGroupProps = React.ComponentProps<typeof FormGroup>;

export const FormGroup = styled("div", {
  display: "flex",
  variants: {
    orientation: {
      column: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: "$32",
      },
    },
    indent: {
      true: {
        pl: "$32",
      },
    },
  },
  defaultVariants: {
    orientation: "column",
  },
});
