import { experimentalComponent } from "@/lib/experimental"

import { F0DataChart as _F0DataChart } from "./F0DataChart"

export type {
  F0DataChartBarDataPoint,
  F0DataChartBarProps,
  F0DataChartBarSeries,
  F0DataChartFunnelDataPoint,
  F0DataChartFunnelProps,
  F0DataChartFunnelSeries,
  F0DataChartGaugeProps,
  F0DataChartHeatmapProps,
  F0DataChartLineDataPoint,
  F0DataChartLineProps,
  F0DataChartLineSeries,
  F0DataChartLineType,
  F0DataChartPieDataPoint,
  F0DataChartPieProps,
  F0DataChartPieSeries,
  F0DataChartProps,
  F0DataChartRadarIndicator,
  F0DataChartRadarProps,
  F0DataChartRadarSeries,
} from "./types"

export { type ChartColorToken, chartColorTokens } from "./utils/colors"
export type { ChartTheme } from "./utils/theme"
export {
  BarChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
} from "./skeletons"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0DataChart = experimentalComponent<typeof _F0DataChart>(
  "F0DataChart",
  _F0DataChart
)
