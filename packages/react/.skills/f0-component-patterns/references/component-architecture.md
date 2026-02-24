# Component Architecture Patterns

## Folder Structure

```
F0Example/
  __tests__/              — Test files (.test.tsx)
  __stories__/            — Storybook files
  index.tsx               — Entry point (exports only, no logic)
  F0Example.tsx           — Component implementation
  types.ts                — Public types (re-exported by index.tsx)
  internal-types.ts       — Private types (NOT exported)
  hooks/                  — Hook files (useXXXX.ts)
  components/             — Internal subcomponents (NOT exported)
```

## Three Index Export Patterns

### 1. Simple Re-export (stable components)

```tsx
// src/components/F0Card/index.tsx
export * from "./F0Card"
```

### 2. Experimental Wrapper (components being stabilized)

```tsx
// src/components/F0Select/index.tsx
import { experimentalComponent } from "@/lib/experimental"
import { F0Select as F0SelectComponent } from "./F0Select"

export * from "./types"

const F0Select = experimentalComponent("F0Select", F0SelectComponent)
export { F0Select }
```

### 3. Component() Metadata (XRay tooling integration)

```tsx
// src/components/F0Box/index.tsx
import { Component } from "../../lib/component/component"
import { F0Box as BoxComponent, type F0BoxProps } from "./F0Box"

export const F0Box = Component({ name: "F0Box", type: "layout" }, BoxComponent)

export type { F0BoxProps }
```

Valid `type` values: `"layout"`, `"info"`, `"action"`, `"form"`

The `Component()` function (defined in `src/lib/component/component.tsx`) wraps a component in `forwardRef` and hooks into the XRay tooling system via `useComponentXRay`. It automatically sets `displayName` from the metadata name.

## Private Props Pattern (Public/Internal Split)

Components with internal-only props use a two-layer pattern to prevent consumers from accessing private properties.

### Full Pattern (from F0Button)

```tsx
// src/components/F0Button/F0Button.tsx
import { forwardRef } from "react"
import { ButtonInternal } from "./internal"
import { ButtonInternalProps } from "./internal-types"

// 1. Define private prop names as const array
const privateProps = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
] as const

// 2. Derive public type by omitting private props
export type F0ButtonProps = Omit<
  ButtonInternalProps,
  (typeof privateProps)[number] | "variant"
> & {
  variant?: Exclude<ButtonInternalProps["variant"], "ai">
}

// 3. Strip private props via reduce before forwarding
const F0Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  F0ButtonProps
>((props, ref) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as ButtonInternalProps)

  return <ButtonInternal {...publicProps} ref={ref} />
})

F0Button.displayName = "F0Button"
export { F0Button }
```

In `internal-types.ts`, private props are annotated with `@private` in JSDoc:

```tsx
// src/components/F0Button/internal-types.ts
export type ButtonInternalProps /* ... */ = {
  /** @private Appends a React node after the button content */
  append?: React.ReactNode
  /** @private If true, button is visually active (pressed state) */
  pressed?: boolean
  /** @private */
  noAutoTooltip?: boolean
  // ...
}
```

### Simpler Example (F0Card)

```tsx
// src/components/F0Card/F0Card.tsx
const privateProps = ["forceVerticalMetadata", "disableOverlayLink"] as const
export type F0CardProps = Omit<CardInternalProps, (typeof privateProps)[number]>

const F0CardBase = forwardRef<HTMLDivElement, F0CardProps>((props, ref) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as CardInternalProps)
  return <CardInternal ref={ref} {...publicProps} />
})
```

## forwardRef Convention

All components accepting refs must use `forwardRef` with explicit generic types and set `displayName`:

```tsx
// src/components/F0Heading/F0Heading.tsx
import { forwardRef } from "react"
import { Text, TextProps, type HeadingTags } from "@/ui/Text"

const _allowedVariants = ["heading", "heading-large"] as const

export type F0HeadingProps = Omit<TextProps, "className" | "variant" | "as"> & {
  variant?: (typeof _allowedVariants)[number]
  as?: HeadingTags
}

export const F0Heading = forwardRef<HTMLElement, F0HeadingProps>(
  (props, ref) => {
    return <Text ref={ref} variant="heading" {...props} />
  }
)

F0Heading.displayName = "F0Heading"
```

For generic components (e.g., F0Select), re-cast the export to preserve generic type parameters.

## withSkeleton HOC

Attach `.Skeleton` sub-component to components using `withSkeleton()`:

```tsx
// Definition: src/lib/skeleton.tsx
export function withSkeleton<
  T extends AnyReactComponent<any>,
  U extends AnyReactComponent<any>,
>(Component: T, Skeleton: U): T & { Skeleton: U } {
  const componentName = Component.displayName || Component.name || "Component"
  Object.assign(Skeleton, { displayName: `${componentName}.Skeleton` })
  return Object.assign(Component, { Skeleton })
}
```

Usage:

