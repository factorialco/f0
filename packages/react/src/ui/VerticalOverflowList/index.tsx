import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

import { cn } from "../../lib/utils"

/**
 * Custom hook for overflow calculations
 *
 * This hook dynamically determines which items should be visible in the main list and which should be placed in an overflow dropdown based on available space.
 *
 * @param items - The items to display
 * @param gap - The gap between items
 * @returns The overflow calculation state
 */
function useOverflowCalculation<T>(items: T[], gap: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const measurementContainerRef = useRef<HTMLDivElement>(null)

  // Combined state for visible and overflow items
  const [itemsState, setItemsState] = useState<{
    visibleItems: T[]
    overflowItems: T[]
  }>({
    visibleItems: [],
    overflowItems: [],
  })

  // Watch for container size changes
  useResizeObserver({
    ref: containerRef,
    onResize: () => {
      calculateVisibleItems()
    },
  })

  // Helper function to add gap between items
  const addGapBetweenItems = useCallback(
    (totalSize: number, itemIndex: number, itemsCount: number) =>
      itemIndex < itemsCount - 1 ? totalSize + gap : totalSize,
    [gap]
  )

  // Measure all items in a hidden container
  const measureItemSizes = useCallback(() => {
    if (!measurementContainerRef.current) return []

    const itemElements = measurementContainerRef.current.children
    const sizes: number[] = []

    for (let i = 0; i < itemElements.length; i++) {
      const itemSize = itemElements[i].getBoundingClientRect().height
      sizes.push(itemSize)
    }

    return sizes
  }, [])

  // Calculate how many items can fit in the available size
  const calculateVisibleItemCount = useCallback(
    (itemSizes: number[], availableSize: number) => {
      let visibleCount = 0
      let accumulatedSize = 0

      for (let i = 0; i < itemSizes.length; i++) {
        const newSize = accumulatedSize + itemSizes[i]

        if (newSize > availableSize + 30) break

        accumulatedSize = newSize
        accumulatedSize = addGapBetweenItems(
          accumulatedSize,
          i,
          itemSizes.length
        )
        visibleCount++
      }

      // Return the actual count without enforcing a minimum of 1
      return visibleCount
    },
    [addGapBetweenItems]
  )

  // Calculate which items should be visible and which should overflow
  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current || items.length === 0) return

    const currentContainerSize = containerRef.current.clientHeight
    const itemSizes = measureItemSizes()

    const visibleCount = calculateVisibleItemCount(
      itemSizes,
      currentContainerSize
    )

    // If no items can fit, put all items in the overflow
    if (visibleCount === 0) {
      setItemsState({
        visibleItems: [],
        overflowItems: items,
      })
    } else {
      setItemsState((prev) =>
        prev.visibleItems.length === visibleCount &&
        prev.overflowItems.length === items.length - visibleCount
          ? prev
          : {
              visibleItems: items.slice(0, visibleCount),
              overflowItems: items.slice(visibleCount),
            }
      )
    }
  }, [items, measureItemSizes, calculateVisibleItemCount])

  // Initial calculation and initialization
  useEffect(() => {
    calculateVisibleItems()
  }, [calculateVisibleItems])

  return {
    containerRef,
    measurementContainerRef,
    visibleItems: itemsState.visibleItems,
    overflowItems: itemsState.overflowItems,
  }
}

interface OverflowListProps<T> {
  items: T[]

  // How things are rendered
  /**
   * What to render as a list item (items outside of the overflow list)
   * @param item - The item to render
   * @param index - The index of the item
   * @param isVisible - Whether this item is in the visible list (true) or measurement container (false)
   */
  renderListItem: (item: T, index: number, isVisible?: boolean) => ReactNode

  // Component styling
  /**
   * Additional styling for the container
   */
  className?: string

  /**
   * The gap between items in pixels
   * @default 8
   */
  gap?: number

  /**
   * The minimum size of the container
   * @default 0
   */
  minSize: number

  /**
   * Callback when the visible items change
   * @param visibleItems - The visible items
   */
  onVisibleItemsChange?: (visibleItems: T[]) => void
}

const VerticalOverflowList = function VerticalOverflowList<T>({
  items,
  renderListItem,
  className,
  gap = 0,
  minSize,
  onVisibleItemsChange,
}: OverflowListProps<T>) {
  const { containerRef, measurementContainerRef, visibleItems } =
    useOverflowCalculation(items, gap)

  useEffect(() => {
    onVisibleItemsChange?.(visibleItems)
  }, [onVisibleItemsChange, visibleItems])

  return (
    <div
      ref={containerRef}
      className={cn("relative flex h-full flex-col", className)}
      style={{
        minHeight: `${minSize}px`,
      }}
    >
      <div
        ref={measurementContainerRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0"
        style={{ gap: `${gap}px` }}
        data-testid="overflow-measurement-container"
      >
        {items.map((item, index) => (
          <div key={`measure-${index}`} data-testid="overflow-measurement-item">
            {renderListItem(item, index, false)}
          </div>
        ))}
      </div>

      <div
        className="flex flex-col"
        style={{ gap: `${gap}px` }}
        data-testid="overflow-visible-container"
      >
        {visibleItems.map((item, index) => (
          <div
            key={`item-${index}`}
            className="transition-all duration-150"
            data-testid="overflow-visible-item"
          >
            {renderListItem(item, index, true)}
          </div>
        ))}
      </div>
    </div>
  )
}

VerticalOverflowList.displayName = "VerticalOverflowList"

export { VerticalOverflowList }
