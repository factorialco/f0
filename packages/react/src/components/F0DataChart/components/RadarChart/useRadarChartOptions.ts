import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartRadarProps } from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildLegend, DEFAULT_EMPHASIS } from "../../utils/options"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

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
  }: F0DataChartRadarProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const size = useContainerSize(containerRef)

  return useMemo(() => {
    const maxNameWidth = Math.floor(size.width / 4) || undefined
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
    const { tooltip, colors } = theme

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
        axisName: {
          color: theme.colors.foregroundSecondary,
          fontSize: theme.textStyle.fontSize,
          fontWeight: theme.textStyle.fontWeight,
          fontFamily: theme.textStyle.fontFamily,
          overflow: "truncate",
          ...(maxNameWidth ? { width: maxNameWidth } : {}),
        },
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
            },
          },
        },
      ] as echarts.EChartsOption["series"],
      legend: buildLegend({
        show: showLegend,
        data: legendData,
        theme,
      }),
      tooltip: {
        trigger: "item",
        padding: tooltip.padding,
        borderWidth: tooltip.borderWidth,
        transitionDuration: tooltip.transitionDuration,
        textStyle: {
          color: colors.foreground,
          fontSize: theme.textStyle.fontSize,
        },
        extraCssText: [
          `box-shadow: ${tooltip.boxShadow}`,
          `border-radius: ${tooltip.borderRadius}px`,
          `border: 1px solid ${colors.borderSecondary}`,
          "backdrop-filter: blur(30px)",
          `-webkit-backdrop-filter: blur(30px)`,
          `background: ${tooltip.background}`,
        ].join("; "),
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
      } as echarts.EChartsOption["tooltip"],
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
    size,
  ])
}
