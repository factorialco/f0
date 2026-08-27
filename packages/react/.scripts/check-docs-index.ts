/**
 * Storybook docs & stories index snapshot / diff.
 *
 * Storybook's sidebar is assembled from a curated allowlist of directories in
 * `.storybook/main.ts` plus per-entry tags. That makes it possible to *silently
 * lose a page*: move a component to a directory that is not listed, drop an
 * `autodocs` tag, or add `no-sidebar`, and the docs page simply stops being
 * exposed. Nothing fails, nothing is red — the page is just gone.
 *
 * This script gives that class of change a voice in the PR. It works in two
 * modes:
 *
 *   1. `--from-index` — normalize the raw `storybook index` output into a
 *      stable *snapshot*: one record per docs page / story, carrying the
 *      identity (id, title, name, source path), the sidebar-visibility verdict,
 *      and a content hash of the source file.
 *
 *   2. `--base` / `--head` — compare two snapshots and classify every
 *      difference.
 *
 * Both sides are normalized and compared by the *same* version of this script
 * (CI restores it onto the base checkout), so the diff can never be an artifact
 * of the tool changing underneath it.
 *
 * ## What "visible" means
 *
 * An entry reaches the sidebar only if it is tagged `dev` *and* is not tagged
 * `no-sidebar`:
 *
 *   - `dev` is Storybook's own sidebar gate. A story or docs page carrying the
 *     `!dev` tag is indexed (so it still runs in tests) but never listed.
 *   - `no-sidebar` is this repo's filter, applied in `.storybook/manager.ts`.
 *
 * Losing either one is the exact regression this check exists to surface, so
 * visibility is tracked per entry rather than inferred from presence.
 *
 * ## Classification
 *
 *   REGRESSION-SHAPED (surfaced first, with a ⚠️ heading)
 *     - `removed`             — the entry is gone from the index entirely
 *     - `hidden`              — still indexed, but no longer reaches the sidebar
 *     - `docsSourceReplaced`  — the page survives but something else generates
 *                               it now (see "Overwritten docs" below)
 *   INFORMATIONAL
 *     - `sourceMoved` — same page and mechanism, source file relocated
 *     - `moved`       — same source + export, but a different id/title (renamed
 *                       or relocated in the nav tree)
 *     - `added`       — a newly exposed page or story
 *     - `revealed`    — was indexed but hidden, now visible
 *     - `updated`     — same entry, but its source file content changed
 *     - `retagged`    — maturity changed (experimental → stable, deprecated, …)
 *
 * ## autodocs
 *
 * `autodocs` is what *creates* a component's docs page, so dropping it (or
 * adding `!autodocs`) deletes the `…--documentation` entry outright — that
 * surfaces as `removed`, with no special handling needed. What the entry cannot
 * tell you on its own is *why* it went: a deleted component takes its stories
 * with it, whereas a dropped tag leaves them behind. `autodocsLikelyDropped`
 * flags that second shape so the comment can name the likely cause.
 *
 * ## Overwritten docs
 *
 * A docs page id is a single slot, and two mechanisms compete for it: Storybook
 * generates the page from `autodocs`, and an `.mdx` attached to the same
 * component *replaces* it. Adding an MDX file therefore silently overwrites the
 * auto-generated page — same id, same title, same URL, entirely different
 * content, and the props table plus story previews are gone unless the new file
 * renders them itself. Nothing is added and nothing is removed, so an
 * id-only diff sees no change at all. Comparing each entry's `importPath`
 * across the two sides is what catches it.
 *
 * A rename is deliberately *not* reported as a removal plus an addition. Move
 * detection pairs a disappeared id with a new one when they share a source file
 * and export name (or a component path, or an identical file hash for an MDX
 * page that moved untouched), so a retitled page reads as "moved" instead of
 * falsely screaming that docs were deleted.
 *
 * "Updated" is derived from the hash of the entry's **source file**. That is
 * file-level, not statement-level: editing one story in a `.stories.tsx` marks
 * every story in that file as updated. Stories are therefore grouped by file in
 * the rendered comment, so a one-line edit reads as one entry with its stories
 * listed beneath it rather than as twenty separate findings.
 *
 * Usage:
 *   tsx .scripts/check-docs-index.ts --from-index <raw.json> --out <snap.json>
 *   tsx .scripts/check-docs-index.ts --base <snap.json> --head <snap.json> [--json]
 *
 * This check is non-blocking: losing a page is reported, never fatal. It exits
 * 0 for every outcome (only a usage error exits 2) and reports through the
 * `--json` payload and the PR comment it renders. It returns from `main`
 * rather than calling `process.exit(0)` so Node can flush stdout — exiting
 * eagerly truncates the JSON when it is piped (`… --json | jq`) instead of
 * redirected to a file.
 */

import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"

import consola from "consola"

/* -------------------------------- types ---------------------------------- */

export type EntryType = "docs" | "story"

