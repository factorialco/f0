import { ComponentProps, forwardRef } from "react"

import { ChartItem } from "~/packages/react/components/Charts/utils/types"
import { AreaChartWidget } from "~/packages/react/experimental/Widgets/Charts/AreaChartWidget"
import { ChartWidgetEmptyState } from "~/packages/react/experimental/Widgets/ChartWidgetEmptyState"
import { ChartConfig } from "~/packages/react/ui/chart"

export interface PerformanceInsightType {
  title: string
  name: string
  performanceValue?: string
  comment?: string
  data?: ChartItem<ChartConfig>[]
  link: string
  hasAccess: boolean
}

export const PerformanceInsight = forwardRef<
  HTMLDivElement,
  PerformanceInsightType
>(function PerformanceInsight(
  { title, name, data, performanceValue, comment, link, hasAccess },
  ref
) {
  if (!hasAccess) {
    return (
      <ChartWidgetEmptyState
        title={title}
        content={`See how ${name}'s performance evolved over time`}
        buttonLabel="Try it for free"
        type="bar-chart"
      />
    )
  }

  const chart: ComponentProps<typeof AreaChartWidget>["chart"] = {
    data: data ?? [],
    lineType: "linear",
    xAxis: {},
    yAxis: {
      ticks: [1, 3, 5],
      domain: [1, 5],
    },
    dataConfig: {
      performance: {
        label: "Performance review results",
        color: "hsl(var(--chart-1))",
      },
    },
    marginTop: 12,
  }

  return (
    <AreaChartWidget
      ref={ref}
      header={{
        title,
        comment: `${performanceValue} - ${comment}`,
        link: { title: "Go", url: link },
      }}
      chart={chart}
    />
  )
})
