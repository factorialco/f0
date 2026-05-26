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

export interface ChatDashboardRadarChartConfig extends ChatDashboardChartConfigBase {
  type: "radar"
  showArea?: boolean
}

export interface ChatDashboardPieChartConfig {
  type: "pie"
  innerRadius?: number
  showLegend?: boolean
  showLabels?: boolean
  showPercentage?: boolean
  valueFormat?: FormatPreset
}

export interface ChatDashboardGaugeChartConfig {
  type: "gauge"
  min?: number
  max?: number
  showValue?: boolean
  valueFormat?: FormatPreset
}

export interface ChatDashboardHeatmapChartConfig {
  type: "heatmap"
  min?: number
  max?: number
  showLabels?: boolean
  showVisualMap?: boolean
  valueFormat?: FormatPreset
}

export type ChatDashboardChartConfig =
  | ChatDashboardBarChartConfig
  | ChatDashboardLineChartConfig
  | ChatDashboardFunnelChartConfig
  | ChatDashboardRadarChartConfig
  | ChatDashboardPieChartConfig
  | ChatDashboardGaugeChartConfig
  | ChatDashboardHeatmapChartConfig

// ---------------------------------------------------------------------------
// Metric format — reuses the same shape as F0AnalyticsDashboard's MetricFormat
// ---------------------------------------------------------------------------

export type ChatDashboardMetricFormat =
  | { type: "number" }
  | { type: "currency"; currency?: string }
  | { type: "percent" }
  | { type: "custom"; suffix?: string; prefix?: string }

// ---------------------------------------------------------------------------
// Fetch spec — describes how to obtain data server-side (no raw data)
// ---------------------------------------------------------------------------

export interface DashboardFetchSpec {
  fetch: Array<{ toolId: string; args: Record<string, unknown> }>
  query: string | null
  columnLabels?: Record<string, string>
}

// ---------------------------------------------------------------------------
// Computation specs — declarative data transformations applied server-side
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

