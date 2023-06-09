import { styled } from "../../utils/styled";

export type ContainerProps = React.ComponentProps<typeof Container>;

export const Container = styled("div", {
  maxWidth: "$md",
  px: "$16",
  mx: "auto",
});
