import { type RefObject, useEffect } from "react"

/**
 * Keeps the graph's `role="tree"` element owning exactly the treeitems that are
 * in the DOM right now.
 *
 * The tree cannot be an ancestor of the canvas (React Flow hardcodes
 * `role="application"` on its wrapper and injects a live region and its own
 * focusable boxes, none of them legal children of a tree), so it claims the
 * items by reference instead.
 *
 * That list has to be read from the DOM rather than from React state. F0 hands
 * React Flow a node array, but React Flow mounts, measures and culls on its own
 * schedule, so ids taken from state can lead the DOM by a frame. On the
 * viewport-data-loading story that race put an id in `aria-owns` before its
 * element existed, which is a real dangling reference and fails axe
 * `aria-valid-attr-value`. Mirroring the DOM cannot drift.
 *
 * Document order is React's render order, which is the depth-first order the
 * render model produces, so the tree reads top to bottom. Writes are coalesced
 * to one per frame.
 */
export function useAccessibleTreeOwns(
  treeRef: RefObject<HTMLElement | null>,
  containerRef: RefObject<HTMLElement | null>
): void {
  useEffect(() => {
    const tree = treeRef.current
    const container = containerRef.current
    if (!tree || !container) return

    let frame = 0

    const sync = (): void => {
      frame = 0
      const ids = Array.from(
        container.querySelectorAll<HTMLElement>('[role="treeitem"]')
      )
        .map((el) => el.id)
        .filter(Boolean)

      if (ids.length > 0) {
        tree.setAttribute("aria-owns", ids.join(" "))
      } else {
        tree.removeAttribute("aria-owns")
      }
    }

    const schedule = (): void => {
      if (frame !== 0) return
      frame = requestAnimationFrame(sync)
    }

    sync()

    const observer = new MutationObserver(schedule)
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["id", "role"],
    })

    return () => {
      observer.disconnect()
      if (frame !== 0) cancelAnimationFrame(frame)
    }
  }, [treeRef, containerRef])
}
