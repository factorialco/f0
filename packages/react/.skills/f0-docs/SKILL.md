---
name: f0-docs
description: Document F0 React components in Storybook (MDX). Load automatically when a new component is created or an existing component gets new props/variants. Covers the 4-step workflow: analyze code, ask creator (if needed), write MDX, update stories.
---

# F0 Docs

Every component in `packages/react/src/components/` must have an MDX documentation file next to its stories. In this repo, that may be in `__stories__/`, in `__storybook__/`, or alongside flat story files such as `index.stories.tsx`. This skill defines the mandatory workflow for writing it correctly.

## When to Load

- A new component is created — MDX is required before the work is considered done
- An existing component gets new props or variants — MDX must be updated to cover them
- User asks to document a component in Storybook
- User asks to convert `autodocs` to manual MDX
- `f0-quality-gate` Subagent C reports a missing or incomplete MDX file

---

## Mandatory Workflow — 4 Steps

Execute these steps in order. Do not skip to MDX authoring without completing the analysis first.

### Step 1 — Analyze the component

Read the source files and extract the full public surface: props, types, defaults, variants, stories, and conditional behaviors. Build a WHEN→THEN rule list from the source code.

Full protocol: [`references/component-analysis.md`](./references/component-analysis.md)

### Step 2 — Ask the creator (when needed)

**Infer without asking** for components with a universal role in product UI (Button, Alert, Dialog, Badge, Input, etc.) and for all information that exists in the code.

**Ask the creator** when the component has Factorial-specific behavior that cannot be inferred from code:

- Where in Factorial does this appear?
- What triggers it?
- What Factorial-specific error states or edge cases exist?
- When should developers NOT use this?
- Are there consistent prop combinations used in specific Factorial contexts?

Ask all questions at once. Do not drip-feed. If no Factorial-specific questions apply, skip this step.

Question list: [`references/component-analysis.md → Step 4`](./references/component-analysis.md)

### Step 3 — Evaluate quality target

Before writing, decide the quality level to target (Acceptable / Good / Gold) based on the component's importance and completeness of available information. Check the gold standard:

- `F0Alert/__stories__/F0Alert.mdx` — gold standard: decision tables, DoDonts with visual children, a11y section, dismissible usage (added in companion PR #3894)

Quality criteria per section: [`references/documentation-quality.md`](./references/documentation-quality.md)

### Step 4 — Write the MDX and update stories

Create the MDX file and update the corresponding `*.stories.tsx` file to disable autodocs using this repo's supported story-level override for manual MDX pages (do not rely on removing `autodocs` from the stories meta, because autodocs is enabled globally in this codebase). Follow the full template and validation checklist.

Full template + workflow: [`references/mdx-authoring.md`](./references/mdx-authoring.md)

---

## Quick Reference

| Need                                                                                                  | Reference                                                                      |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Source analysis protocol, props inventory, WHEN→THEN extraction, creator questions                    | [`references/component-analysis.md`](./references/component-analysis.md)       |
| Quality criteria per section, WHEN→THEN rules, component relationships, a11y by type, 11 global rules | [`references/documentation-quality.md`](./references/documentation-quality.md) |
| Full MDX template, table templates, utility components (Unstyled, DoDonts), stories update, checklist | [`references/mdx-authoring.md`](./references/mdx-authoring.md)                 |
| Which components have docs and which need them                                                        | [`references/component-status.md`](./references/component-status.md)           |

---

## Authoring Principles

These rules apply across the workflow. Violating them produces redundant, drift-prone, or low-quality docs.

### Refactor without losing value

When reorganizing an existing MDX into a new structure, **audit what already exists in that section first**. Do not delete a valuable visual or example just because you are changing the surrounding format. Combine them when they serve different purposes (e.g. scannable text bullets + visual `<DoDonts>` reference).

### `### Behavior` is non-obvious runtime behavior

`### Behavior` (inside `## Guidelines`) is for information that is **specific to this component AND not visible elsewhere in the doc**. Apply this filter:

- ❌ Skip if `<Controls>` already shows it (props, defaults, types of individual props)
- ❌ Skip if it's component-global behavior (e.g., `data-testid` support via `withDataTestId` applies to ALL components)
- ❌ Skip if Modes / Variants tables in `## Anatomy` or `### Design best practices` already cover it
- ✅ Include non-obvious runtime behavior — async `onClick` auto-loading, polymorphic rendering when an `href` is passed, controlled/uncontrolled rules, ref typing for polymorphic components, focus management specific to this component
- ❌ Do NOT add a "Related components" section — it is not visual nor relevant on the Docs page; cross-references belong in the 1–2 sentence intro under `# ComponentName`
- ❌ Do NOT call this section "Code", "Patterns", or "Advanced" — these aren't usage patterns, they are runtime behaviors

If a subsection would only contain redundant info, omit it. If the component has no non-obvious behavior, omit `### Behavior` entirely.

### Inline Correct / Incorrect for copy rules — pair with a visual DoDonts

For wording and copy rules in `### Content best practices`, use **inline `**Correct:** / **Incorrect:**` bullets** for the rules themselves — more scannable than prose for textual examples. Use plain bold; never emojis (✅ / ❌).

```mdx
- Use imperative verbs
  - **Correct:** "Save changes", "Delete account", "Export data"
  - **Incorrect:** "Saved", "Deletion", "Exportation"
```

**Always pair the bullets with a `<DoDonts>` visual** showing one representative good vs bad label rendered as the actual component. The bullets give scannable rules; the DoDonts gives a real visual reference. The two formats complement each other — never drop the visual when adding the inline pattern.

---

## Documentation is a Blocking Requirement

A component is not considered done until its MDX file exists and covers all public props and variants. The `f0-quality-gate` enforces this:

- New component with no MDX → **BLOCKING** in Subagent C report
- New prop or variant with no MDX coverage → **BLOCKING** in Subagent C report

---

## Relationship to Other Skills

| Skill                  | Covers                                                        |
| ---------------------- | ------------------------------------------------------------- |
| `f0-docs` (this skill) | MDX documentation files (`__stories__/*.mdx`)                 |
| `f0-storybook-stories` | Story files (`__stories__/*.stories.tsx`)                     |
| `f0-storybook-testing` | `play` functions and a11y tests inside story files            |
| `f0-quality-gate`      | Runs all checks after any code change, including MDX coverage |

MDX and stories are separate files with separate purposes — both are required.
