import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const BarChartWidget = experimentalComponent(
  "BarChartWidget",
  withSkeleton(BarChartContainer, ChartContainer.Skeleton)
)
