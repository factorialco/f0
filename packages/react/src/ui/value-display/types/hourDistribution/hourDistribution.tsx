/**
 * Hour distribution cell type for displaying worked hours per day as a compact bar chart.
 * Thin preset over barSeries: maps date + value (+ optional plannedValue) to bar-series
 * with date/hours formatters and current colors (underworked = orange, planned/overtime = teal).
 */
import { tableDisplayClassNames } from "../../const"
import {
  BarSeriesCell,
  BarSeriesCellValue,
  BarSeriesDataPoint,
} from "../barSeries"
import { ValueDisplayRendererContext } from "../../renderers"
import { cn } from "@/lib/utils"

export interface HourDistributionDataPoint {
  date: string
  value: number
  /** When set, used for two-tone coloring and underworked (value < plannedValue) = orange. */
  plannedValue?: number
}

export interface HourDistributionCellValue {
  dataPoints: HourDistributionDataPoint[]
}

const MAX_MINUTES_FOR_SCALE = 8 * 60 // 8 hours

function formatDateForTooltip(dateStr: string): string {
  try {
    const date = new Date(dateStr)
    if (Number.isNaN(date.getTime())) return dateStr
    return date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
    })
  } catch {
    return dateStr
  }
}

function formatHours(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

function toBarSeriesDataPoint(
  point: HourDistributionDataPoint
): BarSeriesDataPoint {
  return {
    label: point.date,
    value: point.value,
    ...(point.plannedValue != null
      ? { secondaryValue: point.plannedValue }
      : {}),
  }
}

function toBarSeriesValue(args: HourDistributionCellValue): BarSeriesCellValue {
  const dataPoints = args.dataPoints.map(toBarSeriesDataPoint)
  const maxMinutes = Math.max(
    ...args.dataPoints.map((p) => Math.max(p.value, p.plannedValue ?? 0)),
    MAX_MINUTES_FOR_SCALE * 0.1
  )
  const scaleMax = Math.min(maxMinutes, MAX_MINUTES_FOR_SCALE)
  return {
    dataPoints,
    formatLabel: formatDateForTooltip,
    formatValue: formatHours,
    scaleMax,
  }
}

export const HourDistributionCell = (
  args: HourDistributionCellValue,
  meta: ValueDisplayRendererContext
) => {
  const dataPoints = args?.dataPoints

  if (!dataPoints || !Array.isArray(dataPoints) || dataPoints.length === 0) {
    return (
      <div
        className={cn(
          "text-f1-foreground-secondary",
          meta.visualization === "table" && tableDisplayClassNames.text
        )}
        data-cell-type="hourDistribution"
      >
        –
      </div>
    )
  }

  return BarSeriesCell(toBarSeriesValue(args), meta)
}
