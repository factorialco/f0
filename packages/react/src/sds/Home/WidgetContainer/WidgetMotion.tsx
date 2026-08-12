import { type ReactNode, useLayoutEffect, useRef, useState } from "react"

import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import {
  ENTRANCE_RISE_PX,
  entranceTransition,
  GENIE_ORIGIN,
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
  /** Vertical distance between the glyphs widgets stow onto. */
  pitch: number
  /** How small a widget has to get to be a glyph. */
  scale: number
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
 * goes into and comes out of its glyph.
 *
 * THE STOW is what makes a card and its glyph read as one object. The card scales
 * down onto its OWN glyph — not toward the strip in general — and fades as the
 * glyph fades in underneath it; opening the rail runs it backwards, so each glyph
 * looks like it grows into the widget it stands for.
 *
 * The mapping needs no measuring of the strip, because the strip's geometry is
 * known: glyphs are a fixed `pitch` apart from the top of this column, and their
 * right edge is this column's right edge (both are pinned there by
 * `NewHomeLayout`). So the widget's right edge is already where it needs to be —
 * scaling from that corner leaves only a vertical distance to cover, and the only
 * thing to look up is where this widget currently sits.
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
  const ref = useRef<HTMLDivElement>(null)
  const [stowY, setStowY] = useState(0)

  const stowed = stow?.stowed ?? false
  const order = arrival?.order ?? 0

  useLayoutEffect(() => {
    if (!stow?.stowed) return
    const el = ref.current
    // A widget the strip already owns is `display: none` and has no box to
    // measure — and the offset it came in on is exactly where it grows back FROM,
    // so keeping it is right as well as necessary.
    if (!el?.offsetParent) return
    // `offsetTop` rather than a rect: it is a LAYOUT value, so it reports where
    // the widget belongs even once this very element is scaled away from there.
    setStowY(order * stow.pitch - el.offsetTop)
  }, [stow?.stowed, stow?.pitch, order])

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
      ref={ref}
      className={cn(fullHeight && "h-full")}
      // The glyph is at this corner of the column, so this is the corner a widget
      // shrinks onto and grows out of.
      style={{ transformOrigin: GENIE_ORIGIN }}
      initial={
        arrival?.arriving
          ? { opacity: 0, y: reducedMotion ? 0 : ENTRANCE_RISE_PX }
          : false
      }
      animate={{
        opacity: stowed ? 0 : 1,
        y: stowed ? stowY : 0,
        scale: stowed ? (stow?.scale ?? 1) : 1,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
