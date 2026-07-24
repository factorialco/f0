// Shell card (plug-and-play, no AI coupling)
export { F0CanvasCard } from "./F0CanvasCard"
export type { F0CanvasCardProps } from "./F0CanvasCard"

// Registry (reads canvasEntities from F0AiChat context)
export { useCanvasEntity } from "./registry"

// Contract types
export type {
  CanvasContent,
  CanvasContentBase,
  CanvasEntityDefinition,
  CanvasActions,
  DashboardCanvasContent,
  FormCanvasContent,
  DataDownloadCanvasContent,
  DataDownloadDataset,
  DashboardCanvasActions,
  DashboardMetadata,
  ChatDashboardConfig,
  ChatDashboardItem,
  ChatDashboardChartItem,
  ChatDashboardMetricItem,
  ChatDashboardCollectionItem,
  ChatDashboardChartConfig,
  ChatDashboardBarChartConfig,
  ChatDashboardLineChartConfig,
  ChatDashboardFunnelChartConfig,
  ChatDashboardRadarChartConfig,
  ChatDashboardPieChartConfig,
  ChatDashboardGaugeChartConfig,
  ChatDashboardHeatmapChartConfig,
  ChatDashboardMetricFormat,
  ChatDashboardFilterDefinition,
  ChatDashboardNavigationFilterDefinition,
  ChatDashboardDateNavigationGranularity,
  ChatDashboardColumn,
  DashboardFetchSpec,
  FormatPreset,
  AggregationType,
  ChartComputation,
  MetricComputation,
  RadarComputation,
  PieComputation,
  GaugeComputation,
  HeatmapComputation,
  CollectionComputation,
} from "./types"
