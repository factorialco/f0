import { useCallback, useLayoutEffect, useRef, useState } from "react"

import {
  BUTTON_PADDING,
  PADDING_TOP,
} from "@/experimental/OneTable/TableCell/utils/nested"
import { NestedVariant } from "@/hooks/datasource/types/nested.typings"

import { subscribeToScroll } from "../lib/scroll"

interface Props {
  nestedVariant: NestedVariant
  withHasMore: boolean
  withAddRowActions: boolean
  isSticky?: boolean
}

export const useCalculateConectorHeight = ({
  nestedVariant,
  withHasMore,
  withAddRowActions,
  isSticky,
}: Props) => {
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

    if (!firstRow || !previousRow) {
      setCalculatedHeight(0)
      return
    }

    const noLastRow = !lastRow || lastRow.getBoundingClientRect().top === 0

    const heightForLastBasicRow = () => {
      if (noLastRow) {
        return (firstRow.getBoundingClientRect().top ?? 0) - PADDING_TOP / 2
      }

      return (lastRow?.getBoundingClientRect().top ?? 0) - PADDING_TOP / 2
    }

    const heightForLastDetailedRow = () => {
      if (noLastRow) {
        return firstRow.getBoundingClientRect().bottom - PADDING_TOP
      }

      return (lastRow?.getBoundingClientRect().bottom ?? 0) - PADDING_TOP
    }

    const firstRowTop = () => {
      return firstRow.getBoundingClientRect().top ?? 0 - PADDING_TOP
    }

    const previousRowHeight = () => {
      return previousRow.getBoundingClientRect().height
    }

    const hasMoreHeight = () => {
      return withHasMore && nestedVariant === "basic" ? BUTTON_PADDING : 0
    }

    const hasAddRowHeight = () => {
      if (withAddRowActions) {
        if (withHasMore && nestedVariant === "basic") {
          return -BUTTON_PADDING
        }

        return 0
      }

      return 0
    }

    const calculateHeight = () => {
      const lastRowHeight =
        nestedVariant === "basic"
          ? heightForLastBasicRow()
          : heightForLastDetailedRow()

      const height =
        lastRowHeight -
        firstRowTop() +
        previousRowHeight() +
        hasMoreHeight() +
        hasAddRowHeight()

      // When the parent row is sticky and children scroll above it,
      // reduce the connector height by the amount the first child
      // has scrolled past the parent's bottom edge.
      let stickyAdjustment = 0
      if (isSticky) {
        const parentBottom = previousRow.getBoundingClientRect().bottom
        const firstChildTop = firstRow.getBoundingClientRect().top
        stickyAdjustment = Math.max(0, parentBottom - firstChildTop)
      }

      setCalculatedHeight(Math.max(0, height - stickyAdjustment))
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

    if (lastRow) {
      resizeObserver.observe(lastRow)
    }

    // When the parent row is sticky, listen to scroll events to
    // continuously update the connector height as children scroll.
    const scrollCleanup = isSticky
      ? subscribeToScroll(firstRow, calculateHeight)
      : undefined

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      scrollCleanup?.()
    }
  }, [firstRow, lastRow, nestedVariant, isSticky])

  return { setFirstChildRef, setLastChildRef, calculatedHeight }
}
