import { PADDING_TOP } from "@/experimental/OneTable/TableCell/utils/nested"
import { NestedVariant } from "@/hooks/datasource/types/nested.typings"
import { useCallback, useLayoutEffect, useRef, useState } from "react"

export const useCalculateConectorHeight = (nestedVariant: NestedVariant) => {
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
    const previousRow = firstRow?.previousElementSibling

    if (!firstRow || !lastRow || firstRow === lastRow || !previousRow) {
      setCalculatedHeight(0)
      return
    }

    const heightForLastBasicRow = () => {
      return lastRow.getBoundingClientRect().top
    }

    const heightForLastDetailedRow = () => {
      return lastRow.getBoundingClientRect().bottom - PADDING_TOP
    }

    const previousRowHeight = () => {
      return previousRow.getBoundingClientRect().height
    }

    const calculateHeight = () => {
      const lastRowHeight =
        nestedVariant === "basic"
          ? heightForLastBasicRow()
          : heightForLastDetailedRow()

      const height =
        lastRowHeight -
        firstRow.getBoundingClientRect().top +
        previousRowHeight()

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
  }, [firstRow, lastRow, nestedVariant])

  return { setFirstChildRef, setLastChildRef, calculatedHeight }
}
