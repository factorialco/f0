#!/usr/bin/env tsx
/**
 * check-stable-dod.ts
 *
 * Gate: every component tagged `stable` must actually meet the mechanically
 * checkable Definition of Done (stories, unit tests, play function, MDX docs at
 * the "good" tier, and axe enforced). See docs/definition-of-done.mdx.
 *
 * Today most stable-tagged components do not clear that bar yet, so this check
 * is a **ratchet** rather than a hard wall — the same idiom as
 * `.storybook/a11y-skip-allowlist.json`:
 *
 *   - `stable-dod-debt.json` lists the stable-tagged components known to be
 *     below the bar. The list may only ever shrink.
 *   - A stable-tagged component below the bar that is NOT on the list fails the
 *     check (a regression, or a newly-tagged component that isn't ready).
 *   - A listed component that now clears the bar also fails the check, with the
 *     fix being to delete it from the list — that is what locks the win in.
 *
 * The pass/fail verdict comes from `meetsStableBar` in
 * scripts/component-status-build.mjs, so this script cannot drift from the
 * policy it enforces; the per-requirement lines below are diagnostics only.
 *
 * Usage:
 *   tsx .scripts/check-stable-dod.ts            # gate (exit 1 on any mismatch)
 *   tsx .scripts/check-stable-dod.ts --verbose  # + per-requirement breakdown
 *   tsx .scripts/check-stable-dod.ts --update   # rewrite the debt list
 */
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import consola from "consola"

import {
  computeComponentStatusData,
  meetsStableBar,
} from "../scripts/component-status-build.mjs"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const DEBT_FILE = resolve(PKG_DIR, ".scripts/stable-dod-debt.json")

const DOC_TIER_ORDER = ["none", "stub", "acceptable", "good", "gold"]

interface StatusEntry {
  name: string
  zone: string
  apiStatus: string
  hasStories: boolean
  hasUnitTests: boolean
  hasPlayFunction: boolean
  hasSnapshot: boolean
  hasMdxDocs: boolean
  docQuality: string
  a11yTier: string
  storyFile: string
}

interface DebtFile {
  /** Why this file exists and the rule that governs it. */
  note: string
  /** Component names (as reported by the status scan) still below the bar. */
  components: string[]
}

/**
 * Diagnostics only — the verdict is `meetsStableBar`. Kept in the same order as
 * STABLE_REQUIREMENTS in src/component-status/component-status.ts.
 */
function unmetRequirements(c: StatusEntry): string[] {
  const missing: string[] = []
  if (!c.hasStories) missing.push("stories")
  if (!c.hasUnitTests) missing.push("unit tests")
  if (!c.hasPlayFunction) missing.push("play function")
  if (!c.hasSnapshot) missing.push("snapshot story")
  if (!c.hasMdxDocs) missing.push("MDX docs")
  if (DOC_TIER_ORDER.indexOf(c.docQuality) < DOC_TIER_ORDER.indexOf("good")) {
    missing.push(`docs "good" tier (is "${c.docQuality}")`)
  }
  if (c.a11yTier !== "enforced") {
    missing.push(`axe enforced (is "${c.a11yTier}")`)
  }
  return missing
}

function readDebt(): DebtFile {
  return JSON.parse(readFileSync(DEBT_FILE, "utf-8")) as DebtFile
}

export interface CheckResult {
  /** Below the bar and not yet excused by the debt list. */
  unlisted: StatusEntry[]
  /** On the debt list but now clearing the bar — delete these entries. */
  graduated: string[]
  /** On the debt list but no longer a stable-tagged component at all. */
  stale: string[]
  /** Still legitimately in debt. */
  remaining: string[]
  /** Stable-tagged components that clear the bar. */
  passing: StatusEntry[]
}

