# F0Preset

Filter / toggle pill with an optional counter badge.

## Figma Source

[F0-React-Native-Uniwind — PresetItem (node 255:4430)](https://www.figma.com/design/WywEoW2B6PKjwYRyUKqjgQ/F0-React-Native-Uniwind?node-id=255-4430&m=dev)

## Props

| Prop        | Type         | Default | Description                                   |
| ----------- | ------------ | ------- | --------------------------------------------- |
| `label`     | `string`     | —       | Text label inside the pill                    |
| `number`    | `number?`    | —       | When set, renders an `F0Counter` on the right |
| `onPress`   | `() => void` | —       | Press handler; omit for non-interactive use   |
| `selected`  | `boolean`    | `false` | Selected (active) visual state                |
| `className` | `string?`    | —       | Layout / positioning classes                  |

## Variants

### Status

| Status     | Background                         | Border               | Text                     |
| ---------- | ---------------------------------- | -------------------- | ------------------------ |
| `default`  | — (transparent)                    | `f0-border`          | `f0-foreground`          |
| `selected` | `f0-background-selected-secondary` | `f0-border-selected` | `f0-foreground-selected` |

### Counter

When `number` is provided the counter renders with `F0Counter`:

- Default → `F0Counter type="default"`
- Selected → `F0Counter type="selected"`

## Figma Spec

- **Border radius**: `rounded` (10px)
- **Vertical padding**: `py-1.5` (6px)
- **Horizontal padding** (no counter): `px-2.5` (10px)
- **Horizontal padding** (with counter): `pl-2.5 pr-1.5` (10px / 6px)
- **Gap** (label ↔ counter): `gap-1.5` (6px)
- **Text**: `body-sm-medium` (14px / 20px, Inter Medium 500)

## Web Parity

| Aspect       | Web (`Preset`)       | RN (`F0Preset`)         |
| ------------ | -------------------- | ----------------------- |
| Label        | `<span>`             | `<F0Text>`              |
| Counter      | `<Counter>` (old)    | `<F0Counter>` (new)     |
| Pressable    | `<label>` + checkbox | `<PressableFeedback>`   |
| Gap          | `gap-2` (8px)        | `gap-1.5` (6px) — Figma |
| Token prefix | `f1-`                | `f0-`                   |

## Usage

```tsx
import { F0Preset } from "@factorial/f0-react-native"

<F0Preset label="Active" onPress={toggle} />
<F0Preset label="Pending" number={5} selected onPress={toggle} />
```
