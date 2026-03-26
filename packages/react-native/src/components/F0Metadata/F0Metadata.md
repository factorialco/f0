# F0Metadata

Structured label–value list for displaying resource metadata.

## Overview

`F0Metadata` renders a list of `MetadataItem` entries, each composed of a descriptive label and a typed value. It supports 9 value types with full parity to the F0 web Metadata component, and adapts its layout based on the `orientation` prop.

All rendering is done exclusively via F0 primitives — no legacy experimental components are used.

## Architecture

```
F0Metadata              — main component, filters items, drives layout
  └─ F0MetadataItem     — renders one label + value row
       └─ F0MetadataValue — switches on value.type, renders F0 primitive
```

- `F0MetadataItem` and `F0MetadataValue` are internal components not exported publicly.
- `undefined` and `boolean` values in the `items` array are filtered out before rendering, enabling conditional item patterns like `condition && item`.

## Usage

```tsx
import { F0Metadata } from "@factorialco/f0-react-native"
;<F0Metadata
  items={[
    {
      label: "Status",
      value: { type: "status", label: "Active", variant: "positive" },
    },
    {
      label: "Owner",
      value: {
        type: "avatar",
        avatarType: "person",
        firstName: "Alice",
        lastName: "Smith",
      },
    },
    condition && {
      label: "Due date",
      value: { type: "date", formattedDate: "Mar 25, 2026" },
    },
  ]}
/>
```

## Props

| Prop          | Type                                       | Default      | Description                                     |
| ------------- | ------------------------------------------ | ------------ | ----------------------------------------------- |
| `items`       | `(MetadataItem \| undefined \| boolean)[]` | required     | Items to render. Falsy values are filtered out. |
| `orientation` | `"vertical" \| "horizontal"`               | `"vertical"` | Layout direction for items.                     |

### MetadataItem

| Prop        | Type                | Default  | Description                                  |
| ----------- | ------------------- | -------- | -------------------------------------------- |
| `label`     | `string`            | required | Descriptive label shown alongside the value. |
| `value`     | `MetadataItemValue` | required | Value to render (see Value Types below).     |
| `hideLabel` | `boolean`           | `false`  | When true, the label is not rendered.        |

## Value Types

| Type           | Required fields                                                   | Rendered with                   |
| -------------- | ----------------------------------------------------------------- | ------------------------------- |
| `text`         | `content: string`                                                 | `F0Text`                        |
| `avatar`       | `avatarType: "person"`: `firstName: string`, `lastName: string`, `src?`, `deactivated?` / `avatarType: "team"\|"company"`: `name: string`, `src?` | `F0Avatar.*` + `F0Text`         |
| `status`       | `label: string`, `variant: F0TagStatusVariant`                    | `F0Tag.Status`                  |
| `list`         | `variant: "person"\|"team"\|"company"`, `avatars`                 | `F0AvatarList`                  |
| `data-list`    | `data: string[]`                                                  | Multiple `F0Text` items stacked |
| `tag-list`     | `tags: string[]`                                                  | `F0TagList` type="raw"          |
| `dot-tag`      | `label: string`, `color: F0TagDotColor`                           | `F0Tag.Dot`                     |
| `date`         | `formattedDate: string`, `icon?: "warning"\|"critical"`           | `F0Text` + optional `F0Icon`    |
| `progress-bar` | `value: number`, `max?`, `label?`                                 | `F0Progress` (linear)           |

## Orientations

- **`vertical`** (default): items stacked vertically, label above value.
- **`horizontal`**: items in a row (with wrap), label fixed-width on the left.

## Accessibility

- Labels render with `F0Text color="secondary"` which maps to `f0-foreground-secondary` token.
- The `hideLabel` prop should only be used when the value is unambiguously self-describing in context (e.g. a lone avatar in a known slot).
- Deactivated person avatars receive `color="disabled"` on the accompanying name text.

## Testing

- Snapshot tests cover every value type and both orientations.
- Tests use `@testing-library/react-native` and Jest snapshot serializer.
