import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "../../../../components/Charts/VerticalBarChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _VerticalBarChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<VerticalBarChartProps>>(
    function VerticalBarChartWidget(props, ref) {
      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={<VerticalBarChart xAxis={{ hide: true }} {...props.chart} />}
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
