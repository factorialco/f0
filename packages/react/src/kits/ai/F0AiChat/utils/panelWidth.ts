import { panelWidths } from "@factorialco/f0-core"

const { min: MIN, max: MAX, mainMin: MAIN_MIN } = panelWidths

/**
 * Below this the frame cannot seat the panel and the main content at their
 * minimums at the same time, so splitting stops being a layout and starts
 * being two unusable columns.
 */
export const SPLIT_MIN_FRAME = MAIN_MIN + MIN

export type PanelBounds = {
  min: number
  max: number
  /** The frame is too narrow to split: the panel should cover it instead. */
  shouldOverlay: boolean
}

/**
 * How wide the side panel is allowed to be, given the room the frame actually
 * has. Three tiers, continuous where they meet:
 *
 *   frame > 1272   the 712 cap governs — nothing changes from the old behaviour
 *   1120 … 1272    the main content's floor governs (panel = frame - 560)
 *   860 … 1120     neither minimum fits, so the two split the frame evenly
 *   frame < 860    no split at all; the caller overlays
 *
 * The tiers meet without a step: at 1120 both `frame - 560` and `frame / 2`
 * are 560, and at 1272 `frame - 560` is exactly the 712 cap.
 *
 * Cutting to overlay at 860 rather than letting the even split run down to
 * nothing is what keeps the panel from ever rendering below `MIN`. That floor
 * is load-bearing: the composer's mention popover and emoji autocomplete are
 * absolutely positioned inside the panel rather than portalled, so they have
 * nowhere to go once it is narrower than they are.
 */
export const panelBoundsFor = (frameWidth: number): PanelBounds => {
  // Not measured yet (first paint, a hidden container). Fall back to the
  // absolute bounds rather than collapsing the panel on a reading of zero.
  if (!Number.isFinite(frameWidth) || frameWidth <= 0) {
    return { min: MIN, max: MAX, shouldOverlay: false }
  }

  if (frameWidth < SPLIT_MIN_FRAME) {
    return { min: MIN, max: MAX, shouldOverlay: true }
  }

  const max = Math.min(MAX, Math.max(frameWidth - MAIN_MIN, frameWidth / 2))
  // `max` can only dip under MIN below SPLIT_MIN_FRAME, which returned above —
  // but clamping the floor to it keeps the pair ordered for any caller.
  return { min: Math.min(MIN, max), max, shouldOverlay: false }
}

/** The requested width, held inside what the frame can actually give it. */
export const clampPanelWidth = (
  requested: number,
  frameWidth: number
): number => {
  const { min, max } = panelBoundsFor(frameWidth)
  return Math.max(min, Math.min(max, requested))
}
