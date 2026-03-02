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
// Union
// ---------------------------------------------------------------------------

/**
 * Props for the F0DataChart component.
 *
 * A unified chart component that supports bar and line chart types
 * via a discriminated `type` prop.
 */
export type F0DataChartProps = F0DataChartBarProps | F0DataChartLineProps
