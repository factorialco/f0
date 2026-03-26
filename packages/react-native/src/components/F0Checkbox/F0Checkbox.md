# F0Checkbox

Accessible checkbox primitive for the F0 React Native system.

## Usage

```tsx
import { F0Checkbox } from "@factorialco/f0-react-native"

;<F0Checkbox
  label="Accept terms"
  checked={accepted}
  onValueChange={setAccepted}
/>
```

## Props

| Prop            | Type                         | Default | Description                                              |
| --------------- | ---------------------------- | ------- | -------------------------------------------------------- |
| `checked`       | `boolean`                    | `false` | Whether the checkbox is checked                          |
| `indeterminate` | `boolean`                    | `false` | Indeterminate state — visually checked with a minus icon |
| `onValueChange` | `(checked: boolean) => void` | —       | Fires with the new value when the user toggles           |
| `disabled`      | `boolean`                    | `false` | Disables press interaction and dims the control          |
| `label`         | `string`                     | —       | Visible label and accessible name                        |
| `hideLabel`     | `boolean`                    | `false` | Hides the visible label while keeping it accessible      |
| `testID`        | `string`                     | —       | Test ID for automated tests                              |

## States

- **Unchecked** — empty box with `f0-border` border
- **Checked** — filled box (`f0-background-selected-bold`) with a check icon in inverse color
- **Indeterminate** — filled box with a minus icon (takes precedence over `checked`)
- **Disabled** — 50 % opacity; press is suppressed

## Accessibility

- `accessibilityRole="checkbox"` is always set
- `accessibilityState.checked` maps to `true` / `false` / `"mixed"` (indeterminate)
- `accessibilityLabel` is always the `label` prop value — provide it even when `hideLabel` is true
