// Inventory of every F0 lifecycle rule, grouped by theme.
// Built from: docs/definition-of-done.mdx, docs/contributions.mdx,
// docs/design-review.mdx, docs/components-maturity.mdx,
// docs/development/release-and-versioning.mdx, .skills/f0-component-contribution,
// .skills/f0-component-promotion, .skills/f0-experimental-component-migration,
// packages/react/AGENTS.md, root AGENTS.md.
//
// Updated whenever the canonical sources above change.

export type Verifiability = "automated" | "human-evidence" | "policy"

export type SectionId = "what-f0-is" | "how-teams-work" | "how-f0-ships"

export type Rule = {
  id: string
  statement: string
  verifiability: Verifiability
  source: string
  alsoIn?: string[]
  note?: string
}

export type RuleGroup = {
  id: string
  section: SectionId
  title: string
  intent: string
  rules: Rule[]
  // Optional plain-language glossary shown above the rules list.
  glossary?: { term: string; definition: string }[]
}

export type Section = {
  id: SectionId
  title: string
  emoji: string
  intent: string
}

export const sections: Section[] = [
  {
    id: "what-f0-is",
    title: "What F0 IS",
    emoji: "🧱",
    intent:
      "The internal definition of the design system — invariants that don't depend on how people work.",
  },
  {
    id: "how-teams-work",
    title: "How teams work WITH F0",
    emoji: "🤝",
    intent:
      "How people and teams enter, contribute, review, maintain and hand over ownership.",
  },
  {
    id: "how-f0-ships",
    title: "How F0 ships",
    emoji: "📦",
    intent:
      "What happens automatically when something is merged — the publishing pipeline.",
  },
]

