import { useCallback, useLayoutEffect, useRef, useState } from "react"

/** Separator between labels */
const LABEL_SEPARATOR = ", "

/**
 * Measures the width of text using a hidden span element
 */
function measureText(span: HTMLSpanElement, text: string): number {
  span.textContent = text
  return span.offsetWidth
}

/**
 * Hook to check whether all labels fit within the container.
 * Uses ResizeObserver to recalculate when container size changes.
 *
 * @param labels - Array of label strings to display
 * @returns Object with allFit boolean and containerRef to attach to the container
 */
export function useLabelsOverflow(labels: string[]): {
  allFit: boolean
  containerRef: React.RefObject<HTMLDivElement>
} {
  const containerRef = useRef<HTMLDivElement>(null!)
  const [allFit, setAllFit] = useState(true)

  const calculate = useCallback(() => {
    const container = containerRef.current
    if (!container || labels.length === 0) {
      setAllFit(true)
      return
    }

    const containerWidth = container.offsetWidth
    if (containerWidth === 0) {
      setAllFit(true)
      return
    }

    const measureSpan = document.createElement("span")
    measureSpan.style.cssText =
      "position:absolute;visibility:hidden;white-space:nowrap;font:inherit;"
    container.appendChild(measureSpan)

    const separatorWidth = measureText(measureSpan, LABEL_SEPARATOR)
    let totalWidth = 0

    for (let i = 0; i < labels.length; i++) {
      const labelWidth = measureText(measureSpan, labels[i])
      totalWidth += i === 0 ? labelWidth : separatorWidth + labelWidth

      if (totalWidth > containerWidth) {
        container.removeChild(measureSpan)
        setAllFit(false)
        return
      }
    }

    container.removeChild(measureSpan)
    setAllFit(true)
  }, [labels])

  useLayoutEffect(() => {
    calculate()

    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver(() => {
      calculate()
    })
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [calculate])

  return { allFit, containerRef }
}

/** Exported constant for use in components */
export { LABEL_SEPARATOR }
