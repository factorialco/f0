import { useCallback, useLayoutEffect, useRef, useState } from "react"

/** Separator between labels */
const LABEL_SEPARATOR = ", "
/** Minimum width reserved for the counter (e.g., "+99") */
const COUNTER_MIN_WIDTH = 40
/** Gap between labels text and counter */
const GAP_WIDTH = 4
/** Initial conservative count to avoid flash of content without counter */
const INITIAL_VISIBLE_COUNT = 1

/**
 * Measures the width of text using a hidden span element
 */
function measureText(span: HTMLSpanElement, text: string): number {
  span.textContent = text
  return span.offsetWidth
}

/**
 * Hook to calculate how many labels fit in the available space.
 * Uses ResizeObserver to recalculate when container size changes.
 *
 * @param labels - Array of label strings to display
 * @param totalCount - Total number of items (may be more than labels.length)
 * @returns Object with visibleCount and containerRef to attach to the container
 */
export function useVisibleLabelCount(
  labels: string[],
  totalCount: number
): { visibleCount: number; containerRef: React.RefObject<HTMLDivElement> } {
  const containerRef = useRef<HTMLDivElement>(null!)
  // Start with conservative count to avoid flash without counter
  const [visibleCount, setVisibleCount] = useState(() =>
    totalCount > 1 ? INITIAL_VISIBLE_COUNT : labels.length
  )

  const calculateVisibleLabels = useCallback(() => {
    const container = containerRef.current
    if (!container || labels.length === 0) {
      setVisibleCount(labels.length)
      return
    }

    const containerWidth = container.offsetWidth
    if (containerWidth === 0) {
      setVisibleCount(labels.length)
      return
    }

    // Create a hidden span to measure text width
    const measureSpan = document.createElement("span")
    measureSpan.style.cssText =
      "position:absolute;visibility:hidden;white-space:nowrap;font:inherit;"
    container.appendChild(measureSpan)

    // Calculate how many labels fit
    let currentWidth = 0
    let count = 0
    const separatorWidth = measureText(measureSpan, LABEL_SEPARATOR)

    for (let i = 0; i < labels.length; i++) {
      const labelWidth = measureText(measureSpan, labels[i])
      const addedWidth = i === 0 ? labelWidth : separatorWidth + labelWidth

      // Reserve space for counter if there will be remaining items
      const hasMoreItems = i < labels.length - 1 || labels.length < totalCount
      const reservedForCounter = hasMoreItems
        ? COUNTER_MIN_WIDTH + GAP_WIDTH
        : 0

      if (currentWidth + addedWidth + reservedForCounter <= containerWidth) {
        currentWidth += addedWidth
        count++
      } else {
        break
      }
    }

    // Clean up
    container.removeChild(measureSpan)

    // Always show at least 1 label if we have any
    setVisibleCount(Math.max(1, count))
  }, [labels, totalCount])

  useLayoutEffect(() => {
    calculateVisibleLabels()

    // Recalculate on resize
    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleLabels()
    })
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [calculateVisibleLabels])

  return { visibleCount, containerRef }
}

/** Exported constant for use in components */
export { LABEL_SEPARATOR }
