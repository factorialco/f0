import { Skeleton } from "@/ui/skeleton"

/**
 * Skeleton for the metric content area.
 * Renders a large number placeholder and a smaller trend placeholder,
 * matching the layout of the real MetricItem content.
 */
export function MetricSkeleton() {
  return (
    <div className="flex items-baseline gap-3 px-4 pb-4">
      <Skeleton className="h-10 w-36 rounded" />
      <Skeleton className="h-4 w-16 rounded" />
    </div>
  )
}
