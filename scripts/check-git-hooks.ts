#!/usr/bin/env tsx
import consola from "consola"
/**
 * check-git-hooks.ts — end-to-end check of the git hook wiring.
 *
 * Clones this repository (a committed ref, HEAD by default — never the working
 * tree) into a temp directory, runs a real `pnpm install` with CI unset so
 * lefthook installs the hooks, then drives git the way a contributor would:
 *
 *   1. hooks exist after install (pre-commit, pre-push, commit-msg)
 *   2. a commit with a non-conventional message is rejected (commit-msg)
 *   3. a commit with an unformatted, autofixable file is accepted and the
 *      COMMITTED content is formatted and fixed (pre-commit → lint-staged)
 *   4. a `fix:` push with no regression test is rejected by the pre-push
 *      preflight, and nothing reaches the remote
 *   5. the same push with the preflight skipped succeeds and runs the
 *      pre-push typecheck for real
 *
 * Pushes go to a throwaway bare repository inside the temp dir. The real
 * origin is never touched.
 *
 * Usage:
 *   pnpm hooks:e2e                       # test HEAD
 *   pnpm hooks:e2e -- --from <ref>       # test another committed ref
 *   pnpm hooks:e2e -- --keep             # keep the temp dir for inspection
 *
 * Runs in CI (quality.yaml → "Git hooks") whenever a hook-related file
 * changes. Budget: a few minutes, dominated by `pnpm install` and `tsc`.
 */
import { spawnSync } from "node:child_process"
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")

const args = process.argv.slice(2)
const fromIndex = args.indexOf("--from")
const FROM = fromIndex === -1 ? "HEAD" : (args[fromIndex + 1] ?? "HEAD")
const KEEP = args.includes("--keep")

// Files whose committed state this script exercises. Uncommitted edits to
// them are invisible to the clone, so warn loudly.
const HOOK_FILES = [
  "lefthook.yml",
  ".lintstagedrc.mjs",
  "packages/react/.lintstagedrc.mjs",
  "packages/react-native/.lintstagedrc.mjs",
  "package.json",
  "pnpm-lock.yaml",
  "scripts/check-git-hooks.ts",
]

// Hooks must actually run in the clone: lefthook's npm postinstall skips the
// install when CI is set, LEFTHOOK=0 disables hooks, and a GIT_DIR inherited
// from an enclosing hook would point git at the wrong repository.
const baseEnv: NodeJS.ProcessEnv = {
  ...process.env,
  GIT_AUTHOR_NAME: "f0 hooks e2e",
  GIT_AUTHOR_EMAIL: "hooks-e2e@example.com",
  GIT_COMMITTER_NAME: "f0 hooks e2e",
  GIT_COMMITTER_EMAIL: "hooks-e2e@example.com",
  GIT_TERMINAL_PROMPT: "0",
}
for (const key of [
  "CI",
  "GITHUB_ACTIONS",
  "LEFTHOOK",
  "LEFTHOOK_EXCLUDE",
  "GIT_DIR",
  "GIT_INDEX_FILE",
  "GIT_WORK_TREE",
  "F0_SKIP_PREFLIGHT",
  "F0_SKIP_TYPECHECK",
]) {
  delete baseEnv[key]
}

type Run = { status: number | null; out: string }

function run(
  cmd: string,
  argv: string[],
  cwd: string,
  extraEnv: NodeJS.ProcessEnv = {}
): Run {
  const started = Date.now()
  const result = spawnSync(cmd, argv, {
    cwd,
    env: { ...baseEnv, ...extraEnv },
    encoding: "utf-8",
    maxBuffer: 64 * 1024 * 1024,
  })
  const out = `${result.stdout ?? ""}${result.stderr ?? ""}`
  const seconds = ((Date.now() - started) / 1000).toFixed(1)
  consola.log(
    `  $ ${cmd} ${argv.join(" ")}  → exit ${result.status} (${seconds}s)`
  )
  if (result.error) consola.error(result.error)
  return { status: result.status, out }
}

class CheckFailed extends Error {}

function assert(condition: unknown, message: string, out?: string): void {
  if (condition) {
    consola.success(message)
    return
  }
  if (out) consola.log(out.trimEnd())
  throw new CheckFailed(message)
}

function must(result: Run, what: string): Run {
  assert(result.status === 0, what, result.out)
  return result
}

function warnIfDirty(): void {
  const status = run(
    "git",
    ["status", "--porcelain", "--", ...HOOK_FILES],
    REPO_ROOT
  )
  if (status.out.trim()) {
    consola.warn(
      `Uncommitted changes in hook-related files; the clone tests ${FROM}, not the working tree:\n${status.out.trimEnd()}`
    )
  }
}

