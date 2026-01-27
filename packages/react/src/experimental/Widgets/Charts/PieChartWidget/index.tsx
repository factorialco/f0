import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import { PieChart, PieChartProps } from "../../../../components/Charts/PieChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _PieChartWidget = withSkeleton(
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const PieChartWidget = experimentalComponent(
  "PieChartWidget",
  _PieChartWidget
)
