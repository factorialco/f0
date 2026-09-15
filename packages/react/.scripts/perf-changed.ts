#!/usr/bin/env tsx
/**
 * perf-changed.ts
 *
 * Measure the performance-panel metrics of every story a PR adds or changes,
 * and reduce them to the handful of facts worth a human's attention.
 *
 *   tsx .scripts/perf-changed.ts --compare-commit origin/main --out perf-report.json
 *
 * The JSON it writes is the input to the 🚀 Performance agentic check, which
 * turns it into a PR comment. This script deliberately does NOT decide whether a
 * PR is acceptable: it has no thresholds and always exits 0 (barring a genuine
 * crash). It reports; a human reads.
 *
 * ── What counts as "worth highlighting" ───────────────────────────────────
 * Emitting every number for every story would produce a wall of noise nobody
 * reads. So each story carries a `highlights` array, and only the deterministic
 * metrics can produce one — see perf-metrics.ts for why the timing numbers are
 * not trustworthy enough to draw a reader's eye to (they swing run to run and
 * include axe-core's work, not just the component's).
 *
 * The highlight rules encode "this is unusual enough that someone should look",
 * not "this is forbidden":
 *
 *   - forcedReflows > 0     a layout read interleaved with writes (offsetWidth
 *                           after a style change) — the classic layout thrash.
 *                           Measured base rate across the library: 0 of 40.
 *   - cls >= CLS_*         cumulative layout shift above the noise floor —
 *                           by score, never by shift count (not reproducible)
 *   - slowUpdates > 0       an update that blew a 16ms frame budget (2 of 40)
 *   - cascades > CASCADE_*  renders scheduling further renders, well past the
 *                           library norm — see the threshold block for why this
 *                           is not simply "> 0"
 *   - updates > UPDATE_*    re-rendering well past mount without interaction
 *   - domElements > DOM_*   an unusually heavy tree for one story
 *
 * A story with nothing notable still appears in the JSON, with an empty
 * `highlights` array, so the agent can say "the other six look fine" instead of
 * silently dropping them.
 */
import { execFileSync } from "node:child_process"
import { writeFileSync } from "node:fs"

import consola from "consola"

import {
  DEFAULT_SETTLE_MS,
  detectStorybookUrl,
  fetchIndex,
  measure,
  note,
  type StoryIndexEntry,
  type StoryReport,
} from "./perf-metrics"

/**
 * Attention thresholds — not limits. Nothing fails for crossing one; crossing
 * one only means the comment mentions it.
 *
 * These are set from the measured distribution across the library rather than
 * picked by feel, because the intuitive rules are wrong here. "Flag any render
 * cascade" sounds right and is useless: every one of the 102 snapshot stories
 * measured has at least one cascade (median 3), because Storybook's own
 * decorators and providers re-render around the story. A rule that fires on
 * 100% of stories highlights nothing.
 *
 * Measured across 102 snapshot stories (the heaviest population — a snapshot
 * story renders every variant at once, so thresholds drawn from it do not fire
 * on ordinary stories):
 *
 *   metric        p50   p90   p95   max
 *   cascades        3     6     8    18
 *   updates         6    10    13    26
 *   domElements    89   678   884  5250
 *
 * Each threshold sits at roughly p95, so about one story in twenty is
 * mentioned for it.
 */
const CASCADE_HIGHLIGHT_THRESHOLD = 8
const UPDATE_HIGHLIGHT_THRESHOLD = 13
const DOM_HIGHLIGHT_THRESHOLD = 900

/**
 * Cumulative layout shift score worth mentioning. See highlightsFor for why
 * this is a score threshold and not "any layout shift".
 */
const CLS_HIGHLIGHT_THRESHOLD = 0.01

/** A story plus the reasons it is worth mentioning. */
type ChangedStoryReport = StoryReport & {
  /** Story file this story came from, repo-relative. */
  storyFile: string
  /** Whether the story file is newly added by this PR. */
  isNew: boolean
  highlights: string[]
}

