#!/usr/bin/env tsx
/**
 * check-bugfix-red-green.ts
 *
 * Gate: a bugfix PR must ship a regression test — a unit test that FAILS on
 * latest main (red: it reproduces the bug) and PASSES with the PR's changes
 * applied (green: the fix works).
 *
 * How CI verifies that:
 *   1. Collect the unit-test files this PR adds or modifies (vs the base ref),
 *      plus any changed `__tests__/` helpers they may import.
 *   2. RED — build a throwaway git worktree of the base ref (latest main),
 *      overlay ONLY those files on top of it, and run the tests there: at
 *      least one must fail, proving the test reproduces the bug without the fix.
 *   3. GREEN — run the same test files on the PR checkout: all must pass.
 *
 * A `fix:` PR that changes no unit test fails the gate. For fixes that
 * genuinely cannot be captured in a unit test (visual-only tweaks, story-only
 * changes), add the `skip-red-green` label to the PR — CI skips the job.
 *
 * Usage:
 *   tsx .scripts/check-bugfix-red-green.ts [--base origin/main] [--title "fix: …"]
 *
 * The PR title defaults to $PR_TITLE and the base ref to $BASE_REF (then
 * origin/main). Titles that are not `fix:` conventional commits exit 0 —
 * there is nothing to verify. `--force` runs the check regardless of title.
 */
import { spawnSync } from "node:child_process"
import { copyFileSync, mkdirSync, mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import consola from "consola"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PKG_PREFIX = "packages/react/"

/** Conventional-commit bugfix title: `fix: …`, `fix(scope): …`, `fix!: …`. */
export function isBugfixTitle(title: string): boolean {
  return /^fix(\([^)]*\))?!?:/.test(title.trim())
}

export interface OverlayFiles {
  /** Unit-test files (.test.ts / .test.tsx) added or modified by the PR. */
  testFiles: string[]
  /** Changed non-test files under `__tests__/` (helpers, fixtures, factories)
   * that the tests may import — overlaid alongside them. */
  supportFiles: string[]
}

/**
 * Parse `git diff --name-status -M base...HEAD` output into the files to
 * overlay onto the base worktree for the red run. Deletions are ignored;
 * renames/copies count as their new path. Paths stay repo-relative.
 */
export function overlayFilesFrom(nameStatusOutput: string): OverlayFiles {
  const testFiles: string[] = []
  const supportFiles: string[] = []
  for (const line of nameStatusOutput.split("\n")) {
    const parts = line.trim().split("\t")
    if (parts.length < 2) continue
    const status = parts[0]
    if (status.startsWith("D")) continue
    // Renames/copies (R100, C75) list "old<TAB>new" — keep the new path.
    const file = parts[parts.length - 1]
    if (!file.startsWith(`${PKG_PREFIX}src/`)) continue
    if (/\.test\.(ts|tsx)$/.test(file)) {
      testFiles.push(file)
    } else if (file.includes("/__tests__/")) {
      supportFiles.push(file)
    }
  }
  return { testFiles, supportFiles }
}

export type VerdictCode = "pass" | "no-tests" | "green-on-base" | "red-on-pr"

export interface Verdict {
  ok: boolean
  code: VerdictCode
  message: string
}

/**
 * The red-green rule, as a pure decision over the two runs' outcomes.
 * `baseRunFailed` / `prRunPassed` may be omitted when the corresponding run
 * was never reached (short-circuited by an earlier failure).
 */
export function redGreenVerdict(input: {
  testFiles: string[]
  baseRunFailed?: boolean
  prRunPassed?: boolean
}): Verdict {
  if (input.testFiles.length === 0) {
    return {
      ok: false,
      code: "no-tests",
      message:
        "This bugfix PR adds or modifies no unit test. Add a regression test " +
        "that reproduces the bug (fails on main, passes with the fix). If the " +
        "fix genuinely cannot be unit-tested, add the `skip-red-green` label.",
    }
  }
  if (!input.baseRunFailed) {
    return {
      ok: false,
      code: "green-on-base",
      message:
        "The changed unit tests PASS against latest main, so they do not " +
        "reproduce the bug this PR fixes. Make the regression test fail " +
        "without the fix applied.",
    }
  }
  if (!input.prRunPassed) {
    return {
      ok: false,
      code: "red-on-pr",
      message:
        "The changed unit tests still FAIL with the PR's changes applied. " +
        "The regression test must pass once the fix is in.",
    }
  }
  return {
    ok: true,
    code: "pass",
    message:
      "Red-green verified: the changed unit tests fail on latest main and " +
      "pass with this PR's changes.",
  }
}

function run(
  cmd: string,
  args: string[],
  cwd: string,
  stdio: "pipe" | "inherit" = "pipe"
): { status: number; stdout: string } {
  const result = spawnSync(cmd, args, { cwd, stdio, encoding: "utf-8" })
  if (result.error) throw result.error
  return { status: result.status ?? 1, stdout: result.stdout ?? "" }
}

