# F0Checkbox

Accessible checkbox primitive for the F0 React Native system.

## Overview

F0Checkbox renders a pressable checkbox box with an optional visible label. It supports checked, indeterminate, and disabled states, and exposes full accessibility semantics for screen readers.

Supports both **controlled** and **uncontrolled** modes:

- **Controlled** — pass `checked` + `onValueChange`; parent owns the state.
- **Uncontrolled** — omit `checked`; internal state starts unchecked and `onValueChange` still fires.

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Checkbox } from "@factorialco/f0-react-native"

// Controlled
<F0Checkbox label="Accept terms" checked={accepted} onValueChange={setAccepted} />

// Uncontrolled
<F0Checkbox label="Accept terms" onValueChange={(v) => console.log(v)} />

// Indeterminate
<F0Checkbox label="Select all" indeterminate onValueChange={handleSelectAll} />

// Hidden label (screen-reader only)
<F0Checkbox label="Select row" accessibilityLabel="Select Dan Petre" hideLabel checked={selected} onValueChange={setSelected} />
```

## Props

| Prop                 | Type                         | Default | Description                                                                                                                |
| -------------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `checked`            | `boolean`                    | —       | Controlled checked state. Omit for uncontrolled mode (internal state starts unchecked).                                    |
| `indeterminate`      | `boolean`                    | `false` | Indeterminate state — visually checked with a minus icon. Takes precedence over `checked`.                                 |
| `onValueChange`      | `(checked: boolean) => void` | —       | Fires with the new boolean value when the user toggles.                                                                    |
| `disabled`           | `boolean`                    | `false` | Disables press interaction and dims the control.                                                                           |
| `label`              | `string`                     | —       | Visible label text and default accessible name for screen readers.                                                         |
| `accessibilityLabel` | `string`                     | —       | Accessible name override. Use when `hideLabel` is true or the visible label is not specific enough. Falls back to `label`. |
| `hideLabel`          | `boolean`                    | `false` | Hides the visible label while keeping it accessible to screen readers.                                                     |
| `testID`             | `string`                     | —       | Test ID for automated tests.                                                                                               |

## States

- **Unchecked** — empty box with `f0-border` border
- **Checked** — filled box (`f0-background-selected-bold`) with a check icon in inverse color
- **Indeterminate** — filled box with a minus icon (takes precedence over `checked`)
- **Disabled** — 50% opacity; press is suppressed

## Accessibility

- `accessibilityRole="checkbox"` is always set.
- `accessibilityState.checked` maps to `true` / `false` / `"mixed"` (indeterminate).
- `accessibilityLabel` is set from `accessibilityLabel ?? label`. Always provide at least one of these — rendering a checkbox with no accessible name is a screen-reader failure.

## Testing

Main tests:

- `src/components/F0Checkbox/__tests__/F0Checkbox.spec.tsx`

Coverage includes:

- Snapshots for unchecked, checked, indeterminate, disabled, and hideLabel states
- Interaction: toggle fires `onValueChange` with the correct value; disabled suppresses it
- Accessibility: `accessibilityRole`, `accessibilityLabel`, `accessibilityState.checked` (true / false / mixed), `accessibilityState.disabled`

## File Structure

```
src/components/F0Checkbox/
├── F0Checkbox.tsx
├── F0Checkbox.types.ts
├── F0Checkbox.styles.ts
├── F0Checkbox.md
├── index.ts
└── __tests__/
    └── F0Checkbox.spec.tsx
```
