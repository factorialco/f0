import { RefObject, useEffect, useRef, useState } from "react"

import { isElementScroller, scrollParentOf } from "./scrolling"

/**
 * How many pixels of scrolling it takes to condense the header completely. The
 * collapse is linked to the scroll rather than tweened over time, so this is a
 * distance, not a duration: at 96px in, the header is halfway condensed.
 *
 * It has to be longer than the height the chrome gives up on the way (about
 * 156px with a metadata row and tabs). Shorter, and the header shrinks faster
 * than the reader scrolls, opening a visible band of bare page between the tab
 * strip and the content sliding up to meet it.
 */
const COLLAPSE_OVER = 192

/**
 * Everything the page needs to know about its own scrolling: how far it is into
 * condensing the header, how tall the sticky chrome currently is, how tall it is
 * when fully open, and how tall the scrolling viewport is. The middle two are
 * what let the page reserve the chrome's space (see `F0ResourcePage`) and the
 * rail pin itself under it.
 *
 * Two decisions worth knowing about:
 *
 * The collapse is linked to the scroll on purpose: a time-based tween would
 * still be running after the scroll had moved on, so the header would lag behind
 * it and drag whatever sits underneath, the tab strip most visibly.
 *
 * And it follows how far the reader has scrolled *since they last changed
 * direction*, not where they are in the page. Mapping the absolute position
 * looks fine going down and is broken coming back up: a reader deep in the page
 * is pinned at fully condensed, so scrolling up does nothing until they are
 * nearly back at the top. The header sits there frozen for hundreds of pixels,
 * which reads as stuck. Travel answers a reversal immediately, wherever it
 * happens.
 */
export function useCollapseOnScroll(): {
  ref: RefObject<HTMLDivElement>
  progress: number
  chromeHeight: number
  chromeExpandedHeight: number
  viewportHeight: number
} {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [chromeHeight, setChromeHeight] = useState(0)
  const [chromeExpandedHeight, setChromeExpandedHeight] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  /** How far into the collapse, in pixels of travel, and the last position. */
  const travelled = useRef(0)
  const lastTop = useRef(0)
  /** Mirrors `progress` for the resize observer, which lives outside renders. */
  const progressRef = useRef(0)
  progressRef.current = progress

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const scroller = scrollParentOf(node)
    const topOf = () =>
      isElementScroller(scroller) ? scroller.scrollTop : scroller.scrollY

    // Read in the handler rather than deferred to a frame: scroll events are
    // already frame-aligned, so coalescing them buys nothing, and a deferred
    // read stops arriving when the tab is hidden and frames stop.
    const read = () => {
      // Clamped to the scrollable range: elastic overscroll reports negative
      // positions, and a delta measured across that boundary would count the
      // rubber band's rebound as downward travel, condensing the header for a
      // frame in the middle of a bounce at the very top.
      const top = Math.max(0, topOf())
      const delta = top - lastTop.current
      lastTop.current = top

      travelled.current = Math.min(
        COLLAPSE_OVER,
        // Never further into the collapse than the reader is into the page:
        // this is what lands the header fully open exactly at the top, with
        // no jump on arrival, however the reader got there.
        top,
        Math.max(0, travelled.current + delta)
      )

      setProgress(travelled.current / COLLAPSE_OVER)
    }

    /*
     * Mounting mid-scroll is normal, since a route change keeps the scroll
     * position. Seeded rather than measured, because there is no travel to
     * accumulate yet, and because a restored scroll is deep in the page: a page
     * that merely starts a handful of pixels down has not been scrolled, and
     * condensing for those pixels leaves an untouched page looking half closed.
     */
    const atMount = Math.max(0, topOf())
    lastTop.current = atMount
    travelled.current = atMount >= COLLAPSE_OVER ? COLLAPSE_OVER : 0
    setProgress(travelled.current / COLLAPSE_OVER)

    scroller.addEventListener("scroll", read, { passive: true })

    // The chrome's height changes as the header condenses, and the rail follows
    // it, so this is measured rather than assumed. The fully-open height is
    // remembered separately, whenever the chrome is at rest: it is the space
    // the page reserves so the collapse never changes the page's own height.
    const sizes = new ResizeObserver(() => {
      // Fractional, not `offsetHeight`: the spacer's height is the difference
      // between these two, and rounding either one makes the pair miss the
      // reserved total by a pixel, which is a pixel the page breathes by.
      const height = node.getBoundingClientRect().height
      setChromeHeight(height)
      if (progressRef.current === 0) setChromeExpandedHeight(height)
      setViewportHeight(
        isElementScroller(scroller)
          ? scroller.clientHeight
          : scroller.innerHeight
      )
    })
    sizes.observe(node)
    if (isElementScroller(scroller)) sizes.observe(scroller)

    return () => {
      scroller.removeEventListener("scroll", read)
      sizes.disconnect()
    }
  }, [])

  return { ref, progress, chromeHeight, chromeExpandedHeight, viewportHeight }
}
