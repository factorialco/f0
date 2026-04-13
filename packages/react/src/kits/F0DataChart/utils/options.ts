import type * as echarts from "echarts"

import type { ChartTheme } from "./theme"

// ---------------------------------------------------------------------------
// Category axis
// ---------------------------------------------------------------------------

interface CategoryAxisOptions {
  data: string[]
  theme: ChartTheme
  formatter?: (value: string) => string
  /** Axis length in pixels — used to auto-compute label interval */
  axisLength?: number
  /**
   * Whether to leave space at the edges of the category axis.
   * - `true` (default for ECharts) — centres categories with padding at edges.
   *   Appropriate for bar charts where bars need centering space.
   * - `false` — first/last data points sit flush against the axis edges.
   *   Appropriate for line charts.
   */
  boundaryGap?: boolean
  /** Max label width in pixels — when set, labels are truncated with ellipsis */
  maxLabelWidth?: number
  /** Whether the axis (line, ticks, labels) is rendered at all */
  show?: boolean
  /**
   * Enable the smart layout (compute `interval` + per-label `width` so all
   * labels appear with ellipsis instead of being skipped). Used for the
   * line/bar X axis. The legacy fixed `maxLabelWidth` path stays available
   * for callers that need a hard cap.
   */
  smartLayout?: boolean
  /**
   * When true, anchor the first label to the left edge and the last label to
   * the right edge of the axis. Required for `boundaryGap: false` charts
   * (line charts) so that the leftmost/rightmost label cannot overflow the
   * container. The label width is automatically tightened so the anchored
   * edges don't overlap their centered neighbours.
   */
  edgeAligned?: boolean
}

/**
 * Minimum pixels of space each category label needs before we start
 * skipping labels. Labels narrower than this overlap and become unreadable.
 */
const MIN_LABEL_WIDTH = 60

/** Smallest readable label width when truncating with ellipsis (~3 chars). */
const MIN_TRUNCATED_LABEL_WIDTH = 24

/** Horizontal breathing room reserved between adjacent centered labels. */
const LABEL_GAP = 8

/**
 * Compute how many labels to skip so that they don't overlap.
 * Returns 0 (show every label) when there's enough room, or N to
 * show every (N+1)th label.
 *
 * Kept for non-line chart consumers (e.g. heatmap) that don't need the
 * smarter truncation layout.
 */
export function computeLabelInterval(
  categoryCount: number,
  containerWidth: number | undefined
): number | undefined {
  if (!containerWidth || categoryCount <= 1) return undefined
  const spacePerLabel = containerWidth / categoryCount
  if (spacePerLabel >= MIN_LABEL_WIDTH) return undefined
  // How many labels fit comfortably
  const fitCount = Math.max(1, Math.floor(containerWidth / MIN_LABEL_WIDTH))
  // interval = skip every N labels so that only fitCount labels are shown
  return Math.max(0, Math.ceil(categoryCount / fitCount) - 1)
}

interface CategoryAxisLayout {
  /** ECharts `axisLabel.interval` — 0 = show every label */
  interval: number
  /** Max width per label in pixels (used as `axisLabel.width` for truncation) */
  labelWidth: number
}

/**
 * Smart category axis layout: prefer showing every label with ellipsis
 * truncation. Only fall back to skipping labels when even a 3-char truncated
 * label wouldn't fit.
 *
 * `edgeAligned` (line charts with `boundaryGap: false`): the first and last
 * labels are anchored to the chart edges, so the centered neighbour two ticks
 * away constrains the maximum width. To avoid overlap we cap the width at
 * `step * 0.65`, which leaves enough breathing room on both sides.
 */
