---
name: f0-component-contribution
description: Use when someone wants to add or change something in F0 (a component, prop, token, icon, or pattern). Covers the filter, the alignment, and the build in experimental/. You (the agent) are the door — you search, filter, and guide. For promotion to stable, use f0-component-promotion.
---

# F0 Component Contribution

You are the entry point to F0. When a contributor says "I need X", **you** search the repo and Storybook, filter the request, help them align with Foundations, and drive the build. The amount of process **scales with the impact** of the change.

This skill ends when the change is merged into `experimental/` (or `src/sds/<area>/` for Domain specific). Promotion to stable is covered by `f0-component-promotion`. The full contract is in [`packages/react/docs/definition-of-done.mdx`](../../docs/definition-of-done.mdx); the placement rules are in [`packages/react/docs/where-it-goes.mdx`](../../docs/where-it-goes.mdx).

> F0 grows intentionally: say yes when there's clear cross-team value; say no with a documented reason and an alternative. The gate is the design alignment for high-impact changes.

> **Your authority.** You search, filter, guide placement, and build to the standard. You do **not** approve what enters F0, mark a component stable, or merge — those are Foundations / human calls. The repo (code, `CODEOWNERS`, these docs) is the source of truth; if you ever seem to contradict it, defer to the repo.

---

## Before anything — Filter ("should this be built in F0?")

Do this **with** the contributor, in the conversation, before proposing or building anything. Its job is to remove work that shouldn't happen: things already solved, things that don't belong in F0.

Search the repo (`components/`, `experimental/`, `kits/`, `sds/`, `patterns/`) **and** Storybook. Then land on one of:

| You find…                                                         | Outcome                                        | Stop here? |
| ----------------------------------------------------------------- | ---------------------------------------------- | ---------- |
| A component (or a composition of existing ones) covers their case | **Use it** (document the composition if needed). Point them to it. | ✅ yes |
| It's one screen, no reuse, no shared identity                     | **It lives in their product**, not F0.         | ✅ yes     |
| A real, reusable need with no existing solution                   | **It's a contribution** → Phase 1.             | continue   |

If you can resolve it here, **do** — don't push the contributor into a heavier flow than the change needs. Whether it's **new or an extension** of something existing is decided in Phase 1, not here.

---

## How much validation a change needs

**Everything that enters F0 is reviewed — always**, whatever the maturity: Foundations confirms in `#f0-support` that it belongs and where (Phase 1), and the PR goes through **code review + `f0-quality-gate`**. A **new component** also gets a **design review** (Phase 2). "Iterating freely" only means the owner can change an already-**experimental** component's API without a fresh design review — experimental is unstable by design; it still entered through the same review.

Beyond that, how much *extra* validation is set by **two questions**:

1. **Is it already in use?** Changing something consumers already use is high-impact → it needs a **migration plan** (see "Changing something already in use" in the release/versioning docs: prefer additive + deprecation; if a real break, a migration guide from `docs/migrations/TEMPLATE.md`, deprecation, consumer notice, major bump). Adding something new rarely ripples.
2. **Is it shared vocabulary, or a new public API?** A new or changed **token** or **icon**, or a new component's API, gets a **design review** — consistency is expensive even when nothing breaks. A backward-compatible prop on an experimental component doesn't.

**Adding is never "free":** something that duplicates what already exists fragments the system. That's what the Filter and "extend before you create" are for — `low` impact means low blast radius, not a low bar.

---

## Phase 1 — Align ("what is it, where does it live?")

**Raise it as a message in `#f0-support`** — bring whatever exists: the need, a Figma, a Composer prototype, a draft PR. Foundations confirms the **systemic fit** and the destination: **Core**, a **Kit**, or **Domain specific** (see [Where it goes](../../docs/where-it-goes.mdx)).

- **New or an extension?** An **extension** (a prop / variant on an existing component) lives **where that component already is** — extend it, don't create a new home. Something **new** picks its home (next bullet). Extend before you create.
- Help the contributor articulate: the problem, who else needs it (≥2 teams is the signal for Core; a designer can waive this for clearly foundational primitives), and a rough API.
- For something **new**, confirm the destination with the placement rules: reuse within one domain → **Domain specific** (owned by that team); a functional bundle reused by ≥2 products → **Kit**; generic across ≥2 domains → **Core** (patterns live in Core).
- **A rough need is enough to start** — the proposal takes shape in the `#f0-support` conversation.

**Alignment can end in five outcomes — always hand the contributor the next step, never leave them stranded:**

- **proceed** → go to Phase 2 (Design), then Build.
- **redirect** (Kit / Domain / an extension instead) → re-enter the flow at that placement; point them to the exact component/folder.
- **needs-info** → tell them exactly what's missing; they clarify (in the thread or a quick call) and re-align.
- **lives-in-their-product** → help them build it in their product from F0 pieces (Composer / Claude); it's a valid outcome, not a failure.
- **declined** → give a documented reason and a concrete alternative.

## Phase 2 — Design

Scale with impact:

- **Low-impact** changes (a prop on experimental): skip formal design review; the owner decides.
- **New components** and **any change to a stable component's API/visual/behavior**: run a design review (see [Design Review](../../docs/design-review.mdx) — the 10-category checklist).
- **High-impact** (token, icon, pattern): design validation is **required up front, before building**.

Document the API draft (props, types, variants, slots, defaults) in the `#f0-support` thread — the design conversation lives there, not on a PR (there may not be one yet). Resolve blocking comments; get explicit approval from at least one Foundations designer for reviewed changes.

## Phase 3 — Build

Follow this sequence. Each step has a matching F0 skill — load it when needed.

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

For **Domain specific** components, use `src/sds/<area>/` instead of `src/experimental/<Category>/`.

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

Load the global **`factorial-f0-component-documentation`** skill. Target tier: **Acceptable** minimum for build exit. Aim for **Good** if you plan to promote soon.

### 3.6 — Run quality gate

Load **`f0-quality-gate`** and run the full workflow. Must pass before opening a PR.

### 3.7 — Open the PR

Load **`f0-pr`** for title format and PR template. **Every new or changed thing lands as a PR** — this is where code review happens.

PR title: `feat(F0Name): add experimental component`.

In the PR body: link the alignment (the `#f0-support` thread), confirm design review where it applied, confirm `f0-quality-gate` passed.

### 3.8 — Merge

Once reviewed and approved, merge. The component is now live as **experimental**.

---

## After merge — what's next?

The component lives in `experimental/` until it meets the promotion criteria (adoption by ≥3 product teams in production, no breaking changes for 60 days, zero critical bugs, stable API). At that point, request promotion using **`f0-component-promotion`**.

The owning team is responsible for the component until promotion (when ownership transfers to Foundations).

---

## Common pitfalls

- **Building before aligning a high-impact change** — a token/icon/pattern reworked without design validation gets reverted. Align first.
- **Forcing heavier process than the change needs** — a `#f0-support` thread resolves most alignments; match the process to the blast radius.
- **Skipping the filter** — implementing something that already exists or only needed extending wastes work.
- **Naming without `F0` prefix** — required for all public components.
- **Hard-coded colors or strings** — use design tokens and `useI18n()`.
- **Importing Radix directly** — use `@/ui/` wrappers.
- **Forgetting `experimentalComponent()` wrapper** — needed for the runtime warning consumers see.
