import { styled } from "../../utils/styled";

export type GridProps = React.ComponentProps<typeof Grid>;

export const Grid = styled("div", {
  display: "grid",
  gap: "$columnGap",
  gridTemplateColumns: "repeat(4, 1fr)",
  "@sm": {
    gridTemplateColumns: "repeat(8, 1fr)",
  },
  "@md": {
    gridTemplateColumns: "repeat(12, 1fr)",
  },
});
