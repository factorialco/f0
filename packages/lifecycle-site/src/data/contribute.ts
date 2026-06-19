// Source: team session 2026-06-10 ("Contribution process")
//         packages/react/docs/contributions.mdx
//         packages/react/.skills/f0-component-contribution/SKILL.md
//
// Contributing to F0 = changing the design system itself. It ALWAYS starts with
// one question — "do I actually need a new component?" — because the default is
// to extend what exists, not to add another snowflake.

// ── Step 1: the gate question ───────────────────────────────────────────────

export type ExistingCheck = {
  id: "experimental" | "stable" | "sds"
  label: string
  where: string
  description: string
}

// The three places to look before creating anything new.
export const existingChecks: ExistingCheck[] = [
  {
    id: "stable",
    label: "Stable components",
    where: "global F0",
    description:
      "Production-ready, owned by Foundations. If one fits, just use it.",
  },
  {
    id: "experimental",
    label: "Experimental components",
    where: "global F0",
    description:
      "Already being built. It may cover your need or be close enough to extend.",
  },
  {
    id: "sds",
    label: "Satellite Design System (SDS)",
    where: "domain-specific, inside F0",
    description:
      "Components owned by a specific domain (payroll, recruitment…). Another team may already have what you need.",
  },
]

// Prompts to ask the F0 agent before proposing anything new.
export const checkPrompts: string[] = [
  "Is there an existing F0 component (experimental, stable or SDS) that already does this?",
  "Can I cover this by adding a prop to an existing component instead of creating a new one?",
  "Does any domain's SDS already have something close to what I need?",
]

// The principle that governs the whole gate.
export const extendPrinciple = {
  headline: "Extend before you create",
  body:
    "If you try to create a new component when an existing one could be extended, the F0 agent should flag it and point you to the component to extend. If the agent misses it, Foundations (or reviewers) will flag it in review. New components are the exception, not the default.",
}

// ── Step 2: pick the scenario ───────────────────────────────────────────────

export type ContributionScenario = {
  id: string
  title: string
  example: string
  flow: string[] // ordered hand-offs, last item is the end state
  ownerNote?: string
}

export const contributionScenarios: ContributionScenario[] = [
  {
    id: "new-global",
    title: "A new component everyone could use",
    example: "A new kind of input, card or button.",
    flow: [
      "Your team builds it as an experimental component in global F0",
      "Foundations promotes it to stable once it meets the Definition of Done",
    ],
  },
  {
    id: "new-domain",
    title: "A new component specific to your domain",
    example: "A Timeline for Compensation.",
    flow: [
      "Your team builds it as an experimental component in the Satellite Design System (SDS) for that domain",
    ],
  },
  {
    id: "missing-prop",
    title: "A missing property on an existing component",
    example: "A stable or experimental component is almost right but lacks a prop.",
    flow: [
      "Your team contributes the new property",
      "Foundations validates it",
    ],
  },
  {
    id: "reuse-change",
    title: "Reuse a domain component but change its behaviour",
    example: "You want a domain component but need it to behave differently.",
    flow: [
      "Flag a conversation with Foundations",
      "Together you decide: evolve a global F0 component, or create a separate snowflake for your specific need",
    ],
  },
]

// ── Where a new component belongs ───────────────────────────────────────────
// F0 has two ownership scopes — Core and SDS — plus your own product app.
// "Kit" is a packaging label, not a third scope.

export type PlacementOption = {
  id: "core" | "sds" | "app"
  label: string
  owner: string
  when: string
}

export const placement = {
  headline: "Where does it belong?",
  intro:
    "Two ownership scopes, plus your own app. Pick honestly — SDS is a commitment, not a shortcut to make something feel “official”.",
  options: [
    {
      id: "core",
      label: "Core F0",
      owner: "Owned by Foundations",
      when: "Generic enough that ≥2 domains would use it. Foundations owns and guarantees it — docs, tests, visual regression.",
    },
    {
      id: "sds",
      label: "Your domain's SDS",
      owner: "Owned by your team",
      when: "Reused across features within your domain and built on top of core. You own and maintain it; it carries no F0 guarantees. If ≥2 domains end up needing it, it graduates to core.",
    },
    {
      id: "app",
      label: "Just your product app",
      owner: "Owned by your team",
      when: "Bespoke UI for a single screen. It doesn't belong in the design system at all — keep it in your feature.",
    },
  ] satisfies PlacementOption[],
}

// The test that keeps SDS from becoming a dumping ground.
export const sdsTest = {
  question:
    "Would several features in your domain reuse this — or is it the bespoke UI of one screen?",
  rules: [
    "Built on top of F0 core — never reinventing primitives.",
    "Domain-owned and domain-maintained, for as long as it lives.",
    "No F0 guarantees (no SLA, no visual-regression budget) — it's yours.",
    "Graduates to core when ≥2 domains need it.",
  ],
}

// "Kit" is a packaging label, not a place.
export const kitNote = {
  headline: "What about kits?",
  body: "A “kit” isn't a separate scope — it's a packaging label for a broad, multi-component capability used across Factorial (e.g. Charts, DataChart). Reserve it for that. “Components for my domain” is an SDS, not a kit.",
}
