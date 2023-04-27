import { styled } from "@vista-ui/core";

export type GridProps = React.ComponentProps<typeof Grid>;

export const Grid = styled("div", {
  display: "grid",
  gap: "$16",
  gridTemplateColumns: "repeat(4, 1fr)",
  "@sm": {
    gridTemplateColumns: "repeat(8, 1fr)",
  },
  "@md": {
    gridTemplateColumns: "repeat(12, 1fr)",
  },
});
