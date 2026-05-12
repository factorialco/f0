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
  /** Justified absence minutes rendered as a neutral segment. Missing time without this remains transparent. */
  justifiedAbsenceValue?: number
  /** Renders a full-height neutral bar for justified non-working days without a minute baseline. */
  justifiedAbsenceFullDay?: boolean
}

export interface HourDistributionCellValue {
  dataPoints: HourDistributionDataPoint[]
  /** Label for worked time in tooltips. Defaults to "Worked". */
  workedLabel?: string
  /** Label for justified absence in tooltips. Defaults to "Justified absence". */
  justifiedAbsenceLabel?: string
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
    ...(point.justifiedAbsenceValue != null
      ? { neutralValue: point.justifiedAbsenceValue }
      : {}),
    ...(point.justifiedAbsenceFullDay
      ? { neutralFullHeight: point.justifiedAbsenceFullDay }
      : {}),
  }
}

function toBarSeriesValue(args: HourDistributionCellValue): BarSeriesCellValue {
  const dataPoints = args.dataPoints.map(toBarSeriesDataPoint)
  const workedLabel = args.workedLabel ?? "Worked"
  const absenceLabel = args.justifiedAbsenceLabel ?? "Justified absence"
  const maxMinutes = Math.max(
    ...args.dataPoints.map((p) =>
      Math.max(
        p.value + Math.max(p.justifiedAbsenceValue ?? 0, 0),
        p.plannedValue ?? 0
      )
    ),
    MAX_MINUTES_FOR_SCALE * 0.1
  )
  const scaleMax = Math.min(maxMinutes, MAX_MINUTES_FOR_SCALE)
  return {
    dataPoints,
    formatLabel: formatDateForTooltip,
    formatValue: formatHours,
    formatTooltip: ({ point, formattedLabel, formattedValue }) => {
      const parts = [`${workedLabel} ${formattedValue}`]

      if (point.neutralFullHeight) {
        parts.push(absenceLabel)
      } else if (point.neutralValue != null && point.neutralValue > 0) {
        parts.push(`${absenceLabel} ${formatHours(point.neutralValue)}`)
      }

      return `${formattedLabel} - ${parts.join(", ")}`
    },
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
