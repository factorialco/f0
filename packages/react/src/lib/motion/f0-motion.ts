import { motionTokens } from "@factorialco/f0-core"
import { type Transition } from "motion/react"

/**
 * The shared presence vocabulary: short ease-out tweens with zero overshoot.
 * Underdamped springs read as bounce, which is wrong for product chrome.
 *
 * Calibrated for the chat and reused by every surface that has to feel like it
 * belongs to the same product (chat, meetings).
 */

/**
 * Fast start, soft landing, NO overshoot (Material "emphasized decelerate").
 *
 * Re-exported from `f0-core` rather than declared here: the application frame
 * moves the windows these surfaces live inside, and two copies of the same
 * numbers describing the same seam is how they drift apart.
 */
export const EASE_OUT_SWIFT = motionTokens.ease.outSwift

/** Micro-presences: chips, alerts, buttons, tooltips. */
export const microEnterTransition: Transition = {
  duration: 0.16,
  ease: EASE_OUT_SWIFT,
}

export const microExitTransition: Transition = {
  duration: 0.12,
  ease: "easeIn",
}

/**
 * For every `layout` / `layout="position"` element: motion's DEFAULT transform
 * transition is an underdamped spring (stiffness 500 / damping 25, ζ≈0.56 — it
 * visibly bounces), so layout shifts must always carry an explicit transition.
 */
export const layoutTransition: Transition = {
  duration: 0.15,
  ease: EASE_OUT_SWIFT,
}
