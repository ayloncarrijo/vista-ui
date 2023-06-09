import type { Meta, StoryFn } from "@storybook/react";
import { StateLayer } from ".";
import { stateLayerHook } from "../../css";
import { Box } from "../box";

const meta: Meta = {
  title: "Components/StateLayer",
};

export default meta;

export const Default: StoryFn = () => (
  <Box
    asChild
    css={{
      width: "$256",
      height: "$256",
      p: "$16",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      typography: "$labelLg",
      borderRadius: "$lg",
      borderWidth: "$1",
      borderColor: "$outline",
      color: "$primary",
      ...stateLayerHook,
    }}
  >
    <button type="button">
      Activate a state by hovering, clicking, or focusing
      <StateLayer />
    </button>
  </Box>
);

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
