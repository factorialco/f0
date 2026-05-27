import { Skeleton } from "@/ui/skeleton"
import { cn } from "@/lib/utils"

interface F0AccordionSkeletonProps {
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
        "divide-y divide-solid divide-f1-border-secondary",
        "overflow-hidden bg-f1-background"
      )}
    >
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 px-4 py-3">
          <Skeleton className="h-4 flex-1 max-w-48" />
          <Skeleton className="h-7 w-7 shrink-0 rounded" />
        </div>
      ))}
    </div>
  )
}
