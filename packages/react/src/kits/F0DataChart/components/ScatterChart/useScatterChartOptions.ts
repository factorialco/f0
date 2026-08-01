import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type {
  F0DataChartScatterDataPoint,
  F0DataChartScatterProps,
  F0DataChartScatterSeries,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import {
  DEFAULT_EMPHASIS,
  buildGrid,
  buildItemTooltip,
  buildLegend,
  buildValueAxis,
  renderValueTooltip,
} from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import type { ChartTheme } from "../../utils/theme"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

/** Discrete responsive size for the scatter chart */
export type ScatterChartSize = ChartResponsiveSize

/**
 * Maps a discrete `size` to which chrome (legend, axes) is rendered.
 *
 * - `sm` → points only
 * - `md` / `lg` → legend + both axes
 *
 * Bar and line drop their category axis before their value axis, because
 * category labels are wide text. Both scatter axes carry numeric ticks that
 * are narrow and equally load-bearing — a point's x is as meaningless without
 * its axis as its y is — so they appear and disappear together.
 */
function resolveResponsiveDisplay(size: ScatterChartSize) {
  return {
    showLegend: size !== "sm",
    showAxes: size !== "sm",
  }
}

/**
 * Padding added beyond the data extremes on both value axes.
 *
 * With `scale` on, the most extreme point sits exactly on the axis bound —
 * which clips the point itself (`series.clip` defaults true) and pushes the
 * final tick label past the edge of the canvas. Bar and line never hit this
 * because their value axis is anchored at zero and rounded to nice bounds,
 * leaving slack at the top.
 */
const AXIS_BOUNDARY_GAP: [string, string] = ["3%", "3%"]

/**
 * Suggested segments per axis. Two keeps the grid quiet behind a dense point
 * cloud — the same default bar charts use for their value axis. ECharts treats
 * this as a hint and still rounds to nice intervals, so the rendered count can
 * differ by one.
 */
const AXIS_SPLIT_NUMBER = 2

/**
 * Convert an F0 scatter point into an ECharts data item.
 *
 * A `label` is emitted as ECharts' `name`, which surfaces as `params.name` in
 * the tooltip formatter — so point identity needs no side-channel lookup back
 * into the source data.
 */
function toEChartsPoint(point: F0DataChartScatterDataPoint) {
  if (Array.isArray(point)) {
    return { value: [point[0], point[1]] }
  }

  return {
    ...(point.label !== undefined ? { name: point.label } : {}),
    value: [point.x, point.y],
    ...(point.color
      ? { itemStyle: { color: resolveChartColorToken(point.color) } }
      : {}),
  }
}

/** Build a single ECharts scatter series entry from an F0DataChartScatterSeries. */
function buildSeriesEntry(
  series: F0DataChartScatterSeries,
  index: number,
  pointSize: number
): echarts.ScatterSeriesOption {
  const color = series.color
    ? resolveChartColorToken(series.color)
    : paletteColor(index)

  return {
    name: series.name,
    type: "scatter",
    data: series.data.map(toEChartsPoint),
    symbol: "circle",
    symbolSize: pointSize,
    // Scatter points overlap in a way bars and line dots never do. A sub-1
    // fill keeps dense regions readable as density instead of a solid blob.
    itemStyle: { color, opacity: 0.7 },
    emphasis: {
      focus: "series",
      itemStyle: {
        opacity: 1,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: "transparent",
      },
    },
  }
}

type ScatterTooltipOptions = {
  xAxisName?: string
  yAxisName?: string
  xTooltipValueFormatter?: (value: number) => string
  tooltipValueFormatter?: (value: number) => string
}

/**
 * A scatter point carries two coordinates and no third measure, so — like a
 * radar point — there is no single headline value. Both coordinates are rows,
 * but rendered at headline size, since neither is subordinate to the other.
 * The point's own label is the title, with the series name beneath it whenever
 * the two differ.
 *
 * Values are shown in full ("82,000", not the axis's compact "82k"), matching
 * every other chart's tooltip.
 */
function buildTooltipFormatter(
  {
    xAxisName,
    yAxisName,
    xTooltipValueFormatter,
    tooltipValueFormatter,
  }: ScatterTooltipOptions,
  theme: ChartTheme
) {
  return (params: unknown): string => {
    const point = params as {
      marker?: string
      name?: string
      seriesName?: string
      value?: [number, number]
    }
    const [x, y] = point.value ?? [0, 0]
    const seriesName = point.seriesName ?? ""
    const title = point.name || seriesName

    return renderValueTooltip(
      {
        marker: point.marker,
        title,
        ...(seriesName && seriesName !== title ? { subtitle: seriesName } : {}),
        rows: [
          {
            value: xTooltipValueFormatter
              ? xTooltipValueFormatter(x)
              : x.toLocaleString(),
            label: xAxisName ?? "",
            size: "large",
          },
          {
            value: tooltipValueFormatter
              ? tooltipValueFormatter(y)
              : y.toLocaleString(),
            label: yAxisName ?? "",
            size: "large",
          },
        ],
      },
      theme
    )
  }
}

/**
 * Converts typed scatter chart props into a full ECharts option object.
 *
 * Unlike bar and line this does not go through `buildBaseChartOptions`, which
 * always pairs a category axis with a value axis. A scatter plots two measures
 * against each other, so it builds two value axes and assembles the surrounding
 * chrome from the same shared builders.
 */
export function useScatterChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    series,
    pointSize = 12,
    scaleAxes = true,
    showLegend = true,
    showGrid = true,
    valueFormatter,
    xValueFormatter,
    tooltipValueFormatter,
    xTooltipValueFormatter,
    xAxisName,
    yAxisName,
    echartsOptions,
  }: F0DataChartScatterProps,
  size: ScatterChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width } = useContainerSize(containerRef)

  return useMemo(() => {
    const { showAxes, showLegend: responsiveLegend } =
      resolveResponsiveDisplay(size)

    // A single-series scatter has nothing to disambiguate, so a legend would
    // just restate the title. Hiding it also returns the legend's grid padding
    // to the plot (see buildGrid).
    const legendVisible = showLegend && responsiveLegend && series.length > 1

    // Mirrors buildAxes: cap the Y labels so long numbers truncate instead of
    // eating the plot area.
    const yAxisMaxLabelWidth = Math.min(80, (width || 600) * 0.2)

    const xAxis = buildValueAxis({
      theme,
      showGrid,
      formatter: xValueFormatter,
      show: showAxes,
      scale: scaleAxes,
      splitNumber: AXIS_SPLIT_NUMBER,
      // The X bound sits at the plot edge, so its end labels would otherwise
      // render half outside the canvas.
      alignEdgeLabels: true,
      ...(scaleAxes ? { boundaryGap: AXIS_BOUNDARY_GAP } : {}),
    })

    const yAxis = buildValueAxis({
      theme,
      showGrid,
      formatter: valueFormatter,
      show: showAxes,
      scale: scaleAxes,
      splitNumber: AXIS_SPLIT_NUMBER,
      maxLabelWidth: yAxisMaxLabelWidth,
      ...(scaleAxes ? { boundaryGap: AXIS_BOUNDARY_GAP } : {}),
    })

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      color: theme.palette,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      xAxis: xAxis as echarts.EChartsOption["xAxis"],
      yAxis: yAxis as echarts.EChartsOption["yAxis"],
      series: series.map((entry, index) =>
        buildSeriesEntry(entry, index, pointSize)
      ),
      legend: buildLegend({
        show: legendVisible,
        data: series.map((entry) => entry.name),
        theme,
      }),
      grid: buildGrid({ showLegend: legendVisible }),
      tooltip: buildItemTooltip({
        theme,
        formatter: buildTooltipFormatter(
          {
            xAxisName,
            yAxisName,
            xTooltipValueFormatter,
            tooltipValueFormatter,
          },
          theme
        ),
      }),
      emphasis: DEFAULT_EMPHASIS,
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    series,
    pointSize,
    scaleAxes,
    showLegend,
    showGrid,
    valueFormatter,
    xValueFormatter,
    tooltipValueFormatter,
    xTooltipValueFormatter,
    xAxisName,
    yAxisName,
    echartsOptions,
    theme,
    width,
    size,
  ])
}
