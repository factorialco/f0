import { forwardRef } from "react"
import {
  RadialProgressChart,
  RadialProgressProps,
} from "../../../../components/Charts/RadialProgressChart"
import { withSkeleton } from "../../../../lib/skeleton"
import { Widget } from "../../Widget"
import { experimentalComponent } from "@/lib/experimental"

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
            <RadialProgressChart {...chart} />
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
