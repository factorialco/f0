import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import { WORLD_LAND_PATH } from "./styles/worldPath"

export interface F0MapSkeletonProps extends WithDataTestIdProps {
  /** @private */
  className?: string
}

/**
 * Loading placeholder: the world's continents rendered as an f0 skeleton - the
 * same gentle `animate-pulse` and surface tone as the shared `Skeleton`
 * component, just in the shape of the world - over a plain background "ocean",
 * so the map reads as loading before the tiles fade in.
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
        "relative h-full w-full overflow-hidden bg-f1-background",
        className
      )}
    >
      <svg
        viewBox="0 0 360 170"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full animate-pulse"
        aria-hidden
      >
        {/* Continents use neutral-10 - the same underlying tone the shared
            skeleton's bg-f1-background-secondary resolves to. SVG `fill` can't
            take a Tailwind background utility, hence the raw var. */}
        <path d={WORLD_LAND_PATH} className="[fill:hsl(var(--neutral-10))]" />
      </svg>
    </div>
  </DataTestIdWrapper>
)
