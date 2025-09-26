import ReactECharts from "echarts-for-react"
import * as echarts from "echarts/core"
import { theme } from "./theme"

export const Chart = ({ options }: { options: echarts.EChartsCoreOption }) => {
  return <ReactECharts option={options} theme={theme} />
}
