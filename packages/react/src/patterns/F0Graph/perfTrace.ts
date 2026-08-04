/**
 * TEMPORARY diagnostic instrumentation for the org-chart pan/zoom jank
 * investigation. NOT FOR MERGE.
 *
 * The question it exists to answer: while the camera moves, are the node
 * components MOUNTING (new nodes entering the windowed set — legitimate work)
 * or RE-RENDERING while already mounted (an invalidation leak)? Render-count
 * overlays cannot tell those apart, and that distinction decides whether there
 * is anything left to fix.
 *
 * Drive it from the browser console:
 *   __f0GraphPerf.reset()   // start a measurement window
 *   ...pan (drag) or zoom (ctrl+scroll) the graph...
 *   __f0GraphPerf.dump()    // counts, per-second rates, and gauges
 */

const counts = new Map<string, number>()
const gauges = new Map<string, number>()
const lastSeen = new Map<string, unknown>()
let startedAt = 0

function ensureStarted(): void {
  if (startedAt === 0) startedAt = performance.now()
}

/** Count an event (a render, a mount, a memo rebuild, a store update). */
export function bump(key: string): void {
  ensureStarted()
  counts.set(key, (counts.get(key) ?? 0) + 1)
}

/**
 * Count only when `value`'s identity changed since the last call for `key`.
 * Distinguishes "the hook re-ran" (cheap) from "the value actually changed and
 * invalidated everything downstream" (expensive).
 */
export function bumpIfChanged(key: string, value: unknown): void {
  const seen = lastSeen.has(key)
  if (seen && Object.is(lastSeen.get(key), value)) return
  lastSeen.set(key, value)
  // Skip the first observation: that is the mount, not a change.
  if (seen) bump(key)
}

/** Record a latest-value (not a count) — e.g. the windowed node-set size. */
export function gauge(key: string, value: number): void {
  ensureStarted()
  gauges.set(key, value)
}

/**
 * Classify a camera frame without subscribing to the transform. Called from
 * inside the existing windowing selector, which zustand runs on every store
 * update: counting here observes every frame WITHOUT adding a subscription that
 * would itself force a re-render and corrupt the measurement.
 */
let lastTx = Number.NaN
let lastTy = Number.NaN
let lastZoom = Number.NaN

export function traceCameraFrame(tx: number, ty: number, zoom: number): void {
  bump("camera.storeUpdate")
  const movedXY = tx !== lastTx || ty !== lastTy
  const movedZoom = zoom !== lastZoom
  if (movedZoom) bump("camera.zoomChanged")
  else if (movedXY) bump("camera.panChanged")
  lastTx = tx
  lastTy = ty
  lastZoom = zoom
}

function reset(): void {
  counts.clear()
  gauges.clear()
  lastSeen.clear()
  startedAt = 0
  lastTx = Number.NaN
  lastTy = Number.NaN
  lastZoom = Number.NaN
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
  if (gauges.size > 0) {
    console.table(
      [...gauges.entries()].map(([key, value]) => ({ key, value }))
    )
  }
  /* eslint-enable no-console */
}

declare global {
  // eslint-disable-next-line no-var
  var __f0GraphPerf: { reset: () => void; dump: () => void } | undefined
}

if (typeof window !== "undefined") {
  globalThis.__f0GraphPerf = { reset, dump }
}
