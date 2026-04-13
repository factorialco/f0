import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartRadarProps } from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import {
  buildItemTooltip,
  buildLegend,
  DEFAULT_EMPHASIS,
} from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

/** Discrete responsive size for the radar chart */
export type RadarChartSize = ChartResponsiveSize

/**
 * Maps the discrete `size` to which chrome (legend, indicator names) is
 * rendered. Mirrors the rest of the F0DataChart family.
 *
 * - `sm` → no legend, no indicator names (the shape itself is the chart)
 * - `md` → legend below, indicator names truncated to 56px
 * - `lg` → legend below, indicator names truncated to 96px
 */
function resolveResponsiveDisplay(size: RadarChartSize) {
  if (size === "sm") {
    return { showLegend: false, showIndicatorNames: false, nameWidth: 0 }
  }
  if (size === "md") {
    return { showLegend: true, showIndicatorNames: true, nameWidth: 56 }
  }
  return { showLegend: true, showIndicatorNames: true, nameWidth: 96 }
}

export function useRadarChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    indicators,
    series,
    showArea = true,
    showLegend = true,
    showLabels = false,
    valueFormatter,
    echartsOptions,
  }: F0DataChartRadarProps,
  size: RadarChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const containerSize = useContainerSize(containerRef)

  return useMemo(() => {
    const responsive = resolveResponsiveDisplay(size)
    const effectiveShowLegend = responsive.showLegend && showLegend
    const { showIndicatorNames, nameWidth } = responsive

    // Auto-calculate max for each indicator if not provided
    const radarIndicators = indicators.map((ind, i) => {
      const maxFromData =
        ind.max ?? Math.max(...series.map((s) => s.data[i] ?? 0))
      return {
        name: ind.name,
        max: maxFromData > 0 ? maxFromData : 100,
      }
    })

    // Build radar series data
    const radarData = series.map((s, i) => {
      const color = s.color ? resolveChartColorToken(s.color) : paletteColor(i)
      return {
        name: s.name,
        value: s.data,
        itemStyle: { color },
        lineStyle: { color, width: 2 },
        areaStyle: showArea ? { color, opacity: 0.15 } : undefined,
        symbol: "circle" as const,
        symbolSize: 6,
        label: {
          show: showLabels,
          color: theme.colors.foregroundSecondary,
          fontSize: theme.textStyle.fontSize,
          fontFamily: theme.textStyle.fontFamily,
          formatter: valueFormatter
            ? (params: { value?: number }) =>
                valueFormatter(Number(params.value ?? 0))
            : undefined,
        },
      }
    })

    const legendData = series.map((s) => s.name)

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      color: theme.palette,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      radar: {
        indicator: radarIndicators,
        shape: "polygon",
        splitNumber: 4,
        axisName: showIndicatorNames
          ? {
              color: theme.colors.foregroundSecondary,
              fontSize: theme.textStyle.fontSize,
              fontWeight: theme.textStyle.fontWeight,
              fontFamily: theme.textStyle.fontFamily,
              overflow: "truncate" as const,
              width: nameWidth,
              ellipsis: "...",
            }
          : { show: false },
        splitArea: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: theme.colors.borderSecondary,
          },
        },
        axisLine: {
          lineStyle: {
            color: theme.colors.borderSecondary,
          },
        },
      },
      series: [
        {
          type: "radar" as const,
          data: radarData,
          emphasis: {
            label: {
              show: showLabels,
            },
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: "transparent",
              opacity: 0.85,
            },
          },
        },
      ] as echarts.EChartsOption["series"],
      legend: buildLegend({
        show: effectiveShowLegend,
        data: legendData,
        theme,
        containerWidth: containerSize.width,
      }),
      tooltip: buildItemTooltip({
        theme,
        formatter: (params: unknown) => {
          const p = params as {
            marker?: string
            name?: string
            value?: number[]
          }
          const values = p.value ?? []
          const header = `<div style="margin-bottom: 4px">${String(p.marker ?? "")} <strong>${String(p.name ?? "")}</strong></div>`
          const items = indicators
            .map((ind, i) => {
              const val = values[i] ?? 0
              const formattedVal = valueFormatter
                ? valueFormatter(val)
                : String(val)
              return `<div>${ind.name}: <strong>${formattedVal}</strong></div>`
            })
            .join("")
          return `${header}${items}`
        },
      }),
      emphasis: DEFAULT_EMPHASIS,
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    indicators,
    series,
    showArea,
    showLegend,
    showLabels,
    valueFormatter,
    echartsOptions,
    theme,
    containerSize,
    size,
  ])
}
