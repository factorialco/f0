import type * as echarts from "echarts"

/**
 * A single data point in a bar chart series.
 * Can be a simple number or an object with value and optional target.
 */
export type F0BarChartDataPoint =
  | number
  | {
      value: number
      /** When set, renders a gradient fade from the bar top up to the target value */
      target?: number
    }

/**
 * A series of bars to render in the chart.
 */
export interface F0BarChartSeries {
  /** Display name used in legend and tooltip */
  name: string
  /** Data points — one per category */
  data: F0BarChartDataPoint[]
  /** Override color for this series (hex or CSS color). Falls back to the theme palette. */
  color?: string
}

/**
 * Props for the F0BarChart component.
 *
 * Renders a bar chart using ECharts with a typed, LLM-friendly API.
 * Supports vertical and horizontal orientations, multiple series,
 * and an optional target gradient effect per data point.
 */
export interface F0BarChartProps {
  /** Labels for the category axis (one per group of bars) */
  categories: string[]
  /** One or more data series to render as bars */
  series: F0BarChartSeries[]

  /** Bar orientation. @default "vertical" */
  orientation?: "vertical" | "horizontal"

  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show the background grid lines. @default true */
  showGrid?: boolean
  /** Show value labels on each bar. @default false */
  showLabels?: boolean

  /** Format the value axis tick labels (e.g. `(v) => \`${v}M\`` ) */
  valueFormatter?: (value: number) => string
  /** Format category axis tick labels */
  categoryFormatter?: (value: string) => string

  /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
  echartsOptions?: Partial<echarts.EChartsOption>
}
