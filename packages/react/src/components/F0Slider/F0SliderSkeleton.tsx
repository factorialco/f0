import { Skeleton } from "@/ui/skeleton"

export interface F0SliderSkeletonProps {
  hideLabel?: boolean
}

const F0SliderSkeleton = ({ hideLabel = false }: F0SliderSkeletonProps) => {
  return (
    <div
      className="flex w-full flex-col gap-2"
      role="status"
      aria-label="Loading slider"
      aria-busy="true"
      aria-live="polite"
    >
      {!hideLabel && <Skeleton className="h-4 w-24 rounded-md" />}
      <div className="flex items-center py-2">
        <Skeleton className="h-1.5 w-full rounded-full" />
      </div>
    </div>
  )
}

export { F0SliderSkeleton }