export function computeCategoryAxisLayout(
  categoryCount: number,
  axisLength: number | undefined,
  edgeAligned: boolean
): CategoryAxisLayout | undefined {
  if (!axisLength || axisLength <= 0 || categoryCount <= 1) return undefined

  const maxWidthForCount = (count: number): number => {
    if (count <= 1) return Math.floor(axisLength)
    if (edgeAligned) {
      // step between adjacent ticks; first/last label anchored to chart edge
      const step = axisLength / (count - 1)
      return Math.floor(step * 0.65)
    }
    // Centered (boundaryGap: true): one slot per category, minus a gap
    return Math.floor(axisLength / count) - LABEL_GAP
  }

  const fullWidth = maxWidthForCount(categoryCount)
  if (fullWidth >= MIN_TRUNCATED_LABEL_WIDTH) {
    return {
      interval: 0,
      labelWidth: Math.max(fullWidth, MIN_TRUNCATED_LABEL_WIDTH),
    }
  }

  // Not enough room even with truncation — start dropping labels until each
  // visible one has at least the minimum readable width.
  const slot = MIN_TRUNCATED_LABEL_WIDTH + LABEL_GAP
  const fitCount = Math.max(2, Math.floor(axisLength / slot))
  const interval = Math.max(0, Math.ceil(categoryCount / fitCount) - 1)
  const visibleCount = Math.max(1, Math.ceil(categoryCount / (interval + 1)))
  const visibleWidth = maxWidthForCount(visibleCount)
  return {
    interval,
    labelWidth: Math.max(MIN_TRUNCATED_LABEL_WIDTH, visibleWidth),
  }
}

/** Build a styled category axis matching F0 chart conventions */
export function buildCategoryAxis({
  data,
  theme,
  formatter,
  axisLength,
  boundaryGap,
  maxLabelWidth,
  show = true,
  smartLayout = false,
  edgeAligned = false,
}: CategoryAxisOptions) {
  // When smartLayout is enabled, compute `{interval, labelWidth}` from the
  // available pixels so that we show as many labels as possible with ellipsis.
  // Otherwise fall back to the legacy fixed-cap behaviour.
  const layout =
    smartLayout && show
      ? computeCategoryAxisLayout(data.length, axisLength, edgeAligned)
      : undefined

  const interval =
    layout?.interval ?? computeLabelInterval(data.length, axisLength)

  // Resolved truncation width: smart layout takes precedence; otherwise the
  // explicit `maxLabelWidth` override is used as before.
  const resolvedLabelWidth = layout?.labelWidth ?? maxLabelWidth

  return {
    type: "category" as const,
    data,
    ...(boundaryGap !== undefined ? { boundaryGap } : {}),
    axisLine: {
      show,
      lineStyle: {
        color: theme.colors.borderSecondary,
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show,
      fontSize: theme.textStyle.fontSize,
      fontWeight: theme.textStyle.fontWeight,
      color: theme.colors.foregroundTertiary,
      hideOverlap: true,
      // Edge-aligned charts must always render the first and last labels —
      // skipping either of them would expose an unlabelled chart edge.
      ...(edgeAligned ? { showMinLabel: true, showMaxLabel: true } : {}),
      // Anchor first/last labels to the axis edges so they cannot overflow
      // the chart container. Centered interior labels keep their default
      // alignment.
      ...(edgeAligned
        ? { alignMinLabel: "left" as const, alignMaxLabel: "right" as const }
        : {}),
      ...(interval !== undefined ? { interval } : {}),
      ...(formatter
        ? {
            formatter: (_value: string | number) => formatter(String(_value)),
          }
        : {}),
      ...(resolvedLabelWidth !== undefined
        ? {
            width: resolvedLabelWidth,
            overflow: "truncate" as const,
            ellipsis: "...",
          }
        : {}),
    },
    ...(show && resolvedLabelWidth !== undefined ? { triggerEvent: true } : {}),
  }
}

// ---------------------------------------------------------------------------
// Value axis
// ---------------------------------------------------------------------------

interface ValueAxisOptions {
  theme: ChartTheme
  showGrid: boolean
  formatter?: (value: number) => string
  /** Max label width in pixels — when set, labels are truncated with ellipsis */
  maxLabelWidth?: number
  /** Whether the axis labels are rendered. Grid lines stay controlled by showGrid. */
  show?: boolean
}

/** Build a styled value axis with optional solid grid lines */
export function buildValueAxis({
  theme,
  showGrid,
  formatter,
  maxLabelWidth,
  show = true,
}: ValueAxisOptions) {
  return {
    type: "value" as const,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show,
      fontSize: theme.textStyle.fontSize,
      fontWeight: theme.textStyle.fontWeight,
      color: theme.colors.foregroundTertiary,
      hideOverlap: true,
      ...(formatter
        ? {
            formatter: (_value: string | number) => formatter(Number(_value)),
          }
        : {}),
      ...(maxLabelWidth !== undefined
        ? {
            width: maxLabelWidth,
            overflow: "truncate" as const,
            ellipsis: "...",
          }
        : {}),
    },
    ...(show && maxLabelWidth !== undefined ? { triggerEvent: true } : {}),
    splitLine: {
      show: showGrid,
      lineStyle: {
        type: "solid" as const,
        color: theme.colors.borderSecondary,
      },
    },
  }
}

