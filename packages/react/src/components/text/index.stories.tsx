import { capitalize } from "@ayloncarrijo/utilities";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { typography } from "@you-ui/core";
import { Text, type TextProps } from ".";
import { Box } from "../box";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
};

export default meta;

export const Default: StoryObj<TextProps> = {
  args: {
    children: "Text",
    typography: "bodyLg",
  },
  argTypes: {
    typography: {
      options: typography.tokens,
      control: { type: "select" },
    },
  },
};

export const Typographies: StoryFn<TextProps> = (props) => (
  <Box css={{ display: "grid", gap: "$8" }}>
    {typography.tokens.map((token) => (
      <Text {...props} key={token} typography={token}>
        {capitalize(token)}
      </Text>
    ))}
  </Box>
);

Typographies.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Prose: StoryObj<TextProps> = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur earum fugit vitae explicabo quis quo possimus nisi nostrum atque omnis pariatur, nemo dolor perferendis accusamus ratione excepturi cumque perspiciatis.",
    prose: true,
  },
};
