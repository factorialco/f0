import { NestedExpandAnimation } from "./types"

/**
 * Mount variants for the rows revealed when a nested node expands.
 *
 * These are intentionally slower than the row variants used while data is
 * loading (`getAnimationVariants` from the datasource, tuned for network
 * waterfalls): expansion often reveals cached rows in a single commit, so
 * the animation itself has to carry the reveal. All variants animate only
 * `opacity` and `transform` (GPU-composited, safe on `<tr>` elements), never
 * layout-affecting properties.
 *
 * The `custom` value is the row's stagger index (sibling index + depth
 * contribution, see `mountStaggerIndex`), so sequenced variants cascade
 * level by level even for fully cached subtrees.
 */

const STAGGER_STEP = 0.05
const MAX_STAGGER_DELAY = 1.2

const staggerDelay = (index: number) =>
  Math.min(index * STAGGER_STEP, MAX_STAGGER_DELAY)

/** Ease used across the design system for reveals (e.g. collapsible messages). */
const REVEAL_EASE = [0.165, 0.84, 0.44, 1] as const

export const getExpandAnimationVariants = (
  animation: Exclude<NestedExpandAnimation, "none">
) => {
  switch (animation) {
    // All revealed rows fade in at once
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: () => ({
          opacity: 1,
          transition: { duration: 0.3, ease: REVEAL_EASE },
        }),
      }

    // Rows fade in and settle downwards one after another
    case "stagger":
      return {
        hidden: { opacity: 0, y: -10 },
        visible: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: staggerDelay(index),
            duration: 0.3,
            ease: REVEAL_EASE,
          },
        }),
      }

    // Rows slide in from the left with a soft spring, one after another
    case "slide":
      return {
        hidden: { opacity: 0, x: -24 },
        visible: (index: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: staggerDelay(index),
            type: "spring" as const,
            stiffness: 260,
            damping: 26,
          },
        }),
      }

    // Rows scale up into place with a springy pop, one after another
    case "pop":
      return {
        hidden: { opacity: 0, scale: 0.94, y: -6 },
        visible: (index: number) => ({
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: staggerDelay(index),
            type: "spring" as const,
            stiffness: 320,
            damping: 20,
          },
        }),
      }
  }
}
