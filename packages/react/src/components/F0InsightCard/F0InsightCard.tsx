import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"

import { CardInternal, type CardInternalProps } from "./internal"

const privateProps = ["className"] as const

export type F0InsightCardPublicProps = Omit<
  CardInternalProps,
  (typeof privateProps)[number]
>

const F0InsightCardBase = forwardRef<HTMLDivElement, F0InsightCardPublicProps>(
  (props, ref) => {
    const publicProps = privateProps.reduce((acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    }, props as CardInternalProps)

    return <CardInternal ref={ref} {...publicProps} />
  }
)

F0InsightCardBase.displayName = "F0InsightCard"

const F0InsightCardSkeleton = () => {
  return (
    <div
      className="flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4"
      aria-busy="true"
      aria-live="polite"
    >
      <Skeleton className="h-3 w-3/4 rounded" />
      <div className="flex flex-1 flex-col justify-end gap-2">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-5 w-full rounded" />
          <Skeleton className="h-5 w-2/3 rounded" />
        </div>
        <div className="flex items-center gap-1.5">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-3 w-20 rounded" />
        </div>
      </div>
    </div>
  )
}

export const F0InsightCard = withDataTestId(
  withSkeleton(F0InsightCardBase, F0InsightCardSkeleton)
)
