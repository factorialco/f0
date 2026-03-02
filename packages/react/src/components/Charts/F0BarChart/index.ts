import { experimentalComponent } from "@/lib/experimental"

import { F0BarChart as _F0BarChart } from "./F0BarChart"

export type {
  F0BarChartDataPoint,
  F0BarChartProps,
  F0BarChartSeries,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0BarChart = experimentalComponent<typeof _F0BarChart>(
  "F0BarChart",
  _F0BarChart
)
