---
name: f0-quality-gate
description: Automated post-implementation quality gate for F0 React components. Runs inline commands (typecheck, lint, tests) then spawns parallel subagents for code review, a11y, and Storybook checks. Auto-fixes non-blocking issues and reports blockers to the user.
---

# F0 Quality Gate

Runs a two-phase quality check after any code modification in `packages/react/`. Execute this workflow automatically — do not wait for the user to ask.

## When to Run

Run after completing **any** of:

- New component created
- Existing component modified
- Hook added or changed
- Bug fix applied
- Refactoring completed

**Skip when:**

- The user explicitly says to skip checks
- The change is documentation-only (`.md`, `.mdx` files, comments)
- The change is icon generation or other auto-generated files

---

## Step 0 — Gather Changed Files

Before running any phase, collect the list of changed files:

```bash
git diff --name-only HEAD
git diff --name-only --cached
```

Combine both lists, deduplicate, and filter to files under `packages/react/src/`. Store this as the **changed file list** — both phases use it.

Also collect the full diff for Phase 2 subagents:

```bash
git diff HEAD -- packages/react/src
git diff --cached -- packages/react/src
```

If there are no changed files under `packages/react/src/`, skip the quality gate entirely.

---

## Phase 1 — Inline Commands

Run these sequentially in the main agent. If a step fails, attempt auto-fix before proceeding. If auto-fix fails, record the failure and continue to the next step — do not abort the whole gate.

### 1a. TypeScript

```bash
pnpm tsc --noEmit
```

- On failure: attempt to fix type errors directly in the source files
- After fix, re-run `pnpm tsc --noEmit` to confirm
- If still failing: record as **blocking**, continue

### 1b. Lint

```bash
pnpm lint-fix
pnpm lint
```

Run `lint-fix` first to auto-resolve fixable violations, then `lint` to catch anything remaining.

- If `lint` still reports errors after `lint-fix`: record as **blocking**, continue
- Auto-fixed violations: record count for the summary

### 1c. Tests

Run only tests for changed files to keep this fast:

```bash
pnpm vitest:ci -- --reporter=verbose $(git diff --name-only HEAD --cached | grep '__tests__' | tr '\n' ' ')
```

If no test files changed directly, run tests for all components whose source files changed:

```bash
pnpm vitest:ci -- --reporter=verbose --testPathPattern "<component-name>"
```

- On failure: record failing test names as **blocking**, do not attempt auto-fix (test failures require human judgment)
- On pass: record count for the summary

---

## Phase 2 — Parallel Subagent Reviews

After Phase 1 completes (regardless of failures — subagent reviews are independent), spawn **three subagents in parallel** using the Task tool.

Pass each subagent:

1. The **changed file list** from Step 0
2. The **full diff content** from Step 0
3. Its specific instructions below

### Subagent A: Code Review

**Prompt to pass:**

```
You are a code reviewer for the F0 React component library.

Load the `f0-code-review` skill from `.skills/f0-code-review/SKILL.md`.
Also read `packages/react/AGENTS.md` for full conventions.

Review the following changed files against the skill's checklist.
For each issue found, classify it as:
- BLOCKING: must be fixed before this work is done
- SUGGESTION: improvement, but not required

Changed files:
{changed file list}

Diff:
{full diff}

Return a structured report with this exact format:

## Code Review Report

### Blocking Issues
- {file}:{line} — {description}

### Suggestions
- {file}:{line} — {description}

### Auto-fixable Suggestions
List only suggestions that are safe to auto-fix without changing behavior:
- {file}:{line} — {description} — FIX: {exact change to make}

If no issues found in a category, write "None".
```

### Subagent B: Accessibility

**Prompt to pass:**

```
You are an accessibility reviewer for the F0 React component library.

Load the `a11y` skill from `.agents/skills/a11y/SKILL.md`.
Also check `packages/react/AGENTS.md` section on Accessibility.

Review the following changed files for WCAG 2.1/2.2 Level AA compliance.
Focus on:
- Semantic HTML and ARIA usage
- Keyboard accessibility (focus, tab order, Enter/Space handlers)
- Screen reader support (sr-only labels, aria-live, aria-busy)
- Focus ring via focusRing() on all focusable elements
- useReducedMotion() in animated components

For each issue found, classify it as:
- BLOCKING: violates WCAG AA, must be fixed
- SUGGESTION: improvement, but not strictly required

Changed files:
{changed file list}

Diff:
{full diff}

Return a structured report with this exact format:

## A11y Review Report

### Blocking Issues
- {file}:{line} — {description} — WCAG criterion: {criterion}

### Suggestions
- {file}:{line} — {description}

### Auto-fixable Suggestions
List only suggestions that are safe to auto-fix without changing behavior:
- {file}:{line} — {description} — FIX: {exact change to make}

If no issues found in a category, write "None".
```

