# F0Progress

Determinate progress indicator for the F0 React Native design system.

## Overview

`F0Progress` ships a single API with two visual variants:

- `linear`
- `circular`

It also supports semantic status colors:

- `info`
- `positive`
- `warning`
- `critical`

Version 1 is determinate-only and accepts a `value` clamped between `0` and `max`. Invalid values are normalized internally.
Circular semantic sizes are also supported for the circular variant:

- `default` (`28px`)
- `small` (`20px`)

## Architecture

- Shared normalization logic clamps values to the `0..max` range and derives a percentage for rendering.
- Shared Reanimated timing config scales perceptual duration with the percentage delta.
- Linear uses a full-width fill and animates `transform: scaleX(...)` from the left edge instead of animating layout width.
- Circular uses a circular `View` as the semantic background and renders the animated `react-native-svg` arc inside it.
- Optional `label` renders adjacent to the indicator, aligned with the web progress API.
- Semantic tokens drive linear classes and circular SVG fills.

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Progress } from "@factorialco/f0-react-native"

<F0Progress type="linear" value={50} accessibilityLabel="Upload progress" />

<F0Progress
  type="linear"
  value={50}
  max={80}
  status="positive"
  label="50 / 80"
  accessibilityLabel="Upload progress"
/>

<F0Progress
  type="circular"
  value={75}
  size="default"
  accessibilityLabel="Completion progress"
/>
```

## Props

| Prop                 | Type                     | Default     | Description                                           |
| -------------------- | ------------------------ | ----------- | ----------------------------------------------------- |
| `type`               | `"linear" \| "circular"` | required    | Selects the visual progress variant                   |
| `value`              | `F0ProgressValue`        | required    | Determinate progress value, clamped to `0..max`       |
| `max`                | `F0ProgressMax`          | `100`       | Maximum determinate value used to derive percentage   |
| `size`               | `F0ProgressCircularSize` | `"default"` | Circular-only semantic size (`default` or `small`)    |
| `status`             | `F0ProgressStatus`       | `"info"`    | Semantic color status for track and fill              |
| `label`              | `string`                 | `undefined` | Optional visible label rendered next to the indicator |
| `accessibilityLabel` | `string`                 | `undefined` | Optional spoken label for assistive technologies      |
| `testID`             | `string`                 | `undefined` | Testing hook for the root element                     |

## Runtime Behavior

- `NaN`, `Infinity`, and `-Infinity` normalize to `0`.
- Values below `0` clamp to `0`.
- Values above `max` clamp to `max`.
- Non-finite or non-positive `max` values fall back to `100`.
- Reduced motion is delegated to Reanimated via `ReduceMotion.System`.
- Circular background uses the active semantic fill color at `10%` opacity.

## Accessibility

- Uses `accessibilityRole="progressbar"`.
- Exposes `accessibilityValue={{ min: 0, max, now: normalizedValue }}`.
- Accepts a custom `accessibilityLabel` for screen reader context.

## Testing

- Snapshot coverage for both variants.
- Contract tests for normalization and accessibility.
- Circular SVG rendering assertions for track and progress primitives.

## File Structure

```text
src/components/F0Progress/
  F0Progress.tsx
  F0Progress.types.ts
  F0Progress.styles.ts
  F0Progress.md
  index.ts
  __tests__/F0Progress.spec.tsx
```
