/**
 * Tuning helpers for the transcript's bottom-pin slide (see
 * ChatMessagesContainer): pure math, unit-tested, no React.
 */

/**
 * Natural frequency of the slide spring (ω = √(stiffness/mass), with
 * stiffness 320 / mass 1). A critically damped spring released at offset `x`
 * with velocity `v` toward the target overshoots iff |v| > ω·|x|.
 */
export const SLIDE_OMEGA = Math.sqrt(320)

/**
 * Clamp the velocity handed to the slide spring so it can never overshoot the
 * resting point. Matters when a small opposite-sign correction (the
 * estimate→measure delta of a freshly appended row) shrinks the remaining
 * offset mid-flight: the inherited velocity would carry the content PAST the
 * bottom and spring back — the "weird bounce" on send/receive. Clamping to the
 * no-overshoot bound folds the correction into one continuous curve.
 */
export const clampNoOvershootVelocity = (
  velocity: number,
  offset: number
): number => {
  const limit = Math.abs(offset) * SLIDE_OMEGA
  return Math.max(-limit, Math.min(limit, velocity))
}

export type RowHeightEstimator = {
  /** Record a real measured height. */
  record: (height: number) => void
  /** Median of the recent measurements, or the fallback until enough samples. */
  estimate: () => number
}

/**
 * Adaptive row-height estimate: the median of the last `windowSize` REAL
 * measurements of this conversation's rows. The virtualizer's spacer height
 * (and therefore `scrollHeight`) is estimate-based until a new row measures —
 * a fixed estimate ~30px off makes every append slide too far and snap back
 * one frame later. A running median keeps the error within a few pixels, which
 * disappears inside the spring.
 */
export const createRowHeightEstimator = (
  fallback: number,
  {
    minSamples = 4,
    windowSize = 40,
  }: { minSamples?: number; windowSize?: number } = {}
): RowHeightEstimator => {
  const samples: number[] = []
  return {
    record: (height) => {
      if (!Number.isFinite(height) || height <= 0) return
      samples.push(height)
      if (samples.length > windowSize) samples.shift()
    },
    estimate: () => {
      if (samples.length < minSamples) return fallback
      const sorted = [...samples].sort((a, b) => a - b)
      const mid = Math.floor(sorted.length / 2)
      return sorted.length % 2 === 1
        ? sorted[mid]
        : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
    },
  }
}
