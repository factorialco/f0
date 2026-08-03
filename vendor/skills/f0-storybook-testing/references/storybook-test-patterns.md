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

axe runs on **every story** automatically after render. Tags checked: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22a`, `wcag22aa` — WCAG 2.0/2.1/2.2 at levels A and AA. AAA and axe's non-normative `best-practice` rules are intentionally excluded.

The tag list lives in **one** place, `src/lib/storybook-utils/a11yAxeConfig.ts`, and is imported by the CI test-runner, the Storybook a11y addon (`preview.tsx`) and the docs-panel a11y row (`A11yRow.tsx`). Don't inline it at a call-site — the three surfaces used to drift apart.

Default on violation: **test fails** (`test: "error"`) — but note `preview.tsx` currently sets a global `test: "todo"`, so in practice a story only blocks CI if it opts into `"error"`.

### The addon panel is not a CI predictor

A story can look clean in the Storybook Accessibility panel and still fail CI. Four things differ; only the first is now aligned:

| | Addon panel | CI test-runner | Aligned? |
| --- | --- | --- | --- |
| **Rule set** | shared tag list | shared tag list | ✅ yes |
| **State** | whatever is on screen right now | each story from its own `args`, **then** its play function | ❌ no |
| **Scope** | whole document | `#storybook-root` | ❌ no |
| **Viewport** | your canvas size | 1280x720 | ❌ no |

Consequences worth knowing:

- **State.** CI evaluates every story from its declared `args`. A story that presets a value renders UI you would not see by opening the component's default story — e.g. `F0Select`'s `Clearable` sets `value: "dark"`, so the clear button is present on load and its `target-size` violation fires without any interaction.
- **Scope.** Portaled content (dropdowns, tooltips, dialogs, listboxes) mounts **outside** `#storybook-root`, so **CI does not scan it** and the addon does. The two miss different things.
- **Viewport.** Geometry-dependent rules (`target-size`, `scrollable-region-focusable`) legitimately disagree between a narrow canvas and 1280x720.

**Before flipping a file to `test: "error"`, run the real thing:**

```bash
pnpm --filter @factorialco/f0-react test-storybook -- --testPathPatterns <Component>
```

Same runner, same rules, same scope, same viewport, every story, play functions included. Checking the panel — or only the default story — is not sufficient evidence.

For files still listed in `.storybook/a11y-skip-allowlist.json`, even that won't help: the test-runner returns early, so those stories are **not measured at all**. "CI never reported it" is not evidence a skipped file is clean.

### Configuring a11y behaviour per story

Skipping axe is **not allowed for new stories**. `a11y: { skipCi: true }` — whether written directly or via the deprecated `withSkipA11y()` helper — makes the test-runner **fail CI** unless the story file is grandfathered in `.storybook/a11y-skip-allowlist.json` (a Path-to-AA burndown list mapping file → allowed skip call-site count; counts may only shrink, and adding a skip even to a grandfathered file fails `a11ySkipAllowlist.test.ts`). `test: "off"` is rejected the same way.

**Removing a skip (a11y burndown)?** Always do both in the same change:

1. Remove the `skipCi: true` / `withSkipA11y(...)` usage from the story file (and fix the violations it was hiding, moving the stories to `test: "error"`).
2. Lower that file's count in `.storybook/a11y-skip-allowlist.json` by the number of call-sites removed — delete the entry when it reaches zero.

The sync unit test fails on any mismatch (`pnpm --filter @factorialco/f0-react exec vitest run src/lib/storybook-utils/a11ySkipAllowlist.test.ts`).

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
```

The contract: `test: "error"` = enforced (the default), `test: "todo"` = known debt to fix, `test: "warning"` = intentional/accepted.

### Never disable an axe rule

`a11y: { config: { rules: [{ id: "...", enabled: false }] } }` is **not allowed** and is blocked by `src/lib/storybook-utils/a11yRuleSuppression.test.ts`.

It is worse than skipping. A disabled rule leaves **no trace anywhere**: no CI failure, no job-summary line, no entry in `a11y-violations.jsonl` (so no PR comment), and nothing in the Storybook a11y panel. `skipCi` at least appears in an allowlist you can count.

Use instead:

- **Deferring a known violation** → `a11y: { test: "todo" }`. axe still runs and still reports; it just doesn't block.
- **Intentional / accepted** → `a11y: { test: "warning" }`.
- **One element genuinely not applicable** → an element-scoped opt-out, so only that node is exempt rather than the whole story. `data-a11y-color-contrast-ignore` is the existing example — `.storybook/preview.tsx` narrows the `color-contrast` rule with `selector: "*:not([data-a11y-color-contrast-ignore])"`, and `BaseAvatar.tsx` uses it on the avatar surface.

*Enabling* or reconfiguring a rule is fine — the gate only rejects disabling.

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