/** One docs page or story, normalized out of the raw Storybook index. */
export interface SnapshotEntry {
  /** Storybook id — also the `?path=` URL segment. */
  id: string
  type: EntryType
  /** Sidebar path, e.g. `Components/Button`. */
  title: string
  /** Leaf name, e.g. `Default` or `Documentation`. */
  name: string
  /** Source file, relative to `packages/react` (e.g. `./src/x/y.stories.tsx`). */
  importPath: string
  /** The documented component's source file, when Storybook resolved one. */
  componentPath?: string
  /** Named export backing a story. Absent for docs pages. */
  exportName?: string
  tags: string[]
  /** Whether the entry actually reaches the sidebar. See module docs. */
  visible: boolean
  /** sha256 of `importPath`'s contents, or `""` when unreadable. */
  hash: string
}

export interface Snapshot {
  /** Keyed by Storybook id. */
  entries: Record<string, SnapshotEntry>
}

/** A pair of the same logical entry on both sides. */
export interface EntryChange {
  base: SnapshotEntry
  head: SnapshotEntry
}

export interface DiffResult {
  /** Gone from the index entirely. */
  removed: SnapshotEntry[]
  /** Still indexed, no longer in the sidebar. */
  hidden: EntryChange[]
  /** Renamed or relocated in the nav tree. */
  moved: EntryChange[]
  /** Newly exposed. */
  added: SnapshotEntry[]
  /** New, but not visible (e.g. a snapshot-only story). */
  addedHidden: SnapshotEntry[]
  /** Was hidden, now visible. */
  revealed: EntryChange[]
  /**
   * Same page, but it is now generated by a different *mechanism* — an
   * `.mdx` file took over a page Storybook used to auto-generate, or vice
   * versa. The page survives; the content behind it was replaced.
   */
  docsSourceReplaced: EntryChange[]
  /** Same page and same mechanism, but the source file moved or was renamed. */
  sourceMoved: EntryChange[]
  /** Source file content changed. */
  updated: EntryChange[]
  /** Maturity tags changed. */
  retagged: EntryChange[]
  /**
   * Ids of `removed` docs pages whose component still has indexed stories.
   * A deleted component takes its stories with it; a page that vanished while
   * its stories live on lost its `autodocs` tag (or gained `!autodocs`).
   */
  autodocsLikelyDropped: string[]
  /** Set when a side's snapshot was missing, so counts are not trustworthy. */
  incomplete?: string
  /** True when anything regression-shaped (removed / hidden) was found. */
  hasLosses: boolean
  lossTotal: number
}

/* ------------------------------ normalizing ------------------------------- */

/** Tags that describe maturity rather than mechanics — worth reporting. */
const MATURITY_TAGS = new Set([
  "experimental",
  "stable",
  "deprecated",
  "internal",
])

/**
 * An entry reaches the sidebar only when Storybook's own `dev` gate is present
 * and this repo's `no-sidebar` filter does not exclude it.
 */
export function isVisible(tags: string[]): boolean {
  return tags.includes("dev") && !tags.includes("no-sidebar")
}

/**
 * Whether a page is written by hand (`.mdx`) rather than auto-generated from a
 * story file. The two are interchangeable for the same page id — attaching an
 * MDX file to a component silently takes over the `autodocs` page — so the
 * extension is what tells the mechanisms apart.
 */
export function isMdxSource(importPath: string): boolean {
  return /\.mdx$/.test(importPath)
}

/** sha256 of a source file's contents, newline-normalized. `""` if unreadable. */
function hashFile(repoRoot: string, importPath: string): string {
  // Storybook emits `./src/...`, relative to the Storybook config's root.
  const abs = path.resolve(repoRoot, importPath)
  if (!existsSync(abs)) return ""
  try {
    const text = readFileSync(abs, "utf8").replace(/\r\n/g, "\n")
    return createHash("sha256").update(text).digest("hex").slice(0, 16)
  } catch {
    return ""
  }
}

/** Raw `storybook index` entry — only the fields this check consumes. */
interface RawEntry {
  id?: unknown
  type?: unknown
  title?: unknown
  name?: unknown
  importPath?: unknown
  componentPath?: unknown
  exportName?: unknown
  tags?: unknown
}

const str = (v: unknown): string | undefined =>
  typeof v === "string" && v.length > 0 ? v : undefined

/**
 * Normalize the raw `storybook index -o` output into a snapshot.
 *
 * `repoRoot` is the directory the `importPath`s are relative to
 * (`packages/react`); source files are hashed from there so the diff can tell
 * "this page's content changed" from "this page moved".
 */
