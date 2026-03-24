# F0Link

Semantic link component for React Native. Built as composition over `F0Text` + `PressableFeedback`.

## Usage

```tsx
import { F0Link } from "@factorialco/f0-react-native"

<F0Link href="https://factorialhr.com">Factorial website</F0Link>
<F0Link onPress={() => navigateToProfile()}>Open profile</F0Link>
<F0Link variant="mention" size="sm">User name</F0Link>
<F0Link href="https://help.factorialhr.com" target="_blank">
  Help center
</F0Link>
```

## Architecture

- `F0Link` is a semantic component (not a direct extension of `F0Text`)
- `F0Text` controls typography and text semantics
- `PressableFeedback` controls press/focus interaction and accessibility role
- `F0Icon` renders the optional external-link affordance

## Props

| Prop              | Type                                         | Default  | Description                                                                                     |
| ----------------- | -------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| `children`        | `ReactNode`                                  | required | Link label/content                                                                              |
| `variant`         | `"link" \| "unstyled" \| "mention"`          | `"link"` | Visual style                                                                                    |
| `size`            | `"xs" \| "sm" \| "md"`                       | `"md"`   | Typography and spacing size                                                                     |
| `href`            | `string`                                     | `-`      | Optional URL opened with `Linking.openURL` when `onPress` is absent                             |
| `target`          | `"_blank" \| "_self" \| "_parent" \| "_top"` | `-`      | Web parity target. `_blank` derives external affordance                                         |
| `onPress`         | `(event) => void \| Promise<unknown>`        | `-`      | Press handler                                                                                   |
| `stopPropagation` | `boolean`                                    | `false`  | Calls `event.stopPropagation()` before `onPress`                                                |
| `external`        | `boolean`                                    | `false`  | Shows external-link icon                                                                        |
| `disabled`        | `boolean`                                    | `false`  | Disables interaction and applies disabled styles                                                |
| `numberOfLines`   | `number`                                     | `1`      | Text truncation lines                                                                           |
| `className`       | `string`                                     | `-`      | Tailwind classes for the outer container (layout/positioning only — e.g. `mt-4`, `self-center`) |
| `testID`          | `string`                                     | `-`      | Test id                                                                                         |

## Variants

- `link`: underlined text (custom `View` border for cross-platform consistency)
- `unstyled`: plain text (no underline)
- `mention`: mention pill with secondary background

### Known limitation — multi-line underline

The `link` variant renders the underline as a `borderBottom` on a wrapper `View`
(using `StyleSheet.hairlineWidth` for pixel-perfect consistency). This means the
underline only appears beneath the **last visible line**. For multi-line
underlined links, use `variant="unstyled"` with a custom text decoration.

## Runtime behavior

- Interaction priority:
  - If `onPress` exists, it is executed
  - Else if `href` exists, URL is opened via `Linking.openURL`
- Async/sync errors from press handlers are swallowed to avoid bubbling from design-system primitives
- `target="_blank"` adds a right-side `ExternalLink` icon
- `external` can also force external affordance explicitly
- External icon is rendered for `variant="link"` only

## Accessibility

- `accessibilityRole="link"`
- `accessibilityState={{ disabled }}`
- Label fallback order:
  - explicit `accessibilityLabel`
  - text extracted from `children`
  - `href`
  - `"Link"`

## Testing

- Snapshot coverage for variants, sizes, disabled and external states
- Behavior tests for `onPress`, URL fallback, and disabled state
- Accessibility assertions for role, state and label fallback

## File structure

```
src/components/F0Link/
├── F0Link.tsx
├── F0Link.types.ts
├── F0Link.styles.ts
├── F0Link.md
├── index.ts
└── __tests__/
    └── F0Link.spec.tsx
```
