# F0Button

Primary interactive button component for the F0 Design System.

## Overview

F0Button is the semantic button API for React Native in F0. It supports:

- Visual variants (`default`, `outline`, `critical`, `neutral`, `ghost`, `promote`)
- Size variants (`sm`, `md`, `lg`)
- Optional icon / emoji content
- Icon-only round mode
- Async press handlers with automatic loading-state handling
- Visible loading indicator when busy
- Press feedback control through `PressableFeedback`

## Architecture

- **Pattern:** Props API (Atomic) - element order is fixed: icon -> emoji -> label
- **Press feedback:** Uses `PressableFeedback` component for smooth animations
- **Press state:** Tracks pressed state with `useState` for color changes by variant
- **Loading state:** Supports auto-loading when `onPress` returns a Promise
- **Styling:** `className` and `style` are blocked in the public API and filtered at runtime
- **Location:** `src/components/F0Button/`

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Button } from "@factorialco/f0-react-native"
import { Archive } from "@factorialco/f0-react-native/icons/app"

<F0Button label="Submit" onPress={handleSubmit} />

<F0Button label="Delete" variant="critical" icon={Archive} />

<F0Button label="Add" icon={Archive} hideLabel round />

<F0Button label="Save" onPress={async () => await saveData()} />

<F0Button label="Love" emoji="🥰" variant="neutral" />

<F0Button label="Custom" feedback="scale" />
```

## Props

| Prop                | Type                             | Default     | Description                                                |
| ------------------- | -------------------------------- | ----------- | ---------------------------------------------------------- |
| `label`             | `string`                         | required    | Visible label and accessibility base label                 |
| `onPress`           | `() => void \| Promise<unknown>` | —           | Press handler; async return enables auto-loading           |
| `variant`           | `F0ButtonVariant`                | `"default"` | Visual style variant                                       |
| `size`              | `F0ButtonSize`                   | `"md"`      | Control height and radius                                  |
| `disabled`          | `boolean`                        | `false`     | Disabled state                                             |
| `loading`           | `boolean`                        | `false`     | External loading control                                   |
| `icon`              | `IconType`                       | —           | Optional icon                                              |
| `emoji`             | `string`                         | —           | Optional emoji                                             |
| `hideLabel`         | `boolean`                        | `false`     | Hide visible label (keeps accessibility label)             |
| `round`             | `boolean`                        | `false`     | Makes icon-only mode circular                              |
| `showBadge`         | `boolean`                        | `false`     | Notification badge (outline variant only)                  |
| `fullWidth`         | `boolean`                        | `false`     | Makes button fill available horizontal space               |
| `feedback`          | `PressableFeedbackVariant`       | `"both"`    | Press feedback mode (`both`, `scale`, `highlight`, `none`) |
| `accessibilityHint` | `string`                         | —           | Optional screen-reader hint                                |
| `testID`            | `string`                         | —           | Test identifier                                            |

### Variants

- `default` - primary/high-emphasis action
- `outline` - secondary action with border
- `critical` - destructive action
- `neutral` - neutral secondary action
- `ghost` - subtle transparent action
- `promote` - promotional/highlighted action

### Sizes

- `sm` - compact
- `md` - default
- `lg` - large

## Runtime Behavior

### Async onPress auto-loading

If `onPress` returns a Promise, F0Button enters internal loading state until it resolves.

<!-- prettier-ignore -->
```tsx
<F0Button
  label="Save"
  onPress={async () => {
    await saveData()
  }}
/>
```

### Loading visuals

When `loading` is `true` (external) or an async `onPress` is pending (internal):

- the button becomes non-interactive (`disabled`)
- a centered spinner indicator is rendered
- button content is visually hidden (`opacity`) to keep layout stable

### Press feedback

F0Button delegates touch feedback to `PressableFeedback` and supports semantic control via `feedback`.

<!-- prettier-ignore -->
```tsx
<F0Button label="Both" feedback="both" />
<F0Button label="Scale only" feedback="scale" />
<F0Button label="Highlight only" feedback="highlight" />
<F0Button label="No visual feedback" feedback="none" />
```

## Styling Contract

F0Button is semantic-first:

- `className` is **not** part of `F0ButtonProps`
- `style` is **not** part of `F0ButtonProps`
- Both are filtered at runtime before forwarding props to internal pressable primitives

This guarantees semantic variants remain source-of-truth and prevents style overrides from bypassing the API contract.

## Accessibility

- Always sets `accessibilityRole="button"`
- Auto-builds `accessibilityLabel` from `label` plus state:
  - `"label, disabled"`
  - `"label, disabled, loading"`
- Exposes `accessibilityState` with:
  - `disabled`
  - `busy`
- `hideLabel` does not remove accessibility label

## Testing

Main test suite:

- `src/components/F0Button/__tests__/F0Button.spec.tsx`

Coverage includes:

- snapshots across variants/sizes/states
- async loading behavior
- accessibility label/state
- badge rendering rules
- runtime blocking of `className`/`style`

## File Structure

```
src/components/F0Button/
├── F0Button.tsx
├── F0Button.types.ts
├── F0Button.styles.ts
├── F0Button.md
├── __tests__/
│   └── F0Button.spec.tsx
└── index.ts
```