export function snapshotFromIndex(
  rawIndexJson: string,
  repoRoot: string
): Snapshot {
  const parsed: unknown = JSON.parse(rawIndexJson)
  const rawEntries =
    parsed && typeof parsed === "object" && "entries" in parsed
      ? ((parsed as { entries: Record<string, RawEntry> }).entries ?? {})
      : {}

  // One file is read once even when it backs twenty stories.
  const hashCache = new Map<string, string>()
  const entries: Record<string, SnapshotEntry> = {}

  for (const raw of Object.values(rawEntries)) {
    const id = str(raw.id)
    const importPath = str(raw.importPath)
    const type = raw.type === "docs" ? "docs" : "story"
    if (!id || !importPath) continue

    let hash = hashCache.get(importPath)
    if (hash === undefined) {
      hash = hashFile(repoRoot, importPath)
      hashCache.set(importPath, hash)
    }

    const tags = Array.isArray(raw.tags)
      ? raw.tags.filter((t): t is string => typeof t === "string").sort()
      : []

    entries[id] = {
      id,
      type,
      title: str(raw.title) ?? "",
      name: str(raw.name) ?? "",
      importPath,
      componentPath: str(raw.componentPath),
      exportName: str(raw.exportName),
      tags,
      visible: isVisible(tags),
      hash,
    }
  }

  return { entries }
}

/* -------------------------------- diffing -------------------------------- */

/**
 * Identity keys used to pair a disappeared id with a new one, tried in
 * descending confidence. Anything that matches is a move (rename / relocation),
 * not a deletion.
 */
function moveKeys(e: SnapshotEntry): string[] {
  const leaf = e.exportName ?? e.name
  const keys = [`import:${e.importPath}::${leaf}`]
  if (e.componentPath) keys.push(`component:${e.componentPath}::${leaf}`)
  // An MDX page that moved without being edited keeps its content hash.
  if (e.hash) keys.push(`hash:${e.hash}::${leaf}`)
  return keys
}

/** Maturity tags only, so mechanical tag churn (`play-fn`, …) stays quiet. */
function maturityOf(e: SnapshotEntry): string[] {
  return e.tags.filter((t) => MATURITY_TAGS.has(t))
}

export function diffSnapshots(base: Snapshot, head: Snapshot): DiffResult {
  const result: DiffResult = {
    removed: [],
    hidden: [],
    moved: [],
    added: [],
    addedHidden: [],
    revealed: [],
    docsSourceReplaced: [],
    sourceMoved: [],
    updated: [],
    retagged: [],
    autodocsLikelyDropped: [],
    hasLosses: false,
    lossTotal: 0,
  }

  const baseIds = new Set(Object.keys(base.entries))
  const headIds = new Set(Object.keys(head.entries))

  // ── entries present on both sides ──────────────────────────────────────
  for (const id of Array.from(baseIds)) {
    if (!headIds.has(id)) continue
    const b = base.entries[id]!
    const h = head.entries[id]!

    if (b.visible && !h.visible) {
      result.hidden.push({ base: b, head: h })
    } else if (!b.visible && h.visible) {
      result.revealed.push({ base: b, head: h })
    }

    // A page whose source file changed identity is not an edit — something
    // else is now generating it. Reported on its own rather than folded into
    // `updated`, where a silent takeover would read as a routine tweak.
    if (b.importPath !== h.importPath) {
      if (isMdxSource(b.importPath) === isMdxSource(h.importPath)) {
        result.sourceMoved.push({ base: b, head: h })
      } else {
        result.docsSourceReplaced.push({ base: b, head: h })
      }
    } else if (h.visible && b.hash && h.hash && b.hash !== h.hash) {
      // Content edits are only interesting for pages someone can reach.
      result.updated.push({ base: b, head: h })
    }

    const bm = maturityOf(b).join(",")
    const hm = maturityOf(h).join(",")
    if (bm !== hm) result.retagged.push({ base: b, head: h })
  }

  // ── ids that vanished vs. ids that appeared: pair up the moves ──────────
  const gone = Array.from(baseIds)
    .filter((id) => !headIds.has(id))
    .map((id) => base.entries[id]!)
  const fresh = Array.from(headIds)
    .filter((id) => !baseIds.has(id))
    .map((id) => head.entries[id]!)

  // Index the new ids by every identity key, then consume matches so one new
  // entry can only ever absorb a single disappeared one.
  const freshByKey = new Map<string, SnapshotEntry[]>()
  for (const e of fresh) {
    for (const k of moveKeys(e)) {
      const list = freshByKey.get(k)
      if (list) list.push(e)
      else freshByKey.set(k, [e])
    }
  }
  const claimed = new Set<string>()

  for (const b of gone) {
    let match: SnapshotEntry | undefined
    for (const k of moveKeys(b)) {
      match = freshByKey.get(k)?.find((c) => !claimed.has(c.id))
      if (match) break
    }
    if (match) {
      claimed.add(match.id)
      // A "move" that also drops out of the sidebar is still a loss.
      if (b.visible && !match.visible) {
        result.hidden.push({ base: b, head: match })
      } else {
        result.moved.push({ base: b, head: match })
      }
      continue
    }
    // Only a page that *was* reachable counts as a loss.
    if (b.visible) result.removed.push(b)
  }

  for (const h of fresh) {
    if (claimed.has(h.id)) continue
    if (h.visible) result.added.push(h)
    else result.addedHidden.push(h)
  }

  const bySortKey = (a: SnapshotEntry, b: SnapshotEntry): number =>
    a.title.localeCompare(b.title) || a.name.localeCompare(b.name)
  result.removed.sort(bySortKey)
  result.added.sort(bySortKey)
  result.addedHidden.sort(bySortKey)
  for (const list of [
    result.hidden,
    result.moved,
    result.revealed,
    result.docsSourceReplaced,
    result.sourceMoved,
    result.updated,
    result.retagged,
  ]) {
    list.sort((x, y) => bySortKey(x.head, y.head))
  }

  // A docs page that vanished while its component still has indexed stories
  // points at a tag change rather than a deleted component.
  const headTitles = new Set(Object.values(head.entries).map((e) => e.title))
  result.autodocsLikelyDropped = result.removed
    .filter((e) => e.type === "docs" && headTitles.has(e.title))
    .map((e) => e.id)

  result.lossTotal = result.removed.length + result.hidden.length
  result.hasLosses = result.lossTotal > 0
  return result
}

