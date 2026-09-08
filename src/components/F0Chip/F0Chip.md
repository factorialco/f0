# F0Chip

Compact semantic chip for the F0 React Native design system.

## Overview

`F0Chip` is the React Native replacement for `OneChip`.

It keeps the existing RN/web-aligned API shape:

- `label`
- `variant`
- `onPress`
- `onClose`

And this migration adds parity with the current web chip for:

- `avatar`
- `deactivated`

`avatar` and `icon` are mutually exclusive by type.

## Architecture

- Uses `PressableFeedback` for the interactive chip surface when `onPress` is provided.
- Uses `F0Avatar` directly for leading avatar rendering.
- Uses `F0Icon` for both the leading icon and the close affordance.
- Uses `F0Text` for the label, with semantic color plus reduced opacity for `deactivated`.
- Keeps the outer layout non-interactive when only `onClose` is provided, matching the web behavior more closely.

## Usage

<!-- prettier-ignore -->
```tsx
import { AppIcons } from "@factorialco/f0-react-native/icons"
import { F0Chip } from "@factorialco/f0-react-native"

<F0Chip label="Label" />

<F0Chip label="Selected" variant="selected" onPress={() => {}} />

<F0Chip label="With icon" icon={AppIcons.Placeholder} />

<F0Chip
  label="Alex Taylor"
  avatar={{
    type: "person",
    firstName: "Alex",
    lastName: "Taylor",
  }}
/>

<F0Chip
  label="Deactivated user"
  deactivated
  avatar={{
    type: "person",
    firstName: "Deactivated",
    lastName: "User",
    deactivated: true,
  }}
/>
```

## Props

| Prop          | Type                      | Default     | Description                                            |
| ------------- | ------------------------- | ----------- | ------------------------------------------------------ |
| `label`       | `string`                  | required    | Visible chip label                                     |
| `variant`     | `"default" \| "selected"` | `"default"` | Visual chip state                                      |
| `onPress`     | `() => void`              | `undefined` | Optional press handler for the chip surface            |
| `onClose`     | `() => void`              | `undefined` | Optional close action rendered as a separate button    |
| `deactivated` | `boolean`                 | `false`     | Reduces label emphasis                                 |
| `avatar`      | `F0AvatarVariant`         | `undefined` | Leading avatar content; mutually exclusive with `icon` |
| `icon`        | `IconType`                | `undefined` | Leading icon content; mutually exclusive with `avatar` |
| `testID`      | `string`                  | `undefined` | Testing hook for the chip root                         |

## Variants

- `default`
- `selected`

Layout adapts automatically:

- avatar chips reduce the left padding
- non-person avatars use a less rounded container shape
- closeable chips reduce the right padding to preserve the close affordance spacing

## Runtime Behavior

- `avatar` and `icon` cannot be passed together at the type level.
- When `onPress` is omitted, the chip root renders as a non-interactive `View`.
- When `onClose` is provided, the close icon is rendered as an independent button and stops propagation to the chip surface.
- `deactivated` only reduces the label emphasis; it does not disable interaction.

## Accessibility

- Interactive chips expose `accessibilityRole="button"` on the root surface.
- Interactive chips expose `accessibilityState.selected` when `variant="selected"`.
- The close affordance exposes `accessibilityRole="button"` and `accessibilityLabel="Close"`.

## Testing

- Snapshot coverage for key visual states.
- Behavior coverage for `onPress` and `onClose`.
- Accessibility assertions for interactive chips and the close affordance.

## File Structure

```text
src/components/F0Chip/
  F0Chip.tsx
  F0Chip.types.ts
  F0Chip.styles.ts
  F0Chip.md
  index.ts
  __tests__/F0Chip.spec.tsx
```
