module.exports = function (api) {
  // The published library build (react-native-builder-bob) must NOT run the
  // Reanimated/Worklets Babel plugin: consuming host apps workletize callbacks
  // at bundle time with their own react-native-worklets (same pattern as
  // gesture-handler). The bundled playground, however, IS a host app and must
  // workletize its own Reanimated worklets — otherwise Reanimated 4 throws
  // "[Worklets] Failed to create a worklet" at runtime.
  //
  // So we add react-native-worklets/plugin only when the caller is Metro (i.e.
  // when bundling the playground app), and keep it off for the bob library
  // build and for Jest (which mocks Reanimated).
  const isAppBundle = api.caller(
    (caller) => !!caller && (caller.name === "metro" || !!caller.platform),
  );

  api.cache.using(() => isAppBundle);

  return {
    presets: [
      // Disable babel-preset-expo's automatic Reanimated/Worklets plugin; we add
      // react-native-worklets/plugin explicitly below for app bundles only.
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
    // react-native-worklets/plugin must be last. Only enabled for app bundles.
    plugins: isAppBundle ? ["react-native-worklets/plugin"] : [],
  };
};
