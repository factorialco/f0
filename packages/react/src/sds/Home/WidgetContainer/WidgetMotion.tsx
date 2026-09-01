import { type ReactNode } from "react"

import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import {
  ENTRANCE_RISE_PX,
  entranceTransition,
  INSTANT_TRANSITION,
  stowInTransition,
  stowOutTransition,
} from "../home-motion"

/** A widget's place in its column's arrival. */
export interface WidgetArrival {
  /** Position in the shared stagger. */
  order: number
  /** Milliseconds before the column's first widget. */
  delayMs: number
  /**
   * Whether the page is still arriving. False puts the widget straight where it
   * belongs: edit mode re-parents every card, and a wrapper that animated on every
   * mount would replay the arrival on each toggle of the pencil.
   */
  arriving: boolean
}

/** Where a widget goes while the rail is collapsed. */
export interface WidgetStow {
  /** Whether this widget belongs in the strip rather than in the column. */
  stowed: boolean
  /**
   * Whether to take the position without animating. True while the rail is
   * ALREADY collapsed, when a widget leaving or joining the strip means the
   * floating panel opened or closed — and the panel animates that itself, so the
   * card inside it must simply be full size.
   */
  instant: boolean
}

export interface WidgetMotionProps {
  arrival?: WidgetArrival
  stow?: WidgetStow
  /**
   * The widget's own `fullHeight`. This wrapper is the flex item the card used to
   * be, so it has to carry the full-height chain or the card's `h-full` resolves
   * against a box with no height of its own.
   */
  fullHeight?: boolean
  children: ReactNode
}

/**
 * Everything one widget does that isn't its content: how it ARRIVES, and how it
 * goes into and comes out of the strip.
 *
 * THE STOW IS A FADE, IN PLACE. The card used to travel: it scaled down onto its
 * OWN glyph, which meant measuring where the card sat (`offsetTop`) and being told
 * the strip's geometry (a `pitch`, a target `scale`) so the two could be mapped
 * onto each other. It read as the card being posted into the strip — but a card is
 * an order of magnitude wider than the 40px glyph it was shrinking onto, so most
 * of that journey was a widget's whole contents drawn at sizes nothing in it was
 * laid out for, sliding across the column it was leaving.
 *
 * What replaced it is the CROSSOVER: the cards fade out where they are while the
 * glyphs slide into the strip on the same beat (`GENIE_GLYPH_DELAY_MS` starts them
 * before this has finished), and neither state is ever drawn at a size it was not
 * designed at. Expanding runs the same fade the other way.
 *
 * Nothing is measured here any more, and nothing about the strip is passed in:
 * opacity is the whole of it, so there is no geometry left to get wrong.
 *
 * ONE wrapper, not one per behaviour: a second box would be a second flex item to
 * reason about, and adding or removing either of them mid-life would change the
 * tree's shape — which is what unmounts a render.
 */
export const WidgetMotion = ({
  arrival,
  stow,
  fullHeight,
  children,
}: WidgetMotionProps) => {
  const reducedMotion = useReducedMotion()

  const stowed = stow?.stowed ?? false
  const order = arrival?.order ?? 0

  const transition = reducedMotion
    ? INSTANT_TRANSITION
    : arrival?.arriving
      ? entranceTransition(order, arrival.delayMs)
      : !stow || stow.instant
        ? INSTANT_TRANSITION
        : stowed
          ? stowInTransition
          : stowOutTransition

  return (
    <motion.div
      className={cn(fullHeight && "h-full")}
      initial={
        arrival?.arriving
          ? { opacity: 0, y: reducedMotion ? 0 : ENTRANCE_RISE_PX }
          : false
      }
      // `y` is the ARRIVAL's, and it is written here as well as there because the
      // two share this one element: left out, a card that stowed while its own
      // entrance was still running would keep the rise it came in on forever.
      animate={{ opacity: stowed ? 0 : 1, y: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
