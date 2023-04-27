import { styled } from "@vista-ui/core";

export type StateLayerProps = React.ComponentProps<typeof StateLayer>;

export const StateLayer = styled("div", {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  borderRadius: "inherit",
  backgroundColor: "CurrentColor",
  transition: "opacity $easeOut",
  opacity: 0,
});
