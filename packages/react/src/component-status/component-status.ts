/**
 * Component Status API
 * ====================
 *
 * A small, dependency-free query layer over the computed component-status
 * dataset. Given a component name it returns the component's current maturity
 * status plus a checklist of what is still missing for it to be considered
 * "stable" (the Definition of Done).
 *
 * This is the single source of truth for the *policy* — what "stable" means.
 * The scan (`scripts/component-status-build.mjs`) only extracts raw facts
 * (tests / stories / docs / tags); the decision of whether those facts clear
 * the bar lives here so it can be reused and tested.
 *
 * Shipped as the `@factorialco/f0-react/dist/component-status` entry point:
 *
 *   import { getComponentStatus } from "@factorialco/f0-react/dist/component-status"
 *   getComponentStatus("Button")          // status + stable checklist
 *   getComponentStatus("F0Alert")?.missing // what's missing to be stable
 *
 * The dataset is computed from the `src/` tree at build/dev time and injected
 * via the `virtual:f0-component-status-data` module (see
 * `scripts/component-status-build.mjs`). There is no committed snapshot — every
 * build and dev-server start recomputes it from source, so it never goes stale.
 *
 * In this repo's Storybook it is also exposed on `window.f0ComponentStatus`
 * (see `.storybook/preview.tsx`).
 */

import rawStatusData from "virtual:f0-component-status-data"

export type ApiStatus =
  | "stable"
  | "experimental"
  | "deprecated"
  | "internal"
  | "unknown"

export type DocQuality = "none" | "stub" | "acceptable" | "good" | "gold"

/** A raw entry as emitted by the generator. */
export interface ComponentEntry {
  name: string
  zone: string
  apiStatus: ApiStatus
  tags: string[]
  hasStories: boolean
  hasUnitTests: boolean
  hasMdxDocs: boolean
  docQuality: DocQuality
  storyFile: string
}

export interface ComponentStatusStats {
  total: number
  byStatus: Record<ApiStatus, number>
  byZone: Record<string, number>
  byDocQuality: Record<DocQuality, number>
  withUnitTests: number
  withMdxDocs: number
}

/** The full generated dataset. */
export interface ComponentStatusData {
  generatedAt: string
  stats: ComponentStatusStats
  components: ComponentEntry[]
}

/** One line item in the stable checklist. */
export interface RequirementResult {
  /** Stable machine key, e.g. "unitTests". */
  key: string
  /** Human-readable requirement, e.g. "Has unit tests". */
  label: string
  met: boolean
  /** What is missing / how to satisfy it when unmet. */
  detail: string
  /** Concrete sub-criteria enumerated under `detail`, when the requirement is
   * made up of several checks (e.g. what "acceptable" docs must contain). */
  criteria?: string[]
}

export interface ComponentStatus extends ComponentEntry {
  /** The full Definition-of-Done checklist with pass/fail per item. */
  requirements: RequirementResult[]
  /** Unmet requirement labels — the "what's missing" answer. */
  missing: string[]
  /** True when every requirement in the checklist is met. */
  meetsBar: boolean
  /** What the component currently *claims* to be. */
  taggedStable: boolean
  /** Eligible to be stable (alias of meetsBar). */
  stableReady: boolean
  /**
   * Mismatch between the tag and the bar:
   *   - "tagged-but-below-bar": marked stable but does not meet the DoD
   *   - "meets-bar-not-tagged": meets the DoD but not yet tagged stable
   *   - null: tag and bar agree
   */
  discrepancy: "tagged-but-below-bar" | "meets-bar-not-tagged" | null
  /** Human-readable badge label for `apiStatus` (e.g. "Stable", "No tag"). */
  label: string
  /** One-line human summary shown above the checklist. */
  summary: string
  /** Whether the DoD checklist is meaningful for this maturity level. */
  showChecklist: boolean
}

