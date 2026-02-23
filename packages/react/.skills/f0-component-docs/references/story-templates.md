# Story Templates

## Required Imports

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
```

Import the component from its entry point (e.g., `import { MyComponent } from "./index"`).

## Meta Definition

```tsx
const meta = {
  title: "ComponentCategory/ComponentName",
  component: ComponentUnderTest,
  tags: ["autodocs", "stable"],
  // or ["autodocs", "experimental"] for experimental components
} satisfies Meta<typeof ComponentUnderTest>

export default meta
type Story = StoryObj<typeof meta>
```

- Derive `title` from file path: `src/components/Input/index.tsx` → `Components/Input`
- Always include `tags: ['autodocs']`
- Add `'stable'` or `'experimental'` tag

## Required Stories

Create at minimum:

1. **Default** — Basic usage with minimal required props
2. **Variant stories** — One per significant variant (based on props analysis)
3. **Edge case stories** — Empty states, long text, loading, error states
4. **Snapshot** — For Chromatic visual regression:

```tsx
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {/* Include all meaningful variants */}
    </div>
  ),
}
```

## ArgTypes for Union Types

Use the const array from the component for select controls:

```tsx
argTypes: {
  color: {
    control: "select",
    options: colors, // from the component's const array
  },
}
```

For union types without a const array, use `table`:

```tsx
argTypes: {
  color: {
    table: {
      type: {
        summary: "Color = 'a' | 'b' | 'c'",
      },
    },
  },
}
```

## Play Functions (Interaction Tests)

Add `play` functions for interactive stories:

```tsx
export const Default: Story = {
  args: {
    /* ... */
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("User interaction description", async () => {
      await userEvent.click(canvas.getByRole("button"))
      await expect(canvas.getByText("Result")).toBeVisible()
    })
  },
}
```

Guidelines:

- Use `step` to group logical actions
- Simulate real user interactions (`userEvent.click`, `userEvent.type`, etc.)
- Verify DOM changes, visual states, and component reactions
- For forms: fill fields, simulate submission, verify validations
- For components with internal state: simulate actions that change state, verify DOM result
