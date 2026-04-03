import { useEffect, useRef } from "react"

import { isInfiniteScrollPagination, PaginationInfo } from "@/hooks/datasource"

export const useInfiniteScrollPagination = (
  paginationInfo: PaginationInfo | null,
  isLoading: boolean,
  isLoadingMore: boolean,
  loadMore: () => void
) => {
  // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  const loadingIndicatorRef = useRef<HTMLTableCellElement>(null)

  useEffect(() => {
    if (
      !isInfiniteScrollPagination(paginationInfo) ||
      !paginationInfo.hasMore
    ) {
      return
    }

    const loadingIndicator = loadingIndicatorRef.current
    if (!loadingIndicator) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !isLoadingMore) {
          loadMore()
        }
      },
      {
        root: null, // viewport
        rootMargin: "200px",
        threshold: 0.1,
      }
    )

    observer.observe(loadingIndicator)

    return () => {
      observer.disconnect()
    }
  }, [paginationInfo, isLoadingMore, loadMore, isLoading])

  return {
    loadingIndicatorRef, // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  }
}