// Unformatted and autofixable under packages/react's config: semicolons and
// spacing (oxfmt), and `if { return } else { return }` (oxlint's
// no-else-return, "error" + fixable in .oxlintrc.json).
const REACT_FIXTURE = "packages/react/src/lib/hooks-e2e-fixture.ts"
const REACT_SOURCE = [
  "export function pick(flag: boolean): number {",
  "  if (flag) {",
  "    return 1;",
  "  } else {",
  "    return 2;",
  "  }",
  "}",
  "export const   numbers = [1,2,3];",
  "",
].join("\n")

// Root-level file: exercises the root .lintstagedrc.mjs / .oxfmtrc.json.
const ROOT_FIXTURE = "hooks-e2e-fixture.yaml"
const ROOT_SOURCE = 'a:    1\nlist:\n    -   "x"\n'

// MDX must come back byte-identical. oxfmt has no MDX parser: it formats .mdx
// as Markdown, and the multi-line JSX comment below becomes `{/_ … _/}`, which
// fails the Storybook build with "Could not parse expression with acorn". The
// globs and oxfmt's ignorePatterns both exclude .mdx; this proves it.
const MDX_FIXTURE = "packages/react/docs/hooks-e2e-fixture.mdx"
const MDX_SOURCE = [
  'import { Meta } from "@storybook/addon-docs/blocks"',
  "",
  "{/*",
  "  A multi-line JSX comment, indented and unformatted   on purpose.",
  "*/}",
  "",
  '<Meta title="Resources/Hooks e2e fixture" />',
  "",
  "#    Heading with loose spacing",
  "",
].join("\n")

