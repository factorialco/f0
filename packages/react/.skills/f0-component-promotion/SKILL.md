---
name: f0-component-promotion
description: Use when promoting an F0 component from experimental/ to stable (Phases 4–5 of the lifecycle). Owned by Foundations team. For building a new component, use f0-component-contribution.
---

# F0 Component Promotion (Phases 4–5)

This skill guides Foundations team members through validating that an experimental component meets the maturity criteria and promoting it to stable. The full contract is in [`packages/react/docs/definition-of-done.mdx`](../../docs/definition-of-done.mdx) Phases 4–5.

> **Who can run this skill:** members of `@factorialco/foundations`. Other contributors can request promotion via a GitHub issue, but only Foundations executes the move.

---

## Phase 4 — Validate real-world adoption

The component owner (or a Foundations engineer) opens a **promotion request issue** and proves all DoD criteria are met.

### 4.1 — Demand axis

Run a cross-repo search across the `factorialco` GitHub org. Use GitHub code search (not local `rg`):

```
org:factorialco "F0MyComponent" -repo:factorialco/factorial-one
```

Required: **≥3 distinct product teams** import or use the component in production code (not tests, not docs, not examples).

Document the findings in the promotion issue with links.

Also check: no "would you remove this?" or "this should be deprecated" feedback in the last 30 days (search the component name in `#f0` Slack and GitHub issues).

### 4.2 — Maturity axis

Verify all four:

- **No breaking changes for ≥60 days.** Run:

  ```bash
  git log --since="60 days ago" --oneline -- packages/react/src/experimental/<Category>/F0Name/
  ```

  Inspect any commits touching `types.ts`, prop signatures, or default values.

- **Zero open critical or high-severity bugs.** Search GitHub issues with label `bug` and component name; check severity.

- **`f0-quality-gate` passes** including extended subagent reviews. Load and run `f0-quality-gate` with full subagent suite (a11y, design tokens, dark mode).

- **Owner declares API stable** in the promotion issue (explicit comment).

### 4.3 — Foundations re-confirmation

A Foundations team member explicitly approves promotion in the issue. There is **no auto-promotion**.

If any axis fails, the promotion is deferred and the issue is labeled `deferred` with an explanation.

---

## Phase 5 — Execute promotion

### 5.1 — Decide the destination zone

| If the component is…        | Move to…          |
| --------------------------- | ----------------- |
| A primitive (Button, Input) | `src/components/` |
| A composition (Page header) | `src/patterns/`   |
| A vertical bundle           | `src/kits/`       |
| A layout primitive          | `src/layout/`     |
| A hook                      | `src/hooks/`      |

For `accepted-as-domain` components in `src/sds/<area>/`, promotion stays inside the SDS folder — only the story tag and ownership change.

### 5.2 — Run the migration skill

Load **`f0-experimental-component-migration`** and follow it end-to-end. It handles file moves, import updates, removing the `experimentalComponent()` wrapper, and ensuring `exports.ts` is correct.

### 5.3 — Update the story

- Change tag from `experimental` to `stable`:

  ```ts
  tags: ["autodocs", "stable"]
  ```

- Story title stays the same (no rename).

### 5.4 — Update MDX docs to Good tier

Load **`factorial-f0-component-documentation`**. Required for stable: **Good** tier minimum (Gold encouraged).

### 5.5 — Update CODEOWNERS

Transfer ownership to Foundations. Add a line to `CODEOWNERS`:

```
packages/react/src/components/F0Name/        @factorialco/foundations
```

(Or update an existing wildcard line if one already covers the destination.)

### 5.6 — Run quality gate again

Load **`f0-quality-gate`** and run the full workflow on the promoted component.

### 5.7 — Open the promotion PR

Load **`f0-pr`**.

PR title: `feat(F0Name): promote to stable (#<promotion-issue>)`

The promotion is **not a breaking change** for consumers — the public import path doesn't change and the API was already stable de facto during Phase 4. So we use plain `feat:` (which the release pipeline interprets as a MINOR bump) without the `!` marker. Using `feat!:` would trigger an unintended MAJOR version bump in Conventional Commits / `semantic-release`. PR body:

- Link the promotion issue.
- Document Phase 4 evidence (≥3 teams, 60-day window, quality gate output).
- Confirm Foundations approval.

### 5.8 — Announce

After merge:

- Post in `#f0` Slack with a short changelog entry.
- Confirm the component appears with `Stable` badge in the [Component Status](/?path=/docs/components-status--docs) table on next nightly regeneration.

---

## SLA

An F0 designer + Foundations engineer respond to a promotion request within **2 weeks**. We aim to reduce this once the components-dashboard is integrated in the standard workflow and the validation of DoD criteria (≥3 teams, no breaking changes, no critical bugs) is automated end-to-end.

---

## Common pitfalls

- **Promoting on time alone** — there is no time minimum; only the demand + maturity axes matter.
- **Skipping cross-repo search** — local `rg` only checks the design-system repo, which has zero product consumers. Always use GitHub code search across `factorialco`.
- **Forgetting `CODEOWNERS`** — the original team will keep getting bug pings.
- **Forgetting to remove `experimentalComponent()` wrapper** — consumers will see the warning forever.
- **Updating story title** — keep `"Components/F0Name"`, do not rename.
