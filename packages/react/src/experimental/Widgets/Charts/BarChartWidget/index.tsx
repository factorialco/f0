import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import type { BarChartProps } from "@/kits/Charts/BarChart"
import { F0DataChart } from "@/kits/F0DataChart"
import { withSkeleton } from "../../../../lib/skeleton"
import {
  toAxisEchartsOptions,
  toBarSeries,
  toCategories,
  toValueFormatter,
} from "../adapters"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const BarChartContainer = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<BarChartProps>
>(function BarChartContainer(props, ref) {
  // Widget default: hide the value axis for a compact look (overridable)
  const { data, dataConfig, type, xAxis, yAxis = { hide: true } } = props.chart

  return (
    <ChartContainer
      ref={ref}
      {...props}
      chart={
        <F0DataChart
          type="bar"
          categories={toCategories(data)}
          series={toBarSeries(dataConfig, data)}
          stacked={type === "stacked" || type === "stacked-by-sign"}
          showLegend={props.chart.legend ?? false}
          showLabels={props.chart.label}
          categoryFormatter={xAxis?.tickFormatter}
          valueFormatter={toValueFormatter(yAxis?.tickFormatter)}
          echartsOptions={toAxisEchartsOptions({
            categoryAxis: xAxis,
            valueAxis: yAxis,
            valueAxisName: "y",
          })}
        />
      }
    />
  )
})

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const BarChartWidget = experimentalComponent(
  "BarChartWidget",
  withSkeleton(BarChartContainer, ChartContainer.Skeleton)
)
