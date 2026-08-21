import { ComponentRecord, Maturity } from "./types"
import { decideMaturity } from "./maturityDecision"

/**
 * Each criterion cites its source-of-truth (skill file or doc).
 * The dashboard renders the source as a clickable badge so any rule can be
 * traced back to the f0 skills and the lifecycle DoD.
 */
export type Severity = "blocking" | "suggestion" | "info"

export interface Source {
  /** Short label shown as a chip. */
  label: string
  /** Path inside the repo (relative to REPO_ROOT). */
  path: string
  /** Optional anchor / section. */
  section?: string
}

export interface Criterion {
  id: string
  label: string
  /** "must" gates promotion; "should" is recommended. */
  weight: "must" | "should"
  /** Which target maturities this criterion gates. */
  scope: Maturity[]
  /** Skill/doc this comes from. */
  source: Source
  /** Result. */
  passed: boolean
  /** Why we say so. */
  detail?: string
  /** Severity if it fails. */
  severityIfFailed: Severity
}

const SRC = {
  dod: {
    label: "DoD",
    path: "packages/react/docs/definition-of-done.mdx",
  },
  maturity: {
    label: "Maturity model",
    path: "packages/react/docs/components-maturity.mdx",
  },
  promotion: {
    label: "f0-component-promotion",
    path: "packages/react/.skills/f0-component-promotion/SKILL.md",
  },
  contribution: {
    label: "f0-component-contribution",
    path: "packages/react/.skills/f0-component-contribution/SKILL.md",
  },
  codeReview: {
    label: "f0-code-review",
    path: "packages/react/.skills/f0-code-review/SKILL.md",
  },
  stories: {
    label: "f0-storybook-stories",
    path: "packages/react/.skills/f0-storybook-stories/SKILL.md",
  },
  testing: {
    label: "f0-storybook-testing",
    path: "packages/react/.skills/f0-storybook-testing/SKILL.md",
  },
  unit: {
    label: "f0-unit-testing",
    path: "packages/react/.skills/f0-unit-testing/SKILL.md",
  },
  patterns: {
    label: "f0-component-patterns",
    path: "packages/react/.skills/f0-component-patterns/SKILL.md",
  },
  versioning: {
    label: "Release & Versioning",
    path: "packages/react/docs/development/release-and-versioning.mdx",
  },
  agents: {
    label: "AGENTS.md",
    path: "packages/react/AGENTS.md",
  },
} as const

/**
 * Evaluate every statically-detectable criterion from the F0 skills + DoD.
 * Order matters for readability: lifecycle gates first, then static
 * code-review BLOCKERS, then story conventions, then deprecation hygiene.
 */
