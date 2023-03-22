import { baseStyles } from "@you-ui/core";

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        {baseStyles()}
        <Story />
      </>
    ),
  ],
};

export default preview;
