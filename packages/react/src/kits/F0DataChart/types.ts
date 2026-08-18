import type * as echarts from "echarts"
import type { ReactNode } from "react"

import type { ChartColorToken } from "./utils/colors"

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

/**
 * Configuration for the empty state shown when a chart has no data.
 *
 * `F0DataChart` auto-detects empty data across all variants and renders a
 * default empty state. Use this prop to customize the copy, fully replace
 * the rendered UI via `render`, or skip detection via `disabled`.
 */
export interface F0DataChartEmptyStateProps {
  /** Override the default headline. */
  title?: string
  /** Override the default supporting copy. */
  description?: string
  /**
   * Render-prop escape hatch — when provided, replaces the entire empty
   * state UI. Still gated by the empty-data detection.
   */
  render?: () => ReactNode
  /**
   * Skip empty-data detection and render the chart as usual. Use when zero
   * values are legitimate (e.g. a "0 errors per day" timeline).
   * @default false
   */
  disabled?: boolean
}

/** One series' value at the category a click resolved to. */
export interface F0DataChartPointClickSeries {
  /** Series name, as shown in the legend ("Male"). */
  name: string
  /** Index of the series in the chart's own series list. */
  seriesIndex: number
  /** Raw, unformatted value at this category. */
  value: number
}

/**
 * What a click resolved to — one bar segment, one slice, one point, or (for a
 * line, where the click can land anywhere in the plot area) a whole category.
 *
 * The top-level fields always name a single series, so a consumer that wants
 * one number has one. {@link F0DataChartPointClick.series} carries everything
 * the click resolved, which for a line is every series at that category — the
 * same rows its tooltip shows.
 */
export interface F0DataChartPointClick {
  /** Interaction surface that resolved the point. */
  source: "pointer" | "keyboard"
  /** Series the mark belongs to, as shown in the legend ("Male"). */
  seriesName: string
  /** Category the mark sits at ("Barcelona office"). Empty for chart types with no category axis. */
  category: string
  /** Raw, unformatted value. Consumers apply their own formatting. */
  value: number
  /**
   * Every number the mark carries, in series order: `[42]` for a bar or a
   * slice, `[x, y]` for a scatter point, `[xIndex, yIndex, value]` for a
   * heatmap cell.
   *
   * {@link value} is the last entry, which is the measure for every type
   * except scatter — there both entries are measures, and quoting only the
   * last one drops half the point. Read this when the chart type has more
   * than one number to say.
   */
  values: number[]
  /**
   * Every series the click resolved, in the order they are configured.
   *
   * A line chart accepts a click anywhere in its plot area, so this is the
   * whole category — one entry per series that has a value there and is
   * switched on in the legend, exactly the rows its axis tooltip shows.
   * Everywhere else a click identifies one mark and this holds that one entry,
   * matching {@link seriesName} and {@link value}.
   */
  series: F0DataChartPointClickSeries[]
  /** Index of the clicked mark within its series. */
  dataIndex: number
  /** Index of the series the mark belongs to. */
  seriesIndex: number
  /**
   * Where a pointer click landed, in viewport coordinates — enough to anchor a
   * floating element without the consumer having to reach for the chart's own
   * geometry. Taken from the touch on a touch device, where the event itself
   * carries no coordinates. Both are 0 for a keyboard-resolved point or if a
   * pointer event carried no coordinates; use {@link source} to distinguish.
   */
  clientX: number
  clientY: number
}

/**
 * Props shared by every `F0DataChart` variant.
 */
interface F0DataChartCommonProps {
  /** Customize or opt out of the empty state shown when data is empty. */
  emptyState?: F0DataChartEmptyStateProps
  /**
   * Reports the chart's live legend visibility after an interactive toggle.
   * Primarily used by accessible companion surfaces that must expose the same
   * data currently shown on the canvas.
   */
  onLegendSelectionChange?: (selected: Record<string, boolean>) => void
  /**
   * Called when the user clicks a single mark (bar segment, slice, point).
   * Omit to leave clicks inert, which is the default for every chart.
   *
   * Line charts accept a click anywhere in the plot area, since a line is too
   * thin to hit — the same allowance their axis-triggered tooltip already
   * makes — and answer with the whole category in
   * {@link F0DataChartPointClick.series}, matching what the tooltip showed.
   */
  onPointClick?: (point: F0DataChartPointClick) => void
}

