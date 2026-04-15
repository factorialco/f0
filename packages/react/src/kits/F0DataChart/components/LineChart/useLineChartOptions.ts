import * as echarts from "echarts"
import { type RefObject, useMemo } from "react"

import type {
  F0DataChartLineDataPoint,
  F0DataChartLineProps,
  F0DataChartLineSeries,
  F0DataChartLineType,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildBaseChartOptions } from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
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
 */
function buildSeriesEntry(
  series: F0DataChartLineSeries,
  index: number,
  globalLineType: F0DataChartLineType,
  globalShowArea: boolean,
  showDots: boolean,
  showLabels: boolean,
  labelColor: string
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
    showSymbol: showDots,
    symbol: "circle",
    symbolSize: 6,
    label: {
      show: showLabels,
      position: "top",
      color: labelColor,
      fontWeight: "bold",
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
        theme.colors.foregroundSecondary
      )
    )

    const legendData = series.map((s) => s.name)

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
