#!/usr/bin/env tsx
/**
 * perf-metrics.ts
 *
 * Print the numbers the Storybook performance panel shows, as JSON, for one or
 * more stories — without opening Storybook. Intended for humans and agents
 * checking a component while building or changing it:
 *
 *   pnpm perf-metrics F0Button                 # every story of a component
 *   pnpm perf-metrics components-button-button--variants
 *   pnpm perf-metrics F0Button --snapshot      # just its snapshot story
 *   pnpm perf-metrics F0Button --out perf.json
 *
 * This is a reporting tool. It has no thresholds, no baseline and no pass/fail
 * verdict — it does not gate anything in CI. Interpreting the numbers is the
 * caller's job, so read the `stability` note in the output before comparing two
 * runs.
 *
 * ── Which numbers can you trust? ──────────────────────────────────────────
 * The output is split into `deterministic` and `timing` for a reason, measured
 * across repeat runs of the same story on an idle machine:
 *
 *   deterministic — identical on every run (mounts 1, renders 4, cascades 1,
 *     domElements 33, …). These count *work done*, not time taken, so they are
 *     machine-independent and safe to compare between two runs, two branches or
 *     two components. This is what you want when asking "did my change make
 *     this component render more than it used to?".
 *
 *   timing — varies run to run even when nothing changes (totalBlockingTime
 *     ranged 42–47ms across five identical runs) and is contaminated by
 *     whatever else shares the page: in Storybook, `longTasks` is frequently
 *     axe-core rather than the component under test. Treat as a rough signal
 *     only; never diff it between runs and conclude anything.
 *
 * ── How it works ──────────────────────────────────────────────────────────
 * The addon collects metrics in the preview and ships them to the manager panel
 * over the Storybook channel. There is no manager here, so this script plays the
 * part of one: it answers the addon's `request-panel-visibility` handshake with
 * `true` (which is what actually starts the browser collectors), waits for the
 * story to settle, then asks for a metrics snapshot.
 *
 * The handshake is installed via an init script rather than after load, so the
 * collectors are already running when the story mounts. That matters: forced
 * reflows, style writes and layout shifts all happen *during* mount, and are
 * silently reported as 0 if collection starts afterwards.
 */
import { chromium, type Browser, type Page } from "@playwright/test"
import { writeFileSync } from "node:fs"
import { pathToFileURL } from "node:url"

import consola from "consola"

/** Addon id — namespaces every channel event the addon uses. */
const ADDON_ID = "primer-performance-monitor"

/**
 * Progress output, always on stderr.
 *
 * stdout carries the JSON and nothing else, so `perf-metrics F0Button | jq` and
 * agent tooling that parses stdout keep working. consola cannot be used for
 * this: `consola.info` and `consola.success` write to **stdout**, so routing
 * progress through them corrupts the payload — piping to jq fails with
 * "Invalid numeric literal" on the info line. `consola.warn`/`consola.error`
 * do go to stderr and are used as-is.
 */
export function note(message: string): void {
  process.stderr.write(`${message}\n`)
}

/**
 * Ports probed for a running Storybook when `--url` is not given. 6006 is the
 * `pnpm dev` default; 6008 is where `storybook dev` lands when 6006 is taken
 * (a second checkout or worktree already running one).
 */
const DEFAULT_PORTS = [6006, 6008]

/**
 * How long to let the story run before snapshotting, in ms.
 *
 * The deterministic metrics are complete as soon as the story has mounted — the
 * React Profiler records renders as they happen, regardless of when collection
 * started — so they do not need this window at all. The timing metrics do: they
 * are sampled over a period, and with no window `fps` is computed from a
 * two-frame sample and reads in the thousands.
 */
export const DEFAULT_SETTLE_MS = 1000

export type StoryIndexEntry = {
  id: string
  title: string
  name: string
  type: string
  exportName?: string
  /** e.g. "./src/components/F0Button/index.tsx" */
  componentPath?: string
  /** e.g. "./src/components/F0Button/index.stories.tsx" */
  importPath?: string
}

/**
 * Whether a story is a Chromatic snapshot story.
 *
 * Detected by export name, not by `withSnapshot()`'s `chromatic.disableSnapshot`
 * parameter: Storybook's index.json carries no story parameters at all, so the
 * parameter is simply not visible from here. Every snapshot story in the repo is
 * exported as `Snapshot` (or a `…SnapshotMatrix` variant), which is.
 */