// ---------------------------------------------------------------------------
// Bar data types
// ---------------------------------------------------------------------------

/**
 * A single data point in a bar chart series.
 * Can be a simple number or an object with value and optional target.
 */
export type F0DataChartBarDataPoint =
  | number
  | {
      value: number
      /** When set, renders a gradient fade from the bar top up to the target value */
      target?: number
      /** Override color for this individual bar. Must be an F0 design token name. */
      color?: ChartColorToken
    }

/**
 * A series of bars to render in the chart.
 */
export interface F0DataChartBarSeries {
  /** Display name used in legend and tooltip */
  name: string
  /** Data points — one per category */
  data: F0DataChartBarDataPoint[]
  /** Override color for this series. Must be an F0 design token name. Falls back to the theme palette. */
  color?: ChartColorToken
}

// ---------------------------------------------------------------------------
// Line data types
// ---------------------------------------------------------------------------

/**
 * A single data point in a line chart series.
 * Can be a simple number or an object with a value.
 */
export type F0DataChartLineDataPoint =
  | number
  | {
      value: number
    }

/** Line interpolation type */
export type F0DataChartLineType = "linear" | "smooth" | "step"

/**
 * A series of data points to render as a line.
 */
export interface F0DataChartLineSeries {
  /** Display name used in legend and tooltip */
  name: string
  /** Data points — one per category */
  data: F0DataChartLineDataPoint[]
  /** Override color for this series. Must be an F0 design token name. Falls back to the theme palette. */
  color?: ChartColorToken
  /** Render this line with a dashed pattern (useful for projections/targets) */
  dashed?: boolean
  /** Override line interpolation for this series */
  lineType?: F0DataChartLineType
  /** Override area fill for this series */
  showArea?: boolean
}

// ---------------------------------------------------------------------------
// Shared base props
// ---------------------------------------------------------------------------

interface F0DataChartBaseProps extends F0DataChartCommonProps {
  /** Labels for the category axis (one per data point) */
  categories: string[]

  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show the background grid lines. @default true */
  showGrid?: boolean
  /** Show value labels on each data point. @default false */
  showLabels?: boolean

