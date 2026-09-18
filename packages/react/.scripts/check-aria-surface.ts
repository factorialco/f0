#!/usr/bin/env tsx
/**
 * check-aria-surface.ts
 *
 * Diffs the **aria surface** — every story's `role` + accessible-name pairs —
 * between the baseline captured on `main` and the current PR, and renders the
 * result as a PR comment.
 *
 * Why this exists: nothing else in CI watches the accessibility tree for
 * *change*.
 *
 *   - `check-api-surface.ts` compares rolled-up `.d.ts` files. Declarations
 *     hold types, not values, so an `aria-label` written inline in a component
 *     body changes with a byte-identical API diff.
 *   - axe (`.storybook/test-runner.ts`) asks "does this element have a name?",
 *     never "is it the same name as before". Renaming "Clear" to "Clear input"
 *     keeps every rule green.
 *   - Chromatic diffs pixels, not semantics.
 *
 * Meanwhile downstream suites query by exactly this: `getByRole("button", {
 * name: "Clear" })`, `cy.findByRole(...)`. A rename here is a silent break
 * there.
 *
 * Both sides come from `aria-snapshots.jsonl`, written per story by the
 * test-runner. The baseline is the artifact from the most recent `main` run of
 * the Storybook Tests workflow — no second Storybook build, and the head side
 * is the PR *merge commit* (PR + current main), so the two line up.
 *
 * Usage (CI):
 *   tsx .scripts/check-aria-surface.ts --base <dir|file> --head <dir|file> [--json]
 *
 * Emits a single JSON object as its last stdout line: { commentMarkdown, ... }.
 * Exit code is always 0 while this check is advisory — it reports, it does not
 * gate. Flip `--fail-on-breaking` on once the signal has been observed.
 */
import { existsSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import type { AriaSurface } from "../src/lib/storybook-utils/ariaSurface"

const ARTIFACT_NAME = "aria-snapshots.jsonl"

const COMMENT_NOTE =
  "Compares the role + accessible-name pairs every story renders against the " +
  "baseline from the latest `main` run. These are what `getByRole(role, { name })` " +
  "and `cy.findByRole(...)` match on downstream — the typed API check can't see " +
  "them (they're values, not types) and axe can't either (it checks a name " +
  "*exists*, not that it's unchanged). Advisory: this comment never blocks a merge."

/** One story's captured surface, as written by the test-runner. */
export interface StorySnapshot {
  id: string
  title: string
  name: string
  file: string
  nodes: AriaSurface
}

/** A single role+name pair that gained or lost occurrences. */
export interface NodeDelta {
  key: string
  before: number
  after: number
}

/**
 * A removed/added pair that looks like one element changing rather than two
 * unrelated ones.
 *
 * `kind` says which half moved: `"name"` is the same role under a new
 * accessible name (`button "Clear"` → `button "Clear input"`), `"role"` is the
 * same name under a new role (`button "Open"` → `link "Open"`). Both break a
 * `getByRole(role, { name })` query, and the reviewer needs to see where the
 * element went, not just that it disappeared.
 */
export interface RenameDelta {
  kind: "name" | "role"
  before: string
  after: string
}

export interface StoryDiff {
  id: string
  title: string
  name: string
  file: string
  /** Present in base, gone (or fewer) in head — the breaking direction. */
  removed: NodeDelta[]
  /** New in head, or more occurrences than base. */
  added: NodeDelta[]
  /** Removed+added pairs on the same role, matched up as a likely rename. */
  renamed: RenameDelta[]
}

export interface AriaDiffResult {
  /** Stories whose surface changed and that exist on both sides. */
  changed: StoryDiff[]
  /** Story ids in the baseline with no counterpart in head. */
  deletedStories: StorySnapshot[]
  /** Story ids in head that the baseline never had. */
  newStories: StorySnapshot[]
  baseStories: number
  headStories: number
}

/**
 * Resolve a `--base`/`--head` argument that may name either the JSONL file
 * itself or the directory an artifact was downloaded into.
 */
export function resolveArtifactPath(p: string): string | null {
  if (!existsSync(p)) return null
  if (statSync(p).isDirectory()) {
    const nested = join(p, ARTIFACT_NAME)
    return existsSync(nested) ? nested : null
  }
  return p
}

/** Parse a JSONL artifact, skipping any line that doesn't parse. */
export function readSnapshots(path: string | null): StorySnapshot[] {
  if (!path || !existsSync(path)) return []
  return readFileSync(path, "utf-8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .flatMap((l) => {
      try {
        const parsed = JSON.parse(l) as StorySnapshot
        return parsed && typeof parsed.id === "string" && parsed.nodes
          ? [parsed]
          : []
      } catch {
        return []
      }
    })
}

