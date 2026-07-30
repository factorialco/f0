import * as echarts from "echarts"
import { type RefObject, useMemo } from "react"

import type {
  F0DataChartBarDataPoint,
  F0DataChartBarProps,
  F0DataChartBarSeries,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildBaseChartOptions } from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

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

const BAR_CORNER_RADIUS = 4

/**
 * Corner radii (`[top-left, top-right, bottom-right, bottom-left]`) rounding
 * only the end of the bar that points away from the zero line. Negative bars
 * grow in the opposite direction, so they need the opposite corners.
 */
function barCornerRadius(isVertical: boolean, isNegative: boolean): number[] {
  if (isVertical) {
    return isNegative
      ? [0, 0, BAR_CORNER_RADIUS, BAR_CORNER_RADIUS]
      : [BAR_CORNER_RADIUS, BAR_CORNER_RADIUS, 0, 0]
  }
  return isNegative
    ? [BAR_CORNER_RADIUS, 0, 0, BAR_CORNER_RADIUS]
    : [0, BAR_CORNER_RADIUS, BAR_CORNER_RADIUS, 0]
}

/** Resolves the corner radii of a single bar segment */
type BorderRadiusResolver = (
  seriesIndex: number,
  dataIndex: number,
  value: number
) => number[] | number

/**
 * Builds a per-bar corner radius resolver.
 *
 * Non-stacked charts only need this when some value is negative: the
 * series-level radius can't express two directions at once. All-positive
 * (or all-negative) non-stacked charts keep the plain series-level radius.
 *
 * Stacked charts always need it, even when every value is positive: ECharts
 * stacks positive and negative values away from the zero line in opposite
 * directions, so a category has up to two outer segments — the last series
 * contributing a positive value and the last one contributing a negative
 * value — and only those two get rounded. Which series that is can differ
 * per category (e.g. the nominally "last" series is 0 for one category, so
 * an earlier series is the one actually touching the outer edge there), so
 * this can't be reduced to a single fixed series index.
 */