export function check(
  components: StatusEntry[],
  debt: string[] = readDebt().components
): CheckResult {
  const stableTagged = components.filter((c) => c.apiStatus === "stable")
  const debtSet = new Set(debt)
  const belowBar = stableTagged.filter((c) => !meetsStableBar(c))
  const passing = stableTagged.filter((c) => meetsStableBar(c))
  const stableNames = new Set(stableTagged.map((c) => c.name))

  return {
    unlisted: belowBar.filter((c) => !debtSet.has(c.name)),
    graduated: passing.filter((c) => debtSet.has(c.name)).map((c) => c.name),
    stale: debt.filter((n) => !stableNames.has(n)),
    remaining: belowBar.filter((c) => debtSet.has(c.name)).map((c) => c.name),
    passing,
  }
}

function main(): void {
  const args = process.argv.slice(2)
  const verbose = args.includes("--verbose")
  const update = args.includes("--update")

  const data = computeComponentStatusData()
  const components = data.components as StatusEntry[]

  if (update) {
    const belowBar = components
      .filter((c) => c.apiStatus === "stable" && !meetsStableBar(c))
      .map((c) => c.name)
      .sort()
    const payload: DebtFile = {
      note:
        "Stable-tagged components that do not yet meet the mechanical Definition of Done " +
        "(see docs/definition-of-done.mdx). Enforced by .scripts/check-stable-dod.ts. " +
        "This list may only shrink: remove a component once it clears the bar, never add one.",
      components: belowBar,
    }
    writeFileSync(DEBT_FILE, `${JSON.stringify(payload, null, 2)}\n`)
    consola.success(
      `Wrote ${belowBar.length} component(s) to .scripts/stable-dod-debt.json`
    )
    process.exit(0)
  }

  const result = check(components)

  consola.log(
    `Stable-tagged: ${result.passing.length + result.remaining.length + result.unlisted.length} · ` +
      `meeting the bar: ${result.passing.length} · in debt: ${result.remaining.length}`
  )

  if (verbose) {
    consola.log("")
    for (const c of components.filter((x) => x.apiStatus === "stable")) {
      const missing = unmetRequirements(c)
      consola.log(
        missing.length === 0
          ? `  ✓ ${c.name}`
          : `  ✗ ${c.name} — missing: ${missing.join(", ")}`
      )
    }
  }

  let failed = false

  if (result.passing.length > 0) {
    consola.log("")
    consola.success(
      `Truly stable (tagged + meets the full DoD): ${result.passing
        .map((c) => c.name)
        .join(", ")}`
    )
  }

  if (result.unlisted.length > 0) {
    failed = true
    consola.log("")
    consola.error(
      `${result.unlisted.length} component(s) are tagged "stable" but below the DoD bar ` +
        `and not on the debt list:`
    )
    for (const c of result.unlisted) {
      consola.log(`    ${c.name} — missing: ${unmetRequirements(c).join(", ")}`)
      consola.log(`      ${c.storyFile}`)
    }
    consola.log(
      '  Fix the gaps, or (only for pre-existing debt) run with "--update".'
    )
  }

  if (result.graduated.length > 0) {
    failed = true
    consola.log("")
    consola.error(
      `${result.graduated.length} component(s) now meet the DoD but are still listed as debt: ` +
        `${result.graduated.join(", ")}`
    )
    consola.log(
      "  Remove them from .scripts/stable-dod-debt.json so the win is locked in " +
        '(or run "--update").'
    )
  }

  if (result.stale.length > 0) {
    failed = true
    consola.log("")
    consola.error(
      `${result.stale.length} debt entr(y/ies) no longer match a stable-tagged component: ` +
        `${result.stale.join(", ")}`
    )
    consola.log('  Remove the stale entries (or run "--update").')
  }

  if (failed) {
    process.exit(1)
  }

  consola.log("")
  consola.success("Stable DoD ratchet holds.")
  process.exit(0)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (process.argv[1] && /check-stable-dod\.(ts|js)$/.test(process.argv[1])) {
  main()
}
