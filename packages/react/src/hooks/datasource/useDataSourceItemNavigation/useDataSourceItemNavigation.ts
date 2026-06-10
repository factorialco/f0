import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { RecordType } from "../types/records.typings"
import { resolveWindowNeighbors } from "./resolveWindowNeighbors"
import {
  UseDataSourceItemNavigationProps,
  UseDataSourceItemNavigationReturn,
  DataSourceItemId,
} from "./types"

type PendingNavigation =
  | { type: "first"; targetPage: number }
  | { type: "last"; targetPage: number }
  | {
      type: "next-after-current"
      previousId: DataSourceItemId | null
      loadedItemsCount: number
    }
  | null

const defaultIdProvider = (
  item: RecordType,
  index?: number
): DataSourceItemId =>
  "id" in item &&
  (typeof item.id === "string" ||
    typeof item.id === "number" ||
    typeof item.id === "symbol")
    ? item.id
    : (index ?? JSON.stringify(item))

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
    itemUrl,
    activeItemId: activeItemIdProp,
    defaultActiveItemId,
    onActiveItemChange,
  } = props

  const idProvider = useMemo(() => {
    if (idProviderOverride) return idProviderOverride
    if (dataSource.idProvider) {
      return (item: R, index?: number) => dataSource.idProvider!(item, index)
    }
    return defaultIdProvider
  }, [idProviderOverride, dataSource.idProvider])

  const [activeItemIdState, setActiveItemIdRaw] =
    useControllableState<DataSourceItemId | null>({
      prop: activeItemIdProp,
      defaultProp: defaultActiveItemId ?? null,
      onChange: (value) => onActiveItemChange?.(value ?? null),
    })

  const activeItemId: DataSourceItemId | null = activeItemIdState ?? null

  const pendingNavigation = useRef<PendingNavigation>(null)
  const pendingSawLoading = useRef(false)
  const pendingClearTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isPendingNavigation, setIsPendingNavigation] = useState(false)

  const clearPendingTimeout = useCallback(() => {
    if (pendingClearTimeout.current === null) return
    clearTimeout(pendingClearTimeout.current)
    pendingClearTimeout.current = null
  }, [])

  const clearPendingNavigation = useCallback(() => {
    clearPendingTimeout()
    pendingNavigation.current = null
    pendingSawLoading.current = false
    setIsPendingNavigation(false)
  }, [clearPendingTimeout])

  const setActiveItemId = useCallback(
    (id: DataSourceItemId | null) => {
      clearPendingNavigation()
      setActiveItemIdRaw(id)
    },
    [clearPendingNavigation, setActiveItemIdRaw]
  )

  const records = data.records
  const recordsRef = useRef(records)
  const isLoadingRef = useRef(isLoading)
  const paginationInfoRef = useRef(paginationInfo)
  const idProviderRef = useRef(idProvider)
  const setActiveItemIdRef = useRef(setActiveItemId)

  recordsRef.current = records
  isLoadingRef.current = isLoading
  paginationInfoRef.current = paginationInfo
  idProviderRef.current = idProvider
  setActiveItemIdRef.current = setActiveItemId

  const schedulePendingFallbackClear = useCallback(() => {
    clearPendingTimeout()
    pendingClearTimeout.current = setTimeout(() => {
      pendingClearTimeout.current = null
      if (
        pendingNavigation.current === null ||
        pendingSawLoading.current ||
        isLoadingRef.current
      ) {
        return
      }

      const pending = pendingNavigation.current
      if (pending.type === "first" || pending.type === "last") {
        const currentPaginationInfo = paginationInfoRef.current
        if (currentPaginationInfo?.type === "pages") {
          if (currentPaginationInfo.currentPage === pending.targetPage) return
          clearPendingNavigation()
        }
      } else if (pending.type === "next-after-current") {
        const currentRecords = recordsRef.current
        if (currentRecords.length > pending.loadedItemsCount) {
          const prevIndex =
            pending.previousId == null
              ? -1
              : currentRecords.findIndex(
                  (record, i) =>
                    idProviderRef.current(record, i) === pending.previousId
                )
          const nextItem = currentRecords[prevIndex + 1]
          if (nextItem) {
            setActiveItemIdRef.current(
              idProviderRef.current(nextItem, prevIndex + 1)
            )
          }
        }
      }

      clearPendingNavigation()
    }, 0)
  }, [clearPendingNavigation, clearPendingTimeout])

  useEffect(() => clearPendingTimeout, [clearPendingTimeout])

  useEffect(() => {
    if (!isPendingNavigation || pendingNavigation.current === null) return
    schedulePendingFallbackClear()
  }, [isPendingNavigation, schedulePendingFallbackClear])

  const { activeIndex, activeItem, previousItem, nextItem } = useMemo(
    () => resolveWindowNeighbors({ records, activeItemId, idProvider }),
    [records, activeItemId, idProvider]
  )

  const absoluteIndex = useMemo(() => {
    if (activeIndex === -1 || !paginationInfo) return null
    if (paginationInfo.type === "pages") {
      return (
        (paginationInfo.currentPage - 1) * paginationInfo.perPage + activeIndex
      )
    }
    return activeIndex
  }, [activeIndex, paginationInfo])

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
    if (pendingNavigation.current !== null || isLoading) return
    if (activeIndex === -1) return

    if (activeIndex < records.length - 1) {
      const nextLoadedItem = records[activeIndex + 1]
      setActiveItemId(idProvider(nextLoadedItem, activeIndex + 1))
      return
    }

    // At the last item — need to fetch more data
    if (!hasMorePages || !paginationInfo) return

    if (paginationInfo.type === "pages") {
      pendingNavigation.current = {
        type: "first",
        targetPage: paginationInfo.currentPage + 1,
      }
      setIsPendingNavigation(true)
      try {
        setPage(paginationInfo.currentPage + 1)
      } catch (error) {
        clearPendingNavigation()
        throw error
      }
    } else if (paginationInfo.type === "infinite-scroll") {
      pendingNavigation.current = {
        type: "next-after-current",
        previousId: activeItemId,
        loadedItemsCount: records.length,
      }
      setIsPendingNavigation(true)
      loadMore()
    }
  }, [
    activeIndex,
    activeItemId,
    isLoading,
    records,
    hasMorePages,
    paginationInfo,
    setPage,
    loadMore,
    idProvider,
    setActiveItemId,
    clearPendingNavigation,
  ])

  const goToPrevious = useCallback(() => {
    if (pendingNavigation.current !== null || isLoading) return
    if (activeIndex === -1) return

    if (activeIndex > 0) {
      const prevLoadedItem = records[activeIndex - 1]
      setActiveItemId(idProvider(prevLoadedItem, activeIndex - 1))
      return
    }

    // At the first item — need to fetch previous page (page-based only)
    if (!hasPreviousPages || !paginationInfo) return

    if (paginationInfo.type === "pages") {
      pendingNavigation.current = {
        type: "last",
        targetPage: paginationInfo.currentPage - 1,
      }
      setIsPendingNavigation(true)
      try {
        setPage(paginationInfo.currentPage - 1)
      } catch (error) {
        clearPendingNavigation()
        throw error
      }
    }
  }, [
    activeIndex,
    isLoading,
    records,
    hasPreviousPages,
    paginationInfo,
    setPage,
    idProvider,
    setActiveItemId,
    clearPendingNavigation,
  ])

  // Resolve pending navigation after data changes
  useEffect(() => {
    if (pendingNavigation.current === null) return
    if (isLoading) {
      pendingSawLoading.current = true
      return
    }
    if (records.length === 0) {
      clearPendingNavigation()
      return
    }

    const pending = pendingNavigation.current

    if (pending.type === "first") {
      if (
        paginationInfo?.type === "pages" &&
        paginationInfo.currentPage !== pending.targetPage
      ) {
        if (pendingSawLoading.current) clearPendingNavigation()
        return
      }
      const firstItem = records[0]
      setActiveItemId(idProvider(firstItem, 0))
    } else if (pending.type === "last") {
      if (
        paginationInfo?.type === "pages" &&
        paginationInfo.currentPage !== pending.targetPage
      ) {
        if (pendingSawLoading.current) clearPendingNavigation()
        return
      }
      const lastItem = records[records.length - 1]
      setActiveItemId(idProvider(lastItem, records.length - 1))
    } else if (pending.type === "next-after-current") {
      if (records.length <= pending.loadedItemsCount) {
        if (pendingSawLoading.current) clearPendingNavigation()
        return
      }
      if (pending.previousId != null) {
        const prevIndex = records.findIndex(
          (record, i) => idProvider(record, i) === pending.previousId
        )
        if (prevIndex >= 0 && prevIndex < records.length - 1) {
          const nextItem = records[prevIndex + 1]
          setActiveItemId(idProvider(nextItem, prevIndex + 1))
        } else {
          clearPendingNavigation()
          return
        }
      }
    }

    clearPendingNavigation()
  }, [
    records,
    isLoading,
    paginationInfo,
    idProvider,
    setActiveItemId,
    clearPendingNavigation,
  ])

  const isNavigating =
    isPendingNavigation || (pendingNavigation.current !== null && isLoading)

  const nextItemUrl = useMemo(() => {
    if (!itemUrl || !nextItem) return null
    return itemUrl(nextItem) ?? null
  }, [itemUrl, nextItem])

  const activeItemUrl = useMemo(() => {
    if (!itemUrl || !activeItem) return null
    return itemUrl(activeItem) ?? null
  }, [itemUrl, activeItem])

  const previousItemUrl = useMemo(() => {
    if (!itemUrl || !previousItem) return null
    return itemUrl(previousItem) ?? null
  }, [itemUrl, previousItem])

  return {
    activeItemId,
    activeItem,
    activeIndex,
    absoluteIndex,
    loadedItemsCount: records.length,
    totalItems: paginationInfo?.total,
    previousItem,
    nextItem,
    activeItemUrl,
    goToNext,
    goToPrevious,
    hasNext,
    hasPrevious,
    setActiveItemId,
    isNavigating,
    nextItemUrl,
    previousItemUrl,
  }
}
