import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartComboProps } from "../../types"

import {
  buildCategoryAxis,
  buildGrid,
  buildLegend,
  buildTooltip,
  buildValueAxis,
  DEFAULT_EMPHASIS,
  escapeTooltipText,
} from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import {
  buildBorderRadiusResolver,
  buildSeriesEntries as buildBarSeriesEntries,
} from "../BarChart/useBarChartOptions"
import { buildSeriesEntry as buildLineSeriesEntry } from "../LineChart/useLineChartOptions"

/** Discrete responsive size for the combo chart */
export type ComboChartSize = ChartResponsiveSize

/** Suffix `buildBarSeriesEntries` gives the ghost bar it stacks on a target. */
const TARGET_SERIES_SUFFIX = " (target)"

/**
 * Horizontal space to reserve for value-axis labels. A combo has one on each
 * side, so the plot area loses twice what a single-axis chart does — the smart
 * category-label layout needs to know that or it over-estimates its width.
 *
 * `buildAxes` uses the same constant for its single axis; kept local because
 * this chart doesn't go through that builder (see `useComboChartOptions`).
 */
const VALUE_AXIS_RESERVED = 56

/**
 * Maps a discrete `size` to which chrome is rendered. Matches bar and line so
 * all three behave identically at every breakpoint:
 *
 * - `sm` → bars and lines only, no axes, no legend
 * - `md` → legend + both value axes, no category axis
 * - `lg` → legend + both value axes + category axis
 */
function resolveResponsiveDisplay(size: ComboChartSize) {
  return {
    showLegend: size !== "sm",
    showCategoryAxis: size === "lg",
    showValueAxis: size !== "sm",
  }
}

/**
 * Converts typed combo chart props into a full ECharts option object.
 *
 * This chart assembles its own options instead of delegating to
 * `buildBaseChartOptions`, which pairs one category axis with exactly one value
 * axis. A combo needs `yAxis` to be a two-element array with each series bound
 * by `yAxisIndex`, so it follows the heatmap precedent: assemble locally, reuse
 * every shared primitive (category axis, value axis, legend, grid, tooltip,
 * emphasis) and both series builders.
 *
 * It deliberately opts out of the bar chart's label-fit machinery
 * (`hideOverflowingLabels` and friends). That measures rendered label widths
 * against bar widths on a single axis; with a line crossing the bars there is
 * no reliable free space to measure against, so combo labels are plain
 * `showLabels` and default to off.
 */
