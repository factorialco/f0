import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type {
  F0DataChartFunnelDataPoint,
  F0DataChartFunnelProps,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildGrid, buildLegend, DEFAULT_EMPHASIS } from "../../utils/options"
import { useChartTheme } from "../../utils/useChartTheme"

/** Resolve the color for a single funnel data point */
function resolvePointColor(
  point: F0DataChartFunnelDataPoint,
  seriesColor: string | undefined,
  index: number
): string {
  if (point.color) {
    return resolveChartColorToken(point.color)
  }
  if (seriesColor) {
    return seriesColor
  }
  return paletteColor(index)
}

/** Format a conversion percentage */
function formatPercent(value: number, total: number): string {
  if (total === 0) return "0%"
  const pct = (value / total) * 100
  if (pct === 100) return "100%"
  if (pct >= 10) return `${pct.toFixed(1)}%`
  return `${pct.toFixed(1)}%`
}

/**
 * Converts typed funnel chart props into a full ECharts option object.
 *
 * Funnel charts have NO axes — stage names come from the data points.
 * This hook builds the ECharts option manually, reusing `buildLegend`
 * and `buildGrid` from the shared utils for consistent styling.
 *
 * Redesigned for readability:
 * - Outside labels with no leader lines: stage name + value + conversion %
 * - Left-aligned funnel so labels sit cleanly to the right
 * - Rounded corners on funnel stages
 * - Generous gap between stages
 * - No legend by default (stage names are in the labels)
 */
export function useFunnelChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    series,
    sort = "descending",
    gap = 4,
    orient = "horizontal",
    labelPosition = "outside",
    showLegend = true,
    showLabels = true,
    showConversion = false,
    valueFormatter,
    echartsOptions,
  }: F0DataChartFunnelProps
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)

  return useMemo(() => {
    const resolvedSeriesColor = series.color
      ? resolveChartColorToken(series.color)
      : undefined

    // The first data point value is the reference for conversion percentages
    const firstValue =
      sort === "ascending"
        ? (series.data[series.data.length - 1]?.value ?? 0)
        : (series.data[0]?.value ?? 0)

    // Build data with resolved colors per point
    const funnelData = series.data.map((point, i) => ({
      value: point.value,
      name: point.name,
      itemStyle: {
        color: resolvePointColor(point, resolvedSeriesColor, i),
        borderWidth: 0,
        borderRadius: 4,
      },
    }))

    const legendData = series.data.map((d) => d.name)

    // Funnel positioning
    const isOutside = labelPosition === "outside"
    const isHorizontal = orient === "horizontal"

    // Funnel positioning — leave room for outside labels, and enough
    // bottom space so the last stage's label text is not clipped
    const funnelLeft = 4
    const funnelRight = 4
    const funnelTop = isHorizontal ? 4 : isOutside ? 40 : 4
    const funnelBottom = showLegend
      ? 28
      : isHorizontal
        ? 16
        : isOutside
          ? 40
          : 4

    // Build outside label with rich text: "Stage Name  value (XX.X%)"
    const buildOutsideLabel = (): echarts.FunnelSeriesOption["label"] => {
      if (!showLabels)
        return { show: false } as echarts.FunnelSeriesOption["label"]

      return {
        show: true,
        position: "outer",
        rich: {
          name: {
            color: theme.colors.foreground,
            fontSize: theme.textStyle.fontSize,
            fontWeight: 600,
            fontFamily: theme.textStyle.fontFamily,
          },
          value: {
            color: theme.colors.foregroundSecondary,
            fontSize: theme.textStyle.fontSize,
            fontWeight: theme.textStyle.fontWeight,
            fontFamily: theme.textStyle.fontFamily,
            padding: [0, 0, 0, 6],
          },
          pct: {
            color: theme.colors.foregroundTertiary,
            fontSize: theme.textStyle.fontSize,
            fontWeight: theme.textStyle.fontWeight,
            fontFamily: theme.textStyle.fontFamily,
            padding: [0, 0, 0, 4],
          },
        },
        formatter(params: { name?: string; value?: number }) {
          const name = String(params.name ?? "")
          const val = Number(params.value ?? 0)
          const formattedVal = valueFormatter
            ? valueFormatter(val)
            : String(val)

          if (showConversion && firstValue > 0) {
            const pct = formatPercent(val, firstValue)
            return `{name|${name}}  {value|${formattedVal}}  {pct|${pct}}`
          }
          return `{name|${name}}  {value|${formattedVal}}`
        },
      } as echarts.FunnelSeriesOption["label"]
    }

    // Build inside label — simpler, just name + value
    const buildInsideLabel = (): echarts.FunnelSeriesOption["label"] => {
      if (!showLabels)
        return { show: false } as echarts.FunnelSeriesOption["label"]

      return {
        show: true,
        position: "inner",
        color: "#fff",
        fontSize: theme.textStyle.fontSize,
        fontWeight: 600,
        fontFamily: theme.textStyle.fontFamily,
        formatter(params: { name?: string; value?: number }) {
          const name = String(params.name ?? "")
          const val = Number(params.value ?? 0)
          const formattedVal = valueFormatter
            ? valueFormatter(val)
            : String(val)

          if (showConversion && firstValue > 0) {
            const pct = formatPercent(val, firstValue)
            return `${name}: ${formattedVal} (${pct})`
          }
          return `${name}: ${formattedVal}`
        },
      } as echarts.FunnelSeriesOption["label"]
    }

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
      label: isOutside ? buildOutsideLabel() : buildInsideLabel(),
      labelLine: {
        show: isOutside,
        length: 15,
        lineStyle: {
          color: theme.colors.borderSecondary,
          width: 1,
        },
      },
      itemStyle: {
        borderWidth: 0,
        borderRadius: 4,
      },
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
    }

    const { tooltip, colors } = theme

    // Build tooltip that shows step-over-step conversion
    const buildTooltipFormatter = () => {
      // Create a lookup for step-over-step conversion
      const dataMap = new Map<string, { value: number; index: number }>()
      series.data.forEach((d, i) => {
        dataMap.set(d.name, { value: d.value, index: i })
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
        const info = dataMap.get(name)

        let conversionHtml = ""
        if (showConversion && firstValue > 0 && info) {
          const overallPct = formatPercent(val, firstValue)
          conversionHtml = `<div style="margin-top: 4px; color: ${colors.foregroundTertiary}; font-size: 11px">Overall: ${overallPct}</div>`

          // Step-over-step: compare with previous stage
          const prevIndex = info.index - 1
          if (prevIndex >= 0) {
            const prevData = series.data[prevIndex]
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
        formatter: buildTooltipFormatter(),
      } as echarts.EChartsOption["tooltip"],
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
    labelPosition,
    showLegend,
    showLabels,
    showConversion,
    valueFormatter,
    echartsOptions,
    theme,
  ])
}
