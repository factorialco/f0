import { useCallback, useEffect, useMemo, useRef } from "react"
import { useControllableState } from "@radix-ui/react-use-controllable-state"

import { RecordType } from "../types/records.typings"

import {
  UseDataSourceItemNavigationProps,
  UseDataSourceItemNavigationReturn,
} from "./types"

type PendingNavigation = "first" | "last" | "next-after-current" | null

const defaultIdProvider = (item: RecordType): string | number =>
  "id" in item ? `${item.id}` : JSON.stringify(item)

export function useDataSourceItemNavigation<R extends RecordType>(
  props: UseDataSourceItemNavigationProps<R>
): UseDataSourceItemNavigationReturn<R> {
  const {
    dataSource,
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading,
    idProvider: idProviderOverride,
    activeItemId: activeItemIdProp,
    defaultActiveItemId,
    onActiveItemChange,
  } = props

  const idProvider = useMemo(() => {
    if (idProviderOverride) return idProviderOverride
    if (dataSource.idProvider) {
      return (item: R, index?: number) =>
        dataSource.idProvider!(item, index) as string | number
    }
    return defaultIdProvider
  }, [idProviderOverride, dataSource.idProvider])

  const [activeItemIdState, setActiveItemIdRaw] = useControllableState<
    string | number | undefined
  >({
    prop: activeItemIdProp != null ? activeItemIdProp : undefined,
    defaultProp: defaultActiveItemId != null ? defaultActiveItemId : undefined,
    onChange: (value) => onActiveItemChange?.(value ?? null),
  })

  const activeItemId: string | number | null = activeItemIdState ?? null

  const setActiveItemId = useCallback(
    (id: string | number | null) => {
      setActiveItemIdRaw(id != null ? id : undefined)
    },
    [setActiveItemIdRaw]
  )

  const pendingNavigation = useRef<PendingNavigation>(null)
  const lastItemIdBeforeLoadMore = useRef<string | number | null>(null)

  const records = data.records

  const { activeIndex, activeItem } = useMemo(() => {
    if (activeItemId == null) {
      return { activeIndex: -1, activeItem: null }
    }
    const index = records.findIndex(
      (record, i) => idProvider(record, i) === activeItemId
    )
    return {
      activeIndex: index,
      activeItem: index >= 0 ? records[index] : null,
    }
  }, [records, activeItemId, idProvider])

  const hasMorePages = useMemo(() => {
    if (!paginationInfo) return false
    if (paginationInfo.type === "pages") {
      return paginationInfo.currentPage < paginationInfo.pagesCount
    }
    if (paginationInfo.type === "infinite-scroll") {
      return paginationInfo.hasMore
    }
    return false
  }, [paginationInfo])

  const hasPreviousPages = useMemo(() => {
    if (!paginationInfo) return false
    if (paginationInfo.type === "pages") {
      return paginationInfo.currentPage > 1
    }
    // Infinite-scroll: all previous items are already loaded
    return false
  }, [paginationInfo])

  const hasNext = useMemo(() => {
    if (activeIndex === -1) return false
    if (activeIndex < records.length - 1) return true
    return hasMorePages
  }, [activeIndex, records.length, hasMorePages])

  const hasPrevious = useMemo(() => {
    if (activeIndex === -1) return false
    if (activeIndex > 0) return true
    return hasPreviousPages
  }, [activeIndex, hasPreviousPages])

  const goToNext = useCallback(() => {
    if (activeIndex === -1) return

    if (activeIndex < records.length - 1) {
      const nextItem = records[activeIndex + 1]
      setActiveItemId(idProvider(nextItem, activeIndex + 1))
      return
    }

    // At the last item — need to fetch more data
    if (!hasMorePages || !paginationInfo) return

    if (paginationInfo.type === "pages") {
      pendingNavigation.current = "first"
      setPage(paginationInfo.currentPage + 1)
    } else if (paginationInfo.type === "infinite-scroll") {
      lastItemIdBeforeLoadMore.current = activeItemId
      pendingNavigation.current = "next-after-current"
      loadMore()
    }
  }, [
    activeIndex,
    activeItemId,
    records,
    hasMorePages,
    paginationInfo,
    setPage,
    loadMore,
    idProvider,
    setActiveItemId,
  ])

  const goToPrevious = useCallback(() => {
    if (activeIndex === -1) return

    if (activeIndex > 0) {
      const prevItem = records[activeIndex - 1]
      setActiveItemId(idProvider(prevItem, activeIndex - 1))
      return
    }

    // At the first item — need to fetch previous page (page-based only)
    if (!hasPreviousPages || !paginationInfo) return

    if (paginationInfo.type === "pages") {
      pendingNavigation.current = "last"
      setPage(paginationInfo.currentPage - 1)
    }
  }, [
    activeIndex,
    records,
    hasPreviousPages,
    paginationInfo,
    setPage,
    idProvider,
    setActiveItemId,
  ])

  // Resolve pending navigation after data changes
  useEffect(() => {
    if (pendingNavigation.current === null) return
    if (isLoading) return
    if (records.length === 0) return

    const pending = pendingNavigation.current

    if (pending === "first") {
      const firstItem = records[0]
      setActiveItemId(idProvider(firstItem, 0))
    } else if (pending === "last") {
      const lastItem = records[records.length - 1]
      setActiveItemId(idProvider(lastItem, records.length - 1))
    } else if (pending === "next-after-current") {
      const prevId = lastItemIdBeforeLoadMore.current
      if (prevId != null) {
        const prevIndex = records.findIndex(
          (record, i) => idProvider(record, i) === prevId
        )
        if (prevIndex >= 0 && prevIndex < records.length - 1) {
          const nextItem = records[prevIndex + 1]
          setActiveItemId(idProvider(nextItem, prevIndex + 1))
        }
      }
      lastItemIdBeforeLoadMore.current = null
    }

    pendingNavigation.current = null
  }, [records, isLoading, idProvider, setActiveItemId])

  const isNavigating = pendingNavigation.current !== null && isLoading

  return {
    activeItemId,
    activeItem,
    goToNext,
    goToPrevious,
    hasNext,
    hasPrevious,
    setActiveItemId,
    isNavigating,
  }
}
