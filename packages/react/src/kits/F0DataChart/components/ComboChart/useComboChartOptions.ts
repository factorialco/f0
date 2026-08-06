import type * as echarts from "echarts"

import { type RefObject, useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type {
  F0DataChartBarDataPoint,
  F0DataChartComboProps,
} from "../../types"
import type { ChartResponsiveSize } from "../../utils/responsive"

import {
  collectRenderedAxisValues,
  computeAlignedValueAxes,
} from "../../utils/alignedAxes"
import { buildBaseChartOptions, escapeTooltipText } from "../../utils/options"
import { qualifySeriesNames } from "../../utils/seriesNames"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import {
  ARIA_MAX_SERIES,
  ARIA_MAX_VALUES_PER_SERIES,
  buildBorderRadiusResolver,
  buildSeriesEntries as buildBarSeriesEntries,
} from "../BarChart/useBarChartOptions"
import {
  buildSeriesEntry as buildLineSeriesEntry,
  estimateEdgeLabelPadding,
} from "../LineChart/useLineChartOptions"

/** Discrete responsive size for the combo chart */
export type ComboChartSize = ChartResponsiveSize

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
  secondaryFormatter: ((value: number) => string) | undefined,
  categoryFormatter: ((value: string) => string) | undefined,
  ariaText: {
    primaryAxis: string
    secondaryAxis: string
    target: (value: string) => string
    moreValues: (count: number) => string
    moreSeries: (count: number) => string
  }
): string {
  const formatValue = (
    value: number,
    formatter: ((value: number) => string) | undefined
  ) => (formatter ? formatter(value) : String(value))

  const primarySeries = barSeries
    .filter((series) => series.data.length > 0)
    .map((series) => ({
      series,
      formatter: primaryFormatter,
      includeTarget: true,
      axisDescription: ariaText.primaryAxis,
    }))
  const secondarySeries = lineSeries
    .filter((series) => series.data.length > 0)
    .map((series) => ({
      series,
      formatter: secondaryFormatter,
      includeTarget: false,
      axisDescription: ariaText.secondaryAxis,
    }))

  let primaryCount = Math.min(
    primarySeries.length,
    secondarySeries.length > 0
      ? Math.ceil(ARIA_MAX_SERIES / 2)
      : ARIA_MAX_SERIES
  )
  let secondaryCount = Math.min(
    secondarySeries.length,
    primarySeries.length > 0 ? Math.floor(ARIA_MAX_SERIES / 2) : ARIA_MAX_SERIES
  )
  let remaining = ARIA_MAX_SERIES - primaryCount - secondaryCount
  const extraPrimary = Math.min(primarySeries.length - primaryCount, remaining)
  primaryCount += extraPrimary
  remaining -= extraPrimary
  secondaryCount += Math.min(secondarySeries.length - secondaryCount, remaining)

  const seriesToDescribe = [
    ...primarySeries.slice(0, primaryCount),
    ...secondarySeries.slice(0, secondaryCount),
  ]
  const totalSeries = primarySeries.length + secondarySeries.length

  const descriptions = seriesToDescribe
    .slice(0, ARIA_MAX_SERIES)
    .map(
      ({
        series: currentSeries,
        formatter,
        includeTarget,
        axisDescription,
      }) => {
        const values = currentSeries.data
          .slice(0, ARIA_MAX_VALUES_PER_SERIES)
          .map((point, categoryIndex) => {
            const value =
              typeof point === "number"
                ? point
                : ((point as { value?: number })?.value ?? 0)
            const target =
              includeTarget && typeof point === "object" && point !== null
                ? (point as { target?: number }).target
                : undefined
            const targetDescription =
              target === undefined
                ? ""
                : `, ${ariaText.target(formatValue(target, formatter))}`
            const category =
              categories[categoryIndex] ?? String(categoryIndex + 1)
            const visibleCategory = categoryFormatter
              ? categoryFormatter(category)
              : category
            return `${visibleCategory}: ${formatValue(value, formatter)}${targetDescription}`
          })
          .join("; ")
        const remaining = Math.max(
          0,
          currentSeries.data.length - ARIA_MAX_VALUES_PER_SERIES
        )
        return `${axisDescription}. ${currentSeries.name}: ${values}${remaining > 0 ? `; ${ariaText.moreValues(remaining)}` : ""}.`
      }
    )

  if (totalSeries > descriptions.length) {
    descriptions.push(
      `${ariaText.moreSeries(totalSeries - descriptions.length)}.`
    )
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
  hiddenSeriesIndices: Set<number>,
  secondaryAxisIndices: Set<number>,
  targetsBySeriesIndex: Map<number, (number | undefined)[]>,
  primaryFormatter: ((value: number) => string) | undefined,
  secondaryFormatter: ((value: number) => string) | undefined
) {
  return (params: unknown): string => {
    if (!Array.isArray(params)) return ""

    const filtered = params.filter(
      (entry: { seriesIndex?: number }) =>
        !hiddenSeriesIndices.has(entry.seriesIndex ?? -1)
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
          dataIndex?: number
          value?: number
        }) => {
          const formatter = secondaryAxisIndices.has(entry.seriesIndex ?? -1)
            ? secondaryFormatter
            : primaryFormatter
          const formatted = formatter
            ? formatter(Number(entry.value))
            : String(entry.value ?? "")
          const target = targetsBySeriesIndex.get(entry.seriesIndex ?? -1)?.[
            entry.dataIndex ?? 0
          ]
          const formattedTarget =
            target === undefined
              ? ""
              : ` <span>/ ${escapeTooltipText(
                  formatter ? formatter(target) : String(target)
                )}</span>`
          return `<div>${String(entry.marker ?? "")} ${escapeTooltipText(
            entry.seriesName ?? ""
          )} <strong>${escapeTooltipText(formatted)}</strong>${formattedTarget}</div>`
        }
      )
      .join("")

    return `${header}${rows}`
  }
}

