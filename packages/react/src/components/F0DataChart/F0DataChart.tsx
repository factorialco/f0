import type { F0DataChartProps } from "./types"

import { BarChart } from "./components/BarChart/BarChart"
import { FunnelChart } from "./components/FunnelChart/FunnelChart"
import { LineChart } from "./components/LineChart/LineChart"

export const F0DataChart = (props: F0DataChartProps) => {
  switch (props.type) {
    case "bar":
      return <BarChart {...props} />
    case "line":
      return <LineChart {...props} />
    case "funnel":
      return <FunnelChart {...props} />
  }
}
