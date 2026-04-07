import { Skeleton } from "@/ui/skeleton"

/**
 * Skeleton placeholder for the dashboard filter bar.
 *
 * Rendered when the consumer knows filters will be present but their
 * definitions / options are still being fetched. Mirrors the layout of the
 * real `FilterBar` (filter trigger button + a couple of preset chips) so the
 * UI does not shift when the real filter bar replaces it.
 */
export function FilterBarSkeleton() {
  return (
    <div
      className="flex items-center gap-1"
      role="status"
      aria-label="Loading filters"
    >
      <Skeleton className="h-8 w-24 rounded-md" />
      <Skeleton className="h-8 w-20 rounded-md" />
      <Skeleton className="h-8 w-20 rounded-md" />
    </div>
  )
}