/** The `role` prefix of a node key, used to pair renames. */
function roleOf(key: string): string {
  const match = /^([a-zA-Z][a-zA-Z-]*)/.exec(key)
  return match ? match[1] : key
}

/**
 * The accessible name inside a node key, or null when the node has none.
 * Unnamed nodes return null so they never pair with each other on "no name".
 */
function nameOf(key: string): string | null {
  const match = /^[a-zA-Z][a-zA-Z-]*\s+"(.*)"(?:\s+\[.*\])?$/.exec(key)
  return match ? match[1] : null
}

function groupBy(
  list: NodeDelta[],
  keyFn: (d: NodeDelta) => string | null
): Map<string, NodeDelta[]> {
  const m = new Map<string, NodeDelta[]>()
  for (const d of list) {
    const k = keyFn(d)
    if (k === null) continue
    const bucket = m.get(k)
    if (bucket) {
      bucket.push(d)
    } else {
      m.set(k, [d])
    }
  }
  return m
}

/**
 * Pair each removed key with an added key describing the same element, so one
 * change reads as one line instead of an unrelated removal and addition.
 *
 * Two passes, in order of confidence:
 *
 *  1. **same role, different name** — `button "Clear"` → `button "Clear input"`
 *  2. **same name, different role** — `button "Open"` → `link "Open"`
 *
 * The second pass matters as much as the first: a role change is one of the
 * quietest ways to break `getByRole`, and reporting only the removal leaves the
 * reviewer thinking the element vanished rather than moved.
 *
 * Either pass only pairs when a bucket holds exactly one removal and one
 * addition of equal magnitude. Anything ambiguous (two buttons renamed at once)
 * stays split across removed/added — still reported, just not guessed at.
 */
export function pairRenames(
  removed: NodeDelta[],
  added: NodeDelta[]
): {
  renamed: RenameDelta[]
  removed: NodeDelta[]
  added: NodeDelta[]
} {
  const renamed: RenameDelta[] = []
  const usedRemoved = new Set<string>()
  const usedAdded = new Set<string>()

  const pass = (
    kind: "name" | "role",
    keyFn: (d: NodeDelta) => string | null
  ) => {
    const stillRemoved = removed.filter((d) => !usedRemoved.has(d.key))
    const stillAdded = added.filter((d) => !usedAdded.has(d.key))
    const addedGroups = groupBy(stillAdded, keyFn)

    for (const [bucket, gone] of Array.from(groupBy(stillRemoved, keyFn))) {
      const appeared = addedGroups.get(bucket)
      if (!appeared || gone.length !== 1 || appeared.length !== 1) continue
      // Same magnitude on each side, or it's a count change, not a rename.
      if (
        gone[0].before - gone[0].after !==
        appeared[0].after - appeared[0].before
      ) {
        continue
      }
      renamed.push({ kind, before: gone[0].key, after: appeared[0].key })
      usedRemoved.add(gone[0].key)
      usedAdded.add(appeared[0].key)
    }
  }

  pass("name", (d) => roleOf(d.key))
  pass("role", (d) => nameOf(d.key))

  return {
    renamed,
    removed: removed.filter((d) => !usedRemoved.has(d.key)),
    added: added.filter((d) => !usedAdded.has(d.key)),
  }
}

/** Diff one story's surface. Returns null when nothing changed. */
export function diffStory(
  base: StorySnapshot,
  head: StorySnapshot
): StoryDiff | null {
  const keys = new Set([...Object.keys(base.nodes), ...Object.keys(head.nodes)])
  const removed: NodeDelta[] = []
  const added: NodeDelta[] = []

  for (const key of Array.from(keys)) {
    const before = base.nodes[key] ?? 0
    const after = head.nodes[key] ?? 0
    if (before === after) continue
    if (after < before) removed.push({ key, before, after })
    else added.push({ key, before, after })
  }

  if (!removed.length && !added.length) return null

  const paired = pairRenames(removed, added)
  return {
    id: head.id,
    title: head.title,
    name: head.name,
    file: head.file,
    removed: paired.removed.sort((a, b) => a.key.localeCompare(b.key)),
    added: paired.added.sort((a, b) => a.key.localeCompare(b.key)),
    renamed: paired.renamed.sort((a, b) => a.before.localeCompare(b.before)),
  }
}