function buildBorderRadiusResolver(
  series: F0DataChartBarSeries[],
  isVertical: boolean,
  stacked: boolean
): BorderRadiusResolver | undefined {
  if (!stacked) {
    const hasNegativeValues = series.some((s) =>
      s.data.some((point) => getValue(point) < 0)
    )
    if (!hasNegativeValues) {
      return undefined
    }
    return (_seriesIndex, _dataIndex, value) =>
      barCornerRadius(isVertical, value < 0)
  }

  const outerPositive = new Map<number, number>()
  const outerNegative = new Map<number, number>()
  series.forEach((s, seriesIndex) => {
    s.data.forEach((point, dataIndex) => {
      const value = getValue(point)
      if (value > 0) {
        outerPositive.set(dataIndex, seriesIndex)
      } else if (value < 0) {
        outerNegative.set(dataIndex, seriesIndex)
      }
    })
  })

  return (seriesIndex, dataIndex, value) => {
    if (value === 0) return 0
    const isNegative = value < 0
    const outer = isNegative ? outerNegative : outerPositive
    return outer.get(dataIndex) === seriesIndex
      ? barCornerRadius(isVertical, isNegative)
      : 0
  }
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
  labelColor: string,
  resolveBorderRadius: BorderRadiusResolver | undefined
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

  // Build per-item data: use plain numbers unless the point needs its own
  // itemStyle (per-bar color override or a direction-specific corner radius)
  const mainData = series.data.map((point, dataIndex) => {
    const value = getValue(point)
    const pointColor = getPointColor(point)
    const pointBorderRadius = resolveBorderRadius?.(index, dataIndex, value)
    if (pointColor === undefined && pointBorderRadius === undefined) {
      return value
    }
    return {
      value,
      itemStyle: {
        ...(pointColor !== undefined && { color: pointColor }),
        ...(pointBorderRadius !== undefined && {
          borderRadius: pointBorderRadius,
        }),
      },
    }
  })

  // Round only the far end (away from the zero line):
  // - Vertical: top corners rounded, bottom flat against x-axis
  // - Horizontal: right corners rounded, left flat against y-axis
  // This series-level default only applies when `resolveBorderRadius` is
  // undefined (non-stacked, all-positive charts) — everything else
  // (negatives, or any stacked chart) is overridden per data point below,
  // since the direction and the outer-most segment can vary per category.
  const borderRadius = barCornerRadius(isVertical, false)

  const mainSeries: echarts.BarSeriesOption = {
    name: series.name,
    type: "bar",
    data: mainData,
    stack: stackId,
    itemStyle: {
      color,
      borderRadius,
    },
    label: {
      show: showLabels,
      position: isVertical ? "top" : "right",
      color: labelColor,
      fontWeight: "bold",
      overflow: "truncate",
      ellipsis: "...",
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
              { offset: 1, color: `${pointColor}00` },
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
          { offset: 1, color: `${color}00` },
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

/** Discrete responsive size for the bar chart (mirrors LineChart's `LineChartSize`) */
export type BarChartSize = ChartResponsiveSize

/**
 * Maps a discrete `size` to which chrome (legend, axes) is rendered. The
 * matrix is identical to `LineChart.resolveResponsiveDisplay` so the two
 * chart families behave the same at every breakpoint:
 *
 * - `sm` → just the bars, no axes, no legend
 * - `md` → bars + legend + value axis, no category axis
 * - `lg` → bars + legend + both axes (with smart truncation on the category axis)
 */
function resolveResponsiveDisplay(size: BarChartSize) {
  return {
    showLegend: size !== "sm",
    showCategoryAxis: size === "lg",
    showValueAxis: size !== "sm",
  }
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
  }: F0DataChartBarProps,
  size: BarChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width: containerWidth, height: containerHeight } =
    useContainerSize(containerRef)

  return useMemo(() => {
    const isVertical = orientation === "vertical"

    const responsive = resolveResponsiveDisplay(size)
    // The user-provided `showLegend` prop can still force the legend off,
    // but it can never override the `sm` rule.
    const effectiveShowLegend = responsive.showLegend && showLegend
    const { showCategoryAxis, showValueAxis } = responsive

    const resolveBorderRadius = buildBorderRadiusResolver(
      series,
      isVertical,
      stacked
    )

    // Build all ECharts series (including target ghost bars)
    const echartsSeries = series.flatMap((s, i) =>
      buildSeriesEntries(
        s,
        i,
        isVertical,
        showLabels,
        stacked,
        theme.colors.foregroundSecondary,
        resolveBorderRadius
      )
    )

    // Legend should only show the main series (not the target ghost bars)
    const legendData = series.map((s) => s.name)

    // Build a lookup of targets per series/category for the tooltip
    const targetMap = new Map<string, (number | undefined)[]>()
    for (const s of series) {
      const targets = s.data.map((d) => getTarget(d))
      if (targets.some((t) => t !== undefined)) {
        targetMap.set(s.name, targets)
      }
    }

    const hasAnyTargets = targetMap.size > 0

    const tooltipFormatter = hasAnyTargets
      ? (params: unknown) => {
          if (!Array.isArray(params)) return ""
          const filtered = params.filter(
            (p: { seriesName?: string }) =>
              !String(p.seriesName ?? "").endsWith(" (target)")
          )
          if (filtered.length === 0) return ""

          const header = `<div style="margin-bottom: 4px; font-weight: 500">${String(filtered[0].axisValueLabel ?? filtered[0].name ?? "")}</div>`
          const items = filtered
            .map(
              (p: {
                marker?: string
                seriesName?: string
                value?: number
                dataIndex?: number
              }) => {
                const val = Number(p.value)
                const formattedValue = valueFormatter
                  ? valueFormatter(val)
                  : String(val)
                const targets = targetMap.get(String(p.seriesName ?? ""))
                const target = targets?.[p.dataIndex ?? 0]
                const targetHtml =
                  target !== undefined
                    ? ` <span style="opacity: 0.6">/ ${valueFormatter ? valueFormatter(target) : String(target)}</span>`
                    : ""
                return `<div>${String(p.marker ?? "")} ${String(p.seriesName ?? "")} <strong>${formattedValue}</strong>${targetHtml}</div>`
              }
            )
            .join("")

          return `${header}${items}`
        }
      : undefined

    const options = buildBaseChartOptions({
      categories,
      theme,
      series: echartsSeries,
      legendData,
      isVertical,
      showGrid,
      showLegend: effectiveShowLegend,
      // For vertical bars the category axis is the X axis, for horizontal
      // bars it's the Y axis. `buildAxes` already handles that mapping.
      showCategoryAxis,
      showValueAxis,
      valueFormatter,
      categoryFormatter,
      tooltipFilterSeries: (name) => name.endsWith(" (target)"),
      tooltipFormatter,
      echartsOptions,
      containerWidth,
      containerHeight,
    })

    if (!isVertical && showLabels) {
      const userGridRight = (echartsOptions?.grid as { right?: number })?.right
      if (userGridRight === undefined) {
        const grid = options.grid as { right?: number }
        if (grid) {
          grid.right = 60
        }
      }
    }

    return options
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
    containerHeight,
    size,
  ])
}