/** The full generated dataset (stats + every tracked component). */
export const componentStatusData: ComponentStatusData =
  rawStatusData as unknown as ComponentStatusData

/**
 * Minimum doc-quality tier a component must reach to count as documented for
 * the purposes of "stable". "acceptable" = required sections + props table.
 */
export const MIN_DOC_QUALITY: DocQuality = "acceptable"

/** Human-readable badge label per maturity level. */
export const STATUS_LABELS: Record<ApiStatus, string> = {
  stable: "Stable",
  experimental: "Experimental",
  deprecated: "Deprecated",
  internal: "Internal",
  unknown: "No tag",
}

/** The DoD checklist is only meaningful for components on the road to stable. */
function checklistApplies(apiStatus: ApiStatus): boolean {
  return (
    apiStatus === "stable" ||
    apiStatus === "experimental" ||
    apiStatus === "unknown"
  )
}

/** One-line human summary shown above the checklist. */
function summarize(
  apiStatus: ApiStatus,
  meetsBar: boolean,
  taggedStable: boolean,
  discrepancy: ComponentStatus["discrepancy"]
): string {
  if (apiStatus === "deprecated") {
    return "Deprecated — avoid in new work and migrate to the recommended alternative."
  }
  if (apiStatus === "internal") {
    return "Internal — not part of the public API."
  }
  if (meetsBar && taggedStable) {
    return "Stable and meets the definition of done."
  }
  if (discrepancy === "tagged-but-below-bar") {
    return "Tagged stable, but the checklist below isn't complete yet."
  }
  if (discrepancy === "meets-bar-not-tagged") {
    return "Meets the definition of done — ready to be promoted to stable."
  }
  if (apiStatus === "unknown") {
    return "No maturity tag set. Complete the checklist below to reach stable."
  }
  return "Experimental. Complete the checklist below to reach stable."
}

const DOC_QUALITY_ORDER: DocQuality[] = [
  "none",
  "stub",
  "acceptable",
  "good",
  "gold",
]

function docQualityAtLeast(actual: DocQuality, min: DocQuality): boolean {
  return DOC_QUALITY_ORDER.indexOf(actual) >= DOC_QUALITY_ORDER.indexOf(min)
}

/**
 * The Definition of Done for a stable component. Each requirement inspects a
 * raw entry and reports whether it is met.
 *
 * Scope note: automated a11y verification is intentionally NOT part of this
 * checklist yet — it is not tracked by the generator. Accessibility remains a
 * manual promotion gate (see docs/components-maturity.mdx). Add a requirement
 * here once an a11y signal is emitted into the status data.
 */
export const STABLE_REQUIREMENTS: ReadonlyArray<{
  key: string
  label: string
  detail: string
  criteria?: string[]
  isMet: (c: ComponentEntry) => boolean
}> = [
  {
    key: "stories",
    label: "Has Storybook stories",
    detail: "Add a .stories.tsx file with representative stories.",
    isMet: (c) => c.hasStories,
  },
  {
    key: "unitTests",
    label: "Has unit tests",
    detail: "Add a __tests__/ folder with Vitest coverage for the component.",
    isMet: (c) => c.hasUnitTests,
  },
  {
    key: "mdxDocs",
    label: "Has MDX documentation",
    detail: "Add an .mdx docs page alongside the stories.",
    isMet: (c) => c.hasMdxDocs,
  },
  {
    key: "docQuality",
    label: `Docs reach "${MIN_DOC_QUALITY}" quality`,
    detail: "To count as documented, the MDX docs must include:",
    criteria: [
      "At least two of these sections: Anatomy, Guidelines, Accessibility",
      "A props table (a Markdown table or a <Controls> block)",
      "Real written content, not an empty autodocs stub",
    ],
    isMet: (c) => docQualityAtLeast(c.docQuality, MIN_DOC_QUALITY),
  },
]

