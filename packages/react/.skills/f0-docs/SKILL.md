---
name: f0-docs
description: Document F0 React components in Storybook (MDX). Load automatically when a new component is created or an existing component gets new props/variants. Covers the 4-step workflow: analyze code, ask creator (if needed), write MDX, update stories.
---

# F0 Docs

Every component in `packages/react/src/components/` must have an MDX documentation file in its `__stories__/` folder. This skill defines the mandatory workflow for writing it correctly.

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

Before writing, decide the quality level to target (Acceptable / Good / Gold) based on the component's importance and completeness of available information. Check the gold standards:

- `F0Alert/__stories__/F0Alert.mdx` — gold standard: decision tables, DoDonts with visual children, a11y section, dismissible usage

Quality criteria per section: [`references/documentation-quality.md`](./references/documentation-quality.md)

### Step 4 — Write the MDX and update stories

Create the MDX file and remove `autodocs` from the stories meta. Follow the full template and validation checklist.

Full template + workflow: [`references/mdx-authoring.md`](./references/mdx-authoring.md)

---

## Quick Reference

| Need                                                                                                  | Reference                                                                      |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Source analysis protocol, props inventory, WHEN→THEN extraction, creator questions                    | [`references/component-analysis.md`](./references/component-analysis.md)       |
| Quality criteria per section, WHEN→THEN rules, component relationships, a11y by type, 11 global rules | [`references/documentation-quality.md`](./references/documentation-quality.md) |
| Full MDX template, table templates, utility components (DocsNav, DoDonts), stories update, checklist  | [`references/mdx-authoring.md`](./references/mdx-authoring.md)                 |
| Which components have docs and which need them                                                        | [`references/component-status.md`](./references/component-status.md)           |

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