/* ------------------------------- rendering ------------------------------- */

/** Public Storybook. Overridable so a preview deployment can be linked instead. */
const DEFAULT_STORYBOOK_URL = "https://f0.factorial.dev"

/**
 * Markers that let the Chromatic workflow retarget this comment's links once
 * its Storybook build exists.
 *
 * This check finishes in about a minute; a Chromatic build takes several. So
 * the comment is posted immediately against the *public* Storybook, and
 * `chromatic.yml` later rewrites every link in place to point at the PR's own
 * build — where pages added by the PR actually resolve. Since the comment
 * already carries every URL, the rewrite needs nothing from this run: it reads
 * the current base out of `BASE_MARKER`, swaps it, and replaces the note
 * between the `LINK_NOTE` markers. Re-running is a no-op, and a new commit
 * reposts the public version and gets rewritten again.
 */
const BASE_MARKER = (baseUrl: string): string =>
  `<!-- storybook-base: ${baseUrl} -->`
const LINK_NOTE_START = "<!-- link-note:start -->"
const LINK_NOTE_END = "<!-- link-note:end -->"

/** Deep link to an entry in the deployed Storybook. */
export function entryUrl(e: SnapshotEntry, baseUrl: string): string {
  const kind = e.type === "docs" ? "docs" : "story"
  return `${baseUrl.replace(/\/+$/, "")}/?path=/${kind}/${e.id}`
}

/** `Components/Button › Default` — how an entry reads in the sidebar. */
function label(e: SnapshotEntry): string {
  return e.type === "docs" && e.name === "Documentation"
    ? e.title
    : `${e.title} › ${e.name}`
}

function link(e: SnapshotEntry, baseUrl: string): string {
  return `[${label(e)}](${entryUrl(e, baseUrl)})`
}

/** Why an entry stopped reaching the sidebar, in reviewer-facing terms. */
function hiddenReason(c: EntryChange): string {
  const lost = c.base.tags.filter((t) => !c.head.tags.includes(t))
  const gained = c.head.tags.filter((t) => !c.base.tags.includes(t))
  const reasons: string[] = []
  if (gained.includes("no-sidebar")) {
    reasons.push("gained the `no-sidebar` tag")
  }
  if (lost.includes("dev")) {
    reasons.push("lost the `dev` tag (tagged `!dev`)")
  }
  if (reasons.length === 0) {
    if (gained.length > 0) reasons.push(`gained ${fmtTags(gained)}`)
    if (lost.length > 0) reasons.push(`lost ${fmtTags(lost)}`)
  }
  return reasons.join(", ") || "no longer passes the sidebar filters"
}

function fmtTags(tags: string[]): string {
  return tags.map((t) => `\`${t}\``).join(", ")
}

/**
 * Group entries by source file, so a single edit to a `.stories.tsx` reads as
 * one line with its stories listed beneath it. Docs pages are one-per-file
 * already and pass through unchanged.
 */
function groupByFile(entries: SnapshotEntry[]): Map<string, SnapshotEntry[]> {
  const groups = new Map<string, SnapshotEntry[]>()
  for (const e of entries) {
    const list = groups.get(e.importPath)
    if (list) list.push(e)
    else groups.set(e.importPath, [e])
  }
  return groups
}

