import { colord } from "colord"
import * as echarts from "echarts"
import { useMemo } from "react"

import { baseColors } from "../../../../../core/src/tokens/colors"
import type {
  F0BarChartDataPoint,
  F0BarChartProps,
  F0BarChartSeries,
} from "./types"

function chartColor(hslValue: string): string {
  return colord(`hsl(${hslValue})`).toHex()
}

// Bar chart color palette mapped to the closest baseColors tokens
const barChartPalette = [
  chartColor(baseColors.viridian[50]),
  chartColor(baseColors.purple[50]),
  chartColor(baseColors.indigo[50]),
  chartColor(baseColors.lilac[70]),
  chartColor(baseColors.purple[60]),
  chartColor(baseColors.smoke[60]),
  chartColor(baseColors.malibu[70]),
  chartColor(baseColors.grass[50]),
  chartColor(baseColors.yellow[50]),
  chartColor(baseColors.red[60]),
]

// Semantic colors resolved to hex for ECharts
const foregroundTertiary = chartColor(baseColors.grey[40])
const foregroundSecondary = chartColor(baseColors.grey[50])
const borderSecondary = chartColor(baseColors.grey[10])

/** Extract the numeric value from a data point */
function getValue(point: F0BarChartDataPoint): number {
  return typeof point === "number" ? point : point.value
}

/** Extract the target from a data point (if any) */
function getTarget(point: F0BarChartDataPoint): number | undefined {
  return typeof point === "number" ? undefined : point.target
}

/** Resolve the color for a series, falling back to the bar chart palette */
function resolveColor(series: F0BarChartSeries, index: number): string {
  return (
    series.color ?? barChartPalette[index % barChartPalette.length] ?? "#999"
  )
}

/** Check whether a series contains any target values */
function hasTargets(series: F0BarChartSeries): boolean {
  return series.data.some(
    (d) => typeof d !== "number" && d.target !== undefined
  )
}

/**
 * Build ECharts series entries for a single F0BarChartSeries.
 *
 * When the series contains target data points, two ECharts series are produced:
 *  1. The main (solid) bar showing `value`
 *  2. A stacked "target" bar showing `target - value` with a linear gradient fill
 */
function buildSeriesEntries(
  series: F0BarChartSeries,
  index: number,
  isVertical: boolean,
  showLabels: boolean
): echarts.BarSeriesOption[] {
  const color = resolveColor(series, index)
  const hasTargetData = hasTargets(series)
  const stackId = hasTargetData ? `stack-${index}` : undefined

  const mainSeries: echarts.BarSeriesOption = {
    name: series.name,
    type: "bar",
    data: series.data.map(getValue),
    stack: stackId,
    itemStyle: {
      color,
      borderRadius: 4,
    },
    label: {
      show: showLabels,
      position: isVertical ? "top" : "right",
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
        // Gradient direction: for vertical bars, top-to-bottom (0,0 → 0,1)
        // For horizontal bars, left-to-right (0,0 → 1,0)
        ...(isVertical
          ? ([0, 0, 0, 1] as [number, number, number, number])
          : ([0, 0, 1, 0] as [number, number, number, number])),
        [
          // offset 0 = far end from the solid bar → more opaque (darker)
          { offset: 0, color: `${color}33` },
          // offset 1 = near the solid bar → transparent
          { offset: 1, color: "rgba(0, 0, 0, 0)" },
        ]
      ),
      borderRadius: 4,
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
 * Converts typed F0BarChart props into a full ECharts option object.
 */
export function useBarChartOptions({
  categories,
  series,
  orientation = "vertical",
  showLegend = true,
  showGrid = true,
  showLabels = false,
  valueFormatter,
  categoryFormatter,
  echartsOptions,
}: F0BarChartProps): echarts.EChartsOption {
  return useMemo(() => {
    const isVertical = orientation === "vertical"

    // Build all ECharts series (including target ghost bars)
    const echartsSeries = series.flatMap((s, i) =>
      buildSeriesEntries(s, i, isVertical, showLabels)
    )

    // Legend should only show the main series (not the target ghost bars)
    const legendData = series.map((s) => s.name)

    // Axis configs — built inline per orientation to satisfy ECharts discriminated union types
    const categoryAxisBase = {
      type: "category" as const,
      data: categories,
      axisLabel: {
        fontSize: 12,
        fontWeight: 500,
        color: foregroundTertiary,
        ...(categoryFormatter
          ? {
              formatter: (_value: string | number) =>
                categoryFormatter(String(_value)),
            }
          : {}),
      },
    }

    const valueAxisBase = {
      type: "value" as const,
      axisLabel: {
        fontSize: 12,
        fontWeight: 500,
        color: foregroundTertiary,
        ...(valueFormatter
          ? {
              formatter: (_value: string | number) =>
                valueFormatter(Number(_value)),
            }
          : {}),
      },
      splitLine: {
        show: showGrid,
        lineStyle: {
          type: "solid" as const,
          color: borderSecondary,
        },
      },
    }

    const baseOptions: echarts.EChartsOption = {
      xAxis: isVertical
        ? ({ ...categoryAxisBase } as echarts.EChartsOption["xAxis"])
        : ({ ...valueAxisBase } as echarts.EChartsOption["xAxis"]),
      yAxis: isVertical
        ? ({ ...valueAxisBase } as echarts.EChartsOption["yAxis"])
        : ({ ...categoryAxisBase } as echarts.EChartsOption["yAxis"]),
      series: echartsSeries,
      legend: showLegend
        ? ({
            show: true,
            data: legendData,
            bottom: "5%",
            left: "center",
            icon: "circle",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontWeight: 500,
              color: foregroundSecondary,
            },
          } as echarts.EChartsOption["legend"])
        : undefined,
      grid: {
        left: 10,
        right: 10,
        top: 10,
        bottom: showLegend ? 70 : 10,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        // Filter out the target ghost series from tooltips
        formatter: (params: unknown) => {
          if (!Array.isArray(params)) return ""

          const filtered = params.filter(
            (p: { seriesName?: string }) => !p.seriesName?.endsWith(" (target)")
          )

          if (filtered.length === 0) return ""

          const header = `<div style="margin-bottom: 4px; font-weight: 500">${String(filtered[0].axisValueLabel ?? filtered[0].name ?? "")}</div>`
          const items = filtered
            .map(
              (p: { marker?: string; seriesName?: string; value?: number }) => {
                const formattedValue = valueFormatter
                  ? valueFormatter(Number(p.value))
                  : String(p.value)
                return `<div>${String(p.marker ?? "")} ${String(p.seriesName ?? "")} <strong>${formattedValue}</strong></div>`
              }
            )
            .join("")

          return `${header}${items}`
        },
      },
      emphasis: {
        label: {
          show: false,
        },
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "transparent",
        },
      },
    }

    // Shallow merge with user-provided ECharts overrides
    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    categories,
    series,
    orientation,
    showLegend,
    showGrid,
    showLabels,
    valueFormatter,
    categoryFormatter,
    echartsOptions,
  ])
}
