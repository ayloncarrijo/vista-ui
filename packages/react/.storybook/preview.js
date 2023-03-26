import { injectBaseStyles } from "@you-ui/core";
import { GlobalProvider } from "../src/providers/global-provider";

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
      <GlobalProvider>
        {injectBaseStyles()}
        <Story />
      </GlobalProvider>
    ),
  ],
};

export default preview;
