#!/usr/bin/env tsx
/**
 * check-new-component-dod.ts
 *
 * Gate: every component ADDED by a PR must meet the full mechanically-checkable
 * Definition of Done from day one — stories, unit tests, a play function, a
 * snapshot story, MDX docs at the "good" tier, and axe enforced (the same bar
 * as STABLE_REQUIREMENTS in src/component-status/component-status.ts).
 *
 * Unlike the stable ratchet (check-stable-dod.ts), which tolerates
 * pre-existing debt, new components cannot add debt: there is no debt list
 * here. A component counts as NEW when either signal fires:
 *
 *   1. Its story file is ADDED by the PR (renames/moves are not additions, so
 *      folder moves and promotions don't trip this gate). The matching
 *      component-status entry must meet the full DoD.
 *   2. A new F0-prefixed component export is added to a public export barrel
 *      (src/f0.ts, src/experimental.ts, src/ai.ts, or any nested exports.ts)
 *      that matches NO tracked component-status entry — i.e. the component is
 *      shipped in the public API without even having stories. That fails
 *      outright. Added exports that match a pre-existing entry are treated as
 *      moves/re-exports and ignored (the stable ratchet covers those).
 *
 * CI applies the `new-component` label to matching PRs (pr-package-labels.yaml)
 * for visibility; this check re-detects from the git diff so it cannot be
 * raced or bypassed by label timing. Escape hatch for genuinely exceptional
 * cases: the `skip-new-component-dod` label skips the CI job.
 *
 * Usage:
 *   tsx .scripts/check-new-component-dod.ts [--base origin/main]
 *   tsx .scripts/check-new-component-dod.ts --added-files "a,b"   # tests/debug
 */
import { execSync } from "node:child_process"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import consola from "consola"

import {
  computeComponentStatusData,
  leafName,
  meetsStableBar,
  normalizeComponentName,
} from "../scripts/component-status-build.mjs"
import { type StatusEntry, unmetRequirements } from "./check-stable-dod"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")

/** Public entry files and export barrels that define the shipped API. */
const BARREL_PATHSPECS = [
  "packages/react/src/f0.ts",
  "packages/react/src/experimental.ts",
  "packages/react/src/ai.ts",
  // Git pathspec: `*` also crosses directory boundaries, so this matches
  // every nested zone barrel (components/exports.ts, experimental/Forms/…).
  "packages/react/src/*exports.ts",
]

/**
 * Normalize a story-file path to the src-relative form used by the status
 * dataset ("components/F0X/…"), accepting repo-relative ("packages/react/src/…")
 * and package-relative ("src/…") inputs alike.
 */
export function srcRelative(path: string): string {
  return path.replace(/^packages\/react\//, "").replace(/^src\//, "")
}

/**
 * Component names newly exported from the public barrels, parsed from the
 * unified diff of those files. Only F0-prefixed names count as components —
 * the repo's naming convention — so type/util/hook exports don't false-positive.
 *
 *   +export * from "./F0MeetingCard"          → F0MeetingCard (path leaf)
 *   +export { F0Card, F0Thing as F0Alias }…   → F0Card, F0Alias (named exports)
 *   +export type { F0CardProps } from …       → ignored (type-only)
 */
export function addedExportCandidates(diffText: string): string[] {
  const names = new Set<string>()
  for (const line of diffText.split("\n")) {
    if (!line.startsWith("+") || line.startsWith("+++")) continue
    const added = line.slice(1).trim()

    const star = added.match(/^export\s+\*\s+from\s+["']([^"']+)["']/)
    if (star) {
      const leaf = star[1].split("/").filter(Boolean).pop() ?? ""
      if (/^F0[A-Z]/.test(leaf)) names.add(leaf)
      continue
    }

    const named = added.match(/^export\s+\{([^}]*)\}\s+from\s+["'][^"']+["']/)
    if (named) {
      for (const piece of named[1].split(",")) {
        const spec = piece.trim()
        if (!spec || spec.startsWith("type ")) continue
        // `A as B` exports B; a bare `A` exports A.
        const name = (spec.split(/\s+as\s+/).pop() ?? "").trim()
        if (/^F0[A-Z]/.test(name)) names.add(name)
      }
    }
  }
  return Array.from(names).sort()
}

export interface NewComponentSignals {
  /** Files added by the PR (repo-relative); story files are matched to entries. */
  addedFiles: string[]
  /** F0-prefixed names newly exported from the public barrels. */
  addedExports: string[]
}

