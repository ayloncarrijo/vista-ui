import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconProps } from ".";

const meta: Meta<IconProps> = {
  title: "Components/Icon",
  component: Icon,
};

export default meta;

export const Default: StoryObj<IconProps> = {
  args: {
    children: "favorite",
    variant: "outlined",
    size: "sm",
  },
  argTypes: {
    variant: {
      options: ["outlined", "filled"] satisfies Array<IconProps["variant"]>,
      control: { type: "inline-radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"] satisfies Array<IconProps["size"]>,
      control: { type: "inline-radio" },
    },
  },
};