// ---------------------------------------------------------------------------
// Legend
// ---------------------------------------------------------------------------

interface LegendOptions {
  show: boolean
  data: string[]
  theme: ChartTheme
  /** Container width in pixels — used to compute max label width */
  containerWidth?: number
}

/**
 * Build the standard F0 chart legend: circle icons, centered at bottom,
 * with a 16px gap between chart area and legend.
 *
 * Uses ECharts' built-in scroll legend so that when items overflow the
 * available width, the legend is paginated with left/right arrows. Only
 * the legend pages — the chart area is unaffected.
 */
export function buildLegend({
  show,
  data,
  theme,
}: LegendOptions): echarts.EChartsOption["legend"] {
  if (!show) return undefined

  return {
    type: "scroll",
    show: true,
    data,
    bottom: 0,
    left: "center",
    icon: "circle",
    itemWidth: 10,
    itemHeight: 10,
    selectedMode: true,
    textStyle: {
      fontWeight: theme.textStyle.fontWeight,
      color: theme.colors.foregroundSecondary,
    },
    pageIconColor: theme.colors.foregroundSecondary,
    pageIconInactiveColor: theme.colors.borderSecondary,
    pageTextStyle: {
      color: theme.colors.foregroundTertiary,
    },
  } as echarts.EChartsOption["legend"]
}

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

interface GridOptions {
  showLegend: boolean
}

/** Standard chart grid — minimal padding, containLabel keeps axis labels visible */
export function buildGrid({ showLegend }: GridOptions) {
  return {
    left: 4,
    right: 4,
    top: 8,
    // Legend height (~20px) + 12px breathing room between chart and legend
    bottom: showLegend ? 32 : 4,
    containLabel: true,
  }
}

// ---------------------------------------------------------------------------
// Emphasis
// ---------------------------------------------------------------------------

/** Default emphasis config: disables label and removes shadow */
export const DEFAULT_EMPHASIS = {
  label: {
    show: false,
  },
  itemStyle: {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowColor: "transparent",
  },
}

// ---------------------------------------------------------------------------
// Tooltip
// ---------------------------------------------------------------------------

interface TooltipOptions {
  theme: ChartTheme
  /** Filter out series whose name matches this predicate */
  filterSeries?: (seriesName: string) => boolean
  valueFormatter?: (value: number) => string
  /** Custom formatter — replaces the default one entirely */
  customFormatter?: (params: unknown) => string
}

/**
 * Build a fully styled axis-triggered tooltip that optionally filters out
 * ghost series (e.g. target gradient bars).
 *
 * Replicates the visual style from the old f0.light theme:
 * - padding, borderWidth, borderRadius
 * - frosted glass background (light and dark variants)
 * - smart position function (flips left/right at chart midpoint)
 * - dashed axis pointer line
 * - transition duration
 */
export function buildTooltip({
  theme,
  filterSeries,
  valueFormatter,
  customFormatter,
}: TooltipOptions): echarts.EChartsOption["tooltip"] {
  const { tooltip, axisPointer, colors } = theme

  return {
    trigger: "axis",
    confine: true,
    padding: tooltip.padding,
    borderWidth: tooltip.borderWidth,
    transitionDuration: tooltip.transitionDuration,
    textStyle: {
      color: colors.foreground,
      fontSize: 14,
    },
    // Smart position: flip tooltip to the other side of the cursor at the
    // chart midpoint so it never clips outside the container
    position(
      point: [number, number],
      _params: unknown,
      _dom: unknown,
      _rect: unknown,
      size: { viewSize: [number, number]; contentSize: [number, number] }
    ) {
      const tooltipWidth = size.contentSize[0]
      const isLeftHalf = point[0] < size.viewSize[0] / 2
      const x = isLeftHalf ? point[0] + 10 : point[0] - tooltipWidth - 10

      return [x, "20%"]
    },
    axisPointer: {
      type: "line",
      lineStyle: {
        color: axisPointer.color,
        type: axisPointer.type,
      },
    },
    extraCssText: [
      `box-shadow: ${tooltip.boxShadow}`,
      `border-radius: ${tooltip.borderRadius}px`,
      `border: 1px solid ${colors.borderSecondary}`,
      "backdrop-filter: blur(30px)",
      `-webkit-backdrop-filter: blur(30px)`,
      `background: ${tooltip.background}`,
    ].join("; "),
    formatter:
      customFormatter ??
      ((params: unknown) => {
        if (!Array.isArray(params)) return ""

        const filtered = filterSeries
          ? params.filter(
              (p: { seriesName?: string }) =>
                !filterSeries(String(p.seriesName ?? ""))
            )
          : params

        if (filtered.length === 0) return ""

        const header = `<div style="margin-bottom: 4px; font-weight: 500">${String(filtered[0].axisValueLabel ?? filtered[0].name ?? "")}</div>`
        const items = filtered
          .map(
            (p: { marker?: string; seriesName?: string; value?: number }) => {
              const formattedValue = valueFormatter
                ? valueFormatter(Number(p.value))
                : String(p.value)
              return `<div>${String(p.marker ?? "")} ${String(p.seriesName ?? "")} <strong>${formattedValue}</strong></div>`
            }
          )
          .join("")

        return `${header}${items}`
      }),
  } as echarts.EChartsOption["tooltip"]
}

