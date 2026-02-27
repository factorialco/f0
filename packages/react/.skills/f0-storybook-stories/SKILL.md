---
name: f0-storybook-stories
description: Create Storybook story files (.stories.tsx) for F0 React components. Use when adding or updating stories, snapshot stories, argTypes, decorators, play functions, or internal stories. For MDX documentation files, use the global factorial-f0-component-documentation skill instead.
---

# F0 Storybook Stories

Creates `.stories.tsx` files for F0 components. For MDX docs (the Docs tab), use the global `factorial-f0-component-documentation` skill instead — that's a separate file.

## Quick Reference

| Need                                                                  | See                                   |
| --------------------------------------------------------------------- | ------------------------------------- |
| Meta definition, tags, argTypes, Snapshot, decorators, play functions | `references/story-patterns.md`        |
| Play functions, portal queries, step(), a11y configuration            | Load the `f0-storybook-testing` skill |

## Key Rules

### Imports

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn, expect, within } from "storybook/test"
import { withSnapshot, withSkipA11y } from "@/lib/storybook-utils/parameters"
// Icons: "@/icons/app" | "@/icons/modules" | "@/icons/ai"
```

### Meta

Always `satisfies Meta<typeof Component>` (not `as Meta`). Exception: components with complex generics use plain `Meta`.

```tsx
const meta = {
  title: "ComponentName",
  component: F0Example,
  tags: ["autodocs", "stable"], // or "experimental" | "internal" | "deprecated"
  // ...
} satisfies Meta<typeof F0Example>

export default meta
type Story = StoryObj<typeof meta>
```

### Snapshots are OFF by default

Chromatic snapshots are globally disabled. Every story that should be captured must opt in:

```tsx
export const Snapshot: Story = {
  parameters: withSnapshot({}), // opt in
}
// With a11y skip: withSkipA11y(withSnapshot({}))
```

### Tags

| Tag              | When              | Sidebar              |
| ---------------- | ----------------- | -------------------- |
| `"stable"`       | Production-ready  | ✅ toolbar only      |
| `"experimental"` | Still stabilizing | 🚧 sidebar + toolbar |
| `"internal"`     | Not public        | 🔒 sidebar + toolbar |
| `"deprecated"`   | Avoid using       | ⛔ sidebar + toolbar |

### ArgTypes for union props

Reference the component's exported const array — don't hardcode the options:

```tsx
import { buttonSizes, buttonVariants } from "../F0Example"

argTypes: {
  size: {
    control: "select",
    options: buttonSizes,
    table: { type: { summary: buttonSizes.join(" | ") } },
  },
}
```
