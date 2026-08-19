import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

export interface F0MapSkeletonProps extends WithDataTestIdProps {
  /** @private */
  className?: string
}

/**
 * Loading placeholder: a plain pulsing surface in the shared `Skeleton`
 * component's tone. Shown while a consumer is still fetching what the map
 * should display; the map paints its own basemap once mounted, so this needs
 * no map-like illustration.
 */
export const F0MapSkeleton = ({
  dataTestId,
  className,
}: F0MapSkeletonProps) => (
  <DataTestIdWrapper dataTestId={dataTestId}>
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn(
        "h-full w-full animate-pulse bg-f1-background-secondary",
        className
      )}
    />
  </DataTestIdWrapper>
)
