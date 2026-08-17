import { type Transition } from "motion/react"

import {
  EASE_OUT_SWIFT,
  layoutTransition,
  microEnterTransition,
  microExitTransition,
} from "@/lib/motion/f0-motion"

/**
 * The chat's motion vocabulary (WhatsApp-calibrated). Every PRESENCE
 * transition (something appearing/disappearing) comes from here: short
 * ease-out tweens with zero overshoot — underdamped springs read as bounce.
 * The transcript's own displacement (bottom follow) is Virtuoso's native
 * smooth scroll — no bespoke springs remain.
 *
 * The shared pieces now live in `@/lib/motion/f0-motion` so other surfaces can
 * reuse them without importing across domains; they are re-exported here so
 * every chat call site keeps working unchanged.
 */
export {
  EASE_OUT_SWIFT,
  layoutTransition,
  microEnterTransition,
  microExitTransition,
}

/** Per-item entry stagger for a coalesced appended batch — subtle rhythm,
 * not a parade (WhatsApp doesn't stagger at all; this stays just readable). */
export const ENTRY_STAGGER_MS = 35
/** Stagger ceiling: rows mount at FULL height with opacity 0, so an uncapped
 * stagger leaves blank rows sitting at the bottom of the transcript (a
 * reconnect can coalesce dozens of messages into one commit — the last one
 * would wait over a second). The first ~6 enter with rhythm, the rest land
 * together. */
export const ENTRY_STAGGER_CAP_MS = 210

/** Entry delay (in seconds, motion's unit) for the nth item of a batch. */
export const entryStaggerDelay = (order: number): number =>
  Math.min(order * ENTRY_STAGGER_MS, ENTRY_STAGGER_CAP_MS) / 1000

/** Row entry (messages, separators, system rows): opacity-only and FAST —
 * the row must be visible almost immediately while the transcript's follow
 * scroll (the only real movement, WhatsApp-style) settles under it. A slower
 * fade reads as an empty gap that fills in late. Staggered by the item's
 * batch order (capped — see `entryStaggerDelay`). */
export const rowEntryTransition = (order: number): Transition => ({
  duration: 0.14,
  ease: EASE_OUT_SWIFT,
  delay: entryStaggerDelay(order),
})
