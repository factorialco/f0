import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

/** Air between the target's own box and the edge of the lit area. */
const HIGHLIGHT_PADDING = 8

type Rect = { top: number; left: number; width: number; height: number }

const rectOf = (element: HTMLElement): Rect => {
  const box = element.getBoundingClientRect()
  return {
    top: box.top - HIGHLIGHT_PADDING,
    left: box.left - HIGHLIGHT_PADDING,
    width: box.width + HIGHLIGHT_PADDING * 2,
    height: box.height + HIGHLIGHT_PADDING * 2,
  }
}

const isSameRect = (a: Rect, b: Rect) =>
  a.top === b.top &&
  a.left === b.left &&
  a.width === b.width &&
  a.height === b.height

/**
 * The target's box in viewport coordinates, kept current FRAME BY FRAME.
 *
 * Scroll and resize listeners plus a `ResizeObserver` would cover a static
 * page, and would still leave the hole behind every target that moves for any
 * other reason — a rail that expands, a widget that arrives, a card that
 * animates in. A coachmark is on screen for seconds and measures one element,
 * so it reads that element every frame and re-renders only when the box
 * actually moved.
 */
const useTargetRect = (target: HTMLElement): Rect => {
  const [rect, setRect] = useState<Rect>(() => rectOf(target))
  // Mirrors the state so a frame that measured the same box costs nothing.
  const measured = useRef(rect)

  useEffect(() => {
    const sync = () => {
      const next = rectOf(target)
      if (isSameRect(measured.current, next)) return
      measured.current = next
      setRect(next)
    }

    sync()

    // A target handed to us in an environment with no frames (jsdom without
    // `pretendToBeVisual`, SSR hydration) is measured once and left alone.
    if (typeof requestAnimationFrame !== "function") return

    let frame = requestAnimationFrame(function measure() {
      sync()
      frame = requestAnimationFrame(measure)
    })
    return () => cancelAnimationFrame(frame)
  }, [target])

  return rect
}

/** How long the light takes to travel from one step's element to the next's. */
const MOVE_MS = 300

/**
 * `true` for as long as the light is TRAVELLING — the window after a step change
 * in which the hole's geometry is transitioned rather than written.
 *
 * The transition cannot simply be left on: the hole is rewritten every frame to
 * follow its target (see `useTargetRect`), and a transition on those writes
 * makes the light lag half a second behind a scroll instead of sticking to what
 * it is lighting. It belongs to the step change alone, which is the one time the
 * hole has somewhere to go.
 */
const useTravelling = (target: HTMLElement, enabled: boolean) => {
  const [travelling, setTravelling] = useState(false)
  const previous = useRef(target)

  useEffect(() => {
    // Mount is not a move: the first step's light comes up where it comes up.
    if (previous.current === target) return
    previous.current = target
    if (!enabled) return

    setTravelling(true)
    const timer = setTimeout(() => setTravelling(false), MOVE_MS)
    return () => clearTimeout(timer)
  }, [target, enabled])

  return travelling
}

type CoachmarkSpotlightProps = {
  /** The element that stays lit. */
  target: HTMLElement
  /** Portal target, the panel's own. Defaults to `document.body`. */
  container?: HTMLElement | null
  /** A pointer landing anywhere on the page while the coachmark is up. */
  onOutsideInteraction: () => void
}

/**
 * THE PAGE, DIMMED EXCEPT FOR ONE ELEMENT — and unclickable while it is.
 *
 * One `fixed` shield over the viewport (`data-f0-coachmark-blocker`) with the
 * dim painted as a huge spread SHADOW cast by a box the size of the target: the
 * box itself stays clear, so the hole shows the real element underneath at full
 * strength and can have rounded corners. Four rects around the target would
 * need no shadow trick but cannot round the corner where two of them meet.
 *
 * The shield swallows every pointer press, the lit area included: the highlight
 * says WHERE to look, and a coachmark that let you act on the thing it is still
 * explaining would be read as done with. The press is reported instead — that is
 * what the panel wiggles at, and what eventually skips the walkthrough.
 */
