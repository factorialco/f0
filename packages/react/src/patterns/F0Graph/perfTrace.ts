/**
 * TEMPORARY diagnostic instrumentation. NOT FOR MERGE.
 *
 * The open question: `F0GraphView` re-renders ~50×/s during a gesture, and only
 * a third of those are explained by windowing recomputes. This attributes the
 * rest.
 *
 * The load-bearing counter is `chg.props`. React allocates a fresh props object
 * every time the PARENT renders, and reuses the same one when a component
 * re-renders from its own state — so a change in props identity means the render
 * came from above, and no change means it came from inside. That single
 * distinction decides whether the remaining work is F0Graph's to fix at all.
 *
 * Drive it from the console:
 *   __f0GraphPerf.reset()
 *   ...pan or zoom...
 *   __f0GraphPerf.dump()
 */

const counts = new Map<string, number>()
const lastSeen = new Map<string, unknown>()
let startedAt = 0

export function bump(key: string): void {
  if (startedAt === 0) startedAt = performance.now()
  counts.set(key, (counts.get(key) ?? 0) + 1)
}

/** Count only when `value`'s identity changed since the last call for `key`. */
export function bumpIfChanged(key: string, value: unknown): void {
  const seen = lastSeen.has(key)
  if (seen && Object.is(lastSeen.get(key), value)) return
  lastSeen.set(key, value)
  // Skip the first observation: that is the mount, not a change.
  if (seen) bump(key)
}

function reset(): void {
  counts.clear()
  lastSeen.clear()
  startedAt = 0
}

function dump(): void {
  const elapsedMs = startedAt === 0 ? 0 : performance.now() - startedAt
  const seconds = elapsedMs / 1000
  const rows = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({
      key,
      count,
      perSecond: seconds > 0 ? Math.round(count / seconds) : 0,
    }))
  /* eslint-disable no-console -- diagnostic branch */
  console.log(`[f0GraphPerf] window=${Math.round(elapsedMs)}ms`)
  console.table(rows)
  /* eslint-enable no-console */
}

declare global {
  // eslint-disable-next-line no-var
  var __f0GraphPerf: { reset: () => void; dump: () => void } | undefined
}

if (typeof window !== "undefined") {
  globalThis.__f0GraphPerf = { reset, dump }
}
