import type { F0DataChartLineType } from "@/components/F0DataChart"

// ---------------------------------------------------------------------------
// Simplified chart series — no colors, no per-series overrides
// ---------------------------------------------------------------------------

export interface ChatChartSeries {
  name: string
  data: number[]
}

// ---------------------------------------------------------------------------
// Base types
// ---------------------------------------------------------------------------

/** Shared card fields for all chart types */
interface ChatChartCardBase {
  /** Chart title displayed in the card header */
  title: string
  /** Optional description displayed below the title */
  description?: string
}

/** Card base + category axis (bar, line) */
interface ChatChartCategoryBase extends ChatChartCardBase {
  /** Labels for the category axis (one per data point) */
  categories: string[]
}

// ---------------------------------------------------------------------------
// Discriminated union for chart configs sent by the LLM
// ---------------------------------------------------------------------------

export interface ChatChartBarConfig extends ChatChartCategoryBase {
  type: "bar"
  series: ChatChartSeries[]
  /** Stack all series into a single bar per category. @default false */
  stacked?: boolean
}

export interface ChatChartLineConfig extends ChatChartCategoryBase {
  type: "line"
  series: ChatChartSeries[]
  /** Line interpolation type. @default "linear" */
  lineType?: F0DataChartLineType
  /** Show gradient area fill below lines. @default true */
  showArea?: boolean
  /** Show data point dots on the lines. @default false */
  showDots?: boolean
}

export interface ChatChartFunnelConfig extends ChatChartCardBase {
  type: "funnel"
  /** Named stages of the funnel (e.g. Applied → Hired) */
  stages: { name: string; value: number }[]
  /** Show conversion percentages between stages. @default false */
  showConversion?: boolean
}

export interface ChatChartPieConfig extends ChatChartCardBase {
  type: "pie"
  /** Named segments of the pie */
  segments: { name: string; value: number }[]
  /** Render as a donut (hollow center). @default false */
  donut?: boolean
}

export interface ChatChartRadarConfig extends ChatChartCardBase {
  type: "radar"
  /** Axes of the radar chart */
  indicators: { name: string; max?: number }[]
  series: ChatChartSeries[]
}

export interface ChatChartGaugeConfig extends ChatChartCardBase {
  type: "gauge"
  /** Current value to display */
  value: number
  /** Minimum value. @default 0 */
  min?: number
  /** Maximum value. @default 100 */
  max?: number
  /** Label for the gauge metric */
  name?: string
}

export interface ChatChartHeatmapConfig extends ChatChartCardBase {
  type: "heatmap"
  /** Labels for the X axis */
  xCategories: string[]
  /** Labels for the Y axis */
  yCategories: string[]
  /** Data tuples [xIndex, yIndex, value] */
  data: [number, number, number][]
}

/**
 * Union of chart configs the LLM can send via `displayChart`.
 */
export type ChatChartConfig =
  | ChatChartBarConfig
  | ChatChartLineConfig
  | ChatChartFunnelConfig
  | ChatChartPieConfig
  | ChatChartRadarConfig
  | ChatChartGaugeConfig
  | ChatChartHeatmapConfig

/**
 * Props for the F0ChatChart component.
 * Renders a chart inside a card widget in the AI chat.
 */
export type F0ChatChartProps = ChatChartConfig
