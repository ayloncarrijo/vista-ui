import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Checkbox, type CheckboxProps } from ".";
import { Box } from "../box";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    error: false,
    disabled: false,
  },
};

export default meta;

export const Default: StoryFn<CheckboxProps> = (props) => {
  const values = ["Apple", "Banana", "Orange"];

  const [checkedValues, setCheckedValues] = React.useState<Array<string>>([]);

  return (
    <Box css={{ display: "flex" }}>
      <div>
        <Checkbox
          {...props}
          label="Additions"
          checked={
            checkedValues.length > 0 && checkedValues.length < values.length
              ? "indeterminate"
              : checkedValues.length === values.length
          }
          onCheckedChange={(checked) => {
            if (checked === "indeterminate") {
              return;
            }

            if (checked) {
              setCheckedValues(values);
            } else {
              setCheckedValues([]);
            }
          }}
        />
        <Box css={{ pl: "$32", display: "grid" }}>
          {values.map((value) => (
            <Checkbox
              {...props}
              key={value}
              value={value}
              label={value}
              checked={checkedValues.includes(value)}
              onCheckedChange={(checked) => {
                if (checked === "indeterminate") {
                  return;
                }

                if (checked) {
                  setCheckedValues((state) => [...state, value]);
                } else {
                  setCheckedValues((state) =>
                    state.filter((checkedValue) => checkedValue !== value)
                  );
                }
              }}
            />
          ))}
        </Box>
      </div>
    </Box>
  );
};
