import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import type { LineChartProps } from "@/kits/Charts/LineChart"
import { F0DataChart } from "@/kits/F0DataChart"
import { withSkeleton } from "../../../../lib/skeleton"
import {
  toAxisEchartsOptions,
  toCategories,
  toLineSeries,
  toLineType,
  toValueFormatter,
} from "../adapters"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _LineChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<LineChartProps>>(
    function LineChartWidget(props, ref) {
      // Widget default: hide the value axis for a compact look (overridable)
      const {
        data,
        dataConfig,
        lineType,
        xAxis,
        yAxis = { hide: true },
      } = props.chart

      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={
            <F0DataChart
              type="line"
              categories={toCategories(data)}
              series={toLineSeries(dataConfig, data)}
              lineType={toLineType(lineType)}
              showArea={false}
              showLegend={false}
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
    }
  ),
  ChartContainer.Skeleton
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const LineChartWidget = experimentalComponent(
  "LineChartWidget",
  _LineChartWidget
)
