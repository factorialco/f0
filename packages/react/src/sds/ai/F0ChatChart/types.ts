import type { F0DataChartLineType } from "@/components/F0DataChart"

// ---------------------------------------------------------------------------
// Simplified chart series — no colors, no per-series overrides
// ---------------------------------------------------------------------------

export interface ChatChartSeries {
  name: string
  data: number[]
}

// ---------------------------------------------------------------------------
// Discriminated union for chart configs sent by the LLM
// ---------------------------------------------------------------------------

interface ChatChartBase {
  /** Chart title displayed in the card header */
  title: string
  /** Optional description displayed below the title */
  description?: string
  /** Labels for the category axis (one per data point) */
  categories: string[]
}

export interface ChatChartBarConfig extends ChatChartBase {
  type: "bar"
  series: ChatChartSeries[]
  /** Stack all series into a single bar per category. @default false */
  stacked?: boolean
}

export interface ChatChartLineConfig extends ChatChartBase {
  type: "line"
  series: ChatChartSeries[]
  /** Line interpolation type. @default "linear" */
  lineType?: F0DataChartLineType
  /** Show gradient area fill below lines. @default true */
  showArea?: boolean
  /** Show data point dots on the lines. @default false */
  showDots?: boolean
}

/**
 * Union of chart configs the LLM can send via `displayChart`.
 * Only bar and line are supported for now.
 */
export type ChatChartConfig = ChatChartBarConfig | ChatChartLineConfig

/**
 * Props for the F0ChatChart component.
 * Renders a chart inside a card widget in the AI chat.
 */
export type F0ChatChartProps = ChatChartConfig
