import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconProps } from ".";

const meta: Meta<IconProps> = {
  title: "Components/Icon",
  component: Icon,
  args: {
    children: "favorite",
    variant: "outlined",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["outlined", "filled"] satisfies Array<IconProps["variant"]>,
      control: { type: "inline-radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"] satisfies Array<
        IconProps["size"]
      >,
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

export const Default: StoryObj<IconProps> = {};