export function diffSurfaces(
  baseList: StorySnapshot[],
  headList: StorySnapshot[]
): AriaDiffResult {
  const base = new Map(baseList.map((s) => [s.id, s]))
  const head = new Map(headList.map((s) => [s.id, s]))

  const changed: StoryDiff[] = []
  const newStories: StorySnapshot[] = []
  const deletedStories: StorySnapshot[] = []

  for (const [id, headStory] of Array.from(head)) {
    const baseStory = base.get(id)
    if (!baseStory) {
      newStories.push(headStory)
      continue
    }
    const d = diffStory(baseStory, headStory)
    if (d) changed.push(d)
  }
  for (const [id, baseStory] of Array.from(base)) {
    if (!head.has(id)) deletedStories.push(baseStory)
  }

  const byStory = (a: { title: string; name: string }, b: typeof a) =>
    `${a.title}/${a.name}`.localeCompare(`${b.title}/${b.name}`)

  return {
    changed: changed.sort(byStory),
    deletedStories: deletedStories.sort(byStory),
    newStories: newStories.sort(byStory),
    baseStories: base.size,
    headStories: head.size,
  }
}

/**
 * A change is "breaking" when a query that used to match may now find nothing:
 * a role+name pair lost occurrences, a pair was renamed, or a whole story
 * disappeared. Purely additive changes are not.
 */
export function countBreaking(result: AriaDiffResult): number {
  return (
    result.changed.reduce(
      (n, s) => n + s.removed.length + s.renamed.length,
      0
    ) + result.deletedStories.length
  )
}

/**
 * A handful of rows reads fine expanded; a few hundred bury the rest of the
 * comment — and the headline above already carries the count — so a section
 * longer than this renders shut.
 */
const INLINE_ROW_LIMIT = 20

function collapsible(summary: string, body: string, open: boolean): string {
  return (
    `\n<details${open ? " open" : ""}>\n` +
    `<summary><strong>${summary}</strong></summary>\n\n${body}\n</details>\n`
  )
}

function describeCount(delta: NodeDelta): string {
  if (delta.before === 0) return "added"
  if (delta.after === 0) return "removed"
  return `${delta.before} → ${delta.after}`
}

