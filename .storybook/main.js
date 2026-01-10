/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.docs.mdx"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react-vite"
};

export default config;
