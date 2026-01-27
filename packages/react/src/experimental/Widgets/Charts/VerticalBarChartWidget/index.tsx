import { forwardRef } from "react"

import {
  VerticalBarChart,
  VerticalBarChartProps,
} from "../../../../components/Charts/VerticalBarChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const VerticalBarChartWidget = withSkeleton(
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
