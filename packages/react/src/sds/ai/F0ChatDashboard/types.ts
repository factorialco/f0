// ---------------------------------------------------------------------------
// Format presets — JSON-serializable value formatting instructions
// ---------------------------------------------------------------------------

/**
 * A preset formatting instruction the LLM can specify instead of a
 * real formatter function. The wrapper component maps these to actual
 * `(value: number) => string` functions at render time.
 */
export type FormatPreset =
  | { type: "number" }
  | { type: "currency"; currency?: string }
  | { type: "percent" }
  | { type: "compact" }

// ---------------------------------------------------------------------------
// Chart config — the visual config part (no data, no functions)
// ---------------------------------------------------------------------------

interface ChatDashboardChartConfigBase {
  showLegend?: boolean
  showGrid?: boolean
  showLabels?: boolean
  valueFormat?: FormatPreset
}

export interface ChatDashboardBarChartConfig extends ChatDashboardChartConfigBase {
  type: "bar"
  orientation?: "vertical" | "horizontal"
  stacked?: boolean
}

export interface ChatDashboardLineChartConfig extends ChatDashboardChartConfigBase {
  type: "line"
  lineType?: "linear" | "smooth" | "step"
  showArea?: boolean
  showDots?: boolean
}

export interface ChatDashboardFunnelChartConfig {
  type: "funnel"
  sort?: "descending" | "ascending" | "none"
  orient?: "horizontal" | "vertical"
  labelPosition?: "inside" | "outside"
  showLegend?: boolean
  showLabels?: boolean
  showConversion?: boolean
  valueFormat?: FormatPreset
}

export type ChatDashboardChartConfig =
  | ChatDashboardBarChartConfig
  | ChatDashboardLineChartConfig
  | ChatDashboardFunnelChartConfig

// ---------------------------------------------------------------------------
// Metric format — reuses the same shape as F0AnalyticsDashboard's MetricFormat
// ---------------------------------------------------------------------------

export type ChatDashboardMetricFormat =
  | { type: "number" }
  | { type: "currency"; currency?: string }
  | { type: "percent" }
  | { type: "custom"; suffix?: string; prefix?: string }

// ---------------------------------------------------------------------------
// Dataset — raw data from queryData, injected by the backend
// ---------------------------------------------------------------------------

export interface ChatDashboardDataset {
  columns: string[]
  rows: Record<string, unknown>[]
  columnLabels?: Record<string, string>
}

// ---------------------------------------------------------------------------
// Computation specs — declarative data transformations applied client-side
// ---------------------------------------------------------------------------

export type AggregationType =
  | "count"
  | "sum"
  | "avg"
  | "min"
  | "max"
  | "countDistinct"

export interface ChartComputation {
  datasetId: string
  xAxis: string
  yAxis: string
  aggregation: AggregationType
  series?: string
  sortBy?: "value" | "category"
  sortOrder?: "asc" | "desc"
  limit?: number
}

export interface MetricComputation {
  datasetId: string
  aggregation: AggregationType
  column?: string
}

export interface CollectionComputation {
  datasetId: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
  limit?: number
}

// ---------------------------------------------------------------------------
// Filter definitions — LLM declares which columns are filterable
// ---------------------------------------------------------------------------

export interface ChatDashboardFilterDefinition {
  type: "in"
  label: string
  column: string
  datasetId: string
}

// ---------------------------------------------------------------------------
// Collection column definition
// ---------------------------------------------------------------------------

export interface ChatDashboardColumn {
  /** Column key — must match a key in each row object */
  id: string
  /** Display header label */
  label: string
  /** Optional fixed width in pixels */
  width?: number
}

// ---------------------------------------------------------------------------
// Dashboard items — discriminated union on `type`
// ---------------------------------------------------------------------------

interface ChatDashboardItemBase {
  id: string
  title: string
  description?: string
  colSpan?: 1 | 2 | 3
}

export interface ChatDashboardChartItem extends ChatDashboardItemBase {
  type: "chart"
  chart: ChatDashboardChartConfig
  computation: ChartComputation
}

export interface ChatDashboardMetricItem extends ChatDashboardItemBase {
  type: "metric"
  format?: ChatDashboardMetricFormat
  decimals?: number
  computation: MetricComputation
}

export interface ChatDashboardCollectionItem extends ChatDashboardItemBase {
  type: "collection"
  columns: ChatDashboardColumn[]
  computation: CollectionComputation
}

export type ChatDashboardItem =
  | ChatDashboardChartItem
  | ChatDashboardMetricItem
  | ChatDashboardCollectionItem

// ---------------------------------------------------------------------------
// Root config — the full dashboard payload received from the backend
// ---------------------------------------------------------------------------

/**
 * Complete dashboard configuration received via `displayDashboard`.
 * The backend injects `datasets` from requestContext — the LLM only sends
 * the declarative config (title, filters, items with computation specs).
 * Fully JSON-serializable — no functions, no callbacks.
 */
export interface ChatDashboardConfig {
  /** Dashboard title displayed in the canvas header and chat report card */
  title: string
  /** Optional description */
  description?: string
  /** Filter definitions — keys become filter IDs */
  filters?: Record<string, ChatDashboardFilterDefinition>
  /** Ordered list of dashboard items with computation specs */
  items: ChatDashboardItem[]
  /** Raw datasets injected by the backend from requestContext */
  datasets?: Record<string, ChatDashboardDataset>
}
