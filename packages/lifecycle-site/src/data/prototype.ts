// Source: team session 2026-06-10 ("Separate Prototype vs Contribute")
//         packages/react/docs/contributions.mdx
// "Prototype a screen" is the DAY-TO-DAY path: you are NOT changing the design
// system, you are assembling a screen out of what already exists. It must feel
// effortless and example-driven. Contributing to F0 is a different mode entirely
// (see contribute.ts).

export type PrototypeStep = {
  who: string
  action: string
  detail?: string
}

export type PrototypeExample = {
  prompt: string
}

export const prototype = {
  label: "Prototype a screen",
  oneLine:
    "What you'll do most days. Describe the screen you need and get a real, working composition built from F0 components — no design-system changes required.",
  tool: "Claude (with the F0 skills loaded)",
  toolNote:
    "What makes it work for F0 is the skills it loads — any other skill-aware agent (OpenCode, the Copilot coding agent) works too.",
  steps: [
    {
      who: "You",
      action: "Describe the screen in plain language",
      detail:
        'Open your agent and say what you want, e.g. "an employee profile screen with avatar, personal data and quick actions".',
    },
    {
      who: "The agent",
      action: "Picks the F0 components that fit",
      detail:
        "Reads the repo + F0 skills and composes real design-system pieces — not custom markup.",
    },
    {
      who: "The agent",
      action: "Renders the composition in F0 Compose",
      detail: "You see a real, working screen you can click through.",
    },
    {
      who: "You",
      action: "Iterate by conversation",
      detail: '"Add a filter", "show the empty state", "make this two columns". Done.',
    },
  ] satisfies PrototypeStep[],
  examples: [
    {
      prompt:
        "A people dashboard with charts for headcount, turnover and absences, filterable by team and location.",
    },
    {
      prompt:
        "An employee directory: a searchable, sortable and filterable list with a header and quick actions.",
    },
    {
      prompt: "A step-by-step form to onboard a new hire.",
    },
    {
      prompt:
        "A settings page with grouped sections and their form fields.",
    },
  ] satisfies PrototypeExample[],
  links: [
    {
      label: "Browse the F0 catalogue (Storybook)",
      url: "https://main--66a7a8d7d124220c363457cc.chromatic.com",
    },
  ],
}
