import type { Meta } from "@storybook/react";
import { TextInput, type TextInputProps } from ".";

const meta: Meta<TextInputProps> = {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    id: "vista-ui-input",
    as: "input",
    label: "E-mail",
    helper: "A helper text",
    error: "",
    startIcon: "",
    endIcon: "",
    disabled: false,
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    as: {
      options: ["input", "textarea"],
      control: { type: "inline-radio" },
    },
    maxLength: {
      type: "number",
    },
  },
};

export default meta;

export const Default = {};
