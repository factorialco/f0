import { forwardRef } from "react"

import { PieChart, PieChartProps } from "../../../../components/Charts/PieChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const PieChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<PieChartProps>>(
    function PieChartWidget(props, ref) {
      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={<PieChart {...props.chart} />}
        />
      )
    }
  ),
  ChartContainer.Skeleton
)
