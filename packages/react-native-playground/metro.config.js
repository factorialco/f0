const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");
const { withStorybook } = require("@storybook/react-native/metro/withStorybook");

const config = getDefaultConfig(__dirname);

config.resolver.disableHierarchicalLookup = true;

// First apply NativeWind
const nativeWindConfig = withNativeWind(config, {
  input: "./global.css",
  inlineRem: 16,
});

// Then wrap with Storybook
module.exports = withStorybook(nativeWindConfig, {
  // Set to true to enable storybook
  enabled: false,
  // Path to your storybook config
  configPath: path.resolve(__dirname, "./.storybook"),
});
