import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, type CheckboxProps } from ".";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default meta;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    checked: false,
    error: false,
    disabled: false,
  },
  argTypes: {
    checked: {
      options: [false, true, "indeterminate"],
      control: { type: "inline-radio" },
    },
  },
};
