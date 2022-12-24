module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        }
      }
    }
  ],
  core: {
    builder: 'webpack5',
  },
}