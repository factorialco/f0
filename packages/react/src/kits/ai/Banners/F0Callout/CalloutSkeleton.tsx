import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { calloutVariants } from "./CalloutInternal"
import { CalloutSkeletonProps } from "./types"

/* Split out of `CalloutInternal` so each file exports one component:
   react-docgen 8 fails a file with two exported components with "Multiple
   exported component definitions found", and Storybook surfaces that as an
   empty docs page. */
export const CalloutSkeleton = ({
  compact,
  variant = "ai",
}: CalloutSkeletonProps) => {
  return (
    <div
      className={calloutVariants({ variant })}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <Skeleton className="h-5 w-32 rounded-md" />
      </div>

      <div className="flex flex-col gap-[1px]">
        <div
          className={cn(
            "rounded-t-[13.25px] bg-f1-background px-4 py-3",
            compact && "rounded-[13.25px]"
          )}
        >
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
          </div>
        </div>
        {!compact && (
          <div className="flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-28 rounded-md" />
          </div>
        )}
      </div>
    </div>
  )
}
