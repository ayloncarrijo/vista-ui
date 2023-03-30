/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  webpackFinal: async (config) => {
    config.module.rules
      .filter((rule) => rule.test?.test(".svg"))
      .forEach((rule) => {
        rule.exclude = /\.svg$/;
      });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  typescript: {
    reactDocgen: false,
  },
};

export default config;
