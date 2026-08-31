import { type ReactNode, useEffect, useRef, useState } from "react"

import { AnimatePresence, motion, type Transition } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

/**
 * Home's motion vocabulary. Two separate things happen on this page, and they
 * must not borrow each other's timing:
 *
 * ARRIVAL — the page lands the way it is read. The MAIN column's blocks rise in
 * on a stagger and the SIDE RAIL follows them, because the rail is context and
 * context that arrives with the content it is context for reads as noise.
 *
 * THE GENIE — collapsing the rail must not read as one thing being swapped for
 * another. The column of cards RETRACTS toward the strip — scaled from its top
 * right corner, which is exactly where the strip is — while the glyphs shrink
 * into place; hovering a glyph sends the same widget back out of that corner.
 * Expanding reverses it: the glyphs bloom outward as the cards grow back in.
 *
 * Every value here is a TRANSFORM or an OPACITY, so the whole gesture is
 * composited: nothing in this file animates a width, a height or an offset. Two
 * exceptions, both of them the LAYOUT ITSELF changing shape rather than
 * something moving through it — the rail's grid column (`railWidthTransition`)
 * and an item's height as it joins or leaves a slot (`HomeSlotItem`).
 */

/** Fast start, soft landing, NO overshoot (Material "emphasized decelerate"). */
export const HOME_EASE: [number, number, number, number] = [0.05, 0.7, 0.1, 1]

/** For anything that must not animate at all (reduced motion, first paint). */
export const INSTANT_TRANSITION: Transition = { duration: 0 }

/* ------------------------------- arrival -------------------------------- */

/** How long one block takes to arrive. */
export const ENTRANCE_MS = 320
/** How far it rises on the way in — small: this is a settle, not a slide. */
export const ENTRANCE_RISE_PX = 10
/** Gap between consecutive blocks. Rhythm, not a parade. */
export const ENTRANCE_STAGGER_MS = 55
/**
 * Stagger ceiling. Blocks hold their space from the first frame (they arrive at
 * opacity 0, not at zero height), so an uncapped stagger would leave the bottom
 * of a long column blank for over a second. The first ~6 keep the rhythm and
 * the rest land together.
 */
export const ENTRANCE_STAGGER_CAP_MS = 330
/**
 * How long the right area waits for the main one. Long enough that the main
 * column is unmistakably first, short enough that the page still reads as ONE
 * arrival rather than two.
 */
export const RIGHT_AREA_DELAY_MS = 220

/** When the nth block of a stagger starts, in seconds (motion's unit). */
export const entranceDelay = (order: number, delayMs = 0): number =>
  (delayMs + Math.min(order * ENTRANCE_STAGGER_MS, ENTRANCE_STAGGER_CAP_MS)) /
  1000

export const entranceTransition = (
  order: number,
  delayMs = 0,
  reducedMotion = false
): Transition =>
  reducedMotion
    ? INSTANT_TRANSITION
    : {
        duration: ENTRANCE_MS / 1000,
        ease: HOME_EASE,
        delay: entranceDelay(order, delayMs),
      }

/* -------------------------------- genie --------------------------------- */

/**
 * The collapsed strip sits at the rail's top right corner, so that corner is
 * where a widget retracts to and comes back out of. Every genie scale is taken
 * from here — it is the whole reason the two states read as the same widget.
 */
export const GENIE_ORIGIN = "top right"
/** How long the column of cards spends shrinking into the strip. */
export const GENIE_RETRACT_MS = 180
/** …and how long a floating widget spends going back in. */
export const GENIE_CLOSE_MS = 140
/**
 * The glyphs start arriving BEFORE the cards have finished retracting: the
 * overlap is what makes it read as a transfer rather than as a sequence of two
 * animations.
 */
