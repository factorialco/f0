import { isPageBasedPagination, PaginationInfo } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { OnePagination } from "@/ui/OnePagination"

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

  if (!isPageBasedPagination(paginationInfo) || paginationInfo.pagesCount <= 1)
    return null

  return (
    <div
      className={cn("flex w-full items-center justify-between px-4", className)}
    >
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
        />
      </div>
    </div>
  )
}
