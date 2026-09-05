import { motionTokens } from "@factorialco/f0-core"
import type { Transition } from "motion/react"

const { duration, ease, settleMs } = motionTokens

/**
 * How long the window must hold still before it counts as settled rather than
 * mid-gesture. Matches the transcript's own `RESIZE_SETTLE_MS`, which solves
 * the same problem one layer down.
 */
export const LAYOUT_SETTLE_MS = settleMs

/**
 * The reserved width settling into place after a discrete change — opening the
 * panel, closing it, swapping which side is showing, collapsing the sidebar.
 *
 * Module-level so the reference is stable across renders. Motion cancels an
 * in-flight animation when it sees a different `transition` and does not
 * restart it, so handing it a fresh object literal each render is a way to
 * strand an animation part-way.
 */
export const CONTENT_TRANSITION: Transition = {
  duration: duration.base,
  ease: ease.outSwift,
}

/**
 * A surface changing what it *is* rather than where it sits: entering or
 * leaving fullscreen. Longer than `CONTENT_TRANSITION` because the distance is
 * the whole frame, and symmetric — the same button in both directions.
 */
export const REVEAL_TRANSITION: Transition = {
  duration: duration.reveal,
  ease: ease.outSwift,
}

/** No animation at all — either the layout is tracking an input, or motion is reduced. */
export const INSTANT_TRANSITION: Transition = { duration: 0 }

/**
 * Which transition the reserved width should use right now.
 *
 * A drag or a window resize is direct manipulation: the layout is following a
 * pointer and every eased frame is a frame of lag, because the tween restarts
 * toward a new target before the previous one has landed. Discrete changes are
 * the opposite — there is no input to keep up with, and the movement is the
 * whole point.
 *
 * `reducedMotion` has to be handled here rather than left to `MotionConfig`,
 * which only covers transform and layout animations. Everything the frame
 * moves is `padding`, `width`, `clipPath` or an inset — none of them are.
 *
 * Returns one of the stable module-level objects, never a fresh literal, so
 * flipping between them cannot strand an animation mid-flight. Safe to flip
 * because it only changes at the edges of a gesture, when the value is already
 * settled and nothing is animating.
 */
export const resolveLayoutTransition = (
  isTracking: boolean,
  reducedMotion = false
): Transition =>
  isTracking || reducedMotion ? INSTANT_TRANSITION : CONTENT_TRANSITION

/**
 * Which transition the docked panel's own container should use.
 *
 * It shares the content's transition for everything except the fullscreen
 * toggle, which is the one movement big enough to want its own duration —
 * and the same one in both directions, rather than the 150ms/400ms pair that
 * made expanding and collapsing feel like two different controls.
 *
 * Closing is deliberately NOT a fullscreen transition: `open` and the mode
 * reset land in separate commits, so a panel closed from fullscreen would
 * otherwise shrink to its docked width — on top of the content that has
 * already re-expanded — before disappearing. When the panel is on its way out
 * there is nothing to resize; it leaves from wherever it was.
 */
export const resolvePanelTransition = (
  isTracking: boolean,
  isFullscreenChange: boolean,
  reducedMotion = false
): Transition => {
  if (isTracking || reducedMotion) return INSTANT_TRANSITION
  return isFullscreenChange ? REVEAL_TRANSITION : CONTENT_TRANSITION
}

export type PanelWidthTargetInput = {
  /** The frame is too narrow to split, so the panel covers it. */
  coversFrame: boolean
  isFullscreen: boolean
  /**
   * The panel is on its way out, and it was filling the frame when it started.
   *
   * Its own input rather than something derivable from the two above, because
   * by the time the exit is playing neither is true any more: `open` goes
   * false first and the mode resets to "sidepanel" a commit later.
   */
  isClosingFromFullscreen: boolean
  /** This window is the one showing (split mode renders two). */
  isActivePanel: boolean
  reservedWidth: number
}

/**
 * How wide the panel's container should be right now.
 *
 * The one case worth spelling out is the last input: a panel closed from
 * fullscreen keeps the whole frame on the way out. Without that it shrinks to
 * its docked width first — on top of a main content that has already
 * re-expanded behind it — and only then disappears, which is two movements for
 * one gesture and reads as the panel collapsing into a column and being
 * deleted.
 */
export const resolvePanelWidthTarget = ({
  coversFrame,
  isFullscreen,
  isClosingFromFullscreen,
  isActivePanel,
  reservedWidth,
}: PanelWidthTargetInput): number | "100%" =>
  coversFrame || ((isFullscreen || isClosingFromFullscreen) && isActivePanel)
    ? "100%"
    : reservedWidth
