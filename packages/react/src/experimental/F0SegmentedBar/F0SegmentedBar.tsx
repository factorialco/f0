import { forwardRef } from "react"

import { getColor } from "@/lib/chart-colors"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { F0SegmentedBarProps } from "./types"

export type { F0SegmentedBarProps, SegmentColorToken } from "./types"

const F0SegmentedBarBase = forwardRef<HTMLDivElement, F0SegmentedBarProps>(
  ({ value, max, color = "categorical-1", label }, ref) => {
    const i18n = useI18n()

    const segmentCount = Number.isFinite(max) ? Math.max(0, Math.floor(max)) : 0
    const filled = Number.isFinite(value)
      ? Math.max(0, Math.min(Math.floor(value), segmentCount))
      : 0
    const segments = Array.from({ length: segmentCount }, (_, i) => i < filled)

    const filledColor = getColor(color)

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={segmentCount}
        aria-valuenow={filled}
        aria-valuetext={i18n.t("audioPlayer.position", {
          current: filled,
          total: segmentCount,
        })}
        className={cn("flex h-2 w-full gap-1")}
      >
        {segments.map((active, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-full bg-f1-background-secondary",
              "transition-all duration-300 ease-in-out motion-reduce:transition-none"
            )}
            style={active ? { backgroundColor: filledColor } : undefined}
          />
        ))}
      </div>
    )
  }
)

F0SegmentedBarBase.displayName = "F0SegmentedBar"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0SegmentedBar = withDataTestId(
  experimentalComponent("F0SegmentedBar", F0SegmentedBarBase)
)
