import { forwardRef } from "react"
import { LineChart, LineChartProps } from "../../../../components/Charts/LineChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export const LineChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<LineChartProps>>(
    function LineChartWidget(props, ref) {
      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={<LineChart yAxis={{ hide: true }} {...props.chart} />}
        />
      )
    }
  ),
  ChartContainer.Skeleton
)
