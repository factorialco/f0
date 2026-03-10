import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartFunnelProps } from "../../types"

import {
  resolveChartColorToken,
  resolveDataPointColor,
} from "../../utils/colors"
import { formatPercent } from "../../utils/formatters"
import {
  buildGrid,
  buildItemTooltip,
  buildLegend,
  DEFAULT_EMPHASIS,
} from "../../utils/options"
import { useChartTheme } from "../../utils/useChartTheme"

export function useFunnelChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    series,
    sort = "descending",
    gap = 0,
    orient = "horizontal",
    showLegend = false,
    showLabels = true,
    showConversion = false,
    colorScale = true,
    valueFormatter,
    echartsOptions,
  }: F0DataChartFunnelProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)

  return useMemo(() => {
    const dataPoints = series.data ?? []
    const resolvedSeriesColor = series.color
      ? resolveChartColorToken(series.color)
      : undefined

    // First value in rendered order (largest stage for conversion base)
    const sortedForFirst =
      sort === "ascending"
        ? [...dataPoints].sort((a, b) => a.value - b.value)
        : sort === "descending"
          ? [...dataPoints].sort((a, b) => b.value - a.value)
          : dataPoints
    const firstValue = sortedForFirst[0]?.value ?? 0

    const baseColor = theme.palette[0] ?? "#0aa69b"
    const lightColor = theme.colors.borderSecondary
    const maxValue = Math.max(...dataPoints.map((d) => d.value), 1)

    const funnelData = dataPoints.map((point, i) => ({
      value: point.value,
      name: point.name,
      itemStyle: {
        color: resolveDataPointColor(
          point.color,
          resolvedSeriesColor,
          i,
          colorScale
            ? { ratio: point.value / maxValue, lightColor, baseColor }
            : undefined
        ),
        borderWidth: 0,
        borderRadius: 4,
      },
    }))

    const legendData = dataPoints.map((d) => d.name)

    const isHorizontal = orient === "horizontal"

    const funnelLeft = isHorizontal ? 0 : showLabels ? 160 : 0
    const funnelRight = 0
    const funnelTop = isHorizontal && showLabels ? 90 : 0
    const funnelBottom = showLegend ? 28 : 0

    const funnelSeries: echarts.FunnelSeriesOption = {
      name: series.name,
      type: "funnel",
      sort,
      gap,
      orient,
      data: funnelData,
      left: funnelLeft,
      right: funnelRight,
      top: funnelTop,
      bottom: funnelBottom,
      width: "auto",
      height: "auto",
      minSize: "5%",
      maxSize: "100%",
      funnelAlign: "center",
      label: { show: false } as echarts.FunnelSeriesOption["label"],
      labelLine: { show: false },
      itemStyle: {
        borderWidth: 0,
        borderRadius: 4,
      },
      emphasis: {
        label: { show: false },
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "transparent",
          opacity: 0.85,
        },
      },
    }

    const { colors } = theme

    const buildTooltipFormatter = () => {
      // Use sorted order for step-over-step conversion
      const sorted =
        sort === "none"
          ? dataPoints
          : sort === "ascending"
            ? [...dataPoints].sort((a, b) => a.value - b.value)
            : [...dataPoints].sort((a, b) => b.value - a.value)

      const sortedIndexMap = new Map<string, number>()
      sorted.forEach((d, i) => {
        sortedIndexMap.set(d.name, i)
      })

      return (params: unknown) => {
        const p = params as {
          marker?: string
          name?: string
          value?: number
        }
        const val = Number(p.value ?? 0)
        const formattedValue = valueFormatter
          ? valueFormatter(val)
          : String(val)
        const name = String(p.name ?? "")
        const sortedIndex = sortedIndexMap.get(name)

        let conversionHtml = ""
        if (showConversion && firstValue > 0 && sortedIndex !== undefined) {
          const overallPct = formatPercent(val, firstValue)
          conversionHtml = `<div style="margin-top: 4px; color: ${colors.foregroundTertiary}; font-size: 11px">Overall: ${overallPct}</div>`

          const prevIndex = sortedIndex - 1
          if (prevIndex >= 0) {
            const prevData = sorted[prevIndex]
            if (prevData && prevData.value > 0) {
              const stepPct = formatPercent(val, prevData.value)
              conversionHtml += `<div style="color: ${colors.foregroundTertiary}; font-size: 11px">From ${prevData.name}: ${stepPct}</div>`
            }
          }
        }

        return `<div>${String(p.marker ?? "")} <strong>${name}</strong></div><div style="margin-top: 2px">${formattedValue}</div>${conversionHtml}`
      }
    }

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      color: theme.palette,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      series: [funnelSeries],
      legend: buildLegend({
        show: showLegend,
        data: legendData,
        theme,
      }),
      grid: buildGrid({ showLegend }),
      tooltip: buildItemTooltip({
        theme,
        formatter: buildTooltipFormatter(),
      }),
      emphasis: DEFAULT_EMPHASIS,
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    series,
    sort,
    gap,
    orient,
    showLegend,
    showLabels,
    showConversion,
    colorScale,
    valueFormatter,
    echartsOptions,
    theme,
  ])
}
