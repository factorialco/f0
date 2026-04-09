# F0Tag

Composable semantic tag API for React Native in F0.

## Overview

`F0Tag` introduces a namespaced API without context:

- `F0Tag` (root)
- `F0Tag.Dot`
- `F0Tag.Raw`
- `F0Tag.Alert`
- `F0Tag.Status`
- `F0Tag.Person`
- `F0Tag.Team`
- `F0Tag.Company`
- `F0Tag.Balance`

Each variant receives explicit props and reuses shared internal style helpers.

Primary API for product code:

- `F0Tag.Dot`
- `F0Tag.Raw`
- `F0Tag.Alert`
- `F0Tag.Status`
- `F0Tag.Person`
- `F0Tag.Team`
- `F0Tag.Company`
- `F0Tag.Balance`

## Architecture Notes

- No provider/context dependency
- `F0TagRoot` is the internal primitive for shared layout, truncation and press behavior
- Variant-specific semantic props (`level`, `variant`, `color`, `customColor`, `icon`)
- Named exports only
- Components are split by variant (web-like structure)

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Tag } from "@factorialco/f0-react-native"
import { Home } from "@factorialco/f0-react-native/icons/app"

<F0Tag.Dot text="Payroll" color="viridian" />
<F0Tag.Raw text="Settings" icon={Home} />
<F0Tag.Alert text="Action required" level="critical" />
<F0Tag.Status text="Published" variant="positive" />
<F0Tag.Person name="Ada Lovelace" />
<F0Tag.Balance percentage={12} amount={102.35} hint="MoM" />
<F0Tag.Raw text="Only icon" icon={Home} onlyIcon />

