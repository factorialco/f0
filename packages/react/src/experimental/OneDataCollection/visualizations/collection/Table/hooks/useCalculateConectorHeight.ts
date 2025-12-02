import { useCallback, useLayoutEffect, useRef, useState } from "react"

export const useCalculateConectorHeight = () => {
  const [firstRow, setFirstRow] = useState<HTMLTableRowElement | null>(null)
  const [lastRow, setLastRow] = useState<HTMLTableRowElement | null>(null)
  const [calculatedHeight, setCalculatedHeight] = useState(0)

  const firstChildDOMRef = useRef<HTMLTableRowElement | null>(null)
  const lastChildDOMRef = useRef<HTMLTableRowElement | null>(null)

  const setFirstChildRef = useCallback(
    (element: HTMLTableRowElement | null) => {
      firstChildDOMRef.current = element
      if (element) {
        setFirstRow(element)
      }
    },
    [setFirstRow]
  )

  const setLastChildRef = useCallback(
    (element: HTMLTableRowElement | null) => {
      lastChildDOMRef.current = element
      if (element) {
        setLastRow(element)
      }
    },
    [setLastRow]
  )

  useLayoutEffect(() => {
    if (!firstRow || !lastRow) {
      setCalculatedHeight(0)
      return
    }

    const calculateHeight = () => {
      const middleLastNestedRowHeight =
        lastRow.getBoundingClientRect().height / 2 +
        lastRow.getBoundingClientRect().top
      const height =
        middleLastNestedRowHeight - firstRow.getBoundingClientRect().top - 6

      setCalculatedHeight(height)
    }

    calculateHeight()

    const observer = new MutationObserver(() => {
      calculateHeight()
    })

    const commonParent = firstRow.parentElement
    if (commonParent) {
      observer.observe(commonParent, {
        childList: true,
        subtree: true,
        attributes: true,
      })
    }

    const resizeObserver = new ResizeObserver(() => {
      calculateHeight()
    })

    resizeObserver.observe(firstRow)
    resizeObserver.observe(lastRow)

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
    }
  }, [firstRow, lastRow])

  return { setFirstChildRef, setLastChildRef, calculatedHeight }
}
