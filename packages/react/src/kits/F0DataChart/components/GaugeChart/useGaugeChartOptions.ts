import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartGaugeProps } from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { useChartTheme } from "../../utils/useChartTheme"

export function useGaugeChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    value,
    min = 0,
    max = 100,
    name,
    color,
    showValue = true,
    valueFormatter,
    echartsOptions,
  }: F0DataChartGaugeProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)

  return useMemo(() => {
    const resolvedColor = color
      ? resolveChartColorToken(color)
      : paletteColor(0)
    const { tooltip, colors } = theme

    const gaugeSeries: echarts.GaugeSeriesOption = {
      type: "gauge",
      min,
      max,
      data: [{ value, name: name ?? "" }],
      progress: {
        show: true,
        width: 18,
        roundCap: true,
        itemStyle: {
          color: resolvedColor,
        },
      },
      pointer: {
        show: false,
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 18,
          color: [[1, theme.colors.borderSecondary]],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      title: {
        show: !!name,
        offsetCenter: [0, showValue ? "25%" : "0%"],
        color: colors.foregroundSecondary,
        fontSize: theme.textStyle.fontSize,
        fontWeight: theme.textStyle.fontWeight,
        fontFamily: theme.textStyle.fontFamily,
      },
      detail: {
        show: showValue,
        offsetCenter: [0, "0%"],
        color: colors.foreground,
        fontSize: 32,
        fontWeight: 700,
        fontFamily: theme.textStyle.fontFamily,
        formatter: valueFormatter
          ? (val: number) => valueFormatter(val)
          : undefined,
      },
    }

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      series: [gaugeSeries],
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
            value?: number
          }
          const val = Number(p.value ?? 0)
          const formattedValue = valueFormatter
            ? valueFormatter(val)
            : String(val)
          const label = p.name ? `<strong>${String(p.name)}</strong><br/>` : ""
          return `${label}${formattedValue}`
        },
      } as echarts.EChartsOption["tooltip"],
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    value,
    min,
    max,
    name,
    color,
    showValue,
    valueFormatter,
    echartsOptions,
    theme,
  ])
}
