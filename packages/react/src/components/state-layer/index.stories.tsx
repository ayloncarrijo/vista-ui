import type { Meta, StoryFn } from "@storybook/react";
import { StateLayer, stateLayerHook } from ".";
import { Box } from "../box";

const meta: Meta = {
  title: "Components/StateLayer",
};

export default meta;

export const Default: StoryFn = () => (
  <Box
    as="button"
    css={{
      width: "$256",
      height: "$256",
      p: "$16",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      typography: "$labelLg",
      borderRadius: "$lg",
      borderWidth: "$1",
      borderColor: "$outline",
      color: "$primary",
      ...stateLayerHook,
    }}
  >
    Activate a state by hovering, clicking, or focusing
    <StateLayer />
  </Box>
);

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};