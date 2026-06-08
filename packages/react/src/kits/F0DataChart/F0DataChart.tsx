import type { F0DataChartProps } from "./types"

import { BarChart } from "./components/BarChart/BarChart"
import { DataChartEmptyStateView } from "./components/EmptyState/DataChartEmptyStateView"
import { FunnelChart } from "./components/FunnelChart/FunnelChart"
import { GaugeChart } from "./components/GaugeChart/GaugeChart"
import { HeatmapChart } from "./components/HeatmapChart/HeatmapChart"
import { LineChart } from "./components/LineChart/LineChart"
import { PieChart } from "./components/PieChart/PieChart"
import { RadarChart } from "./components/RadarChart/RadarChart"
import { isDataChartEmpty } from "./utils/isDataChartEmpty"

export const F0DataChart = (props: F0DataChartProps) => {
  if (!props.emptyState?.disabled && isDataChartEmpty(props)) {
    return (
      <DataChartEmptyStateView
        chartType={props.type}
        emptyState={props.emptyState}
      />
    )
  }

  switch (props.type) {
    case "bar":
      return <BarChart {...props} />
    case "line":
      return <LineChart {...props} />
    case "funnel":
      return <FunnelChart {...props} />
    case "pie":
      return <PieChart {...props} />
    case "radar":
      return <RadarChart {...props} />
    case "gauge":
      return <GaugeChart {...props} />
    case "heatmap":
      return <HeatmapChart {...props} />
  }
}
