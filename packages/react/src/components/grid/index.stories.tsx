import type { Meta } from "@storybook/react";
import { Grid, type GridProps } from ".";
import { Box } from "../box";

const meta: Meta<GridProps> = {
  title: "Components/Grid",
  component: Grid,
  args: {
    children: Array(12)
      .fill(null)
      .map((_, index) => (
        <Box
          key={index}
          css={{
            backgroundColor: "$primary",
            color: "$onPrimary",
            textAlign: "center",
          }}
        >
          {index + 1}
        </Box>
      )),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default = {};
