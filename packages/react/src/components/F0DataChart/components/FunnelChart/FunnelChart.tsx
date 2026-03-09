import { OneEllipsis } from "@/components/OneEllipsis"
import { Tag } from "@/components/tags/F0Tag/F0Tag"

import type { F0DataChartFunnelProps } from "../../types"

import { resolveChartColorToken } from "../../utils/colors"
import { formatNumericValue } from "../../utils/options"
import { formatPercent, resolveStageColor } from "./utils"

// ---------------------------------------------------------------------------
// FunnelChart — pure HTML horizontal funnel with inline labels.
// Uses a shared flex structure for labels, separators, and bars to guarantee
// perfect column alignment without any percentage math.
// ---------------------------------------------------------------------------

export const FunnelChart = ({
  series,
  sort = "descending",
  showConversion = false,
  valueFormatter,
}: F0DataChartFunnelProps) => {
  const dataPoints = series.data ?? []
  const resolvedSeriesColor = series.color
    ? resolveChartColorToken(series.color)
    : undefined

  const sorted =
    sort === "none"
      ? dataPoints
      : sort === "ascending"
        ? [...dataPoints].sort((a, b) => a.value - b.value)
        : [...dataPoints].sort((a, b) => b.value - a.value)

  const maxValue = Math.max(...sorted.map((d) => d.value), 1)
  // Conversion % is always relative to the first stage in display order
  const firstValue = sorted[0]?.value ?? 0

  return (
    <div className="relative h-full w-full">
      {/* Label area — flex-1 columns */}
      <div className="absolute left-0 right-0 top-0 z-10 flex h-24">
        {sorted.map((point, i) => {
          const formattedValue = valueFormatter
            ? valueFormatter(point.value)
            : formatNumericValue(point.value)
          const pct =
            showConversion && firstValue > 0
              ? formatPercent(point.value, firstValue)
              : null

          return (
            <div key={i} className="min-w-0 flex-1 overflow-hidden pt-2">
              <div className="flex h-full flex-col gap-3 overflow-hidden border-0 border-l border-dashed border-f1-border px-2.5">
                <OneEllipsis
                  className="text-base text-f1-foreground-secondary"
                  lines={2}
                >
                  {point.name}
                </OneEllipsis>
                <div className="flex items-baseline gap-1.5">
                  <OneEllipsis
                    className="text-2xl font-semibold leading-none text-f1-foreground"
                    lines={2}
                  >
                    {formattedValue}
                  </OneEllipsis>
                  {pct && <Tag tag={{ type: "raw", text: pct }} />}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Funnel body — smooth curved stages */}
      <div className="absolute bottom-0 left-0 right-0 top-24 flex">
        {sorted.map((point, i) => {
          const color = resolveStageColor(point, resolvedSeriesColor, i)
          const leftH = (point.value / maxValue) * 100
          const nextValue = sorted[i + 1]?.value ?? point.value
          const rightH = (nextValue / maxValue) * 100

          // Centered vertically around 50
          const topL = 50 - leftH / 2
          const botL = 50 + leftH / 2
          const topR = 50 - rightH / 2
          const botR = 50 + rightH / 2

          // SVG path: flat left half, then cubic bezier curve to next height
          // Top edge: flat from 0→50, then curve from 50→100
          // Bottom edge: curve from 100→50, then flat from 50→0
          const d = [
            `M 0,${topL}`,
            `L 50,${topL}`,
            `C 65,${topL} 90,${topR} 100,${topR}`,
            `L 100,${botR}`,
            `C 90,${botR} 65,${botL} 50,${botL}`,
            `L 0,${botL}`,
            "Z",
          ].join(" ")

          return (
            <div
              key={i}
              className="relative flex-1 border-0 border-l border-dashed border-f1-border"
            >
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path d={d} fill={color} />
              </svg>
            </div>
          )
        })}
      </div>
    </div>
  )
}