/**
 * Story files added or modified versus the comparison commit.
 *
 * `--diff-filter=d` keeps additions and modifications while dropping deletions:
 * a deleted story cannot be measured, and its absence is not a performance
 * finding.
 *
 * The `:(top)` pathspec prefix anchors the glob to the repository root. Without
 * it the pathspec resolves relative to the current directory, so running this
 * from `packages/react` (which is where `pnpm --filter` puts you) silently
 * matches nothing and the script reports "no story files changed" on a PR that
 * changed plenty.
 */
function changedStoryFiles(compareCommit: string): {
  file: string
  isNew: boolean
}[] {
  const run = (args: string[]) =>
    execFileSync("git", args, { encoding: "utf-8" })
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)

  const changed = run([
    "diff",
    "--name-only",
    "--diff-filter=d",
    `${compareCommit}...HEAD`,
    "--",
    ":(top)packages/react/src/**/*.stories.tsx",
  ])
  const added = new Set(
    run([
      "diff",
      "--name-only",
      "--diff-filter=A",
      `${compareCommit}...HEAD`,
      "--",
      ":(top)packages/react/src/**/*.stories.tsx",
    ])
  )

  return changed.map((file) => ({ file, isNew: added.has(file) }))
}

/**
 * Map a repo-relative story file to its stories in the index.
 *
 * The index records `importPath` package-relative ("./src/components/F0Button/
 * index.stories.tsx") while git reports repo-relative ("packages/react/src/…"),
 * so compare on the normalized tail. Matching on the full path rather than the
 * basename matters — `index.stories.tsx` is the same basename for most
 * components in the repo.
 */
