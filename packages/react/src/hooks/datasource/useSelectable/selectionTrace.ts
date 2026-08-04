/**
 * TEMPORARY diagnostic instrumentation for the collection-selection commit
 * cascade. NOT FOR MERGE.
 *
 * Measured on an 838-employee table (25 rows on screen): checking a single
 * checkbox costs ~55ms of main-thread processing at NATIVE speed, and a
 * render-count overlay showed every cell rendering 4-5 times — so the click
 * produces several commits, not one. React 18 batches state updates inside an
 * event handler, so the extra commits must come from effects writing state after
 * a commit, each triggering another round.
 *
 * This records an ORDERED sequence rather than counts, because the shape is the
 * finding: `render → fx:a → set:x → render → fx:b → set:y → render` names the
 * cascade, while totals only prove it exists.
 *
 * From the console:
 *   __f0SelectTrace.reset()
 *   ...click one checkbox...
 *   __f0SelectTrace.dump()
 */

type Entry = { at: number; label: string }

const entries: Entry[] = []
const counts = new Map<string, number>()
let startedAt = 0
// Bounded so a forgotten reset cannot grow without limit during a long session.
const MAX_ENTRIES = 2000

export function trace(label: string): void {
  if (entries.length >= MAX_ENTRIES) return
  if (startedAt === 0) startedAt = performance.now()
  entries.push({ at: performance.now() - startedAt, label })
}

/**
 * Accumulate a total without adding to the ordered sequence. For things that
 * happen once per row (a memo comparison finding a prop unequal), where the
 * count is the signal and 25 interleaved entries per commit would bury it.
 */
export function count(label: string): void {
  if (startedAt === 0) startedAt = performance.now()
  counts.set(label, (counts.get(label) ?? 0) + 1)
}

function reset(): void {
  entries.length = 0
  counts.clear()
  startedAt = 0
}

function dump(): void {
  /* eslint-disable no-console -- diagnostic branch */
  if (entries.length === 0) {
    console.log("[f0SelectTrace] nothing recorded")
    return
  }

  // Commits are delimited by `render`, so counting them answers "how many
  // commits did this click cost" directly.
  const renders = entries.filter((e) => e.label === "render").length
  console.log(
    `[f0SelectTrace] ${entries.length} events, ${renders} renders of useSelectable, over ${entries.at(-1)!.at.toFixed(1)}ms`
  )
  console.table(
    entries.map((e, i) => ({ "#": i, ms: +e.at.toFixed(1), event: e.label }))
  )

  // Which effects wrote state — those are the ones extending the cascade.
  const writers = entries
    .filter((e) => e.label.startsWith("set:"))
    .reduce<Record<string, number>>((acc, e) => {
      acc[e.label] = (acc[e.label] ?? 0) + 1
      return acc
    }, {})
  console.table(
    Object.entries(writers).map(([label, total]) => ({ label, total }))
  )

  if (counts.size > 0) {
    console.table(
      [...counts.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([label, total]) => ({ label, total }))
    )
  }
  /* eslint-enable no-console */
}

declare global {
  // eslint-disable-next-line no-var
  var __f0SelectTrace: { reset: () => void; dump: () => void } | undefined
}

if (typeof window !== "undefined") {
  globalThis.__f0SelectTrace = { reset, dump }
}
