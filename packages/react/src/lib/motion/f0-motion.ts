import { type Transition } from "motion/react"

/**
 * The shared presence vocabulary: short ease-out tweens with zero overshoot.
 * Underdamped springs read as bounce, which is wrong for product chrome.
 *
 * Calibrated for the chat and reused by every surface that has to feel like it
 * belongs to the same product (chat, meetings).
 */

/** Fast start, soft landing, NO overshoot (Material "emphasized decelerate"). */
export const EASE_OUT_SWIFT: [number, number, number, number] = [
  0.05, 0.7, 0.1, 1,
]

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
