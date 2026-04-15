import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartHeatmapProps } from "../../types"

import { lerpColor, paletteColor } from "../../utils/colors"
import { buildCategoryAxis, buildItemTooltip } from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

/** Discrete responsive size for the heatmap (mirrors the rest of F0DataChart) */
export type HeatmapChartSize = ChartResponsiveSize

/**
 * Maps the discrete `size` to which chrome (axes) is rendered. Mirrors the
 * Figma at file `1smmEIugmR0CNeu7NvK33y` node `10218-20575`:
 *
 * - `sm` → "Not supported" (handled in HeatmapChart.tsx; never reaches here)
 * - `md` → grid + X axis labels only
 * - `lg` → grid + X axis labels + Y axis labels
 *
 * The visualMap legend is never shown — Figma always hides it.
 */
function resolveResponsiveDisplay(size: HeatmapChartSize) {
  return {
    showXAxis: size !== "sm",
    showYAxis: size === "lg",
  }
}

/** Cap on the cell border-radius (in px). Beyond this, cells stop looking like rounded squares and start looking like marshmallows. */
const MAX_CELL_RADIUS = 6

/**
 * Build the 5-stop sequential color scale used by the heatmap, going from
 * a near-background tint to the saturated `baseColor`. Mirrors the
 * GitHub-commits style: light → dark of a single hue.
 */
function buildSequentialScale(baseColor: string, lightColor: string): string[] {
  return [0.08, 0.28, 0.5, 0.75, 1].map((t) =>
    lerpColor(lightColor, baseColor, t)
  )
}

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
  }: F0DataChartHeatmapProps,
  size: HeatmapChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width, height } = useContainerSize(containerRef)

  return useMemo(() => {
    // Auto-compute min/max from data if not provided
    const values = data.map((d) => d[2])
    const dataMin = values.length > 0 ? Math.min(...values) : 0
    const dataMax = values.length > 0 ? Math.max(...values) : 100
    const min = minProp ?? dataMin
    const max = maxProp ?? dataMax

    const baseColor = theme.palette[0] ?? paletteColor(0)
    const lightColor = theme.colors.borderSecondary
    const colorScale = buildSequentialScale(baseColor, lightColor)

    const { colors } = theme
    const { showXAxis, showYAxis } = resolveResponsiveDisplay(size)

    // ECharts heatmap doesn't support cell padding directly. We fake the
    // GitHub-commits gap by drawing a 4px border in the chart background
    // colour around each cell. Combined with a dynamic borderRadius this
    // gives us rounded cells with visible separation at every density.
    //
    // The radius is computed from the actual cell side: at low density we
    // get the pill/rounded look from Figma; at high density rounded squares
    // collapse into perfect dots, exactly as in the design.
    const plotWidth = Math.max(0, width - (showYAxis ? 32 : 8))
    const plotHeight = Math.max(0, height - (showXAxis ? 28 : 8))
    const cellWidth =
      xCategories.length > 0 ? plotWidth / xCategories.length : 0
    const cellHeight =
      yCategories.length > 0 ? plotHeight / yCategories.length : 0
    const cellSide = Math.max(0, Math.min(cellWidth, cellHeight))
    const cellBorderRadius = Math.max(
      2,
      Math.min(MAX_CELL_RADIUS, Math.floor(cellSide / 2))
    )

    const xAxis = buildCategoryAxis({
      data: xCategories,
      theme,
      axisLength: plotWidth || undefined,
      show: showXAxis,
      smartLayout: true,
      edgeAligned: false,
    })

    const yAxis = buildCategoryAxis({
      data: yCategories,
      theme,
      axisLength: plotHeight || undefined,
      show: showYAxis,
      smartLayout: true,
      edgeAligned: false,
    })

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      xAxis: {
        ...xAxis,
        // Heatmap axes never show a baseline — only the labels
        axisLine: { show: false },
      } as echarts.EChartsOption["xAxis"],
      yAxis: {
        ...yAxis,
        axisLine: { show: false },
        // First yCategory at the bottom, last at the top — matches Figma
        // (rows numbered 01..09 from bottom to top).
        inverse: false,
      } as echarts.EChartsOption["yAxis"],
      visualMap: {
        min,
        max,
        calculable: false,
        show: showVisualMap,
        orient: "horizontal" as const,
        bottom: 10,
        left: "center",
        inRange: {
          color: colorScale,
        },
        textStyle: {
          color: colors.foregroundTertiary,
          fontSize: theme.textStyle.fontSize,
        },
      },
      grid: {
        left: 4,
        right: 4,
        top: 8,
        bottom: 4,
        containLabel: true,
      },
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
            borderRadius: cellBorderRadius,
            borderWidth: 4,
            borderColor: colors.background,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: "transparent",
              borderColor: colors.foreground,
              borderWidth: 1,
              opacity: 1,
            },
          },
        } as echarts.HeatmapSeriesOption,
      ],
      tooltip: buildItemTooltip({
        theme,
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
          return `<div style="margin-bottom: 4px; font-weight: 500">${yLabel} · ${xLabel}</div><div>${String(p.marker ?? "")} <strong>${formattedValue}</strong></div>`
        },
      }),
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
    width,
    height,
    size,
  ])
}
