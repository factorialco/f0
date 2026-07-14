import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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

  // Split point between visible and overflow items. Stored as a count — not
  // the item arrays — so renders always slice the current `items` prop and a
  // changed prop can never be paired with items from a previous list (the
  // recalculation effect runs after render). `null` until the first
  // calculation completes.
  const [visibleCount, setVisibleCount] = useState<number | null>(null)

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
      // Derived slices are empty for an empty list regardless of the count
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
    let nextVisibleCount = calculateVisibleItemCount({
      itemWidths: itemWidthsWithGap,
      availableWidth: reservedWidth,
    })

    // If all items fit even with the reserved space, show them all without the button
    if (
      nextVisibleCount >= items.length &&
      (options?.max === undefined || items.length <= options.max)
    ) {
      nextVisibleCount = calculateVisibleItemCount({
        itemWidths: itemWidthsWithGap,
        availableWidth: currentContainerWidth,
      })
    }

    const effectiveWidth =
      nextVisibleCount >= items.length ? currentContainerWidth : reservedWidth

    // Hysteresis: require extra margin before showing more items.
    // Absorbs ~17px oscillation from scrollbar appearing/disappearing.
    const prev = prevVisibleCountRef.current
    if (prev !== null && nextVisibleCount > prev) {
      const countWithMargin = calculateVisibleItemCount({
        itemWidths: itemWidthsWithGap,
        availableWidth: effectiveWidth - HYSTERESIS_PX,
      })
      if (countWithMargin < nextVisibleCount) {
        nextVisibleCount = Math.max(countWithMargin, prev)
      }
    }
    prevVisibleCountRef.current = nextVisibleCount

    // A single overflow item whose width matches the overflow button can be
    // shown directly instead of collapsing behind the indicator
    if (
      items.length - nextVisibleCount === 1 &&
      nextVisibleCount > 0 &&
      itemWidths.length > 0 &&
      overflowButtonWidth === itemWidths[itemWidths.length - 1] - gap
    ) {
      nextVisibleCount = items.length
    }

    setVisibleCount(nextVisibleCount)
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

  // Slice the current items on every render so the split is always applied to
  // the latest `items` prop, even before the recalculation effect runs
  const { visibleItems, overflowItems } = useMemo(() => {
    if (visibleCount === null) {
      return { visibleItems: [] as T[], overflowItems: [] as T[] }
    }
    return {
      visibleItems: items.slice(0, visibleCount),
      overflowItems: items.slice(visibleCount),
    }
  }, [items, visibleCount])

  return {
    containerRef,
    overflowButtonRef,
    customOverflowIndicatorRef,
    measurementContainerRef,
    visibleItems,
    overflowItems,
    isInitialized,
  }
}
