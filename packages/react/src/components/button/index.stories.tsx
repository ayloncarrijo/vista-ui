import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from ".";
import { Box } from "../box";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
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

export default meta;

const Template: StoryFn<ButtonProps> = (props) => (
  <Box css={{ display: "flex", flexWrap: "wrap", gap: "$8" }}>
    <Button {...props} />
    <Button {...props} startIcon="favorite" />
    <Button {...props} endIcon="favorite" />
    <Button {...props} disabled />
    <Button {...props} disabled startIcon="favorite" />
    <Button {...props} disabled endIcon="favorite" />
    <Button {...props} loading />
  </Box>
);

Template.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: "filled",
    startIcon: "favorite",
    endIcon: "",
    fullWidth: false,
    loading: false,
    disabled: false,
  },
};

export const Elevated = Template.bind({});

Elevated.args = {
  variant: "elevated",
};

Elevated.argTypes = Template.argTypes;

export const Filled = Template.bind({});

Filled.args = {
  variant: "filled",
};

Filled.argTypes = Template.argTypes;

export const Tonal = Template.bind({});

Tonal.args = {
  variant: "tonal",
};

Tonal.argTypes = Template.argTypes;

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
};

Outlined.argTypes = Template.argTypes;

export const Text = Template.bind({});

Text.args = {
  variant: "text",
};

Text.argTypes = Template.argTypes;