export const GENIE_GLYPH_DELAY_MS = 90
/** How small a retracted widget gets before it is gone. */
export const GENIE_RETRACTED_SCALE = 0.9
/** …and how far toward the strip it slides while it shrinks. */
export const GENIE_RETRACTED_OFFSET_PX = 10
/** A glyph arrives from LARGER than life: a card that just shrank into it. */
export const GENIE_GLYPH_ENTER_SCALE = 1.18
/** Expanding, it leaves the other way — blooming out into the card it becomes. */
export const GENIE_GLYPH_EXIT_SCALE = 1.3
/** A glyph whose widget is floating, held slightly forward. */
export const GENIE_GLYPH_OPEN_SCALE = 1.06
/** …and the pointer's own feedback on it, under the open state. */
export const GENIE_GLYPH_HOVER_SCALE = 1.08
export const GENIE_GLYPH_TAP_SCALE = 0.94

/** Coming OUT: physical, with the faintest settle (ζ ≈ 0.82 — no visible bounce). */
export const genieOpenTransition: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 32,
  mass: 0.9,
}
/** Going IN: a tween. A spring's overshoot on the way out reads as a bounce. */
export const genieCloseTransition: Transition = {
  duration: GENIE_CLOSE_MS / 1000,
  ease: "easeIn",
}
/** The glyphs' own arrival — springier than the panel; they are small. */
export const glyphTransition: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 26,
  mass: 0.7,
}
/**
 * Moving the OPEN panel from one glyph to the next. It glides rather than cuts,
 * which is what says "same panel, different widget" — and it only ever runs
 * between two glyphs, never on the way out of one (see `NewHomeLayout`).
 */
export const geniePanelGlideTransition: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 38,
  mass: 0.8,
}
/**
 * A widget going INTO its glyph. It ACCELERATES away — a card being stowed should
 * leave, not be set down — and it has to be gone by the time the strip owns it
 * (`GENIE_RETRACT_MS`), because that is when the column stops drawing it at all.
 */
export const stowInTransition: Transition = {
  duration: GENIE_RETRACT_MS / 1000,
  ease: "easeIn",
}
/**
 * …and coming back OUT of it. The same spring the floating panel uses, so a
 * widget growing out of a glyph and a widget springing out of a glyph are visibly
 * the same gesture at two sizes.
 */
export const stowOutTransition: Transition = genieOpenTransition

/**
 * The rail's grid column, collapsing from its full width to the strip. The one
 * animated LAYOUT value on the page: the main column has to give the space back
 * over the same beat the cards retract over, or the collapse reads as a jump
 * with an animation next to it.
 */
// Left unannotated on purpose: this one is handed to `animate()` for a single
// motion value, whose options are narrower than a whole element's `Transition`.
export const railWidthTransition = {
  duration: 0.28,
  ease: HOME_EASE,
}

export const withReducedMotion = (
  transition: Transition,
  reducedMotion: boolean
): Transition => (reducedMotion ? INSTANT_TRANSITION : transition)

/* -------------------------------- hooks --------------------------------- */

/**
 * `value`, but only once it has been true for `delayMs` — and false the INSTANT
 * it turns false.
 *
 * For a presentation change that has to wait for an exit animation to finish:
 * the flag that would cut the animation short (a `hidden`, a reposition) arrives
 * late, while the flag that STARTS one is never delayed. Already-true at mount
 * is not a change, so it is not delayed either.
 */
export const useDelayedTrue = (value: boolean, delayMs: number): boolean => {
  const [delayed, setDelayed] = useState(value)

  useEffect(() => {
    if (!value) {
      setDelayed(false)
      return
    }
    if (delayMs <= 0) {
      setDelayed(true)
      return
    }
    const timer = setTimeout(() => setDelayed(true), delayMs)
    return () => clearTimeout(timer)
  }, [value, delayMs])

  return delayed
}

/**
 * False on mount, true once `delayMs` has passed — for "that moment is over".
 *
 * The mirror of `useDelayedTrue`, which reports a value that has SETTLED; this
 * one reports that a WINDOW has closed, so it must start out false however long
 * the window is.
 */
