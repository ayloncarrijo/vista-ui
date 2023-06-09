import type { Css } from "@vista-ui/core";
import { StateLayer } from "./components/state-layer";

export const iconButtonShape: Css = {
  width: "$40",
  height: "$40",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$full",
  userSelect: "none",
  outlineOffset: 0,
};

export const stateLayerHook: Css = {
  [`&:hover ${String(StateLayer)}`]: {
    opacity: "$hover",
  },
  [`&:active ${String(StateLayer)}`]: {
    opacity: "$pressed",
  },
  [`&:focus-visible ${String(StateLayer)}`]: {
    opacity: "$focus",
  },
};