// ---------------------------------------------------------------------------
// Item tooltip (non-axis charts: pie, funnel, etc.)
// ---------------------------------------------------------------------------

interface ItemTooltipOptions {
  theme: ChartTheme
  formatter: (params: unknown) => string
}

/**
 * Build a styled item-triggered tooltip for non-axis charts (pie, funnel, etc.).
 *
 * Shares the same visual style as `buildTooltip` (frosted glass, shadows, etc.)
 * but uses `trigger: "item"` and accepts a custom `formatter`.
 */
export function buildItemTooltip({
  theme,
  formatter,
}: ItemTooltipOptions): echarts.EChartsOption["tooltip"] {
  const { tooltip, colors } = theme

  return {
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
    formatter,
  } as echarts.EChartsOption["tooltip"]
}

// ---------------------------------------------------------------------------
// Axes builder
// ---------------------------------------------------------------------------

/**
 * Assemble the axes for a chart that supports both vertical and horizontal
 * orientations. Returns `{ xAxis, yAxis }` with proper ECharts casts.
 */
export function buildAxes({
  isVertical,
  categories,
  theme,
  showGrid,
  valueFormatter,
  categoryFormatter,
  containerWidth,
  containerHeight,
  boundaryGap,
  showCategoryAxis = true,
  showValueAxis = true,
  categoryMaxLabelWidth,
}: {
  isVertical: boolean
  categories: string[]
  theme: ChartTheme
  showGrid: boolean
  valueFormatter?: (value: number) => string
  categoryFormatter?: (value: string) => string
  containerWidth?: number
  containerHeight?: number
  boundaryGap?: boolean
  /** Hide the category axis labels and line entirely (grid space is reclaimed by ECharts) */
  showCategoryAxis?: boolean
  /** Hide the value axis labels (grid lines stay controlled by `showGrid`) */
  showValueAxis?: boolean
  /**
   * When set, the category axis will truncate long labels with ellipsis.
   * Used by line charts at the `lg` breakpoint so long category names like
   * "September" still get rendered horizontally and truncate gracefully.
   */
  categoryMaxLabelWidth?: number
}) {
  const yAxisMaxLabelWidth = Math.min(80, (containerWidth ?? 600) * 0.2)

  // Estimate the horizontal space taken by the value (Y) axis labels + grid
  // padding so the smart layout knows how wide the plot area really is.
  // This is intentionally a rough constant — `containLabel: true` on the
  // grid handles the precise reservation.
  const Y_AXIS_RESERVED = 56
  const xPlotLength = containerWidth
    ? Math.max(0, containerWidth - Y_AXIS_RESERVED)
    : undefined

  const categoryAxis = buildCategoryAxis({
    data: categories,
    theme,
    formatter: categoryFormatter,
    axisLength: isVertical ? xPlotLength : containerHeight,
    boundaryGap,
    show: showCategoryAxis,
    // Vertical charts get the smart layout (truncate-then-skip). Horizontal
    // charts (category on Y axis) keep their fixed cap.
    smartLayout: isVertical,
    edgeAligned: isVertical && boundaryGap === false,
    ...(categoryMaxLabelWidth !== undefined
      ? { maxLabelWidth: categoryMaxLabelWidth }
      : !isVertical
        ? { maxLabelWidth: yAxisMaxLabelWidth }
        : {}),
  })

  const valueAxis = buildValueAxis({
    theme,
    showGrid,
    formatter: valueFormatter,
    show: showValueAxis,
    ...(isVertical ? { maxLabelWidth: yAxisMaxLabelWidth } : {}),
  })

  return {
    xAxis: (isVertical
      ? { ...categoryAxis }
      : { ...valueAxis }) as echarts.EChartsOption["xAxis"],
    yAxis: (isVertical
      ? { ...valueAxis }
      : { ...categoryAxis }) as echarts.EChartsOption["yAxis"],
  }
}