function storiesForFile(
  index: StoryIndexEntry[],
  repoRelativeFile: string
): StoryIndexEntry[] {
  const normalize = (p: string) =>
    p.replace(/^\.\//, "").replace(/^packages\/react\//, "")
  const target = normalize(repoRelativeFile)
  return index.filter((e) => e.importPath && normalize(e.importPath) === target)
}

/** Reduce a measurement to the facts worth surfacing. */
function highlightsFor(report: StoryReport): string[] {
  const d = report.deterministic
  const out: string[] = []

  if (d.cascades > CASCADE_HIGHLIGHT_THRESHOLD) {
    out.push(
      `${d.cascades} render cascades — renders that scheduled another render (typical is 3, attention threshold ${CASCADE_HIGHLIGHT_THRESHOLD})`
    )
  }
  if (d.forcedReflows > 0) {
    out.push(
      `${d.forcedReflows} forced reflow${d.forcedReflows === 1 ? "" : "s"} — layout was read back synchronously after a style write`
    )
  }
  // Layout shift is highlighted by CLS *score*, never by shift *count*.
  //
  // The count is not reproducible: the same five F0Card stories measured three
  // times gave three different sets, because a shift is only recorded when the
  // browser happens to paint between the two layouts. The score is, once it is
  // above the noise floor — across three runs ApplicationFrame scored 0.1943 /
  // 0.1932 / 0.1936 and AnalyticsDashboard scored 0.0472 all three times, while
  // the stories that flickered in and out all scored ~0.0001.
  //
  // CLS_HIGHLIGHT_THRESHOLD sits an order of magnitude above that noise floor
  // and an order of magnitude below Core Web Vitals' 0.1 "needs improvement"
  // line. Across the library's 102 snapshot stories it selects 4.
  if (report.timing.cls >= CLS_HIGHLIGHT_THRESHOLD) {
    out.push(
      `cumulative layout shift of ${report.timing.cls} — content moved after it was first painted (attention threshold ${CLS_HIGHLIGHT_THRESHOLD}; Core Web Vitals calls 0.1 "needs improvement")`
    )
  }
  if (d.slowUpdates > 0) {
    out.push(
      `${d.slowUpdates} update${d.slowUpdates === 1 ? "" : "s"} over one frame (16ms)`
    )
  }
  if (d.updates > UPDATE_HIGHLIGHT_THRESHOLD) {
    out.push(
      `${d.updates} re-renders after mount with no interaction (typical is 6, attention threshold ${UPDATE_HIGHLIGHT_THRESHOLD})`
    )
  }
  if (d.domElements > DOM_HIGHLIGHT_THRESHOLD) {
    out.push(
      `${d.domElements} DOM elements in one story (typical is 89, attention threshold ${DOM_HIGHLIGHT_THRESHOLD})`
    )
  }
  return out
}

function parseArgs(argv: string[]) {
  let compareCommit = "origin/main"
  let out = "perf-report.json"
  let url: string | undefined
  let settleMs = DEFAULT_SETTLE_MS
  let maxStories = 40

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--compare-commit") compareCommit = argv[++i]
    else if (arg === "--out") out = argv[++i]
    else if (arg === "--url") url = argv[++i]
    else if (arg === "--settle") settleMs = Number(argv[++i])
    else if (arg === "--max-stories") maxStories = Number(argv[++i])
    else throw new Error(`Unknown argument: ${arg}`)
  }
  return { compareCommit, out, url, settleMs, maxStories }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  const files = changedStoryFiles(args.compareCommit)
  if (!files.length) {
    note("No story files added or changed — nothing to measure.")
    writeFileSync(
      args.out,
      JSON.stringify(
        {
          changedStoryFiles: 0,
          storiesMeasured: 0,
          truncated: false,
          stories: [],
        },
        null,
        2
      ) + "\n"
    )
    return
  }
  note(
    `${files.length} story file${files.length === 1 ? "" : "s"} changed vs ${args.compareCommit}.`
  )

  const baseUrl = (
    args.url ??
    process.env.STORYBOOK_URL ??
    (await detectStorybookUrl()) ??
    ""
  ).replace(/\/$/, "")
  if (!baseUrl) {
    throw new Error(
      "No running Storybook found. Serve the static build first, or pass --url."
    )
  }

  const index = await fetchIndex(baseUrl)

  // Expand files → stories, keeping the file association for the report.
  const targets: { entry: StoryIndexEntry; file: string; isNew: boolean }[] = []
  for (const { file, isNew } of files) {
    const stories = storiesForFile(index, file)
    if (!stories.length) {
      consola.warn(`No stories in the index for ${file} — skipping.`)
      continue
    }
    for (const entry of stories) targets.push({ entry, file, isNew })
  }

  // A PR that touches a very large number of stories would otherwise dominate
  // the job's runtime. Truncation is reported in the JSON so the comment can say
  // so out loud rather than quietly under-reporting.
  const truncated = targets.length > args.maxStories
  const measured = truncated ? targets.slice(0, args.maxStories) : targets
  if (truncated) {
    consola.warn(
      `${targets.length} stories affected; measuring the first ${args.maxStories}.`
    )
  }

  const { chromium } = await import("@playwright/test")
  const browser = await chromium.launch()
  const stories: ChangedStoryReport[] = []
  try {
    for (const { entry, file, isNew } of measured) {
      const report = await measure(browser, baseUrl, entry, args.settleMs)
      if (!report) continue
      stories.push({
        ...report,
        storyFile: file,
        isNew,
        highlights: highlightsFor(report),
      })
    }
  } finally {
    await browser.close()
  }

  const withHighlights = stories.filter((s) => s.highlights.length > 0)
  const output = {
    comparedAgainst: args.compareCommit,
    changedStoryFiles: files.length,
    storiesAffected: targets.length,
    storiesMeasured: stories.length,
    storiesWithHighlights: withHighlights.length,
    truncated,
    thresholds: {
      cascades: CASCADE_HIGHLIGHT_THRESHOLD,
      updates: UPDATE_HIGHLIGHT_THRESHOLD,
      domElements: DOM_HIGHLIGHT_THRESHOLD,
      cls: CLS_HIGHLIGHT_THRESHOLD,
    },
    note:
      "Reporting only — no thresholds gate this PR. `deterministic` metrics are stable across runs and safe to compare; " +
      "`timing` metrics vary run to run and include page-wide work such as axe-core, so they are never used to raise a highlight.",
    stories,
  }

  writeFileSync(args.out, JSON.stringify(output, null, 2) + "\n")
  note(
    `Measured ${stories.length} stor${stories.length === 1 ? "y" : "ies"}; ` +
      `${withHighlights.length} with highlights. Wrote ${args.out}.`
  )
}

main().catch((error) => {
  consola.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
