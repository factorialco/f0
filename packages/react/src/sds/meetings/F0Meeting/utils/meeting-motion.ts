import { type Transition } from "motion/react"

import { EASE_OUT_SWIFT } from "@/lib/motion/f0-motion"

/**
 * The room's motion vocabulary. Same rule as the chat — short ease-out tweens,
 * zero overshoot — plus one that is specific to video:
 *
 * NEVER use motion's `layout` on anything containing a `<video>`. The FLIP it
 * performs animates `scale`, and the video content visibly warps mid-flight.
 * Animate x / y / width / height explicitly instead.
 */

/** Surface mode change (floating ↔ fullscreen ↔ inline ↔ minimized). */
export const modeTransition: Transition = {
  duration: 0.22,
  ease: EASE_OUT_SWIFT,
}

/** Settling into a corner after a drag. */
export const snapTransition: Transition = {
  duration: 0.18,
  ease: EASE_OUT_SWIFT,
}

/** A tile moving or resizing because the grid re-solved. */
export const tileTransition: Transition = {
  duration: 0.2,
  ease: EASE_OUT_SWIFT,
}

/** Someone joined. */
export const tileEnterTransition: Transition = {
  duration: 0.16,
  ease: EASE_OUT_SWIFT,
}

/** Someone left. */
export const tileExitTransition: Transition = {
  duration: 0.12,
  ease: "easeIn",
}

/** While dragging or resizing the transform is written straight to the DOM. */
export const liveTransition: Transition = { duration: 0 }
