// Source: packages/react/docs/contributions.mdx (ownership + roles)
//         packages/react/.skills/f0-component-contribution/SKILL.md
//         packages/react/.skills/f0-component-promotion/SKILL.md
// Profiles describe how each role interacts with the F0 lifecycle.
// They are NOT exclusive — a single person can wear multiple hats.
// These two roles cover anyone in Factorial who wants to contribute to F0.

import type { PhaseId } from "./phases"

export type ProfileId = "pd" | "pe"

export type Profile = {
  id: ProfileId
  label: string
  shortDescription: string
  primaryTool: string
  responsibilities: string[]
  appliesToPhases: PhaseId[]
  typicalQuestions: string[]
  startHere: string
  skills: string[]
}

export const profiles: Profile[] = [
  {
    id: "pd",
    label: "Product Designer",
    shortDescription:
      "Any product designer in Factorial who wants to use, propose or contribute to F0. Brings visual judgment, UX rigor and writes the MDX copy that explains when to use a component.",
    primaryTool: "Storybook + Claude / OpenCode",
    responsibilities: [
      "Browse and use F0 components when designing features",
      "Propose new components when a real gap exists across ≥2 teams",
      "Lead design review in Phase 2 of the lifecycle",
      "Write MDX copy: when to use, when NOT to use, do/don't",
      "Detect gaps and patterns during real-world adoption",
    ],
    appliesToPhases: ["discovery", "problem", "design", "build", "real-use"],
    typicalQuestions: [
      "Does F0 already have a component for what I need?",
      "Should this be a component, a pattern, or just a composition?",
      "What copy should the MDX have so others know when to use it?",
      "Is this design coherent with similar F0 components?",
    ],
    startHere:
      "Browse Storybook to see what already exists. If you're proposing something new, run Phase 0 (Discovery) with Claude before opening a proposal — most ideas already have an answer in F0.",
    skills: ["f0-component-contribution", "f0-docs"],
  },
  {
    id: "pe",
    label: "Product Engineer",
    shortDescription:
      "Any product engineer in Factorial who wants to use, fix, improve or build new F0 components. Implements components in src/experimental/, writes tests, stories and MDX, and passes the quality gate.",
    primaryTool: "Repo + Claude / OpenCode",
    responsibilities: [
      "Use F0 components when building product features",
      "Report bugs and open enhancement issues for missing props/variants",
      "Build new components end-to-end in src/experimental/ when approved",
      "Write unit tests, stories, axe a11y tests and MDX",
      "Pass f0-quality-gate before opening a PR",
      "Maintain components during real-world adoption (Phase 4)",
    ],
    appliesToPhases: ["design", "build", "real-use"],
    typicalQuestions: [
      "How do I use this component in my product?",
      "What patterns should I follow for context, styling, i18n?",
      "What's the exact folder structure for an experimental component?",
      "How do I run the quality gate before opening the PR?",
    ],
    startHere:
      "If you only want to use F0, start in Storybook. If you're contributing, load the f0-component-contribution skill and let Claude walk you through the right sub-skills (patterns, testing, stories, docs, PR).",
    skills: [
      "f0-component-contribution",
      "f0-component-patterns",
      "f0-unit-testing",
      "f0-storybook-stories",
      "f0-storybook-testing",
      "f0-quality-gate",
      "f0-pr",
    ],
  },
]