```tsx
// src/components/F0Card/F0Card.tsx
import { withSkeleton } from "@/lib/skeleton"

const F0CardSkeleton = ({ compact = false }: { compact?: boolean }) => {
  return <CardSkeleton compact={compact} />
}

F0CardBase.displayName = "F0Card"
export const F0Card = withSkeleton(F0CardBase, F0CardSkeleton)

// Consumer usage:
// <F0Card.Skeleton compact />
```

Other components using this pattern: F0Widget, F0BigNumber, F0Callout.

## @/ui/ Abstraction Layer

Components must never import Radix or third-party primitives directly. Always use the `@/ui/` wrappers:

```tsx
// CORRECT
import { Action } from "@/ui/Action"
import { Checkbox as CheckboxRoot } from "@/ui/checkbox"
import { Dialog, DialogContent, DialogHeader } from "@/ui/Dialog/dialog"
import { InputField } from "@/ui/InputField"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/ui/Select"

// WRONG - never do this
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as DialogPrimitive from "@radix-ui/react-dialog"
```

## DataAttributes Type

Use `DataAttributes` from `@/global.types` to support `data-*` props:

```tsx
// src/global.types.ts
export type DataAttributes = {
  [key: `data-${string}`]: string | undefined
}

// Usage with extends:
interface CheckboxProps extends DataAttributes {
  title?: string
  checked?: boolean
}

// Usage with intersection:
export type ButtonInternalProps = Pick<ActionProps, "size" | "disabled"> &
  DataAttributes & {
    label: string
    onClick?: () => void
  }
```

## withDataTestId HOC

All public exported components **must** be wrapped with `withDataTestId` from `@/lib/data-testid`. This HOC adds a `dataTestId` prop that renders a `data-testid` HTML attribute for stable test selectors.

### How It Works

- Adds a `dataTestId?: string` prop to the wrapped component
- When `dataTestId` is provided and rendering is enabled (via `F0Provider`), wraps the component output in `<div data-testid={dataTestId} style={{ display: "contents" }}>` — this avoids layout interference
- Rendering is gated by the `renderDataTestIdAttribute` flag in `UserPlatformProvider` (defaults to `false`)
- Preserves `forwardRef`, `memo`, `displayName`, and all static properties (e.g., `.Skeleton`)
- If the wrapped component returns `null`, no wrapper div is rendered

### Pattern 1: Simple Wrap (stable components)

```tsx
// src/components/F0Tag/index.ts
import { withDataTestId } from "@/lib/data-testid"
import { Tag as _Tag } from "./F0Tag"

export type { TagVariant } from "./F0Tag"
export const Tag = withDataTestId(_Tag)
```

### Pattern 2: With experimentalComponent

When combining with `experimentalComponent`, always apply `withDataTestId` **outermost**:

```tsx
// src/components/F0DatePicker/index.ts
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { F0DatePicker as _F0DatePicker } from "./F0DatePicker"

export const F0DatePicker = withDataTestId(
  experimentalComponent<typeof _F0DatePicker>("F0DatePicker", _F0DatePicker)
)
```

### Pattern 3: With withSkeleton

When combining with `withSkeleton`, apply `withSkeleton` first (so `.Skeleton` is attached), then wrap with `withDataTestId` (which preserves static members):

```tsx
// src/components/F0Card/index.tsx
import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"
import { F0CardBase, F0CardSkeleton } from "./F0Card"

export const F0Card = withDataTestId(withSkeleton(F0CardBase, F0CardSkeleton))
```

### Composition Order

When multiple HOCs are involved, apply them in this order (innermost to outermost):

1. `withSkeleton(Component, Skeleton)` — attach `.Skeleton`
2. `experimentalComponent("Name", Component)` — mark as experimental
3. `withDataTestId(Component)` — always outermost

```tsx
// Full example with all three:
export const F0Widget = withDataTestId(
  experimentalComponent("F0Widget", withSkeleton(WidgetBase, WidgetSkeleton))
)
```

### Types

```tsx
// The HOC exposes these types from @/lib/data-testid:

// Adds dataTestId prop to any component's props
export type WithDataTestIdProps = {
  dataTestId?: string
}

// Use when ComponentProps<typeof Wrapped> inference fails (e.g., in Storybook stories)
export type WithDataTestIdPropsOf<T extends React.ComponentType<unknown>> =
  React.ComponentProps<T> & WithDataTestIdProps
```

### Enabling in Tests

In tests, enable `data-testid` rendering via the provider:

```tsx
<F0Provider renderDataTestIdAttribute>
  <F0Button dataTestId="submit-btn" label="Submit" />
</F0Provider>
// Renders: <div data-testid="submit-btn" style="display: contents"><button>Submit</button></div>
```

## Union Type Props

Always use const arrays and export both the array and the derived type:

```tsx
export const colors = [
  "neutral",
  "info",
  "warning",
  "critical",
  "positive",
] as const
export type Color = (typeof colors)[number]
```
