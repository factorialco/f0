import { type RefObject, useEffect, useState } from "react"

type ContainerSize = { width: number; height: number }

/**
 * Tracks the content dimensions of a container element via `ResizeObserver`.
 *
 * Returns `{ width: 0, height: 0 }` until the element mounts. Updates whenever
 * the element is resized, so downstream computations (like axis label intervals)
 * react to layout changes automatically.
 */
export function useContainerSize(
  ref: RefObject<HTMLElement | null>,
  enabled = true
): ContainerSize {
  const [size, setSize] = useState<ContainerSize>({ width: 0, height: 0 })

  useEffect(() => {
    if (!enabled) {
      setSize({ width: 0, height: 0 })
      return
    }

    const el = ref.current
    if (!el) return

    setSize({ width: el.clientWidth, height: el.clientHeight })

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [enabled, ref])

  return size
}
