import { forwardRef } from "react"

import { BarChart, BarChartProps } from "../../../../components/Charts/BarChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const BarChartContainer = forwardRef<
  HTMLDivElement,
  ComposeChartContainerProps<BarChartProps>
>(function BarChartContainer(props, ref) {
  return (
    <ChartContainer
      ref={ref}
      {...props}
      chart={<BarChart yAxis={{ hide: true }} {...props.chart} />}
    />
  )
})

export const BarChartWidget = withSkeleton(
  BarChartContainer,
  ChartContainer.Skeleton
)
