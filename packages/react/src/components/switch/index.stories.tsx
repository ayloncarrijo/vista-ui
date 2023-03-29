import type { Meta, StoryObj } from "@storybook/react";
import { Switch, type SwitchProps } from ".";

const meta: Meta<SwitchProps> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

export const Default: StoryObj<SwitchProps> = {
  args: {
    checked: false,
    disabled: false,
  },
};
