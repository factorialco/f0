import { forwardRef, ReactNode } from "react"
import { Widget, WidgetProps } from "../Widget"

export type ChartContainerPropsBase = WidgetProps

export type ComposeChartContainerProps<T extends object> = ChartContainerPropsBase & {
  chart: T
}

export const ChartContainer = Object.assign(
  forwardRef<
    HTMLDivElement,
    ChartContainerPropsBase & {
      chart?: ReactNode
    }
  >(function ChartContainer({ chart, summaries, ...props }, ref) {
    return (
      <Widget ref={ref} {...props} summaries={summaries}>
        {chart && <div className="min-h-52 min-w-52 grow pt-2">{chart}</div>}
      </Widget>
    )
  }),

  {
    Skeleton: Widget.Skeleton,
  }
)
