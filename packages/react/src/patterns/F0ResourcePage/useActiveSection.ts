import { RefObject, useEffect, useRef, useState } from "react"

import { readingLineOf, scrollParentOf, sectionById } from "./scrolling"

/**
 * How far below the reading line a section's top may still be and count as the
 * one being read. Without it a section only becomes active once its heading is
 * exactly under the chrome, which lands a pixel late and leaves the rail
 * pointing at the section above the one that fills the screen.
 */
const SLACK = 8

/**
 * Which of the sections is the one being read, for the rail to mark. The answer
 * is the last section whose top has passed under the sticky chrome: that is the
 * heading you would look up to from wherever you are on the page.
 *
 * Read from the scroll handler rather than through an `IntersectionObserver`,
 * because the line it is measured against moves: the chrome shrinks as the
 * header condenses, and an observer would have to be rebuilt on every frame to
 * follow a changing `rootMargin`.
 */
export function useActiveSection({
  ids,
  chromeHeight,
}: {
  /** Section element ids, in the order they appear down the page. */
  ids: string[]
  /** Height of the sticky chrome the sections scroll under. */
  chromeHeight: number
}): { ref: RefObject<HTMLDivElement>; activeId: string | undefined } {
  const ref = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | undefined>(ids[0])

  /*
   * Both inputs change constantly: `chromeHeight` on every frame of the
   * collapse, and `ids` identity on every render of the caller. Read them from
   * a ref inside the handler instead of closing over them, or the listener
   * would be torn off and reattached mid-gesture.
   */
  const latest = useRef({ ids, chromeHeight })
  latest.current = { ids, chromeHeight }

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const scroller = scrollParentOf(node)

    const read = () => {
      const { ids, chromeHeight } = latest.current
      if (ids.length === 0) return

      const line = readingLineOf(scroller, chromeHeight)

      // The first section owns the top of the page, including the stretch above
      // it, so it stays the answer until another section's top has passed.
      let current = ids[0]
      for (const id of ids) {
        const section = sectionById(node, id)
        if (!section) continue
        if (section.getBoundingClientRect().top <= line + SLACK) current = id
      }

      // Same value bails out of the re-render on its own, so this runs on every
      // scroll event without re-rendering the page on every one of them.
      setActiveId(current)
    }

    read()
    scroller.addEventListener("scroll", read, { passive: true })

    // Sections change height as content loads or the window narrows, which
    // moves every section below them.
    const sizes = new ResizeObserver(read)
    sizes.observe(node)

    return () => {
      scroller.removeEventListener("scroll", read)
      sizes.disconnect()
    }
  }, [])

  return { ref, activeId }
}

/**
 * Brings a section to just under the sticky chrome, which is where the rail
 * says it is. `scrollIntoView` would put it at the very top of the scrollport,
 * under the header, so the heading you asked for is the one thing you cannot
 * see.
 */
export function scrollSectionIntoView(
  container: HTMLElement | null,
  id: string,
  chromeHeight: number
) {
  if (!container) return
  const section = sectionById(container, id)
  if (!section) return

  const scroller = scrollParentOf(container)
  const top = section.getBoundingClientRect().top
  const line = readingLineOf(scroller, chromeHeight)

  scroller.scrollBy({ top: top - line, behavior: "smooth" })
}
