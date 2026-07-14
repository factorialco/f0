// Source of truth: packages/react/docs/definition-of-done.mdx
//
// The criteria below MUST stay in sync with:
//   - packages/components-dashboard/src/maturityDecision.ts (meetsDoD, dodGaps)
//   - packages/components-dashboard/scripts/plan-ola1.mjs (mirrors meetsDoD in plain JS)
//   - packages/react/.skills/f0-component-promotion/SKILL.md
//
// If you change a stable-tier criterion here, update those files too.

export type DoDCriterion = {
  id: string
  label: string
  detail: string
  // For the dashboard contract, this is the gap message dodGaps() emits.
  // Useful so a designer can recognise a dashboard warning from this site.
  dashboardGap?: string
}

export type DoDLevel = {
  id: "experimental" | "stable" | "deprecated"
  label: string
  intent: string
  criteria: DoDCriterion[]
  // Where the canonical text lives.
  sourceLink: string
}

export const dodLevels: DoDLevel[] = [
  {
    id: "experimental",
    label: "Experimental",
    intent: "Minimum bar to ship a component into the catalogue.",
    sourceLink:
      "https://github.com/factorialco/f0/blob/main/packages/react/docs/definition-of-done.mdx#phase-3--build",
    criteria: [
      {
        id: "exp-folder",
        label: "Lives under src/experimental/<area>/",
        detail: "Or src/sds/<area>/ for Domain specific components.",
      },
      {
        id: "exp-wrapper",
        label: "Wrapped with experimentalComponent() helper",
        detail: "From @/lib/experimental — surfaces a runtime warning to consumers.",
      },
      {
        id: "exp-tag",
        label: "Storybook tag is 'experimental'",
        detail: "tags: ['autodocs', 'experimental'] in the .stories.tsx file.",
      },
      {
        id: "exp-tests",
        label: "Unit tests cover the public API",
        detail: "Vitest, in __tests__/. No snapshot-only tests.",
      },
      {
        id: "exp-story-test",
        label: "Storybook play function passes",
        detail: "Covers the primary user flow + axe a11y check.",
      },
      {
        id: "exp-docs",
        label: "MDX docs at Acceptable tier",
        detail: "Per f0-docs skill — title, description, primary example.",
      },
      {
        id: "exp-quality-gate",
        label: "f0-quality-gate passes",
        detail: "typecheck, lint, format, tests.",
      },
    ],
  },
  {
    id: "stable",
    label: "Stable",
    intent:
      "The technical contract for promotion. Foundations validates every item before re-tagging.",
    sourceLink:
      "https://github.com/factorialco/f0/blob/main/packages/react/docs/definition-of-done.mdx#phase-5--promote",
    criteria: [
      {
        id: "stable-folder",
        label: "Lives in a stable folder",
        detail: "src/components/, patterns/, kits/, layouts/ or hooks/.",
        dashboardGap: "lives outside stable folders",
      },
      {
        id: "stable-name",
        label: "Name starts with F0",
        detail: "Public components must use the F0 prefix.",
        dashboardGap: "name does not start with `F0`",
      },
      {
        id: "stable-no-wrapper",
        label: "experimentalComponent() wrapper removed",
        detail: "No runtime warning — the component is a public commitment now.",
        dashboardGap: "still wrapped in experimentalComponent()",
      },
      {
        id: "stable-mdx",
        label: "MDX documentation present (Good tier minimum)",
        detail: "Gold tier encouraged. Per f0-docs skill.",
        dashboardGap: "missing MDX docs",
      },
      {
        id: "stable-tests",
        label: "Has unit tests",
        detail: "At least one .test.tsx file under __tests__/.",
        dashboardGap: "no unit tests",
      },
      {
        id: "stable-snapshot-story",
        label: "Has a Snapshot story",
        detail: "Required for visual regression coverage.",
        dashboardGap: "no Snapshot story",
      },
      {
        id: "stable-with-snapshot",
        label: "Uses withSnapshot() helper",
        detail: "Consistent visual baseline across components.",
        dashboardGap: "no withSnapshot()",
      },
      {
        id: "stable-satisfies-meta",
        label: "Stories use `satisfies Meta`",
        detail: "Modern pattern — `as Meta` is deprecated.",
        dashboardGap: "not using `satisfies Meta`",
      },
      {
        id: "stable-no-as-meta",
        label: "No `as Meta` casts in stories",
        detail: "Replace with `satisfies Meta`.",
        dashboardGap: "uses deprecated `as Meta`",
      },
    ],
  },
  {
    id: "deprecated",
    label: "Deprecated",
    intent:
      "What deprecation requires before a component can be retired. Removal is never sooner than 90 days.",
    sourceLink:
      "https://github.com/factorialco/f0/blob/main/packages/react/docs/definition-of-done.mdx#deprecation",
    criteria: [
      {
        id: "dep-jsdoc-deprecated",
        label: "@deprecated JSDoc tag",
        detail: "Above the export, with the suggested replacement.",
      },
      {
        id: "dep-jsdoc-removein",
        label: "@removeIn JSDoc tag",
        detail: "Specifies the F0 version when the component will be removed.",
      },
      {
        id: "dep-jsdoc-migration",
        label: "@migration JSDoc tag",
        detail: "Link to the migration document under docs/migrations/.",
      },
      {
        id: "dep-doc",
        label: "Migration document published",
        detail: "Step-by-step replacement guide in docs/migrations/.",
      },
      {
        id: "dep-storybook-tag",
        label: "Storybook tag is 'deprecated'",
        detail: "Surfaces deprecation banner on the docs page.",
      },
    ],
  },
]

