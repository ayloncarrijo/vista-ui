import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio, type AspectRatioProps } from ".";
import { Box } from "../box";

const meta: Meta<AspectRatioProps> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  decorators: [
    (Story) => (
      <Box css={{ width: "$384" }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    children: (
      <Box
        as="img"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        css={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
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

export const Widescreen: StoryObj<AspectRatioProps> = {
  name: "16 / 9",
  args: {
    ratio: 16 / 9,
  },
};

export const Square: StoryObj<AspectRatioProps> = {
  name: "1 / 1",
  args: {
    ratio: 1 / 1,
  },
};
