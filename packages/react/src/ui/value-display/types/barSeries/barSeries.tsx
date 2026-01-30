/**
 * Generic bar-series cell type for displaying a row of vertical bars with optional
 * secondary value (under/over/two-tone coloring). Used as the base for hourDistribution
 * and other presets.
 */
import { getColor } from "@/components/Charts/utils/colors"
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { cn } from "@/lib/utils"

const CHART_HEIGHT_PX = 52
const BAR_WIDTH_PX = 6
const BAR_GAP_PX = 2
const CELL_MIN_HEIGHT_PX = 72
const EMPTY_BAR_BORDER_HEIGHT_PX = 2

/** Default color for "under" (value < secondaryValue). */
const COLOR_UNDER = "categorical-5"
/** Color for "planned" segment (lighter). */
const COLOR_PLANNED = "categorical-1"
const LIGHTER_OPACITY = 0.5
/** Color for "overtime" segment (value > secondaryValue). */
const COLOR_OVERTIME = "categorical-1"

export interface BarSeriesDataPoint {
  label: string
  value: number
  secondaryValue?: number
}

export interface BarSeriesCellValue {
  dataPoints: BarSeriesDataPoint[]
  formatLabel?: (label: string) => string
  formatValue?: (value: number) => string
  /** Optional max for scale; if not set, derived from data. */
  scaleMax?: number
}

function defaultFormatLabel(label: string): string {
  return label
}

function defaultFormatValue(value: number): string {
  return String(value)
}

function BarWithTooltip({
  point,
  scaleMax,
  formatLabel,
  formatValue,
}: {
  point: BarSeriesDataPoint
  scaleMax: number
  formatLabel: (label: string) => string
  formatValue: (value: number) => string
}) {
  const { label, value, secondaryValue } = point
  const formattedLabel = formatLabel(label)
  const valueStr = formatValue(value)
  const tooltipLabel = `${formattedLabel} – ${valueStr}`

  const isUnder = secondaryValue != null && value < secondaryValue
  const isOver = secondaryValue != null && value > secondaryValue

  const heightValuePx =
    scaleMax > 0 ? Math.round(CHART_HEIGHT_PX * (value / scaleMax)) : 0
  const heightPlannedPx =
    secondaryValue != null && scaleMax > 0 && !isUnder
      ? Math.round(
          CHART_HEIGHT_PX * (Math.min(value, secondaryValue) / scaleMax)
        )
      : heightValuePx
  const heightOvertimePx = isOver
    ? Math.round(CHART_HEIGHT_PX * ((value - (secondaryValue ?? 0)) / scaleMax))
    : 0

  const isEmpty = value === 0

  return (
    <TooltipProvider delayDuration={100} disableHoverableContent>
      <TooltipPrimitive>
        <TooltipTrigger asChild>
          <div
            className="flex-shrink-0 cursor-default rounded-sm transition-opacity hover:opacity-90"
            style={{
              width: BAR_WIDTH_PX,
              height: CHART_HEIGHT_PX,
              minHeight: CHART_HEIGHT_PX,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "stretch",
            }}
            role="img"
            aria-label={tooltipLabel}
          >
            {isEmpty ? (
              <div
                className="rounded-sm bg-f1-border-secondary"
                style={{
                  width: BAR_WIDTH_PX,
                  height: EMPTY_BAR_BORDER_HEIGHT_PX,
                  minHeight: EMPTY_BAR_BORDER_HEIGHT_PX,
                }}
              />
            ) : isUnder ? (
              <div
                style={{
                  width: BAR_WIDTH_PX,
                  height: heightValuePx,
                  backgroundColor: getColor(COLOR_UNDER),
                  borderRadius: 2,
                }}
              />
            ) : isOver && heightOvertimePx > 0 ? (
              <>
                <div
                  style={{
                    width: BAR_WIDTH_PX,
                    height: heightOvertimePx,
                    backgroundColor: getColor(COLOR_OVERTIME),
                    borderRadius: "2px 2px 0 0",
                  }}
                />
                <div
                  style={{
                    width: BAR_WIDTH_PX,
                    height: heightPlannedPx,
                    backgroundColor: getColor(COLOR_PLANNED, LIGHTER_OPACITY),
                    borderRadius: "0 0 2px 2px",
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  width: BAR_WIDTH_PX,
                  height: heightValuePx,
                  backgroundColor: getColor(COLOR_PLANNED, LIGHTER_OPACITY),
                  borderRadius: 2,
                }}
              />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent
          className="pointer-events-none z-[100] max-w-xs"
          side="top"
          sideOffset={6}
        >
          <p className="font-semibold">{tooltipLabel}</p>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}

export const BarSeriesCell = (
  args: BarSeriesCellValue,
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
        data-cell-type="barSeries"
      >
        –
      </div>
    )
  }

  const formatLabel = args.formatLabel ?? defaultFormatLabel
  const formatValue = args.formatValue ?? defaultFormatValue

  const maxFromData = Math.max(
    ...dataPoints.map((p) => Math.max(p.value, p.secondaryValue ?? 0)),
    0
  )
  const scaleMax = args.scaleMax ?? Math.max(maxFromData, 1)

  return (
    <div
      className={cn(
        "flex items-center justify-end gap-0.5 overflow-visible py-1",
        meta.visualization === "table" && "pt-0.5"
      )}
      style={{
        minHeight: CELL_MIN_HEIGHT_PX,
        height: CELL_MIN_HEIGHT_PX,
        minWidth: dataPoints.length * (BAR_WIDTH_PX + BAR_GAP_PX) - BAR_GAP_PX,
      }}
      data-cell-type="barSeries"
      role="img"
      aria-label="Bar series"
    >
      {dataPoints.map((point, index) => (
        <div key={`${point.label}-${index}`} className="pointer-events-auto">
          <BarWithTooltip
            point={point}
            scaleMax={scaleMax}
            formatLabel={formatLabel}
            formatValue={formatValue}
          />
        </div>
      ))}
    </div>
  )
}
