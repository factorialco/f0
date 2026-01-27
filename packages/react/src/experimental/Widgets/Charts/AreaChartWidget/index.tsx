import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import {
  AreaChart,
  AreaChartProps,
} from "../../../../components/Charts/AreaChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export interface AreaChartWidgetProps extends ComposeChartContainerProps<AreaChartProps> {
  canBeBlurred?: boolean
}

const _AreaChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, AreaChartWidgetProps>(function AreaChartWidget(
    { canBeBlurred, ...props },
    ref
  ) {
    const newContainerProps = {
      ...props,
      header: {
        ...props.header,
        canBeBlurred,
      },
    }

    const newPropsChart = {
      ...props.chart,
      yAxis: props.chart.yAxis ? { ...props.chart.yAxis } : { hide: true },
    }

    return (
      <ChartContainer
        ref={ref}
        {...newContainerProps}
        chart={<AreaChart {...newPropsChart} canBeBlurred={canBeBlurred} />}
      />
    )
  }),
  ChartContainer.Skeleton
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const AreaChartWidget = experimentalComponent(
  "AreaChartWidget",
  _AreaChartWidget
)
