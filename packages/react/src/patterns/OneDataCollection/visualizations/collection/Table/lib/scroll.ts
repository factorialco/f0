/**
 * Finds the nearest scrollable ancestor of the given element.
 */
export const findScrollContainer = (
  element: HTMLElement
): HTMLElement | null => {
  let parent = element.parentElement

  while (parent) {
    const { overflow, overflowY } = getComputedStyle(parent)
    const isScrollable =
      overflow === "auto" ||
      overflow === "scroll" ||
      overflowY === "auto" ||
      overflowY === "scroll"

    if (isScrollable) {
      return parent
    }

    parent = parent.parentElement
  }

  return null
}

/**
 * Subscribes to scroll events on the nearest scrollable ancestor,
 * calling `callback` on each frame via requestAnimationFrame.
 * Returns a cleanup function, or undefined if no scroll container was found.
 */
export const subscribeToScroll = (
  element: HTMLElement,
  callback: () => void
): (() => void) | undefined => {
  const scrollContainer = findScrollContainer(element)
  if (!scrollContainer) return undefined

  let rafId: number | undefined
  const onScroll = () => {
    if (rafId !== undefined) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(callback)
  }

  scrollContainer.addEventListener("scroll", onScroll, { passive: true })

  return () => {
    scrollContainer.removeEventListener("scroll", onScroll)
    if (rafId !== undefined) cancelAnimationFrame(rafId)
  }
}
