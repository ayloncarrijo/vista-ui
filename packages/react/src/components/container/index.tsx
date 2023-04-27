import { styled } from "@vista-ui/core";

export type ContainerProps = React.ComponentProps<typeof Container>;

export const Container = styled("div", {
  maxWidth: "$container",
  px: "$16",
  mx: "auto",
});