export function isSnapshotStory(entry: StoryIndexEntry): boolean {
  return /snapshot/i.test(entry.exportName ?? entry.name)
}

/** Raw metrics payload emitted by the addon over the channel. */
type RawMetrics = Record<string, unknown>

export type StoryReport = {
  id: string
  title: string
  name: string
  deterministic: {
    /** Times the story's React tree mounted. Normally 1. */
    mounts: number
    /** Total Profiler renders (mount + every re-render). */
    renders: number
    /** Re-renders after mount settled. High values mean wasted work. */
    updates: number
    /** Renders that scheduled another render — a cascade. Ideally 0. */
    cascades: number
    /** Updates that took over one frame (>16ms). */
    slowUpdates: number
    /** DOM elements rendered by the story. */
    domElements: number
    /** Inline style / CSS-var writes observed during mount. */
    styleWrites: number
    /** Layout reads that forced a synchronous reflow. Ideally 0. */
    forcedReflows: number
  }
  timing: {
    /** Wall-clock ms spent in the mount render. */
    mountMs: number
    /** P95 of post-mount update durations, ms. */
    p95UpdateMs: number
    /**
     * Layout shifts observed, and their cumulative score.
     *
     * These sit in `timing`, not `deterministic`, despite being counts — they
     * are not reproducible. Measuring the same five F0Card stories three times
     * gave three different sets: two stories shifted on every run, two shifted
     * on some runs and not others. A shift is only recorded if the browser
     * happens to paint between the two layouts, which depends on load timing.
     *
     * So a non-zero value is worth investigating, but a zero does not prove
     * there is no shift, and a difference between two runs proves nothing.
     */
    layoutShifts: number
    /** Cumulative layout shift score. */
    cls: number
    /** Total blocking time, ms — includes non-component work such as axe. */
    totalBlockingTime: number
    /** Long tasks (>50ms) seen on the main thread, from any source. */
    longTasks: number
    /** Sampled frames per second. */
    fps: number
    /** JS heap in use, MB — whole page, not just this component. */
    heapMB: number | null
  }
}

function num(v: unknown, fallback = 0): number {
  return typeof v === "number" && Number.isFinite(v) ? v : fallback
}

function round(v: number, dp = 1): number {
  const f = 10 ** dp
  return Math.round(v * f) / f
}

/** Shape the addon's flat payload into the deterministic/timing split. */
function toReport(entry: StoryIndexEntry, m: RawMetrics): StoryReport {
  return {
    id: entry.id,
    title: entry.title,
    name: entry.name,
    deterministic: {
      mounts: num(m.reactMountCount),
      renders: num(m.reactRenderCount),
      updates: num(m.reactPostMountUpdateCount),
      cascades: num(m.renderCascades),
      slowUpdates: num(m.slowReactUpdates),
      domElements: num(m.domElements),
      styleWrites: num(m.styleWrites),
      forcedReflows: num(m.forcedReflowCount),
    },
    timing: {
      mountMs: round(num(m.reactMountDuration)),
      p95UpdateMs: round(num(m.reactP95Duration)),
      layoutShifts: num(m.layoutShiftCount),
      cls: round(num(m.layoutShiftScore), 4),
      totalBlockingTime: num(m.totalBlockingTime),
      longTasks: num(m.longTasks),
      fps: num(m.fps),
      heapMB: typeof m.memoryUsedMB === "number" ? m.memoryUsedMB : null,
    },
  }
}

/** First URL that answers with a Storybook story index, or null. */
export async function detectStorybookUrl(): Promise<string | null> {
  for (const port of DEFAULT_PORTS) {
    const url = `http://localhost:${port}`
    try {
      const res = await fetch(`${url}/index.json`, {
        signal: AbortSignal.timeout(2500),
      })
      if (res.ok) return url
    } catch {
      // not running on this port — try the next
    }
  }
  return null
}

export async function fetchIndex(url: string): Promise<StoryIndexEntry[]> {
  const res = await fetch(`${url}/index.json`, {
    signal: AbortSignal.timeout(15_000),
  })
  if (!res.ok) {
    throw new Error(`Could not read ${url}/index.json (HTTP ${res.status})`)
  }
  const json = (await res.json()) as {
    entries: Record<string, StoryIndexEntry>
  }
  return Object.values(json.entries).filter((e) => e.type === "story")
}

