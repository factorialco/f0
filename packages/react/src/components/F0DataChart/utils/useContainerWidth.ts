import { type RefObject, useEffect, useState } from "react"

/**
 * Tracks the `clientWidth` of a container element via `ResizeObserver`.
 *
 * Returns 0 until the element mounts. Updates whenever the element is
 * resized, so downstream computations (like axis label intervals) react
 * to layout changes automatically.
 */
export function useContainerWidth(ref: RefObject<HTMLElement | null>): number {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    setWidth(el.clientWidth)

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width)
      }
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [ref])

  return width
}
