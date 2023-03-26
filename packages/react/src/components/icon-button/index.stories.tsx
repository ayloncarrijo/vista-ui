import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import React from "react";
import { IconButton, type IconButtonProps } from ".";
import { Box } from "../box";

const meta: Meta<IconButtonProps> = {
  title: "Components/IconButton",
  component: IconButton,
  decorators: [
    (Story) => (
      <Box css={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    icon: "favorite",
    label: "Add to favorites",
  },
  argTypes: {
    variant: {
      options: ["filled", "tonal", "outlined", "standard"] satisfies Array<
        IconButtonProps["variant"]
      >,
      control: { type: "inline-radio" },
    },
    toggle: {
      options: ["no-toggle", "unselected", "selected"] satisfies Array<
        IconButtonProps["toggle"]
      >,
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

const Template: StoryFn<IconButtonProps> = (props) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Box css={{ display: "flex", gap: "$8" }}>
      <IconButton {...props} toggle="no-toggle" />
      <IconButton
        {...props}
        onClick={() => {
          setSelected(!selected);
        }}
        label="Toggle selection"
        toggle={selected ? "selected" : "unselected"}
      />
      <IconButton {...props} toggle="unselected" disabled />
      <IconButton {...props} toggle="selected" disabled />
    </Box>
  );
};

Template.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
  toggle: {
    table: {
      disable: true,
    },
  },
};

export const Default: StoryObj<IconButtonProps> = {
  args: {
    variant: "filled",
    toggle: "no-toggle",
    disabled: false,
  },
};

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

export const Standard = Template.bind({});

Standard.args = {
  variant: "standard",
};

Standard.argTypes = Template.argTypes;
