import { forwardRef } from "react"

import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ChartContainerPropsBase } from "../ChartContainer"

export const SummariesWidget = withSkeleton(
  forwardRef<HTMLDivElement, ChartContainerPropsBase>(
    function SummariesWidget(props, ref) {
      return <ChartContainer ref={ref} {...props} chart={null} />
    }
  ),
  ChartContainer.Skeleton
)
