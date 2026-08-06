import * as echarts from "echarts"
import { type RefObject, useMemo } from "react"

import type {
  F0DataChartLineDataPoint,
  F0DataChartLineProps,
  F0DataChartLineSeries,
  F0DataChartLineType,
} from "../../types"
import type { ChartResponsiveSize } from "../../utils/responsive"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildBaseChartOptions } from "../../utils/options"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

/** Extract the numeric value from a data point */
function getValue(point: F0DataChartLineDataPoint): number {
  return typeof point === "number" ? point : point.value
}

/** Resolve the color for a series to hex, falling back to the shared palette */
function resolveColor(series: F0DataChartLineSeries, index: number): string {
  return series.color
    ? resolveChartColorToken(series.color)
    : paletteColor(index)
}

/**
 * Map the `lineType` prop to ECharts `smooth` and `step` properties.
 *
 * ECharts uses:
 * - `smooth: false` for straight segments
 * - `smooth: true` for bezier curves
 * - `step: "end"` for staircase patterns (overrides smooth)
 */
function resolveLineStyle(lineType: F0DataChartLineType): {
  smooth: boolean
  step: "end" | "start" | "middle" | false
} {
  switch (lineType) {
    case "smooth":
      return { smooth: true, step: false }
    case "step":
      return { smooth: false, step: "end" }
    case "linear":
    default:
      return { smooth: false, step: false }
  }
}

/**
 * Build the area gradient fill for a line series.
 * Fades from seriesColor at ~35% opacity to transparent, top to bottom.
 */
function buildAreaStyle(color: string): echarts.LineSeriesOption["areaStyle"] {
  return {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: `${color}59` },
      { offset: 1, color: `${color}00` },
    ]),
  }
}

/**
 * Build a single ECharts line series entry from an F0DataChartLineSeries.
 *
 * Exported for the combo chart, whose lines are these lines.
 */
export function buildSeriesEntry(
  series: F0DataChartLineSeries,
  index: number,
  globalLineType: F0DataChartLineType,
  globalShowArea: boolean,
  showDots: boolean,
  showLabels: boolean,
  labelColor: string,
  valueFormatter?: (value: number) => string
): echarts.LineSeriesOption {
  const color = resolveColor(series, index)
  const lineType = series.lineType ?? globalLineType
  const showArea = series.showArea ?? globalShowArea
  const { smooth, step } = resolveLineStyle(lineType)

  return {
    name: series.name,
    type: "line",
    data: series.data.map(getValue),
    smooth,
    step,
    itemStyle: {
      color,
    },
    lineStyle: {
      width: 2,
      type: series.dashed ? "dashed" : "solid",
    },
    areaStyle: showArea ? buildAreaStyle(color) : undefined,
    // ECharts attaches line labels to symbols. Keep a zero-sized symbol when
    // labels are requested so labels do not silently depend on visible dots.
    showSymbol: showDots || showLabels,
    symbol: "circle",
    symbolSize: showDots ? 6 : 0,
    label: {
      show: showLabels,
      position: "top",
      color: labelColor,
      fontWeight: "bold",
      formatter: valueFormatter
        ? (params) => valueFormatter(Number(params.value))
        : undefined,
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: "transparent",
      },
    },
  }
}

export function estimateEdgeLabelPadding(
  series: readonly F0DataChartLineSeries[],
  formatter: ((value: number) => string) | undefined,
  fontSize: number,
  containerWidth: number
): number {
  let maxCharacters = 0
  for (const currentSeries of series) {
    const edgePoints = [currentSeries.data[0], currentSeries.data.at(-1)]
    for (const point of edgePoints) {
      if (point === undefined) continue
      const value = getValue(point)
      const label = formatter ? formatter(value) : String(value)
      maxCharacters = Math.max(maxCharacters, label.length)
    }
  }

  // Approximate the rendered half-width without a canvas read, which keeps the
  // option builder deterministic in SSR/jsdom. Cap it so a pathological
  // formatter cannot consume most of a narrow chart.
  const estimatedHalfWidth = Math.ceil((maxCharacters * fontSize * 0.6) / 2)
  return Math.max(
    4,
    Math.min(Math.floor(containerWidth * 0.2), estimatedHalfWidth + 4)
  )
}

/** Discrete responsive size for the line chart */
export type LineChartSize = ChartResponsiveSize

/**
 * Maps a discrete `size` to which chrome (legend, axes) is rendered.
 *
 * - `sm` → just the line/area, no axes, no legend
 * - `md` → legend + Y axis, no X axis
 * - `lg` → legend + Y axis + X axis (smart truncation: every label visible
 *           with ellipsis when needed; first/last anchored to chart edges)
 */
function resolveResponsiveDisplay(size: LineChartSize) {
  return {
    showLegend: size !== "sm",
    showCategoryAxis: size === "lg",
    showValueAxis: size !== "sm",
  }
}

/**
 * Converts typed line chart props into a full ECharts option object.
 */
export function useLineChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    categories,
    series,
    lineType = "linear",
    showArea = true,
    showDots = false,
    showLegend = true,
    showGrid = true,
    showLabels = false,
    valueFormatter,
    categoryFormatter,
    echartsOptions,
  }: F0DataChartLineProps,
  size: LineChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width: containerWidth, height: containerHeight } =
    useContainerSize(containerRef)

  return useMemo(() => {
    // Area mode is only allowed when there's exactly one series — multiple
    // overlapping area fills are visually noisy and the design system forbids
    // them. This rule overrides both the global `showArea` prop and per-series
    // `series[].showArea` overrides.
    const isMultiSeries = series.length > 1
    const effectiveShowArea = isMultiSeries ? false : showArea

    const responsive = resolveResponsiveDisplay(size)
    // The size dictates the maximum chrome that's shown. The user-provided
    // `showLegend` prop can still force the legend off (e.g. minimal stories),
    // but it can never force it on at the `sm` breakpoint.
    const effectiveShowLegend = responsive.showLegend && showLegend
    const { showCategoryAxis, showValueAxis } = responsive

    const echartsSeries = series.map((s, i) =>
      buildSeriesEntry(
        // When forced off, also strip the per-series override so it doesn't
        // accidentally re-enable area on a single series in `buildSeriesEntry`.
        isMultiSeries ? { ...s, showArea: false } : s,
        i,
        lineType,
        effectiveShowArea,
        showDots,
        showLabels,
        theme.colors.foregroundSecondary,
        valueFormatter
      )
    )

    const legendData = series.map((s) => s.name)
    const seriesLabelEdgePadding = showLabels
      ? estimateEdgeLabelPadding(
          series,
          valueFormatter,
          theme.textStyle.fontSize,
          containerWidth
        )
      : undefined

    return buildBaseChartOptions({
      categories,
      theme,
      series: echartsSeries,
      legendData,
      isVertical: true,
      showGrid,
      showLegend: effectiveShowLegend,
      showCategoryAxis,
      showValueAxis,
      valueFormatter,
      categoryFormatter,
      echartsOptions,
      containerWidth,
      containerHeight,
      boundaryGap: false,
      seriesLabelEdgePadding,
    })
  }, [
    categories,
    series,
    lineType,
    showArea,
    showDots,
    showLegend,
    showGrid,
    showLabels,
    valueFormatter,
    categoryFormatter,
    echartsOptions,
    theme,
    containerWidth,
    containerHeight,
    size,
  ])
}
