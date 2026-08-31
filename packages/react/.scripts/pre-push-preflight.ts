#!/usr/bin/env tsx
/**
 * pre-push-preflight.ts
 *
 * Local (pre-push) version of the CI merge gates, so agents and humans find out
 * BEFORE pushing — wired into lefthook's `pre-push` hook:
 *
 *   1. Bugfix pushes — if any outgoing commit is a `fix:` conventional commit,
 *      the branch must add or modify a unit test (the regression test), and
 *      those tests must pass locally (green). The expensive red half — proving
 *      they FAIL on latest main — runs in CI (check-bugfix-red-green.ts).
 *   2. New components — every component whose story file is added by the
 *      branch must meet the full mechanical Definition of Done
 *      (check-new-component-dod.ts runs the same policy in CI).
 *   3. Untranslated copy — the branch must not add user-visible string literals
 *      that bypass the i18n layer (check-untranslated-copy.ts, same policy in
 *      CI). Its own escape hatch is the inline `i18n-exempt` comment.
 *   4. Inline styles — the branch must not add `style={...}` props or `<style>`
 *      elements; styling comes from Tailwind classes (check-inline-styles.ts,
 *      same policy in CI). Its own escape hatch is the inline `styles-exempt`
 *      comment. `src/ui/` is out of scope.
 *
 * Escape hatches (e.g. pushing WIP to a personal branch):
 *   F0_SKIP_PREFLIGHT=1 git push          # skip every check once
 *   SKIP_RED_GREEN=1 git push             # skip only the bugfix gate
 *   SKIP_NEW_COMPONENT_DOD=1 git push     # skip only the new-component gate
 *   SKIP_UNTRANSLATED_COPY=1 git push     # skip only the i18n gate
 *   SKIP_INLINE_STYLES=1 git push         # skip only the inline-styles gate
 *
 * The CI gates still run on the PR (with the `skip-red-green` /
 * `skip-new-component-dod` labels as their escape hatches), so skipping here
 * only defers the failure, it does not dodge it.
 */
import { spawnSync } from "node:child_process"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import consola from "consola"

import { computeComponentStatusData } from "../scripts/component-status-build.mjs"
import {
  isBugfixTitle,
  overlayFilesFrom,
  redGreenVerdict,
} from "./check-bugfix-red-green"
import { runGate as inlineStylesGate } from "./check-inline-styles"
import {
  checkNewComponents,
  gatherSignals,
  reportResult,
} from "./check-new-component-dod"
import { runGate as untranslatedCopyGate } from "./check-untranslated-copy"
import { type StatusEntry } from "./check-stable-dod"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PKG_PREFIX = "packages/react/"
const BASE = "origin/main"

function git(args: string[]): string | null {
  const result = spawnSync("git", args, { cwd: PKG_DIR, encoding: "utf-8" })
  return result.status === 0 ? result.stdout.trim() : null
}

function checkBugfixHasTests(subjects: string[], diff: string): boolean {
  if (!subjects.some(isBugfixTitle)) return true

  const overlay = overlayFilesFrom(diff)
  if (overlay.testFiles.length === 0) {
    consola.error(
      "Outgoing `fix:` commits, but the branch adds or modifies no unit test. " +
        "A bugfix must ship a regression test that fails on main and passes " +
        "with the fix — CI enforces the full red-green check on the PR."
    )
    consola.log("  To push anyway (e.g. WIP): SKIP_RED_GREEN=1 git push")
    return false
  }

  consola.start(
    `Bugfix push — running the branch's changed unit tests (green half):\n${overlay.testFiles
      .map((f) => `  ${f}`)
      .join("\n")}`
  )
  const vitest = spawnSync(
    "pnpm",
    [
      "exec",
      "vitest",
      "run",
      "--project=unit",
      ...overlay.testFiles.map((f) => f.slice(PKG_PREFIX.length)),
    ],
    { cwd: PKG_DIR, stdio: "inherit" }
  )
  const verdict = redGreenVerdict({
    testFiles: overlay.testFiles,
    // The red half (fails on latest main) is CI's job; assume it here.
    baseRunFailed: true,
    prRunPassed: vitest.status === 0,
  })
  if (!verdict.ok) {
    consola.error(verdict.message)
    return false
  }
  consola.success(
    "Changed unit tests pass locally. CI will verify they fail on main."
  )
  return true
}

function checkNewComponentsDod(): boolean {
  const components = computeComponentStatusData().components as StatusEntry[]
  const result = checkNewComponents(components, gatherSignals(BASE))
  const ok = reportResult(result)
  if (!ok) {
    consola.log(
      "  To push anyway (e.g. WIP): SKIP_NEW_COMPONENT_DOD=1 git push"
    )
  }
  return ok
}

function checkUntranslatedCopy(): boolean {
  const ok = untranslatedCopyGate()
  if (!ok) {
    consola.log(
      "  To push anyway (e.g. WIP): SKIP_UNTRANSLATED_COPY=1 git push"
    )
  }
  return ok
}

function checkInlineStyles(): boolean {
  const ok = inlineStylesGate()
  if (!ok) {
    consola.log("  To push anyway (e.g. WIP): SKIP_INLINE_STYLES=1 git push")
  }
  return ok
}

function main(): void {
  if (process.env.F0_SKIP_PREFLIGHT === "1") {
    consola.warn("F0_SKIP_PREFLIGHT=1 — skipping pre-push preflight.")
    process.exit(0)
  }

  if (git(["rev-parse", "--verify", `${BASE}^{commit}`]) === null) {
    consola.warn(
      `Cannot resolve ${BASE} locally — skipping pre-push preflight.`
    )
    process.exit(0)
  }

  const diff = git(["diff", "--name-status", "-M", `${BASE}...HEAD`])
  if (!diff || !diff.includes(PKG_PREFIX)) {
    process.exit(0) // No packages/react changes outgoing.
  }

  const subjects = (git(["log", "--format=%s", `${BASE}..HEAD`]) ?? "")
    .split("\n")
    .filter(Boolean)

  let ok = true

  if (process.env.SKIP_RED_GREEN === "1") {
    consola.warn("SKIP_RED_GREEN=1 — skipping the bugfix regression-test gate.")
  } else {
    ok = checkBugfixHasTests(subjects, diff) && ok
  }

  if (process.env.SKIP_NEW_COMPONENT_DOD === "1") {
    consola.warn(
      "SKIP_NEW_COMPONENT_DOD=1 — skipping the new-component DoD gate."
    )
  } else {
    ok = checkNewComponentsDod() && ok
  }

  if (process.env.SKIP_UNTRANSLATED_COPY === "1") {
    consola.warn("SKIP_UNTRANSLATED_COPY=1 — skipping the i18n copy gate.")
  } else {
    ok = checkUntranslatedCopy() && ok
  }

  if (process.env.SKIP_INLINE_STYLES === "1") {
    consola.warn("SKIP_INLINE_STYLES=1 — skipping the inline-styles gate.")
  } else {
    ok = checkInlineStyles() && ok
  }

  process.exit(ok ? 0 : 1)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (process.argv[1] && /pre-push-preflight\.(ts|js)$/.test(process.argv[1])) {
  main()
}