/**
 * Resolve user-supplied selectors to stories.
 *
 * Accepts an exact story id, a component name (`F0Button`) or any substring of
 * the story id or title, so callers do not have to know Storybook's id
 * mangling. Matching is case-insensitive and the results are de-duplicated.
 *
 * The source paths are part of the haystack because the F0 name is often absent
 * from both the id and the title — F0Button's stories are titled
 * "Components/Button/Button" with ids like `components-button-button--variants`,
 * so a bare `F0Button` would otherwise match nothing at all. It appears only in
 * `componentPath` / `importPath`.
 */
function selectStories(
  all: StoryIndexEntry[],
  selectors: string[],
  snapshotOnly: boolean
): StoryIndexEntry[] {
  const picked = new Map<string, StoryIndexEntry>()

  for (const selector of selectors) {
    const needle = selector.toLowerCase()
    const exact = all.filter((s) => s.id.toLowerCase() === needle)
    const matches = exact.length
      ? exact
      : all.filter((s) =>
          [s.id, s.title, s.componentPath ?? "", s.importPath ?? ""]
            .join("\n")
            .toLowerCase()
            .includes(needle)
        )

    if (!matches.length) {
      consola.warn(`No story matched "${selector}"`)
      continue
    }
    for (const m of matches) picked.set(m.id, m)
  }

  const chosen = Array.from(picked.values())
  if (!snapshotOnly) return chosen

  const snapshots = chosen.filter(isSnapshotStory)
  if (!snapshots.length) {
    // Deliberately not falling back to every matched story: silently measuring
    // 30 stories when --snapshot was asked for reads as success and buries the
    // fact that the component has no snapshot story at all.
    consola.warn(
      `--snapshot: none of the ${chosen.length} matched ${chosen.length === 1 ? "story is a" : "stories are"} snapshot ${chosen.length === 1 ? "story" : "stories"}. ` +
        `Drop --snapshot to measure them anyway.`
    )
  }
  return snapshots
}

/**
 * Measure one story. Returns null when the story never rendered or the addon
 * never answered — a broken story should not take the whole run down.
 */
export async function measure(
  browser: Browser,
  baseUrl: string,
  entry: StoryIndexEntry,
  settleMs: number
): Promise<StoryReport | null> {
  const page: Page = await browser.newPage()
  try {
    // Answer the panel-visibility handshake before any story code runs, so the
    // collectors are live for the mount itself (see file header).
    await page.addInitScript(
      ({ addonId }: { addonId: string }) => {
        const install = (channel: {
          on: (e: string, cb: () => void) => void
          emit: (e: string, v?: unknown) => void
        }) => {
          channel.on(`${addonId}/request-panel-visibility`, () => {
            channel.emit(`${addonId}/panel-visibility`, true)
          })
          channel.emit(`${addonId}/panel-visibility`, true)
        }

        // The channel global appears partway through preview bootstrap, so trap
        // the assignment rather than polling for it.
        let current: unknown =
          (window as unknown as Record<string, unknown>)
            .__STORYBOOK_ADDONS_CHANNEL__ ?? undefined
        if (current) install(current as Parameters<typeof install>[0])
        Object.defineProperty(window, "__STORYBOOK_ADDONS_CHANNEL__", {
          configurable: true,
          get: () => current,
          set: (value) => {
            current = value
            if (value) install(value as Parameters<typeof install>[0])
          },
        })
      },
      { addonId: ADDON_ID }
    )

    await page.goto(
      `${baseUrl}/iframe.html?id=${encodeURIComponent(entry.id)}&viewMode=story`,
      { waitUntil: "load", timeout: 30_000 }
    )
    await page.waitForFunction(
      () =>
        (document.querySelector("#storybook-root")?.children.length ?? 0) > 0,
      undefined,
      { timeout: 20_000 }
    )

    const metrics = await page.evaluate(
      async ({ addonId, waitMs }) => {
        const channel = (window as unknown as Record<string, unknown>)
          .__STORYBOOK_ADDONS_CHANNEL__ as
          | {
              on: (e: string, cb: (p: unknown) => void) => void
              once: (e: string, cb: (p: unknown) => void) => void
              emit: (e: string, v?: unknown) => void
            }
          | undefined
        if (!channel) return null

        // Belt and braces: the init-script handshake should already have started
        // collection, but a story that mounted before the trap fired would not
        // have seen it.
        channel.emit(`${addonId}/panel-visibility`, true)
        await new Promise((r) => setTimeout(r, waitMs))

        return await new Promise<unknown>((resolve) => {
          const timer = setTimeout(() => resolve(null), 10_000)
          channel.once(`${addonId}/metrics-update`, (payload) => {
            clearTimeout(timer)
            resolve(payload)
          })
          channel.emit(`${addonId}/request-metrics`)
        })
      },
      { addonId: ADDON_ID, waitMs: settleMs }
    )

    if (!metrics) {
      consola.warn(`No metrics returned for ${entry.id}`)
      return null
    }
    return toReport(entry, metrics as RawMetrics)
  } catch (error) {
    consola.warn(
      `Failed to measure ${entry.id}: ${error instanceof Error ? error.message : String(error)}`
    )
    return null
  } finally {
    await page.close()
  }
}

