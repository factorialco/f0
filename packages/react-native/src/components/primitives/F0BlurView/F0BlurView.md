# F0BlurView

Blur primitive for the F0 React Native system.

Wraps [`expo-blur`](https://docs.expo.dev/versions/latest/sdk/blur-view/) with className support via UniWind. Used by F0 components that need blurred background layers (e.g. `F0Card` image backdrop).

## Usage

<!-- prettier-ignore -->
```tsx
import { F0BlurView } from "@factorialco/f0-react-native"

<F0BlurView intensity={40} tint="default" style={StyleSheet.absoluteFill} />
```

> **Positioning:** Always use `style={StyleSheet.absoluteFill}` (or an explicit `style` object) for
> absolute overlays — never rely on `className="absolute inset-0"`. UniWind does not guarantee
> positional styles are applied reliably on `F0BlurView`.

Blurred image backdrop example:

<!-- prettier-ignore -->
```tsx
<View style={{ position: "relative", height: 160, overflow: "hidden", borderRadius: 12 }}>
  <F0Image source={{ uri: imageUrl }} style={StyleSheet.absoluteFill} />
  <F0BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill} />
  <F0Text variant="body-md-semibold" color="inverse" className="p-4">
    Caption over blur
  </F0Text>
</View>
```

Content rendered as children of `F0BlurView` appears **on top of** the blur:

<!-- prettier-ignore -->
```tsx
<F0BlurView
  intensity={80}
  tint="default"
  style={StyleSheet.absoluteFill}
  className="items-center justify-center gap-3 p-6"
>
  <F0Text variant="heading-sm">Restricted content</F0Text>
  <F0Button label="Request access" onPress={onPress} />
</F0BlurView>
```

## Props

| Prop                     | Type                     | Default     | Description                                                         |
| ------------------------ | ------------------------ | ----------- | ------------------------------------------------------------------- |
| `intensity`              | `number` (1–100)         | `40`        | Blur strength                                                       |
| `tint`                   | `BlurTint`               | `"default"` | Color tint applied over the blur                                    |
| `blurReductionFactor`    | `number`                 | `4`         | Android-only: divides `intensity` to match iOS perceived blur       |
| `experimentalBlurMethod` | `ExperimentalBlurMethod` | `"none"`    | Android blur backend (see below)                                    |
| `className`              | `string`                 | —           | Tailwind utility classes for layout/sizing (not for positioning)    |
| `style`                  | `ViewStyle`              | —           | Inline style — use this for positioning (`StyleSheet.absoluteFill`) |
| `testID`                 | `string`                 | —           | Test identifier                                                     |
| `children`               | `ReactNode`              | —           | Content rendered on top of the blur layer                           |

### `BlurTint` values

Common values: `"default"`, `"light"`, `"dark"`, `"regular"`, `"prominent"`.
Full list of system material variants available on iOS via `expo-blur`.

### `experimentalBlurMethod` (Android only)

Controls the blur backend on Android. Defaults to `"none"` — a clean semi-transparent overlay — because `"dimezisBlurView"` can cause graphical artifacts (e.g. elevation shadows of children appearing as glows).

Opt in to `"dimezisBlurView"` only when the blur effect is critical and children have no elevation:

| Value                | Behaviour                                                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `"none"` _(default)_ | No blur — falls back to a semi-transparent overlay. Consistent across all Android versions.                                                  |
| `"dimezisBlurView"`  | Native blur via the [BlurView](https://github.com/Dimezis/BlurView) library. May cause graphical issues with children that have `elevation`. |

<!-- prettier-ignore -->
```tsx
// Opt-in to actual blur on Android (ensure no elevated children inside)
<F0BlurView experimentalBlurMethod="dimezisBlurView" />
```

> See the [expo-blur Android docs](https://docs.expo.dev/versions/v54.0.0/sdk/blur-view/#experimentalblurmethod) for full details.

## Accessibility

`F0BlurView` is a purely visual layer. Always ensure that text or interactive content rendered on top of a blur layer has sufficient contrast. Do not rely on blur alone for legibility.

## Platform notes

- **iOS** — full native blur via `UIVisualEffectView`. `experimentalBlurMethod` is ignored.
- **Android** — defaults to `"none"` (semi-transparent overlay) to avoid graphical artifacts. Opt in to `experimentalBlurMethod="dimezisBlurView"` for actual blur, but ensure no elevated children are inside the BlurView.
- **Web** — uses CSS `backdrop-filter: blur()`.

## File structure

```
F0BlurView/
  F0BlurView.tsx        — implementation
  F0BlurView.types.ts   — types
  index.ts              — barrel (internal only)
```
