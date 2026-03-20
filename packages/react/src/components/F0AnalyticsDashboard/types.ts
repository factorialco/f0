import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker/types"

import type {
  ChartColorToken,
  F0DataChartBarSeries,
  F0DataChartFunnelSeries,
  F0DataChartLineSeries,
  F0DataChartPieSeries,
  F0DataChartRadarIndicator,
  F0DataChartRadarSeries,
} from "../F0DataChart"

// ---------------------------------------------------------------------------
// Chart config — the "visual" half of a chart item (no data)
// ---------------------------------------------------------------------------

interface ChartConfigBase {
  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show background grid lines. @default true */
  showGrid?: boolean
  /** Show value labels on each data point. @default false */
  showLabels?: boolean
  /** Format the value axis tick labels */
  valueFormatter?: (value: number) => string
  /** Format category axis tick labels */
  categoryFormatter?: (value: string) => string
}

export interface BarChartConfig extends ChartConfigBase {
  type: "bar"
  /** @default "vertical" */
  orientation?: "vertical" | "horizontal"
  /** Stack all series into a single bar per category. @default false */
  stacked?: boolean
}

export interface LineChartConfig extends ChartConfigBase {
  type: "line"
  /** @default "linear" */
  lineType?: "linear" | "smooth" | "step"
  /** Show gradient area fill below lines. @default true */
  showArea?: boolean
  /** Show data point dots on the lines. @default false */
  showDots?: boolean
}

export interface FunnelChartConfig {
  type: "funnel"
  /** Sort direction of funnel stages. @default "descending" */
  sort?: "descending" | "ascending" | "none"
  /** Funnel orientation. @default "horizontal" */
  orient?: "horizontal" | "vertical"
  /** Show the legend below the chart. @default false */
  showLegend?: boolean
  /** Show value labels on each stage. @default true */
  showLabels?: boolean
  /**
   * Show conversion percentages in labels.
   * Each stage displays its value as a percentage of the first stage.
   * @default false
   */
  showConversion?: boolean
  /** Use a color scale gradient instead of distinct colors. @default true */
  colorScale?: boolean
  /** Format the value displayed in labels and tooltip */
  valueFormatter?: (value: number) => string
}

export interface PieChartConfig {
  type: "pie"
  /** Inner radius ratio (0 = full pie, >0 = donut). @default 0 */
  innerRadius?: number
  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show value labels on each segment. @default true */
  showLabels?: boolean
  /** Show percentage in labels. @default false */
  showPercentage?: boolean
  /** Format the value displayed in labels and tooltip */
  valueFormatter?: (value: number) => string
}

export interface RadarChartConfig {
  type: "radar"
  /** Fill the radar area. @default true */
  showArea?: boolean
  /** Show the legend below the chart. @default true */
  showLegend?: boolean
  /** Show value labels on data points. @default false */
  showLabels?: boolean
  /** Format the value displayed in labels and tooltip */
  valueFormatter?: (value: number) => string
}

export interface GaugeChartConfig {
  type: "gauge"
  /** Minimum value. @default 0 */
  min?: number
  /** Maximum value. @default 100 */
  max?: number
  /** Color token for the gauge arc */
  color?: ChartColorToken
  /** Show the numeric value inside the gauge. @default true */
  showValue?: boolean
  /** Format the value displayed inside the gauge */
  valueFormatter?: (value: number) => string
}

export interface HeatmapChartConfig {
  type: "heatmap"
  /** Minimum value for the color scale */
  min?: number
  /** Maximum value for the color scale */
  max?: number
  /** Show value labels on each cell. @default false */
  showLabels?: boolean
  /** Format the value displayed in cells and tooltip */
  valueFormatter?: (value: number) => string
}

/**
 * Chart display configuration — discriminated on `type`.
 * This object is JSON-serializable (no functions, except optional formatters).
 */
export type DashboardChartConfig =
  | BarChartConfig
  | LineChartConfig
  | FunnelChartConfig
  | PieChartConfig
  | RadarChartConfig
  | GaugeChartConfig
  | HeatmapChartConfig

// ---------------------------------------------------------------------------
// Chart data — the shape returned by a chart item's fetchData
// ---------------------------------------------------------------------------

export interface DashboardChartData {
  /** Category axis labels. Required for bar/line charts. */
  categories?: string[]
  /** X-axis category labels for heatmap charts. */
  xCategories?: string[]
  /** Y-axis category labels for heatmap charts. */
  yCategories?: string[]
  /** Radar chart axis indicators. */
  indicators?: F0DataChartRadarIndicator[]
  /** Chart series data — shape depends on chart type. Omit for heatmaps. */
  series?:
    | F0DataChartBarSeries[]
    | F0DataChartLineSeries[]
    | F0DataChartFunnelSeries
    | F0DataChartPieSeries
    | F0DataChartRadarSeries[]
    | { value: number; name?: string }
  /** Heatmap data points as [xIndex, yIndex, value] tuples. */
  data?: [number, number, number][]
}

// ---------------------------------------------------------------------------
// Dashboard item base — shared by all item types
// ---------------------------------------------------------------------------

export interface DashboardItemBase {
  /** Unique key for React reconciliation and identity */
  id: string
  /** Widget title displayed in the header */
  title: string
  /** Optional description below the title */
  description?: string
  /** Number of grid columns this item spans (1–12). */
  colSpan?: number
  /** Number of grid rows this item spans. */
  rowSpan?: number
  /** Grid column position (0-based). When set, skip auto-packing. */
  x?: number
  /** Grid row position (0-based). When set, skip auto-packing. */
  y?: number
  /**
   * Whether this item receives dashboard-level filters in its fetchData.
   * When false, fetchData receives an empty object.
   * @default true
   */
  useDashboardFilters?: boolean
  /** Item-level filter definitions. Renders a compact filter bar within the card. */
  itemFilters?: FiltersDefinition
  /** Initial values for item-level filters. */
  defaultItemFilters?: FiltersState<FiltersDefinition>
}