// ---------------------------------------------------------------------------
// Base chart options builder
// ---------------------------------------------------------------------------

interface BaseChartOptionsParams {
  /** Category axis labels */
  categories: string[]
  /** Resolved chart theme */
  theme: ChartTheme
  /** ECharts series array (bar or line) — already built by the caller */
  series: echarts.EChartsOption["series"]
  /** Legend entry names (main series only, excluding ghost/target series) */
  legendData: string[]
  /** Whether the category axis is horizontal (true) or vertical (false) */
  isVertical: boolean
  /** Show grid lines on the value axis */
  showGrid: boolean
  /** Show the legend below the chart */
  showLegend: boolean
  /** Format value axis labels */
  valueFormatter?: (value: number) => string
  /** Format category axis labels */
  categoryFormatter?: (value: string) => string
  /** Predicate to filter series out of the tooltip (e.g. target ghost bars) */
  tooltipFilterSeries?: (seriesName: string) => boolean
  /** Custom tooltip formatter — when provided, replaces the default one */
  tooltipFormatter?: (params: unknown) => string
  /** User-provided ECharts overrides (shallow-merged on top) */
  echartsOptions?: Partial<echarts.EChartsOption>
  /** Container width in pixels — used to auto-compute category label interval */
  containerWidth?: number
  /** Container height in pixels — used for horizontal orientation label interval */
  containerHeight?: number
  /** Whether to leave space at the edges of the category axis */
  boundaryGap?: boolean
  /** Whether the category axis labels/line are rendered (default true) */
  showCategoryAxis?: boolean
  /** Whether the value axis labels are rendered (default true) */
  showValueAxis?: boolean
  /** Optional ellipsis truncation width for the category axis labels */
  categoryMaxLabelWidth?: number
}

/**
 * Assemble a complete ECharts option from pre-built series.
 *
 * Both bar and line hooks delegate here so that axes, legend, grid, tooltip,
 * and emphasis are built in exactly one place. Future chart types (pie,
 * scatter, etc.) should also delegate here for consistent styling.
 */
export function buildBaseChartOptions({
  categories,
  theme,
  series,
  legendData,
  isVertical,
  showGrid,
  showLegend,
  valueFormatter,
  categoryFormatter,
  tooltipFilterSeries,
  tooltipFormatter,
  echartsOptions,
  containerWidth,
  containerHeight,
  boundaryGap,
  showCategoryAxis = true,
  showValueAxis = true,
  categoryMaxLabelWidth,
}: BaseChartOptionsParams): echarts.EChartsOption {
  const { xAxis, yAxis } = buildAxes({
    isVertical,
    categories,
    theme,
    showGrid,
    valueFormatter,
    categoryFormatter,
    containerWidth,
    containerHeight,
    boundaryGap,
    showCategoryAxis,
    showValueAxis,
    categoryMaxLabelWidth,
  })

  const baseOptions: echarts.EChartsOption = {
    animation: false,
    color: theme.palette,
    textStyle: {
      fontFamily: theme.textStyle.fontFamily,
    },
    xAxis,
    yAxis,
    series,
    labelLayout: { hideOverlap: true },
    legend: buildLegend({
      show: showLegend,
      data: legendData,
      theme,
      containerWidth,
    }),
    grid: buildGrid({ showLegend }),
    tooltip: buildTooltip({
      theme,
      filterSeries: tooltipFilterSeries,
      valueFormatter,
      customFormatter: tooltipFormatter,
    }),
    emphasis: DEFAULT_EMPHASIS,
  }

  if (echartsOptions) {
    return Object.assign({}, baseOptions, echartsOptions)
  }

  return baseOptions
}
