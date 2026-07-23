import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import type { AreaChartProps } from "@/kits/Charts/AreaChart"
import { F0DataChart } from "@/kits/F0DataChart"
import { usePrivacyMode } from "@/lib/privacyMode"
import { withSkeleton } from "../../../../lib/skeleton"
import {
  toAxisEchartsOptions,
  toCategories,
  toLineSeries,
  toLineType,
  toValueFormatter,
} from "../adapters"
import { ChartContainer, ComposeChartContainerProps } from "../ChartContainer"

export interface AreaChartWidgetProps extends ComposeChartContainerProps<AreaChartProps> {
  canBeBlurred?: boolean
}

const _AreaChartWidget = withSkeleton(
  forwardRef<HTMLDivElement, AreaChartWidgetProps>(function AreaChartWidget(
    { canBeBlurred, ...props },
    ref
  ) {
    const { enabled: privacyModeEnabled } = usePrivacyMode()
    // Privacy mode: mask value labels and disable the tooltip, mirroring the
    // deprecated Charts AreaChart behavior for sensitive data (e.g. salaries)
    const blurred = Boolean(canBeBlurred && privacyModeEnabled)

    const newContainerProps = {
      ...props,
      header: {
        ...props.header,
        canBeBlurred,
      },
    }

    // Widget default: hide the value axis for a compact look (overridable)
    const {
      data,
      dataConfig,
      lineType,
      xAxis,
      yAxis = { hide: true },
    } = props.chart

    return (
      <ChartContainer
        ref={ref}
        {...newContainerProps}
        chart={
          <F0DataChart
            type="line"
            categories={toCategories(data)}
            series={toLineSeries(dataConfig, data)}
            lineType={toLineType(lineType)}
            showArea
            showLegend={false}
            categoryFormatter={xAxis?.tickFormatter}
            valueFormatter={
              blurred ? () => "**" : toValueFormatter(yAxis?.tickFormatter)
            }
            echartsOptions={{
              ...toAxisEchartsOptions({
                categoryAxis: xAxis,
                valueAxis: yAxis,
                valueAxisName: "y",
              }),
              ...(blurred ? { tooltip: { show: false } } : {}),
            }}
          />
        }
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
