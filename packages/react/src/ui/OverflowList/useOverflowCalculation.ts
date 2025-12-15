import { useCallback, useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

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
      return Math.max(options?.min ?? 0, Math.min(visibleCount, options?.max ?? items.length))
    },
    [options?.max, options?.min, items.length]
  )

  // Calculate which items should be visible and which should overflow
  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current || items.length === 0) return

    const currentContainerWidth = containerRef.current.clientWidth
    const overflowButtonWidth =
      overflowButtonRef.current?.offsetWidth ||
      customOverflowIndicatorRef.current?.offsetWidth ||
      32
    const itemWidths = measureItemWidths()
    const itemWidthsWithGap = itemWidths.map((width) => width + gap)

    // Calculate how many items fit with an overflow button
    const availableWidth = currentContainerWidth - overflowButtonWidth - gap

    const visibleCount = calculateVisibleItemCount({
      itemWidths: itemWidthsWithGap,
      availableWidth,
    })

    let visibleItems = visibleCount === 0 ? [] : items.slice(0, visibleCount)
    let overflowItems = visibleCount === 0 ? items : items.slice(visibleCount)

    if (
      overflowItems.length === 1 &&
      !!visibleItems.length &&
      overflowButtonWidth === itemWidths?.[-1] - gap
    ) {
      visibleItems = items
      overflowItems = []
    }

    setItemsState({
      visibleItems,
      overflowItems,
    })
  }, [items, gap, measureItemWidths, calculateVisibleItemCount])

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
