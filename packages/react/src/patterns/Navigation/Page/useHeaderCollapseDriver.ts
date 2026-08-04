import { RefObject, useEffect, useRef, useState } from "react"

/**
 * How many pixels of scroll it takes to condense the header completely. The
 * collapse is linked to the scroll rather than tweened over time, so this is a
 * distance, not a duration: at 48px in, the header is halfway condensed.
 *
 * Private on purpose. Every resource page in the product condenses over the same
 * distance, and the only way to keep that true is to give nobody a way to change
 * it.
 */
const COLLAPSE_OVER = 96

/** How far down to look for the page's scroller before giving up on mount. */
const SEARCH_DEPTH = 6

const clamp = (value: number) => Math.min(1, Math.max(0, value))

const scrolls = (element: HTMLElement) => {
  // The computed value is the real answer, since the overflow usually comes from
  // a class. The inline one is the fallback for environments whose computed style
  // does not resolve it, jsdom among them.
  const overflowY =
    getComputedStyle(element).overflowY || element.style.overflowY
  return (
    overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay"
  )
}

/**
 * Whether this is the scroller the page as a whole moves in, rather than one
 * nested inside it.
 *
 * The page's own body is `overflow-auto`, but its content usually arrives with a
 * scroller of its own (`StandardLayout` renders one, and so does the monolith's
 * page body), so the element that actually scrolls is normally a descendant. The
 * outermost one is the page; anything below it is a part of the page with its own
 * scroll area, like a table, and moving that should not condense the header.
 */
const isPageScroller = (target: HTMLElement, body: HTMLElement) => {
  if (target === body) return true

  let current = target.parentElement
  while (current && current !== body) {
    if (scrolls(current)) return false
    current = current.parentElement
  }
  return current === body
}

/**
 * The page's scroller, for the first read on mount, before any scroll event has
 * arrived to name it. Breadth-first so the outermost scroller wins, and depth
 * bounded because this is a guess made once rather than a search.
 */
const findPageScroller = (body: HTMLElement): HTMLElement => {
  let level: HTMLElement[] = Array.from(body.children) as HTMLElement[]

  for (let depth = 0; depth < SEARCH_DEPTH && level.length; depth++) {
    const found = level.find(scrolls)
    if (found) return found
    level = level.flatMap((node) => Array.from(node.children) as HTMLElement[])
  }

  return body
}

/**
 * Turns a page's own scrolling into how far its header should be condensed.
 *
 * This belongs to `Page` rather than to the header because the header sits in a
 * block above the scrolling content rather than inside it. Walking up from the
 * header finds the window, not the content, so a header cannot discover its own
 * scroll source. `Page` holds both sides and is the only place that can.
 *
 * Nothing is watched until a header registers through the collapse context, so a
 * page carrying only breadcrumbs and tabs costs nothing.
 */
export function useHeaderCollapseDriver(): {
  bodyRef: RefObject<HTMLDivElement>
  progress: number
  setHasHeader: (hasHeader: boolean) => void
} {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [hasHeader, setHasHeader] = useState(false)
  const [progress, setProgress] = useState(0)

  /*
   * Whether this page is tall enough to be worth condensing, latched for the
   * length of one trip down the page.
   *
   * It has to be latched, because condensing the header gives its height back to
   * the content, which shrinks the scroll range that decided to condense in the
   * first place. Re-reading the range while condensed would flip the answer, snap
   * the header open, hand the height back and start over. So the range is only
   * ever read while the header is open, which is the one state where it means
   * what it says.
   *
   * Only `true` latches. A `false` has nothing to protect, since the header is
   * already open, so it is re-read on the next scroll. That is what lets a page
   * whose content arrives late start condensing without waiting for a trip back
   * to the top.
   */
  const engaged = useRef(false)

  useEffect(() => {
    const body = bodyRef.current
    if (!body || !hasHeader) {
      setProgress(0)
      return
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Read in the handler rather than deferred to a frame: scroll events are
    // already frame-aligned, so coalescing them buys nothing, and a deferred read
    // stops arriving when the tab is hidden and frames stop.
    const measure = (scroller: HTMLElement) => {
      if (reducedMotion.matches) {
        engaged.current = false
        setProgress(0)
        return
      }

      const top = scroller.scrollTop

      // Back at the top the header has reopened, so the previous verdict is stale
      // and the range can be trusted again.
      if (top === 0) engaged.current = false

      if (!engaged.current) {
        engaged.current =
          scroller.scrollHeight - scroller.clientHeight > COLLAPSE_OVER
      }

      setProgress(engaged.current ? clamp(top / COLLAPSE_OVER) : 0)
    }

    /*
     * Captured rather than listened for directly, because the element that
     * scrolls is normally inside the content rather than the body itself, and
     * `scroll` does not bubble. A capturing listener on the body still sees it on
     * the way down, whichever descendant it came from.
     */
    const onScroll = (event: Event) => {
      const target = event.target as HTMLElement
      if (!isPageScroller(target, body)) return
      measure(target)
    }

    const onPreferenceChange = () => measure(findPageScroller(body))

    // Mounting mid-scroll is normal: a route change keeps the scroll position.
    measure(findPageScroller(body))

    body.addEventListener("scroll", onScroll, { capture: true, passive: true })
    // Watched rather than read once, so turning the preference off mid-session
    // starts working without a reload.
    reducedMotion.addEventListener("change", onPreferenceChange)

    return () => {
      body.removeEventListener("scroll", onScroll, { capture: true })
      reducedMotion.removeEventListener("change", onPreferenceChange)
    }
  }, [hasHeader])

  return { bodyRef, progress, setHasHeader }
}
