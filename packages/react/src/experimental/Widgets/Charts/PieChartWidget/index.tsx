import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import type { PieChartProps } from "@/kits/Charts/PieChart"
import { F0DataChart } from "@/kits/F0DataChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { toChartColorToken } from "../adapters"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

const _PieChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, ComposeChartContainerProps<PieChartProps>>(
    function PieChartWidget(props, ref) {
      const { data, dataConfig } = props.chart

      return (
        <ChartContainer
          ref={ref}
          {...props}
          chart={
            <F0DataChart
              type="pie"
              // Donut ring, matching the deprecated Charts PieChart default
              innerRadius={70}
              showLabels={false}
              series={{
                name: "",
                data: data.map((item) => ({
                  name: item.label,
                  value: item.value,
                  color:
                    toChartColorToken(item.color) ??
                    toChartColorToken(dataConfig[item.label]?.color),
                })),
              }}
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
export const PieChartWidget = experimentalComponent(
  "PieChartWidget",
  _PieChartWidget
)
