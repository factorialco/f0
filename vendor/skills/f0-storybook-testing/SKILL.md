---
name: f0-storybook-testing
description: Write Storybook play function interaction tests and configure axe-playwright a11y tests for F0 components. Use when adding play functions to stories, debugging a11y violations, or configuring per-story a11y test modes.
---

# F0 Storybook Testing

Covers two types of tests that run via `pnpm test-storybook`:

1. **Interaction tests** — `play` functions in `.stories.tsx` files
2. **a11y tests** — axe-playwright runs automatically on every story via `.storybook/test-runner.ts`

For story file structure and snapshot patterns, see the `f0-storybook-stories` skill instead.

## Quick Reference

| Need                                                                             | See                                     |
| -------------------------------------------------------------------------------- | --------------------------------------- |
| play functions, step(), userEvent in stories, portal queries, a11y configuration | `references/storybook-test-patterns.md` |

## Key Rules

### Interaction Tests (play functions)

- Import `expect`, `within`, `userEvent`, `waitFor` from `"storybook/test"`
- Use `within(canvasElement)` to scope queries to the story canvas
- For portals (dropdowns, tooltips): query `canvasElement.closest("body")!` instead
- Use `step()` to group related assertions — improves failure messages
- `userEvent` in play functions does **not** need `.setup()` — call directly

### a11y Tests (automatic)

- axe runs on **every story** automatically after render (WCAG 2.x AA)
- Default behaviour on violation: test **fails** (`"error"` mode)
- Skipping axe is **not allowed for new stories**: `a11y: { skipCi: true }` (and the deprecated `withSkipA11y()` helper, which sets it) fail CI unless the story file is grandfathered in `.storybook/a11y-skip-allowlist.json` — a burndown list of file → allowed call-site count that only shrinks (adding a skip even to a grandfathered file fails the unit tests). `test: "off"` is rejected too.
- **When you remove a `skipCi` or `withSkipA11y` usage** (a11y burndown), you MUST update `.storybook/a11y-skip-allowlist.json` in the same change: lower that file's count by the number of call-sites removed, and delete the entry entirely when it reaches zero. Verify with `pnpm --filter @factorialco/f0-react exec vitest run src/lib/storybook-utils/a11ySkipAllowlist.test.ts` — it fails on any mismatch.
- For known violations, downgrade instead of skipping:

```tsx
// Known a11y debt — test passes, violation logged (tracked for burndown)
parameters: {
  a11y: {
    test: "todo"
  }
}

// Intentional violation (e.g. disabled-state contrast) — test passes, logged
parameters: {
  a11y: {
    test: "warning"
  }
}

// Custom axe rules for this story
parameters: {
  a11y: {
    config: {
      rules: [{ id: "color-contrast", enabled: false }]
    }
  }
}
```

- The contract: `test: "error"` = enforced (default), `test: "todo"` = known debt to fix, `test: "warning"` = intentional. axe always runs.

## Commands

```bash
pnpm test-storybook                      # run all storybook tests
pnpm test-storybook -- --testPathPattern filename  # run one file
```

## Promotion evidence

Storybook play function and a11y test results count as evidence for **Phase 4 (Real use)** of the F0 component lifecycle. When promoting a component from `experimental/` to stable, attach the latest passing test output to the #f0-support promotion thread. See the `f0-component-promotion` skill.
