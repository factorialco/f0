import { useCallback, useLayoutEffect, useRef, useState } from "react"

/** Separator between labels */
const LABEL_SEPARATOR = ", "

/**
 * Whether the element's own box cuts its text off.
 *
 * `scrollWidth > clientWidth` is the same question `OneEllipsis` asks to decide
 * whether to draw an ellipsis, but asked here about the RENDERED node — so an
 * avatar or icon sharing the row is already accounted for, which re-measuring
 * the string on its own would miss.
 *
 * Both triggers matter and neither implies the other: the box can change width
 * under the same text (a resizing column), and the text can change under the
 * same box (a new selection). So the observer covers the first and `text` in
 * the deps covers the second.
 */
export function useIsClipped(
  ref: React.RefObject<HTMLElement | null>,
  text: string
): boolean {
  const [clipped, setClipped] = useState(false)

  useLayoutEffect(() => {
    const element = ref.current
    /**
     * No element means no text is being rendered — an empty `text`, which is
     * the only way this component leaves the label out. The two move together,
     * so the effect re-runs the moment there is something to measure.
     */
    if (!element) {
      setClipped(false)
      return
    }

    const measure = () => setClipped(element.scrollWidth > element.clientWidth)
    measure()

    /**
     * Re-measure after the next layout: text in a flex row that an ancestor
     * width-constrains only on a later pass mounts at its natural width and
     * shrinks afterwards, a transition the observer can miss — the same late
     * shrink `OneEllipsis` guards against.
     *
     * The timer is not a duplicate of the frame. A page that is not producing
     * frames — a background tab, a hidden panel — never runs the callback or
     * delivers an observation, and the measurement would stay stuck at whatever
     * mount happened to see. Timers keep running there, so this is the path
     * that still answers.
     */
    const raf = requestAnimationFrame(measure)
    const timeout = setTimeout(measure, 100)
    const observer = new ResizeObserver(measure)
    observer.observe(element)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [ref, text])

  return clipped
}

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
    if (!container) {
      return
    }

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
