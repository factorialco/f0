// Source: packages/react/docs/contributions.mdx + .skills/f0-pr/SKILL.md
// + .skills/f0-code-review/SKILL.md

export type LintRule = {
  id: string
  status: "active" | "planned"
  what: string
  why: string
  example: string
}

export const lintRules: LintRule[] = [
  {
    id: "no-experimental-outside-folder",
    status: "active",
    what: "Components imported from src/experimental/ MUST be wrapped in experimentalComponent().",
    why: "Surfaces the experimental status to consumers at runtime + dev tools.",
    example: `// Good
export const F0NewThing = experimentalComponent("F0NewThing", F0NewThingImpl)

// Bad — missing wrapper
export const F0NewThing = F0NewThingImpl`,
  },
  {
    id: "deprecated-requires-removein",
    status: "planned",
    what: "Any @deprecated JSDoc must also have @removeIn vX.Y.Z and @migration <url>.",
    why: "60+ accumulated @deprecated tags today have no removal policy. This rule prevents new ones from joining the pile.",
    example: `/**
 * @deprecated Use F0Button instead.
 * @removeIn v3.0.0
 * @migration https://f0.factorial.dev/migrations/legacy-button
 */
export const LegacyButton = ...`,
  },
  {
    id: "story-must-have-maturity-tag",
    status: "planned",
    what: "Every Storybook story file MUST declare exactly one of: experimental | stable | deprecated.",
    why: "38% of components are untagged today. Without a tag the dashboard, lifecycle gates and quality gate cannot reason about them.",
    example: `const meta: Meta<typeof F0NewThing> = {
  title: "Experimental/F0NewThing",
  component: F0NewThing,
  tags: ["experimental"], // <- required
}`,
  },
]

export type PrType = {
  type: string
  label: string
  marker: string
  description: string
}

export const prTypes: PrType[] = [
  { type: "Proposal", label: "lifecycle:proposal", marker: "feat", description: "New component lands under src/experimental/." },
  { type: "Enhancement", label: "lifecycle:enhancement", marker: "feat", description: "Non-breaking improvement to an existing component." },
  { type: "Promotion", label: "lifecycle:promotion", marker: "feat!", description: "Move out of experimental/, re-tag as stable. Behavioral break for the import path." },
  { type: "Deprecation", label: "lifecycle:deprecation", marker: "feat", description: "Mark a stable component as deprecated. Adds the 3 JSDoc tags." },
  { type: "Removal", label: "lifecycle:removal", marker: "feat!", description: "Delete a component past its @removeIn version. Hard breaking change." },
]
