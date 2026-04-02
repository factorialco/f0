import { useRef } from "react"

import { OneEllipsis } from "@/lib/OneEllipsis"
import { Tag } from "@/components/tags/F0Tag/F0Tag"

import type {
  F0DataChartFunnelDataPoint,
  F0DataChartFunnelProps,
} from "../../types"

import { formatPercent } from "../../utils/formatters"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useFunnelChartOptions } from "./useFunnelChartOptions"

/** Sort funnel data points according to the sort prop */
function sortFunnelData(
  dataPoints: F0DataChartFunnelDataPoint[],
  sort: "descending" | "ascending" | "none"
): F0DataChartFunnelDataPoint[] {
  if (sort === "none") return dataPoints
  if (sort === "ascending")
    return [...dataPoints].sort((a, b) => a.value - b.value)
  return [...dataPoints].sort((a, b) => b.value - a.value)
}

export const FunnelChart = (props: F0DataChartFunnelProps) => {
  const {
    series,
    sort = "descending",
    orient = "horizontal",
    showConversion = false,
    showLabels = true,
    valueFormatter,
  } = props

  const ref = useRef<HTMLDivElement>(null)
  const options = useFunnelChartOptions(ref, props)
  const chartRef = useEChartsInstance(ref, options)
  useLegendInteraction(chartRef)

  const sorted = sortFunnelData(series.data ?? [], sort)
  const firstValue = sorted[0]?.value ?? 0

  const isHorizontal = orient === "horizontal"

  return (
    <div className="relative h-full w-full">
      {showLabels && (
        <div
          className={`pointer-events-none absolute inset-0 z-10 flex ${isHorizontal ? "" : "flex-col"}`}
        >
          {sorted.map((point) => {
            const formattedValue = valueFormatter
              ? valueFormatter(point.value)
              : String(point.value)
            const pct =
              showConversion && firstValue > 0
                ? formatPercent(point.value, firstValue)
                : null

            return (
              <div
                key={point.name}
                className={
                  isHorizontal
                    ? "min-w-0 flex-1 border-0 border-l border-dashed border-f1-border"
                    : "min-h-0 flex-1 border-0 border-t border-dashed border-f1-border"
                }
              >
                <div
                  className={
                    isHorizontal
                      ? "flex flex-col gap-3 overflow-hidden px-2.5 pt-2"
                      : "flex items-baseline gap-2 overflow-hidden px-2.5 pt-2"
                  }
                >
                  <OneEllipsis
                    className="text-base text-f1-foreground-secondary"
                    lines={isHorizontal ? 2 : 1}
                  >
                    {point.name}
                  </OneEllipsis>
                  {isHorizontal ? (
                    <div className="flex items-baseline gap-1.5">
                      <OneEllipsis
                        className="text-2xl font-semibold leading-none text-f1-foreground"
                        lines={1}
                      >
                        {formattedValue}
                      </OneEllipsis>
                      {pct && <Tag tag={{ type: "raw", text: pct }} />}
                    </div>
                  ) : (
                    <>
                      <OneEllipsis
                        className="text-xl font-semibold leading-none text-f1-foreground"
                        lines={1}
                      >
                        {formattedValue}
                      </OneEllipsis>
                      {pct && <Tag tag={{ type: "raw", text: pct }} />}
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div ref={ref} className="h-full w-full" />
    </div>
  )
}
