import { normalizeNumericWithFormatter } from "@/lib/numeric/numericFormatter"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"
import { F0TagBalance } from "../tags/F0TagBalance"
import type { BigNumberProps } from "./types"

const F0BigNumberCmp = ({ label, ...props }: BigNumberProps) => {
  const value = normalizeNumericWithFormatter(props.value)
  const comparison = props.comparison
    ? normalizeNumericWithFormatter(props.comparison)
    : undefined
  const formattedValue = value.formatter(value.value, value.formatterOptions)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl">{formattedValue}</span>
        <F0TagBalance percentage={0} value={value} />
      </div>

      {label && <div>{label}</div>}
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
