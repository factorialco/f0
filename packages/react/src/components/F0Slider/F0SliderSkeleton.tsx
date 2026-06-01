import { cva } from "cva"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { F0SliderSize } from "./types"

interface F0SliderSkeletonProps {
  size?: F0SliderSize
  hideLabel?: boolean
}

const trackVariants = cva({
  base: "w-full rounded-full",
  variants: {
    size: {
      sm: "h-1",
      md: "h-1.5",
    },
  },
})

const F0SliderSkeleton = ({
  size = "md",
  hideLabel = false,
}: F0SliderSkeletonProps) => {
  return (
    <div
      className="flex w-full flex-col gap-2"
      aria-busy="true"
      aria-live="polite"
    >
      {!hideLabel && <Skeleton className="h-4 w-24 rounded-md" />}
      <div className="flex items-center py-2">
        <Skeleton className={cn(trackVariants({ size }))} />
      </div>
    </div>
  )
}

export { F0SliderSkeleton }
