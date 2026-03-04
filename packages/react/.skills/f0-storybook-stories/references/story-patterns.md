# Story Patterns

## File Location

```
src/components/F0Example/
  __stories__/
    F0Example.stories.tsx   ← story definitions (this skill)
    F0Example.mdx           ← docs tab (factorial-f0-component-documentation skill)
```

## Meta Definition

### Standard: `satisfies Meta<typeof Component>`

```tsx
// src/components/F0Button/__stories__/F0Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Button } from "../F0Button"
import { buttonVariants, buttonSizes } from "../F0Button" // imported const arrays

const meta = {
  title: "Button",
  component: F0Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/...",
    },
  },
  tags: ["autodocs", "stable"],
  args: {
    label: "Click me",
    variant: "default",
    size: "md",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: buttonVariants,
      table: { type: { summary: buttonVariants.join(" | ") } },
    },
    size: {
      control: "select",
      options: buttonSizes,
      table: { type: { summary: buttonSizes.join(" | ") } },
    },
  },
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>
```

### When component has complex generics

Use plain `Meta` without generic (e.g., F0Select):

```tsx
const meta: Meta = {
  title: "Select",
  component: F0Select,
  // ...
}
```

### When `ComponentProps` is needed

```tsx
// src/components/F0Icon/__stories__/F0Icon.stories.tsx
import { ComponentProps } from "react"

const meta = {
  title: "Icon",
  component: F0Icon,
  // ...
} satisfies Meta<ComponentProps<typeof F0Icon>>
```

## Tags

Defined globally in preview — `"autodocs"` is already injected for all stories. Add a stability tag:

```tsx
tags: ["autodocs", "stable"] // production-ready
tags: ["autodocs", "experimental"] // still stabilizing
tags: ["autodocs", "internal"] // not public, hidden in public builds
tags: ["autodocs", "deprecated"] // avoid using
```

Sidebar badges come from `.storybook/manager.ts`: `"experimental"` → 🚧, `"stable"` → ✅ (toolbar only), `"internal"` → 🔒, `"deprecated"` → ⛔.

Use `"no-sidebar"` to hide a story from navigation entirely.

## ArgTypes Patterns

### Const array options (most common)

Always reference the component's exported const array — never hardcode:

```tsx
import { cardImageFits, cardImageSizes } from "../F0Card"

argTypes: {
  imageFit: {
    control: "select",
    options: cardImageFits,
    description: "How the image should be displayed/fitted",
    table: {
      type: { summary: cardImageFits.join(" | ") },
      defaultValue: { summary: "fit-width" },
    },
  },
}
```

### Complex type description

For props whose type can't be expressed as a simple union:

```tsx
argTypes: {
  searchFn: {
    description: "Function to filter the options.",
    table: {
      type: {
        summary: "(option: SelectItemObject<string>, search?: string) => boolean | undefined",
      },
    },
  },
}
```

### Icon mapping

For icon pickers, use `options` (string keys) + `mapping` (actual components):

```tsx
import * as Icons from "@/icons/app"

argTypes: {
  icon: {
    control: "select",
    options: Object.keys(Icons),
    mapping: Icons,
    description: "Select an icon to display",
  },
}
```

### Radio control for small sets

```tsx
argTypes: {
  size: {
    control: "radio",
    options: ["xs", "sm", "md", "lg"],
  },
}
```

### Disabling a control per story

```tsx
export const ImageFitOptions: Story = {
  argTypes: {
    avatar: { table: { disable: true } },
    compact: { table: { disable: true } },
  } as never,
}
```

## Story Definitions

### Args-only (simplest)

```tsx
export const Default: Story = {
  args: {
    label: "Default Button",
    variant: "default",
  },
}
```

### Inheriting from another story

```tsx
export const WithLink: Story = {
  args: {
    ...Default.args,
    link: "/",
  },
}
```

### Render function

Use when the story needs layout, multiple instances, or stateful wrappers:

```tsx
export const Variants: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex gap-2">
      <F0Button {...args} variant="default" label="Default" />
      <F0Button {...args} variant="outline" label="Outline" />
      <F0Button {...args} variant="critical" label="Critical" />
    </div>
  ),
}
```

Stateful render:

```tsx
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <F0Example {...args} value={value} onChange={setValue} />
  },
}
```

### Play function (interaction tests)

```tsx
import { expect, within } from "storybook/test"

export const Default: Story = {
  args: { label: "Click me", "data-test": "btn" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")
    await expect(button.dataset.test).toBe("btn")
  },
}
```

### JSDoc on stories

Add a JSDoc comment for stories that need explanation in the docs:

```tsx
/**
 * Multiple selection with paginated data (2,847 employees).
 * Use `defaultItem` to provide labels for pre-selected values not in the first page.
 */
export const MultiplePaginated: Story = {
  // ...
}
```

## Snapshot Story

Chromatic snapshots are **globally disabled**. Opt in with `withSnapshot({})`.