export function buildMarkdown(
  result: AriaDiffResult,
  {
    hasBaseline,
    hasHead = true,
    partial = false,
  }: { hasBaseline: boolean; hasHead?: boolean; partial?: boolean }
): string {
  const header = "### 🔎 Accessible name & role changes\n"
  const partialNote = partial
    ? "\n> ⚠️ At least one Storybook shard did not finish, so the head side is " +
      "incomplete. Stories that only appear in the baseline are **not** reported " +
      "as deleted here — they may simply not have run.\n"
    : ""
  const note = `\n<sub>${COMMENT_NOTE}</sub>\n`

  if (!hasBaseline) {
    return (
      `${header}\nℹ️ No baseline found — the \`aria-baseline\` artifact from the ` +
      `latest \`main\` run of this workflow wasn't available (it's produced on ` +
      `push to \`main\`, and expires after 90 days). Nothing to compare against ` +
      `this time.\n${note}`
    )
  }

  // No head snapshots at all means the run captured nothing — an infrastructure
  // problem, not a PR that deleted every story. Reporting the baseline as
  // wholesale deletions would be both alarming and wrong.
  if (!hasHead) {
    return (
      `${header}\nℹ️ This run produced no aria snapshots, so there is nothing to ` +
      `compare against the ${result.baseStories}-story baseline. Usually that ` +
      `means the Storybook shards did not get far enough to capture any.\n${note}`
    )
  }

  const breaking = countBreaking(result)
  const additiveOnly = result.changed.filter(
    (s) => !s.removed.length && !s.renamed.length
  )
  const withBreaks = result.changed.filter(
    (s) => s.removed.length || s.renamed.length
  )
  // Scope the headline to the stories that actually carry a breaking change —
  // additive-only stories are reported separately and must not inflate it.
  const breakingStories = withBreaks.length + result.deletedStories.length

  if (!result.changed.length && !result.deletedStories.length) {
    const suffix = result.newStories.length
      ? ` ${result.newStories.length} new stor${result.newStories.length === 1 ? "y" : "ies"} added.`
      : ""
    return (
      `${header}${partialNote}\n✅ No accessible name or role changed across ` +
      `${result.headStories} stories.${suffix}\n${note}`
    )
  }

  const summary = breaking
    ? `\n⚠️ **${breaking} change${breaking === 1 ? "" : "s"} that could break an existing ` +
      `\`getByRole\` / \`findByRole\` query**, across ` +
      `**${breakingStories} stor${breakingStories === 1 ? "y" : "ies"}**.\n`
    : `\n✅ No query-breaking changes — ${additiveOnly.length} stor${
        additiveOnly.length === 1 ? "y" : "ies"
      } gained roles or names.\n`

  const sections: string[] = []

  if (withBreaks.length) {
    const rows = withBreaks
      .flatMap((s) => [
        ...s.renamed.map(
          (r) =>
            `| ${s.title} / ${s.name} | ${
              r.kind === "role" ? "🔀 role changed" : "🔁 renamed"
            } | \`${r.before}\` | \`${r.after}\` |`
        ),
        ...s.removed.map(
          (d) =>
            `| ${s.title} / ${s.name} | ❌ ${describeCount(d)} | \`${d.key}\` | — |`
        ),
      ])
      .join("\n")
    const rowCount = withBreaks.reduce(
      (n, s) => n + s.renamed.length + s.removed.length,
      0
    )
    sections.push(
      collapsible(
        `Could break a query (${rowCount} change${rowCount === 1 ? "" : "s"})`,
        "| Story | Change | Before | After |\n| --- | --- | --- | --- |\n" +
          rows +
          "\n",
        rowCount <= INLINE_ROW_LIMIT
      )
    )
  }

  if (result.deletedStories.length) {
    sections.push(
      collapsible(
        `Stories that no longer exist (${result.deletedStories.length})`,
        result.deletedStories
          .map((s) => `- ${s.title} / ${s.name} (\`${s.file}\`)`)
          .join("\n") + "\n",
        result.deletedStories.length <= INLINE_ROW_LIMIT
      )
    )
  }

  if (additiveOnly.length) {
    const rows = additiveOnly
      .flatMap((s) =>
        s.added.map(
          (d) =>
            `| ${s.title} / ${s.name} | \`${d.key}\` | ${describeCount(d)} |`
        )
      )
      .join("\n")
    sections.push(
      collapsible(
        `Additive only (${additiveOnly.length} stor${
          additiveOnly.length === 1 ? "y" : "ies"
        })`,
        "| Story | Node | Change |\n| --- | --- | --- |\n" + rows + "\n",
        false
      )
    )
  }

  return `${header}${partialNote}${summary}${sections.join("")}${note}`
}

function parseArgs(): { base?: string; head?: string; partial: boolean } {
  const args = process.argv.slice(2)
  const at = (flag: string) => {
    const i = args.indexOf(flag)
    return i !== -1 && args[i + 1] ? args[i + 1] : undefined
  }
  return {
    base: at("--base"),
    head: at("--head"),
    // Set by the workflow when a Storybook shard failed: the head side is then
    // missing whole story files, and "absent from head" no longer means
    // "deleted".
    partial: args.includes("--partial"),
  }
}

function main(): void {
  const { base, head, partial } = parseArgs()

  const basePath = base ? resolveArtifactPath(base) : null
  const headPath = head ? resolveArtifactPath(head) : null

  const baseSnapshots = readSnapshots(basePath)
  const headSnapshots = readSnapshots(headPath)

  // A baseline of zero stories means the artifact was missing or empty, not
  // that main renders nothing — treat it as "no baseline" so the comment says
  // so instead of reporting every story as new.
  const hasBaseline = baseSnapshots.length > 0
  const hasHead = headSnapshots.length > 0
  const result = diffSurfaces(baseSnapshots, headSnapshots)

  // On a partial head, a story missing from head is indistinguishable from a
  // story whose shard never ran. Drop the claim rather than cry wolf.
  if (partial || !hasHead) result.deletedStories = []

  const commentMarkdown = buildMarkdown(result, {
    hasBaseline,
    hasHead,
    partial,
  })

  process.stdout.write(
    JSON.stringify(
      {
        hasBaseline,
        hasHead,
        baseStories: result.baseStories,
        headStories: result.headStories,
        changedStories: result.changed.length,
        newStories: result.newStories.length,
        deletedStories: result.deletedStories.length,
        breakingTotal: hasBaseline ? countBreaking(result) : 0,
        commentMarkdown,
      },
      null,
      2
    ) + "\n"
  )
}

if (process.argv[1] && /check-aria-surface\.(ts|js)$/.test(process.argv[1])) {
  main()
}
