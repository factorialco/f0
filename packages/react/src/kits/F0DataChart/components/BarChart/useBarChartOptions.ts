import * as echarts from "echarts"
import { type RefObject, useMemo } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"

import type {
  F0DataChartBarDataPoint,
  F0DataChartBarProps,
  F0DataChartBarSeries,
} from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"
import {
  buildBaseChartOptions,
  buildItemTooltip,
  renderValueTooltip,
  tooltipValueFormat,
} from "../../utils/options"
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
const HORIZONTAL_LABEL_GRID_RIGHT = 60
const HORIZONTAL_LABEL_GAP = 8
const ARIA_MAX_SERIES = 10
const ARIA_MAX_VALUES_PER_SERIES = 20

/**
 * Foreground for a value label sitting inside a colored fill.
 *
 * Always white: a stacked bar reads as one object, and per-segment black/white
 * switching made a single bar look like two unrelated label styles. Every
 * selectable series color is a shade-50 chromatic token, so white stays
 * legible — though on the two lightest (flubber, yellow) it is a deliberate
 * design call rather than a WCAG AA pass.
 */
const INSIDE_LABEL_COLOR = "#ffffff"

/**
 * Stroke width (px) of the hairline separating stacked segments.
 *
 * Adjacent segments both stroke the shared edge and canvas strokes are centered
 * on the path, so the two cover the same band rather than adding to it: the
 * visible separation equals this width, not twice it. 0.5 is deliberate — it
 * renders as a hairline at 1x and a crisp single device pixel at 2x.
 */
const STACK_GAP_BORDER_WIDTH = 0.5

/** Opacity of the series that are *not* hovered, while one series has focus. */
const BLUR_OPACITY = 0.4

/**
 * Cross-fade duration (ms) in and out of the hover blur state. Drops to 0 when
 * the user prefers reduced motion.
 */
const STATE_ANIMATION_DURATION = 500

function resolveGridRightSpace(
  right: number | string | undefined,
  containerWidth: number
): number {
  if (typeof right === "number") return right
  if (typeof right === "string" && right.endsWith("%")) {
    const percentage = Number.parseFloat(right)
    if (Number.isFinite(percentage)) {
      return (containerWidth * percentage) / 100
    }
  }
  return HORIZONTAL_LABEL_GRID_RIGHT
}

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

const BAR_CORNER_RADIUS = 4

/**
 * Corner radii (`[top-left, top-right, bottom-right, bottom-left]`) rounding
 * only the end of the bar that points away from the zero line. Negative bars
 * grow in the opposite direction, so they need the opposite corners.
 */
function barCornerRadius(isVertical: boolean, isNegative: boolean): number[] {
  if (isVertical) {
    return isNegative
      ? [0, 0, BAR_CORNER_RADIUS, BAR_CORNER_RADIUS]
      : [BAR_CORNER_RADIUS, BAR_CORNER_RADIUS, 0, 0]
  }
  return isNegative
    ? [BAR_CORNER_RADIUS, 0, 0, BAR_CORNER_RADIUS]
    : [0, BAR_CORNER_RADIUS, BAR_CORNER_RADIUS, 0]
}

/** Resolves the corner radii of a single bar segment */
type BorderRadiusResolver = (
  seriesIndex: number,
  dataIndex: number,
  value: number
) => number[] | number

/**
 * Builds a per-bar corner radius resolver.
 *
 * Non-stacked charts only need this when some value is negative: the
 * series-level radius can't express two directions at once. All-positive
 * (or all-negative) non-stacked charts keep the plain series-level radius.
 *
 * Stacked charts always need it, even when every value is positive: ECharts
 * stacks positive and negative values away from the zero line in opposite
 * directions, so a category has up to two outer segments — the last series
 * contributing a positive value and the last one contributing a negative
 * value — and only those two get rounded. Which series that is can differ
 * per category (e.g. the nominally "last" series is 0 for one category, so
 * an earlier series is the one actually touching the outer edge there), so
 * this can't be reduced to a single fixed series index.
 */
