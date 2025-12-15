import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"


const F0KpiCmp = ({ label }: KpiProps) => {
  return <div className="flex flex-col gap-2">{title}</div>
}

const F0KpiSkeleton = () => {
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

F0KpiCmp.displayName = "F0KpiCmp"

export const F0Kpi = withSkeleton(F0KpiCmp, F0KpiSkeleton)
