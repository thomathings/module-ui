/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-css-modules",
  ],
  core: {
    builder: "webpack5",
  },
};
