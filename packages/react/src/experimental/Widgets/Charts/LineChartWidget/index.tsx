import { forwardRef } from "react"
import { LineChart, LineChartProps } from "@/kits/Charts/LineChart"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _LineChartWidget = withSkeleton(
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const LineChartWidget = experimentalComponent(
  "LineChartWidget",
  _LineChartWidget
)