/** `./src/x/y.tsx` → `src/x/y.tsx`, for readable inline code spans. */
function tidyPath(p: string): string {
  return p.replace(/^\.\//, "")
}

/** Entries listed under a single source file before the rest is collapsed. */
const PER_FILE_CAP = 8

/**
 * Render a file-grouped bullet list: one line per source file, each entry
 * linked beneath it. Capped twice — at `fileCap` files and at `PER_FILE_CAP`
 * entries per file — so one enormous stories file cannot crowd out the rest.
 */
function renderGrouped(
  entries: SnapshotEntry[],
  baseUrl: string,
  fileCap: number,
  suffix?: (e: SnapshotEntry) => string
): string[] {
  const { shown, rest } = capped(
    Array.from(groupByFile(entries).entries()),
    fileCap
  )
  const out: string[] = []
  for (const [file, group] of shown) {
    out.push(`- \`${tidyPath(file)}\``)
    const inner = capped(group, PER_FILE_CAP)
    for (const e of inner.shown) {
      out.push(`  - ${link(e, baseUrl)}${suffix ? suffix(e) : ""}`)
    }
    if (inner.rest > 0) {
      out.push(`  - _…and ${inner.rest} more in this file._`)
    }
  }
  out.push(...restLine(rest, "file(s)"))
  return out
}

/**
 * Per-section item caps. A PR touching one component produces a handful of
 * entries, but a long-lived branch can produce hundreds — and a single global
 * truncation would cut whole sections off the bottom, which is where the
 * *losses* would be if they were rendered last. Capping each section instead
 * keeps every heading present, and the losses are rendered first and capped
 * most generously because they are the reason this check exists.
 */
const SECTION_CAPS = {
  removed: 60,
  hidden: 60,
  docsSourceReplaced: 40,
  sourceMoved: 30,
  moved: 40,
  added: 40,
  revealed: 40,
  updated: 25,
  retagged: 30,
  addedHidden: 20,
} as const

/** Split a list into the part that gets rendered and the count left over. */
function capped<T>(list: T[], cap: number): { shown: T[]; rest: number } {
  return { shown: list.slice(0, cap), rest: Math.max(0, list.length - cap) }
}

/** `…and 12 more` footer for a capped section. */
function restLine(rest: number, noun: string): string[] {
  return rest > 0 ? ["", `_…and ${rest} more ${noun}._`] : []
}

/**
 * GitHub rejects comment bodies over 65536 bytes. The per-section caps above
 * keep us well clear of that; this is the final backstop.
 */
const COMMENT_BYTE_BUDGET = 55000

/**
 * `tail` is always kept, with its size reserved up front. It carries the
 * link-base markers the Chromatic workflow rewrites, and truncating those away
 * would silently cost the comment its retargeted links.
 */
function capCommentSize(lines: string[], tail: string[] = []): string[] {
  const sizeOf = (ls: string[]): number =>
    ls.reduce((n, l) => n + Buffer.byteLength(l, "utf8") + 1, 0)
  const budget = COMMENT_BYTE_BUDGET - sizeOf(tail)
  const out: string[] = []
  let bytes = 0
  for (const line of lines) {
    const lineBytes = Buffer.byteLength(line, "utf8") + 1
    if (bytes + lineBytes > budget) {
      out.push("")
      out.push(
        "_…truncated to stay under GitHub's comment size limit. The counts in the summary above are complete._"
      )
      return out.concat(tail)
    }
    out.push(line)
    bytes += lineBytes
  }
  return out.concat(tail)
}

/**
 * Render the PR comment body. Posted whether or not anything changed, so a
 * prior "⚠️ pages lost" comment resolves back to "✅" once fixed.
 */
export function buildCommentMarkdown(
  diff: DiffResult,
  baseUrl: string = DEFAULT_STORYBOOK_URL
): string {
  // First line, so the Chromatic rewrite can find the base it must replace.
  const lines: string[] = [BASE_MARKER(baseUrl), ""]
  const docs = (list: SnapshotEntry[]): number =>
    list.filter((e) => e.type === "docs").length

  if (diff.incomplete) {
    lines.push("## 📚 Storybook docs — comparison unavailable")
    lines.push("")
    lines.push(
      `Could not compare against \`main\`: ${diff.incomplete}. An index build may have failed — check this workflow's logs.`
    )
    return capCommentSize(lines).join("\n")
  }

  const replaced = diff.docsSourceReplaced.length
  const droppedAutodocs = new Set(diff.autodocsLikelyDropped)

  if (diff.hasLosses) {
    lines.push(`## ⚠️ Storybook pages lost (${diff.lossTotal})`)
    lines.push("")
    lines.push(
      "These pages are reachable in the sidebar on `main` but **not on this branch**. " +
        "If that is intentional, say so in the PR description. If it is not, it is usually a " +
        "component moved to a directory that `.storybook/main.ts` does not list, a dropped " +
        "`autodocs` tag, or a `no-sidebar` / `!dev` tag added by accident."
    )
  } else if (replaced > 0) {
    // Not "no pages lost": the pages are all still there, but the content
    // behind one of them was swapped out, which is its own kind of loss.
    lines.push(`## ⚠️ Storybook docs source replaced (${replaced})`)
    lines.push("")
    lines.push(
      "No page disappeared, but a page is now generated by something different than it was on `main`. See below."
    )
  } else {
    lines.push("## ✅ Storybook docs — no pages lost")
    lines.push("")
    lines.push("Every page reachable on `main` is still reachable here.")
  }

  // ── headline counts ────────────────────────────────────────────────────
  const summary: string[] = []
  if (diff.removed.length > 0) summary.push(`🗑️ ${diff.removed.length} removed`)
  if (diff.hidden.length > 0) summary.push(`🙈 ${diff.hidden.length} hidden`)
  if (replaced > 0) summary.push(`♻️ ${replaced} source replaced`)
  if (diff.sourceMoved.length > 0) {
    summary.push(`🚚 ${diff.sourceMoved.length} source moved`)
  }
  if (diff.added.length > 0) summary.push(`➕ ${diff.added.length} added`)
  if (diff.moved.length > 0) summary.push(`📦 ${diff.moved.length} moved`)
  if (diff.updated.length > 0) summary.push(`✏️ ${diff.updated.length} updated`)
  if (diff.revealed.length > 0) {
    summary.push(`👁️ ${diff.revealed.length} newly visible`)
  }
  if (diff.retagged.length > 0) {
    summary.push(`🏷️ ${diff.retagged.length} maturity changed`)
  }
  if (summary.length > 0) {
    lines.push("")
    lines.push(summary.join(" · "))
  }

  /* --- losses, first and uncollapsed --- */

  if (diff.removed.length > 0) {
    lines.push("")
    lines.push(`### 🗑️ Removed — gone from Storybook (${diff.removed.length})`)
    lines.push("")
    lines.push(
      ...renderGrouped(diff.removed, baseUrl, SECTION_CAPS.removed, (e) =>
        droppedAutodocs.has(e.id)
          ? " — **docs page gone while its stories remain**: `autodocs` was probably dropped (or `!autodocs` added)"
          : ` — was \`${e.type}\``
      )
    )
  }

  if (diff.hidden.length > 0) {
    const { shown, rest } = capped(diff.hidden, SECTION_CAPS.hidden)
    lines.push("")
    lines.push(
      `### 🙈 No longer in the sidebar (${diff.hidden.length})\n\nStill indexed — so tests keep running — but not reachable by a human.`
    )
    lines.push("")
    for (const c of shown) {
      lines.push(
        `- ${link(c.head, baseUrl)} — ${hiddenReason(c)} · \`${tidyPath(c.head.importPath)}\``
      )
    }
    lines.push(...restLine(rest, "hidden"))
  }

  if (replaced > 0) {
    const { shown, rest } = capped(
      diff.docsSourceReplaced,
      SECTION_CAPS.docsSourceReplaced
    )
    lines.push("")
    lines.push(`### ♻️ Docs source replaced (${replaced})`)
    lines.push("")
    lines.push(
      "The page kept its URL, but something else generates it now. Attaching an `.mdx` " +
        "file to a component **silently takes over** its auto-generated `autodocs` page: " +
        "the props table and the story previews that page used to show are gone unless the " +
        "new file renders them itself. Check that nothing documented on `main` was dropped."
    )
    lines.push("")
    for (const c of shown) {
      const direction = isMdxSource(c.head.importPath)
        ? "auto-generated → hand-written MDX"
        : "hand-written MDX → auto-generated"
      lines.push(`- ${link(c.head, baseUrl)} — ${direction}`)
      lines.push(`  - was \`${tidyPath(c.base.importPath)}\``)
      lines.push(`  - now \`${tidyPath(c.head.importPath)}\``)
    }
    lines.push(...restLine(rest, "replaced"))
  }

  /* --- everything else --- */

  if (diff.sourceMoved.length > 0) {
    // Grouped by the file *pair*: renaming one directory moves every story in
    // it, and that should read as one relocation, not twenty findings.
    const pairs = new Map<string, EntryChange[]>()
    for (const c of diff.sourceMoved) {
      const key = `${c.base.importPath} ${c.head.importPath}`
      const list = pairs.get(key)
      if (list) list.push(c)
      else pairs.set(key, [c])
    }
    const { shown, rest } = capped(
      Array.from(pairs.values()),
      SECTION_CAPS.sourceMoved
    )
    lines.push("")
    lines.push(
      `<details><summary>🚚 Source file moved — ${diff.sourceMoved.length} entr${diff.sourceMoved.length === 1 ? "y" : "ies"} across ${pairs.size} file(s)</summary>`
    )
    lines.push("")
    lines.push(
      "Same page, same mechanism — the file behind it was relocated or renamed. The Storybook URLs are unchanged."
    )
    lines.push("")
    for (const group of shown) {
      const first = group[0]!
      lines.push(
        `- \`${tidyPath(first.base.importPath)}\` → \`${tidyPath(first.head.importPath)}\``
      )
      const inner = capped(group, PER_FILE_CAP)
      for (const c of inner.shown) {
        lines.push(`  - ${link(c.head, baseUrl)}`)
      }
      if (inner.rest > 0) {
        lines.push(`  - _…and ${inner.rest} more in this file._`)
      }
    }
    lines.push(...restLine(rest, "file(s)"))
    lines.push("</details>")
  }

  if (diff.moved.length > 0) {
    const { shown, rest } = capped(diff.moved, SECTION_CAPS.moved)
    lines.push("")
    lines.push(`### 📦 Moved or renamed (${diff.moved.length})`)
    lines.push("")
    for (const c of shown) {
      const from =
        c.base.title === c.head.title
          ? `\`${c.base.name}\` → \`${c.head.name}\``
          : `\`${c.base.title}\` → \`${c.head.title}\``
      lines.push(`- ${link(c.head, baseUrl)} — was ${from}`)
    }
    lines.push(...restLine(rest, "moved"))
    lines.push("")
    lines.push(
      "_Existing links and bookmarks to the old path will 404 — the Storybook id changed._"
    )
  }

  if (diff.added.length > 0) {
    const docCount = docs(diff.added)
    lines.push("")
    lines.push(`### ➕ Added (${diff.added.length})`)
    lines.push("")
    if (docCount > 0) {
      lines.push(
        `${docCount} new docs page(s) and ${diff.added.length - docCount} new story/stories.`
      )
      lines.push("")
    }
    lines.push(...renderGrouped(diff.added, baseUrl, SECTION_CAPS.added))
  }

  if (diff.revealed.length > 0) {
    const { shown, rest } = capped(diff.revealed, SECTION_CAPS.revealed)
    lines.push("")
    lines.push(`### 👁️ Newly visible (${diff.revealed.length})`)
    lines.push("")
    lines.push("Already indexed on `main`, now surfaced in the sidebar.")
    lines.push("")
    for (const c of shown) {
      lines.push(`- ${link(c.head, baseUrl)}`)
    }
    lines.push(...restLine(rest, "newly visible"))
  }

  if (diff.updated.length > 0) {
    const heads = diff.updated.map((c) => c.head)
    const fileCount = groupByFile(heads).size
    lines.push("")
    lines.push(
      `<details><summary>✏️ Updated — ${diff.updated.length} page(s)/story/stories across ${fileCount} file(s)</summary>`
    )
    lines.push("")
    lines.push(
      "The source file behind each of these changed. Detection is per *file*, so editing one story flags its siblings too."
    )
    lines.push("")
    lines.push(...renderGrouped(heads, baseUrl, SECTION_CAPS.updated))
    lines.push("</details>")
  }

  if (diff.retagged.length > 0) {
    const { shown, rest } = capped(diff.retagged, SECTION_CAPS.retagged)
    lines.push("")
    lines.push(
      `<details><summary>🏷️ Maturity changed — ${diff.retagged.length}</summary>`
    )
    lines.push("")
    for (const c of shown) {
      const before = maturityOf(c.base)
      const after = maturityOf(c.head)
      lines.push(
        `- ${link(c.head, baseUrl)} — ${before.length ? fmtTags(before) : "_none_"} → ${after.length ? fmtTags(after) : "_none_"}`
      )
    }
    lines.push(...restLine(rest, "retagged"))
    lines.push("</details>")
  }

  if (diff.addedHidden.length > 0) {
    const { shown, rest } = capped(diff.addedHidden, SECTION_CAPS.addedHidden)
    lines.push("")
    lines.push(
      `<details><summary>🔇 Added but not in the sidebar — ${diff.addedHidden.length}</summary>`
    )
    lines.push("")
    lines.push(
      "Expected for snapshot-only and internal stories (`no-sidebar` / `!dev`). Listed in case one was meant to be visible."
    )
    lines.push("")
    for (const e of shown) {
      lines.push(`- \`${label(e)}\` — ${fmtTags(maturityOf(e)) || "_no tags_"}`)
    }
    lines.push(...restLine(rest, "added but hidden"))
    lines.push("</details>")
  }

  // Always emitted, so the Chromatic workflow always has somewhere to put the
  // link to this PR's Storybook — and so the reader is told, before clicking,
  // which Storybook these links actually point at. Passed as the reserved tail
  // so a large diff cannot truncate the markers away.
  const tail = [
    "",
    LINK_NOTE_START,
    `_Links point at the [public Storybook](${baseUrl.replace(/\/+$/, "")}), which is built from \`main\` — pages this PR adds resolve there only once it merges. Waiting on the Chromatic build to retarget them at this PR._`,
    LINK_NOTE_END,
    "",
    "_Snapshot of the Storybook index (docs pages + stories) compared against `main`. Non-blocking._",
  ]

  return capCommentSize(lines, tail).join("\n")
}

/* --------------------------------- main ---------------------------------- */

function parseArgs(): {
  fromIndex?: string
  out?: string
  repoRoot: string
  base?: string
  head?: string
  baseUrl: string
  json: boolean
} {
  const args = process.argv.slice(2)
  const valueOf = (flag: string): string | undefined => {
    const i = args.indexOf(flag)
    return i !== -1 && args[i + 1] ? args[i + 1] : undefined
  }
  return {
    fromIndex: valueOf("--from-index"),
    out: valueOf("--out"),
    repoRoot: valueOf("--repo-root") ?? process.cwd(),
    base: valueOf("--base"),
    head: valueOf("--head"),
    baseUrl: valueOf("--storybook-url") ?? DEFAULT_STORYBOOK_URL,
    json: args.includes("--json"),
  }
}

/** Read a snapshot, or return `undefined` when the file is missing/corrupt. */
function readSnapshot(file: string): Snapshot | undefined {
  if (!existsSync(file)) return undefined
  try {
    const parsed: unknown = JSON.parse(readFileSync(file, "utf8"))
    if (
      parsed &&
      typeof parsed === "object" &&
      "entries" in parsed &&
      (parsed as Snapshot).entries
    ) {
      return parsed as Snapshot
    }
    return undefined
  } catch {
    return undefined
  }
}

function emptyDiff(reason: string): DiffResult {
  return {
    ...diffSnapshots({ entries: {} }, { entries: {} }),
    incomplete: reason,
  }
}

function main(): void {
  const { fromIndex, out, repoRoot, base, head, baseUrl, json } = parseArgs()

  // ── mode 1: normalize a raw index into a snapshot ──────────────────────
  if (fromIndex) {
    if (!out) {
      consola.error(
        "Usage: tsx .scripts/check-docs-index.ts --from-index <raw.json> --out <snap.json> [--repo-root <dir>]"
      )
      process.exit(2)
    }
    const snapshot = snapshotFromIndex(
      readFileSync(fromIndex, "utf8"),
      repoRoot
    )
    mkdirSync(path.dirname(path.resolve(out)), { recursive: true })
    writeFileSync(out, JSON.stringify(snapshot, null, 0) + "\n")
    const all = Object.values(snapshot.entries)
    consola.success(
      `Snapshot written: ${all.length} entries (${all.filter((e) => e.type === "docs").length} docs, ${all.filter((e) => e.visible).length} visible) → ${out}`
    )
    return
  }

  // ── mode 2: diff two snapshots ─────────────────────────────────────────
  if (!base || !head) {
    consola.error(
      "Usage: tsx .scripts/check-docs-index.ts --base <snap.json> --head <snap.json> [--json]"
    )
    process.exit(2)
  }

  const baseSnap = readSnapshot(base)
  const headSnap = readSnapshot(head)

  let diff: DiffResult
  if (!baseSnap && !headSnap) {
    diff = emptyDiff("neither snapshot could be read")
  } else if (!baseSnap) {
    diff = emptyDiff("the `main` snapshot is missing")
  } else if (!headSnap) {
    diff = emptyDiff("this branch's snapshot is missing")
  } else {
    diff = diffSnapshots(baseSnap, headSnap)
  }

  if (json) {
    process.stdout.write(
      JSON.stringify(
        { ...diff, commentMarkdown: buildCommentMarkdown(diff, baseUrl) },
        null,
        2
      ) + "\n"
    )
    return
  }

  if (diff.incomplete) {
    consola.warn(`Comparison unavailable: ${diff.incomplete}`)
    return
  }

  for (const e of diff.removed) consola.error(`removed: ${label(e)}`)
  for (const c of diff.hidden) {
    consola.error(`hidden: ${label(c.head)} — ${hiddenReason(c)}`)
  }
  for (const c of diff.docsSourceReplaced) {
    consola.error(
      `docs source replaced: ${label(c.head)} — ${tidyPath(c.base.importPath)} → ${tidyPath(c.head.importPath)}`
    )
  }
  for (const c of diff.sourceMoved) {
    consola.info(
      `source moved: ${label(c.head)} — ${tidyPath(c.base.importPath)} → ${tidyPath(c.head.importPath)}`
    )
  }
  for (const c of diff.moved) {
    consola.info(`moved: ${label(c.base)} → ${label(c.head)}`)
  }
  for (const e of diff.added) consola.success(`added: ${label(e)}`)
  for (const c of diff.revealed)
    consola.success(`now visible: ${label(c.head)}`)
  consola.log("")
  consola.info(
    `${diff.updated.length} updated · ${diff.retagged.length} maturity changed · ${diff.addedHidden.length} added but hidden`
  )
  if (diff.hasLosses) {
    consola.error(`${diff.lossTotal} Storybook page(s) no longer reachable.`)
  } else {
    consola.success("No Storybook pages lost.")
  }
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (process.argv[1] && /check-docs-index\.(ts|js)$/.test(process.argv[1])) {
  main()
}
