import { type CSSProperties, useEffect, useMemo, useState } from "react"

/** How far an overflowing end is faded out, in px. */
export const SCROLL_FADE_PX = 24

/**
 * Fades a scroll region's ends — but only the ends that have something hidden
 * past them.
 *
 * A static mask lies: it dims the top of the first card before you have scrolled
 * anywhere, and keeps dimming the bottom once you have reached the end, so the
 * fade reads as a visual treatment rather than as "there is more this way". This
 * watches the container and masks an end only while content is actually cut off
 * there, so a column that fits is not masked at all.
 */
export function useScrollFade(fade: number = SCROLL_FADE_PX) {
  /**
   * A CALLBACK ref held in state, not a `useRef`: the region does not always
   * exist on the first render. A layout that has to measure itself before it
   * knows whether to draw its scroll region at all mounts that region a render
   * late, and an effect that read a plain ref once on mount found nothing there,
   * attached no listeners, and — with nothing to depend on — never looked again.
   * The whole column then scrolled unmasked forever.
   *
   * Keeping the node in state re-runs the effect when it arrives, and again if it
   * is ever replaced.
   */
  const [el, setEl] = useState<HTMLElement | null>(null)
  const [ends, setEnds] = useState({ top: false, bottom: false })

  useEffect(() => {
    if (!el) return

    const read = () => {
      // A pixel of slack: fractional scroll offsets and zoom leave sub-pixel
      // remainders that would otherwise read as "still overflowing".
      const overflowing = el.scrollHeight > el.clientHeight + 1
      setEnds({
        top: overflowing && el.scrollTop > 1,
        bottom:
          overflowing && el.scrollTop + el.clientHeight < el.scrollHeight - 1,
      })
    }

    read()
    el.addEventListener("scroll", read, { passive: true })
    // The container's own size AND its content's: adding a widget changes what
    // overflows without either the container resizing or a scroll happening.
    const observer =
      typeof ResizeObserver === "function" ? new ResizeObserver(read) : null
    observer?.observe(el)
    if (el.firstElementChild) observer?.observe(el.firstElementChild)

    return () => {
      el.removeEventListener("scroll", read)
      observer?.disconnect()
    }
  }, [el])

  const style = useMemo<CSSProperties>(() => {
    if (!ends.top && !ends.bottom) return {}
    const from = ends.top ? `transparent 0, black ${fade}px` : "black 0"
    const to = ends.bottom
      ? `black calc(100% - ${fade}px), transparent 100%`
      : "black 100%"
    const mask = `linear-gradient(to bottom, ${from}, ${to})`
    return { maskImage: mask, WebkitMaskImage: mask }
  }, [ends, fade])

  return { ref: setEl, style }
}
