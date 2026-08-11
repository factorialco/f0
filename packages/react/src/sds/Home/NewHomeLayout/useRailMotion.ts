import { useEffect, useLayoutEffect, useState } from "react"

import {
  animate,
  type MotionValue,
  type Transition,
  useMotionValue,
  useTransform,
} from "motion/react"

import { useReducedMotion } from "@/lib/a11y"

import {
  GENIE_CLOSE_MS,
  GENIE_GLYPH_DELAY_MS,
  GENIE_RETRACT_MS,
  genieCloseTransition,
  geniePanelGlideTransition,
  genieOpenTransition,
  INSTANT_TRANSITION,
  railWidthTransition,
  RIGHT_AREA_DELAY_MS,
  useDelayedTrue,
} from "../home-motion"

/** What the rail body is at this moment. One element, three presentations. */
export type RailMode =
  /** The rail's own column, holding every widget. */
  | "column"
  /** On its way into the strip: lifted out of the column, shrinking. */
  | "retracting"
  /** A single widget floating out of the glyph you hovered. */
  | "panel"

export interface RailMotion {
  mode: RailMode
  /**
   * Whether the rail BODY should be at full size and opacity.
   *
   * Only the floating panel is ever anything else. Collapsing is not the body's
   * animation to play: its cards go into their own glyphs one by one (see
   * `WidgetMotion`'s stow), and a block that also shrank would be the same
   * gesture happening twice at two scales.
   */
  bodyOut: boolean
  /** `display: none`, which arrives only once the retract has played out. */
  panelHidden: boolean
  transition: Transition
  /** The rail column's width, for the grid template's variable. */
  widthPx: MotionValue<string>
  /** When the strip's first glyph starts arriving. */
  glyphDelayMs: number
}

export interface RailMotionOptions {
  collapsed: boolean
  /** Whether a widget is floating out of the strip. */
  open: boolean
  /**
   * Whether the panel should travel to its new offset. True only between two
   * glyphs — see `NewHomeLayout`'s `openFromAnchor`.
   */
  glide: boolean
  /** Whether the rail is being drawn at all (the layout has a width for it). */
  drawn: boolean
  /** What the rail's column is worth right now: full width, or the strip. */
  width: number
}

/**
 * How the rail MOVES: the genie, and the column width the genie has to agree
 * with. Everything that decides it lives here so the layout can stay about
 * layout.
 *
 * THE GENIE. Collapsing must not read as one thing being swapped for another, so
 * the rail's presentation LAGS the decision: the grid column starts narrowing and
 * the strip starts arriving the moment `collapsed` flips, while the rail body
 * spends `GENIE_RETRACT_MS` shrinking toward the strip's corner before it becomes
 * the floating panel. Hovering a glyph mid-retract skips the rest of it — what you
 * asked for is the panel, and finishing an animation you interrupted is not an
 * answer.
 *
 * Nothing here unmounts to animate. Every one of these is the SAME render moved
 * around, because a rail widget that is rebuilt has lost whatever it had loaded,
 * timed or animated (see `WidgetContainer`'s `visibleWidgetId`).
 */
export const useRailMotion = ({
  collapsed,
  open,
  glide,
  drawn,
  width,
}: RailMotionOptions): RailMotion => {
  const reducedMotion = useReducedMotion()

  /**
   * FROM HERE ON, A CHANGE IS SOMETHING THAT HAPPENED — before it, the layout is
   * still working out where the rail goes.
   *
   * The first render cannot know how wide the box is (measuring needs the DOM), so
   * the rail's state always resolves a render late, and motion cannot tell that
   * correction apart from a collapse the user asked for: it would animate it, and
   * every narrow first load would open with the cards retracting into a strip they
   * were never out of.
   *
   * Effect-based ON PURPOSE. It has to turn true one commit LATER than the state
   * it qualifies — computed during render it would qualify the resolution itself,
   * which is the whole thing it exists to exclude.
   */
  const [live, setLive] = useState(false)
  useEffect(() => {
    if (drawn) setLive(true)
  }, [drawn])
  const animated = live && !reducedMotion

  const retracted = useDelayedTrue(collapsed, animated ? GENIE_RETRACT_MS : 0)
  const mode: RailMode = !collapsed
    ? "column"
    : retracted || open
      ? "panel"
      : "retracting"
  const inPanel = mode === "panel"
  const bodyOut = !inPanel || open

  /**
   * THE COLUMN, animated so the space the main column gets back arrives over the
   * same beat the cards retract over — snapped, the collapse reads as a jump with
   * an animation next to it.
   *
   * A motion value rather than an `animate` prop, committed from a LAYOUT effect,
   * because `jump` cannot be batched away: gating a `transition` prop instead is
   * not enough, since the unmeasured render and the measured one land in motion's
   * same batch and it reads the later one's transition.
   */
  const widthValue = useMotionValue(width)
  const widthPx = useTransform(widthValue, (px) => `${px}px`)
  useLayoutEffect(() => {
    // Nothing reads the variable until the rail is drawn, so there is nothing to
    // animate from either.
    if (!drawn) return
    if (!animated) {
      widthValue.jump(width)
      return
    }
    const controls = animate(widthValue, width, railWidthTransition)
    return () => controls.stop()
  }, [drawn, animated, width, widthValue])

  return {
    mode,
    bodyOut,
    widthPx,
    // `display: none` cannot be animated out of: applied on the frame the panel
    // closes it would delete the widget instead of letting it go into the glyph.
    panelHidden: useDelayedTrue(!open, reducedMotion ? 0 : GENIE_CLOSE_MS),
    // ONLY THE PANEL ANIMATES. In the column and mid-retract the body snaps to
    // full size, because the cards are the ones moving — animated, it would fade
    // the whole block in on top of every card growing out of its glyph.
    transition:
      !animated || !inPanel
        ? INSTANT_TRANSITION
        : {
            ...(open ? genieOpenTransition : genieCloseTransition),
            // Between two glyphs the panel glides; on the way out of one it must
            // not travel at all.
            y: glide ? geniePanelGlideTransition : INSTANT_TRANSITION,
          },
    // Collapsing puts the glyphs in as the cards finish retracting — they overlap
    // on purpose. On the first paint there is no retract to follow, so they are
    // simply the right area arriving after the main one.
    glyphDelayMs: live ? GENIE_GLYPH_DELAY_MS : RIGHT_AREA_DELAY_MS,
  }
}
