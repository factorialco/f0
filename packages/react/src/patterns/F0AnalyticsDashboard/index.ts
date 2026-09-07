import { experimentalComponent } from "@/lib/experimental"

import { F0AnalyticsDashboard as _F0AnalyticsDashboard } from "./F0AnalyticsDashboard"

export type {
  BarChartConfig,
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
  DashboardCollectionItem,
  DashboardCustomItem,
  DashboardItem,
  DashboardItemBase,
  DashboardItemFiltersConfig,
  DashboardItemFiltersDefinition,
  DashboardItemFiltersState,
  DashboardLocationConfig,
  DashboardLocationData,
  DashboardLocationDetailRow,
  DashboardLocationDetailValue,
  DashboardLocationDetailValueTone,
  DashboardLocationExportLabels,
  DashboardLocationItem,
  DashboardLocationPoint,
  DashboardLocationSections,
  DashboardLocationSummaryMetric,
  DashboardLocationSummaryTone,
  DashboardLocationTimelineData,
  DashboardMetricData,
  DashboardMetricItem,
  F0AnalyticsDashboardAskAiTarget,
  F0AnalyticsDashboardAskAiTargetWithQuote,
  F0AnalyticsDashboardPointClick,
  F0AnalyticsDashboardProps,
  FunnelChartConfig,
  GaugeChartConfig,
  HeatmapChartConfig,
  InfoHintContent,
  LineChartConfig,
  MetricFormat,
  PieChartConfig,
  RadarChartConfig,
  ScatterChartConfig,
} from "./types"
export {
  dashboardLocationDetailValueTones,
  dashboardLocationSummaryTones,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AnalyticsDashboard = experimentalComponent(
  "F0AnalyticsDashboard",
  _F0AnalyticsDashboard
)
