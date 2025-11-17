import { experimentalComponent } from "@/lib/experimental"
import { F0ECharts as _F0ECharts } from "./F0ECharts"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0ECharts = experimentalComponent<typeof _F0ECharts>(
  "F0ECharts",
  _F0ECharts
)
