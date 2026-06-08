# New Architecture (Fabric/TurboModules) compatibility

`@factorialco/f0-react-native` is a **JS-only** React Native UI library (no native modules shipped). It is **New Architecture only** and supports **Expo SDK 54+ only**.

## What “compatible” means for this package

- It does **not** rely on legacy native APIs like `UIManager`, `NativeModules`, `requireNativeComponent`, or custom native event emitters.
- It uses supported primitives (`Pressable`, `Text`, `View`) and well-supported libraries (`react-native-svg`, `react-native-reanimated`).
- The host app can enable **Fabric** and **TurboModules** without needing special native integration for this package.

## Host app requirements (important)

### Reanimated

Reanimated 4 must be correctly configured in the **host app**:

- Managed Expo SDK 54+ with standard `babel-preset-expo`:
  - No manual Reanimated/Worklets Babel plugins are required.
- Custom or bare React Native host app:
  - `babel.config.js` must include `"react-native-worklets/plugin"`.
  - Keep `"react-native-worklets/plugin"` **as the last plugin**.
- Install versions compatible with your Expo/RN host runtime.

### Uniwind + Tailwind CSS v4

This package uses Uniwind and ships CSS (`@factorialco/f0-react-native/styles`). Your host app must:

- Allow `css` in Metro source extensions
- Import your `global.css` and include:
  - `@import "@factorialco/f0-react-native/styles";`
  - `@source "./node_modules/@factorialco/f0-react-native/lib";`

The full setup is documented in the package [README](../README.md).

## Expo (SDK 54+) notes

Expo SDK 54 uses React Native 0.81 and **new architecture is the default direction**.

- To enable new architecture in an Expo app, set `expo.newArchEnabled` in your `app.json` / `app.config.js`.
- If you use a Dev Client / prebuild, you must rebuild after toggling new arch.

Expo SDK 53 and below are not supported by this package because they are tied to older Reanimated stacks.

## Troubleshooting

### “Worklet” / “Failed to create a worklet” / “Reanimated is not configured”

- Managed Expo SDK 54+: ensure you are using `babel-preset-expo` and have not overridden Babel in a way that removes Worklets/Reanimated preset behavior.
- Custom or bare React Native host app: ensure `"react-native-worklets/plugin"` is present and **last** in Babel plugins.
- Clear bundler caches and rebuild the native app (new arch toggles require a rebuild).

### Styles not applied

- Ensure Metro includes `"css"` in `resolver.sourceExts`.
- Ensure `global.css` includes the `@source` entries for this package.