export interface NewComponentCheckResult {
  /** Tracked components whose story file was added by the PR. */
  newComponents: StatusEntry[]
  /** New components below the full DoD bar, with what's missing. */
  failing: Array<{ entry: StatusEntry; missing: string[] }>
  /** Newly exported component names with NO tracked entry — public API
   * additions that don't even have stories. */
  untrackedExports: string[]
}

/**
 * Evaluate both new-component signals against the status dataset. Pure —
 * exported for unit tests.
 */
export function checkNewComponents(
  components: StatusEntry[],
  signals: NewComponentSignals
): NewComponentCheckResult {
  const addedStories = new Set(
    signals.addedFiles
      .filter((f) => f.endsWith(".stories.tsx"))
      .map(srcRelative)
  )
  const newComponents = components.filter((c) =>
    addedStories.has(srcRelative(c.storyFile))
  )
  const failing = newComponents
    .filter((c) => !meetsStableBar(c))
    .map((entry) => ({ entry, missing: unmetRequirements(entry) }))

  const trackedNames = new Set(
    components.map((c) => normalizeComponentName(leafName(c.name)))
  )
  const untrackedExports = signals.addedExports.filter(
    (name) => !trackedNames.has(normalizeComponentName(name))
  )

  return { newComponents, failing, untrackedExports }
}

function parseArgs(): { base: string; addedFiles?: string[] } {
  const args = process.argv.slice(2)
  const at = (flag: string) => {
    const i = args.indexOf(flag)
    return i !== -1 && args[i + 1] ? args[i + 1] : undefined
  }
  const af = at("--added-files")
  return {
    base: at("--base") ?? process.env.BASE_REF ?? "origin/main",
    addedFiles: af
      ? af
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined,
  }
}

function ensureBase(base: string): void {
  try {
    execSync(`git rev-parse --verify ${base}^{commit}`, {
      cwd: PKG_DIR,
      stdio: "pipe",
    })
  } catch {
    const remoteBranch = base.replace(/^origin\//, "")
    execSync(`git fetch origin ${remoteBranch}`, {
      cwd: PKG_DIR,
      stdio: "pipe",
    })
  }
}

/** Both new-component signals, read from git (vs the base ref). */
export function gatherSignals(base: string): NewComponentSignals {
  ensureBase(base)
  const addedFiles = execSync(
    `git diff --diff-filter=A -M --name-only ${base}...HEAD -- packages/react/src`,
    { cwd: PKG_DIR, encoding: "utf-8" }
  )
    .split("\n")
    .filter(Boolean)
  const barrelDiff = execSync(
    `git diff -M ${base}...HEAD -- ${BARREL_PATHSPECS.map((p) => `'${p}'`).join(" ")}`,
    { cwd: PKG_DIR, encoding: "utf-8" }
  )
  return { addedFiles, addedExports: addedExportCandidates(barrelDiff) }
}

export function reportResult(result: NewComponentCheckResult): boolean {
  if (
    result.newComponents.length === 0 &&
    result.untrackedExports.length === 0
  ) {
    consola.success("No new components in this PR — nothing to check.")
    return true
  }

  if (result.newComponents.length > 0) {
    consola.info(
      `New component(s): ${result.newComponents.map((c) => c.name).join(", ")}`
    )
  }

  let ok = true

  if (result.failing.length > 0) {
    ok = false
    consola.error(
      `${result.failing.length} new component(s) do not meet the full Definition of Done. ` +
        "New components must ship complete — there is no debt list for new work:"
    )
    for (const { entry, missing } of result.failing) {
      consola.log(`    ${entry.name} — missing: ${missing.join(", ")}`)
      consola.log(`      ${entry.storyFile}`)
    }
  }

  if (result.untrackedExports.length > 0) {
    ok = false
    consola.error(
      "Newly exported component(s) with no stories at all — they are not even " +
        "tracked by the component status scan, so the full Definition of Done " +
        `is unmet: ${result.untrackedExports.join(", ")}`
    )
  }

  if (!ok) {
    consola.log(
      "  See docs/definition-of-done.mdx. For genuinely exceptional cases, " +
        "add the `skip-new-component-dod` label to the PR."
    )
    return false
  }

  consola.success(
    "Every new component meets the full Definition of Done. Nice work!"
  )
  return true
}

function main(): void {
  const { base, addedFiles } = parseArgs()
  const signals = addedFiles
    ? { addedFiles, addedExports: [] }
    : gatherSignals(base)

  const components = computeComponentStatusData().components as StatusEntry[]
  const result = checkNewComponents(components, signals)
  process.exit(reportResult(result) ? 0 : 1)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (
  process.argv[1] &&
  /check-new-component-dod\.(ts|js)$/.test(process.argv[1])
) {
  main()
}
