// Source: packages/react/docs/contributions.mdx ("I want to..." sections)
//         packages/react/.skills/f0-component-contribution/SKILL.md
// Intents are concrete things someone contributing to F0 wants to do.

export type IntentId =
  | "build-with-existing"
  | "improve-existing"
  | "propose-new"
  | "report-bug"
  | "promote"
  | "deprecate"

export type IntentStep = {
  who: string
  action: string
  detail?: string
}

export type Intent = {
  id: IntentId
  label: string
  whoCanDo: string
  oneLine: string
  steps: IntentStep[]
  links: { label: string; url: string }[]
  warnings?: string[]
}

export const intents: Intent[] = [
  {
    id: "build-with-existing",
    label: "Build a screen with what already exists",
    whoCanDo: "Any PD or PE",
    oneLine:
      "Most of your day. Talk to Claude, get a real composition rendered in F0 Compose.",
    steps: [
      {
        who: "PD / PE",
        action: "Open Claude/OpenCode",
        detail: 'Describe what you want: "Build a screen for employee profile with avatar, data, actions"',
      },
      {
        who: "Claude",
        action: "Identifies the F0 components that fit",
        detail: "Reads the repo + skills, picks F0Avatar, F0Card, F0DataList, etc.",
      },
      {
        who: "Claude",
        action: "Generates the composition + renders in F0 Compose",
        detail: "You see a real, working screen made of real DS pieces.",
      },
      {
        who: "PD / PE",
        action: "Iterate via conversation",
        detail: '"Change this", "Add a filter", "Show empty state". Done.',
      },
    ],
    links: [
      {
        label: "Storybook (catalogue)",
        url: "http://localhost:6006",
      },
    ],
  },
  {
    id: "improve-existing",
    label: "Improve / extend an existing component",
    whoCanDo: "Any PD or PE",
    oneLine:
      "A prop is missing, or a variant doesn't exist. Open an Enhancement, NOT a Proposal.",
    steps: [
      {
        who: "PD / PE + Claude",
        action: "Confirm the component exists and the gap is real",
        detail: "Phase 0 question 0.2 — can the existing component cover this with a new prop?",
      },
      {
        who: "PD / PE",
        action: "Open a Component Enhancement issue",
        detail: "Describe the change, impact, components affected. Optionally paste the link in #f0-support for extra visibility.",
      },
      {
        who: "Owner team (per CODEOWNERS)",
        action: "If component is stable → design review (consistency check)",
        detail: "If experimental, the owner team can iterate freely.",
      },
      {
        who: "PE",
        action: "Implement, pass quality gate, open PR",
      },
    ],
    links: [
      {
        label: "Open Enhancement issue",
        url: "https://github.com/factorialco/factorial-one/issues/new?template=component-enhancement.yml",
      },
    ],
  },
  {
    id: "propose-new",
    label: "Propose something new",
    whoCanDo: "Any PD or PE",
    oneLine:
      "Walk through Phase 0 (self-check), then open a proposal — an F0 designer reviews and approves before you build.",
    steps: [
      {
        who: "PD / PE + Claude",
        action: "Phase 0 — Discovery & Evaluation (self-check)",
        detail:
          "Answer 4 questions: Does it exist? Can existing be extended? Do at least 2 different teams need it? Could a pattern solve it?",
      },
      {
        who: "PD / PE",
        action: "Open a Component Proposal issue",
        detail:
          "The template walks you through Phase 0 in-line. Include problem, ≥2 use cases from different teams, proposed name, rough API. Optionally paste the link in #f0-support for extra visibility.",
      },
      {
        who: "F0 Designer",
        action: "Review the proposal and check the design-review box (or request changes)",
        detail:
          "Evaluates DS pertinence, generality, cost/benefit, and simpler alternatives. Can waive the team-count requirement for clearly foundational primitives.",
      },
      {
        who: "Proposing team",
        action: "Once approved → Phase 2 (Design)",
        detail: "Sketch in Figma (sandbox), write API draft, request design review.",
      },
      {
        who: "PE",
        action: "Phase 3 — Build in src/experimental/",
        detail:
          "Follow f0-component-contribution Phase 3: scaffold, implement, tests, stories, MDX, quality gate, PR.",
      },
    ],
    warnings: [
      "Phase 0 is a fast self-check, not a gate. When in doubt, open the proposal anyway and ask for early feedback.",
      "Don't start building in src/experimental/ until the design-review checkbox on the proposal issue is checked.",
    ],
    links: [
      {
        label: "Open Proposal issue",
        url: "https://github.com/factorialco/factorial-one/issues/new?template=component-proposal.yml",
      },
      {
        label: "Phase 0 details (skill)",
        url: "https://github.com/factorialco/factorial-one/blob/main/packages/react/.skills/f0-component-contribution/SKILL.md#phase-0--discovery--evaluation-before-proposing",
      },
    ],
  },
  {
    id: "report-bug",
    label: "Report a bug",
    whoCanDo: "Anyone using F0",
    oneLine: "Open a Bug Report. CODEOWNERS routes it to the right owner.",
    steps: [
      {
        who: "Reporter",
        action: "Open a Bug Report issue with reproduction steps",
        detail: "Optionally paste the link in #f0-support for extra visibility.",
      },
      {
        who: "GitHub (CODEOWNERS)",
        action: "Auto-routes to the component owner",
      },
      {
        who: "Owner",
        action: "Prioritize, fix, PR with quality gate",
      },
    ],
    links: [
      {
        label: "Open Bug Report",
        url: "https://github.com/factorialco/factorial-one/issues/new?template=bug-report.yml",
      },
    ],
  },
  {
    id: "promote",
    label: "Promote experimental → stable",
    whoCanDo: "Foundations only",
    oneLine: "Foundations Engineer executes. Foundations Designer signs off.",
    steps: [
      {
        who: "PM / Tech Lead of owner team",
        action: "Request promotion when Phase 4 criteria are met",
        detail: "≥3 teams in production, no breaking changes for 60 days, 0 critical bugs.",
      },
      {
        who: "Foundations Engineer",
        action: "Load f0-component-promotion skill, validate full DoD",
      },
      {
        who: "Foundations Engineer",
        action: "Move src/experimental/X → src/components/X",
        detail: "Remove experimentalComponent() wrapper. Change Storybook tag to 'stable'.",
      },
      {
        who: "Foundations Designer",
        action: "Final visual + system sign-off",
      },
      {
        who: "Foundations",
        action: "Merge PR labeled lifecycle:promotion",
      },
    ],
    links: [
      {
        label: "Promotion skill",
        url: "https://github.com/factorialco/factorial-one/blob/main/packages/react/.skills/f0-component-promotion/SKILL.md",
      },
    ],
  },
  {
    id: "deprecate",
    label: "Deprecate a component",
    whoCanDo: "Foundations only",
    oneLine: "3 JSDoc tags, ≥90 days notice, migration link, quarterly cleanup.",
    steps: [
      {
        who: "Foundations Engineer",
        action: "Detect candidate (replaced, unused, violates principles)",
      },
      {
        who: "Foundations Designer",
        action: "Approve + validate the alternative",
      },
      {
        who: "Foundations Engineer",
        action: "Add the 3 mandatory JSDoc tags",
        detail: "@deprecated, @removeIn vX.Y.Z, @migration <url>",
      },
      {
        who: "Foundations Engineer",
        action: "Write the migration doc",
      },
      {
        who: "Quarterly cleanup",
        action: "Remove components past their @removeIn version",
      },
    ],
    warnings: ["Removal is never sooner than 90 days after deprecation."],
    links: [
      {
        label: "Release & versioning policy",
        url: "https://github.com/factorialco/factorial-one/blob/main/packages/react/docs/development/release-and-versioning.mdx",
      },
    ],
  },
]
