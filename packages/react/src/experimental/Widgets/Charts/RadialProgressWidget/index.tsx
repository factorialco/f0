import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import type { RadialProgressProps } from "@/kits/Charts/RadialProgressChart"
import { F0DataChart } from "@/kits/F0DataChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { toChartColorToken } from "../adapters"
import { Widget } from "../../Widget"

export type RadialProgressWidgetProps = {
  header: {
    title: string
    subtitle?: string
    info?: string
    link?: { title: string; url: string }
  }
  chart: RadialProgressProps
}

const _RadialProgressWidget = withSkeleton(
  forwardRef<HTMLDivElement, RadialProgressWidgetProps>(
    function RadialProgressWidget({ header, chart }, ref) {
      return (
        <Widget ref={ref} header={header}>
          <div className="flex h-40 items-center justify-center">
            <F0DataChart
              type="gauge"
              value={chart.value}
              max={chart.max}
              color={toChartColorToken(chart.color)}
              name={chart.overview?.label}
              showValue={Boolean(chart.overview)}
              valueFormatter={
                chart.overview
                  ? () => String(chart.overview!.number)
                  : undefined
              }
            />
          </div>
        </Widget>
      )
    }
  ),
  Widget.Skeleton
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const RadialProgressWidget = experimentalComponent(
  "RadialProgressWidget",
  _RadialProgressWidget
)
