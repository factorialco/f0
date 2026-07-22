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

Skipping axe is **not allowed for new stories**. `a11y: { skipCi: true }` — whether written directly or via the deprecated `withSkipA11y()` helper — makes the test-runner **fail CI** unless the story file is grandfathered in `.storybook/a11y-skip-allowlist.json` (a Path-to-AA burndown list mapping file → allowed skip call-site count; counts may only shrink — lower the count when you remove skips, delete the entry at zero, and adding a skip even to a grandfathered file fails `a11ySkipAllowlist.test.ts`). `test: "off"` is rejected the same way.

Downgrade instead of skipping — axe always runs:

```tsx
// Known a11y debt — test passes, violation is logged and listed in the
// GitHub job summary (tracked for burndown; fix and move to "error")
parameters: {
  a11y: {
    test: "todo"
  }
}

// Intentional violation — test passes, violation is logged
parameters: {
  a11y: {
    test: "warning"
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

The contract: `test: "error"` = enforced (the default), `test: "todo"` = known debt to fix, `test: "warning"` = intentional/accepted.

### withSkipA11y() (deprecated) vs withSnapshot()

- `withSkipA11y(params)` (deprecated) sets `a11y: { skipCi: true }` — the **axe skip** that is now blocked for new stories. Do not use it.
- `withSnapshot(params)` enables the **Chromatic visual snapshot** — unrelated to axe. Keep using it.

For a snapshot story with a known violation, compose the parameters directly:

```tsx
export const Snapshot: Story = {
  parameters: withSnapshot({ a11y: { test: "todo" } }),
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