export function getCriteria(c: ComponentRecord): Criterion[] {
  const isDeprecated = c.declaredMaturity === "deprecated"
  const isInternal = c.folder === "ui" || c.declaredMaturity === "internal"

  const list: Criterion[] = []

  // ─── Lifecycle gates (DoD) ──────────────────────────────────────────────
  list.push({
    id: "story_present",
    label: "Has a Storybook story (.stories.tsx)",
    weight: "must",
    scope: ["experimental", "stable", "deprecated"],
    source: { ...SRC.contribution, section: "Phase 3 Build > 3.4" },
    passed: Boolean(c.storyPath),
    severityIfFailed: "blocking",
  })

  list.push({
    id: "tagged",
    label: "Has a maturity tag (stable | experimental | deprecated | internal)",
    weight: "must",
    scope: ["experimental", "stable", "deprecated"],
    source: { ...SRC.stories, section: "Tags" },
    passed: c.declaredMaturity !== "unknown",
    detail: `Story tags: ${c.storyTags.join(", ") || "(none)"}`,
    severityIfFailed: "blocking",
  })

  list.push({
    id: "tag_matches_folder",
    label: "Maturity tag matches its folder",
    weight: "must",
    scope: ["experimental", "stable", "deprecated"],
    source: { ...SRC.maturity, section: "Where it lives" },
    passed:
      c.declaredMaturity === c.inferredMaturity ||
      // sds folder allows experimental tag (per maturity.mdx + promotion.skill)
      (c.inferredMaturity === "sds" && c.declaredMaturity === "experimental") ||
      // ui folder = internal, declared "internal" tag is consistent
      (c.inferredMaturity === "internal" && c.declaredMaturity === "internal"),
    detail: `folder=${c.folder} → inferred=${c.inferredMaturity}; declared=${c.declaredMaturity}`,
    severityIfFailed: "blocking",
  })

  // ─── Stable promotion DoD (must-have for stable) ────────────────────────
  list.push({
    id: "stable_no_experimental_wrapper",
    label: "No experimentalComponent() wrapper",
    weight: "must",
    scope: ["stable"],
    source: { ...SRC.promotion, section: "Step 5.2 — Migration" },
    passed: !c.hasExperimentalWrapper,
    detail: c.hasExperimentalWrapper
      ? "experimentalComponent() must be removed when promoted to stable"
      : undefined,
    severityIfFailed: "blocking",
  })

  list.push({
    id: "stable_has_mdx",
    label: "Has MDX docs (Good tier minimum for stable)",
    weight: "must",
    scope: ["stable"],
    source: { ...SRC.promotion, section: "Step 5.4 — MDX docs" },
    passed: Boolean(c.mdxPath),
    detail: c.mdxPath
      ? `Found: ${c.mdxPath}`
      : "Stable requires Good-tier MDX (DoD Phase 5)",
    severityIfFailed: "blocking",
  })

  list.push({
    id: "stable_opted_out_autodocs",
    label: "Story uses '!autodocs' tag (since manual MDX exists)",
    weight: "should",
    scope: ["stable"],
    source: { ...SRC.stories, section: "Note about !autodocs" },
    passed:
      c.mdxPath ? c.story.optedOutOfAutodocs : true,
    detail:
      c.mdxPath && !c.story.optedOutOfAutodocs
        ? "MDX exists but story does not include '!autodocs' — duplicate Docs page in sidebar"
        : undefined,
    severityIfFailed: "suggestion",
  })

  list.push({
    id: "has_unit_tests",
    label: "Has unit tests (.test.tsx)",
    weight: "must",
    scope: ["experimental", "stable"],
    source: { ...SRC.dod, section: "Phase 3 Build" },
    passed: c.testPaths.length > 0,
    detail: c.testPaths.length
      ? `${c.testPaths.length} file(s)`
      : "DoD Phase 3 requires Vitest unit tests covering the public API",
    severityIfFailed: "blocking",
  })

  list.push({
    id: "has_snapshot_story",
    label: "Has a 'Snapshot' story for Chromatic",
    weight: "must",
    scope: ["experimental", "stable"],
    source: { ...SRC.codeReview, section: "Blocking > Storybook" },
    passed: c.story.hasSnapshotStory && c.story.usesWithSnapshot,
    detail:
      c.story.hasSnapshotStory && c.story.usesWithSnapshot
        ? undefined
        : `hasSnapshotStory=${c.story.hasSnapshotStory}, usesWithSnapshot=${c.story.usesWithSnapshot}`,
    severityIfFailed: "blocking",
  })

  // ─── Experimental gates ─────────────────────────────────────────────────
  list.push({
    id: "experimental_wrapper",
    label: "Wrapped in experimentalComponent()",
    weight: "must",
    scope: ["experimental"],
    source: { ...SRC.contribution, section: "Phase 3 Build > 3.2" },
    passed: c.hasExperimentalWrapper,
    detail: c.hasExperimentalWrapper
      ? undefined
      : "Required so consumers see the runtime warning (f0-code-review BLOCKING)",
    severityIfFailed: "blocking",
  })

  // ─── Code review BLOCKING items (statically detectable) ─────────────────
  // From f0-code-review § Blocking Issues
  if (!isInternal) {
    list.push({
      id: "no_any",
      label: "No 'any' or 'as any' in implementation",
      weight: "must",
      scope: ["experimental", "stable", "deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > TypeScript" },
      passed: !c.impl.usesAny,
      detail: c.impl.usesAny
        ? `Found in ${c.implPath ?? "impl"}`
        : undefined,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "no_star_react_import",
      label: "No 'import * as React from \"react\"'",
      weight: "must",
      scope: ["experimental", "stable", "deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > TypeScript" },
      passed: !c.impl.usesStarReact,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "no_default_export",
      label: "No default export on component",
      weight: "must",
      scope: ["experimental", "stable", "deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > TypeScript" },
      passed: !c.impl.hasDefaultExport && !c.indexHasDefaultExport,
      detail:
        c.impl.hasDefaultExport || c.indexHasDefaultExport
          ? "Default exports are not allowed (named exports only)"
          : undefined,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "f0_prefix",
      label: "Component name starts with 'F0'",
      weight: "must",
      scope: ["experimental", "stable"],
      source: { ...SRC.codeReview, section: "Blocking > Component Structure" },
      passed: c.name.startsWith("F0"),
      detail: c.name.startsWith("F0")
        ? undefined
        : `Name "${c.name}" does not start with F0`,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "forwardref_displayname",
      label: "If forwardRef is used, displayName is set",
      weight: "must",
      scope: ["experimental", "stable", "deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > Component Structure" },
      passed: c.impl.usesForwardRef ? c.impl.setsDisplayName : true,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "no_direct_radix_import",
      label: "No direct @radix-ui/* import (use @/ui/ wrapper)",
      weight: "must",
      scope: ["experimental", "stable"],
      source: { ...SRC.codeReview, section: "Blocking > Component Structure" },
      // Allow direct Radix imports inside src/ui/ — that's where wrappers live
      passed: c.folder === "ui" ? true : !c.impl.importsRadixDirectly,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "no_dangerously_set_inner_html",
      label: "No dangerouslySetInnerHTML without justification",
      weight: "should",
      scope: ["experimental", "stable", "deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > Security" },
      passed: !c.impl.usesDangerouslySetInnerHTML,
      severityIfFailed: "suggestion",
    })
  }

  // ─── Story conventions (from f0-storybook-stories) ──────────────────────
  if (!isInternal) {
    list.push({
      id: "satisfies_meta",
      label: "Story uses 'satisfies Meta<typeof X>' (not 'as Meta')",
      weight: "must",
      scope: ["experimental", "stable"],
      source: { ...SRC.stories, section: "Meta" },
      passed: c.story.usesSatisfiesMeta && !c.story.usesAsMeta,
      detail:
        c.story.usesAsMeta
          ? "Uses 'as Meta' — must be 'satisfies Meta<typeof Component>'"
          : !c.story.usesSatisfiesMeta
            ? "Missing 'satisfies Meta<typeof Component>'"
            : undefined,
      severityIfFailed: "blocking",
    })
  }

  // ─── Deprecation hygiene (from f0-code-review + versioning policy) ──────
  if (isDeprecated || c.jsdoc.deprecated) {
    list.push({
      id: "deprecation_jsdoc_trio",
      label: "@deprecated + @removeIn + @migration all present",
      weight: "must",
      scope: ["deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > Deprecation" },
      passed: Boolean(
        c.jsdoc.deprecated && c.jsdoc.removeIn && c.jsdoc.migration
      ),
      detail: `@deprecated=${Boolean(c.jsdoc.deprecated)}, @removeIn=${Boolean(c.jsdoc.removeIn)}, @migration=${Boolean(c.jsdoc.migration)}`,
      severityIfFailed: "blocking",
    })

    list.push({
      id: "deprecation_tag_set",
      label: "Story tag is 'deprecated'",
      weight: "must",
      scope: ["deprecated"],
      source: { ...SRC.codeReview, section: "Blocking > Deprecation" },
      passed: isDeprecated,
      severityIfFailed: "blocking",
    })
  }

  // Filter to only criteria that apply to this component's declared maturity
  // (or to all if unknown — show everything to make the gap obvious)
  const target: Maturity =
    c.declaredMaturity !== "unknown" ? c.declaredMaturity : c.inferredMaturity
  return list.filter((cr) => cr.scope.includes(target as Maturity))
}

