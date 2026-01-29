module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
          unstable_transformImportMeta: true,
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      require.resolve("react-native-worklets-core/plugin"),
      require.resolve("react-native-reanimated/plugin"), // MUST be last
    ],
  };
};