function buildBorderRadiusResolver(
  series: F0DataChartBarSeries[],
  isVertical: boolean,
  stacked: boolean
): BorderRadiusResolver | undefined {
  if (!stacked) {
    const hasNegativeValues = series.some((s) =>
      s.data.some((point) => getValue(point) < 0)
    )
    if (!hasNegativeValues) {
      return undefined
    }
    return (_seriesIndex, _dataIndex, value) =>
      barCornerRadius(isVertical, value < 0)
  }

  const outerPositive = new Map<number, number>()
  const outerNegative = new Map<number, number>()
  series.forEach((s, seriesIndex) => {
    s.data.forEach((point, dataIndex) => {
      const value = getValue(point)
      if (value > 0) {
        outerPositive.set(dataIndex, seriesIndex)
      } else if (value < 0) {
        outerNegative.set(dataIndex, seriesIndex)
      }
    })
  })

  return (seriesIndex, dataIndex, value) => {
    if (value === 0) return 0
    const isNegative = value < 0
    const outer = isNegative ? outerNegative : outerPositive
    return outer.get(dataIndex) === seriesIndex
      ? barCornerRadius(isVertical, isNegative)
      : 0
  }
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
  labelColor: string,
  stackGapColor: string,
  labelFontSize: number,
  resolveBorderRadius: BorderRadiusResolver | undefined,
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

  // Build per-item data: use plain numbers unless the point needs its own
  // itemStyle (per-bar color override or a direction-specific corner radius)
  const mainData = series.data.map((point, dataIndex) => {
    const value = getValue(point)
    const pointColor = getPointColor(point)
    const pointBorderRadius = resolveBorderRadius?.(index, dataIndex, value)
    if (pointColor === undefined && pointBorderRadius === undefined) {
      return value
    }
    return {
      value,
      itemStyle: {
        ...(pointColor !== undefined && { color: pointColor }),
        ...(pointBorderRadius !== undefined && {
          borderRadius: pointBorderRadius,
        }),
      },
      // Inside labels are white regardless of the fill, so a per-bar colour
      // override needs no label colour of its own — the series-level one
      // already applies.
    }
  })

  // Round only the far end (away from the zero line):
  // - Vertical: top corners rounded, bottom flat against x-axis
  // - Horizontal: right corners rounded, left flat against y-axis
  // This series-level default only applies when `resolveBorderRadius` is
  // undefined (non-stacked, all-positive charts) — everything else
  // (negatives, or any stacked chart) is overridden per data point below,
  // since the direction and the outer-most segment can vary per category.
  const borderRadius = barCornerRadius(isVertical, false)

  const mainSeries: echarts.BarSeriesOption = {
    name: series.name,
    type: "bar",
    data: mainData,
    stack: stackId,
    itemStyle: {
      color,
      borderRadius,
      // ECharts has no native gap between stacked segments — a border in the
      // container's background color is the standard way to separate them.
      ...(stacked && {
        borderColor: stackGapColor,
        borderWidth: STACK_GAP_BORDER_WIDTH,
      }),
    },
    label: {
      show: showLabels,
      // Stacked bars are segmented, so center the value inside its own segment;
      // single/grouped bars keep the value just outside the bar (above / beside).
      position: stacked ? "inside" : isVertical ? "top" : "right",
      // Inside a coloured segment the label is always white (see
      // INSIDE_LABEL_COLOR). Outside labels use the semantic secondary
      // foreground colour from the active theme.
      color: stacked ? INSIDE_LABEL_COLOR : labelColor,
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
      // Hovering a stacked segment highlights that series across all bars by
      // sending every other series into the blur state (see `blur` below).
      ...(stacked && { focus: "series" as const }),
      // Keep the same colour on hover. With labels off, add nothing here —
      // otherwise hovering a stacked bar would reveal numbers that are meant
      // to stay off.
      ...(stacked && showLabels
        ? { label: { show: true, color: INSIDE_LABEL_COLOR } }
        : {}),
    },
    ...(stacked && {
      blur: {
        itemStyle: { opacity: BLUR_OPACITY },
        label: { opacity: BLUR_OPACITY },
      },
    }),
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
    // The target ghost is a separate series, so `focus: "series"` blurs it even
    // when its own bar is the one hovered. Match the main series' blur opacity
    // so it fades with its stack instead of dropping to the ECharts default.
    ...(stacked && {
      blur: {
        itemStyle: { opacity: BLUR_OPACITY },
      },
    }),
  }

  return [mainSeries, targetSeries]
}

/** Discrete responsive size for the bar chart (mirrors LineChart's `LineChartSize`) */
export type BarChartSize = ChartResponsiveSize

