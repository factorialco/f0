import { useCallback, useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

// Hysteresis margin (px): once items overflow, require this much extra space
// before re-showing them. Prevents scrollbar-induced layout oscillation.
const HYSTERESIS_PX = 20

type CalculateVisibleItemCountParams = {
  itemWidths: number[]
  availableWidth: number
}

/**
 * Custom hook for overflow calculations
 *
 * This hook dynamically determines which items should be visible in the main list and which should be placed in an overflow dropdown based on available space.
 *
 * @param items - The items to display
 * @param gap - The gap between items
 * @returns The overflow calculation state
 */
export function useOverflowCalculation<T>(
  items: T[],
  gap: number,
  options?: {
    max?: number
    min?: number
    itemsWidth?: number | number[]
  }
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overflowButtonRef = useRef<HTMLButtonElement>(null)
  const customOverflowIndicatorRef = useRef<HTMLDivElement>(null)
  const measurementContainerRef = useRef<HTMLDivElement>(null)
  const prevVisibleCountRef = useRef<number | null>(null)

  // Combined state for visible and overflow items
  const [itemsState, setItemsState] = useState<{
    visibleItems: T[]
    overflowItems: T[]
  }>({
    visibleItems: [],
    overflowItems: [],
  })

  // Track initialization
  const [isInitialized, setIsInitialized] = useState(false)

  // Watch for container size changes
  useResizeObserver({
    ref: containerRef,
    onResize: () => {
      calculateVisibleItems()
    },
  })

  // Measure all items in a hidden container
  const measureItemWidths = useCallback(() => {
    if (options?.itemsWidth) {
      return Array.isArray(options.itemsWidth)
        ? options.itemsWidth
        : Array(items.length).fill(options.itemsWidth)
    }

    if (!measurementContainerRef.current) {
      return []
    }

    const itemElements = measurementContainerRef.current.children
    const widths: number[] = []

    for (let i = 0; i < itemElements.length; i++) {
      const itemWidth = itemElements[i].getBoundingClientRect().width
      widths.push(itemWidth)
    }

    return widths
  }, [options?.itemsWidth, items.length])

  // Calculate how many items can fit in the available width
  const calculateVisibleItemCount = useCallback(
    ({ itemWidths, availableWidth }: CalculateVisibleItemCountParams) => {
      let visibleCount = 0
      let accumulatedWidth = 0

      for (let i = 0; i < itemWidths.length; i++) {
        const newWidth = accumulatedWidth + itemWidths[i]

        if (newWidth > availableWidth) break

        accumulatedWidth = newWidth
        visibleCount++
      }

      // Return the actual count without enforcing a minimum of 1
      return Math.max(
        options?.min ?? 0,
        Math.min(visibleCount, options?.max ?? items.length)
      )
    },
    [options?.max, options?.min, items.length]
  )

  // Calculate which items should be visible and which should overflow
  const calculateVisibleItems = useCallback(() => {
    if (items.length === 0) {
      setItemsState((prev) => {
        if (prev.visibleItems.length === 0 && prev.overflowItems.length === 0) {
          return prev
        }
        return { visibleItems: [], overflowItems: [] }
      })
      return
    }

    if (!containerRef.current) return

    const currentContainerWidth = containerRef.current.clientWidth
    const overflowButtonWidth =
      overflowButtonRef.current?.offsetWidth ||
      customOverflowIndicatorRef.current?.offsetWidth ||
      32
    const itemWidths = measureItemWidths()
    const itemWidthsWithGap = itemWidths.map((width) => width + gap)

    // Always reserve overflow button width upfront so items drop one at a time
    const reservedWidth = currentContainerWidth - overflowButtonWidth - gap
    let visibleCount = calculateVisibleItemCount({
      itemWidths: itemWidthsWithGap,
      availableWidth: reservedWidth,
    })

    // If all items fit even with the reserved space, show them all without the button
    if (
      visibleCount >= items.length &&
      (options?.max === undefined || items.length <= options.max)
    ) {
      visibleCount = calculateVisibleItemCount({
        itemWidths: itemWidthsWithGap,
        availableWidth: currentContainerWidth,
      })
    }

    const effectiveWidth =
      visibleCount >= items.length ? currentContainerWidth : reservedWidth

    // Hysteresis: require extra margin before showing more items.
    // Absorbs ~17px oscillation from scrollbar appearing/disappearing.
    const prev = prevVisibleCountRef.current
    if (prev !== null && visibleCount > prev) {
      const countWithMargin = calculateVisibleItemCount({
        itemWidths: itemWidthsWithGap,
        availableWidth: effectiveWidth - HYSTERESIS_PX,
      })
      if (countWithMargin < visibleCount) {
        visibleCount = Math.max(countWithMargin, prev)
      }
    }
    prevVisibleCountRef.current = visibleCount

    let visibleItems = visibleCount === 0 ? [] : items.slice(0, visibleCount)
    let overflowItems = visibleCount === 0 ? items : items.slice(visibleCount)

    if (
      overflowItems.length === 1 &&
      !!visibleItems.length &&
      itemWidths.length > 0 &&
      overflowButtonWidth === itemWidths[itemWidths.length - 1] - gap
    ) {
      visibleItems = items
      overflowItems = []
    }

    setItemsState({
      visibleItems,
      overflowItems,
    })
  }, [items, gap, measureItemWidths, calculateVisibleItemCount, options?.max])

  // Reset hysteresis when the number of items changes
  useEffect(() => {
    prevVisibleCountRef.current = null
  }, [items.length])

  // Initial calculation and initialization
  useEffect(() => {
    calculateVisibleItems()
  }, [calculateVisibleItems])

  useEffect(() => {
    setIsInitialized(true)
  }, [])

  return {
    containerRef,
    overflowButtonRef,
    customOverflowIndicatorRef,
    measurementContainerRef,
    visibleItems: itemsState.visibleItems,
    overflowItems: itemsState.overflowItems,
    isInitialized,
  }
}