export function useComboChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    categories,
    barSeries,
    lineSeries,
    stacked = false,
    lineType = "linear",
    showDots = false,
    showLegend = true,
    showGrid = true,
    showLabels = false,
    valueFormatter,
    secondaryValueFormatter,
    valueAxisSplitNumber = 2,
    categoryFormatter,
    echartsOptions,
  }: F0DataChartComboProps,
  size: ComboChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width: containerWidth } = useContainerSize(containerRef)

  return useMemo(() => {
    const responsive = resolveResponsiveDisplay(size)
    // As in bar and line, `showLegend` can force the legend off but can never
    // force it on at the `sm` breakpoint.
    const effectiveShowLegend = responsive.showLegend && showLegend
    const { showCategoryAxis, showValueAxis } = responsive

    // The secondary axis formats with its own formatter when given one; falling
    // back to `valueFormatter` keeps a single-unit combo from looking unstyled.
    const lineFormatter = secondaryValueFormatter ?? valueFormatter

    const resolveBorderRadius = buildBorderRadiusResolver(
      barSeries,
      true,
      stacked
    )

    const barEntries = barSeries
      .flatMap((series, index) =>
        buildBarSeriesEntries(
          series,
          index,
          true,
          showLabels,
          stacked,
          theme.colors.foregroundSecondary,
          theme.textStyle.fontSize,
          resolveBorderRadius,
          undefined,
          valueFormatter
        )
      )
      .map((entry) => ({ ...entry, yAxisIndex: 0 }))

    // Line series continue the palette where the bars left off, so the first
    // line can never be drawn in the same colour as the first bar.
    const lineEntries = lineSeries
      .map((series, index) =>
        buildLineSeriesEntry(
          series,
          barSeries.length + index,
          lineType,
          false,
          showDots,
          showLabels,
          theme.colors.foregroundSecondary
        )
      )
      .map((entry) => ({ ...entry, yAxisIndex: 1 }))

    // Which ECharts series sit on the secondary axis, by index. Derived from
    // the assembled arrays rather than from series names: `buildBarSeriesEntries`
    // expands one bar series into two when it carries targets, so the bar/line
    // boundary isn't `barSeries.length`, and names can legitimately repeat
    // across the two axes.
    const secondaryAxisIndices = new Set(
      lineEntries.map((_, index) => barEntries.length + index)
    )

    const tooltipFormatter = (params: unknown): string => {
      if (!Array.isArray(params)) return ""

      const filtered = params.filter(
        (entry: { seriesName?: string }) =>
          !String(entry.seriesName ?? "").endsWith(TARGET_SERIES_SUFFIX)
      )
      if (filtered.length === 0) return ""

      const header = `<div style="margin-bottom: 4px; font-weight: 500">${escapeTooltipText(
        filtered[0].axisValueLabel ?? filtered[0].name ?? ""
      )}</div>`

      const rows = filtered
        .map(
          (entry: {
            marker?: string
            seriesName?: string
            seriesIndex?: number
            value?: number
          }) => {
            // Each row formats with the formatter belonging to its own axis —
            // the entire point of a dual-axis chart is that the two carry
            // different units.
            const formatter = secondaryAxisIndices.has(entry.seriesIndex ?? -1)
              ? lineFormatter
              : valueFormatter
            const value = Number(entry.value)
            const formatted = formatter
              ? formatter(value)
              : String(entry.value ?? "")
            return `<div>${String(entry.marker ?? "")} ${escapeTooltipText(
              entry.seriesName ?? ""
            )} <strong>${escapeTooltipText(formatted)}</strong></div>`
          }
        )
        .join("")

      return `${header}${rows}`
    }

    // Both value axes take space, so the category axis has less room than the
    // single-axis charts assume.
    const categoryAxisLength = containerWidth
      ? Math.max(0, containerWidth - VALUE_AXIS_RESERVED * 2)
      : undefined

    const valueAxisMaxLabelWidth = Math.min(80, (containerWidth ?? 600) * 0.2)

    const baseOptions: echarts.EChartsOption = {
      animation: false,
      color: theme.palette,
      textStyle: {
        fontFamily: theme.textStyle.fontFamily,
      },
      xAxis: buildCategoryAxis({
        data: categories,
        theme,
        formatter: categoryFormatter,
        axisLength: categoryAxisLength,
        show: showCategoryAxis,
        smartLayout: true,
      }) as echarts.EChartsOption["xAxis"],
      yAxis: [
        buildValueAxis({
          theme,
          showGrid,
          formatter: valueFormatter,
          show: showValueAxis,
          maxLabelWidth: valueAxisMaxLabelWidth,
          splitNumber: valueAxisSplitNumber,
        }),
        buildValueAxis({
          theme,
          // Only the primary axis draws grid lines. Two independent scales
          // would otherwise lay down two interleaved sets of horizontal rules.
          showGrid: false,
          formatter: lineFormatter,
          show: showValueAxis,
          maxLabelWidth: valueAxisMaxLabelWidth,
          splitNumber: valueAxisSplitNumber,
        }),
      ] as echarts.EChartsOption["yAxis"],
      series: [
        ...barEntries,
        ...lineEntries,
      ] as echarts.EChartsOption["series"],
      labelLayout: { hideOverlap: true },
      legend: buildLegend({
        show: effectiveShowLegend,
        // Ghost target bars are excluded — they aren't user-facing series.
        data: [
          ...barSeries.map((series) => series.name),
          ...lineSeries.map((series) => series.name),
        ],
        theme,
      }),
      grid: buildGrid({ showLegend: effectiveShowLegend }),
      tooltip: buildTooltip({
        theme,
        filterSeries: (name) => name.endsWith(TARGET_SERIES_SUFFIX),
        valueFormatter,
        customFormatter: tooltipFormatter,
      }),
      emphasis: DEFAULT_EMPHASIS,
    }

    if (echartsOptions) {
      return Object.assign({}, baseOptions, echartsOptions)
    }

    return baseOptions
  }, [
    categories,
    barSeries,
    lineSeries,
    stacked,
    lineType,
    showDots,
    showLegend,
    showGrid,
    showLabels,
    valueFormatter,
    secondaryValueFormatter,
    valueAxisSplitNumber,
    categoryFormatter,
    echartsOptions,
    theme,
    containerWidth,
    size,
  ])
}
