import { experimentalComponent } from "@/lib/experimental"

import { F0AnalyticsDashboard as _F0AnalyticsDashboard } from "./F0AnalyticsDashboard"

export type {
  BarChartConfig,
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
  DashboardCollectionItem,
  DashboardItem,
  DashboardItemBase,
  DashboardMetricData,
  DashboardMetricItem,
  F0AnalyticsDashboardProps,
  LineChartConfig,
  MetricFormat,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AnalyticsDashboard = experimentalComponent(
  "F0AnalyticsDashboard",
  _F0AnalyticsDashboard
)
