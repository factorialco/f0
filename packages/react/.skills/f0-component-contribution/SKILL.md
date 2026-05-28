---
name: f0-component-contribution
description: Use when starting a new F0 component. Covers Phases 1–3 of the lifecycle (proposal, triage, design, build in experimental/). For promotion to stable, use f0-component-promotion.
---

# F0 Component Contribution (Phases 1–3)

This skill guides contributors through proposing, designing, and building a new F0 component, ending when the component is merged into `src/experimental/` (or `src/sds/<area>/`). Promotion to stable is covered by `f0-component-promotion`.

The full lifecycle contract is in [`packages/react/docs/definition-of-done.mdx`](../../docs/definition-of-done.mdx). This skill is the operational playbook.

---

## Phase 0 — Discovery & Evaluation (BEFORE proposing)

> **Every proposal is evaluated on its merits.** F0 grows intentionally — we say yes when a component has clear cross-team value, and we say no with a documented reason and an alternative (extend an existing component, app-local solution, etc). Phase 0 exists so contributors get fast, friendly feedback before investing in design or code.

Before opening any issue, the contributor (with help from Claude/OpenCode) should self-evaluate by answering 4 questions. **If the idea fails 0.1 or 0.2, do not proceed to Phase 1; the answer is reuse or extension.** Questions 0.3 and 0.4 are inputs to the design review — they don't auto-block.

### 0.1 — Does it already exist?

- Search Storybook (or ask Claude: "is there an F0 component for X?").
- Check `experimental/` and `sds/` folders, not just `components/`.
- If found → **use it. Stop here.**

### 0.2 — Can an existing component be extended?

- Could a new prop, variant, or slot solve the case?
- If yes → open a **Component Enhancement issue**, NOT a Proposal. Skip the rest of this skill and follow the enhancement flow.

### 0.3 — Is the need recurrent across teams?

- We need at least **2 real use cases from different teams**. List them in the proposal with links (Slack, Jira, designs, ad-hoc implementations).
- An F0 designer can waive the team-count requirement on review if the use case is clearly foundational (e.g., a new primitive that unlocks a category).
- If the need is specific to a single feature in a single product, it likely does not belong in F0 — build it inside the feature.

### 0.4 — Could a pattern, kit, or composition solve it?

- Sometimes the answer is not a new component but documenting how to compose existing ones.
- Patterns and kits are cheaper to maintain than components.

**When in doubt, open the proposal anyway and ask for early design feedback.** Phase 0 is a self-help filter, not a gate. The real gate is the **design-review checkbox** on the proposal issue (see Phase 1).

The remaining evaluation criteria (DS pertinence, API generality, cost/benefit, simpler alternatives) are evaluated by an F0 designer during Phase 1 review.

---

## Phase 1 — Open a proposal

1. Open a [Component proposal issue](https://github.com/factorialco/factorial-one/issues/new?template=component-proposal.yml). The template walks you through Phase 0 in-line.
2. Fill all required sections: problem statement, Phase 0 self-eval (4 questions), proposed name, rough API.
3. Labels `f0:proposal` and `needs-design-review` are auto-applied by the template.
4. **Wait for design review.** An F0 designer will read the proposal and either:
   - ✅ Check the **"Reviewed and approved by an F0 designer"** box → you can proceed to Phase 2 (`experimental/` build).
   - 💬 Request changes / more evidence in the issue.
   - ❌ Decline with a documented reason and (where possible) an alternative path.

   **Do not start building in `experimental/` until the design-review checkbox is checked.**

## Phase 2 — Design

1. Create the Figma design (or attach existing).
2. Document the API draft in the issue: prop names, types, variants, slots, default values.
3. Request a **design review** (see [Design Review docs](../../docs/design-review.mdx) for the 10-category checklist).
4. Address all blocking comments.
5. Get explicit approval from at least one Foundations designer.

## Phase 3 — Build

Follow this sequence. Each step has a corresponding F0 skill — load it when needed.

### 3.1 — Scaffold the folder

```
src/experimental/<Category>/F0Name/
  __tests__/
  __stories__/
  index.tsx          # exports only
  F0Name.tsx         # implementation
  types.ts           # public types
  internal-types.ts  # private types (not exported)
```

For `accepted-as-domain` proposals, use `src/sds/<area>/` instead of `src/experimental/<Category>/`.

### 3.2 — Implement the component

Load **`f0-component-patterns`** for: forwardRef, context, controlled/uncontrolled, CVA variants, design tokens, i18n, a11y patterns.

Required:

- All public components prefixed `F0` (e.g., `F0MyComponent`).
- Use `experimentalComponent("F0Name", Cmp)` from `@/lib/experimental` in `index.tsx`.
- Use `@/ui/` wrappers (never import Radix directly).
- Design tokens only (`f1-foreground`, `f1-background`, etc.) — no hex colors.
- All user-facing strings go through `useI18n()`.

### 3.3 — Write tests

Load **`f0-unit-testing`** for Vitest patterns and **`f0-storybook-testing`** for play function + axe a11y patterns.

Required:

- Unit tests cover the public API (props, variants, callbacks).
- Storybook play function covers the primary user flow.
- `axe` a11y test passes.

### 3.4 — Write the story

Load **`f0-storybook-stories`** for `.stories.tsx` patterns.

Required:

- Story title: `"Components/F0MyComponent"` (no `Experimental/` prefix in sidebar).
- Tags: `["autodocs", "experimental"]`.
- At least 3 stories: default, edge case, full configuration.

### 3.5 — Write MDX docs

Load the global **`factorial-f0-component-documentation`** skill.

Target tier: **Acceptable** minimum for Phase 3 exit. Aim for **Good** if you plan to promote soon.

### 3.6 — Run quality gate

Load **`f0-quality-gate`** and run the full workflow. Must pass before opening a PR.

### 3.7 — Open the PR

Load **`f0-pr`** for title format and PR template.

PR title: `feat(F0Name): add experimental component (#<proposal-issue>)`.

In the PR body:

- Link the proposal issue.
- Confirm design review approved.
- Confirm `f0-quality-gate` passed.

### 3.8 — Merge

Once reviewed and approved, merge. The component is now live as `experimental`.

---

## After merge — what's next?

The component lives in `experimental/` until it meets Phase 4 criteria (≥3 product teams in production, no breaking changes for 60 days, zero critical bugs). At that point, request promotion using **`f0-component-promotion`**.

The owning team is responsible for the component until promotion (when ownership transfers to Foundations).

---

## Common pitfalls

- **Skipping triage** — implementing before `accepted` wastes work; the proposal may be rejected or redirected.
- **Skipping design review** — the API will likely need to change later, breaking experimental consumers.
- **Naming without `F0` prefix** — required for all public components.
- **Hard-coded colors or strings** — use design tokens and `useI18n()`.
- **Importing Radix directly** — use `@/ui/` wrappers.
- **Forgetting `experimentalComponent()` wrapper** — needed for the runtime warning consumers see.
