import type { Meta, StoryFn } from "@storybook/react";
import { Radio, type RadioProps } from ".";
import { RadioGroup } from "../radio-group";

const meta: Meta<RadioProps> = {
  title: "Components/Radio",
  component: Radio,
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="apple">
        <Story />
      </RadioGroup>
    ),
  ],
  args: {
    disabled: false,
  },
};

export default meta;

export const Default: StoryFn<RadioProps> = (props) => (
  <>
    <Radio {...props} value="apple" />
    <Radio {...props} value="banana" />
    <Radio {...props} value="orange" />
  </>
);
