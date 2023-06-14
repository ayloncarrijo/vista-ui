import type { Meta, StoryFn } from "@storybook/react";
import { TextInput, type TextInputProps } from ".";

type Args = TextInputProps & {
  as: "input" | "textarea";
};

const meta: Meta<Args> = {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    id: "vista-ui-input",
    as: "input",
    type: "email",
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

export const Default: StoryFn<Args> = ({ as, ...props }) => {
  if (as === "textarea") {
    return (
      <TextInput asChild {...props}>
        <textarea />
      </TextInput>
    );
  }

  return <TextInput {...props} />;
};
