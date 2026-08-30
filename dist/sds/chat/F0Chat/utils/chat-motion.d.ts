import { Transition } from 'motion/react';
/**
 * The chat's motion vocabulary (WhatsApp-calibrated). Every PRESENCE
 * transition (something appearing/disappearing) comes from here: short
 * ease-out tweens with zero overshoot — underdamped springs read as bounce.
 * The transcript's own displacement (bottom follow) is Virtuoso's native
 * smooth scroll — no bespoke springs remain.
 */
/** Per-item entry stagger for a coalesced appended batch — subtle rhythm,
 * not a parade (WhatsApp doesn't stagger at all; this stays just readable). */
export declare const ENTRY_STAGGER_MS = 35;
/** Stagger ceiling: rows mount at FULL height with opacity 0, so an uncapped
 * stagger leaves blank rows sitting at the bottom of the transcript (a
 * reconnect can coalesce dozens of messages into one commit — the last one
 * would wait over a second). The first ~6 enter with rhythm, the rest land
 * together. */
export declare const ENTRY_STAGGER_CAP_MS = 210;
/** Entry delay (in seconds, motion's unit) for the nth item of a batch. */
export declare const entryStaggerDelay: (order: number) => number;
/** Fast start, soft landing, NO overshoot (Material "emphasized decelerate"). */
export declare const EASE_OUT_SWIFT: [number, number, number, number];
/** Row entry (messages, separators, system rows): opacity-only and FAST —
 * the row must be visible almost immediately while the transcript's follow
 * scroll (the only real movement, WhatsApp-style) settles under it. A slower
 * fade reads as an empty gap that fills in late. Staggered by the item's
 * batch order (capped — see `entryStaggerDelay`). */
export declare const rowEntryTransition: (order: number) => Transition;
/** Micro-presences (reaction chips, composer chips, alerts, buttons). */
export declare const microEnterTransition: Transition;
export declare const microExitTransition: Transition;
/** For every `layout`/`layout="position"` element: framer-motion's DEFAULT
 * transform transition is an underdamped spring (stiffness 500 / damping 25,
 * ζ≈0.56 — it visibly bounces), so layout shifts must always carry an
 * explicit non-bouncy transition: `{ ...micro..., layout: layoutTransition }`. */
export declare const layoutTransition: Transition;
