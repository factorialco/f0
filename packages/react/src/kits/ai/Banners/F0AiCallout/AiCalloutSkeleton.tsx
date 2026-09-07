import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { AiCalloutSkeletonProps } from "./types"
import {
  cardBorderVariants,
  cardClasses,
  rowClasses,
  statusTintVariants,
} from "./variants"

export const AiCalloutSkeleton = ({
  status = "neutral",
  compact = false,
}: AiCalloutSkeletonProps) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl",
        statusTintVariants({ status })
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex min-h-9 flex-row items-center gap-2 px-3 py-1.5">
        <Skeleton className="h-5 w-40 rounded-md" />
      </div>
      <div className={cn(cardClasses, cardBorderVariants({ status }))}>
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </div>
        {!compact && (
          <div
            className={cn(
              rowClasses,
              "px-4 py-3",
              cardBorderVariants({ status })
            )}
          >
            <Skeleton className="h-5 w-32 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        )}
      </div>
    </div>
  )
}
