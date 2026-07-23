import * as echarts from "echarts"
import { type RefObject, useMemo } from "react"

import type {
  F0DataChartBarDataPoint,
  F0DataChartBarProps,
  F0DataChartBarSeries,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import { buildBaseChartOptions } from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"

/** Default value-label font size (px) — slightly smaller than axis labels. */
const DEFAULT_LABEL_FONT_SIZE = 11

/**
 * Per-side clearance (px) a label needs to count as "fitting". Stacked labels
 * sit inside a segment and want breathing room; labels outside the bar (above /
 * beside) sit in open space and need none.
 */
const STACKED_LABEL_FIT_PADDING = 12
const OUTSIDE_LABEL_FIT_PADDING = 0

/** Lazily-created canvas 2D context reused for measuring label text width. */
let measureContext: CanvasRenderingContext2D | null | undefined

/** Measure the pixel width of `text` at `font` (canvas), with a rough fallback. */
function measureTextWidth(text: string, font: string): number {
  if (measureContext === undefined) {
    measureContext =
      typeof document !== "undefined"
        ? document.createElement("canvas").getContext("2d")
        : null
  }
  if (!measureContext) return text.length * 8
  measureContext.font = font
  return measureContext.measureText(text).width
}

/** Extract the numeric value from a data point */
function getValue(point: F0DataChartBarDataPoint): number {
  return typeof point === "number" ? point : point.value
}

/** Extract the target from a data point (if any) */
function getTarget(point: F0DataChartBarDataPoint): number | undefined {
  return typeof point === "number" ? undefined : point.target
}

/** Extract the per-bar color override from a data point, resolved to hex */
function getPointColor(point: F0DataChartBarDataPoint): string | undefined {
  if (typeof point === "number" || point.color === undefined) {
    return undefined
  }
  return resolveChartColorToken(point.color)
}

/** Resolve the color for a series to hex, falling back to the shared palette */
function resolveColor(series: F0DataChartBarSeries, index: number): string {
  return series.color
    ? resolveChartColorToken(series.color)
    : paletteColor(index)
}

/** Check whether a series contains any target values */
function hasTargets(series: F0DataChartBarSeries): boolean {
  return series.data.some(
    (d) => typeof d !== "number" && d.target !== undefined
  )
}

/**
 * Build ECharts series entries for a single F0DataChartBarSeries.
 *
 * When the series contains target data points, two ECharts series are produced:
 *  1. The main (solid) bar showing `value`
 *  2. A stacked "target" bar showing `target - value` with a linear gradient fill
 */
function buildSeriesEntries(
  series: F0DataChartBarSeries,
  index: number,
  isVertical: boolean,
  showLabels: boolean,
  stacked: boolean,
  isLastSeries: boolean,
  labelColor: string,
  labelFontSize: number,
  labelLayout?: echarts.BarSeriesOption["labelLayout"],
  valueFormatter?: (value: number) => string
): echarts.BarSeriesOption[] {
  const color = resolveColor(series, index)
  const hasTargetData = hasTargets(series)
  // When stacked, all series share "stacked"; when using targets, each series
  // gets its own stack so the ghost bar stacks on its own solid bar only
  const stackId = stacked
    ? hasTargetData
      ? `stacked-${index}`
      : "stacked"
    : hasTargetData
      ? `stack-${index}`
      : undefined

  // Build per-item data: use plain numbers when no per-bar color overrides
  // exist, otherwise produce ECharts data items with per-item itemStyle
  const hasPerBarColors = series.data.some(
    (d) => getPointColor(d) !== undefined
  )

  const mainData = hasPerBarColors
    ? series.data.map((point) => {
        const pointColor = getPointColor(point)
        if (pointColor === undefined) {
          return getValue(point)
        }
        return {
          value: getValue(point),
          itemStyle: { color: pointColor },
        }
      })
    : series.data.map(getValue)

  // Round only the far end (away from the axis):
  // - Vertical: top corners rounded, bottom flat against x-axis
  // - Horizontal: right corners rounded, left flat against y-axis
  const borderRadius = isVertical ? [4, 4, 0, 0] : [0, 4, 4, 0]
  // Stacked series that aren't the last one get no rounding (sandwiched)
  const effectiveBorderRadius = stacked && !isLastSeries ? 0 : borderRadius

  const mainSeries: echarts.BarSeriesOption = {
    name: series.name,
    type: "bar",
    data: mainData,
    stack: stackId,
    itemStyle: {
      color,
      borderRadius: effectiveBorderRadius,
    },
    label: {
      show: showLabels,
      // Stacked bars are segmented, so center the value inside its own segment;
      // single/grouped bars keep the value just outside the bar (above / beside).
      position: stacked ? "inside" : isVertical ? "top" : "right",
      // Inside a coloured segment the value is white at 85% opacity; outside
      // (on the chart background) it uses the secondary foreground colour.
      color: stacked ? "rgba(255, 255, 255, 0.85)" : labelColor,
      fontWeight: "bold",
      fontSize: labelFontSize,
      overflow: "truncate",
      ellipsis: "...",
      // Labels use the same value formatter as the axis/tooltip (e.g. "100K").
      formatter: valueFormatter
        ? (params) => valueFormatter(Number(params.value))
        : undefined,
    },
    labelLayout,
    emphasis: {
      itemStyle: {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: "transparent",
      },
      // When labels are shown, stacked ones render at 85% white; lift them to
      // full white on hover. With labels off, add nothing here — otherwise
      // hovering a stacked bar would reveal numbers that are meant to stay off.
      ...(stacked && showLabels
        ? { label: { show: true, color: "#ffffff" } }
        : {}),
    },
  }

  if (!hasTargetData) {
    return [mainSeries]
  }

  const targetData = series.data.map((point) => {
    const value = getValue(point)
    const target = getTarget(point)
    if (target === undefined || target <= value) {
      return 0
    }
    const pointColor = getPointColor(point)
    if (pointColor !== undefined) {
      return {
        value: target - value,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            ...(isVertical
              ? ([0, 0, 0, 1] as [number, number, number, number])
              : ([1, 0, 0, 0] as [number, number, number, number])),
            [
              { offset: 0, color: `${pointColor}33` },
              { offset: 1, color: `${pointColor}00` },
            ]
          ),
          borderRadius,
        },
      }
    }
    return target - value
  })

  const targetSeries: echarts.BarSeriesOption = {
    name: `${series.name} (target)`,
    type: "bar",
    data: targetData,
    stack: stackId,
    // Hide from legend and tooltip
    legendHoverLink: false,
    tooltip: {
      show: false,
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(
        // Gradient direction: offset 0 is the far end from the solid bar
        // Vertical: top-to-bottom (0,0 → 0,1) — dark at top
        // Horizontal: right-to-left (1,0 → 0,0) — dark at right
        ...(isVertical
          ? ([0, 0, 0, 1] as [number, number, number, number])
          : ([1, 0, 0, 0] as [number, number, number, number])),
        [
          // offset 0 = far end from the solid bar → more opaque (darker)
          { offset: 0, color: `${color}33` },
          // offset 1 = near the solid bar → transparent
          { offset: 1, color: `${color}00` },
        ]
      ),
      // Only round the far end (away from the solid bar)
      borderRadius,
    },
    label: {
      show: false,
    },
    emphasis: {
      disabled: true,
    },
  }

  return [mainSeries, targetSeries]
}