export const CoachmarkSpotlight = ({
  target,
  container,
  onOutsideInteraction,
}: CoachmarkSpotlightProps) => {
  const rect = useTargetRect(target)
  const reducedMotion = useReducedMotion()
  const travelling = useTravelling(target, !reducedMotion)

  // BRINGS THE READER TO THE STEP. The shield covers every scroll region on the
  // page, so a wheel over it scrolls nothing: while the overlay is up, a target
  // below the fold is a target the reader cannot get to. Whoever lights an
  // element has to put it on screen first — and again on every step, since the
  // next one is regularly somewhere else entirely.
  //
  // INSTANTLY, not smoothly. A smooth scroll is an animation the browser
  // abandons the moment anything else touches that scroller — and a column that
  // renders only the widgets in view (`WidgetContainer`'s virtualization) does
  // exactly that as the scroll passes over it. The rail's own add control ended
  // up 6px from where it started, off screen, with the panel anchored to it.
  useEffect(() => {
    // jsdom has no scrolling to do.
    if (typeof target.scrollIntoView !== "function") return
    const bring = () =>
      target.scrollIntoView({ block: "center", inline: "nearest" })

    bring()

    // AND AGAIN NEXT FRAME. A virtualized column mounts the widgets the scroll
    // just brought into view, which changes its own height underneath the
    // scroll that was aiming at the old one — the target lands short of centre,
    // sometimes at the very edge of the scrollport. The second pass measures the
    // column it actually became.
    if (typeof requestAnimationFrame !== "function") return
    const frame = requestAnimationFrame(bring)
    return () => cancelAnimationFrame(frame)
  }, [target])

  if (typeof document === "undefined") return null

  return createPortal(
    <div
      // Decoration and a shield, never content: the coachmark it belongs to
      // says everything there is to read here.
      aria-hidden
      data-f0-coachmark-blocker
      // `z-[1249]`: just under the panel's own `z-50` (1250 in the f0 scale,
      // see core's tailwind config), so the shield covers the app and nothing
      // else — the panel it belongs to still paints over it.
      className="fixed inset-0 z-[1249] cursor-default"
      // Pointer DOWN rather than click: it is the press that has to be
      // swallowed, before the page under it can take focus or start a drag.
      onPointerDown={(event) => {
        event.preventDefault()
        onOutsideInteraction()
      }}
      // AND MOUSE DOWN, which is the one that moves focus. Preventing the
      // pointer event does not stop the mouse event that follows it, and its
      // default action is "focus what was pressed" — which, on a shield, means
      // blurring whatever held focus and leaving it on the body. A step that
      // focused its own field (`focusTarget`) lost that field's focus, and its
      // focus glow with it, on the reader's first press anywhere on the page.
      onMouseDown={(event) => event.preventDefault()}
    >
      {/* The lit region: a clear box with no edge of its own. NO BORDER — the
          element inside already has whatever border it has, and a second line
          around it drew a box around a box: two rounded rectangles a few pixels
          apart, neither of them the card.

          TWO SHADOWS, GLOW FIRST — and NEITHER OF THEM FLIPS WITH THE THEME.
          `--shadow` (the colour f0 casts every elevation shadow in, identical in
          light and dark) for the dim, and white for the glow: turning the lights
          down has a direction, and `background-overlay` does not have it —
          being white/40 in dark, it FOGS a dark app rather than dimming it,
          washing the page up towards the panel instead of away from it. The
          panel is a translucent surface over whatever is behind it, so a scrim
          that lightens takes the panel with it and the thing meant to be read
          ends up the same value as the page it is covering.

          The glow is light spilling off the lit element — the same thing a
          focused field does, for an element that may not have a focus state to
          lend us — and it is the only edge the light has now, which is why it
          is soft rather than tight. It has to come first in the list: shadows
          paint first over last, and the 100vmax dim would otherwise bury it. */}
      <div
        className={cn(
          "absolute rounded-xl",
          "shadow-[0_0_24px_6px_hsl(var(--white-100)/0.45),0_0_0_100vmax_hsl(var(--shadow)/0.5)]",
          // Only while it has somewhere to go — see `useTravelling`. The dim
          // itself never fades: the light travels to the next step's element,
          // rather than the page coming up to full brightness in between.
          travelling &&
            "transition-[top,left,width,height] duration-300 ease-out"
        )}
        style={rect}
      />
    </div>,
    container ?? document.body
  )
}
