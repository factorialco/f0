// Source: packages/react/docs/components-maturity.mdx
// 3 maturity levels. Folder/visibility (UI Wrappers, Primitives) is orthogonal — not a maturity.

export type MaturityId = "experimental" | "stable" | "deprecated"

export type Maturity = {
  id: MaturityId
  label: string
  badgeColor: "experimental" | "stable" | "deprecated"
  promise: string
  /** Plain answer to "can I use this in my designs / product?" */
  canIUse: string
  rules: string[]
  examples: string
  storybookTag: string
  jsdocMarker: string | null
}

export const maturityLevels: Maturity[] = [
  {
    id: "experimental",
    label: "Experimental",
    badgeColor: "experimental",
    promise:
      "API may change. Use at your own risk. No guarantee of backwards compatibility.",
    canIUse:
      "Yes. They're shipped and work for their documented use cases. Know that the API can change without a major version, only documented cases are guaranteed, and long-term upkeep isn't promised. Great for prototyping and new features — adopting them is exactly what earns them a promotion to stable.",
    rules: [
      "Lives under src/experimental/<area>/",
      "Wrapped in experimentalComponent() at export",
      "Story tagged 'experimental'",
      "Counts as 'in progress' — does NOT block releases",
    ],
    examples: "123 components today (51% of the catalog)",
    storybookTag: "experimental",
    jsdocMarker: null,
  },
  {
    id: "stable",
    label: "Stable",
    badgeColor: "stable",
    promise:
      "Public API. Breaking changes require a major version bump. Safe to depend on in production.",
    canIUse:
      "Yes, freely. Safe to depend on in production — breaking changes only come with a major version bump and a migration guide.",
    rules: [
      "Lives in its target folder (components/, patterns/, ui/, etc.)",
      "No experimentalComponent() wrapper",
      "Story tagged 'stable'",
      "Owned by @factorialco/foundations",
    ],
    examples: "15 components today (6%) — F0Alert, F0Avatar, F0Button…",
    storybookTag: "stable",
    jsdocMarker: null,
  },
  {
    id: "deprecated",
    label: "Deprecated",
    badgeColor: "deprecated",
    promise:
      "Will be removed. Continue to work for at least one quarter (≥90 days). Migrate to the suggested replacement.",
    canIUse:
      "Not for new work. It still works for now (≥1 quarter), but it's on its way out — use the suggested replacement instead.",
    rules: [
      "JSDoc requires THREE tags: @deprecated, @removeIn vX.Y.Z, @migration <url>",
      "Story tagged 'deprecated'",
      "Minimum 1 quarter (≥90 days) before removal",
      "Quarterly cleanup PRs remove past-due deprecations",
    ],
    examples: "0 components today — policy is new (60+ legacy @deprecated to backfill)",
    storybookTag: "deprecated",
    jsdocMarker: "@deprecated + @removeIn + @migration",
  },
]
