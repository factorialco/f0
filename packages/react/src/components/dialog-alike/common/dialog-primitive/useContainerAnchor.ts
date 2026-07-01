import { CSSProperties, useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

// Aligns a fixed element to `anchorEl`'s box (side drawers dock to `#content`).
// rAF-coalesced and skips the update when the box is unchanged, so scrolling a
// list inside the drawer can't churn re-renders (renderer-OOM regression).
export const useContainerAnchor = (
  anchorEl: HTMLElement | null
): CSSProperties => {
  const [anchorStyle, setAnchorStyle] = useState<CSSProperties>({})

  useIsomorphicLayoutEffect(() => {
    if (typeof document === "undefined" || !anchorEl) {
      setAnchorStyle({})
      return
    }

    let raf = 0
    let prev = { left: NaN, top: NaN, width: NaN, height: NaN }

    const measure = () => {
      raf = 0
      const rect = anchorEl.getBoundingClientRect()
      if (
        rect.left === prev.left &&
        rect.top === prev.top &&
        rect.width === prev.width &&
        rect.height === prev.height
      ) {
        return
      }
      prev = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      }
      setAnchorStyle({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        right: "auto",
        bottom: "auto",
      })
    }

    const update = () => {
      if (raf) return
      raf = requestAnimationFrame(measure)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(anchorEl)
    window.addEventListener("resize", update)
    window.addEventListener("scroll", update, true)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener("resize", update)
      window.removeEventListener("scroll", update, true)
    }
  }, [anchorEl])

  return anchorStyle
}
