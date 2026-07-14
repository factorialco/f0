# Storybook Test Patterns

## How Tests Run

`pnpm test-storybook` runs two types of tests on each story:

1. **Interaction test** — the `play` function (if present), via Playwright
2. **a11y test** — axe-playwright runs automatically after every story renders (configured in `.storybook/test-runner.ts`)

## Interaction Tests (play functions)

### Imports

```tsx
import { expect, userEvent, waitFor, within } from "storybook/test"
```

Note: `userEvent` here comes from `storybook/test`, not `@testing-library/user-event`. No `.setup()` needed.

### Basic play function

```tsx
export const Default: Story = {
  args: { label: "Click me", "data-test": "btn" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")
    await expect(button.dataset.test).toBe("btn")
  },
}
```

### Querying portals (dropdowns, tooltips, modals)

Portals render outside `canvasElement`. Query `body` instead:

```tsx
play: async ({ canvasElement }) => {
  const page = within(canvasElement.closest("body")!)
  const trigger = page.getByRole("button")
  await userEvent.click(trigger)
  await expect(page.getByText("Create")).toBeInTheDocument()
},
```

### Grouping with step()

Use `step()` to label phases — improves failure messages in the test report:

```tsx
play: async ({ canvasElement, step }) => {
  const canvas = within(canvasElement)

  await step("Verify initial state", async () => {
    expect(canvas.getByTestId("trigger")).toBeInTheDocument()
  })

  await step("Click and verify result", async () => {
    canvas.getByTestId("trigger").click()
    await waitFor(() => {
      expect(canvas.getByTestId("result")).toBeInTheDocument()
    })
  })
},
```

### Interaction + click example

```tsx
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkbox = canvas.getByRole("checkbox")
  await userEvent.click(checkbox)
  await expect(checkbox).toBeChecked()
},
```

## a11y Tests (automatic via axe-playwright)

axe runs on **every story** automatically after render. Tags checked: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`.

Default on violation: **test fails**.

### Configuring a11y behaviour per story

```tsx
// Skip axe entirely in CI (use sparingly, document why)
parameters: {
  a11y: {
    skipCi: true
  }
}

// Downgrade to warning — test passes, violation is logged
parameters: {
  a11y: {
    test: "warning"
  }
}

// Downgrade to todo — test passes, violation is logged
parameters: {
  a11y: {
    test: "todo"
  }
}

// Disable a specific rule for this story
parameters: {
  a11y: {
    config: {
      rules: [{ id: "color-contrast", enabled: false }]
    }
  }
}
```

### withSkipA11y() vs a11y parameters

These are **different things**:

|                                          | What it does                                                |
| ---------------------------------------- | ----------------------------------------------------------- |
| `withSkipA11y(withSnapshot({}))`         | Skips **Chromatic visual snapshot** a11y check              |
| `parameters: { a11y: { skipCi: true } }` | Skips **axe-playwright** a11y test in `pnpm test-storybook` |

Use both when a story has intentional a11y violations AND needs a snapshot:

```tsx
export const Snapshot: Story = {
  parameters: {
    ...withSkipA11y(withSnapshot({})),
    a11y: { test: "warning" },
  },
}
```

### Real example — disabled state intentionally fails contrast

```tsx
// Disabled buttons have lower contrast by design — downgrade to warning
export const Disabled: Story = {
  args: { disabled: true },
  parameters: { a11y: { test: "warning" } },
}
```
