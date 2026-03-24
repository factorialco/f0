import { RefObject, useCallback, useEffect, useRef } from "react"

const MENU_SELECTOR = "[role='menu']"

/**
 * Manages the interaction between a HoverCard popover and portalled dropdown
 * menus rendered inside it.
 *
 * Problem: Dropdown menus portal their content outside the HoverCard, so when
 * the pointer moves into the dropdown the HoverCard sees a pointer-leave and
 * tries to close. We need to suppress that close while the menu is open, then
 * auto-close the popover when:
 *   1. The dropdown is dismissed (Escape, item selected, click outside), OR
 *   2. The pointer leaves *both* the dropdown and the HoverCard content.
 */
export function useDeferredClose(
  contentRef: RefObject<HTMLDivElement | null>,
  close: () => void
) {
  const cleanupRef = useRef<(() => void) | null>(null)

  const teardown = useCallback(() => {
    cleanupRef.current?.()
    cleanupRef.current = null
  }, [])

  // Clean up on unmount
  useEffect(() => teardown, [teardown])

  /**
   * Call this inside `onOpenChange` when `nextOpen === false` and a dropdown
   * menu is currently mounted. Returns `true` if a deferred close was
   * installed (meaning the caller should suppress the close for now).
   */
  const deferClose = useCallback((): boolean => {
    if (!document.querySelector(MENU_SELECTOR)) return false

    teardown()

    const cleanup = () => {
      observer.disconnect()
      document.removeEventListener("pointermove", onPointerMove)
      cleanupRef.current = null
    }

    const closeAndCleanup = () => {
      cleanup()
      close()
    }

    // Close when the dropdown disappears from the DOM
    const observer = new MutationObserver(() => {
      if (!document.querySelector(MENU_SELECTOR)) {
        closeAndCleanup()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Close when the pointer leaves both the dropdown and the HoverCard
    const onPointerMove = (e: PointerEvent) => {
      const target = e.target as Element
      if (
        !target.closest(MENU_SELECTOR) &&
        !contentRef.current?.contains(target)
      ) {
        closeAndCleanup()
      }
    }
    document.addEventListener("pointermove", onPointerMove)

    cleanupRef.current = cleanup
    return true
  }, [contentRef, close, teardown])

  return { deferClose }
}
