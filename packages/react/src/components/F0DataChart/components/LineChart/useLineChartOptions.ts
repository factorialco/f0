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
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerWidth } from "../../utils/useContainerWidth"

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
      { offset: 1, color: "rgba(0, 0, 0, 0)" },
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
  }: F0DataChartLineProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const containerWidth = useContainerWidth(containerRef)

  return useMemo(() => {
    const echartsSeries = series.map((s, i) =>
      buildSeriesEntry(
        s,
        i,
        lineType,
        showArea,
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
      showLegend,
      valueFormatter,
      categoryFormatter,
      echartsOptions,
      containerWidth,
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
  ])
}
