import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Text, type TextProps } from ".";
import { Box } from "../box";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
};

export default meta;

export const Typographies: StoryFn<TextProps> = (props) => (
  <Box css={{ display: "grid", gap: "$8" }}>
    <Text typography="displayLg" {...props}>
      Display Large
    </Text>
    <Text typography="displayMd" {...props}>
      Display Medium
    </Text>
    <Text typography="displaySm" {...props}>
      Display Small
    </Text>
    <Text typography="headlineLg" {...props}>
      Headline Large
    </Text>
    <Text typography="headlineMd" {...props}>
      Headline Medium
    </Text>
    <Text typography="headlineSm" {...props}>
      Headline Small
    </Text>
    <Text typography="titleLg" {...props}>
      Title Large
    </Text>
    <Text typography="titleMd" {...props}>
      Title Medium
    </Text>
    <Text typography="titleSm" {...props}>
      Title Small
    </Text>
    <Text typography="bodyLg" {...props}>
      Body Large
    </Text>
    <Text typography="bodyMd" {...props}>
      Body Medium
    </Text>
    <Text typography="bodySm" {...props}>
      Body Small
    </Text>
    <Text typography="labelLg" {...props}>
      Label Large
    </Text>
    <Text typography="labelMd" {...props}>
      Label Medium
    </Text>
    <Text typography="labelSm" {...props}>
      Label Small
    </Text>
  </Box>
);

Typographies.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Prose: StoryObj<TextProps> = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur earum fugit vitae explicabo quis quo possimus nisi nostrum atque omnis pariatur, nemo dolor perferendis accusamus ratione excepturi cumque perspiciatis.",
    prose: true,
  },
};