function git(args: string[], cwd: string): string {
  const { status, stdout } = run("git", args, cwd)
  if (status !== 0) {
    throw new Error(`git ${args.join(" ")} failed with exit code ${status}`)
  }
  return stdout.trim()
}

/** Resolve the base ref to a SHA, fetching it once if it is not local yet. */
function resolveBaseSha(baseRef: string, repoRoot: string): string {
  try {
    return git(["rev-parse", "--verify", `${baseRef}^{commit}`], repoRoot)
  } catch {
    const remoteBranch = baseRef.replace(/^origin\//, "")
    git(["fetch", "origin", remoteBranch], repoRoot)
    return git(["rev-parse", "--verify", `${baseRef}^{commit}`], repoRoot)
  }
}

function parseArgs(): { base: string; title: string; force: boolean } {
  const args = process.argv.slice(2)
  const at = (flag: string) => {
    const i = args.indexOf(flag)
    return i !== -1 && args[i + 1] ? args[i + 1] : undefined
  }
  return {
    base: at("--base") ?? process.env.BASE_REF ?? "origin/main",
    title: at("--title") ?? process.env.PR_TITLE ?? "",
    force: args.includes("--force"),
  }
}

/** Run the overlaid tests inside one checkout; returns the vitest exit code. */
function runVitest(files: string[], cwd: string): number {
  const pkgRelative = files.map((f) => f.slice(PKG_PREFIX.length))
  return run(
    "pnpm",
    [
      "--filter",
      "@factorialco/f0-react",
      "exec",
      "vitest",
      "run",
      "--project=unit",
      ...pkgRelative,
    ],
    cwd,
    "inherit"
  ).status
}

function main(): void {
  const { base, title, force } = parseArgs()

  if (!force && !isBugfixTitle(title)) {
    consola.info(
      `PR title ${JSON.stringify(title)} is not a fix: conventional commit — nothing to verify.`
    )
    process.exit(0)
  }

  const repoRoot = git(["rev-parse", "--show-toplevel"], PKG_DIR)
  const baseSha = resolveBaseSha(base, repoRoot)
  consola.info(`Base (latest ${base}): ${baseSha}`)

  const diff = git(
    ["diff", "--name-status", "-M", `${baseSha}...HEAD`],
    repoRoot
  )
  const overlay = overlayFilesFrom(diff)

  if (overlay.testFiles.length === 0) {
    const verdict = redGreenVerdict({ testFiles: [] })
    consola.error(verdict.message)
    process.exit(1)
  }

  consola.info(
    `Changed unit tests:\n${overlay.testFiles.map((f) => `  ${f}`).join("\n")}`
  )
  if (overlay.supportFiles.length > 0) {
    consola.info(
      `Changed test helpers (overlaid too):\n${overlay.supportFiles
        .map((f) => `  ${f}`)
        .join("\n")}`
    )
  }

  const worktree = mkdtempSync(join(tmpdir(), "red-green-base-"))
  let baseRunFailed: boolean | undefined
  let prRunPassed: boolean | undefined
  try {
    consola.start(`RED — running the tests on ${base} without the fix…`)
    git(["worktree", "add", "--detach", worktree, baseSha], repoRoot)
    for (const file of [...overlay.testFiles, ...overlay.supportFiles]) {
      const dest = join(worktree, file)
      mkdirSync(dirname(dest), { recursive: true })
      copyFileSync(join(repoRoot, file), dest)
    }
    const install = run(
      "pnpm",
      ["install", "--frozen-lockfile"],
      worktree,
      "inherit"
    )
    if (install.status !== 0) {
      throw new Error("pnpm install failed in the base worktree")
    }
    const build = run(
      "pnpm",
      ["--filter", "@factorialco/f0-core", "build"],
      worktree,
      "inherit"
    )
    if (build.status !== 0) {
      throw new Error("core build failed in the base worktree")
    }
    baseRunFailed = runVitest(overlay.testFiles, worktree) !== 0

    if (baseRunFailed) {
      consola.start("GREEN — running the same tests with the fix applied…")
      prRunPassed = runVitest(overlay.testFiles, repoRoot) === 0
    }
  } finally {
    run("git", ["worktree", "remove", "--force", worktree], repoRoot)
    rmSync(worktree, { recursive: true, force: true })
  }

  const verdict = redGreenVerdict({
    testFiles: overlay.testFiles,
    baseRunFailed,
    prRunPassed,
  })
  if (verdict.ok) {
    consola.success(verdict.message)
    process.exit(0)
  }
  consola.error(verdict.message)
  process.exit(1)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (
  process.argv[1] &&
  /check-bugfix-red-green\.(ts|js)$/.test(process.argv[1])
) {
  main()
}
