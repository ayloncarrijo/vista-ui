import type { Meta } from "@storybook/react";
import { Divider, type DividerProps } from ".";

const meta: Meta<DividerProps> = {
  title: "Components/Divider",
  component: Divider,
  args: {
    children: "Text",
  },
};

export default meta;

export const Default = {};