/**
 * Maps a discrete `size` to which chrome (legend, axes) is rendered:
 *
 * - `sm` → just the bars, no axes, no legend
 * - `md` / `lg` → bars + legend + both axes (with smart truncation on the
 *   category axis)
 *
 * Bars deviate from `LineChart.resolveResponsiveDisplay`, which keeps the
 * category axis for `lg` alone. A bar chart's categories are its subjects — a
 * plot without them is a set of lengths with nothing to compare, which the
 * value axis can't rescue. So bars show them wherever there is room for any
 * chrome at all, and `sm` is the only size that drops them.
 *
 * Crowding is handled rather than avoided: `computeCategoryAxisLayout` runs
 * whenever the axis is shown, fitting every label with ellipsis truncation and
 * only skipping labels when even a 3-char stub won't fit. The cost is plot
 * area — horizontal labels take `min(80, width * 0.2)` of the width, vertical
 * ones a row of height.
 */
function resolveResponsiveDisplay(size: BarChartSize) {
  return {
    showLegend: size !== "sm",
    showCategoryAxis: size !== "sm",
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
    tooltipValueFormatter,
    categoryFormatter,
    labelFontSize,
    valueAxisSplitNumber = 2,
    echartsOptions,
  }: F0DataChartBarProps,
  size: BarChartSize
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const i18n = useI18n()
  const { width: containerWidth, height: containerHeight } =
    useContainerSize(containerRef)
  const prefersReducedMotion = useReducedMotion()

  return useMemo(() => {
    const isVertical = orientation === "vertical"
    const resolvedLabelFontSize = labelFontSize ?? DEFAULT_LABEL_FONT_SIZE
    const userGridRight = (
      echartsOptions?.grid as { right?: number | string } | undefined
    )?.right
    const horizontalLabelSpace = resolveGridRightSpace(
      userGridRight,
      containerWidth
    )

    const responsive = resolveResponsiveDisplay(size)
    // The user-provided `showLegend` prop can still force the legend off,
    // but it can never override the `sm` rule.
    const effectiveShowLegend = responsive.showLegend && showLegend
    const { showCategoryAxis, showValueAxis } = responsive

    const resolveBorderRadius = buildBorderRadiusResolver(
      series,
      isVertical,
      stacked
    )

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
          // Horizontal grouped/single: the label sits beside the bar. The
          // default grid reserves 60px on the right; hide labels that exceed
          // that shared allowance (global mode) or whose actual label box
          // crosses the container edge (per-label mode).
          const widthFits = hideAllLabelsOnOverflow
            ? globalWidestLabel + HORIZONTAL_LABEL_GAP <= horizontalLabelSpace
            : own.x + own.width <= containerWidth
          fits = widthFits && heightFits
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
        theme.colors.foregroundSecondary,
        theme.colors.containerBackground ?? theme.colors.background,
        resolvedLabelFontSize,
        resolveBorderRadius,
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

    // Aria descriptions use their own formatter when provided (precise
    // numbers), otherwise fall back to the shared value formatter.
    const tooltipValue = tooltipValueFormatter ?? valueFormatter

    const formatTooltipValue = tooltipValueFormat(tooltipValueFormatter)

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
      tooltipValueFormatter,
      valueAxisSplitNumber,
      echartsOptions,
      containerWidth,
      containerHeight,
    })

    // Keep the DOM attribute bounded for large datasets, matching ECharts'
    // own default of summarizing rather than serializing every data point.
    const ariaDescriptions = series
      .slice(0, ARIA_MAX_SERIES)
      .map((currentSeries) => {
        const values = currentSeries.data
          .slice(0, ARIA_MAX_VALUES_PER_SERIES)
          .map((point, categoryIndex) => {
            const value = getValue(point)
            const formattedValue = tooltipValue
              ? tooltipValue(value)
              : String(value)
            const target = getTarget(point)
            const formattedTarget =
              target === undefined
                ? ""
                : `, target ${tooltipValue ? tooltipValue(target) : String(target)}`
            return `${categories[categoryIndex] ?? categoryIndex + 1}: ${formattedValue}${formattedTarget}`
          })
          .join("; ")
        const remainingValues = Math.max(
          0,
          currentSeries.data.length - ARIA_MAX_VALUES_PER_SERIES
        )
        return `${currentSeries.name}: ${values}${remainingValues > 0 ? `; ${remainingValues} more values` : ""}.`
      })
    if (series.length > ARIA_MAX_SERIES) {
      ariaDescriptions.push(`${series.length - ARIA_MAX_SERIES} more series.`)
    }
    options.aria = {
      enabled: true,
      label: {
        enabled: true,
        description: ariaDescriptions.join(" "),
      },
    }

    // Fade in/out of the hover blur state (see `blur` on the series). Two
    // requirements: `stateAnimation` is only honored at the option root (the
    // series-level one in the types is ignored), and the base options'
    // `animation: false` — there to skip entrance animations — disables state
    // transitions too. Re-enable the engine with zero-duration entrance and
    // update animations so only the blur fade animates.
    //
    // This runs after `buildBaseChartOptions` merged the consumer's
    // `echartsOptions`, so each key defers to an explicitly-provided value —
    // same convention as the `userGridRight` guard below.
    //
    // `prefers-reduced-motion` zeroes the duration rather than dropping the
    // state: the hover highlight still isolates the series, it just arrives
    // instantly. The preference belongs to the user, not the consumer, so it
    // also flattens an explicitly-provided `stateAnimation` duration.
    if (stacked) {
      options.animation = echartsOptions?.animation ?? true
      options.animationDuration = echartsOptions?.animationDuration ?? 0
      options.animationDurationUpdate =
        echartsOptions?.animationDurationUpdate ?? 0
      options.stateAnimation = prefersReducedMotion
        ? { ...echartsOptions?.stateAnimation, duration: 0 }
        : (echartsOptions?.stateAnimation ?? {
            duration: STATE_ANIMATION_DURATION,
            easing: "cubicOut",
          })
    }

    // Bar charts use an item-triggered tooltip about the hovered bar or
    // segment (pairing with the stacked series highlight) instead of the axis
    // tooltip listing every series: value large, then — with several
    // same-signed series — the hovered value's share of the category total,
    // that total, and the target when there is one.
    //
    // `buildBaseChartOptions` has already merged `echartsOptions`, so a caller
    // that passed its own tooltip keeps it: only build ours when it didn't.
    if (echartsOptions?.tooltip === undefined) {
      options.tooltip = buildItemTooltip({
        theme,
        formatter: (params: unknown) => {
          const p = params as {
            seriesName?: string
            name?: string
            value?: number
            dataIndex?: number
            marker?: string
          }
          const seriesName = String(p.seriesName ?? "")
          if (seriesName.endsWith(" (target)")) return ""

          const value = Number(p.value)
          const dataIndex = p.dataIndex ?? 0
          const target = targetMap.get(seriesName)?.[dataIndex]
          // Share-of-total context only means something with several series
          // pushing the same way: a single-series bar is always 100% of its own
          // category, and a category mixing gains with losses has no "total"
          // the parts add up to — 24 hires against a net of 19 would read as
          // 126.3%, and near-cancellation makes that ratio arbitrarily large.
          // Signed categories therefore show the value alone.
          const categoryValues = series.map((s) => {
            // A series can be shorter than `categories`.
            const point = s.data[dataIndex]
            return point === undefined ? 0 : getValue(point) || 0
          })
          const hasMixedSigns =
            categoryValues.some((v) => v > 0) &&
            categoryValues.some((v) => v < 0)
          const total = categoryValues.reduce((sum, v) => sum + v, 0)
          const showTotal = series.length > 1 && !hasMixedSigns

          // No "from previous" row here: bar categories are not necessarily a
          // sequence (locations, departments), so comparing a bar with the one
          // to its left is only meaningful on a trend — i.e. a line chart.
          return renderValueTooltip(
            {
              marker: p.marker,
              title: seriesName,
              subtitle: String(p.name ?? ""),
              value: formatTooltipValue(value),
              rows: [
                showTotal &&
                  total !== 0 && {
                    // Same sign on both sides, so the ratio is positive even
                    // when the whole category is negative.
                    value: `${((value / total) * 100).toFixed(1)}%`,
                    label: i18n.dataChart.tooltip.ofTotal,
                  },
                showTotal && {
                  value: formatTooltipValue(total),
                  label: i18n.dataChart.tooltip.total,
                },
                target !== undefined && {
                  value: formatTooltipValue(target),
                  label: i18n.dataChart.tooltip.target,
                },
              ],
            },
            theme
          )
        },
      })
    }

    // Non-stacked horizontal bars render labels BESIDE the bar end, so the
    // grid reserves room for them on the right. Stacked labels sit inside
    // their segments — no reservation needed, the plot keeps its full width.
    if (!isVertical && !stacked && showLabels) {
      if (userGridRight === undefined) {
        const grid = options.grid as { right?: number }
        if (grid) {
          grid.right = HORIZONTAL_LABEL_GRID_RIGHT
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
    tooltipValueFormatter,
    categoryFormatter,
    labelFontSize,
    valueAxisSplitNumber,
    echartsOptions,
    theme,
    i18n,
    containerWidth,
    containerHeight,
    size,
    prefersReducedMotion,
  ])
}
