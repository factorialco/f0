import { F0Heading } from "@/components/F0Heading"
import { numericFormatter } from "@/lib/numeric"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"
import type { BigNumberProps } from "./types"

const F0BigNumberCmp = ({
  label,
  value,
  comparison,
  formatter = numericFormatter,
}: BigNumberProps) => {
  const formattedValue = formatter(value)

  return (
    <div className="flex flex-col gap-2">
      <F0Heading content={value} />
    </div>
  )
}

const F0BigNumberSkeleton = () => {
  return (
    <div className="relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
      <div className="flex h-12 w-full items-center px-4">
        <Skeleton className="h-3 w-full max-w-16 rounded-md" />
      </div>
      <div className="flex flex-1 items-end gap-2 px-4 pb-4">
        <Skeleton className="h-1/2 w-full rounded-sm" />
      </div>
    </div>
  )
}

F0BigNumberCmp.displayName = "F0KpiCmp"

export const F0BigNumber = withSkeleton(F0BigNumberCmp, F0BigNumberSkeleton)