function parseArgs(argv: string[]) {
  const selectors: string[] = []
  let url: string | undefined
  let out: string | undefined
  let settleMs = DEFAULT_SETTLE_MS
  let snapshotOnly = false

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--url") url = argv[++i]
    else if (arg === "--out") out = argv[++i]
    else if (arg === "--settle") settleMs = Number(argv[++i])
    else if (arg === "--snapshot") snapshotOnly = true
    else if (arg === "--help" || arg === "-h") return null
    else if (arg.startsWith("-")) throw new Error(`Unknown flag: ${arg}`)
    else selectors.push(arg)
  }
  return { selectors, url, out, settleMs, snapshotOnly }
}

const USAGE = `
Print Storybook performance-panel metrics as JSON.

Usage:
  pnpm perf-metrics <story-or-component> [more…] [options]

Options:
  --snapshot      Only the snapshot story of each matched component
  --url <url>     Storybook base URL (default: $STORYBOOK_URL, else :6006/:6008)
  --settle <ms>   Collection window before snapshotting (default ${DEFAULT_SETTLE_MS})
  --out <file>    Write JSON to a file as well as stdout
  -h, --help      Show this help

Requires a running Storybook (pnpm dev).
`.trim()

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (!args) {
    note(USAGE)
    return
  }
  if (!args.selectors.length) {
    consola.error("Pass at least one story id or component name.\n")
    note(USAGE)
    process.exitCode = 1
    return
  }
  if (!Number.isFinite(args.settleMs) || args.settleMs < 0) {
    consola.error(`--settle must be a non-negative number of milliseconds.`)
    process.exitCode = 1
    return
  }

  const baseUrl = (
    args.url ??
    process.env.STORYBOOK_URL ??
    (await detectStorybookUrl()) ??
    ""
  ).replace(/\/$/, "")

  if (!baseUrl) {
    consola.error(
      `No running Storybook found on ${DEFAULT_PORTS.map((p) => `:${p}`).join(" or ")}.\n` +
        `Start one with \`pnpm dev\`, or point at it with --url.`
    )
    process.exitCode = 1
    return
  }

  const index = await fetchIndex(baseUrl)
  const stories = selectStories(index, args.selectors, args.snapshotOnly)
  if (!stories.length) {
    consola.error("No stories matched.")
    process.exitCode = 1
    return
  }

  note(
    `Measuring ${stories.length} ${stories.length === 1 ? "story" : "stories"} at ${baseUrl}…`
  )

  const browser = await chromium.launch()
  const reports: StoryReport[] = []
  try {
    for (const story of stories) {
      const report = await measure(browser, baseUrl, story, args.settleMs)
      if (report) reports.push(report)
    }
  } finally {
    await browser.close()
  }

  const output = {
    storybookUrl: baseUrl,
    settleMs: args.settleMs,
    measuredAt: new Date().toISOString(),
    stability: {
      deterministic:
        "Counts of work done. Stable across runs and machines — safe to compare between runs, branches or components.",
      timing:
        "Wall-clock samples. Vary run to run and include page-wide work that is not this component (in Storybook, longTasks is often axe-core). Indicative only; do not diff between runs.",
    },
    stories: reports,
  }

  const json = JSON.stringify(output, null, 2)
  if (args.out) {
    writeFileSync(args.out, json + "\n")
    note(`Wrote ${args.out}`)
  }
  // stdout stays pure JSON (consola writes to stderr) so callers can pipe it.
  process.stdout.write(json + "\n")

  if (!reports.length) process.exitCode = 1
}

// Only run the CLI when invoked directly — perf-changed.ts imports the
// measurement helpers above and must not trigger a second run on import.
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((error) => {
    consola.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
}
