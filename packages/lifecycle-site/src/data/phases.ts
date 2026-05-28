// Source: packages/react/docs/definition-of-done.mdx
//         packages/react/.skills/f0-component-contribution/SKILL.md (Phase 0)
// 5 phases of the F0 component lifecycle, plus Phase 0 (Discovery & Evaluation).

export type PhaseId = "discovery" | "problem" | "design" | "build" | "real-use" | "promote"

export type Phase = {
  id: PhaseId
  number: number
  title: string
  goal: string
  gates: string[]
  owner: string
  duration: string
  skill: string | null
  sourceLink: string
}

export const phases: Phase[] = [
  {
    id: "discovery",
    number: 0,
    title: "Discovery & Evaluation",
    goal: "Decide if a new component is even needed, BEFORE proposing.",
    gates: [
      "Does it already exist? (search Storybook + repo)",
      "Can an existing component be extended? (open Enhancement instead)",
      "Is the need recurrent (≥2 product teams)?",
      "Could a pattern, kit or composition solve it?",
    ],
    owner: "Anyone proposing + Claude/OpenCode",
    duration: "Minutes (a conversation, not a meeting)",
    skill: "f0-component-contribution",
    sourceLink:
      "https://github.com/factorialco/factorial-one/blob/main/packages/react/.skills/f0-component-contribution/SKILL.md#phase-0--discovery--evaluation-before-proposing",
  },
  {
    id: "problem",
    number: 1,
    title: "Problem",
    goal: "Validate the need before designing anything.",
    gates: [
      "Use cases documented (≥2 real use cases from different teams; an F0 designer can waive for clearly foundational primitives)",
      "Alternatives considered (existing F0 components, primitives)",
      "Foundations triage decision recorded",
    ],
    owner: "Proposer (any team)",
    duration: "Variable",
    skill: "f0-component-contribution",
    sourceLink:
      "https://github.com/factorialco/factorial-one/blob/main/packages/react/docs/definition-of-done.mdx#phase-1--problem",
  },
  {
    id: "design",
    number: 2,
    title: "Design",
    goal: "Reach a design that satisfies the F0 design review checklist.",
    gates: [
      "10-category design review passed",
      "API sketch reviewed by Foundations",
      "Accessibility considered (WCAG AA)",
      "Tokens used (no hardcoded values)",
    ],
    owner: "Proposer + Foundations design pair",
    duration: "Variable",
    skill: null,
    sourceLink:
      "https://github.com/factorialco/factorial-one/blob/main/packages/react/docs/design-review.mdx",
  },
  {
    id: "build",
    number: 3,
    title: "Build (in experimental/)",
    goal: "Ship a working component under packages/react/src/experimental/.",
    gates: [
      "Lives under src/experimental/<area>/",
      "Wrapped with experimentalComponent() helper",
      "Storybook story tagged 'experimental'",
      "Unit tests passing (vitest)",
      "Storybook test passing (run-story-tests)",
      "Acceptable docs tier (per f0-docs)",
    ],
    owner: "Proposer team",
    duration: "Variable",
    skill: "f0-component-contribution",
    sourceLink:
      "https://github.com/factorialco/factorial-one/blob/main/packages/react/docs/definition-of-done.mdx#phase-3--build",
  },
  {
    id: "real-use",
    number: 4,
    title: "Real-world use",
    goal: "Prove the API survives contact with real consumers.",
    gates: [
      "≥3 product teams using it in production",
      "No breaking changes for ≥60 days",
      "0 critical bugs open",
      "Quality gate passes (lint, types, tests, a11y)",
      "Owner declares the API stable",
    ],
    owner: "Proposer team (evidence) + Foundations (verification)",
    duration: "No minimum (evidence-based)",
    skill: null,
    sourceLink:
      "https://github.com/factorialco/factorial-one/blob/main/packages/react/docs/definition-of-done.mdx#phase-4--real-world-use",
  },
  {
    id: "promote",
    number: 5,
    title: "Promote to stable",
    goal: "Move out of experimental/ and re-tag as stable.",
    gates: [
      "Foundations re-confirmation",
      "Migrated out of src/experimental/ to its target folder",
      "experimentalComponent() wrapper removed",
      "Storybook tag changed from 'experimental' → 'stable'",
      "Good docs tier (per f0-docs) — Gold encouraged",
      "PR labeled lifecycle:promotion (uses ! breaking marker)",
    ],
    owner: "Foundations",
    duration: "Variable",
    skill: "f0-component-promotion",
    sourceLink:
      "https://github.com/factorialco/factorial-one/blob/main/packages/react/docs/definition-of-done.mdx#phase-5--promote",
  },
]
