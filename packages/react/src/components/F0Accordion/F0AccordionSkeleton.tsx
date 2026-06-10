import { Fragment } from "react"

import { Skeleton } from "@/ui/skeleton"
import { cn } from "@/lib/utils"

export interface F0AccordionSkeletonProps {
  items?: number
}

export const F0AccordionSkeleton = ({
  items = 4,
}: F0AccordionSkeletonProps) => {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn(
        "flex flex-col rounded-md border border-solid border-f1-border-secondary",
        "overflow-hidden bg-f1-background shadow"
      )}
    >
      {Array.from({ length: items }).map((_, index) => (
        <Fragment key={index}>
          {index > 0 && <div className="h-px w-full bg-f1-border-secondary" />}
          <div className="flex items-center gap-3 px-4 py-3">
            <Skeleton className="h-4 flex-1 max-w-48" />
            <Skeleton className="ml-auto h-7 w-7 shrink-0 rounded" />
          </div>
        </Fragment>
      ))}
    </div>
  )
}
