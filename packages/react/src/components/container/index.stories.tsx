import type { Meta, StoryObj } from "@storybook/react";
import { Container, type ContainerProps } from ".";
import { Box } from "../box";

const meta: Meta<ContainerProps> = {
  title: "Components/Container",
  component: Container,
  args: {
    children: (
      <Box
        css={{
          backgroundColor: "$primaryContainer",
          p: "$16",
          borderRadius: "$xs",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur
        obcaecati sint sit possimus molestiae provident fugit saepe quia hic
        iste voluptatum omnis, itaque harum exercitationem voluptatibus porro
        necessitatibus aliquid?
      </Box>
    ),
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

export const Default: StoryObj<ContainerProps> = {};
