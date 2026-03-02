import type * as echarts from "echarts"

import type { ChartColorToken } from "./utils/colors"

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

interface F0DataChartBaseProps {
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
export interface F0DataChartFunnelProps {
  /** Chart type */
  type: "funnel"
  /** The funnel series to render */
  series: F0DataChartFunnelSeries
  /** Sort direction of funnel stages. @default "descending" */
  sort?: "descending" | "ascending" | "none"
  /** Gap between funnel stages in pixels. @default 4 */
  gap?: number
  /** Funnel orientation. @default "horizontal" */
  orient?: "horizontal" | "vertical"
  /** Position of stage labels. @default "outside" */
  labelPosition?: "inside" | "outside"
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
  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}

// ---------------------------------------------------------------------------
// Union
// ---------------------------------------------------------------------------

/**
 * Props for the F0DataChart component.
 *
 * A unified chart component that supports bar, line, and funnel chart types
 * via a discriminated `type` prop.
 */
export type F0DataChartProps =
  | F0DataChartBarProps
  | F0DataChartLineProps
  | F0DataChartFunnelProps