export const useElapsed = (delayMs: number): boolean => {
  const [elapsed, setElapsed] = useState(delayMs <= 0)

  useEffect(() => {
    if (delayMs <= 0) {
      setElapsed(true)
      return
    }
    const timer = setTimeout(() => setElapsed(true), delayMs)
    return () => clearTimeout(timer)
  }, [delayMs])

  return elapsed
}

/** How long the whole arrival takes, from the first block to the last landing. */
export const arrivalWindowMs = (delayMs = 0): number =>
  delayMs + ENTRANCE_STAGGER_CAP_MS + ENTRANCE_MS

/* ------------------------------ components ------------------------------ */

export interface HomeEntranceProps {
  /** Position in the stagger. 0 lands first. */
  order?: number
  /** Milliseconds before the stagger's first block. */
  delayMs?: number
  /**
   * Whether this block still has an arrival to play. `false` puts it straight
   * where it belongs — for a wrapper that MOUNTS after the page has arrived, which
   * is not the same thing as arriving: entering edit mode re-parents every card
   * (the sortable branch is a different tree), and a wrapper that animated on
   * every mount would replay the whole page's arrival on each toggle.
   *
   * The wrapper still renders either way. Dropping it once the arrival is over
   * would change the tree's shape, and changing shape is what unmounts a render.
   */
  arriving?: boolean
  /**
   * The wrapped widget's own `fullHeight`. This wrapper becomes the flex item
   * the card used to be, so it has to carry the full-height chain or the card's
   * `h-full` resolves against a box that has no height of its own.
   */
  fullHeight?: boolean
  className?: string
  children: ReactNode
}

/* ------------------------------ item churn ------------------------------ */

/**
 * ONE ITEM COMING OR GOING — a row dismissed, a request that just landed.
 *
 * A widget's items change under the user while they are reading them, and an
 * item that vanishes between two blinks leaves them wondering which one they
 * just lost. The gesture is deliberately small: this is a list correcting
 * itself, not the page announcing something.
 *
 * THE ITEM'S HEIGHT IS ANIMATED, and it is the exception this file's rule names
 * (see the header): everything else here is a transform or an opacity.
 *
 * It has to be. A row that only faded and then vanished gave its space back in
 * ONE FRAME, and everything under it — the rest of the list, the widget's footer
 * button, the card's own bottom edge — snapped up by a row's height while the
 * fade was still settling. Sliding the neighbours with `layout` fixes the rows
 * and nothing else: the footer is not in the list, so it still jumped. Closing
 * the row's own height is the only version where the CARD shrinks continuously,
 * and everything standing on it follows for free.
 *
 * The cost is `overflow: hidden` on every item, which would clip a focus ring
 * drawn outside its element — which is why `HomeListItem`'s is an INSET ring.
 */
export const ITEM_ENTER_MS = 220
export const ITEM_EXIT_MS = 140
/** How far an arriving item rises — half the page's, because it is one row. */
export const ITEM_RISE_PX = 5

/** Coming IN: the page's own ease, at a row's pace. */
export const itemEnterTransition: Transition = {
  duration: ITEM_ENTER_MS / 1000,
  ease: HOME_EASE,
}
/** Going OUT: quicker, and accelerating — a row that leaves should be gone. */
export const itemExitTransition: Transition = {
  duration: ITEM_EXIT_MS / 1000,
  ease: "easeIn",
}
/**
 * The row's own height opening and closing. A spring, because this is the
 * movement the eye actually follows — everything below it, the footer button and
 * the card's bottom edge included, rides on it — and a spring is what makes that
 * read as the card SETTLING rather than as a box being resized.
 *
 * No bounce (ζ ≈ 0.87): a card that overshot its new height would draw more
 * attention to the gap than to the row that left it.
 */
export const itemSizeTransition: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 40,
  mass: 0.8,
}

/**
 * Past this many items changing at once, the churn animation is NOT what is
 * happening — the list is being replaced.
 *
 * "View more" revealing thirty rows, a filter clearing, a widget's params
 * swapping its whole contents: animating each of those individually is thirty
 * springs on thirty heights (expensive) resolving into one shove of the card
 * (unreadable). The gesture says "this one item changed", so it is only ever
 * spent on a change small enough for that to be true; a bigger one is simply
 * the new list.
 */
