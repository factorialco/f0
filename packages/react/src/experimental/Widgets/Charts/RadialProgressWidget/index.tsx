import { forwardRef } from "react"
import {
  RadialProgressChart,
  RadialProgressProps,
} from "../../../../components/Charts/RadialProgressChart"
import { withSkeleton } from "../../../../lib/skeleton"
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

export const RadialProgressWidget = withSkeleton(
  forwardRef<HTMLDivElement, RadialProgressWidgetProps>(function RadialProgressWidget(
    { header, chart },
    ref
  ) {
    return (
      <Widget ref={ref} header={header}>
        <div className="flex h-40 items-center justify-center">
          <RadialProgressChart {...chart} />
        </div>
      </Widget>
    )
  }),
  Widget.Skeleton
)
