module.exports = {
  presets: [
    // Disable the Reanimated/Worklets Babel plugin during the library build.
    // The host app's Metro pipeline will workletize callbacks at bundle time
    // using its own react-native-worklets version (same pattern as gesture-handler).
    ["babel-preset-expo", { reanimated: false }],
    [
      "@babel/preset-typescript",
      {
        // Allow parsing of TypeScript 5.0+ syntax including const type parameters
        allowNamespaces: true,
        allowDeclareFields: true,
      },
    ],
  ],
  plugins: [],
};