/** Discrete responsive size for the bar chart (mirrors LineChart's `LineChartSize`) */
export type BarChartSize = ChartResponsiveSize

/**
 * Maps a discrete `size` to which chrome (legend, axes) is rendered. The
 * matrix is identical to `LineChart.resolveResponsiveDisplay` so the two
 * chart families behave the same at every breakpoint:
 *
 * - `sm` → just the bars, no axes, no legend
 * - `md` → bars + legend + value axis, no category axis
 * - `lg` → bars + legend + both axes (with smart truncation on the category axis)
 */
function resolveResponsiveDisplay(size: BarChartSize) {
  return {
    showLegend: size !== "sm",
    showCategoryAxis: size === "lg",
    showValueAxis: size !== "sm",
  }
}

/**
 * Converts typed bar chart props into a full ECharts option object.
 */
export function useBarChartOptions(
  containerRef: RefObject<HTMLDivElement | null>,
  {
    categories,
    series,
    orientation = "vertical",
    stacked = false,
    showLegend = true,
    showGrid = true,
    showLabels = false,
    hideOverflowingLabels = true,
    labelFitPadding,
    hideAllLabelsOnOverflow = true,
    valueFormatter,
    categoryFormatter,
    labelFontSize,
    valueAxisSplitNumber = 2,
    echartsOptions,
  }: F0DataChartBarProps,
  size: BarChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const { width: containerWidth, height: containerHeight } =
    useContainerSize(containerRef)

  return useMemo(() => {
    const isVertical = orientation === "vertical"
    const resolvedLabelFontSize = labelFontSize ?? DEFAULT_LABEL_FONT_SIZE

    const responsive = resolveResponsiveDisplay(size)
    // The user-provided `showLegend` prop can still force the legend off,
    // but it can never override the `sm` rule.
    const effectiveShowLegend = responsive.showLegend && showLegend
    const { showCategoryAxis, showValueAxis } = responsive

    // Fit-aware labels: hide a category's value labels when the widest value
    // won't fit the bar. `labelLayout` runs after layout, so `params.rect` (the
    // bar) is in real pixels. Only computed when active, so charts without it
    // never touch the canvas measurer.
    let labelLayout: echarts.BarSeriesOption["labelLayout"] | undefined
    if (hideOverflowingLabels && showLabels) {
      // Bar value labels render bold (see mainSeries.label), so measure at 700.
      const labelFont = `700 ${resolvedLabelFontSize}px ${theme.textStyle.fontFamily}`
      const columnWidestLabel = categories.map((_, categoryIndex) => {
        let widest = 0
        for (const s of series) {
          const point = s.data[categoryIndex]
          if (point === undefined) continue
          const value = getValue(point)
          const text = valueFormatter ? valueFormatter(value) : String(value)
          widest = Math.max(widest, measureTextWidth(text, labelFont))
        }
        return widest
      })
      // Widest label anywhere in the chart — used when a horizontal overflow
      // should hide every label, not just the offending category's.
      const globalWidestLabel = columnWidestLabel.length
        ? Math.max(...columnWidestLabel)
        : 0

      labelLayout = (params) => {
        // Default padding depends on placement: stacked labels sit inside a
        // segment (12px breathing room), outside labels sit in open space (0).
        const fitPadding =
          labelFitPadding ??
          (stacked ? STACKED_LABEL_FIT_PADDING : OUTSIDE_LABEL_FIT_PADDING)
        const pad = 2 * fitPadding
        const box = params.rect // the bar / segment, in px
        const own = params.labelRect // this label's own box, in px
        // A label's height must always fit the bar/segment thickness.
        const heightFits = own.height <= box.height - pad

        let fits: boolean
        if (isVertical) {
          // Every bar in a column shares one width, so compare the column's
          // widest label (or the chart-wide widest when escalating) → the
          // column hides all-or-nothing rather than raggedly.
          const widthReference = hideAllLabelsOnOverflow
            ? globalWidestLabel
            : (columnWidestLabel[params.dataIndex ?? 0] ?? 0)
          const widthFits = widthReference <= box.width - pad
          // Stacked labels sit inside the segment → also bounded by its height.
          fits = stacked ? widthFits && heightFits : widthFits
        } else if (stacked) {
          // Horizontal stacked: each segment has its OWN width, so measure this
          // label against its own segment (per-segment), not the whole row.
          fits = own.width <= box.width - pad && heightFits
        } else {
          // Horizontal grouped/single: label sits beside the bar, bounded only
          // by the row thickness.
          fits = heightFits
        }
        // NOTE: labelLayout ignores `{ hide: true }` on echarts 6 — a label is
        // dropped by returning `{ fontSize: 0 }`.
        return fits ? {} : { fontSize: 0 }
      }
    }

    // Build all ECharts series (including target ghost bars)
    const echartsSeries = series.flatMap((s, i) =>
      buildSeriesEntries(
        s,
        i,
        isVertical,
        showLabels,
        stacked,
        i === series.length - 1,
        theme.colors.foregroundSecondary,
        resolvedLabelFontSize,
        labelLayout,
        valueFormatter
      )
    )

    // Legend should only show the main series (not the target ghost bars)
    const legendData = series.map((s) => s.name)

    // Build a lookup of targets per series/category for the tooltip
    const targetMap = new Map<string, (number | undefined)[]>()
    for (const s of series) {
      const targets = s.data.map((d) => getTarget(d))
      if (targets.some((t) => t !== undefined)) {
        targetMap.set(s.name, targets)
      }
    }

    const hasAnyTargets = targetMap.size > 0

    const tooltipFormatter = hasAnyTargets
      ? (params: unknown) => {
          if (!Array.isArray(params)) return ""
          const filtered = params.filter(
            (p: { seriesName?: string }) =>
              !String(p.seriesName ?? "").endsWith(" (target)")
          )
          if (filtered.length === 0) return ""

          const header = `<div style="margin-bottom: 4px; font-weight: 500">${String(filtered[0].axisValueLabel ?? filtered[0].name ?? "")}</div>`
          const items = filtered
            .map(
              (p: {
                marker?: string
                seriesName?: string
                value?: number
                dataIndex?: number
              }) => {
                const val = Number(p.value)
                const formattedValue = valueFormatter
                  ? valueFormatter(val)
                  : String(val)
                const targets = targetMap.get(String(p.seriesName ?? ""))
                const target = targets?.[p.dataIndex ?? 0]
                const targetHtml =
                  target !== undefined
                    ? ` <span style="opacity: 0.6">/ ${valueFormatter ? valueFormatter(target) : String(target)}</span>`
                    : ""
                return `<div>${String(p.marker ?? "")} ${String(p.seriesName ?? "")} <strong>${formattedValue}</strong>${targetHtml}</div>`
              }
            )
            .join("")

          return `${header}${items}`
        }
      : undefined

    const options = buildBaseChartOptions({
      categories,
      theme,
      series: echartsSeries,
      legendData,
      isVertical,
      showGrid,
      showLegend: effectiveShowLegend,
      // For vertical bars the category axis is the X axis, for horizontal
      // bars it's the Y axis. `buildAxes` already handles that mapping.
      showCategoryAxis,
      showValueAxis,
      valueFormatter,
      categoryFormatter,
      tooltipFilterSeries: (name) => name.endsWith(" (target)"),
      tooltipFormatter,
      valueAxisSplitNumber,
      echartsOptions,
      containerWidth,
      containerHeight,
    })

    if (!isVertical && showLabels) {
      const userGridRight = (echartsOptions?.grid as { right?: number })?.right
      if (userGridRight === undefined) {
        const grid = options.grid as { right?: number }
        if (grid) {
          grid.right = 60
        }
      }
    }

    return options
  }, [
    categories,
    series,
    orientation,
    stacked,
    showLegend,
    showGrid,
    showLabels,
    hideOverflowingLabels,
    labelFitPadding,
    hideAllLabelsOnOverflow,
    valueFormatter,
    categoryFormatter,
    labelFontSize,
    valueAxisSplitNumber,
    echartsOptions,
    theme,
    containerWidth,
    containerHeight,
    size,
  ])
}
