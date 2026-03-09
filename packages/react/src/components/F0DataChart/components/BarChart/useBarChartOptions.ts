import * as echarts from "echarts"
import { type RefObject, useMemo } from "react"

import type {
  F0DataChartBarDataPoint,
  F0DataChartBarProps,
  F0DataChartBarSeries,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildBaseChartOptions, formatNumericValue } from "../../utils/options"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerWidth } from "../../utils/useContainerWidth"

/** Extract the numeric value from a data point */
function getValue(point: F0DataChartBarDataPoint): number {
  return typeof point === "number" ? point : point.value
}

/** Extract the target from a data point (if any) */
function getTarget(point: F0DataChartBarDataPoint): number | undefined {
  return typeof point === "number" ? undefined : point.target
}

/** Extract the per-bar color override from a data point, resolved to hex */
function getPointColor(point: F0DataChartBarDataPoint): string | undefined {
  if (typeof point === "number" || point.color === undefined) {
    return undefined
  }
  return resolveChartColorToken(point.color)
}

/** Resolve the color for a series to hex, falling back to the shared palette */
function resolveColor(series: F0DataChartBarSeries, index: number): string {
  return series.color
    ? resolveChartColorToken(series.color)
    : paletteColor(index)
}

/** Check whether a series contains any target values */
function hasTargets(series: F0DataChartBarSeries): boolean {
  return series.data.some(
    (d) => typeof d !== "number" && d.target !== undefined
  )
}

/**
 * Build ECharts series entries for a single F0DataChartBarSeries.
 *
 * When the series contains target data points, two ECharts series are produced:
 *  1. The main (solid) bar showing `value`
 *  2. A stacked "target" bar showing `target - value` with a linear gradient fill
 */
function buildSeriesEntries(
  series: F0DataChartBarSeries,
  index: number,
  isVertical: boolean,
  showLabels: boolean,
  stacked: boolean,
  isLastSeries: boolean,
  labelColor: string
): echarts.BarSeriesOption[] {
  const color = resolveColor(series, index)
  const hasTargetData = hasTargets(series)
  // When stacked, all series share "stacked"; when using targets, each series
  // gets its own stack so the ghost bar stacks on its own solid bar only
  const stackId = stacked
    ? hasTargetData
      ? `stacked-${index}`
      : "stacked"
    : hasTargetData
      ? `stack-${index}`
      : undefined

  // Build per-item data: use plain numbers when no per-bar color overrides
  // exist, otherwise produce ECharts data items with per-item itemStyle
  const hasPerBarColors = series.data.some(
    (d) => getPointColor(d) !== undefined
  )

  const mainData = hasPerBarColors
    ? series.data.map((point) => {
        const pointColor = getPointColor(point)
        if (pointColor === undefined) {
          return getValue(point)
        }
        return {
          value: getValue(point),
          itemStyle: { color: pointColor },
        }
      })
    : series.data.map(getValue)

  // Round only the far end (away from the axis):
  // - Vertical: top corners rounded, bottom flat against x-axis
  // - Horizontal: right corners rounded, left flat against y-axis
  const borderRadius = isVertical ? [4, 4, 0, 0] : [0, 4, 4, 0]
  // Stacked series that aren't the last one get no rounding (sandwiched)
  const effectiveBorderRadius = stacked && !isLastSeries ? 0 : borderRadius

  const mainSeries: echarts.BarSeriesOption = {
    name: series.name,
    type: "bar",
    data: mainData,
    stack: stackId,
    itemStyle: {
      color,
      borderRadius: effectiveBorderRadius,
    },
    label: {
      show: showLabels,
      position: isVertical ? "top" : "right",
      color: labelColor,
      fontWeight: "bold",
      formatter: (params: { value?: number | { value: number } }) => {
        const val =
          typeof params.value === "object"
            ? params.value.value
            : Number(params.value ?? 0)
        return formatNumericValue(val)
      },
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: "transparent",
      },
    },
  }

  if (!hasTargetData) {
    return [mainSeries]
  }

  const targetData = series.data.map((point) => {
    const value = getValue(point)
    const target = getTarget(point)
    if (target === undefined || target <= value) {
      return 0
    }
    const pointColor = getPointColor(point)
    if (pointColor !== undefined) {
      return {
        value: target - value,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            ...(isVertical
              ? ([0, 0, 0, 1] as [number, number, number, number])
              : ([1, 0, 0, 0] as [number, number, number, number])),
            [
              { offset: 0, color: `${pointColor}33` },
              { offset: 1, color: "rgba(0, 0, 0, 0)" },
            ]
          ),
          borderRadius,
        },
      }
    }
    return target - value
  })

  const targetSeries: echarts.BarSeriesOption = {
    name: `${series.name} (target)`,
    type: "bar",
    data: targetData,
    stack: stackId,
    // Hide from legend and tooltip
    legendHoverLink: false,
    tooltip: {
      show: false,
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(
        // Gradient direction: offset 0 is the far end from the solid bar
        // Vertical: top-to-bottom (0,0 → 0,1) — dark at top
        // Horizontal: right-to-left (1,0 → 0,0) — dark at right
        ...(isVertical
          ? ([0, 0, 0, 1] as [number, number, number, number])
          : ([1, 0, 0, 0] as [number, number, number, number])),
        [
          // offset 0 = far end from the solid bar → more opaque (darker)
          { offset: 0, color: `${color}33` },
          // offset 1 = near the solid bar → transparent
          { offset: 1, color: "rgba(0, 0, 0, 0)" },
        ]
      ),
      // Only round the far end (away from the solid bar)
      borderRadius,
    },
    label: {
      show: false,
    },
    emphasis: {
      disabled: true,
    },
  }

  return [mainSeries, targetSeries]
}

/**
 * Converts typed bar chart props into a full ECharts option object.
 */
export function useBarChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    categories,
    series,
    orientation = "vertical",
    stacked = false,
    showLegend = true,
    showGrid = true,
    showLabels = false,
    valueFormatter,
    categoryFormatter,
    echartsOptions,
  }: F0DataChartBarProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const containerWidth = useContainerWidth(containerRef)

  return useMemo(() => {
    const isVertical = orientation === "vertical"

    // Build all ECharts series (including target ghost bars)
    const echartsSeries = series.flatMap((s, i) =>
      buildSeriesEntries(
        s,
        i,
        isVertical,
        showLabels,
        stacked,
        i === series.length - 1,
        theme.colors.foregroundSecondary
      )
    )

    // Legend should only show the main series (not the target ghost bars)
    const legendData = series.map((s) => s.name)

    return buildBaseChartOptions({
      categories,
      theme,
      series: echartsSeries,
      legendData,
      isVertical,
      showGrid,
      showLegend,
      valueFormatter,
      categoryFormatter,
      tooltipFilterSeries: (name) => name.endsWith(" (target)"),
      echartsOptions,
      containerWidth,
    })
  }, [
    categories,
    series,
    orientation,
    stacked,
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
