import type { Meta, StoryFn } from "@storybook/react";
import { Radio, type RadioProps } from ".";
import { FormGroup } from "../form-group";
import { RadioGroup } from "../radio-group";

const meta: Meta<RadioProps> = {
  title: "Components/Radio",
  component: Radio,
  args: {
    error: false,
    disabled: false,
  },
};

export default meta;

export const Default: StoryFn<RadioProps> = (props) => {
  const values = ["Apple", "Banana", "Orange"];

  return (
    <RadioGroup defaultValue="Apple">
      <FormGroup>
        {values.map((value) => (
          <Radio {...props} key={value} value={value} label={value} />
        ))}
      </FormGroup>
    </RadioGroup>
  );
};
