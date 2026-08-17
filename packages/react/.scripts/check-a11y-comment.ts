#!/usr/bin/env tsx
/**
 * check-a11y-comment.ts
 *
 * Turns the a11y violations captured by the Storybook test-runner
 * (packages/react/a11y-violations.jsonl) into a PR-comment body, scoped to the
 * stories/components the PR actually changed.
 *
 * The Storybook job visits every story, so the raw violation set is the global
 * a11y debt — the same on every PR. To make the comment relevant, we keep only
 * violations whose story file (or its component folder) was changed vs the
 * compare commit (main). See the "future improvements" note in the output for
 * what this deliberately does NOT do yet (delta vs main, downstream ripple).
 *
 * Usage (CI):
 *   tsx .scripts/check-a11y-comment.ts --compare-commit <main-sha> [--json]
 *   tsx .scripts/check-a11y-comment.ts --changed-files "a,b,c" [--json]  # tests
 *
 * Emits a single JSON object as its last stdout line: { commentMarkdown, ... }.
 */
import { execSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const ARTIFACT = resolve(PKG_DIR, "a11y-violations.jsonl")
const COMMENT_MARKER_NOTE =
  "Scope: only stories in the files/component folders this PR changed. " +
  "It can't yet flag downstream ripple from shared-code/token changes, or diff " +
  "against `main` (planned: base-vs-head delta)."

interface Rule {
  id: string
  impact: string | null
  nodes: number
  sc: string | null
  level: string
  version: string
}
interface StoryViolations {
  id: string
  title: string
  name: string
  file: string
  mode: string
  rules: Rule[]
}

/** Story file → its component directory (a story in `__stories__/` maps to the
 * parent). Mirrors componentDirOf in scripts/component-status-build.mjs. */
function componentDirOf(file: string): string {
  const dir = dirname(file)
  return dir.endsWith("/__stories__") ? dirname(dir) : dir
}

function parseArgs(): { compareCommit?: string; changedFiles?: string[] } {
  const args = process.argv.slice(2)
  const at = (flag: string) => {
    const i = args.indexOf(flag)
    return i !== -1 && args[i + 1] ? args[i + 1] : undefined
  }
  const cf = at("--changed-files")
  return {
    compareCommit: at("--compare-commit"),
    changedFiles: cf
      ? cf
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined,
  }
}

/** Files changed vs the compare commit, relative to packages/react (matching
 * the artifact's `src/...` paths). */
function changedReactFiles(compareCommit: string): string[] {
  const out = execSync(`git diff --name-only ${compareCommit}...HEAD`, {
    encoding: "utf-8",
    cwd: PKG_DIR,
  })
  return out
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((f) => f.startsWith("packages/react/"))
    .map((f) => f.slice("packages/react/".length))
}

function readArtifact(): StoryViolations[] {
  if (!existsSync(ARTIFACT)) return []
  return readFileSync(ARTIFACT, "utf-8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .flatMap((l) => {
      try {
        return [JSON.parse(l) as StoryViolations]
      } catch {
        return []
      }
    })
}

/** A story is affected if its file changed, or any file in its component dir
 * changed. */
function isAffected(story: StoryViolations, changedDirs: Set<string>): boolean {
  return changedDirs.has(componentDirOf(story.file))
}

function buildMarkdown(affected: StoryViolations[]): string {
  const header = "### ♿ Accessibility (axe) — components changed in this PR\n"
  const note = `\n<sub>${COMMENT_MARKER_NOTE}</sub>\n`

  if (affected.length === 0) {
    return `${header}\n✅ No a11y issues in the stories this PR changed.\n${note}`
  }

  const totalRules = affected.reduce((n, s) => n + s.rules.length, 0)
  const enforced = affected.filter((s) => s.mode === "error")
  const summary =
    `\n**${totalRules} issue${totalRules === 1 ? "" : "s"}** across ` +
    `**${affected.length} stor${affected.length === 1 ? "y" : "ies"}**` +
    (enforced.length
      ? ` — ${enforced.length} blocking (\`test: "error"\`).`
      : ` — all non-blocking (\`todo\`).`) +
    "\n"

  const rows = affected
    .flatMap((s) =>
      s.rules.map((r) => {
        const wcag = r.sc ? `WCAG ${r.sc} ${r.level} (${r.version})` : r.level
        const mode = s.mode === "error" ? "🔴 `error`" : "🟡 `todo`"
        return `| ${s.title} / ${s.name} | \`${r.id}\` | ${wcag} | ${r.impact ?? "—"} | ${r.nodes} | ${mode} |`
      })
    )
    .join("\n")

  const table =
    "\n| Story | Rule | WCAG | Impact | Nodes | Mode |\n" +
    "| --- | --- | --- | --- | --- | --- |\n" +
    rows +
    "\n"

  return `${header}${summary}${table}${note}`
}

function main(): void {
  const { compareCommit, changedFiles } = parseArgs()
  const changed =
    changedFiles ?? (compareCommit ? changedReactFiles(compareCommit) : [])
  const changedDirs = new Set(changed.map(componentDirOf))

  const all = readArtifact()
  const affected = all.filter((s) => isAffected(s, changedDirs))

  const commentMarkdown = buildMarkdown(affected)
  // Machine output on stdout (process.stdout.write, not console — this file may
  // be linted with no-console; the workflow greps the last JSON line).
  process.stdout.write(
    JSON.stringify(
      {
        affectedStories: affected.length,
        totalStoriesWithViolations: all.length,
        changedFiles: changed.length,
        commentMarkdown,
      },
      null,
      2
    ) + "\n"
  )
}

if (process.argv[1] && /check-a11y-comment\.(ts|js)$/.test(process.argv[1])) {
  main()
}

export { buildMarkdown, componentDirOf, isAffected, type StoryViolations }
