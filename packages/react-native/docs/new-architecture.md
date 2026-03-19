# New Architecture (Fabric/TurboModules) compatibility

`@factorialco/f0-react-native` is a **JS-only** React Native UI library (no native modules shipped). It is **New Architecture only** and supports **Expo SDK 54+ only**.

## What “compatible” means for this package

- It does **not** rely on legacy native APIs like `UIManager`, `NativeModules`, `requireNativeComponent`, or custom native event emitters.
- It uses supported primitives (`Pressable`, `Text`, `View`) and well-supported libraries (`react-native-svg`, `react-native-reanimated`).
- The host app can enable **Fabric** and **TurboModules** without needing special native integration for this package.

## Host app requirements (important)

### Reanimated

Reanimated 4 must be correctly configured in the **host app**:

- `babel.config.js`:
  - Include `"react-native-worklets/plugin"`
  - Include `"react-native-reanimated/plugin"` **as the last plugin**
- Install the compatible version required by your Expo/RN version.

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

- Ensure `"react-native-reanimated/plugin"` is present and **last** in the host app Babel config.
- Clear bundler caches and rebuild the native app (new arch toggles require a rebuild).

### Styles not applied

- Ensure Metro includes `"css"` in `resolver.sourceExts`.
- Ensure `global.css` includes the `@source` entries for this package.
