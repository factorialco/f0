import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import type { F0DataChartComboProps } from "../../types"

import { computeAlignedValueAxes } from "../../utils/alignedAxes"
import { buildBaseChartOptions, escapeTooltipText } from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import {
  ARIA_MAX_SERIES,
  ARIA_MAX_VALUES_PER_SERIES,
  buildBorderRadiusResolver,
  buildSeriesEntries as buildBarSeriesEntries,
} from "../BarChart/useBarChartOptions"
import { buildSeriesEntry as buildLineSeriesEntry } from "../LineChart/useLineChartOptions"

/** Discrete responsive size for the combo chart */
export type ComboChartSize = ChartResponsiveSize

/** Suffix `buildBarSeriesEntries` gives the ghost bar it stacks on a target. */
const TARGET_SERIES_SUFFIX = " (target)"

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
 * Screen-reader description over both series lists, bars first — the same
 * bounded shape the bar chart emits (`ARIA_MAX_SERIES` × `ARIA_MAX_VALUES_PER_SERIES`),
 * with each half formatted by its own axis formatter.
 */
function buildAriaDescription(
  categories: string[],
  barSeries: { name: string; data: unknown[] }[],
  lineSeries: { name: string; data: unknown[] }[],
  primaryFormatter: ((value: number) => string) | undefined,
  secondaryFormatter: ((value: number) => string) | undefined
): string {
  const pointValue = (point: unknown): number =>
    typeof point === "number"
      ? point
      : ((point as { value?: number })?.value ?? 0)

  const describe = (
    series: { name: string; data: unknown[] }[],
    formatter: ((value: number) => string) | undefined
  ): string[] =>
    series.slice(0, ARIA_MAX_SERIES).map((currentSeries) => {
      const values = currentSeries.data
        .slice(0, ARIA_MAX_VALUES_PER_SERIES)
        .map((point, categoryIndex) => {
          const value = pointValue(point)
          return `${categories[categoryIndex] ?? categoryIndex + 1}: ${formatter ? formatter(value) : String(value)}`
        })
        .join("; ")
      const remaining = Math.max(
        0,
        currentSeries.data.length - ARIA_MAX_VALUES_PER_SERIES
      )
      return `${currentSeries.name}: ${values}${remaining > 0 ? `; ${remaining} more values` : ""}.`
    })

  const descriptions = [
    ...describe(barSeries, primaryFormatter),
    ...describe(lineSeries, secondaryFormatter),
  ]
  const totalSeries = barSeries.length + lineSeries.length
  if (totalSeries > descriptions.length) {
    descriptions.push(`${totalSeries - descriptions.length} more series.`)
  }
  return descriptions.join(" ")
}

/**
 * Builds the tooltip formatter for a combo chart.
 *
 * Each row formats with the formatter of the axis its series sits on — two
 * units is the reason to have two axes at all. `secondaryAxisIndices` holds the
 * ECharts series indices bound to `yAxisIndex: 1`; it is derived from the
 * assembled series arrays rather than from series names because a bar series
 * carrying targets expands into two ECharts series (so the bar/line boundary
 * isn't `barSeries.length`) and names can legitimately repeat across axes.
 */
function buildComboTooltipFormatter(
  secondaryAxisIndices: Set<number>,
  primaryFormatter: ((value: number) => string) | undefined,
  secondaryFormatter: ((value: number) => string) | undefined
) {
  return (params: unknown): string => {
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
          const formatter = secondaryAxisIndices.has(entry.seriesIndex ?? -1)
            ? secondaryFormatter
            : primaryFormatter
          const formatted = formatter
            ? formatter(Number(entry.value))
            : String(entry.value ?? "")
          return `<div>${String(entry.marker ?? "")} ${escapeTooltipText(
            entry.seriesName ?? ""
          )} <strong>${escapeTooltipText(formatted)}</strong></div>`
        }
      )
      .join("")

    return `${header}${rows}`
  }
}

/**
 * Converts typed combo chart props into a full ECharts option object.
 *
 * Delegates to `buildBaseChartOptions` like bar and line do — a combo is a
 * category axis against value axes, the shape that builder exists for. The only
 * thing it needs beyond them is `secondaryValueAxis`, which makes `yAxis` a
 * two-element array so series can bind to a scale via `yAxisIndex`.
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
  const { width: containerWidth, height: containerHeight } =
    useContainerSize(containerRef)

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

    const secondaryAxisIndices = new Set(
      lineEntries.map((_, index) => barEntries.length + index)
    )

    // Pin both scales to the same tick positions. Left to ECharts, the two axes
    // auto-scale independently and land on different interval counts, so the
    // secondary labels float between the grid lines drawn from the primary.
    const pointValue = (point: unknown): number =>
      typeof point === "number"
        ? point
        : ((point as { value?: number })?.value ?? 0)
    const alignedAxes = computeAlignedValueAxes(
      barSeries.flatMap((series) => series.data.map(pointValue)),
      lineSeries.flatMap((series) => series.data.map(pointValue)),
      valueAxisSplitNumber
    )

    const options = buildBaseChartOptions({
      categories,
      theme,
      series: [
        ...barEntries,
        ...lineEntries,
      ] as echarts.EChartsOption["series"],
      // Ghost target bars are excluded — they aren't user-facing series.
      legendData: [
        ...barSeries.map((series) => series.name),
        ...lineSeries.map((series) => series.name),
      ],
      isVertical: true,
      showGrid,
      showLegend: effectiveShowLegend,
      showCategoryAxis,
      showValueAxis,
      valueFormatter,
      categoryFormatter,
      valueAxisSplitNumber,
      valueAxisBounds: alignedAxes?.primary,
      secondaryValueAxis: {
        formatter: lineFormatter,
        bounds: alignedAxes?.secondary,
      },
      tooltipFilterSeries: (name) => name.endsWith(TARGET_SERIES_SUFFIX),
      tooltipFormatter: buildComboTooltipFormatter(
        secondaryAxisIndices,
        valueFormatter,
        lineFormatter
      ),
      echartsOptions,
      containerWidth,
      containerHeight,
    })

    options.aria = {
      enabled: true,
      label: {
        enabled: true,
        description: buildAriaDescription(
          categories,
          barSeries,
          lineSeries,
          valueFormatter,
          lineFormatter
        ),
      },
    }

    return options
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
    containerHeight,
    size,
  ])
}
