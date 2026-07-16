import type {
  ChartColorToken,
  F0DataChartBarSeries,
  F0DataChartFunnelSeries,
  F0DataChartLineSeries,
  F0DataChartPieSeries,
  F0DataChartRadarIndicator,
  F0DataChartRadarSeries,
} from "@/kits/F0DataChart"
import type { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/patterns/OneFilterPicker/types"

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
  /** Show the visual map legend. @default false */
  showVisualMap?: boolean
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
  /**
   * Optional markdown explanation of how this item's data is calculated.
   * When set, the per-item dropdown menu shows a "Where does this data come
   * from?" entry that opens a dialog rendering this content as markdown.
   * Omit to hide the entry entirely (backwards compatible).
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
   * row height in the grid is `max(itemHeight)` across all items in the row,
   * so a single tall item makes the whole row tall. When neither
   * `itemHeight` nor `rowSpan` is provided, the grid falls back to a
   * type-specific default (chart 336, metric 144, collection 480).
   *
   * Should be a multiple of 48 to align with the grid's snap unit, but the
   * field accepts any positive number for pixel-accurate persisted resizes.
   */
  itemHeight?: number
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
  /**
   * Custom value formatter — takes precedence over `format`/`decimals`.
   * The built-in presets format with the browser locale; this lets the
   * consumer control locale and currency, mirroring the chart configs'
   * `valueFormatter`.
   */
  valueFormatter?: (value: number) => string
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
 *
 * Both `rowSpan` (legacy, in 48-unit increments) and `itemHeight`
 * (canonical, in pixels) are emitted. New consumers should persist
 * `itemHeight` for pixel-accurate resize round-tripping.
 */
export type DashboardItemLayout = {
  id: string
  colSpan: number
  rowSpan: number
  itemHeight: number
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
   * When true and `filters` is not yet provided, a skeleton placeholder is
   * rendered in the filter bar slot. Use this when the consumer already knows
   * filters will appear but their definitions / options are still loading,
   * so the UI does not shift once the real filter bar takes its place.
   */
  filtersLoading?: boolean
  /**
   * Preset filter configurations shown as quick-select chips.
   */
  presets?: PresetsDefinition<Filters>
  /**
   * Initial filter values applied when the dashboard first renders.
   * Used only when `filtersValue` is not provided.
   */
  defaultFilters?: FiltersState<Filters>
  /**
   * Applied dashboard-level filter values.
   * When provided, filter state is controlled by the consumer: reflect
   * `onFiltersChange` back into this prop or applied filters will not move.
   * Decide controlled vs uncontrolled before first render — switching modes
   * mid-life desyncs state (standard React controlled-input semantics).
   */
  filtersValue?: FiltersState<Filters>
  /**
   * Called when applied dashboard-level filters change through Apply, Clear,
   * chip removal, or preset selection.
   */
  onFiltersChange?: (value: FiltersState<Filters>) => void
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
  /**
   * Show a dashboard-level export button (PDF/Excel).
   * @default false
   */
  enableExport?: boolean
  /**
   * Called when the export function becomes available (or undefined on unmount).
   * Allows a parent to trigger export imperatively without rendering the
   * built-in ExportDropdown.
   */
  /**
   * Custom filename for the exported Excel file (without extension).
   * @default "dashboard"
   */
  exportFilename?: string
  onExportReady?: (exportFn: (() => Promise<void>) | undefined) => void
  /** Incrementing counter that forces the grid to reset to initial layout (used for discard). */
  resetKey?: number
  /** Called when a chart item's type is changed (e.g. bar → line) */
  onTransformChart?: (
    itemId: string,
    newType: string,
    orientation?: "vertical" | "horizontal"
  ) => void
  /**
   * Navigation filter definitions (e.g. date-navigator).
   * Rendered above the grid alongside the regular filter bar.
   */
  navigationFilters?: NavigationFiltersDefinition
}
