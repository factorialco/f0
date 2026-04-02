import type { Meta } from "@storybook/react-vite"

import { LineChartProps } from "@/kits/Charts/LineChart"
import { Default as LineChartDefault } from "@/kits/Charts/LineChart/__stories__/LineChart.stories"
import { containerStoryArgs, WidgetDecorator } from "../../storybook-utils"
import { LineChartWidget } from "../index"

const meta = {
  title: "Widget/Charts/LineChartWidget",
  component: LineChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A line chart",
    },
    chart: LineChartDefault.args as LineChartProps,
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof LineChartWidget>

export default meta

export const Default = {}
