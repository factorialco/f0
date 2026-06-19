# F0Banner

Inline status banner for React Native. Icon, text color, and background tint all derive from a semantic `level`. Built as composition over `F0AvatarAlert` + `F0Text`, with optional trailing link, action button, loading spinner, and dismiss control.

## Usage

```tsx
import { F0Banner, F0Link } from "@factorialco/f0-react-native"

<F0Banner level="warning" message="Your clock-in is still open." />

<F0Banner
  level="critical"
  message="We couldn't sync your break."
  link={<F0Link size="sm" href="https://help.factorialhr.com" external>Learn more</F0Link>}
  action={{ label: "Retry", onPress: handleRetry }}
  loading={isSyncing}
  dismissible
/>
```

## Architecture

- `F0AvatarAlert` renders the level-driven status icon (icon + color + tinted circle)
- `F0Text` renders the message with the level's semantic color
- `F0Button` powers the optional action (outline) and dismiss (ghost icon) buttons
- The loading spinner wraps React Native's native `ActivityIndicator`, tinted to the level via the `f0-icon-*` tokens (resolved with `useCSSVariable`)
- `link` is a `ReactNode` slot — the caller composes the link (e.g. `F0Link`)

## Props

| Prop            | Type                                     | Default     | Description                                                            |
| --------------- | ---------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `message`       | `string`                                 | required    | Banner message                                                         |
| `level`         | `"info" \| "warning" \| "positive" \| "critical"` | required | Drives icon, text color, and background tint                  |
| `link`          | `ReactNode`                              | `-`         | Trailing link slot (compose your own, e.g. `<F0Link size="sm" />`)     |
| `action`        | `F0BannerAction`                         | `-`         | Trailing action button (`label`, `onPress`, `loading`, `disabled`)     |
| `loading`       | `boolean`                                | `false`     | Show a trailing loading spinner tinted to the level                    |
| `dismissible`   | `boolean`                                | `false`     | Show a close button that self-removes the banner. Implied by `onDismiss` |
| `onDismiss`     | `() => void`                             | `-`         | Called after the user dismisses the banner                             |
| `dismissLabel`  | `string`                                 | `"Dismiss"` | Accessible label for the dismiss button                                |
| `numberOfLines` | `number`                                 | `-`         | Clamp the message to N lines. Defaults to unbounded (wraps)            |
| `testID`        | `string`                                 | `-`         | Test id                                                                |

## Levels

Each level maps directly to the F0 semantic tokens:

- `info` — blue (`f0-*-info`)
- `warning` — orange (`f0-*-warning`)
- `positive` — green (`f0-*-positive`)
- `critical` — red (`f0-*-critical`)

## Runtime behavior

- The action button is always rendered as `variant="outline"` `size="sm"` — the banner owns those so banners stay visually consistent
- Dismissing is **manual only**: pressing the close button hides the banner (`return null`) and fires `onDismiss`. The banner never auto-hides on a timer — that behavior belongs to a future toast.
- Once self-dismissed, the instance stays hidden until it unmounts/remounts

## Accessibility

- The container uses `accessibilityRole="alert"`
- The dismiss button is an icon-only `F0Button` whose `dismissLabel` is the screen-reader name

## Testing

- Snapshot coverage for the default and all four levels
- Behavior tests for the link slot, action button, loading spinner, and dismiss (self-removal + `onDismiss`)

## File structure

```
src/components/F0Banner/
├── F0Banner.tsx
├── F0Banner.types.ts
├── F0Banner.styles.ts
├── F0Banner.md
├── index.ts
└── __tests__/
    └── F0Banner.spec.tsx
```