/**
 * Evaluate a single raw component entry against the stable checklist. Pure —
 * exported so it can be unit-tested and reused over arbitrary datasets.
 */
export function evaluateComponentStatus(
  entry: ComponentEntry
): ComponentStatus {
  const requirements: RequirementResult[] = STABLE_REQUIREMENTS.map((req) => ({
    key: req.key,
    label: req.label,
    met: req.isMet(entry),
    detail: req.detail,
    criteria: req.criteria,
  }))

  const missing = requirements.filter((r) => !r.met).map((r) => r.label)
  const meetsBar = missing.length === 0
  const taggedStable = entry.apiStatus === "stable"

  let discrepancy: ComponentStatus["discrepancy"] = null
  if (taggedStable && !meetsBar) discrepancy = "tagged-but-below-bar"
  else if (!taggedStable && meetsBar) discrepancy = "meets-bar-not-tagged"

  return {
    ...entry,
    requirements,
    missing,
    meetsBar,
    taggedStable,
    stableReady: meetsBar,
    discrepancy,
    label: STATUS_LABELS[entry.apiStatus],
    summary: summarize(entry.apiStatus, meetsBar, taggedStable, discrepancy),
    showChecklist: checklistApplies(entry.apiStatus),
  }
}

function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/^f0/, "") // Button vs F0Button
    .replace(/[^a-z0-9]/g, "") // Avatars/Avatar → avatarsavatar
}

/** Last path segment of a slash-delimited story name (e.g. "Avatars/Avatar" → "Avatar"). */
function leaf(name: string): string {
  const parts = name.split("/")
  return parts[parts.length - 1] ?? name
}

/**
 * Look up a component's status and stable checklist by name.
 *
 * Name matching is forgiving: case-insensitive, an optional `F0` prefix, and
 * punctuation are all ignored, and grouped names ("Avatars/Avatar") match on
 * their leaf ("Avatar"). When several components share a name across zones,
 * the one in the "components" zone wins; otherwise the first match is returned.
 *
 * @param components dataset to search; defaults to the build-time data. Pass an
 *   explicit array to query a custom set (used by tests).
 * @returns the component status, or `null` if no component matches.
 */
export function getComponentStatus(
  name: string,
  components: ComponentEntry[] = componentStatusData.components
): ComponentStatus | null {
  if (!name) return null
  const target = normalize(name)
  const targetLeaf = normalize(leaf(name))

  // When several entries match, prefer the one in the "components" zone.
  const pick = (pool: ComponentEntry[]) =>
    pool.find((c) => c.zone === "components") ?? pool[0]

  // Tier 1 — exact full-name match. Handles fully-qualified Storybook titles
  // like "Data Collection/Visualizations/Card" resolving to that exact entry.
  let pool = components.filter((c) => normalize(c.name) === target)

  // Tier 2 — leaf-level match on either side. Handles "F0Card", a bare "Card",
  // and prefixed titles like "Components/F0Card" all resolving to "Card".
  if (pool.length === 0) {
    pool = components.filter(
      (c) =>
        normalize(leaf(c.name)) === target ||
        normalize(c.name) === targetLeaf ||
        normalize(leaf(c.name)) === targetLeaf
    )
  }

  // Tier 3 — suffix fallback (e.g. "AiInsightCard" from "InsightCard").
  if (pool.length === 0) {
    pool = components.filter((c) => normalize(c.name).endsWith(target))
  }

  return pool.length > 0 ? evaluateComponentStatus(pick(pool)) : null
}

/**
 * Evaluate every tracked component.
 *
 * @param components dataset to evaluate; defaults to the build-time data.
 */
export function getAllComponentStatuses(
  components: ComponentEntry[] = componentStatusData.components
): ComponentStatus[] {
  return components.map(evaluateComponentStatus)
}

/** ISO timestamp of when the underlying status data was generated. */
export function getStatusGeneratedAt(): string {
  return componentStatusData.generatedAt
}
