import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartHeatmapProps } from "../../types"

import { buildGrid } from "../../utils/options"
import { useChartTheme } from "../../utils/useChartTheme"

export function useHeatmapChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    xCategories,
    yCategories,
    data,
    min: minProp,
    max: maxProp,
    showLabels = false,
    showVisualMap = false,
    valueFormatter,
    echartsOptions,
  }: F0DataChartHeatmapProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)

  return useMemo(() => {
    // Auto-compute min/max from data if not provided
    const values = data.map((d) => d[2])
    const dataMin = values.length > 0 ? Math.min(...values) : 0
    const dataMax = values.length > 0 ? Math.max(...values) : 100
    const min = minProp ?? dataMin
    const max = maxProp ?? dataMax

    // Derive light and dark colors from the first palette color
    const baseColor = theme.palette[0] ?? "#0aa69b"

    const { tooltip, colors } = theme

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      xAxis: {
        type: "category",
        data: xCategories,
        splitArea: { show: false },
        axisLine: {
          lineStyle: { color: colors.borderSecondary },
        },
        axisTick: { show: false },
        axisLabel: {
          fontSize: theme.textStyle.fontSize,
          fontWeight: theme.textStyle.fontWeight,
          color: colors.foregroundTertiary,
        },
      },
      yAxis: {
        type: "category",
        data: yCategories,
        splitArea: { show: false },
        axisLine: {
          lineStyle: { color: colors.borderSecondary },
        },
        axisTick: { show: false },
        axisLabel: {
          fontSize: theme.textStyle.fontSize,
          fontWeight: theme.textStyle.fontWeight,
          color: colors.foregroundTertiary,
        },
      },
      visualMap: {
        min,
        max,
        calculable: false,
        orient: "horizontal",
        bottom: 0,
        left: "center",
        show: showVisualMap,
        inRange: {
          color: [colors.borderSecondary, baseColor],
        },
        textStyle: {
          color: colors.foregroundTertiary,
          fontSize: theme.textStyle.fontSize,
        },
        formatter: valueFormatter
          ? (value: unknown) => valueFormatter(Number(value))
          : undefined,
      },
      grid: buildGrid({ showLegend: showVisualMap }),
      series: [
        {
          type: "heatmap" as const,
          data,
          label: {
            show: showLabels,
            color: colors.foreground,
            fontSize: theme.textStyle.fontSize,
            fontWeight: theme.textStyle.fontWeight,
            formatter: valueFormatter
              ? (params: { value?: unknown[] }) => {
                  const val = Number(
                    (params.value as number[] | undefined)?.[2] ?? 0
                  )
                  return valueFormatter(val)
                }
              : undefined,
          },
          itemStyle: {
            borderRadius: 2,
            borderWidth: 2,
            borderColor: colors.background,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: "transparent",
              opacity: 0.85,
            },
          },
        } as echarts.HeatmapSeriesOption,
      ],
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
            value?: [number, number, number]
          }
          const [xIdx, yIdx, val] = p.value ?? [0, 0, 0]
          const xLabel = xCategories[xIdx] ?? ""
          const yLabel = yCategories[yIdx] ?? ""
          const formattedValue = valueFormatter
            ? valueFormatter(val)
            : String(val)
          return `<div><strong>${yLabel}</strong> × ${xLabel}</div><div style="margin-top: 2px">${String(p.marker ?? "")} ${formattedValue}</div>`
        },
      } as echarts.EChartsOption["tooltip"],
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    xCategories,
    yCategories,
    data,
    minProp,
    maxProp,
    showLabels,
    showVisualMap,
    valueFormatter,
    echartsOptions,
    theme,
  ])
}
