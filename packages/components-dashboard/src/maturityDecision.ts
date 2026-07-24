// Single source of truth for the maturity decision.
// Used by: criteria.ts (suggestion + checklist), FileActions.tsx (snippet), Ola1View.tsx (patch).
// MUST be kept in sync with scripts/plan-ola1.mjs (which mirrors this same logic in plain JS).
//
// Source: packages/react/docs/definition-of-done.mdx Phase 5
//       + .skills/f0-component-promotion

import type { ComponentRecord, Maturity } from "./types"

const STABLE_FOLDERS = new Set([
  "components",
  "patterns",
  "kits",
  "layouts",
  "hooks",
])

/**
 * Returns true if a component meets every Phase-5 DoD criterion required to
 * carry the `stable` tag honestly.
 *
 * MDX must not only EXIST — it must explain usage. See parseMdx in
 * scripts/scan.mjs for the content bar (Canvas + heading + 3 prose paragraphs
 * + 40 lines).
 */
export function meetsDoD(c: ComponentRecord): boolean {
  return (
    !!c.mdxPath &&
    !!c.mdx?.meetsContentBar &&
    c.testPaths.length > 0 &&
    c.story.hasSnapshotStory &&
    c.story.usesWithSnapshot &&
    c.story.usesSatisfiesMeta &&
    !c.story.usesAsMeta &&
    !c.hasExperimentalWrapper &&
    c.name.startsWith("F0")
  )
}

/**
 * The list of every DoD gate that's currently failing.
 * Useful for explaining WHY a component cannot be tagged stable.
 */
export function dodGaps(c: ComponentRecord): string[] {
  const gaps: string[] = []
  if (!c.mdxPath) gaps.push("missing MDX docs")
  else if (!c.mdx?.meetsContentBar)
    gaps.push("MDX too thin — needs usage docs (Canvas + headings + prose)")
  if (c.testPaths.length === 0) gaps.push("no unit tests")
  if (!c.story.hasSnapshotStory) gaps.push("no Snapshot story")
  if (!c.story.usesWithSnapshot) gaps.push("no withSnapshot()")
  if (!c.story.usesSatisfiesMeta) gaps.push("not using `satisfies Meta`")
  if (c.story.usesAsMeta) gaps.push("uses deprecated `as Meta`")
  if (c.hasExperimentalWrapper)
    gaps.push("still wrapped in experimentalComponent()")
  if (!c.name.startsWith("F0")) gaps.push("name does not start with `F0`")
  return gaps
}

export interface MaturityDecision {
  /** What the tag should become, or null if no change is needed. */
  target: Maturity | null
  /** What the tag is today. */
  current: Maturity
  /** Plain-language explanation. */
  reason: string
  /**
   * The confidence we have in this suggestion.
   * - high: clear-cut rule (deprecated folder, DoD met or missing critical pieces)
   * - low: rules apply but human review still recommended
   */
  confidence: "high" | "low"
}

/**
 * Single decision function. Mirrors the rules used by the Ola 1 patch generator.
 * Returns target=null when the component is already correctly tagged.
 */
export function decideMaturity(c: ComponentRecord): MaturityDecision {
  const d = c.declaredMaturity
  const inStable = STABLE_FOLDERS.has(c.folder)
  const inExp = c.folder === "experimental"
  const inDep = c.folder === "deprecated"
  const isUi = c.folder === "ui"
  const isSds = c.folder === "sds"
  const dod = meetsDoD(c)
  const gaps = dodGaps(c)

  // Deprecated folder: tag must match.
  if (inDep) {
    if (d === "deprecated") {
      return { target: null, current: d, reason: "Already correctly tagged deprecated.", confidence: "high" }
    }
    return {
      target: "deprecated",
      current: d,
      reason: "Lives in deprecated/ folder.",
      confidence: "high",
    }
  }

  // src/ui/ are internal primitives, not lifecycle-managed.
  if (isUi) {
    return {
      target: null,
      current: d,
      reason: "Lives in src/ui/ — internal primitive wrapper, not lifecycle-managed.",
      confidence: "high",
    }
  }

  // SDS shouldn't be re-tagged by us; declare it as 'sds' if anything.
  if (isSds) {
    return {
      target: null,
      current: d,
      reason: "Lives in src/sds/ — Semantic Design System primitives.",
      confidence: "high",
    }
  }

  // Stable folder: gate everything on DoD.
  if (inStable) {
    if (dod) {
      if (d === "stable") {
        return { target: null, current: d, reason: "Already correctly tagged stable and meets DoD.", confidence: "high" }
      }
      return {
        target: "stable",
        current: d,
        reason: `In stable folder AND meets DoD — eligible for promotion.`,
        confidence: "high",
      }
    }
    // Does NOT meet DoD
    if (d === "stable") {
      return {
        target: "experimental",
        current: d,
        reason: `Tagged stable but does NOT meet DoD: ${gaps.join(", ")}.`,
        confidence: "high",
      }
    }
    if (d === "experimental") {
      return {
        target: null,
        current: d,
        reason: `Correctly tagged experimental — work needed before promotion: ${gaps.join(", ")}.`,
        confidence: "high",
      }
    }
    // unknown
    return {
      target: "experimental",
      current: d,
      reason: `Untagged in stable folder; declare experimental until DoD met (${gaps.join(", ")}).`,
      confidence: "high",
    }
  }

  // Experimental folder
  if (inExp) {
    if (d === "stable") {
      return {
        target: "experimental",
        current: d,
        reason: "Tagged stable but lives in experimental/ folder. Pick a side.",
        confidence: "low",
      }
    }
    if (d === "experimental") {
      return { target: null, current: d, reason: "Correctly tagged experimental.", confidence: "high" }
    }
    // unknown
    return {
      target: "experimental",
      current: d,
      reason: "Untagged in experimental/ folder.",
      confidence: "high",
    }
  }

  return {
    target: null,
    current: d,
    reason: "No applicable rule for this folder.",
    confidence: "low",
  }
}
