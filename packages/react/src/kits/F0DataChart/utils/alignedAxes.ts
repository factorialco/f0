/**
 * Bounds for one value axis: an explicit range plus the tick step that divides
 * it. Setting all three makes ECharts' scale fully deterministic — `splitNumber`
 * alone is only a hint it overrides whenever "nice" rounding prefers otherwise.
 */
export interface ValueAxisBounds {
  min: number
  max: number
  interval: number
}

interface Extent {
  min: number
  max: number
}

/** Round a raw step up to a 1 / 2 / 2.5 / 5 / 10 multiple of a power of ten. */
function niceStep(rawStep: number): number {
  if (!Number.isFinite(rawStep) || rawStep <= 0) return 1
  const exponent = Math.floor(Math.log10(rawStep))
  const magnitude = 10 ** exponent
  const fraction = rawStep / magnitude
  const niceFraction =
    fraction <= 1
      ? 1
      : fraction <= 2
        ? 2
        : fraction <= 2.5
          ? 2.5
          : fraction <= 5
            ? 5
            : 10
  return niceFraction * magnitude
}

/**
 * Data extent of a series list, always widened to include zero.
 *
 * Bars require it — a bar that does not start at zero misstates its own
 * magnitude — and the line axis follows suit for consistency with the
 * standalone line chart, which ECharts also forces through zero. The trade-off
 * is that a line living in a narrow band far from zero (engagement 95–97%) is
 * compressed near the top.
 */
function zeroInclusiveExtent(values: number[]): Extent {
  let min = 0
  let max = 0
  for (const value of values) {
    if (!Number.isFinite(value)) continue
    if (value < min) min = value
    if (value > max) max = value
  }
  return { min, max }
}

/** Normalise -0, which would render as "-0" on an axis label. */
const unsigned = (value: number): number => (value === 0 ? 0 : value)

/**
 * Bounds for one axis given how many tick intervals sit below and above zero.
 * Returns null when the split cannot cover the data.
 */
function boundsForSplit(
  extent: Extent,
  negativeBuckets: number,
  positiveBuckets: number
): ValueAxisBounds | null {
  if (extent.min < 0 && negativeBuckets === 0) return null
  if (extent.max > 0 && positiveBuckets === 0) return null

  const needed = Math.max(
    negativeBuckets > 0 ? Math.abs(extent.min) / negativeBuckets : 0,
    positiveBuckets > 0 ? extent.max / positiveBuckets : 0
  )
  // An all-zero series has no natural step; 1 keeps the axis renderable.
  const interval = niceStep(needed === 0 ? 1 : needed)

  return {
    min: unsigned(-negativeBuckets * interval),
    max: unsigned(positiveBuckets * interval),
    interval,
  }
}

/** How much taller the axis is than the data it holds. Lower is tighter. */
function slack(bounds: ValueAxisBounds, extent: Extent): number {
  const dataSpan = extent.max - extent.min
  const axisSpan = bounds.max - bounds.min
  if (axisSpan <= 0) return 0
  return dataSpan > 0 ? axisSpan / dataSpan : axisSpan
}

/** The split of `intervals` that fits this one axis most tightly. */
function bestBounds(extent: Extent, intervals: number): ValueAxisBounds {
  let best: { bounds: ValueAxisBounds; slack: number } | undefined

  for (let negative = 0; negative <= intervals; negative += 1) {
    const bounds = boundsForSplit(extent, negative, intervals - negative)
    if (!bounds) continue
    const candidate = { bounds, slack: slack(bounds, extent) }
    if (!best || candidate.slack < best.slack) best = candidate
  }

  // Unreachable for a zero-inclusive extent with intervals >= 1, but keeps the
  // return type honest rather than forcing a non-null assertion upstream.
  return best?.bounds ?? { min: 0, max: intervals, interval: 1 }
}

/**
 * The split that fits BOTH axes acceptably, so their zero lines coincide.
 * Minimises the worst of the two fits rather than the sum — summing lets a
 * comfortable axis pay for a badly stretched one.
 */
function bestSharedBounds(
  extents: [Extent, Extent],
  intervals: number
): [ValueAxisBounds, ValueAxisBounds] | undefined {
  let best:
    | { bounds: [ValueAxisBounds, ValueAxisBounds]; slack: number }
    | undefined

  for (let negative = 0; negative <= intervals; negative += 1) {
    const positive = intervals - negative
    const first = boundsForSplit(extents[0], negative, positive)
    const second = boundsForSplit(extents[1], negative, positive)
    if (!first || !second) continue

    const worst = Math.max(slack(first, extents[0]), slack(second, extents[1]))
    if (!best || worst < best.slack) {
      best = { bounds: [first, second], slack: worst }
    }
  }

  return best?.bounds
}

/**
 * Compute bounds that give both value axes the SAME number of tick intervals.
 *
 * Two independently auto-scaled value axes are the classic dual-axis defect: the
 * scales land on different interval counts (`splitNumber` is a hint ECharts
 * overrides for nicer rounding), so the secondary axis' labels float between the
 * grid lines drawn from the primary. Pinning `min`/`max`/`interval` on both
 * removes that entirely — every label sits on a grid line.
 *
 * Zero alignment is applied only when BOTH axes carry negative values. Forcing a
 * shared negative/positive split on an axis whose quantity cannot go negative
 * would print impossible negative ticks (a turnover rate of −5%) and spend half
 * its height on empty range — worse than the misalignment it fixes. When only one
 * axis has negatives, each takes the split that fits its own data best and the
 * two zero lines legitimately sit at different heights.
 */
export function computeAlignedValueAxes(
  primaryValues: number[],
  secondaryValues: number[],
  splitNumber: number
): { primary: ValueAxisBounds; secondary: ValueAxisBounds } {
  const intervals = Math.max(1, Math.round(splitNumber))
  const extents: [Extent, Extent] = [
    zeroInclusiveExtent(primaryValues),
    zeroInclusiveExtent(secondaryValues),
  ]

  if (extents.every((extent) => extent.min < 0)) {
    const shared = bestSharedBounds(extents, intervals)
    if (shared) return { primary: shared[0], secondary: shared[1] }
  }

  return {
    primary: bestBounds(extents[0], intervals),
    secondary: bestBounds(extents[1], intervals),
  }
}