  /** Format the value axis tick labels (e.g. `(v) => \`${v}M\`` ) */
  valueFormatter?: (value: number) => string
  /** Format category axis tick labels */
  categoryFormatter?: (value: string) => string

  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Discriminated union: bar variant
// ---------------------------------------------------------------------------

/**
 * Bar chart variant props.
 */
export interface F0DataChartBarProps extends F0DataChartBaseProps {
  /** Chart type */
  type: "bar"
  /** One or more data series to render as bars */
  series: F0DataChartBarSeries[]
  /** Bar orientation. @default "vertical" */
  orientation?: "vertical" | "horizontal"
  /** Stack all series into a single bar per category. @default false */
  stacked?: boolean
  /**
   * When {@link F0DataChartBaseProps.showLabels} is on, hide a category's value
   * labels if the widest value in that category doesn't fit the bar. The whole
   * category drops together (all-or-nothing), so a tight chart never shows a
   * ragged, half-labelled set instead of overlapping numbers. @default true
   */
  hideOverflowingLabels?: boolean
  /**
   * Per-side clearance in pixels the widest value must have before
   * {@link F0DataChartBarProps.hideOverflowingLabels} counts it as fitting.
   * Overrides the default, which is placement-based: **6** for stacked (inside)
   * labels, **0** for labels outside the bar.
   */
  labelFitPadding?: number
  /**
   * With {@link F0DataChartBarProps.hideOverflowingLabels} on, use the widest
   * label as the fit reference for vertical columns and labels outside
   * horizontal bars. If it exceeds the shared allowance, hide every label
   * instead of leaving a ragged, partially labelled chart. Labels inside
   * horizontal stacked segments always fit per segment because their available
   * widths differ. Height overflow is also evaluated per bar. @default true
   */
  hideAllLabelsOnOverflow?: boolean
  /**
   * Draw only as many categories as fit at a readable bar thickness, instead of
   * compressing every one of them into the available height.
   *
   * Opt-in, because it hides data: a windowed chart shows the first N rows in
   * data order and nothing in the chart itself leads to the rest. Set it only
   * where the surrounding UI offers the way back — subscribe to
   * {@link F0DataChartBarProps.onHiddenCategoriesChange} and put a control next
   * to the count, as `F0AnalyticsDashboard` does. Left off, a dense chart stays
   * complete and its bars get thinner, which is the readable-but-honest end of
   * the trade.
   *
   * Ignored by vertical charts, which lay categories out along the width.
   * @default false
   */
  windowCategories?: boolean
  /**
   * Render every category at once, overriding
   * {@link F0DataChartBarProps.windowCategories}.
   *
   * Set this when the reader has asked to see the whole distribution — an
   * expanded or fullscreen view — and accepts thinner bars in exchange. Ignored
   * by vertical charts, which lay categories out along the width.
   * @default false
   */
  showAllCategories?: boolean
  /**
   * Reports how many categories the row window is hiding — `0` when every
   * category is on screen. Fires whenever the count changes, which includes
   * container resizes and {@link F0DataChartBarProps.showAllCategories} being
   * switched on.
   *
   * The chart states the fact rather than rendering an affordance for it: only
   * the surrounding UI knows where a "see everything" control belongs. The
   * dashboard puts it in the widget's description, next to the count.
   */
  onHiddenCategoriesChange?: (hiddenCategoryCount: number) => void
  /**
   * Suggested number of segments on the value axis — lower values draw fewer
   * grid lines. Applies to whichever axis is the value axis (Y for vertical
   * bars, X for horizontal). ECharts rounds to "nice" intervals. @default 2
   */
  valueAxisSplitNumber?: number
  /**
   * Font size in pixels for the value labels. @default 11
   */
  labelFontSize?: number
  /**
   * Formatter for the values shown in the hover tooltip. Defaults to
   * {@link F0DataChartBaseProps.valueFormatter}, so a unit or a currency on the
   * axis reads the same on hover, then to a plain localized number. Set it when
   * the axis has to stay compact ("107.5K") but the tooltip should be exact
   * ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
}

// ---------------------------------------------------------------------------
// Discriminated union: line variant
// ---------------------------------------------------------------------------

/**
 * Line chart variant props.
 */
export interface F0DataChartLineProps extends F0DataChartBaseProps {
  /** Chart type */
  type: "line"
  /** One or more data series to render as lines */
  series: F0DataChartLineSeries[]
  /** Line interpolation type. @default "linear" */
  lineType?: F0DataChartLineType
  /** Show gradient area fill below lines. @default true */
  showArea?: boolean
  /** Show data point dots on the lines. @default false */
  showDots?: boolean
  /**
   * Formatter for the values shown in the hover tooltip. Defaults to
   * {@link F0DataChartBaseProps.valueFormatter}, so a unit or a currency on the
   * axis reads the same on hover, then to a plain localized number. Set it when
   * the axis has to stay compact ("107.5K") but the tooltip should be exact
   * ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
}

// ---------------------------------------------------------------------------
// Funnel data types
// ---------------------------------------------------------------------------

/**
 * A single data point in a funnel chart series.
 * Each point has a value and a stage name.
 */
export interface F0DataChartFunnelDataPoint {
  /** Numeric value for this funnel stage */
  value: number
  /** Stage label (e.g. "Applied", "Phone Screen", "Hired") */
  name: string
  /** Override color for this individual stage. Must be an F0 design token name. */
  color?: ChartColorToken
}

/**
 * A single funnel series with named data points.
 */
export interface F0DataChartFunnelSeries {
  /** Display name used in legend and tooltip */
  name: string
  /** Data points — one per funnel stage */
  data: F0DataChartFunnelDataPoint[]
  /** Override color for the entire series. Must be an F0 design token name. */
  color?: ChartColorToken
}

// ---------------------------------------------------------------------------
// Discriminated union: funnel variant
// ---------------------------------------------------------------------------

/**
 * Funnel chart variant props.
 *
 * Funnels do NOT use category/value axes — stage names come from the data
 * points themselves. This interface is separate from `F0DataChartBaseProps`.
 */
export interface F0DataChartFunnelProps extends F0DataChartCommonProps {
  /** Chart type */
  type: "funnel"
  /** The funnel series to render */
  series: F0DataChartFunnelSeries
  /** Sort direction of funnel stages. @default "descending" */
  sort?: "descending" | "ascending" | "none"
  /** Gap between funnel stages in pixels. @default 0 */
  gap?: number
  /** Funnel orientation. @default "horizontal" */
  orient?: "horizontal" | "vertical"
  /** Show the legend below the chart. @default false */
  showLegend?: boolean
  /** Show value labels on each stage. @default true */
  showLabels?: boolean
  /**
   * Show conversion percentages in labels.
   * Each stage displays its value as a percentage of the first stage.
   * The tooltip also shows step-over-step conversion.
   * @default false
   */
  showConversion?: boolean
  /** Format the value displayed in labels and tooltip */
  valueFormatter?: (value: number) => string
  /**
   * Formatter for the value shown in the hover tooltip. Defaults to
   * {@link valueFormatter}, so a unit or a currency on the labels reads the same
   * on hover, then to a plain localized number. Set it when the labels have to
   * stay compact ("107.5K") but the tooltip should be exact ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
  /**
   * Map stage colors to their values using a gradient scale (light→dark).
   * When enabled, higher values get a more intense color. @default true
   */
  colorScale?: boolean
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Pie data types
// ---------------------------------------------------------------------------

/**
 * A single data point in a pie chart.
 */
export interface F0DataChartPieDataPoint {
  /** Numeric value for this segment */
  value: number
  /** Segment label */
  name: string
  /** Override color for this individual segment. Must be an F0 design token name. */
  color?: ChartColorToken
}

/**
 * A single pie series with named data points.
 */
export interface F0DataChartPieSeries {
  /** Display name used in tooltip */
  name: string
  /** Data points — one per pie segment */
  data: F0DataChartPieDataPoint[]
  /** Override color for the entire series. Must be an F0 design token name. */
  color?: ChartColorToken
}

// ---------------------------------------------------------------------------
// Discriminated union: pie variant
// ---------------------------------------------------------------------------

/**
 * Pie/donut chart variant props.
 *
 * Pies do NOT use category/value axes — segment names come from the data
 * points themselves. This interface is separate from `F0DataChartBaseProps`.
 */
export interface F0DataChartPieProps extends F0DataChartCommonProps {
  /** Chart type */
  type: "pie"
  /** The pie series to render */
  series: F0DataChartPieSeries
  /** Inner radius percentage. 0 = pie, >0 = donut. @default 0 */
  innerRadius?: number
  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show value labels on each segment. @default true */
  showLabels?: boolean
  /** Show percentage in labels. @default false */
  showPercentage?: boolean
  /** Format the value displayed in labels and tooltip */
  valueFormatter?: (value: number) => string
  /**
   * Formatter for the value shown in the hover tooltip. Defaults to
   * {@link valueFormatter}, so a unit or a currency on the labels reads the same
   * on hover, then to a plain localized number. Set it when the labels have to
   * stay compact ("107.5K") but the tooltip should be exact ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Radar data types
// ---------------------------------------------------------------------------

/**
 * A radar chart indicator (axis/dimension).
 */
export interface F0DataChartRadarIndicator {
  /** Name of the axis/dimension (e.g. "Performance", "Engagement") */
  name: string
  /** Maximum value for this axis. @default auto-calculated from data */
  max?: number
}

/**
 * A series of data points for a radar chart.
 */
export interface F0DataChartRadarSeries {
  /** Display name used in legend and tooltip (e.g. "Team A", "Team B") */
  name: string
  /** Values — one per indicator, in the same order */
  data: number[]
  /** Override color for this series. Must be an F0 design token name. */
  color?: ChartColorToken
}

// ---------------------------------------------------------------------------
// Discriminated union: radar variant
// ---------------------------------------------------------------------------

/**
 * Radar chart variant props.
 *
 * Radar charts use a polar coordinate system — no cartesian axes.
 */
export interface F0DataChartRadarProps extends F0DataChartCommonProps {
  /** Chart type */
  type: "radar"
  /** Axes of the radar — defines the dimensions to compare */
  indicators: F0DataChartRadarIndicator[]
  /** Series to compare (one or more) */
  series: F0DataChartRadarSeries[]
  /** Fill the area of each series with semi-transparent color. @default true */
  showArea?: boolean
  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show value labels on each vertex. @default false */
  showLabels?: boolean
  /** Format values in labels and tooltip */
  valueFormatter?: (value: number) => string
  /**
   * Formatter for the value shown in the hover tooltip. Defaults to
   * {@link valueFormatter}, so a unit or a currency on the labels reads the same
   * on hover, then to a plain localized number. Set it when the labels have to
   * stay compact ("107.5K") but the tooltip should be exact ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Discriminated union: gauge variant
// ---------------------------------------------------------------------------

/**
 * Gauge/KPI chart variant props.
 *
 * A single-value gauge indicator — no axes, no legend.
 */
export interface F0DataChartGaugeProps extends F0DataChartCommonProps {
  /** Chart type */
  type: "gauge"
  /** Current value */
  value: number
  /** Minimum value. @default 0 */
  min?: number
  /** Maximum value. @default 100 */
  max?: number
  /** Label shown below the value */
  name?: string
  /** Override color. Must be an F0 design token name. */
  color?: ChartColorToken
  /** Show the numeric value in the center. @default true */
  showValue?: boolean
  /** Format the value displayed */
  valueFormatter?: (value: number) => string
  /**
   * Formatter for the value shown in the hover tooltip. Defaults to
   * {@link valueFormatter}, so a unit or a currency on the labels reads the same
   * on hover, then to a plain localized number. Set it when the labels have to
   * stay compact ("107.5K") but the tooltip should be exact ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Discriminated union: heatmap variant
// ---------------------------------------------------------------------------

/**
 * Heatmap chart variant props.
 *
 * Renders a grid where each cell's color intensity represents a numeric value.
 * Uses two category axes (x for columns, y for rows) and a visualMap for
 * value→color mapping.
 */
export interface F0DataChartHeatmapProps extends F0DataChartCommonProps {
  /** Chart type */
  type: "heatmap"
  /** Column labels (x-axis) */
  xCategories: string[]
  /** Row labels (y-axis) */
  yCategories: string[]
  /** Data as [xIndex, yIndex, value] tuples */
  data: [number, number, number][]
  /** Minimum value for color scale. @default auto from data */
  min?: number
  /** Maximum value for color scale. @default auto from data */
  max?: number
  /** Show value labels inside cells. @default false */
  showLabels?: boolean
  /** Show the visual map (color scale legend). @default false */
  showVisualMap?: boolean
  /** Format values in labels and tooltip */
  valueFormatter?: (value: number) => string
  /**
   * Formatter for the value shown in the hover tooltip. Defaults to
   * {@link valueFormatter}, so a unit or a currency on the labels reads the same
   * on hover, then to a plain localized number. Set it when the labels have to
   * stay compact ("107.5K") but the tooltip should be exact ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Scatter data types
// ---------------------------------------------------------------------------

/**
 * A single point in a scatter series.
 *
 * The bare `[x, y]` tuple is the terse form. The object form additionally
 * carries `label` — the point's identity (e.g. an employee or team name),
 * shown as the tooltip header.
 */
export type F0DataChartScatterDataPoint =
  | [number, number]
  | {
      /** Horizontal position, plotted on the value X axis */
      x: number
      /** Vertical position, plotted on the value Y axis */
      y: number
      /** Identity of this point, used as the tooltip header (e.g. "Ana Ruiz") */
      label?: string
      /** Override color for this individual point. Must be an F0 design token name. */
      color?: ChartColorToken
    }

/**
 * A group of points sharing a color and a legend entry. Use one series per
 * group value to split a scatter by a dimension (e.g. one per department).
 */
export interface F0DataChartScatterSeries {
  /** Display name used in legend and tooltip */
  name: string
  /** Points in this group */
  data: F0DataChartScatterDataPoint[]
  /** Override color for this series. Must be an F0 design token name. Falls back to the theme palette. */
  color?: ChartColorToken
}

// ---------------------------------------------------------------------------
// Discriminated union: scatter variant
// ---------------------------------------------------------------------------

/**
 * Scatter chart variant props.
 *
 * Plots x/y pairs on two value axes to show the relationship between two
 * measures. Unlike bar/line there is no category axis — both axes are
 * continuous — so this interface is separate from `F0DataChartBaseProps`.
 * Pass multiple `series` to color-split the points by a group dimension.
 */
export interface F0DataChartScatterProps extends F0DataChartCommonProps {
  /** Chart type */
  type: "scatter"
  /** One or more point groups. Multiple series render as a color split. */
  series: F0DataChartScatterSeries[]
  /** Point diameter in pixels. @default 12 */
  pointSize?: number
  /**
   * Fit each axis to its data range instead of anchoring it at zero. Turn off
   * to force both axes through the origin. @default true
   */
  scaleAxes?: boolean
  /** Show the legend below the chart. Only rendered with 2+ series. @default true */
  showLegend?: boolean
  /** Show the background grid lines on both axes. @default true */
  showGrid?: boolean
  /** Format the Y axis tick labels */
  valueFormatter?: (value: number) => string
  /** Format the X axis tick labels */
  xValueFormatter?: (value: number) => string
  /**
   * Formatter for the y value shown in the hover tooltip. Defaults to
   * {@link valueFormatter}, so a unit or a currency on the Y axis reads the same
   * on hover, then to a plain localized number. Set it when the axis has to
   * stay compact ("107.5K") but the tooltip should be exact ("107,505").
   */
  tooltipValueFormatter?: (value: number) => string
  /**
   * Formatter for the x value shown in the hover tooltip. Same contract as
   * {@link tooltipValueFormatter}, against {@link xValueFormatter}.
   */
  xTooltipValueFormatter?: (value: number) => string
  /**
   * What the X measure is, e.g. "salary". Labels the x row in the tooltip —
   * a scatter has no headline value, so both coordinates read as rows and
   * need naming, the same way radar names its indicators.
   */
  xAxisName?: string
  /** What the Y measure is, e.g. "tenure". Labels the y row in the tooltip. */
  yAxisName?: string
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Union
// ---------------------------------------------------------------------------

/**
 * Props for the F0DataChart component.
 *
 * A unified chart component that supports bar, line, funnel, pie, radar,
 * gauge, heatmap, and scatter chart types via a discriminated `type` prop.
 */
export type F0DataChartProps =
  | F0DataChartBarProps
  | F0DataChartLineProps
  | F0DataChartFunnelProps
  | F0DataChartPieProps
  | F0DataChartRadarProps
  | F0DataChartGaugeProps
  | F0DataChartHeatmapProps
  | F0DataChartScatterProps