/**
 * Same evaluation as `getCriteria`, but scoped to a specific target maturity
 * (e.g. "stable") regardless of the component's current declared maturity.
 * Used to answer "what is missing to promote this component to <target>?".
 */
export function getCriteriaForTarget(
  c: ComponentRecord,
  target: Maturity
): Criterion[] {
  // Build the full list using the same logic as getCriteria but skip the
  // final filter. To avoid duplicating the body, temporarily clone the record
  // with the desired declaredMaturity so the gated branches behave consistently.
  const cloned: ComponentRecord = { ...c, declaredMaturity: target }
  // Re-run getCriteria against the cloned record, then re-filter to the target.
  // (getCriteria's internal `target` will resolve to `target`.)
  return getCriteria(cloned)
}

/**
 * Returns the blocking criteria that fail when evaluating against `target`.
 * If the component already meets `target`, returns an empty array.
 */
export function getGapToTarget(
  c: ComponentRecord,
  target: Maturity
): Criterion[] {
  return getCriteriaForTarget(c, target).filter(
    (cr) => !cr.passed && cr.severityIfFailed === "blocking"
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Issue detection — derived from the criteria above so the two stay in sync.
// Each issue is "criterion failed at blocking severity for this maturity".
// ─────────────────────────────────────────────────────────────────────────────
export function getIssues(c: ComponentRecord): {
  id: string
  label: string
  source: Source
  detail?: string
}[] {
  return getCriteria(c)
    .filter((cr) => !cr.passed && cr.severityIfFailed === "blocking")
    .map((cr) => ({
      id: cr.id,
      label: cr.label,
      source: cr.source,
      detail: cr.detail,
    }))
}

// ─────────────────────────────────────────────────────────────────────────────
// Suggestion engine — heuristic only. Final triage is human.
// ─────────────────────────────────────────────────────────────────────────────
export interface Suggestion {
  maturity: Maturity
  reason: string
  confidence: "high" | "medium" | "low"
}

export function suggestMaturity(c: ComponentRecord): Suggestion {
  // Delegated to single source of truth — same rules as the Ola 1 patch generator.
  const decision = decideMaturity(c)
  return {
    maturity: decision.target ?? c.declaredMaturity,
    reason: decision.reason,
    confidence: decision.confidence === "high" ? "high" : "low",
  }
}
