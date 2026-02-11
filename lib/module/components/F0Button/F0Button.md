# F0Button

Primary interactive button component for the F0 Design System.

## Architecture

- **Pattern:** Props API (Atomic) — element order is fixed: icon → emoji → label
- **Press feedback:** Uses `PressableFeedback` component for smooth animations (scale/highlight effects)
- **Press state:** Tracks pressed state with `useState` for color changes based on variant (works alongside PressableFeedback animations)
- **Loading state:** Supports auto-loading when `onPress` returns a Promise. Can also be controlled externally via `loading` prop
- **Styling:** `className` and `style` props are blocked at the TypeScript level

## Usage

```tsx
import { F0Button } from "@f0/react-native";

// Basic
<F0Button label="Submit" onPress={handleSubmit} />

// With variant and icon
<F0Button label="Delete" variant="critical" icon={TrashIcon} />

// Icon-only (round)
<F0Button label="Add" icon={PlusIcon} hideLabel round />

// Async auto-loading (button disables while promise resolves)
<F0Button label="Save" onPress={async () => await saveData()} />

// With emoji
<F0Button label="Love" emoji="🥰" variant="neutral" />

// Custom press feedback variant
<F0Button label="Custom" feedback="scale" />
```

## Props

| Prop                | Type                             | Default     | Description                                                  |
| ------------------- | -------------------------------- | ----------- | ------------------------------------------------------------ |
| `label`             | `string`                         | _required_  | Button text (always required for accessibility)              |
| `onPress`           | `() => void \| Promise<unknown>` | —           | Press handler. Async functions auto-enter loading state      |
| `variant`           | `ButtonVariant`                  | `"default"` | Visual variant                                               |
| `size`              | `ButtonSize`                     | `"md"`      | Button size                                                  |
| `disabled`          | `boolean`                        | `false`     | Disabled state                                               |
| `loading`           | `boolean`                        | `false`     | Loading state (also auto-managed for async onPress)          |
| `icon`              | `IconType`                       | —           | Icon from F0Icon system                                      |
| `emoji`             | `string`                         | —           | Emoji to display                                             |
| `hideLabel`         | `boolean`                        | `false`     | Hides label text (icon-only mode). Label still used for a11y |
| `round`             | `boolean`                        | `false`     | Makes icon-only buttons circular                             |
| `showBadge`         | `boolean`                        | `false`     | Shows notification badge (outline variant only)              |
| `fullWidth`         | `boolean`                        | `false`     | Makes button take full container width                       |
| `feedback`          | `PressableFeedbackVariant`       | `"both"`    | Visual feedback variant (highlight/scale/both/none)          |
| `accessibilityHint` | `string`                         | —           | Accessibility hint for screen readers                        |
| `testID`            | `string`                         | —           | Test ID for testing                                          |

## Variants

- `default` — Primary action (accent background)
- `outline` — Secondary action with border
- `critical` — Destructive action
- `neutral` — Subtle secondary action
- `ghost` — Minimal/transparent action
- `promote` — Promotional/highlighted action

## Sizes

- `sm` — 24px height
- `md` — 32px height
- `lg` — 40px height

## Accessibility

- `accessibilityRole="button"` is always set
- `accessibilityLabel` is auto-generated from `label` + state (e.g., "Submit, disabled, loading")
- `accessibilityState` includes `disabled` and `busy`
- When `hideLabel` is true, `label` is still used as `accessibilityLabel`

## File Structure

```
src/components/F0Button/
├── F0Button.tsx           # Main component
├── F0Button.types.ts      # TypeScript types
├── F0Button.styles.ts     # tailwind-variants + color helpers
├── F0Button.md            # This file
├── __tests__/
│   └── F0Button.spec.tsx  # Tests (24 tests)
└── index.ts               # Barrel exports
```

## Migration from Button

The old `Button` component at `src/components/Button/index.tsx` re-exports from F0Button for backward compatibility. New code should import from `F0Button` directly:

```tsx
// Old (still works)
import { Button } from "../Button";

// New (preferred)
import { F0Button } from "../F0Button";
```
