import type { Transition } from "motion/react"

/**
 * How long the frame must hold still before it counts as settled rather than
 * mid-gesture. Matches the transcript's own `RESIZE_SETTLE_MS`, which solves
 * the same problem one layer down.
 */
export const LAYOUT_SETTLE_MS = 120

/**
 * Fast start, soft landing, no overshoot (Material "emphasized decelerate").
 *
 * Same curve as `EASE_OUT_SWIFT` in `sds/chat/F0Chat/utils/chat-motion.ts`,
 * copied rather than imported because a pattern should not depend on a
 * domain module. They want to be one token in `f0-core` eventually.
 */
const EASE_OUT_SWIFT: [number, number, number, number] = [0.05, 0.7, 0.1, 1]

/**
 * The reserved width settling into place after a discrete change — opening the
 * panel, closing it, swapping which side is showing.
 *
 * Module-level so the reference is stable across renders. Motion cancels an
 * in-flight animation when it sees a different `transition` and does not
 * restart it, so handing it a fresh object literal each render is a way to
 * strand an animation part-way.
 */
export const CONTENT_TRANSITION: Transition = {
  duration: 0.22,
  ease: EASE_OUT_SWIFT,
}

/** No animation at all — the layout is tracking an input, not playing a move. */
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
 * Returns one of two stable module-level objects, never a fresh literal, so
 * flipping between them cannot strand an animation mid-flight. Safe to flip
 * because it only changes at the edges of a gesture, when the value is already
 * settled and nothing is animating.
 */
export const resolveLayoutTransition = (isTracking: boolean): Transition =>
  isTracking ? INSTANT_TRANSITION : CONTENT_TRANSITION
