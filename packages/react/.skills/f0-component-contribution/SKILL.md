---
name: f0-component-contribution
description: Use when someone wants to add or change something in F0 (a component, prop, token, icon, or pattern). Covers the filter, the alignment, and the build in experimental/. You (the agent) are the door — you search, filter, and guide. For promotion to stable, use f0-component-promotion.
---

# F0 Component Contribution

You are the entry point to F0. When a contributor says "I need X", **you** search the repo and Storybook, filter the request, help them align with Foundations, and drive the build. The amount of process **scales with the impact** of the change — most requests are resolved in the conversation and never need an issue or a PR.

This skill ends when the change is merged into `experimental/` (or `src/sds/<area>/` for Domain specific). Promotion to stable is covered by `f0-component-promotion`. The full contract is in [`packages/react/docs/definition-of-done.mdx`](../../docs/definition-of-done.mdx); the placement rules are in [`packages/react/docs/where-it-goes.mdx`](../../docs/where-it-goes.mdx).

> **No GitHub issue, no checkbox to wait on.** F0 grows intentionally: say yes when there's clear cross-team value; say no with a documented reason and an alternative. The gate is the design alignment for high-impact changes — not paperwork.

> **Your authority.** You search, filter, guide placement, and build to the standard. You do **not** approve what enters F0, mark a component stable, or merge — those are Foundations / human calls. The repo (code, `CODEOWNERS`, these docs) is the source of truth; if you ever seem to contradict it, defer to the repo.

---

## Before anything — Filter ("should this be built in F0?")

Do this **with** the contributor, in the conversation, before proposing or building anything. Its job is to remove work that shouldn't happen: things already solved, things that only need extending, things that don't belong in F0.

Search the repo (`components/`, `experimental/`, `kits/`, `sds/`, `patterns/`) **and** Storybook. Then land on one of:

| You find…                                                    | Outcome                                        | Stop here? |
| ------------------------------------------------------------ | ---------------------------------------------- | ---------- |
| It already exists                                            | **Use it.** Point them to it.                  | ✅ yes     |
| An existing component covers it via a prop / variant / slot  | **Extend it** → go to _Evolving something_.    | continue   |
| It's one screen, no reuse, no shared identity                | **It lives in their product**, not F0.         | ✅ yes     |
| A pattern or composition of existing components solves it    | **Document the composition**, don't add a component. | ✅ often |
| A real, reusable need with no existing solution              | **It's a contribution** → Phase 1.             | continue   |

If you can resolve it here, **do** — don't push the contributor into a heavier flow than the change needs. "Extend before you create" is the default; a new component is the exception.

---

## Evolving something (the common case)

Most contributions change what already exists. Route by **what** is changing and **whether it's in use** — impact is how many places a change touches, not how much code it is:

| Change                                        | Impact                       | Design check          | How to handle it |
| --------------------------------------------- | ---------------------------- | --------------------- | ---------------- |
| Add a **prop / variant** (backward-compat)    | Low                          | Only if **stable**    | Stable → design-align first (Phase 2); experimental → the owning team iterates freely. Update tests + story + docs. |
| Add a new **icon**                            | Low                          | Yes (icon-set consistency) | Additive; follow the repo's icon-generation flow. |
| Add a new **token**                           | Low–medium                   | Yes (avoid duplicating) | Additive, but tokens are shared vocabulary — check it doesn't overlap an existing token. |
| **Change** a token or icon **in use**         | High → migration             | Yes                   | Ripples through every consumer. Design-align, then plan the migration. |
| **Iterate** a **pattern** in use              | High → consumers migrate     | Yes                   | Patterns are compositions other teams adopt. Align widely (Phase 2) before building. |
| Any **breaking change** to something in use   | High → migration             | Yes                   | Follow **"Changing something already in use"** in the release/versioning docs: prefer additive + deprecation; if a real break, write a migration guide from `docs/migrations/TEMPLATE.md`, deprecate, notify consumers, major bump. |

Impact is **blast radius, not code size**, and the question that sets the weight is: **is it already in use?** A backward-compatible prop on an experimental component is a PR the owner can just make; changing a token that ships in every component is a design decision to align before a line of code. Shared vocabulary (tokens, icons) and new public APIs get a design check even when they're purely additive.

**Watch the trap:** `low` impact means low blast radius, **not a low bar to add**. The expensive risk of *adding* is duplication — a second component that re-solves what already exists fragments the system. That's why the Filter (review what exists) runs first and **extend-before-you-create is the default**: only propose a new thing once you've confirmed it isn't already there. Never let a contributor read "low impact" as "free to create."

---

## Phase 1 — Align ("what is it, where does it live?")

**No GitHub issue to file.** Bring whatever exists — the need, a Figma, a Composer prototype, a draft PR — to `#f0-support`. Foundations confirms the **systemic fit** and the destination: **Core**, a **Kit**, or **Domain specific** (see [Where it goes](../../docs/where-it-goes.mdx)).

- Help the contributor articulate: the problem, who else needs it (≥2 teams is the signal for Core; a designer can waive this for clearly foundational primitives), and a rough API.
- Confirm the destination with the placement rules. Reuse within one domain → **Domain specific** (owned by that team). A functional bundle reused by ≥2 products → **Kit**. Generic across ≥2 domains → **Core** (patterns live in Core).
- **This all happens in `#f0-support`.** For now there's no separate GitHub issue template to file — if a proposal needs tracking, it's raised from the support thread.

**Alignment can end in five outcomes — always hand the contributor the next step, never leave them stranded:**

- **proceed** → go to Phase 2 (Design), then Build.
- **redirect** (Kit / Domain / an extension instead) → re-enter the flow at that placement; point them to the exact component/folder.
- **needs-info** → tell them exactly what's missing; they clarify and re-align.
- **lives-in-their-product** → help them build it in their product from F0 pieces (Composer / Claude); it's a valid outcome, not a failure.
- **declined** → give a documented reason and a concrete alternative.

## Phase 2 — Design

Scale with impact:

- **Low-impact** changes (a prop on experimental): skip formal design review; the owner decides.
- **New components** and **any change to a stable component's API/visual/behavior**: run a design review (see [Design Review](../../docs/design-review.mdx) — the 10-category checklist).
- **High-impact** (token, icon, pattern): design validation is **required up front, before building**.

Document the API draft (props, types, variants, slots, defaults) in the `#f0-support` thread or the PR description. Resolve blocking comments; get explicit approval from at least one Foundations designer for reviewed changes.

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

In the PR body: link the alignment (thread/issue), confirm design review where it applied, confirm `f0-quality-gate` passed.

### 3.8 — Merge

Once reviewed and approved, merge. The component is now live as **experimental**.

---

## After merge — what's next?

The component lives in `experimental/` until it meets the promotion criteria (adoption by ≥3 product teams in production, no breaking changes for 60 days, zero critical bugs, stable API). At that point, request promotion using **`f0-component-promotion`**.

The owning team is responsible for the component until promotion (when ownership transfers to Foundations).

---

## Common pitfalls

- **Building before aligning a high-impact change** — a token/icon/pattern reworked without design validation gets reverted. Align first.
- **Forcing a formal issue when a thread resolves it** — match the process to the impact.
- **Skipping the filter** — implementing something that already exists or only needed extending wastes work.
- **Naming without `F0` prefix** — required for all public components.
- **Hard-coded colors or strings** — use design tokens and `useI18n()`.
- **Importing Radix directly** — use `@/ui/` wrappers.
- **Forgetting `experimentalComponent()` wrapper** — needed for the runtime warning consumers see.