### Subagent C: Storybook

**Prompt to pass:**

```
You are a Storybook reviewer for the F0 React component library.

Load the `f0-storybook-stories` skill from `.skills/f0-storybook-stories/SKILL.md`.
Load the `f0-storybook-testing` skill from `.skills/f0-storybook-testing/SKILL.md`.

Review the following changed files. For each changed component, check its
corresponding `__stories__/` directory and verify:

1. A `.stories.tsx` file exists for every changed component
2. Meta uses `satisfies Meta<typeof Component>` (not `as Meta`)
3. Tags include `["autodocs", "stable"]` or `["autodocs", "experimental"]`
4. A `Snapshot` story exists with `parameters: withSnapshot({})`
5. ArgTypes for union props reference the component's const arrays
6. Interactive components have at least one `play` function story

For each issue found, classify it as:
- BLOCKING: required by F0 conventions (missing story file, missing Snapshot story)
- SUGGESTION: improvement (missing play function, incomplete argTypes)

Changed files:
{changed file list}

Diff:
{full diff}

Return a structured report with this exact format:

## Storybook Review Report

### Blocking Issues
- {file}:{line} — {description}

### Suggestions
- {file}:{line} — {description}

### Auto-fixable Suggestions
List only suggestions that are safe to auto-fix without changing behavior:
- {file}:{line} — {description} — FIX: {exact change to make}

If no issues found in a category, write "None".
```

---

## Step 3 — Collect Results and Auto-fix

Once all three subagents return their reports:

1. **Apply auto-fixes**: For every item listed under `Auto-fixable Suggestions` across all three reports, apply the fix directly. Keep a count.

2. **Re-run lint after auto-fixes** (if any fixes were applied):

   ```bash
   pnpm lint-fix && pnpm lint
   ```

3. **Compile the summary** (see format below).

---

## Step 4 — Present Summary

Always present the summary, even when everything passes. Format:

```
Quality Gate Results
────────────────────────────────────────────
Phase 1 (Commands)
  TypeScript:  PASS | FAIL
  Lint:        PASS ({n} auto-fixed) | FAIL
  Tests:       PASS ({n} passed) | FAIL ({failing test names})

Phase 2 (Reviews)
  Code Review: PASS | {n} blocking, {n} suggestions ({n} auto-fixed)
  A11y:        PASS | {n} blocking, {n} suggestions ({n} auto-fixed)
  Storybook:   PASS | {n} blocking, {n} suggestions ({n} auto-fixed)

────────────────────────────────────────────
```

If there are blocking issues, list them after the table:

```
Blocking issues requiring your attention:

[Code Review]
  src/components/F0Example/F0Example.tsx:42
  → Direct Radix import — must use @/ui/ wrapper

[A11y]
  src/components/F0Example/F0Example.tsx:78
  → Icon-only button missing sr-only label — WCAG 1.1.1

[Storybook]
  src/components/F0Example/__stories__/F0Example.stories.tsx
  → Missing Snapshot story with withSnapshot({})
```

If everything passes (or only auto-fixed suggestions remain), say:

```
Quality gate passed. All checks green.
```

---

## Quick Reference

| Phase       | Tool           | Command / Agent                                       |
| ----------- | -------------- | ----------------------------------------------------- |
| TypeScript  | Bash           | `pnpm tsc --noEmit`                                   |
| Lint        | Bash           | `pnpm lint-fix && pnpm lint`                          |
| Tests       | Bash           | `pnpm vitest:ci`                                      |
| Code Review | Task (general) | Loads `f0-code-review`                                |
| A11y        | Task (general) | Loads `a11y`                                          |
| Storybook   | Task (general) | Loads `f0-storybook-stories` + `f0-storybook-testing` |