function getTarget(point: F0DataChartBarDataPoint): number | undefined {
  return typeof point === "number" ? undefined : point.target
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
    primaryAxisLabel,
    secondaryAxisLabel,
    stacked = false,
    lineType = "linear",
    showDots = false,
    showLegend = true,
    showGrid = true,
    showLabels = false,
    valueFormatter,
    tooltipValueFormatter,
    secondaryValueFormatter,
    valueAxisSplitNumber = 2,
    categoryFormatter,
    echartsOptions,
  }: F0DataChartComboProps,
  size: ComboChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { t } = useI18n()
  const effectivePrimaryAxisLabel =
    primaryAxisLabel?.trim() || t("dataChart.comboAxis.primaryMeasure")
  const effectiveSecondaryAxisLabel =
    secondaryAxisLabel?.trim() || t("dataChart.comboAxis.secondaryMeasure")
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

    const visibleBarSeries = barSeries.filter(
      (series) => series.data.length > 0
    )
    const visibleLineSeries = lineSeries.filter(
      (series) => series.data.length > 0
    )
    const resolveBorderRadius = buildBorderRadiusResolver(
      visibleBarSeries,
      true,
      stacked
    )

    const qualifiedNames = qualifySeriesNames(
      [...visibleBarSeries, ...visibleLineSeries],
      [
        ...visibleBarSeries.map(() => effectivePrimaryAxisLabel),
        ...visibleLineSeries.map(() => effectiveSecondaryAxisLabel),
      ]
    )
    const qualifiedBarNames = qualifiedNames.slice(0, visibleBarSeries.length)
    const qualifiedLineNames = qualifiedNames.slice(visibleBarSeries.length)
    const hiddenSeriesIndices = new Set<number>()
    const targetsBySeriesIndex = new Map<number, (number | undefined)[]>()
    const barEntries: echarts.BarSeriesOption[] = []

    visibleBarSeries.forEach((series, index) => {
      const seriesIndex = barEntries.length
      const displayName = qualifiedBarNames[index]
      const entries = buildBarSeriesEntries(
        series,
        index,
        true,
        showLabels,
        stacked,
        theme.colors.foregroundSecondary,
        theme.colors.containerBackground ?? theme.colors.background,
        theme.textStyle.fontSize,
        resolveBorderRadius,
        undefined,
        valueFormatter
      ).map((entry) => ({
        ...entry,
        // Target ghosts share the visible series identity so ECharts legend
        // selection hides/restores both halves together. They remain absent
        // from tooltip rows through `hiddenSeriesIndices`, not through naming.
        name: displayName,
        yAxisIndex: 0,
      }))

      barEntries.push(...entries)

      const targets = series.data.map(getTarget)
      if (targets.some((target) => target !== undefined)) {
        targetsBySeriesIndex.set(seriesIndex, targets)
      }
      if (entries.length > 1) {
        hiddenSeriesIndices.add(seriesIndex + 1)
      }
    })

    const hasBarData = visibleBarSeries.length > 0
    const hasLineData = visibleLineSeries.length > 0
    const hasBothAxes = hasBarData && hasLineData

    // Line series continue the palette where the bars left off, so the first
    // line can never be drawn in the same colour as the first bar.
    const lineEntries = visibleLineSeries
      .map((series, index) =>
        buildLineSeriesEntry(
          // The public combo type excludes `showArea`; forcing it off here also
          // protects runtime JavaScript callers and structurally cast values.
          {
            ...series,
            name: qualifiedLineNames[index],
            showArea: false,
          },
          visibleBarSeries.length + index,
          lineType,
          false,
          showDots,
          showLabels,
          theme.colors.foregroundSecondary,
          lineFormatter
        )
      )
      .map((entry) => ({ ...entry, yAxisIndex: hasBothAxes ? 1 : 0 }))

    const secondaryAxisIndices = new Set<number>()
    if (hasBothAxes) {
      lineEntries.forEach((_, index) => {
        secondaryAxisIndices.add(barEntries.length + index)
      })
    }

    // Pin both scales to the same tick positions. Left to ECharts, the two axes
    // auto-scale independently and land on different interval counts, so the
    // secondary labels float between the grid lines drawn from the primary.
    const alignedAxes = hasBothAxes
      ? computeAlignedValueAxes(
          collectRenderedAxisValues(barEntries),
          collectRenderedAxisValues(lineEntries),
          valueAxisSplitNumber
        )
      : undefined

    const primaryFormatter = hasBarData ? valueFormatter : lineFormatter
    const firstAxisTooltipFormatter = hasBarData
      ? (tooltipValueFormatter ?? valueFormatter)
      : lineFormatter
    const seriesLabelEdgePadding = showLabels
      ? estimateEdgeLabelPadding(
          visibleLineSeries,
          lineFormatter,
          theme.textStyle.fontSize,
          containerWidth
        )
      : undefined

    const options = buildBaseChartOptions({
      categories,
      theme,
      series: [
        ...barEntries,
        ...lineEntries,
      ] as echarts.EChartsOption["series"],
      // Ghost target bars are excluded — they aren't user-facing series.
      legendData: [...qualifiedBarNames, ...qualifiedLineNames],
      isVertical: true,
      showGrid,
      showLegend: effectiveShowLegend,
      showCategoryAxis,
      showValueAxis,
      valueFormatter: primaryFormatter,
      categoryFormatter,
      boundaryGap: hasBarData,
      valueAxisSplitNumber: hasBothAxes ? undefined : valueAxisSplitNumber,
      valueAxisBounds: alignedAxes?.primary,
      primaryValueAxisName: hasBarData
        ? effectivePrimaryAxisLabel
        : effectiveSecondaryAxisLabel,
      secondaryValueAxis: hasBothAxes
        ? {
            name: effectiveSecondaryAxisLabel,
            formatter: lineFormatter,
            bounds: alignedAxes?.secondary,
          }
        : undefined,
      tooltipFormatter: buildComboTooltipFormatter(
        hiddenSeriesIndices,
        secondaryAxisIndices,
        targetsBySeriesIndex,
        firstAxisTooltipFormatter,
        lineFormatter
      ),
      echartsOptions,
      containerWidth,
      containerHeight,
      seriesLabelEdgePadding,
    })

    options.aria = {
      enabled: true,
      label: {
        enabled: true,
        description: buildAriaDescription(
          categories,
          visibleBarSeries.map((series, index) => ({
            ...series,
            name: qualifiedBarNames[index],
          })),
          visibleLineSeries.map((series, index) => ({
            ...series,
            name: qualifiedLineNames[index],
          })),
          valueFormatter,
          lineFormatter,
          categoryFormatter,
          {
            primaryAxis: t("dataChart.comboAria.primaryAxis", {
              axis: effectivePrimaryAxisLabel,
            }),
            secondaryAxis: t(
              hasBothAxes
                ? "dataChart.comboAria.secondaryAxis"
                : "dataChart.comboAria.singleLineAxis",
              { axis: effectiveSecondaryAxisLabel }
            ),
            target: (value) => t("dataChart.comboAria.target", { value }),
            moreValues: (count) =>
              count === 1
                ? t("dataChart.comboAria.oneMoreValue")
                : t("dataChart.comboAria.moreValues", { count }),
            moreSeries: (count) =>
              count === 1
                ? t("dataChart.comboAria.oneMoreSeries")
                : t("dataChart.comboAria.moreSeries", { count }),
          }
        ),
      },
    }

    return options
  }, [
    categories,
    barSeries,
    lineSeries,
    effectivePrimaryAxisLabel,
    effectiveSecondaryAxisLabel,
    stacked,
    lineType,
    showDots,
    showLegend,
    showGrid,
    showLabels,
    valueFormatter,
    tooltipValueFormatter,
    secondaryValueFormatter,
    valueAxisSplitNumber,
    categoryFormatter,
    echartsOptions,
    theme,
    containerWidth,
    containerHeight,
    size,
    t,
  ])
}
