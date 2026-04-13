import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartPieProps } from "../../types"

import {
  resolveChartColorToken,
  resolveDataPointColor,
} from "../../utils/colors"
import {
  buildItemTooltip,
  buildLegend,
  DEFAULT_EMPHASIS,
} from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

/** Discrete responsive size for the pie chart */
export type PieChartSize = ChartResponsiveSize

/**
 * Maps the discrete `size` to which chrome (legend, outside labels) is
 * rendered. Mirrors the rest of the F0DataChart family:
 *
 * - `sm` → no legend, no outside labels (tooltip is the only reveal)
 * - `md` → legend below, no outside labels (they would crowd the small ring)
 * - `lg` → legend below, outside labels with leader lines if `showLabels`
 */
function resolveResponsiveDisplay(size: PieChartSize) {
  return {
    showLegend: size !== "sm",
    showOutsideLabels: size === "lg",
  }
}

export function usePieChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    series,
    innerRadius = 0,
    showLegend = true,
    showLabels = true,
    showPercentage = false,
    valueFormatter,
    echartsOptions,
  }: F0DataChartPieProps,
  size: PieChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width: containerWidth } = useContainerSize(containerRef)

  return useMemo(() => {
    const dataPoints = series.data ?? []
    const resolvedSeriesColor = series.color
      ? resolveChartColorToken(series.color)
      : undefined

    const responsive = resolveResponsiveDisplay(size)
    // The user prop can still force chrome OFF, but never ON at sm/md.
    const effectiveShowLegend = responsive.showLegend && showLegend
    const effectiveShowLabels = responsive.showOutsideLabels && showLabels

    const pieData = dataPoints.map((point, i) => ({
      value: point.value,
      name: point.name,
      itemStyle: {
        color: resolveDataPointColor(point.color, resolvedSeriesColor, i),
        borderWidth: 2,
        borderColor: theme.colors.background,
      },
    }))

    const legendData = dataPoints.map((d) => d.name)

    const buildLabel = (): echarts.PieSeriesOption["label"] => {
      if (!effectiveShowLabels) return { show: false }

      return {
        show: true,
        position: "outside",
        alignTo: "edge",
        edgeDistance: 8,
        color: theme.colors.foreground,
        fontSize: theme.textStyle.fontSize,
        fontWeight: theme.textStyle.fontWeight,
        fontFamily: theme.textStyle.fontFamily,
        overflow: "truncate",
        formatter(params: { name?: string; value?: number; percent?: number }) {
          const name = String(params.name ?? "")
          const val = Number(params.value ?? 0)
          const formattedVal = valueFormatter
            ? valueFormatter(val)
            : String(val)
          if (showPercentage) {
            return `${name}: ${formattedVal} (${(params.percent ?? 0).toFixed(1)}%)`
          }
          return `${name}: ${formattedVal}`
        },
      } as echarts.PieSeriesOption["label"]
    }

    // Per-size center + radius. The breathing room above the legend is the
    // same as Bar/Line (~32px reserved when legend is shown).
    const center: [string, string] =
      size === "sm"
        ? ["50%", "50%"]
        : effectiveShowLabels
          ? ["50%", "45%"]
          : ["50%", effectiveShowLegend ? "45%" : "50%"]

    const outerRadiusPct = size === "sm" ? 85 : effectiveShowLabels ? 50 : 75
    const innerRadiusPct = Math.min(innerRadius, outerRadiusPct - 10)

    const pieSeries: echarts.PieSeriesOption = {
      name: series.name,
      type: "pie",
      radius: [`${innerRadiusPct}%`, `${outerRadiusPct}%`],
      center,
      data: pieData,
      avoidLabelOverlap: true,
      label: buildLabel(),
      labelLine: {
        show: effectiveShowLabels,
        length: 8,
        length2: 8,
        lineStyle: {
          color: theme.colors.borderSecondary,
        },
      },
      labelLayout: effectiveShowLabels ? { hideOverlap: true } : undefined,
      emphasis: {
        label: {
          show: effectiveShowLabels,
        },
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "transparent",
          opacity: 0.85,
        },
      },
    }

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      color: theme.palette,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      series: [pieSeries],
      legend: buildLegend({
        show: effectiveShowLegend,
        data: legendData,
        theme,
      }),
      tooltip: buildItemTooltip({
        theme,
        formatter: (params: unknown) => {
          const p = params as {
            marker?: string
            name?: string
            value?: number
            percent?: number
          }
          const val = Number(p.value ?? 0)
          const formattedValue = valueFormatter
            ? valueFormatter(val)
            : String(val)
          const pct = (p.percent ?? 0).toFixed(1)
          return `<div>${String(p.marker ?? "")} <strong>${String(p.name ?? "")}</strong></div><div style="margin-top: 2px">${formattedValue} (${pct}%)</div>`
        },
      }),
      emphasis: DEFAULT_EMPHASIS,
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    series,
    innerRadius,
    showLegend,
    showLabels,
    showPercentage,
    valueFormatter,
    echartsOptions,
    theme,
    containerWidth,
    size,
  ])
}
