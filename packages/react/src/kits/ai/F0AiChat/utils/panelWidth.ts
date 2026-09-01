import { panelWidths } from "@factorialco/f0-core"

const {
  min: MIN,
  max: MAX,
  default: DEFAULT,
  mainMin: MAIN_MIN,
  mainHardMin: MAIN_HARD_MIN,
  splitMinFrame: SPLIT_MIN,
} = panelWidths

/**
 * Below this the frame is too narrow to read as two columns, so the panel
 * covers it instead of splitting it.
 *
 * Its own number rather than `mainMin + min`: those answer different
 * questions, and deriving one from the other meant giving the content more
 * breathing room on a laptop also stopped a half-screen window from splitting.
 */
export const SPLIT_MIN_FRAME = SPLIT_MIN

export type PanelBounds = {
  min: number
  /** How far a deliberate drag may go — bounded by the content's hard floor. */
  max: number
  /**
   * Where the panel sits when the user has not said otherwise: the content
   * keeps `mainMin` and the panel takes what is left, down to `min`.
   *
   * Separate from `max` so that "served the content first" is the default
   * without also being a cage — see `resolvePanelWidth`.
   */
  autoMax: number
  /** The frame is too narrow to split: the panel should cover it instead. */
  shouldOverlay: boolean
}

/**
 * How wide the side panel may be, given the room the frame actually has.
 *
 * Two answers, because there are two questions. `autoMax` is what the layout
 * decides on its own: the content is served up to `mainMin` and the panel
 * takes what is left, down to `min`. `max` is how far a deliberate drag may
 * push past that, stopping at the content's hard floor.
 *
 *   frame > 1352   the 712 cap governs — unchanged from the old behaviour
 *   940 … 1352     the content's floor governs (auto = frame - 640)
 *   700 … 940      auto sits at `min`; a drag can still reach frame - 400
 *   frame < 700    no split at all; the caller overlays
 *
 * The content is served first because these two surfaces are not worth the
 * same at a given width: a chat is legible at 300px, whereas a table with
 * filters and bulk actions is not. An earlier version floored the panel at
 * half the frame, which read as fair and cost the content up to 130px exactly
 * where it was scarcest.
 *
 * `autoMax` meets its neighbours without a step: at 940 `frame - 640` is
 * exactly `MIN`, and at 1352 it is exactly the 712 cap.
 *
 * Cutting to overlay at 700 rather than letting the content squeeze on forever
 * is what keeps the panel from ever rendering below `MIN`. That floor is
 * load-bearing: the composer's mention popover and emoji autocomplete are
 * absolutely positioned inside the panel rather than portalled, so they have
 * nowhere to go once it is narrower than they are.
 */
export const panelBoundsFor = (frameWidth: number): PanelBounds => {
  // Not measured yet (first paint, a hidden container). Fall back to the
  // absolute bounds rather than collapsing the panel on a reading of zero.
  if (!Number.isFinite(frameWidth) || frameWidth <= 0) {
    return { min: MIN, max: MAX, autoMax: MAX, shouldOverlay: false }
  }

  if (frameWidth < SPLIT_MIN_FRAME) {
    return { min: MIN, max: MAX, autoMax: MAX, shouldOverlay: true }
  }

  const autoMax = Math.min(MAX, Math.max(frameWidth - MAIN_MIN, MIN))
  const max = Math.min(MAX, Math.max(frameWidth - MAIN_HARD_MIN, MIN))
  return { min: MIN, max, autoMax, shouldOverlay: false }
}

/**
 * The width to actually render, from the user's stored preference.
 *
 * An untouched preference is treated as "no opinion", so the frame is free to
 * serve the content first — which is what puts the panel at its minimum on a
 * narrow window. Once the user has dragged, that is an opinion, and it is
 * honoured as far as the content's hard floor allows.
 *
 * Comparing against the default is enough to tell the two apart: dragging to
 * exactly the default is indistinguishable from never having dragged, and
 * both should behave the same way anyway.
 */
export const resolvePanelWidth = (
  preference: number,
  frameWidth: number
): number => {
  const { min, max, autoMax } = panelBoundsFor(frameWidth)
  const ceiling = preference === DEFAULT ? autoMax : max
  return Math.max(min, Math.min(ceiling, preference))
}

/** The requested width, held inside what a drag is allowed to reach. */
export const clampPanelWidth = (
  requested: number,
  frameWidth: number
): number => {
  const { min, max } = panelBoundsFor(frameWidth)
  return Math.max(min, Math.min(max, requested))
}
