import { forwardRef } from "react"

import { F0Card } from "@/components/F0Card"

type LoadingSkeletonProps = {
  /**
   * Whether to render placeholder skeletons. When false, the component acts as an invisible sentinel for infinite scroll.
   */
  showPlaceholders?: boolean
  /**
   * Number of skeleton cards to render when placeholders are shown.
   * @default 3
   */
  count?: number
}

export const LoadingSkeleton = forwardRef<HTMLDivElement, LoadingSkeletonProps>(
  ({ showPlaceholders = true, count = 3 }, ref) => {
    return (
      <div ref={ref} className="space-y-1" aria-hidden={!showPlaceholders}>
        {showPlaceholders &&
          Array.from({ length: count }).map((_, i) => (
            <F0Card.Skeleton compact key={i} />
          ))}
      </div>
    )
  }
)

LoadingSkeleton.displayName = "LoadingSkeleton"