### Basic: reference other stories' args

```tsx
import { withSnapshot } from "@/lib/storybook-utils/parameters"

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-2">
      <F0Card {...Default.args} />
      <F0Card {...WithActions.args} />
      <F0Card {...Compact.args} />
      <F0Card.Skeleton />
      <F0Card.Skeleton compact />
    </div>
  ),
}
```

### Iterating over const arrays (variants × sizes)

```tsx
// src/components/F0ButtonToggle/__stories__/F0ButtonToggle.stories.tsx
import { buttonToggleVariants, buttonToggleSizes } from "../F0ButtonToggle"

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({})),
  render: () => (
    <div className="flex flex-col gap-2">
      {buttonToggleVariants.map((variant) => (
        <div key={variant}>
          <h4 className="mb-3 text-lg font-semibold">Variant: {variant}</h4>
          <div className="flex flex-row gap-2">
            {buttonToggleSizes.map((size) => (
              <div key={size}>
                <F0ButtonToggle
                  size={size}
                  variant={variant}
                  selected={false}
                  label="Off"
                  icon={Placeholder}
                />
                <F0ButtonToggle
                  size={size}
                  variant={variant}
                  selected={true}
                  label="On"
                  icon={Placeholder}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
```

### Skipping a11y on the Snapshot

When the snapshot story contains states that intentionally fail a11y checks (e.g., disabled states):

```tsx
import { withSnapshot, withSkipA11y } from "@/lib/storybook-utils/parameters"

parameters: withSkipA11y(withSnapshot({}))
```

### Adding a story description alongside snapshot

```tsx
export const Ellipsis: Story = {
  parameters: withSnapshot({
    docs: {
      description: {
        story: "Button text truncates with ellipsis when constrained.",
      },
    },
  }),
  // ...
}
```

## Decorators

### Meta-level decorator (applies to all stories)

```tsx
const meta = {
  // ...
  decorators: [
    (Story) => (
      <div className="w-[330px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0Example>
```

### Meta-level decorator with context (can be bypassed per story)

```tsx
decorators: [
  (Story, context) => {
    if (context.parameters?.noMetaLayout) return <Story />
    return (
      <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center">
        <div className="w-full max-w-[372px]">
          <Story />
        </div>
      </div>
    )
  },
],
```

### Stateful decorator (`satisfies Decorator`)

Use when all stories need controlled state (e.g., selects, toggles):

```tsx
import type { Decorator, Meta } from "@storybook/react-vite"

decorators: [
  ((Story, { args }) => {
    const [localValue, setLocalValue] = useState(args.value)
    const handleChange = (val: string) => {
      setLocalValue(val)
      args.onChange?.(val)
    }
    return <Story args={{ ...args, value: localValue, onChange: handleChange }} />
  }) satisfies Decorator,
],
```

## Internal Stories

When a component has private props that shouldn't be in the public story, create a companion `.internal.stories.tsx` that spreads the public meta:

```tsx
// F0ButtonToggle.internal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import F0ButtonToggleStories from "./F0ButtonToggle.stories"
import { F0ButtonToggleInternal } from "../internal/F0ButtonToggle.internal"

const meta = {
  ...F0ButtonToggleStories,
  title: "ButtonToggle/Internal",
  component: F0ButtonToggleInternal,
  tags: ["autodocs", "internal"],
  parameters: {
    ...F0ButtonToggleStories.parameters,
    docs: {
      description: { component: "F0ButtonToggle including the internal props" },
    },
  },
  argTypes: {
    ...F0ButtonToggleStories.argTypes,
    withBorder: {
      description: "🔒 [INTERNAL] Whether to show a border around the toggle",
      control: "boolean",
    },
  },
} satisfies Meta<typeof F0ButtonToggleInternal>

export default meta
type Story = StoryObj<typeof meta>
```

## Complete Minimal Example

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { F0Example } from "../F0Example"
import { exampleSizes, exampleVariants } from "../F0Example"

const meta = {
  title: "Example",
  component: F0Example,
  parameters: { layout: "centered" },
  tags: ["autodocs", "stable"],
  args: {
    label: "Example",
    size: "md",
    variant: "default",
    onClick: fn(),
  },
  argTypes: {
    size: {
      control: "select",
      options: exampleSizes,
      table: { type: { summary: exampleSizes.join(" | ") } },
    },
    variant: {
      control: "select",
      options: exampleVariants,
      table: { type: { summary: exampleVariants.join(" | ") } },
    },
  },
} satisfies Meta<typeof F0Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: "Default" },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-2">
      {exampleVariants.map((variant) => (
        <div key={variant} className="flex gap-2">
          {exampleSizes.map((size) => (
            <F0Example
              key={size}
              label={`${variant} ${size}`}
              variant={variant}
              size={size}
            />
          ))}
        </div>
      ))}
    </div>
  ),
}
```
