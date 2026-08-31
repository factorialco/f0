import { Skeleton } from "@/ui/skeleton"

import type { ClockInControlsVariant } from "./index"

type ClockInControlsSkeletonProps = {
  variant?: ClockInControlsVariant
  canSeeGraph?: boolean
  canShowLocation?: boolean
  /** Whether a project picker is coming — not merely allowed. */
  canShowProject?: boolean
}

/**
 * The placeholder `ClockInControls` draws while `loading`.
 *
 * It is shaped like the variant it stands in for — same rows, same heights, the
 * ring's 160px box or the rail's 6px line — so the tile fills in with its data
 * instead of changing shape under it. Which controls are coming is honoured for
 * the same reason: a placeholder for a graph or a picker that will never arrive
 * is a placeholder that lies about the height.
 */
export function ClockInControlsSkeleton({
  variant = "default",
  canSeeGraph = true,
  canShowLocation = true,
  canShowProject = false,
}: ClockInControlsSkeletonProps) {
  if (variant === "horizontal-bar") {
    return (
      <div
        role="status"
        aria-busy="true"
        aria-live="polite"
        className="flex flex-col gap-2"
      >
        {/* `h-7` is `text-xl`'s line box and `h-5` the `body` one below the bar,
            so these rows measure what the loaded tile's do: 114px with one
            picker, 154px with both. Measured, not guessed — the rail must not
            shift when the day lands. */}
        <div className="flex flex-row items-end justify-between gap-2">
          <Skeleton className="h-7 w-28" />
          <Skeleton className="h-7 w-12" />
        </div>
        {canSeeGraph && <Skeleton className="h-1.5 w-full rounded-full" />}
        <div className="flex flex-row justify-between gap-2">
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-5 w-24" />
        </div>
        {/* The loaded footer's own rule: one picker on the actions' line, and a
            second one on a line above it. Same fields at the same widths, so the
            tile does not resize when the day lands. */}
        <div className="flex flex-col gap-2 pt-1">
          {canShowLocation && canShowProject ? (
            <Skeleton className="h-8 w-full rounded-md" />
          ) : null}
          <div className="flex flex-row items-center gap-2">
            {(canShowLocation || canShowProject) && (
              <Skeleton className="h-8 min-w-0 flex-1 rounded-md" />
            )}
            <Skeleton className="ml-auto h-8 w-24 shrink-0 rounded-md" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="@container"
    >
      <div className="flex flex-grow flex-col">
        <div className="flex flex-col-reverse items-center gap-2 @xs:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col items-center gap-1.5 @xs:items-start">
              <Skeleton className="h-7 w-32" />
              <Skeleton className="h-5 w-40" />
            </div>
            <div className="flex flex-row justify-center gap-2 @xs:justify-start">
              <Skeleton className="h-8 w-28 rounded-md" />
            </div>
          </div>
          {canSeeGraph && (
            <Skeleton className="h-40 w-40 shrink-0 rounded-full" />
          )}
        </div>
        <div className="mt-6 flex flex-row justify-center @xs:justify-start">
          {canShowLocation && <Skeleton className="h-6 w-32 rounded-md" />}
        </div>
      </div>
    </div>
  )
}
