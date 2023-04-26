import { capitalize } from "@ayloncarrijo/utilities";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { typography } from "@you-ui/core";
import React from "react";
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
    prose: false,
  },
  argTypes: {
    typography: {
      options: typography.tokens,
      control: { type: "select" },
    },
  },
};

export const Prose: StoryObj<TextProps> = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur earum fugit vitae explicabo quis quo possimus nisi nostrum atque omnis pariatur, nemo dolor perferendis accusamus ratione excepturi cumque perspiciatis.",
    prose: true,
  },
};

export const Typographies: StoryFn<TextProps> = (props) => (
  <Box css={{ display: "grid", gap: "$8" }}>
    {typography.roles.map((role) => (
      <React.Fragment key={role}>
        <Text {...props} typography={`${role}Lg`}>
          {capitalize(role)}
        </Text>
        <Text {...props} typography={`${role}Md`}>
          {capitalize(role)}
        </Text>
        <Text {...props} typography={`${role}Sm`}>
          {capitalize(role)}
        </Text>
      </React.Fragment>
    ))}
  </Box>
);

Typographies.parameters = {
  controls: { hideNoControlsWarning: true },
};