export const ITEM_CHURN_BULK_AFTER = 4

/**
 * Whether the item count changed by more than {@link ITEM_CHURN_BULK_AFTER}
 * since the last render — i.e. whether THIS render is a bulk replacement rather
 * than an item coming or going. Feed it to {@link HomeSlotItem}'s `animated`.
 */
export const useIsBulkChange = (
  count: number,
  threshold = ITEM_CHURN_BULK_AFTER
): boolean => {
  const previous = useRef(count)
  // Read during render, committed after it: the answer has to be available to
  // the same render that draws the new items, which an effect cannot do.
  const isBulk = Math.abs(count - previous.current) > threshold

  useEffect(() => {
    previous.current = count
  })

  return isBulk
}

/**
 * The list an item's arrival and departure is animated in. Wrap the items of
 * ANY slot in it — `list` rows, `event-list` events, a bespoke renderer's own —
 * and give each {@link HomeSlotItem} the item's stable id as its key.
 *
 * `initial={false}`: the items already there when the widget mounts have not
 * arrived, they simply are. The widget's own entrance (`HomeEntrance`) is what
 * brings the whole card in; without this every list would replay a row-by-row
 * arrival inside it.
 */
export const HomeSlotItems = ({ children }: { children: ReactNode }) => (
  <AnimatePresence initial={false}>{children}</AnimatePresence>
)

export interface HomeSlotItemProps {
  className?: string
  /**
   * `false` puts the item straight where it belongs, with no enter or exit —
   * for a render that is replacing the list rather than changing one item of it
   * (see {@link useIsBulkChange}).
   */
  animated?: boolean
  children: ReactNode
}

/**
 * One item inside a {@link HomeSlotItems}. MUST carry the item's stable id as
 * its `key` — that key is the only thing telling the list which items are the
 * same ones between two renders, and a positional key would animate every row
 * below a removal as though it had been replaced.
 */
export const HomeSlotItem = ({
  className,
  animated = true,
  children,
}: HomeSlotItemProps) => {
  const reducedMotion = useReducedMotion()
  // One switch for both reasons the gesture is skipped: the user asked for no
  // motion, or this render is a new list rather than a changed one.
  const still = reducedMotion || !animated

  // `height: auto` is a real target for motion — it measures the item and
  // animates to that number — but the row must be clipped while the number is
  // wrong for its content, hence `overflow: hidden` throughout.
  //
  // The EXIT still has to be declared even when nothing animates: it is what
  // `AnimatePresence` waits on, and an item with no exit at all is removed
  // without one. At zero duration that is exactly the instant removal wanted.
  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden" }}
      initial={still ? false : { opacity: 0, height: 0, y: ITEM_RISE_PX }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{
        opacity: 0,
        height: 0,
        transition: {
          ...withReducedMotion(itemExitTransition, still),
          // The fade is quick and the closing is a spring, so the row is
          // already invisible while its space is still being given back.
          height: withReducedMotion(itemSizeTransition, still),
        },
      }}
      transition={{
        ...withReducedMotion(itemEnterTransition, still),
        height: withReducedMotion(itemSizeTransition, still),
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * One block arriving: a fade with a small rise, at its place in the shared
 * stagger. Opacity and transform only, so a column of these costs one
 * composited layer each and no layout.
 */
export const HomeEntrance = ({
  order = 0,
  delayMs = 0,
  arriving = true,
  fullHeight,
  className,
  children,
}: HomeEntranceProps) => {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(fullHeight && "h-full", className)}
      // `initial={false}` is motion's "already there": it writes the target on the
      // first render and animates nothing.
      initial={
        arriving
          ? { opacity: 0, y: reducedMotion ? 0 : ENTRANCE_RISE_PX }
          : false
      }
      animate={{ opacity: 1, y: 0 }}
      transition={entranceTransition(order, delayMs, reducedMotion)}
    >
      {children}
    </motion.div>
  )
}
