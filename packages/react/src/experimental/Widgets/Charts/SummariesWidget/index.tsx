import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import { withSkeleton } from "../../../../lib/skeleton"
import { ChartContainer, ChartContainerPropsBase } from "../ChartContainer"

const _SummariesWidget = withSkeleton(
  forwardRef<HTMLDivElement, ChartContainerPropsBase>(
    function SummariesWidget(props, ref) {
      return <ChartContainer ref={ref} {...props} chart={null} />
    }
  ),
  ChartContainer.Skeleton
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const SummariesWidget = experimentalComponent(
  "SummariesWidget",
  _SummariesWidget
)
