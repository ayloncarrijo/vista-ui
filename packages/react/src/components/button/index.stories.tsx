import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from ".";
import { Box } from "../box";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: "filled",
    startIcon: "favorite",
    endIcon: "",
    fullWidth: false,
    loading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        "elevated",
        "filled",
        "tonal",
        "outlined",
        "text",
      ] satisfies Array<ButtonProps["variant"]>,
      control: { type: "inline-radio" },
    },
  },
};

const Template: StoryFn<ButtonProps> = (props) => (
  <Box css={{ display: "flex", gap: "$8" }}>
    <Button {...props} />
    <Button {...props} startIcon="favorite" />
    <Button {...props} endIcon="favorite" />
    <Button {...props} disabled />
    <Button {...props} disabled startIcon="favorite" />
    <Button {...props} disabled endIcon="favorite" />
    <Button {...props} loading />
  </Box>
);

export const Elevated = Template.bind({});

Elevated.args = {
  variant: "elevated",
};

export const Filled = Template.bind({});

Filled.args = {
  variant: "filled",
};

export const Tonal = Template.bind({});

Tonal.args = {
  variant: "tonal",
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});

Text.args = {
  variant: "text",
};
