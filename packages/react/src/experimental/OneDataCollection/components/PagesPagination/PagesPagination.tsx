import { OnePagination } from "@/experimental/OnePagination"
import { isPageBasedPagination, PaginationInfo } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export const PagesPagination = ({
  paginationInfo,
  setPage,
  className,
}: {
  paginationInfo: PaginationInfo | null
  setPage: (page: number) => void
  className?: string
}) => {
  const t = useI18n()
  return (
    isPageBasedPagination(paginationInfo) && (
      <div className={cn("flex w-full items-center justify-between px-4", className)}>
        <span className="shrink-0 text-f1-foreground-secondary">
          {paginationInfo.total > 0 &&
            `${(paginationInfo.currentPage - 1) * paginationInfo.perPage + 1}-${Math.min(
              paginationInfo.currentPage * paginationInfo.perPage,
              paginationInfo.total
            )} ${t.collections.visualizations.pagination.of} ${paginationInfo.total}`}
        </span>
        <div className="flex items-center">
          <OnePagination
            totalPages={paginationInfo.pagesCount}
            currentPage={paginationInfo.currentPage}
            onPageChange={setPage}
            disabled={paginationInfo.pagesCount <= 1}
          />
        </div>
      </div>
    )
  )
}
