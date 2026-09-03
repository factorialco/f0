import { F0Icon } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { DashboardMetricTrend } from "../../types"

export type TrendBadgeTrend = {
  direction: DashboardMetricTrend["direction"]
  text: string
  /** The same change signed: the arrow that carries the sign is aria-hidden. */
  srText: string
  comparisonLabel?: string
}

/**
 * A host-computed trend as the badge takes it — the label is already the whole
 * change, sign included. An empty label leaves nothing to draw, so it counts
 * as no trend at all.
 */
export function toTrendBadge(
  trend: DashboardMetricTrend | undefined,
  comparisonLabel?: string
): TrendBadgeTrend | undefined {
  if (!trend?.label) return undefined
  return {
    direction: trend.direction,
    text: trend.label,
    srText: trend.label,
    comparisonLabel: comparisonLabel || undefined,
  }
}

/** Arrow + change, with the baseline it compares against on hover and to a reader. */
export function TrendBadge({ trend }: { trend?: TrendBadgeTrend }) {
  if (!trend) return null

  const { comparisonLabel, direction, srText, text } = trend

  const badge = (
    <div className="flex shrink-0 items-center">
      {direction === "up" && (
        <F0Icon icon={ArrowUp} color="positive" size="sm" aria-hidden="true" />
      )}
      {direction === "down" && (
        <F0Icon
          icon={ArrowDown}
          color="critical"
          size="sm"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">
        {comparisonLabel ? `${srText} ${comparisonLabel}` : srText}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "whitespace-nowrap text-base font-medium",
          direction === "up" && "text-f1-foreground-positive",
          direction === "down" && "text-f1-foreground-critical",
          direction === "flat" && "text-f1-foreground-secondary"
        )}
      >
        {text}
      </span>
    </div>
  )

  return comparisonLabel ? (
    <Tooltip label={comparisonLabel}>{badge}</Tooltip>
  ) : (
    badge
  )
}