export const ruleGroups: RuleGroup[] = [
  {
    id: "contribution",
    section: "how-teams-work",
    title: "Contribution & Proposal",
    intent: "How an idea enters F0 — Phase 0 filter, proposal, triage.",
    rules: [
      {
        id: "ctr-phase0",
        statement:
          "Evaluate the idea against Phase 0 (already exists, can be extended, recurring across ≥2 teams, not solvable by a pattern) before opening any proposal.",
        verifiability: "policy",
        source:
          ".skills/f0-component-contribution/SKILL.md#phase-0--discovery--evaluation-before-proposing",
        alsoIn: ["docs/contributions.mdx"],
      },
      {
        id: "ctr-default-no",
        statement:
          "Every proposal is evaluated on its merits. F0 grows intentionally — we say yes when a component has clear cross-team value, and we say no with a documented reason and an alternative (extend an existing component, app-local solution, etc).",
        verifiability: "policy",
        source: ".skills/f0-component-contribution/SKILL.md#phase-0",
      },
      {
        id: "ctr-enhancement-first",
        statement:
          "If an existing component can be extended, open a Component Enhancement issue instead of a Proposal.",
        verifiability: "policy",
        source: ".skills/f0-component-contribution/SKILL.md#02--can-an-existing-component-be-extended",
        alsoIn: ["docs/contributions.mdx"],
      },
      {
        id: "ctr-proposal-required",
        statement:
          "A new component requires an open Component Proposal issue using the proposal template.",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-1--problem",
        alsoIn: ["docs/contributions.mdx", ".skills/f0-component-contribution/SKILL.md#phase-1"],
      },
      {
        id: "ctr-proposal-content",
        statement:
          "The proposal must include problem statement, evidence of recurring need, proposed name, and rough API.",
        verifiability: "human-evidence",
        source: ".skills/f0-component-contribution/SKILL.md#phase-1--open-a-proposal",
      },
      {
        id: "ctr-3-use-cases",
        statement:
          "Proposals need at least 2 real use cases from different teams, plus a manual review by an F0 designer to confirm the need is general (not specific to one product area). The designer can waive the team-count requirement if the use case is clearly foundational (e.g., a new primitive that unlocks a category).",
        verifiability: "human-evidence",
        source: ".skills/f0-component-contribution/SKILL.md#phase-0--discovery--evaluation-before-proposing",
        alsoIn: ["docs/contributions.mdx", ".github/ISSUE_TEMPLATE/component-proposal.yml"],
      },
      {
        id: "ctr-triage-cadence",
        statement: "Foundations triages proposals on a weekly cadence.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-1--problem",
        alsoIn: ["docs/contributions.mdx", ".skills/f0-component-contribution/SKILL.md"],
      },
      {
        id: "ctr-triage-sla",
        statement:
          "Foundations responds to new proposals based on team availability and as quickly as possible — there is no committed fixed SLA today.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/triage.ts",
      },
      {
        id: "ctr-triage-outcomes",
        statement:
          "Triage must produce one of four outcomes: accepted, accepted-as-domain, needs-info, or rejected.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-1--problem",
        alsoIn: [".skills/f0-component-contribution/SKILL.md#phase-1"],
      },
      {
        id: "ctr-rejection-documented",
        statement: "Rejection reasons must be documented in the issue.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-1--problem",
      },
      {
        id: "ctr-domain-target",
        statement:
          "`accepted-as-domain` proposals target `src/sds/<area>/` instead of core F0.",
        verifiability: "policy",
        source: ".skills/f0-component-contribution/SKILL.md#phase-1",
        alsoIn: ["docs/definition-of-done.mdx"],
      },
      {
        id: "ctr-bug-routing",
        statement:
          "Bugs must be reported via the Bug report issue template and are routed to the component's owner via CODEOWNERS.",
        verifiability: "policy",
        source: "docs/contributions.mdx#report-a-bug",
      },
      {
        id: "ctr-enhance-stable",
        statement:
          "Enhancements to a stable component go through the same design review as a new component; experimental components can be iterated freely by the owning team.",
        verifiability: "policy",
        source: "docs/contributions.mdx#improve-or-extend-an-existing-component",
        alsoIn: ["docs/design-review.mdx"],
      },
    ],
  },
  {
    id: "design-review",
    section: "how-teams-work",
    title: "Design Review",
    intent: "When a design review is needed, who runs it, what it evaluates.",
    rules: [
      {
        id: "dr-required-new",
        statement: "A design review is required for every new component (Phase 2).",
        verifiability: "policy",
        source: "docs/design-review.mdx#when-its-required",
        alsoIn: ["docs/definition-of-done.mdx#phase-2--design"],
      },
      {
        id: "dr-required-stable-change",
        statement:
          "A design review is required for every change to a stable component that affects API, visual design, or behavior.",
        verifiability: "policy",
        source: "docs/design-review.mdx#when-its-required",
      },
      {
        id: "dr-optional-experimental",
        statement: "Design review is optional for experimental component changes.",
        verifiability: "policy",
        source: "docs/design-review.mdx#when-its-required",
      },
      {
        id: "dr-attendees",
        statement:
          "At least one Foundations designer must attend and own approval; an a11y specialist is optional for complex components.",
        verifiability: "policy",
        source: "docs/design-review.mdx#who-attends",
      },
      {
        id: "dr-async",
        statement:
          "Async design review (PR comments on Figma + API spec) is acceptable for small changes.",
        verifiability: "policy",
        source: "docs/design-review.mdx#who-attends",
      },
      {
        id: "dr-10-cats",
        statement:
          "Design review evaluates 10 categories: problem clarity, system fit, API design, composition, variants and density, visual design, accessibility, internationalization, states and edge cases, documentation plan.",
        verifiability: "policy",
        source: "docs/design-review.mdx#the-10-category-checklist",
      },
      {
        id: "dr-no-relitigate",
        statement:
          "Design review must NOT re-litigate whether the component should exist; that is decided in Phase 0/1.",
        verifiability: "policy",
        source: "docs/design-review.mdx (intro callout)",
      },
      {
        id: "dr-blocking-resolved",
        statement: "All blocking comments must be resolved before approval.",
        verifiability: "policy",
        source: "docs/design-review.mdx#the-10-category-checklist",
      },
      {
        id: "dr-output",
        statement:
          "Design review must end with one of: Approved, Approved with comments, Needs revision; the decision is recorded as a comment on the proposal issue.",
        verifiability: "policy",
        source: "docs/design-review.mdx#output",
      },
      {
        id: "dr-figma-api",
        statement:
          "Phase 2 requires a Figma design linked from the issue and a documented draft API (props, variants, slots, defaults).",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-2--design",
        alsoIn: [".skills/f0-component-contribution/SKILL.md#phase-2"],
      },
    ],
  },
  {
    id: "build",
    section: "how-teams-work",
    title: "Build & Quality Gate",
    intent: "What is required to ship a component into experimental/.",
    rules: [
      {
        id: "bld-folder",
        statement:
          "Every new component must start in `src/experimental/<Category>/F0Name/` (or `src/sds/<area>/` for domain).",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
        alsoIn: ["packages/react/AGENTS.md", "AGENTS.md (root)"],
      },
      {
        id: "bld-name-prefix",
        statement: "Public components must be prefixed `F0` (e.g., `F0Button`).",
        verifiability: "policy",
        source: "packages/react/AGENTS.md#naming",
        alsoIn: [".skills/f0-component-contribution/SKILL.md"],
      },
      {
        id: "bld-wrapper",
        statement:
          "Experimental components must be wrapped with `experimentalComponent(\"F0Name\", Cmp)` from `@/lib/experimental` in `index.tsx`.",
        verifiability: "automated",
        source: "lifecycle-site/src/data/rules.ts (lint: no-experimental-outside-folder)",
        alsoIn: [".skills/f0-component-contribution/SKILL.md", "packages/react/AGENTS.md"],
      },
      {
        id: "bld-story-title",
        statement:
          "Story title must be `\"Components/F0Name\"` (no `Experimental/` prefix in the sidebar).",
        verifiability: "policy",
        source: "packages/react/AGENTS.md#new-component-workflow",
        alsoIn: [".skills/f0-component-contribution/SKILL.md"],
      },
      {
        id: "bld-story-tag",
        statement: "Experimental story tags must be `[\"autodocs\", \"experimental\"]`.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
        alsoIn: [".skills/f0-component-contribution/SKILL.md", "docs/components-maturity.mdx"],
      },
      {
        id: "bld-maturity-tag",
        statement:
          "Every story must declare exactly one maturity tag: experimental, stable, or deprecated.",
        verifiability: "automated",
        source: "lifecycle-site/src/data/rules.ts (lint: story-must-have-maturity-tag, planned)",
      },
      {
        id: "bld-3-stories",
        statement: "At least 3 stories required: default, edge case, full configuration.",
        verifiability: "policy",
        source: ".skills/f0-component-contribution/SKILL.md",
        alsoIn: ["docs/design-review.mdx (cat. 10)"],
      },
      {
        id: "bld-unit-tests",
        statement: "Unit tests (Vitest) must cover the public API.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
      },
      {
        id: "bld-play",
        statement: "Storybook play function must cover the primary user flow.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
      },
      {
        id: "bld-axe",
        statement: "Axe a11y test must pass.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
      },
      {
        id: "bld-mdx-acceptable",
        statement:
          "MDX documentation must reach at least the Acceptable tier to ship to experimental.",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-3--build",
        alsoIn: ["docs/components-maturity.mdx"],
      },
      {
        id: "bld-quality-gate",
        statement:
          "`f0-quality-gate` skill must pass (typecheck, lint, format, tests) before the PR is opened.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
        alsoIn: ["packages/react/AGENTS.md#post-implementation-quality-gate"],
      },
      {
        id: "bld-pre-commit",
        statement: "Format and tsc must run before every commit.",
        verifiability: "automated",
        source: "packages/react/AGENTS.md#pre-commit-checklist-mandatory",
      },
      {
        id: "bld-pr-title",
        statement:
          "PR title for new experimental components: `feat(F0Name): add experimental component (#<proposal-issue>)`.",
        verifiability: "policy",
        source: ".skills/f0-component-contribution/SKILL.md",
      },
      {
        id: "bld-pr-body",
        statement:
          "PR body must link the proposal issue and confirm design review and quality gate passed.",
        verifiability: "policy",
        source: ".skills/f0-component-contribution/SKILL.md",
      },
      {
        id: "bld-lifecycle-label",
        statement:
          "PRs must use a lifecycle label: `lifecycle:proposal`, `lifecycle:enhancement`, `lifecycle:promotion`, `lifecycle:deprecation`, or `lifecycle:removal`.",
        verifiability: "human-evidence",
        source: "lifecycle-site/src/data/rules.ts (prTypes)",
      },
    ],
  },
  {
    id: "maturity",
    section: "what-f0-is",
    title: "Maturity Levels",
    intent: "The 3 levels, what each promises, folder/tag mapping.",
    rules: [
      {
        id: "mat-3-levels",
        statement: "F0 has exactly three maturity levels: Experimental, Stable, Deprecated.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx",
        alsoIn: ["docs/definition-of-done.mdx", "docs/contributions.mdx"],
      },
      {
        id: "mat-experimental-promise",
        statement:
          "Experimental promises only that the component works for documented use cases; the API may change without a major version bump.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#experimental",
      },
      {
        id: "mat-stable-promise",
        statement:
          "Stable promises backwards-compatible changes only; breaking changes require a major version bump and a migration guide.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#stable",
      },
      {
        id: "mat-deprecated-promise",
        statement:
          "Deprecated guarantees the component still works for at least one quarter and carries the three required JSDoc tags.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#deprecated",
      },
      {
        id: "mat-folder-truth",
        statement:
          "Folder is the source of truth for maturity; the Storybook tag mirrors it.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (goldenRules)",
        alsoIn: ["docs/definition-of-done.mdx", "docs/components-maturity.mdx"],
      },
      {
        id: "mat-experimental-folders",
        statement:
          "Experimental components live in `src/experimental/<Category>/` or `src/sds/<area>/`.",
        verifiability: "automated",
        source: "docs/components-maturity.mdx#experimental",
      },
      {
        id: "mat-stable-folders",
        statement:
          "Stable components live in `src/components/`, `src/patterns/`, `src/kits/`, `src/layouts/`, or `src/hooks/`.",
        verifiability: "automated",
        source: "docs/components-maturity.mdx#stable",
      },
      {
        id: "mat-internal-not-maturity",
        statement:
          "`internal` is NOT a maturity level — it is a Storybook tag and the `src/ui/` folder for Radix/shadcn wrappers used only inside F0.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#what-internal-means",
        alsoIn: ["docs/definition-of-done.mdx", "docs/contributions.mdx"],
      },
      {
        id: "mat-ui-not-public",
        statement: "Components in `src/ui/` are never re-exported publicly.",
        verifiability: "policy",
        source: "packages/react/AGENTS.md#imports-and-exports",
      },
      {
        id: "mat-internal-no-lifecycle",
        statement: "Internal components do not follow the lifecycle.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#what-internal-means",
      },
    ],
  },
  {
    id: "dod",
    section: "what-f0-is",
    title: "Definition of Done",
    intent: "The verifiable per-phase contract.",
    rules: [
      {
        id: "dod-phase1",
        statement:
          "Phase 1 DoD: proposal issue open + Foundations triage outcome applied.",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-1--problem",
      },
      {
        id: "dod-phase2",
        statement:
          "Phase 2 DoD: Figma linked, draft API documented, design review completed with all blocking comments resolved.",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-2--design",
      },
      {
        id: "dod-phase3",
        statement:
          "Phase 3 DoD (experimental ship): correct folder, story with experimental tag, unit tests, play function, axe pass, Acceptable MDX, quality gate green, PR merged.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-3--build",
      },
      {
        id: "dod-phase4",
        statement:
          "Phase 4 DoD: ≥3 product teams in production, no remove-pushback in last 30 days, no breaking changes for ≥60 days, zero open critical/high bugs, extended quality gate green, owner declares API stable, Foundations approves.",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-4--real-use",
        alsoIn: [".skills/f0-component-promotion/SKILL.md"],
      },
      {
        id: "dod-phase5",
        statement:
          "Phase 5 DoD: moved to stable folder, story tag updated to stable, MDX at Good tier minimum (Gold encouraged), CODEOWNERS transferred to Foundations, announcement in `#f0` and changelog.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-5--promote",
        alsoIn: [".skills/f0-component-promotion/SKILL.md"],
      },
      {
        id: "dod-stable-extras",
        statement:
          "Stable tier requires Good or Gold MDX docs, full test coverage (unit + play + a11y), and listing in public exports.",
        verifiability: "human-evidence",
        source: "docs/components-maturity.mdx#stable",
      },
      {
        id: "dod-coverage",
        statement: "Test coverage target is 80%.",
        verifiability: "automated",
        source: "packages/react/AGENTS.md#testing",
      },
    ],
  },
  {
    id: "promotion",
    section: "how-teams-work",
    title: "Promotion (experimental → stable)",
    intent: "Phase 4 evidence gates and Phase 5 mechanics. Foundations only.",
    rules: [
      {
        id: "pro-foundations-only",
        statement:
          "Only members of `@factorialco/foundations` can execute promotion; others can only request it via issue.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md (intro callout)",
        alsoIn: ["packages/react/AGENTS.md#new-component-workflow"],
      },
      {
        id: "pro-released-once",
        statement:
          "Component must be released as experimental for at least one F0 version before promotion.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-4--real-use",
      },
      {
        id: "pro-no-time-min",
        statement:
          "There is no time minimum for promotion beyond the 60-day no-breaking-changes window.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-4--real-use",
        alsoIn: [".skills/f0-component-promotion/SKILL.md (pitfalls)"],
      },
      {
        id: "pro-adoption-search",
        statement:
          "Adoption verification must use GitHub cross-repo code search across the `factorialco` org, not local `rg`.",
        verifiability: "human-evidence",
        source: ".skills/f0-component-promotion/SKILL.md#41--demand-axis",
      },
      {
        id: "pro-adoption-prod",
        statement:
          "Adoption count excludes tests, docs, and examples — only production code in product repos.",
        verifiability: "human-evidence",
        source: ".skills/f0-component-promotion/SKILL.md#41--demand-axis",
      },
      {
        id: "pro-no-auto",
        statement:
          "No auto-promotion: a Foundations member must explicitly approve in the promotion issue.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-4--real-use",
        alsoIn: [".skills/f0-component-promotion/SKILL.md#43"],
      },
      {
        id: "pro-deferred",
        statement:
          "If any axis fails, the promotion request is deferred and labeled `deferred` with explanation.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#43",
      },
      {
        id: "pro-destination",
        statement:
          "Destination zone is decided by component type: primitive→`components/`, composition→`patterns/`, vertical bundle→`kits/`, layout primitive→`layout/`, hook→`hooks/`.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#51",
      },
      {
        id: "pro-domain-stays",
        statement:
          "For `accepted-as-domain` components, promotion stays inside the SDS folder; only the story tag and ownership change.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#51",
      },
      {
        id: "pro-migration-skill",
        statement:
          "Promotion must run the `f0-experimental-component-migration` skill end-to-end (file moves, import updates, removing the experimental wrapper, updating `exports.ts`).",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#52",
        alsoIn: [".skills/f0-experimental-component-migration/SKILL.md"],
      },
      {
        id: "pro-export-info-before",
        statement:
          "Before any move, run `ts-exported-info` to capture the current export surface and prevent dropped exports.",
        verifiability: "automated",
        source: ".skills/f0-experimental-component-migration/SKILL.md#step-1",
      },
      {
        id: "pro-export-info-after",
        statement:
          "After migration, re-run `ts-exported-info`; total exports must match or increase, never decrease, and all original names must remain.",
        verifiability: "automated",
        source: ".skills/f0-experimental-component-migration/SKILL.md#step-5",
      },
      {
        id: "pro-remove-wrapper",
        statement: "The `experimentalComponent()` wrapper must be removed during promotion.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md (pitfalls)",
        alsoIn: [".skills/f0-experimental-component-migration/SKILL.md#step-2"],
      },
      {
        id: "pro-keep-title",
        statement:
          "The story title must NOT be renamed on promotion (stays `\"Components/F0Name\"`).",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#53",
      },
      {
        id: "pro-stable-tag",
        statement: "Stable story tags must be `[\"autodocs\", \"stable\"]`.",
        verifiability: "automated",
        source: "docs/definition-of-done.mdx#phase-5--promote",
        alsoIn: [".skills/f0-component-promotion/SKILL.md#53"],
      },
      {
        id: "pro-back-compat",
        statement:
          "The original experimental export path must be preserved with a `@deprecated` re-export from the new location to maintain backward compatibility.",
        verifiability: "policy",
        source: ".skills/f0-experimental-component-migration/SKILL.md#step-4",
      },
      {
        id: "pro-codeowners",
        statement:
          "CODEOWNERS must be updated to transfer ownership to `@factorialco/foundations`.",
        verifiability: "automated",
        source: ".skills/f0-component-promotion/SKILL.md#55",
        alsoIn: ["docs/definition-of-done.mdx#phase-5"],
      },
      {
        id: "pro-pr-title",
        statement:
          "Promotion PR title: `feat(F0Name): promote to stable (#<promotion-issue>)` — plain `feat:` (MINOR bump). Do not use `feat!:`; promotion is not a breaking change for consumers (the public import path doesn't change), and `!` would trigger an unintended MAJOR version bump.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#57",
        alsoIn: [".skills/f0-pr/SKILL.md"],
      },
      {
        id: "pro-announce",
        statement:
          "After merge, announce promotion in `#f0` Slack with a short changelog entry.",
        verifiability: "policy",
        source: ".skills/f0-component-promotion/SKILL.md#58",
        alsoIn: ["docs/definition-of-done.mdx#phase-5"],
      },
      {
        id: "pro-sla",
        statement:
          "Promotion SLA: an F0 designer + Foundations engineer respond to a promotion request within 2 weeks. We aim to reduce this once the components-dashboard is integrated in the standard workflow and the validation of DoD criteria (≥3 teams, no breaking changes, no critical bugs) is automated end-to-end.",
        verifiability: "human-evidence",
        source: "docs/definition-of-done.mdx#phase-5--promote",
        alsoIn: [".skills/f0-component-promotion/SKILL.md", "lifecycle-site/src/data/triage.ts"],
      },
    ],
  },
  {
    id: "deprecation",
    section: "how-teams-work",
    title: "Deprecation & Removal",
    intent: "How a component is retired safely.",
    rules: [
      {
        id: "dep-3-tags",
        statement:
          "Deprecation requires three JSDoc tags above the export: `@deprecated`, `@removeIn vX.Y.Z`, `@migration <url>`. All three are mandatory.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#deprecating-a-component-or-prop",
        alsoIn: [
          "docs/definition-of-done.mdx",
          "docs/components-maturity.mdx",
          "packages/react/AGENTS.md",
        ],
      },
      {
        id: "dep-removein-major",
        statement: "`@removeIn` must target a future major version.",
        verifiability: "policy",
        source: "docs/development/release-and-versioning.mdx#deprecating-a-component-or-prop",
      },
      {
        id: "dep-migration-required",
        statement: "`@migration` link is required even for trivial cases.",
        verifiability: "policy",
        source: "docs/development/release-and-versioning.mdx#deprecating-a-component-or-prop",
      },
      {
        id: "dep-story-tag",
        statement:
          "Deprecated components must update story tags to `[\"autodocs\", \"deprecated\"]`.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#deprecating-a-component-or-prop",
        alsoIn: ["docs/components-maturity.mdx"],
      },
      {
        id: "dep-90-days",
        statement:
          "Minimum 1 quarter (≥90 days) must pass between deprecation and removal.",
        verifiability: "policy",
        source: "docs/development/release-and-versioning.mdx#removal-sla",
        alsoIn: [
          "docs/definition-of-done.mdx",
          "docs/components-maturity.mdx",
          "packages/react/AGENTS.md",
        ],
      },
      {
        id: "dep-no-perpetual",
        statement:
          "Removal happens in the version declared in `@removeIn` — never silent perpetual deprecation; either bump the major or extend `@removeIn` explicitly.",
        verifiability: "policy",
        source: "docs/development/release-and-versioning.mdx#why-this-policy",
      },
      {
        id: "dep-quarterly-cleanup",
        statement:
          "Foundations runs a quarterly cleanup to delete components whose `@removeIn` has shipped.",
        verifiability: "policy",
        source: "docs/development/release-and-versioning.mdx#removal-sla",
      },
      {
        id: "dep-owner-stays",
        statement: "Deprecated components remain owned by their original owner until removal.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#deprecated",
        alsoIn: ["docs/definition-of-done.mdx"],
      },
    ],
  },
  {
    id: "ownership",
    section: "how-teams-work",
    title: "Ownership & Routing",
    intent: "Who owns what, how issues and PRs are routed.",
    rules: [
      {
        id: "own-foundations-zones",
        statement:
          "Foundations owns: `components/`, `patterns/`, `ui/`, `kits/`, `layouts/`, `hooks/`, `lib/`.",
        verifiability: "automated",
        source: "docs/contributions.mdx#ownership",
      },
      {
        id: "own-sds-teams",
        statement: "Satellite Design System (SDS) teams own `sds/<area>/`.",
        verifiability: "automated",
        source: "docs/contributions.mdx#ownership",
      },
      {
        id: "own-experimental",
        statement:
          "Experimental components are owned by the team that created them, until promotion.",
        verifiability: "policy",
        source: "docs/contributions.mdx#ownership",
        alsoIn: ["docs/definition-of-done.mdx", "docs/components-maturity.mdx"],
      },
      {
        id: "own-promotion-transfer",
        statement: "Promotion to stable transfers ownership to Foundations.",
        verifiability: "automated",
        source: "docs/contributions.mdx#ownership",
        alsoIn: [".skills/f0-component-promotion/SKILL.md#55"],
      },
      {
        id: "own-codeowners-live",
        statement:
          "CODEOWNERS is the live source for routing issues and PRs to component owners.",
        verifiability: "automated",
        source: "docs/contributions.mdx#ownership",
      },
    ],
  },
  {
    id: "versioning",
    section: "how-f0-ships",
    title: "Versioning & Releases",
    intent:
      "F0 is a published npm package. Every merge to `main` publishes a new version. These rules decide which version number it gets and what gets shipped.",
    glossary: [
      {
        term: "SemVer (Semantic Versioning)",
        definition:
          "The version number has 3 parts: 2.5.3 → MAJOR.MINOR.PATCH. PATCH = fix, MINOR = new compatible feature, MAJOR = breaking change that will require consumers to migrate.",
      },
      {
        term: "Conventional Commits",
        definition:
          "The COMMIT MESSAGE decides which number bumps. `fix:` → PATCH, `feat:` → MINOR, `feat!:` or `BREAKING CHANGE:` footer → MAJOR. No code review of the version itself — the commit is the contract.",
      },
      {
        term: "Stable release",
        definition:
          "Triggered automatically when a PR is merged to main. The bot publishes the new version to npm; product teams can then `pnpm update`.",
      },
      {
        term: "Alpha version",
        definition:
          "Each commit on a PR branch publishes a temporary version like 2.5.4-alpha.pr-1234-... so a product can install your in-progress changes before the PR is merged. Auto-cleaned to keep the registry small.",
      },
      {
        term: "Breaking change",
        definition:
          "A change that forces consumers to update their code (renamed prop, removed component, changed default). Stable components require a MAJOR bump + a migration guide for any breaking change. Experimental components can break freely — that's the price of being experimental.",
      },
    ],
    rules: [
      {
        id: "ver-semver",
        statement:
          "F0 publishes versions in MAJOR.MINOR.PATCH format (e.g. 2.5.3) — the standard SemVer convention used across npm.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#versioning",
      },
      {
        id: "ver-bump-rules",
        statement:
          "The version number bumps automatically based on the commit message: `fix:` adds 1 to PATCH, `feat:` adds 1 to MINOR, and `feat!:` or a `BREAKING CHANGE:` footer adds 1 to MAJOR.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#conventional-commits",
      },
      {
        id: "ver-no-bump-types",
        statement:
          "Commits whose only purpose is housekeeping — `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`, `build` — do NOT trigger a release. The package version stays the same.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#conventional-commits",
      },
      {
        id: "ver-merge-main",
        statement:
          "Merging a PR to `main` publishes the new version to npm, updates the changelog, and creates a GitHub release — automatically, no manual step.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#stable-versions",
      },
      {
        id: "ver-alpha",
        statement:
          "Every commit on an open PR publishes an `alpha` version that any product team can install to preview the change before merge. Format: `x.y.z-alpha.pr-<pr-number>-<date>-<commit-sha>`.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#experimental-alpha-versions",
      },
      {
        id: "ver-alpha-ttl",
        statement:
          "Alpha versions are temporary: deleted when the PR closes, capped at the last 3 per PR, and removed after 1 day to keep the npm registry clean.",
        verifiability: "automated",
        source: "docs/development/release-and-versioning.mdx#experimental-alpha-versions",
        note: "Conflict: the same MDX file mentions alpha branches deleted after 5 days. Versions vs branches — clarify.",
      },
      {
        id: "ver-stable-breaking",
        statement:
          "If you change a STABLE component in a way that breaks consumers (rename a prop, remove a variant, change a default), you must bump the MAJOR version AND publish a migration guide.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#stable",
      },
      {
        id: "ver-experimental-break",
        statement:
          "EXPERIMENTAL components can break their API without a MAJOR bump. That freedom is the whole point of the experimental tier — consumers know what they signed up for.",
        verifiability: "policy",
        source: "docs/components-maturity.mdx#experimental",
      },
    ],
  },
  {
    id: "architecture",
    section: "what-f0-is",
    title: "Architecture & Source of Truth",
    intent: "Where the truth lives and how surfaces consume it.",
    rules: [
      {
        id: "arc-repo-truth",
        statement:
          "The F0 repo (code + MDX + skills) is the single source of truth; Storybook, F0 Compose, Claude, and the Dashboard read from it.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (sourceOfTruth + goldenRules)",
      },
      {
        id: "arc-figma-sandbox",
        statement: "Figma is NOT a source of truth — it is an optional sandbox in Phase 2 only.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts",
      },
      {
        id: "arc-mdx-only",
        statement: "MDX is the only documentation; it lives in the repo and renders in Storybook.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (goldenRules)",
      },
      {
        id: "arc-storybook-catalogue",
        statement:
          "Storybook is the catalogue surface for all product builders (browse components, read MDX, see maturity badges).",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (surfaces)",
      },
      {
        id: "arc-compose-result",
        statement: "F0 Compose is a result, not a tool — it appears after asking Claude.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (surfaces + goldenRules)",
      },
      {
        id: "arc-dashboard-internal",
        statement:
          "The Dashboard is internal to Foundations only; product builders never see it.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (surfaces + goldenRules)",
      },
      {
        id: "arc-claude-entry",
        statement:
          "Claude/OpenCode (with F0 skills loaded) is the single entry point for builders — no other tool to learn.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (surfaces + goldenRules)",
      },
      {
        id: "arc-single-source",
        statement: "Single source of truth per topic: one canonical file, others link to it.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (goldenRules)",
      },
      {
        id: "arc-no-manual-sync",
        statement: "If information requires manual sync between systems, it is wrongly designed.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/architecture.ts (sourceOfTruth)",
      },
    ],
  },
  {
    id: "to-validate",
    section: "how-teams-work",
    title: "⚠ To validate with the team",
    intent:
      "Open questions surfaced during the lifecycle redesign. Each one is a real inconsistency in the current files — none of them have been auto-resolved. Walk through them in the working session and decide together; the outcomes will then be propagated to the canonical files.",
    rules: [
      {
        id: "tv-triage-vs-review",
        statement:
          "After Phase 0, the new flow says \"an F0 designer reviews the proposal issue and approves via the design-review checkbox\". But several files still describe it as \"Foundations triages proposals on a weekly cadence\". Decide: do we keep the word \"triage\" (and what does it mean now), or do we rename everything to \"design review\"? Affected: rulesInventory.ts (ctr-triage-cadence, ctr-triage-sla, ctr-triage-outcomes), triage.ts, troubleshooting.ts, profiles.ts, phases.ts, rules.ts, definition-of-done.mdx, f0-component-contribution skill, f0-component-promotion skill.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/rulesInventory.ts (this group)",
      },
      {
        id: "tv-triage-outcomes",
        statement:
          "The current 4 triage outcomes are: `accepted`, `accepted-as-domain` (→ sds/<area>/), `needs-info`, `rejected`. Under a pure \"design review\" flow they would naturally be: Approved (with sub-decision experimental/ vs sds/<area>/), Changes requested, Declined. Decide whether to keep the 4-outcome vocabulary or move to the 3-outcome design-review vocabulary. The `accepted-as-domain` distinction (core F0 vs SDS) MUST be preserved either way.",
        verifiability: "policy",
        source: "docs/definition-of-done.mdx#phase-1--problem",
        alsoIn: ["lifecycle-site/src/data/triage.ts"],
      },
      {
        id: "tv-rules-redundancy",
        statement:
          "Rules `ctr-phase0` and `ctr-3-use-cases` overlap by ~80% (both mention \"≥2 teams\"). Options: (a) fuse them into one rule, (b) rename `ctr-3-use-cases` to `ctr-evidence-review` and have it own only the \"manual review + waiver\" mechanic, (c) leave as-is because they describe the policy from different angles. Decide which one.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/rulesInventory.ts#contribution",
      },
      {
        id: "tv-legacy-rules-ts",
        statement:
          "The file `lifecycle-site/src/data/rules.ts` is the original, simpler rules array. It is now superseded by `rulesInventory.ts` (richer, sectioned, with verifiability). It is still consumed by `RuleTabs.tsx` on the home. Decide whether to: (a) keep it for the home and accept the duplication, (b) port `RuleTabs.tsx` to read from `rulesInventory.ts` and delete `rules.ts`, (c) treat `rules.ts` as the public summary and `rulesInventory.ts` as the internal working draft.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/rules.ts",
        alsoIn: ["lifecycle-site/src/data/rulesInventory.ts"],
      },
      {
        id: "tv-troubleshooting-stale",
        statement:
          "`troubleshooting.ts` still uses the old vocabulary: \"Triage SLA is 7 days\", \"Foundations triage hasn't responded\", \"let triage decide\". These need to be reconciled with whatever decision is taken in `tv-triage-vs-review`. Don't edit them in isolation — wait for the policy decision first.",
        verifiability: "policy",
        source: "lifecycle-site/src/data/troubleshooting.ts",
      },
      {
        id: "tv-issue-labels-consistency",
        statement:
          "Issue templates were unified to use the `f0:` prefix (`f0:proposal`, `f0:bug`, `f0:enhancement`). Confirm with the team that we want this prefix convention going forward — and if so, audit existing labels in the GitHub repo and rename / migrate old issues if needed.",
        verifiability: "human-evidence",
        source: ".github/ISSUE_TEMPLATE/",
      },
    ],
  },
]

export type Contradiction = {
  id: string
  title: string
  detail: string
}

export const contradictions: Contradiction[] = [
  {
    id: "c1-alpha-ttl",
    title: "Alpha retention TTL",
    detail:
      "release-and-versioning.mdx says alpha versions older than 1 day are deleted; same file's alpha-branch text says 5 days. Likely versions vs branches — clarify and unify the wording.",
  },
  {
    id: "c4-component-counts",
    title: "Component counts",
    detail:
      "maturity.ts cites '123 experimental (51%)' and '15 stable (6%)'; architecture.ts says '262 components'. Numbers should be regenerated from the dashboard, not hand-curated.",
  },
  {
    id: "c6-internal-tag-scope",
    title: "`internal` Storybook tag clarity",
    detail:
      "components-maturity.mdx says internal stories are 'hidden from public sidebar but visible in local builds'. Worth confirming local-vs-published behavior with a single canonical statement.",
  },
]