function main(): void {
  warnIfDirty()

  const tmp = mkdtempSync(join(tmpdir(), "f0-hooks-e2e-"))
  const clone = join(tmp, "clone")
  const remote = join(tmp, "remote.git")
  let failed = false

  try {
    consola.box(`git hooks e2e\nsource: ${REPO_ROOT} @ ${FROM}\ntemp:   ${tmp}`)

    // --- 1. Fresh clone -------------------------------------------------
    consola.start("Cloning")
    const sha = must(
      run("git", ["rev-parse", `${FROM}^{commit}`], REPO_ROOT),
      `resolved ${FROM}`
    ).out.trim()
    must(run("git", ["clone", "--quiet", REPO_ROOT, clone], tmp), "cloned")
    // A detached source HEAD (CI checkout) leaves the clone without a
    // branch; check the ref out explicitly.
    must(
      run("git", ["checkout", "--quiet", "-B", "hooks-e2e", sha], clone),
      "checked out"
    )
    // The pre-push preflight diffs origin/main...HEAD. Pin origin/main to the
    // base commit so the only outgoing commits are the ones made here, with
    // no dependency on a real main branch or the network.
    must(
      run("git", ["update-ref", "refs/remotes/origin/main", sha], clone),
      "pinned origin/main to the base commit"
    )
    run("git", ["config", "commit.gpgsign", "false"], clone)
    run("git", ["config", "core.hooksPath", ".git/hooks"], clone)
    assert(
      !existsSync(join(clone, ".git", "hooks", "pre-commit")),
      "fresh clone has no hooks yet"
    )

    // --- 2. Install → lefthook installs the hooks -------------------------
    consola.start("Installing (this is the slow part)")
    let install = run(
      "pnpm",
      ["install", "--offline", "--frozen-lockfile"],
      clone
    )
    if (install.status !== 0) {
      consola.warn("offline install failed; retrying with --prefer-offline")
      install = run(
        "pnpm",
        ["install", "--prefer-offline", "--frozen-lockfile"],
        clone
      )
    }
    must(install, "pnpm install")
    for (const hook of ["pre-commit", "pre-push", "commit-msg"]) {
      const path = join(clone, ".git", "hooks", hook)
      assert(
        existsSync(path) && readFileSync(path, "utf8").includes("lefthook"),
        `${hook} hook installed by lefthook`
      )
    }

    // --- 3. Stage fixtures ------------------------------------------------
    writeFileSync(join(clone, REACT_FIXTURE), REACT_SOURCE)
    writeFileSync(join(clone, ROOT_FIXTURE), ROOT_SOURCE)
    writeFileSync(join(clone, MDX_FIXTURE), MDX_SOURCE)
    must(run("git", ["add", "-A"], clone), "staged fixtures")

    // --- 4. commit-msg rejects a non-conventional message -----------------
    consola.start("Committing with a bad message")
    const bad = run("git", ["commit", "--quiet", "-m", "bad message"], clone)
    assert(
      bad.status !== 0 && /commitlint|subject|type/i.test(bad.out),
      "commit-msg hook rejected a non-conventional message",
      bad.out
    )

    // --- 5. pre-commit formats and autofixes ------------------------------
    consola.start("Committing with a conventional message")
    must(
      run(
        "git",
        ["commit", "--quiet", "-m", "chore: hooks e2e fixture"],
        clone
      ),
      "conventional commit passed every pre-commit check"
    )
    const reactBlob = must(
      run("git", ["show", `HEAD:${REACT_FIXTURE}`], clone),
      "read committed react fixture"
    ).out
    assert(
      reactBlob !== REACT_SOURCE,
      "lint-staged rewrote the staged react file"
    )
    assert(
      !/\belse\b/.test(reactBlob),
      "oxlint autofix (no-else-return) landed in the commit",
      reactBlob
    )
    assert(
      !reactBlob.includes(";") && reactBlob.includes("[1, 2, 3]"),
      "oxfmt formatting landed in the commit",
      reactBlob
    )
    must(
      run(
        "pnpm",
        [
          "exec",
          "oxfmt",
          "--check",
          REACT_FIXTURE.replace("packages/react/", ""),
        ],
        join(clone, "packages", "react")
      ),
      "committed react file is oxfmt-clean under packages/react's config"
    )
    const yamlBlob = must(
      run("git", ["show", `HEAD:${ROOT_FIXTURE}`], clone),
      "read committed root fixture"
    ).out
    assert(
      yamlBlob !== ROOT_SOURCE && yamlBlob.includes("a: 1"),
      "root yaml formatted by the root config",
      yamlBlob
    )
    const mdxBlob = must(
      run("git", ["show", `HEAD:${MDX_FIXTURE}`], clone),
      "read committed mdx fixture"
    ).out
    assert(
      mdxBlob === MDX_SOURCE,
      "mdx committed byte-identical (oxfmt would corrupt its JSX comment)",
      mdxBlob
    )
    const status = run("git", ["status", "--porcelain"], clone)
    assert(
      status.out.trim() === "",
      "worktree clean after the commit (fixes were re-staged, not left behind)",
      status.out
    )

    // --- 6. pre-push rejects a fix: push without a regression test --------
    consola.start("Pushing a fix: commit with no test to a throwaway remote")
    must(run("git", ["init", "--bare", "--quiet", remote], tmp), "bare remote")
    // actions/checkout fetches with depth 1, so this clone is shallow and a
    // plain bare repo rejects the push with "shallow update not allowed".
    must(
      run(
        "git",
        ["--git-dir", remote, "config", "receive.shallowUpdate", "true"],
        tmp
      ),
      "remote accepts a shallow history"
    )
    must(
      run("git", ["remote", "add", "sandbox", remote], clone),
      "remote added"
    )
    writeFileSync(
      join(clone, REACT_FIXTURE),
      reactBlob.replace("return 1", "return 3")
    )
    must(
      run(
        "git",
        ["commit", "--quiet", "-am", "fix: hooks e2e bugfix without a test"],
        clone
      ),
      "fix: commit created"
    )
    // Typecheck is skipped here so the rejection is attributable to the
    // preflight alone; the positive push below runs it for real.
    const rejected = run(
      "git",
      ["push", "--quiet", "sandbox", "HEAD:refs/heads/hooks-e2e"],
      clone,
      { F0_SKIP_TYPECHECK: "1" }
    )
    assert(
      rejected.status !== 0 &&
        /adds or modifies no unit test/.test(rejected.out),
      "pre-push preflight rejected a fix: push without a regression test",
      rejected.out
    )
    const remoteRefs = run(
      "git",
      ["--git-dir", remote, "rev-list", "--all", "--count"],
      tmp
    )
    assert(
      remoteRefs.out.trim() === "0",
      "nothing reached the remote",
      remoteRefs.out
    )

    // --- 7. Positive control: preflight skipped, typecheck runs -----------
    consola.start("Pushing again with the preflight skipped")
    assert(
      !existsSync(join(clone, "packages", "core", "dist")),
      "packages/core is not built yet (typecheck-react must build it)"
    )
    const accepted = run(
      "git",
      ["push", "--quiet", "sandbox", "HEAD:refs/heads/hooks-e2e"],
      clone,
      { F0_SKIP_PREFLIGHT: "1" }
    )
    assert(
      accepted.status === 0,
      "push accepted once the preflight is skipped",
      accepted.out
    )
    assert(
      existsSync(join(clone, "packages", "core", "dist")),
      "pre-push typecheck-react ran (it built packages/core)"
    )
    const pushedRefs = run(
      "git",
      ["--git-dir", remote, "rev-list", "--all", "--count"],
      tmp
    )
    assert(
      pushedRefs.out.trim() !== "0",
      "commits reached the throwaway remote",
      pushedRefs.out
    )

    consola.success("git hooks e2e passed")
  } catch (error) {
    failed = true
    if (error instanceof CheckFailed) {
      consola.error(`git hooks e2e failed: ${error.message}`)
    } else {
      consola.error(error)
    }
  } finally {
    if (KEEP || failed) {
      consola.info(`Temp dir kept for inspection: ${tmp}`)
    } else {
      rmSync(tmp, { recursive: true, force: true })
    }
  }
  process.exit(failed ? 1 : 0)
}

main()
