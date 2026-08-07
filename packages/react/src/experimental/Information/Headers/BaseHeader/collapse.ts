/**
 * How far the header is condensed: 0 is open, 1 is fully condensed, and the
 * values between are what a scroll-linked collapse walks through.
 *
 * A boolean is the discrete case, for a header that is simply shown condensed.
 * Only the boolean reaches the public API; the number arrives from the container
 * driving the scroll, so no caller can pick their own collapse distance.
 */
export type Collapse = boolean | number

const clamp = (value: number) => Math.min(1, Math.max(0, value))

export const collapseProgress = (collapse: Collapse): number =>
  typeof collapse === "number" ? clamp(collapse) : collapse ? 1 : 0

/** Whether the caller is driving the collapse continuously, not switching it. */
export const isScrollLinked = (collapse: Collapse): boolean =>
  typeof collapse === "number"

export const lerp = (from: number, to: number, progress: number): number =>
  from + (to - from) * progress

const round = (value: number) => Math.round(value * 100) / 100

/** Rounded to hundredths: enough for a smooth tween, short enough to diff. */
export const px = (value: number): string => `${round(value)}px`

/**
 * How opaque a collapsing row is at this progress. It fades faster than it
 * closes, so the last pixels of the row are already blank rather than reading
 * as text sliced off.
 */
export const fade = (progress: number): number =>
  round(Math.max(0, 1 - progress * 1.6))