export interface RadarComputation {
  datasetId: string
  seriesColumn: string
  indicators: Array<{ column: string; label: string; max?: number }>
  limit?: number
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

export interface PieComputation {
  datasetId: string
  nameColumn: string
  valueColumn: string
  aggregation: AggregationType
  sortBy?: "value" | "name"
  sortOrder?: "asc" | "desc"
  limit?: number
}

export interface GaugeComputation {
  datasetId: string
  aggregation: AggregationType
  column?: string
  min?: number
  max?: number
  name?: string
}

export interface HeatmapComputation {
  datasetId: string
  xAxis: string
  yAxis: string
  valueColumn: string
  aggregation: AggregationType
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
// Navigation filter definitions — dashboard-level controls (date navigator)
// ---------------------------------------------------------------------------

/** Granularity options exposed by F0's `OneDateNavigator`. */
export type ChatDashboardDateNavigationGranularity =
  | "day"
  | "week"
  | "month"
  | "quarter"
  | "halfyear"
  | "year"
  | "range"

/**
 * Navigation filter definitions emitted by the LLM via `displayDashboard`.
 * Discriminated on `type`. Today the only supported variant is
 * `dateNavigation`, which renders F0's date navigator above the dashboard
 * grid. The `column` and `datasetId` are agent-side metadata used by the
 * compute SQL builder; they are stripped before reaching F0AnalyticsDashboard.
 */
export type ChatDashboardNavigationFilterDefinition = {
  type: "dateNavigation"
  label: string
  column: string
  datasetId: string
  granularities: ChatDashboardDateNavigationGranularity[]
  defaultGranularity?: ChatDashboardDateNavigationGranularity
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
  /**
   * Optional header tooltip explaining what the column represents — formula
   * or aggregation if derived, source if direct. Forwarded to the underlying
   * table column's `info` prop. Omit when the label is self-explanatory.
   */
  info?: string
}

// ---------------------------------------------------------------------------
// Dashboard items — discriminated union on `type`
// ---------------------------------------------------------------------------

interface ChatDashboardItemBase {
  id: string
  title: string
  description?: string
  /** Source attribution shown as a subtitle (e.g. "Based on 8 feedbacks from 3 evaluators") */
  sourceDescription?: string
  /**
   * Optional markdown explanation of how this item's data was calculated.
   * Surfaced via the per-item dropdown's "Where does this data come from?"
   * entry, which opens a dialog rendering the markdown. Omit to hide the
   * entry — backwards compatible with persisted dashboards.
   */
  explanation?: string
  /**
   * @deprecated Ignored by the renderer — items auto-size to equal-width
   * slots based on the per-row slot budget. Kept for backwards compatibility
   * with persisted layouts; safe to leave unset.
   */
  colSpan?: number
  /**
   * @deprecated Use `itemHeight` (pixels) instead. Kept for backwards
   * compatibility with persisted layouts: when `itemHeight` is unset, the
   * grid still reads `rowSpan * 48` as a fallback.
   */
  rowSpan?: number
  /**
   * Item height in pixels. Takes precedence over `rowSpan` when set. The
   * row height in the grid is `max(itemHeight)` across all items in the row.
   * Persisted resizes write a pixel-accurate value here; agent-generated
   * dashboards should pick from a constrained set of values that match the
   * data shape (more rows / more categories → taller).
   */
  itemHeight?: number
  x?: number
  y?: number
}

export interface ChatDashboardChartItem extends ChatDashboardItemBase {
  type: "chart"
  chart: ChatDashboardChartConfig
  computation:
    | ChartComputation
    | RadarComputation
    | PieComputation
    | GaugeComputation
    | HeatmapComputation
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
 * Contains fetchSpecs that describe how to obtain data server-side —
 * no raw data is included. Fully JSON-serializable.
 */
export interface ChatDashboardConfig {
  /** Dashboard title displayed in the canvas header and chat report card */
  title: string
  /**
   * AI-generated 1–2 sentence summary of what the dashboard shows. Displayed
   * under the title in the canvas header. Optional at the type level so
   * legacy persisted dashboards (before the agent started emitting it) still
   * parse; the agent schema makes it required going forward.
   */
  description?: string
  /** Filter definitions — keys become filter IDs */
  filters?: Record<string, ChatDashboardFilterDefinition>
  /**
   * Dashboard-level navigation filters (e.g. date navigator). Keys become
   * filter IDs. Rendered above the grid by F0AnalyticsDashboard's
   * `navigationFilters` slot.
   */
  navigationFilters?: Record<string, ChatDashboardNavigationFilterDefinition>
  /** Ordered list of dashboard items with computation specs */
  items: ChatDashboardItem[]
  /** Fetch specs for server-side data retrieval, keyed by datasetId */
  fetchSpecs: Record<string, DashboardFetchSpec>
}

/**
 * Creator + last-edited metadata for a saved dashboard. Returned by
 * `DashboardCanvasActions.getMetadata` so the header can render the author
 * avatar and the freshness signal only once a dashboard has been persisted.
 *
 * `title` and `description` are also returned: once a dashboard has an id
 * the backend is the source of truth and may diverge from what's stored in
 * the chat history (e.g. someone renamed the dashboard from the Analytics
 * list page since this conversation was first opened). The header prefers
 * these values over the ones baked into `content` / `config`.
 */
export type DashboardMetadata = {
  /**
   * Latest persisted title. When present, the header displays this instead
   * of `content.title` so the chat-history snapshot never shadows the
   * authoritative backend copy.
   */
  title?: string
  /**
   * Latest persisted description. Same rationale as `title` — takes
   * precedence over `config.description` once the dashboard is saved.
   */
  description?: string
  creator: {
    firstName: string
    lastName: string
    /** Optional avatar image URL. Falls back to initials when omitted. */
    src?: string
  }
  /**
   * Last edited timestamp. Accepts `Date` or an ISO-8601 string so host apps
   * can forward backend payloads verbatim without pre-parsing.
   */
  lastEdited: Date | string
}

/**
 * Callbacks for persisting dashboards externally (beyond chat history).
 */
export type DashboardCanvasActions = {
  /** Update an existing saved dashboard */
  save: (
    id: string,
    category: string,
    config: ChatDashboardConfig
  ) => Promise<void>
  /**
   * Create a new saved dashboard. Returns the new dashboard's id and
   * category so subsequent edits can call `save` (which requires both).
   * Returning void / undefined leaves the canvas in its current state.
   */
  create: (
    title: string,
    description: string,
    config: ChatDashboardConfig,
    category?: string
  ) => Promise<{ id: string; category: string } | void>
  /**
   * Fetch creator + last-edited metadata for a saved dashboard. The header
   * calls this lazily, only when the current dashboard has a
   * `savedDashboardId`. Returning `void` signals "no metadata available" —
   * the header will skip rendering the avatar and the last-edited row
   * instead of showing a placeholder.
   */
  getMetadata?: (id: string) => Promise<DashboardMetadata | void>
}
