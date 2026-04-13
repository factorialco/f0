import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartGaugeProps } from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildItemTooltip } from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"

/** Discrete responsive size for the gauge */
export type GaugeChartSize = ChartResponsiveSize

/**
 * Maps the discrete `size` to the gauge's typography + ring thickness.
 *
 * - `sm` → compact: hide name, smaller value, thinner ring
 * - `md` → medium value, medium ring
 * - `lg` → large value, full ring
 */
function resolveResponsiveDisplay(size: GaugeChartSize) {
  if (size === "sm") {
    return {
      showName: false,
      detailFontSize: 18,
      titleFontSize: 11,
      ringWidth: 8,
    }
  }
  if (size === "md") {
    return {
      showName: true,
      detailFontSize: 24,
      titleFontSize: 12,
      ringWidth: 12,
    }
  }
  return {
    showName: true,
    detailFontSize: 32,
    titleFontSize: 12,
    ringWidth: 18,
  }
}

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
  }: F0DataChartGaugeProps,
  size: GaugeChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)

  return useMemo(() => {
    const resolvedColor = color
      ? resolveChartColorToken(color)
      : paletteColor(0)
    const { colors } = theme
    const responsive = resolveResponsiveDisplay(size)
    const effectiveShowName = responsive.showName && !!name

    const gaugeSeries: echarts.GaugeSeriesOption = {
      type: "gauge",
      min,
      max,
      data: [{ value, name: name ?? "" }],
      progress: {
        show: true,
        width: responsive.ringWidth,
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
          width: responsive.ringWidth,
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
        show: effectiveShowName,
        offsetCenter: [0, showValue ? "25%" : "0%"],
        color: colors.foregroundSecondary,
        fontSize: responsive.titleFontSize,
        fontWeight: theme.textStyle.fontWeight,
        fontFamily: theme.textStyle.fontFamily,
      },
      detail: {
        show: showValue,
        offsetCenter: [0, "0%"],
        color: colors.foreground,
        fontSize: responsive.detailFontSize,
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
      tooltip: buildItemTooltip({
        theme,
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
      }),
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
    size,
  ])
}