// ---------------------------------------------------------------------------
// Chart item
// ---------------------------------------------------------------------------

export interface DashboardChartItem<
  Filters extends FiltersDefinition = FiltersDefinition,
> extends DashboardItemBase {
  type: "chart"
  /** Visual chart configuration (JSON-serializable) */
  chart: DashboardChartConfig
  /**
   * Reserved for future use. Currently all chart cells share the same
   * height derived from the grid column width.
   */
  aspectRatio?: string
  /** Async data fetcher — receives dashboard filters when useDashboardFilters is true */
  fetchData: (filters: FiltersState<Filters>) => Promise<DashboardChartData>
}

// ---------------------------------------------------------------------------
// Metric item
// ---------------------------------------------------------------------------

/** How to format the metric value */
export type MetricFormat =
  | { type: "number" }
  | { type: "currency"; currency?: string }
  | { type: "percent" }
  | { type: "custom"; suffix?: string; prefix?: string }

/** Data returned by a metric item's fetchData */
export interface DashboardMetricData {
  /** The main numeric value displayed in large text */
  value: number
  /** Optional previous value — used to compute a trend indicator */
  previousValue?: number
}

/**
 * A single big-number KPI widget.
 *
 * Displays a large formatted number with optional trend indicator
 * (up/down vs previous value). Receives dashboard filters like any other item.
 */
export interface DashboardMetricItem<
  Filters extends FiltersDefinition = FiltersDefinition,
> extends DashboardItemBase {
  type: "metric"
  /** How to format the value. @default { type: "number" } */
  format?: MetricFormat
  /** Number of decimal places. @default 0 */
  decimals?: number
  /** Async data fetcher — receives dashboard filters */
  fetchData: (filters: FiltersState<Filters>) => Promise<DashboardMetricData>
}

// ---------------------------------------------------------------------------
// Collection item
// ---------------------------------------------------------------------------

/**
 * Minimal collection config — enough to render a table/card/list inside
 * a dashboard widget without its own filter bar.
 *
 * The consumer provides `createSource` which receives the dashboard-level
 * filters and returns a full DataCollectionSourceDefinition. The dashboard
 * calls `useDataCollectionSource` internally.
 */
export interface DashboardCollectionItem<
  Filters extends FiltersDefinition = FiltersDefinition,
> extends DashboardItemBase {
  type: "collection"
  /**
   * Factory that creates a DataCollectionSourceDefinition for this item.
   * Called whenever dashboard filters change.
   * The returned definition should NOT include its own filters/presets
   * (the dashboard provides those globally).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createSource: (filters: FiltersState<Filters>) => any
  /**
   * Visualization configs for the collection (table, card, list, kanban).
   * Same shape as OneDataCollection's `visualizations` prop.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visualizations: ReadonlyArray<any>
}

// ---------------------------------------------------------------------------
// Item union — discriminated on `type`
// ---------------------------------------------------------------------------

/**
 * A single dashboard item. Discriminated on `type`.
 *
 * Currently supports `"chart"`, `"metric"`, and `"collection"`.
 * Future types (e.g. `"custom"`) extend this union.
 */
export type DashboardItem<
  Filters extends FiltersDefinition = FiltersDefinition,
> =
  | DashboardChartItem<Filters>
  | DashboardMetricItem<Filters>
  | DashboardCollectionItem<Filters>

// ---------------------------------------------------------------------------
// Layout change descriptor — emitted by edit mode callbacks
// ---------------------------------------------------------------------------

/**
 * Minimal descriptor of a dashboard item's position and size.
 * Used by `onLayoutChange` so the consumer can reconcile layout
 * edits against its own source-of-truth config items.
 */
export type DashboardItemLayout = {
  id: string
  colSpan: number
  rowSpan: number
  x: number
  y: number
}

// ---------------------------------------------------------------------------
// Root component props
// ---------------------------------------------------------------------------

/**
 * Props for the F0AnalyticsDashboard component.
 *
 * The entire dashboard is defined declaratively via `filters` (optional shared
 * filter definitions), `presets`, and `items` (an ordered array of chart /
 * collection configs).
 *
 * An LLM can generate the full `items` array as JSON (minus the `fetchData`
 * functions) to build dashboards on the fly.
 */
export interface F0AnalyticsDashboardProps<
  Filters extends FiltersDefinition = FiltersDefinition,
> {
  /**
   * Filter definitions for the dashboard-level filter bar.
   * When omitted, no filter bar is rendered.
   */
  filters?: Filters
  /**
   * Preset filter configurations shown as quick-select chips.
   */
  presets?: PresetsDefinition<Filters>
  /**
   * Initial filter values applied when the dashboard first renders.
   */
  defaultFilters?: FiltersState<Filters>
  /**
   * Ordered list of dashboard items to render in the grid.
   * Each item declares its type, visual config, grid span, and data fetcher.
   */
  items: DashboardItem<Filters>[]
  /**
   * When true, enables drag-and-drop reordering, resize, and delete controls.
   */
  editMode?: boolean
  /**
   * Called when items are reordered, resized, or deleted in edit mode.
   * Receives a layout descriptor (ordered list of { id, colSpan }) so
   * the consumer can reconcile against the original config items.
   */
  onLayoutChange?: (layout: DashboardItemLayout[]) => void
}
