import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, type TooltipProps } from ".";
import { Box } from "../box";
import { Button } from "../button";

const meta: Meta<TooltipProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <Box css={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    children: <Button variant="tonal">Tooltip</Button>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TooltipProps> = {
  args: {
    content: "Add to favorites",
  },
};

export const LongText: StoryObj<TooltipProps> = {
  args: {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore modi consequatur dolor, libero tempore ipsa sapiente consectetur placeat nisi eaque iusto, veniam ratione. Accusantium voluptate ea at facere quibusdam?",
  },
};
