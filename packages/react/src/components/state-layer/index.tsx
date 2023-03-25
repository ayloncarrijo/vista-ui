import { styled, type Css } from "@you-ui/core";

export type StateLayerProps = React.ComponentProps<typeof StateLayer>;

export const StateLayer = styled("div", {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  borderRadius: "inherit",
  backgroundColor: "CurrentColor",
  transition: "$all",
  transitionProperty: "opacity",
  opacity: 0,
});

export const stateLayerHook: Css = {
  [`&:hover ${StateLayer.selector}`]: {
    opacity: "$hover",
  },
  [`&:active ${StateLayer.selector}`]: {
    opacity: "$pressed",
  },
  [`&:focus-visible ${StateLayer.selector}`]: {
    opacity: "$focus",
  },
};
