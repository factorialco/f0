import { RefObject, useEffect, useRef, useState } from "react"

/**
 * How many pixels of scroll it takes to condense the header completely. The
 * collapse is linked to the scroll rather than tweened over time, so this is a
 * distance, not a duration: at 48px in, the header is halfway condensed.
 *
 * Private on purpose. Every resource page in the product condenses over the
 * same distance, and the only way to keep that true is to give nobody a way to
 * change it.
 */
const COLLAPSE_OVER = 96

const clamp = (value: number) => Math.min(1, Math.max(0, value))

/**
 * Turns a page's own scrolling into how far its header should be condensed.
 *
 * This belongs to `Page` rather than to the header because the header sits in a
 * block above the scrolling body rather than inside it. Walking up from the
 * header finds the window, not the body, so a header cannot discover its own
 * scroll source. `Page` holds both and is the only place that can.
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
   * It has to be latched, because condensing the header gives its height back
   * to the body, which shrinks the scroll range that decided to condense in the
   * first place. Re-reading the range while condensed would flip the answer,
   * snap the header open, hand the height back and start over. So the range is
   * only ever read while the header is open, which is the one state where it
   * means what it says.
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
    // already frame-aligned, so coalescing them buys nothing, and a deferred
    // read stops arriving when the tab is hidden and frames stop.
    const read = () => {
      if (reducedMotion.matches) {
        engaged.current = false
        setProgress(0)
        return
      }

      const top = body.scrollTop

      // Back at the top the header has reopened, so the previous verdict is
      // stale and the range can be trusted again.
      if (top === 0) engaged.current = false

      if (!engaged.current) {
        engaged.current = body.scrollHeight - body.clientHeight > COLLAPSE_OVER
      }

      setProgress(engaged.current ? clamp(top / COLLAPSE_OVER) : 0)
    }

    // Mounting mid-scroll is normal: a route change keeps the scroll position.
    read()

    body.addEventListener("scroll", read, { passive: true })
    // Watched rather than read once, so turning the preference off mid-session
    // starts working without a reload.
    reducedMotion.addEventListener("change", read)

    return () => {
      body.removeEventListener("scroll", read)
      reducedMotion.removeEventListener("change", read)
    }
  }, [hasHeader])

  return { bodyRef, progress, setHasHeader }
}
