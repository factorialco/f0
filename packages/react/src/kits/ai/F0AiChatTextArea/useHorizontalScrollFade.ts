import { type CSSProperties, useEffect, useMemo, useState } from "react"

/** How far an overflowing end is faded out, in px. */
export const SCROLL_FADE_PX = 24

/**
 * Fades a horizontal scroller's ends — but only the ends that have something
 * hidden past them.
 *
 * The fade IS the scroll affordance: the row has no visible scrollbar, so a chip
 * cut off by a soft edge is the only thing telling the reader there is more
 * sideways. That only works if the mask is honest — a static gradient dims the
 * first chip before you have scrolled anywhere and keeps dimming the last one
 * once you have reached the end, at which point it reads as decoration rather
 * than as "there is more this way". So each end is masked only while content is
 * actually cut off there, and a row that fits is not masked at all.
 *
 * (The vertical sibling of this lives in `sds/Home/useScrollFade` — same idea,
 * other axis. They are kept apart rather than shared because each is a few lines
 * of measurement and neither domain should reach into the other's internals.)
 */
export function useHorizontalScrollFade(fade: number = SCROLL_FADE_PX) {
  /**
   * A CALLBACK ref held in state, not a `useRef`: the row can mount a render
   * late (it sits behind a collapse animation), and an effect that read a plain
   * ref once on mount would find nothing there, attach no listeners, and — with
   * nothing to depend on — never look again.
   */
  const [el, setEl] = useState<HTMLElement | null>(null)
  const [ends, setEnds] = useState({ start: false, end: false })

  useEffect(() => {
    if (!el) return

    const read = () => {
      // A pixel of slack: fractional scroll offsets and zoom leave sub-pixel
      // remainders that would otherwise read as "still overflowing".
      const overflowing = el.scrollWidth > el.clientWidth + 1
      setEnds({
        start: overflowing && el.scrollLeft > 1,
        end: overflowing && el.scrollLeft + el.clientWidth < el.scrollWidth - 1,
      })
    }

    read()
    el.addEventListener("scroll", read, { passive: true })
    // The container's own size AND its content's: swapping the suggestion set
    // changes what overflows without either the container resizing or a scroll
    // happening.
    const observer =
      typeof ResizeObserver === "function" ? new ResizeObserver(read) : null
    observer?.observe(el)
    for (const child of Array.from(el.children)) observer?.observe(child)

    return () => {
      el.removeEventListener("scroll", read)
      observer?.disconnect()
    }
  }, [el])

  const style = useMemo<CSSProperties>(() => {
    if (!ends.start && !ends.end) return {}
    const from = ends.start ? `transparent 0, black ${fade}px` : "black 0"
    const to = ends.end
      ? `black calc(100% - ${fade}px), transparent 100%`
      : "black 100%"
    const mask = `linear-gradient(to right, ${from}, ${to})`
    return { maskImage: mask, WebkitMaskImage: mask }
  }, [ends, fade])

  return { ref: setEl, style }
}