<F0Tag text="Open" onPress={() => {}} /> // advanced primitive usage
```

## Props

### `F0Tag` (root)

Internal primitive used to implement `F0Tag.*` variants. Prefer `F0Tag.*` for product code.

| Prop                       | Type         | Default | Description                                   |
| -------------------------- | ------------ | ------- | --------------------------------------------- |
| `left`                     | `ReactNode`  | `-`     | Left visual content                           |
| `text`                     | `string`     | `-`     | Main text label                               |
| `right`                    | `ReactNode`  | `-`     | Right visual content                          |
| `additionalAccessibleText` | `string`     | `-`     | Extra text for screen readers                 |
| `info`                     | `string`     | `-`     | Extra info text rendered as helper affordance |
| `onPress`                  | `() => void` | `-`     | Enables interactive feedback and press event  |
| `className`                | `string`     | `-`     | Root container class override                 |
| `textClassName`            | `string`     | `-`     | Label class override                          |

### `F0Tag.Dot`

| Prop                       | Type            | Default  | Description                   |
| -------------------------- | --------------- | -------- | ----------------------------- |
| `text`                     | `string`        | required | Dot tag label                 |
| `color`                    | `F0TagDotColor` | `-`      | Predefined semantic dot color |
| `customColor`              | `string`        | `-`      | Custom CSS color value        |
| `additionalAccessibleText` | `string`        | `-`      | Extra screen-reader context   |
| `info`                     | `string`        | `-`      | Extra info text               |

### `F0Tag.Raw`

| Prop                       | Type       | Default | Description                                    |
| -------------------------- | ---------- | ------- | ---------------------------------------------- |
| `text`                     | `string`   | `-`     | Label text                                     |
| `icon`                     | `IconType` | `-`     | Optional leading icon                          |
| `onlyIcon`                 | `boolean`  | `false` | Hides label and keeps accessible fallback text |
| `noBorder`                 | `boolean`  | `false` | Removes default border                         |
| `className`                | `string`   | `-`     | Container class override                       |
| `additionalAccessibleText` | `string`   | `-`     | Extra screen-reader context                    |
| `info`                     | `string`   | `-`     | Extra info text                                |

### `F0Tag.Alert`

| Prop    | Type              | Default  | Description         |
| ------- | ----------------- | -------- | ------------------- |
| `text`  | `string`          | required | Alert label         |
| `level` | `F0TagAlertLevel` | required | Semantic alert tone |
| `info`  | `string`          | `-`      | Extra info text     |

### `F0Tag.Status`

| Prop                       | Type                 | Default  | Description                 |
| -------------------------- | -------------------- | -------- | --------------------------- |
| `text`                     | `string`             | required | Status label                |
| `variant`                  | `F0TagStatusVariant` | required | Status visual tone          |
| `additionalAccessibleText` | `string`             | `-`      | Extra screen-reader context |

### `F0Tag.Person` / `F0Tag.Team` / `F0Tag.Company`

| Prop   | Type     | Default  | Description         |
| ------ | -------- | -------- | ------------------- |
| `name` | `string` | required | Entity display name |
| `src`  | `string` | `-`      | Avatar source       |

### `F0Tag.Balance`

| Prop           | Type                           | Default  | Description                               |
| -------------- | ------------------------------ | -------- | ----------------------------------------- |
| `amount`       | `F0TagNumericInput \| null`    | required | Base amount value                         |
| `percentage`   | `F0TagPercentageInput \| null` | `-`      | Percentage delta shown before amount      |
| `invertStatus` | `boolean`                      | `false`  | Inverts positive/negative semantic status |
| `hint`         | `string`                       | `-`      | Auxiliary text rendered next to the tag   |
| `info`         | `string`                       | `-`      | Extra info text                           |
| `nullText`     | `string`                       | `"N/A"`  | Placeholder text when amount is null      |

## Variants

### Dot colors

`viridian`, `malibu`, `yellow`, `purple`, `lilac`, `barbie`, `smoke`, `army`, `flubber`, `indigo`, `camel`

### Alert levels

`info`, `warning`, `critical`, `positive`

### Status variants

`neutral`, `info`, `positive`, `warning`, `critical`

## Runtime Behavior Notes

- `F0Tag.Dot` renders `null` when neither a valid `color` nor `customColor` is resolved.
- `F0Tag` root uses `PressableFeedback` with `variant="both"` only when `onPress` exists.
- Text formatting validation is enforced synchronously via `enforceTextFormat` (dev-only) for direct label inputs (`F0Tag.Dot`, `F0Tag.Raw`, `F0Tag.Alert`, `F0Tag.Status`, `F0Tag.Person`, `F0Tag.Team`, `F0Tag.Company`).
- `F0Tag.Raw` with `onlyIcon` keeps label as accessibility fallback text.

## Accessibility Notes

- Decorative icons/dots are marked with `aria-hidden`.
- `additionalAccessibleText` renders visually hidden screen-reader text.
- Interactive root tags preserve press semantics through `PressableFeedback`.

## Testing Notes

Main tests:

- `src/components/F0Tag/__tests__/F0Tag.spec.tsx`

Coverage includes namespace contract assertions, snapshots for variants, and basic behavior checks.

## F0TagList

Renders a homogeneous list of `F0Tag` variants with a `+N` overflow counter.

### Usage

<!-- prettier-ignore -->
```tsx
import { F0TagList } from "@factorialco/f0-react-native"

<F0TagList
  type="person"
  max={3}
  tags={[
    { name: "John Doe", src: "https://example.com/avatar.jpg" },
    { name: "Jane Smith" },
    { name: "Bob Johnson" },
    { name: "Alice Brown" },
  ]}
/>
```

### Props

| Prop             | Type            | Default  | Description                                         |
| ---------------- | --------------- | -------- | --------------------------------------------------- |
| `type`           | `F0TagListType` | required | Tag variant type for all items                      |
| `tags`           | `Array<...>`    | required | Props array matching the selected `type`            |
| `max`            | `number`        | `4`      | Max visible tags before overflow counter            |
| `remainingCount` | `number`        | `-`      | External remaining count added to computed overflow |
| `className`      | `string`        | `-`      | Container class override                            |

### Overflow behavior

Current implementation uses count-based overflow (`max`). Web uses width-based overflow via `OverflowList`. Width-based overflow for RN is planned as a phase 2 enhancement.

## File Structure

```
src/components/F0Tag/
├── F0Tag.tsx
├── F0TagRoot.tsx
├── F0TagDot.tsx
├── F0TagRaw.tsx
├── F0TagAlert.tsx
├── F0TagStatus.tsx
├── F0TagPerson.tsx
├── F0TagTeam.tsx
├── F0TagCompany.tsx
├── F0TagBalance.tsx
├── F0TagList.tsx
├── F0TagList.types.ts
├── F0Tag.types.ts
├── F0Tag.styles.ts
├── F0Tag.md
├── index.ts
└── __tests__/
    └── F0Tag.spec.tsx
```
