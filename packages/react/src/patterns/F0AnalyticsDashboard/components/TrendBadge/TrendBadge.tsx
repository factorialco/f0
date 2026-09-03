import { F0Icon } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { DashboardMetricTrend } from "../../types"

export type TrendBadgeTrend = {
  direction: DashboardMetricTrend["direction"]
  sentiment?: DashboardMetricTrend["sentiment"]
  text: string
  /** The same change signed: the arrow that carries the sign is aria-hidden. */
  srText: string
  comparisonLabel?: string
}

/**
 * The colour is the sentiment's when the host set one; otherwise the direction
 * is read as its own sentiment, which is what every trend showed before.
 */
const TONES = {
  positive: { icon: "positive", text: "text-f1-foreground-positive" },
  negative: { icon: "critical", text: "text-f1-foreground-critical" },
  neutral: { icon: "secondary", text: "text-f1-foreground-secondary" },
} as const

function trendTone({
  direction,
  sentiment,
}: Pick<TrendBadgeTrend, "direction" | "sentiment">) {
  if (sentiment) return TONES[sentiment]
  return direction === "up"
    ? TONES.positive
    : direction === "down"
      ? TONES.negative
      : TONES.neutral
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
    sentiment: trend.sentiment,
    text: trend.label,
    srText: trend.label,
    comparisonLabel: comparisonLabel || undefined,
  }
}

/** Arrow + change, with the baseline it compares against on hover and to a reader. */
export function TrendBadge({ trend }: { trend?: TrendBadgeTrend }) {
  if (!trend) return null

  const { comparisonLabel, direction, srText, text } = trend
  const tone = trendTone(trend)

  const badge = (
    <div className="flex shrink-0 items-center">
      {direction === "up" && (
        <F0Icon icon={ArrowUp} color={tone.icon} size="sm" aria-hidden="true" />
      )}
      {direction === "down" && (
        <F0Icon
          icon={ArrowDown}
          color={tone.icon}
          size="sm"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">
        {comparisonLabel ? `${srText} ${comparisonLabel}` : srText}
      </span>
      <span
        aria-hidden="true"
        className={cn("whitespace-nowrap text-base font-medium", tone.text)}
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
