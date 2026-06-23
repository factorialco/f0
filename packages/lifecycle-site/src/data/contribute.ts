// Source of truth: packages/react/docs/where-it-goes.mdx (canonical placement),
//                  packages/react/docs/contributions.mdx,
//                  packages/react/.skills/f0-component-contribution/SKILL.md
//
// Contributing to F0 = changing the design system itself. It ALWAYS starts with
// one question — "do I actually need a new component?" — because the default is
// to extend what exists, not to add another snowflake.

// ── Step 1: the gate question ───────────────────────────────────────────────
// This module exists to filter out proposals that shouldn't happen: things
// already solved, things that only need extending, or things that don't
// belong in the system at all. Rule these three out before proposing anything.

export type RedundancyCheck = {
  id: "exists" | "extend" | "product-only"
  label: string
  verdict: string // the short consequence if this is true
  description: string
}

// The three reasons a new component is probably NOT needed.
export const redundancyChecks: RedundancyCheck[] = [
  {
    id: "exists",
    label: "It already exists",
    verdict: "use it",
    description:
      "A stable or experimental component — or a kit / satellite system — may already cover this. Ask the F0 agent or browse Storybook before proposing anything.",
  },
  {
    id: "extend",
    label: "It just needs extending",
    verdict: "extend, don't add",
    description:
      "Often the real answer is a new prop, a variant, or composing components you already have — not a whole new component.",
  },
  {
    id: "product-only",
    label: "It's only for your product",
    verdict: "keep it local",
    description:
      "Bespoke UI for one screen, with no shared identity or reuse, belongs in your product monolith — not in F0.",
  },
]

// Prompts to ask the F0 agent before proposing anything new.
export const checkPrompts: string[] = [
  "Is there an existing F0 component, kit or satellite system that already does this?",
  "Can I cover this by adding a prop to an existing component instead of creating a new one?",
  "Could a pattern or a composition of existing components solve it?",
]

// The principle that governs the whole gate.
export const extendPrinciple = {
  headline: "Extend before you create",
  body: "If you try to create a new component when an existing one could be extended, the F0 agent should flag it and point you to the component to extend. If the agent misses it, Foundations (or reviewers) will flag it in review. New components are the exception, not the default.",
}

// ── Step 2: what are you actually doing? ────────────────────────────────────

export type ContributionScenario = {
  id: string
  title: string
  example: string
  expects: string[] // the quality bar — what it takes to land it well
}

// The two ways you actually change F0 (product-only is filtered out at the
// gate, so it isn't a case here). Each lists the quality bar it must clear.
export const contributionScenarios: ContributionScenario[] = [
  {
    id: "new-generic",
    title: "A new generic component",
    example: "A new kind of input, card or button any product could use.",
    expects: [
      "A real, recurring need — ≥2 use cases from different teams (a designer can waive this for clearly foundational primitives)",
      "Passes design review: coherent with F0, sensible API",
      "Unit tests + a Storybook story (play function / snapshot)",
      "MDX docs that explain when to use it and when not to",
      "f0-quality-gate green (typecheck, lint, format, tests)",
      "Lands as experimental; the full Definition of Done + Foundations sign-off is what later promotes it to stable",
    ],
  },
  {
    id: "missing-prop",
    title: "A missing property on an existing component",
    example: "A stable or experimental component is almost right but lacks a prop.",
    expects: [
      "Backward-compatible — no breaking change to the existing API",
      "Tests cover the new prop",
      "Story and MDX updated to show it",
      "Quality gate green; the component's owner validates the change",
    ],
  },
]

// ── Where it goes — canonical placement (source: docs/where-it-goes.mdx) ─────

export type PlacementKind = {
  id: "core" | "kit" | "sds" | "monolith"
  label: string
  what: string
  examples?: string
}

export const placementKinds: PlacementKind[] = [
  {
    id: "core",
    label: "Core F0",
    what: "An atomic, generic component (or pattern, layout, hook). Born in experimental/, promoted by Foundations to its final home.",
    examples: "F0Button, F0Form",
  },
  {
    id: "kit",
    label: "Kit",
    what: "A grouping of components for a general functional area, built on core F0 tokens (no own visual identity), reusable by ≥2 products. A kit can't add new atomic components — it only composes existing ones.",
    examples: "Charts, Social",
  },
  {
    id: "sds",
    label: "Satellite Design System (SDS)",
    what: "A system with its OWN visual identity — own tokens, colors or typography — owned by a team and used across Factorial. “Only my product uses it” does not qualify.",
    examples: "sds/one (AI brand), sds/upselling (Growth brand)",
  },
  {
    id: "monolith",
    label: "Your product monolith",
    what: "Not generic, not a functional grouping for ≥2 products, no shared visual identity? Then it doesn't belong in F0 — keep it in your product.",
  },
]

// The quick decision (source: where-it-goes.mdx "SDS vs Kit").
export const placementDecision = {
  headline: "SDS, Kit, or neither?",
  steps: [
    {
      question: "Own tokens / colors / typography, different from core F0?",
      yes: "It's an SDS.",
      no: "Not an SDS — keep going.",
    },
    {
      question: "Groups components for a general functional area (charts, social…)?",
      yes: "It's a Kit candidate.",
      no: "Not a kit.",
    },
    {
      question: "Used by ≥2 products?",
      yes: "It can live in F0.",
      no: "It belongs in your product monolith, not F0.",
    },
  ],
}

// Gatekeeping that keeps sds/ and kits/ honest.
export const gatekeeping = {
  headline: "What keeps it honest",
  rules: [
    "Foundations is the only approver for new entries under sds/ or kits/ — an experimental can't promote itself in.",
    "The PR template asks: “Why can't this live in your product monolith?” — you have to justify it.",
    "Inventories (sds/INVENTORY.md, kits/INVENTORY.md) record every entry; anything miscategorised is flagged for cleanup.",
  ],
}
