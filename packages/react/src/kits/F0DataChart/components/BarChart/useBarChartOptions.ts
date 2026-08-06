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
  labelWidthCap,
  renderValueTooltip,
  tooltipValueFormat,
} from "../../utils/options"
import type { ChartResponsiveSize } from "../../utils/responsive"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useFontsReady } from "../../utils/useFontsReady"

/** Default value-label font size (px) — slightly smaller than axis labels. */
const DEFAULT_LABEL_FONT_SIZE = 11

/**
 * Per-side clearance (px) a label needs to count as "fitting". Stacked labels
 * sit inside a segment and want breathing room; labels outside the bar (above /
 * beside) sit in open space and need none.
 */
const STACKED_LABEL_FIT_PADDING = 6
const OUTSIDE_LABEL_FIT_PADDING = 0
const HORIZONTAL_LABEL_GRID_RIGHT = 60
const HORIZONTAL_LABEL_GAP = 8

/**
 * Gap ECharts leaves between a bar and a label placed outside it, mirroring its
 * own `label.distance` default for `position: "top"` / `"right"`. Named here
 * only so the space reserved for such a label can account for it.
 */
const OUTSIDE_LABEL_DISTANCE = 5

/**
 * Vertical space (px) a value label above a column occupies: its own line box
 * plus the gap to the bar. The 1.4 line-height ratio matches what the axis
 * layout assumes for stacked text elsewhere in the kit.
 */
function verticalLabelHeadroom(labelFontSize: number): number {
  return Math.ceil(labelFontSize * 1.4) + OUTSIDE_LABEL_DISTANCE
}
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

/**
 * Slack added past the measured text, for the pixel or two by which our metrics
 * and ECharts' own rounding disagree.
 *
 * It absorbs rounding, not a wrong font: label text is right-aligned against the
 * axis, so a box narrower than its text overflows away from the plot and the
 * first letter is shaved off by the edge of the canvas — and measuring with a
 * fallback font understates the width by a share of the string, which no fixed
 * slack can cover. {@link useFontsReady} is what keeps that from happening.
 */
const CATEGORY_LABEL_MEASURE_SLACK = 4

/**
 * Extra left inset, as a share of the label width, covering the gap between the
 * space ECharts reserves for category labels and the space their glyphs actually
 * occupy.
 *
 * `containLabel` sizes the gutter from ECharts' own measurement of the labels,
 * which comes out at fallback-font metrics, while the canvas paints them in the
 * real font — Inter runs ~6.7% wider than `sans-serif` at the same size (225.7px
 * vs 211.5px for a 36-character name). Right-aligned text puts that difference
 * past the left edge of the reservation, where the canvas clips it, and the first
 * letter of every long name goes missing.
 *
 * This pads the reservation instead of correcting it: proportional because the
 * error scales with the string, and 8% to stay ahead of the 6.7% observed. The
 * honest fix is to stop relying on `containLabel` here and set the inset from our
 * own measurement, which is a wider change than this buys.
 */
const CATEGORY_LABEL_RESERVATION_PAD = 0.08

/**
 * Width to give the category axis: what its longest name actually needs, clamped
 * to what the container can afford ({@link labelWidthCap}).
 *
 * Sizing to the text rather than to a fixed allowance means a chart of short
 * names ("Berlin") hands the width back to its bars instead of reserving a
 * gutter for text that isn't there, while nothing truncates until a name genuinely
 * outgrows the cap.
 *
 * Every category is measured, not just the ones currently on screen: a windowed
 * chart draws the rest as soon as it expands, and sizing to the window would make
 * the gutter jump on expand.
 */
