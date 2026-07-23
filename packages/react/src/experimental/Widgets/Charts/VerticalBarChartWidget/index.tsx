import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import type { VerticalBarChartProps } from "@/kits/Charts/VerticalBarChart"
import { F0DataChart } from "@/kits/F0DataChart"
import { withSkeleton } from "../../../../lib/skeleton"
import {
  toAxisEchartsOptions,
  toBarSeries,
  toCategories,
  toValueFormatter,
} from "../adapters"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _VerticalBarChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<VerticalBarChartProps>>(
    function VerticalBarChartWidget(props, ref) {
      // VerticalBarChart renders horizontal bars (legacy naming); the value
      // axis is X. Widget default: hide it for a compact look (overridable).
      const {
        data,
        dataConfig,
        valueFormatter,
        xAxis = { hide: true },
        yAxis,
      } = props.chart

      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={
            <F0DataChart
              type="bar"
              orientation="horizontal"
              categories={toCategories(data)}
              series={toBarSeries(dataConfig, data)}
              showLegend={false}
              showLabels={props.chart.label}
              categoryFormatter={yAxis?.tickFormatter}
              valueFormatter={
                valueFormatter
                  ? (value: number) => String(valueFormatter(value))
                  : toValueFormatter(xAxis?.tickFormatter)
              }
              echartsOptions={toAxisEchartsOptions({
                categoryAxis: yAxis,
                valueAxis: xAxis,
                valueAxisName: "x",
              })}
            />
          }
        />
      )
    }
  ),
  ChartContainer.Skeleton
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const VerticalBarChartWidget = experimentalComponent(
  "VerticalBarChartWidget",
  _VerticalBarChartWidget
)
