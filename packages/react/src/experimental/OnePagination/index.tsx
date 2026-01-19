import { experimentalComponent } from "@/lib/experimental"
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationRoot,
} from "@/ui/pagination"
import { useCallback, useMemo } from "react"
import { cn } from "../../lib/utils"

interface OnePaginationProps {
  /**
   * The total number of pages. Pass 0 if the total is unknown.
   */
  totalPages: number

  /**
   * The current page.
   * @default 1
   */
  currentPage?: number

  /**
   * The callback function to handle page change.
   */
  onPageChange?: (page: number) => void

  /**
   * Whether to show the controls.
   * @default true
   */
  showControls?: boolean

  /**
   * Accessible label for the pagination navigation.
   * @default "Page navigation"
   */
  ariaLabel?: string

  /**
   * The number of pages to show on the sides of the current page.
   * @default 3
   */
  visibleRange?: number

  /**
   * Used in indeterminate state (totalPages = 0) to indicate if there are more pages available.
   * @default true
   */
  hasNextPage?: boolean

  /**
   * Whether to disable the pagination.
   * @default false
   */
  disabled?: boolean
}

function _OnePagination({
  totalPages,
  currentPage = 1,
  onPageChange,
  showControls = true,
  ariaLabel = "Page navigation",
  visibleRange = 3,
  hasNextPage = true,
  disabled = false,
}: OnePaginationProps) {
  const isIndeterminate = totalPages === 0

  const handlePageChange = useCallback(
    (page: number) => {
      if (
        onPageChange &&
        (isIndeterminate || (page >= 1 && page <= totalPages))
      ) {
        onPageChange(page)
      }
    },
    [onPageChange, totalPages, isIndeterminate]
  )

  const getPageNumbers = useMemo(() => {
    if (isIndeterminate) return []

    const pages: (number | string)[] = []

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    pages.push(1)

    // Calculate the range to show around current page
    const sidePages = Math.floor(visibleRange / 2)
    let rangeStart = currentPage - sidePages
    let rangeEnd = currentPage + sidePages

    // Adjust range if current page is near the start
    if (currentPage <= sidePages + 2) {
      rangeStart = 2
      rangeEnd = rangeStart + visibleRange - 1
      pages.push(
        ...Array.from(
          { length: rangeEnd - rangeStart + 1 },
          (_, i) => i + rangeStart
        )
      )
      pages.push("...")
    }

    // Adjust range if current page is near the end
    else if (currentPage >= totalPages - sidePages - 1) {
      rangeStart = totalPages - visibleRange - 1
      rangeEnd = totalPages - 1
      pages.push("...")
      pages.push(
        ...Array.from(
          { length: rangeEnd - rangeStart + 1 },
          (_, i) => i + rangeStart
        )
      )
    }

    // Handle middle cases
    else {
      pages.push("...")
      pages.push(
        ...Array.from({ length: visibleRange }, (_, i) => i + rangeStart)
      )
      pages.push("...")
    }

    // Always add last page
    pages.push(totalPages)

    return pages
  }, [currentPage, totalPages, visibleRange, isIndeterminate])

  return (
    <PaginationRoot>
      <PaginationContent role="navigation" aria-label={ariaLabel}>
        {showControls && (
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={currentPage === 1 || disabled}
              tabIndex={currentPage === 1 ? -1 : 0}
              className={cn(
                !isIndeterminate && "mr-1",
                currentPage === 1 || disabled
                  ? "pointer-events-none opacity-50"
                  : ""
              )}
              onClick={() => handlePageChange(currentPage - 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePageChange(currentPage - 1)
                }
              }}
            />
          </PaginationItem>
        )}

        {!isIndeterminate &&
          getPageNumbers.map((page, index) => (
            <PaginationItem
              key={index}
              className={cn(
                "hidden sm:flex",
                page === currentPage && "flex",
                disabled && "pointer-events-none opacity-50"
              )}
            >
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  aria-current={page === currentPage ? "page" : undefined}
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page as number)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handlePageChange(page as number)
                    }
                  }}
                  tabIndex={0}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

        {showControls && (
          <PaginationItem>
            <PaginationNext
              aria-disabled={
                (!isIndeterminate
                  ? currentPage === totalPages
                  : !hasNextPage) || disabled
              }
              tabIndex={
                !isIndeterminate
                  ? currentPage === totalPages
                    ? -1
                    : 0
                  : !hasNextPage
                    ? -1
                    : 0
              }
              className={cn(
                !isIndeterminate && "ml-1",
                (!isIndeterminate && currentPage === totalPages) ||
                  (!hasNextPage && isIndeterminate) ||
                  disabled
                  ? "pointer-events-none opacity-50"
                  : ""
              )}
              onClick={() => handlePageChange(currentPage + 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePageChange(currentPage + 1)
                }
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationRoot>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const OnePagination = experimentalComponent(
  "OnePagination",
  _OnePagination
)