function measuredCategoryLabelWidth(
  categories: string[],
  theme: {
    textStyle: { fontSize: number; fontWeight: number; fontFamily: string }
  },
  containerWidth: number | undefined,
  categoryFormatter?: (value: string) => string
): number {
  const font = `${theme.textStyle.fontWeight} ${theme.textStyle.fontSize}px ${theme.textStyle.fontFamily}`
  let widest = 0
  for (const category of categories) {
    const text = categoryFormatter ? categoryFormatter(category) : category
    widest = Math.max(widest, measureTextWidth(text, font))
  }
  return Math.min(
    Math.ceil(widest) + CATEGORY_LABEL_MEASURE_SLACK,
    labelWidthCap(containerWidth)
  )
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

// ---------------------------------------------------------------------------
// Horizontal category window
// ---------------------------------------------------------------------------

/** Thinnest a horizontal bar may get before the chart windows its categories. */
const MIN_BAR_THICKNESS = 16

/**
 * Thickness every bar gets once `showAllCategories` is on. Expanding trades the
 * pinned axis for the whole distribution, and at that point the rows are the
 * content — so they get more room than in the windowed view, and the chart grows
 * past its container to afford it.
 */
const EXPANDED_MIN_BAR_THICKNESS = 24

/** Clearance between neighbouring bars within one category. */
const MIN_BAR_GAP = 8

/**
 * Clearance between neighbouring categories, once a category holds more than
 * one bar.
 *
 * Grouping is carried entirely by this being the larger of the two gaps: with
 * both at {@link MIN_BAR_GAP} a chart of 6 categories × 3 series reads as one
 * run of 18 evenly-spaced bars, and the reader has to count in threes to
 * recover the groups. Doubling it makes each group a block.
 */
const MIN_CATEGORY_GAP = 24

/**
 * Gap separating two categories. A single bar per category — a plain or a
 * stacked chart — has no interior gap for the category gap to distinguish
 * itself from, so it stays at {@link MIN_BAR_GAP} and the rows stay compact.
 */
function categoryGap(barsPerBand: number): number {
  return barsPerBand > 1 ? MIN_CATEGORY_GAP : MIN_BAR_GAP
}

/**
 * Vertical space the chart spends on chrome rather than rows: the value axis on
 * top, the grid's own padding, and the legend row. Deliberately one rough
 * constant — it only shifts how many rows the window holds by one.
 */
const HORIZONTAL_CHART_CHROME = 64

/**
 * Band height (px) holding `barsPerBand` bars at `thickness` with
 * {@link MIN_BAR_GAP} between them and a {@link categoryGap} separating this
 * band from the next. Stacked series share a single bar per category, so they
 * count as one. This is the geometry {@link horizontalBarGaps} expresses as the
 * ratios ECharts actually takes.
 */
function minBandHeight(
  barsPerBand: number,
  thickness: number = MIN_BAR_THICKNESS
): number {
  const bars = Math.max(1, barsPerBand)
  return bars * thickness + (bars - 1) * MIN_BAR_GAP + categoryGap(bars)
}

/**
 * `barGap` / `barCategoryGap` for a horizontal chart, as the percentages
 * ECharts expects — neither accepts pixels. `barGap` is a share of one bar's
 * thickness; `barCategoryGap` is the share of the band left empty between
 * adjacent categories.
 *
 * Expressing the gaps as ratios rather than pixels keeps them correct at any
 * bar thickness: a chart with room to spare draws bars thicker than the
 * thickness floor, and its gaps grow with them instead of staying pinned at
 * {@link MIN_BAR_GAP}.
 */
function horizontalBarGaps(
  barsPerBand: number,
  thickness: number = MIN_BAR_THICKNESS
): {
  barGap: string
  barCategoryGap: string
} {
  const gapShareOfBar = (MIN_BAR_GAP / thickness) * 100
  const gapShareOfBand =
    (categoryGap(Math.max(1, barsPerBand)) /
      minBandHeight(barsPerBand, thickness)) *
    100

  return {
    barGap: `${gapShareOfBar.toFixed(1)}%`,
    barCategoryGap: `${gapShareOfBand.toFixed(1)}%`,
  }
}

/**
 * Height (px) a horizontal chart needs to draw every category at
 * {@link EXPANDED_MIN_BAR_THICKNESS}, or `undefined` when the chart isn't in
 * `showAllCategories` mode (where the window handles density instead).
 *
 * Applied by `BarChart` as a `min-height` on the ECharts host inside a
 * scrolling wrapper: below its container the chart still fills it and the bars
 * come out thicker; above it the container scrolls.
 */
export function expandedHorizontalChartHeight(
  props: Pick<
    F0DataChartBarProps,
    "orientation" | "stacked" | "categories" | "showAllCategories"
  > & { series?: F0DataChartBarSeries[] }
): number | undefined {
  if (!props.showAllCategories || props.orientation !== "horizontal") {
    return undefined
  }

  const categoryCount = props.categories?.length ?? 0
  if (categoryCount === 0) return undefined

  const barsPerBand = props.stacked ? 1 : (props.series?.length ?? 1)
  const band = minBandHeight(barsPerBand, EXPANDED_MIN_BAR_THICKNESS)

  return Math.ceil(categoryCount * band) + HORIZONTAL_CHART_CHROME
}

/**
 * How many categories a horizontal chart can show at
 * {@link MIN_BAR_THICKNESS}, or `undefined` when every category already fits.
 *
 * The alternative — growing the canvas past its container and letting the DOM
 * scroll — drags the value axis and legend along with the rows, because ECharts
 * paints them into the same canvas. Windowing the category axis instead keeps
 * the axis pinned to the top of the chart and the legend to the bottom, and
 * only the rows move.
 */
export function horizontalCategoryWindow({
  isVertical,
  windowCategories,
  showAllCategories,
  stacked,
  categoryCount,
  seriesCount,
  containerHeight,
}: {
  isVertical: boolean
  windowCategories: boolean
  showAllCategories: boolean
  stacked: boolean
  categoryCount: number
  seriesCount: number
  containerHeight: number | undefined
}): number | undefined {
  // Hiding rows is opt-in: without it a dense chart compresses instead, which
  // keeps every category reachable. See `windowCategories` in the prop docs.
  if (!windowCategories || showAllCategories) return undefined
  if (isVertical || !containerHeight || categoryCount === 0) return undefined

  const plotHeight = containerHeight - HORIZONTAL_CHART_CHROME
  if (plotHeight <= 0) return undefined

  const band = minBandHeight(stacked ? 1 : seriesCount)
  if (plotHeight / categoryCount >= band) return undefined

  // At least two rows, so the window can never collapse to a single bar that
  // gives no sense of the surrounding data.
  return Math.max(2, Math.floor(plotHeight / band))
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

/**
 * Slack left beyond the longest bar when the value axis maximum comes from the
 * data. Enough that the bar doesn't read as jammed against its own label; small
 * enough that the plot isn't paying for empty space.
 */
const VALUE_AXIS_HEADROOM = 1.05

/**
 * Value-axis maximum taken from the data — the longest extent any bar draws,
 * plus {@link VALUE_AXIS_HEADROOM} — or `undefined` when the data gives nothing
 * to scale to and ECharts' own choice should stand.
 *
 * A target turns into a ghost stacked on its bar, so the drawn extent of a point
 * is the further of value and target. Stacked categories draw their parts end to
 * end, so their extent is the sum — but only of the parts pointing the same way:
 * ECharts stacks each sign away from zero independently, so a category of +100,
 * +100, -150 reaches +200 and a signed sum would pin the axis at 52.5 and clip
 * most of the positive stack. (A stacked chart that also carries targets splits
 * into one stack per series, which makes the sum an over-estimate — the safe
 * direction, since it only leaves slack rather than clipping a bar.)
 *
 * Negative-only data returns `undefined`: the maximum is not the far end of
 * anything there, and pinning it would squash the axis against zero. The
 * negative side is left to the automatic minimum in every case.
 */
function dataValueAxisMax(
  series: F0DataChartBarSeries[],
  stacked: boolean,
  categoryCount: number
): number | undefined {
  const pointExtent = (point: F0DataChartBarDataPoint): number => {
    const value = getValue(point)
    const target = getTarget(point)
    return target !== undefined && target > value ? target : value
  }

  let widest = 0
  for (let dataIndex = 0; dataIndex < categoryCount; dataIndex++) {
    // Positive and negative parts of a stack grow away from zero in opposite
    // directions rather than cancelling, so they accumulate separately: a
    // category of +100, +100, -150 reaches +200 on the axis, not the +50 a
    // signed sum would report. Only the positive side can set the maximum.
    // Negatives are left out of the running total rather than subtracted from
    // it: they extend the other way, and the axis minimum stays automatic, so
    // they can't be what pins the maximum.
    let positive = 0
    for (const s of series) {
      const point = s.data[dataIndex]
      if (point === undefined) continue
      const own = pointExtent(point)
      if (own <= 0) continue
      positive = stacked ? positive + own : Math.max(positive, own)
    }
    widest = Math.max(widest, positive)
  }

  return widest > 0 ? widest * VALUE_AXIS_HEADROOM : undefined
}

/** Name of the ghost series carrying stacked totals. Kept out of `legendData`. */
const STACK_TOTAL_SERIES_NAME = "__stackTotal"

/**
 * Per-category sums, or `undefined` when a stacked total would not mean
 * anything.
 *
 * Two cases are excluded, mirroring the tooltip's own `showTotal` rule so the
 * label and the tooltip never disagree:
 *
 * - **A single series.** Its total is the bar's own value, so the label would
 *   restate the segment label already sitting inside the bar.
 * - **Mixed signs within a category.** Parts pushing both ways don't add up to
 *   the length the reader sees, and the ghost has no unambiguous end to sit at.
 */
function stackTotals(
  series: F0DataChartBarSeries[],
  categories: string[]
): number[] | undefined {
  if (series.length < 2) return undefined

  const totals: number[] = []
  for (let dataIndex = 0; dataIndex < categories.length; dataIndex++) {
    let total = 0
    let hasPositive = false
    let hasNegative = false
    for (const s of series) {
      const point = s.data[dataIndex]
      if (point === undefined) continue
      const value = getValue(point) || 0
      if (value > 0) hasPositive = true
      else if (value < 0) hasNegative = true
      total += value
    }
    if (hasPositive && hasNegative) return undefined
    totals.push(total)
  }
  return totals
}

/**
 * A zero-height ghost stacked on top of the real segments, carrying the
 * category total as a label beside the bar's end.
 *
 * The ghost draws nothing — it exists because ECharts places a stacked series'
 * label at that series' own position in the stack, so the only way to label the
 * *end* of the whole bar is to stack something there. Its own value is 0, so it
 * adds no length; the label text comes from {@link stackTotals} instead of from
 * the datum.
 *
 * Consequence of precomputing the text: isolating a series from the legend
 * moves the ghost (ECharts re-stacks without the hidden series) but the number
 * still reads as the full total. The tooltip's total behaves the same way, so
 * the two stay consistent with each other.
 */
function buildStackTotalSeries(
  totals: number[],
  labelColor: string,
  labelFontSize: number,
  containerWidth: number,
  valueFormatter?: (value: number) => string
): echarts.BarSeriesOption {
  return {
    name: STACK_TOTAL_SERIES_NAME,
    type: "bar",
    stack: "stacked",
    data: totals.map(() => 0),
    silent: true,
    legendHoverLink: false,
    tooltip: { show: false },
    emphasis: { disabled: true },
    itemStyle: { color: "transparent", borderWidth: 0 },
    label: {
      show: true,
      position: "right",
      color: labelColor,
      fontWeight: "bold",
      fontSize: labelFontSize,
      formatter: (params) => {
        const total = totals[params.dataIndex ?? 0]
        if (total === undefined) return ""
        return valueFormatter ? valueFormatter(total) : String(total)
      },
    },
    // The reserved strip on the right is a fixed allowance, so a total wide
    // enough to run past the container edge is dropped rather than clipped.
    // Measured from the laid-out label itself, since its text is the total
    // rather than any single datum the fit pass could look up.
    labelLayout: (params) =>
      params.labelRect.x + params.labelRect.width <= containerWidth
        ? {}
        : { fontSize: 0 },
    // Hovering a segment blurs every other series, so match the segments'
    // fade instead of staying at full strength while the bar dims.
    blur: { label: { opacity: BLUR_OPACITY } },
  }
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
    windowCategories = false,
    showAllCategories = false,
    valueFormatter,
    tooltipValueFormatter,
    categoryFormatter,
    labelFontSize,
    valueAxisSplitNumber = 2,
    echartsOptions,
  }: F0DataChartBarProps,
  size: BarChartSize,
  /**
   * Which series the legend has selected, or `null` for all of them. Numbers
   * derived from more than one series are computed from these, so they keep
   * describing the bars the reader can actually see.
   */
  legendSelection: Record<string, boolean> | null = null
): echarts.EChartsOption {
  const theme = useChartTheme(containerRef)
  const i18n = useI18n()
  const { width: containerWidth, height: containerHeight } =
    useContainerSize(containerRef)
  const prefersReducedMotion = useReducedMotion()
  // Only a dependency, never read: label widths are measured below, and the
  // metrics change under us when the real font arrives. See `useFontsReady`.
  const fontsReady = useFontsReady()

  return useMemo(() => {
    const isVertical = orientation === "vertical"
    // Isolating a series from the legend makes ECharts re-stack around what is
    // left. Anything summed across series follows that, or the number stops
    // matching the bar it sits on.
    const visibleSeries = legendSelection
      ? series.filter((s) => legendSelection[s.name] !== false)
      : series
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
    const { showCategoryAxis } = responsive

    // A horizontal bar with its value written beside it doesn't need the scale
    // spelled out again along the top — the reader takes the number off the bar,
    // and the ticks only compete with it. The grid lines stay: they're driven by
    // `showGrid`, so the bars keep something to be read against, which is all
    // the axis was contributing once every bar is labelled.
    //
    // Only the labels go. Without `showLabels` the ticks are the sole way to
    // judge magnitude, and vertical charts keep theirs either way — their labels
    // sit above the bars, clear of the axis rather than duplicating it.
    const labelsReplaceValueAxis = !isVertical && showLabels
    const showValueAxis = responsive.showValueAxis && !labelsReplaceValueAxis

    // The same call, applied to the axis extent: ECharts rounds its maximum up to
    // a nice number, which is worth the whitespace only while someone can read
    // the ticks it lands on. With them hidden, a 106 max rounded to 150 spends a
    // third of the plot labelling nothing, so take the extent from the data.
    const valueAxisMax = labelsReplaceValueAxis
      ? dataValueAxisMax(visibleSeries, stacked, categories.length)
      : undefined

    // Horizontal rows carry their category names along the side, where the axis
    // can be sized to the names themselves. Vertical charts lay them out along
    // the width, where the smart layout trades truncation against skipping
    // labels and owns the decision.
    const categoryMaxLabelWidth =
      !isVertical && showCategoryAxis
        ? measuredCategoryLabelWidth(
            categories,
            theme,
            containerWidth,
            categoryFormatter
          )
        : undefined

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

    // A horizontal stacked bar reads as one quantity split into parts, so the
    // quantity itself gets a label at the end of the bar — the segments only
    // carry their own shares. Vertical stacks are left alone: their end is the
    // top, where the value axis already gives the reader the number.
    const totals =
      showLabels && stacked && !isVertical
        ? stackTotals(visibleSeries, categories)
        : undefined
    if (totals) {
      echartsSeries.push(
        buildStackTotalSeries(
          totals,
          theme.colors.foregroundSecondary,
          resolvedLabelFontSize,
          containerWidth,
          valueFormatter
        )
      )
    }

    // Horizontal rows carry an explicit gap geometry rather than ECharts'
    // defaults (20% of the band, 30% of a bar), which at the thickness a dense
    // chart lands on leaves bars visually touching. Vertical charts keep the
    // defaults. ECharts reads these from the first series of a stack group, but
    // setting them on every entry keeps that independent of series order.
    if (!isVertical) {
      const gaps = horizontalBarGaps(
        stacked ? 1 : series.length,
        showAllCategories ? EXPANDED_MIN_BAR_THICKNESS : MIN_BAR_THICKNESS
      )
      for (const entry of echartsSeries) {
        Object.assign(entry, gaps)
      }
    }

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

    const formatTooltipValue = tooltipValueFormat(
      tooltipValueFormatter,
      valueFormatter
    )

    // Too many categories to render at the minimum bar thickness: show a
    // window of them and let the reader scroll through the rest. Resolved
    // before the axes are built, because the axis decides label skipping from
    // the rows it actually draws.
    const categoryWindow = horizontalCategoryWindow({
      isVertical,
      windowCategories,
      showAllCategories,
      stacked,
      categoryCount: categories.length,
      seriesCount: series.length,
      containerHeight,
    })

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
      ...(categoryWindow !== undefined
        ? { categoryVisibleCount: categoryWindow }
        : {}),
      valueFormatter,
      categoryFormatter,
      tooltipValueFormatter,
      valueAxisSplitNumber,
      ...(valueAxisMax !== undefined ? { valueAxisMax } : {}),
      ...(categoryMaxLabelWidth !== undefined ? { categoryMaxLabelWidth } : {}),
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
          const categoryValues = visibleSeries.map((s) => {
            // A series can be shorter than `categories`.
            const point = s.data[dataIndex]
            return point === undefined ? 0 : getValue(point) || 0
          })
          const hasMixedSigns =
            categoryValues.some((v) => v > 0) &&
            categoryValues.some((v) => v < 0)
          const total = categoryValues.reduce((sum, v) => sum + v, 0)
          const showTotal = visibleSeries.length > 1 && !hasMixedSigns

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

    // Horizontal bars whose labels sit BESIDE the bar end need the grid to
    // reserve room for them on the right: every category for a non-stacked
    // chart, and the total for a stacked one. A stacked chart without totals
    // keeps its full width — those labels sit inside their own segments.
    if (!isVertical && (!stacked || totals) && showLabels) {
      if (userGridRight === undefined) {
        const grid = options.grid as { right?: number }
        if (grid) {
          grid.right = HORIZONTAL_LABEL_GRID_RIGHT
        }
      }
    }

    // The vertical equivalent: a column's label sits ABOVE the bar, so the grid
    // needs headroom for it. `containLabel` doesn't provide any — it accounts for
    // axis labels, and a vertical chart has none along the top — so a column
    // reaching the axis maximum pushed its label off the top of the canvas, where
    // it was clipped by the widget's header. Added to whatever padding `buildGrid`
    // set rather than replacing it, so the base stays defined in one place.
    //
    // Stacked columns are exempt: their labels sit inside the segments.
    if (isVertical && !stacked && showLabels) {
      const userGridTop = (
        echartsOptions?.grid as { top?: number | string } | undefined
      )?.top
      const grid = options.grid as { top?: number }
      if (userGridTop === undefined && grid && typeof grid.top === "number") {
        grid.top += verticalLabelHeadroom(resolvedLabelFontSize)
      }
    }

    // Pad the gutter past what `containLabel` reserved for the category names,
    // so the difference between ECharts' measurement of them and their painted
    // width falls inside the chart instead of off its left edge. See
    // `CATEGORY_LABEL_RESERVATION_PAD` for why the two disagree.
    if (categoryMaxLabelWidth !== undefined) {
      const userGridLeft = (
        echartsOptions?.grid as { left?: number | string } | undefined
      )?.left
      const grid = options.grid as { left?: number }
      if (userGridLeft === undefined && grid && typeof grid.left === "number") {
        grid.left += Math.ceil(
          categoryMaxLabelWidth * CATEGORY_LABEL_RESERVATION_PAD
        )
      }
    }

    // The window resolved above is fixed: it shows the top rows and nothing
    // moves it. `disabled` turns off every `inside` interaction — drag-to-pan
    // (`moveOnMouseMove`, on by default) and wheel-pan alike — while still
    // applying `startValue`/`endValue` to the axis, so the window is a framing
    // decision rather than a viewport the reader has to discover and operate.
    // Expanding is the way to the rest of the rows, offered explicitly by the
    // widget's "show all" link; panning duplicated that as a hidden gesture, and
    // wheel-panning also swallowed the scroll of the page the chart sits on.
    //
    // `zoomLock` keeps the window's size fixed against a programmatic zoom, and
    // `filterMode: "none"` keeps every row in the dataset so `dataIndex` still
    // lines up with `categories` — the label layout and corner-radius resolvers
    // index by it.
    if (categoryWindow !== undefined) {
      options.dataZoom = [
        {
          type: "inside",
          yAxisIndex: 0,
          startValue: 0,
          endValue: categoryWindow - 1,
          filterMode: "none",
          zoomLock: true,
          disabled: true,
        },
      ]
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
    windowCategories,
    showAllCategories,
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
    fontsReady,
    legendSelection,
  ])
}
