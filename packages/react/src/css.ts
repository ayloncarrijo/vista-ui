import type { Css } from "@you-ui/core";
import { StateLayer } from "./components/state-layer";

export const iconButtonShape: Css = {
  width: "$40",
  height: "$40",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$full",
  userSelect: "none",
  "&::before": {
    content: "",
    position: "absolute",
    inset: "-$4",
  },
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
