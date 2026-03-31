import { useEffect, useState } from "react"

import { TABLE_ROW_STICKY_TOP_OFFSET } from "@/experimental/OneTable/TableRow"

interface UseStickyParentRowResult {
  isSticky: boolean
}

const findScrollContainer = (element: HTMLElement): HTMLElement | null => {
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

export const useStickyParentRow = (
  open: boolean,
  parentRowRef: React.RefObject<HTMLTableRowElement | null>,
  sentinelRef: React.RefObject<HTMLElement | null>,
  options?: {
    stickyTopOffset?: number
  }
): UseStickyParentRowResult => {
  const [isSticky, setIsSticky] = useState(false)
  const stickyTopOffset =
    options?.stickyTopOffset ?? TABLE_ROW_STICKY_TOP_OFFSET

  useEffect(() => {
    if (!open) {
      setIsSticky(false)
      return
    }

    const parentRow = parentRowRef.current
    if (!parentRow) {
      setIsSticky(true)
      return
    }

    const scrollContainer = findScrollContainer(parentRow)
    if (!scrollContainer) {
      setIsSticky(true)
      return
    }

    let rafId: number | undefined

    const checkStickyState = () => {
      const sentinel = sentinelRef.current
      if (!sentinel) {
        setIsSticky(true)
        return
      }

      const containerTop = scrollContainer.getBoundingClientRect().top
      const stickyBottom =
        containerTop + stickyTopOffset + parentRow.offsetHeight
      const sentinelTop = sentinel.getBoundingClientRect().top

      // Keep the parent sticky while the sentinel (rendered after the last child)
      // is still below the sticky row's bottom edge.
      const nextSticky = sentinelTop > stickyBottom
      setIsSticky((prev) => (prev === nextSticky ? prev : nextSticky))
    }

    const scheduleCheck = () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(checkStickyState)
    }

    scrollContainer.addEventListener("scroll", scheduleCheck, {
      passive: true,
    })
    window.addEventListener("resize", scheduleCheck)

    const observer = new ResizeObserver(scheduleCheck)
    observer.observe(parentRow)

    const sentinel = sentinelRef.current
    if (sentinel) {
      observer.observe(sentinel)
    }

    checkStickyState()

    return () => {
      scrollContainer.removeEventListener("scroll", scheduleCheck)
      window.removeEventListener("resize", scheduleCheck)
      observer.disconnect()

      if (rafId !== undefined) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [open, parentRowRef, sentinelRef, stickyTopOffset])

  return { isSticky }
}
