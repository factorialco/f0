import type { Meta } from "@storybook/react-vite"

import { VerticalBarChartProps } from "../../../Charts/VerticalBarChart"
import { Default as VerticalBarChartDefault } from "../../../Charts/VerticalBarChart/__stories__/VerticalBarChart.stories"
import { containerStoryArgs, WidgetDecorator } from "../../storybook-utils"
import { VerticalBarChartWidget } from "../index"

const meta = {
  title: "Kits/Widgets/Charts/VerticalBarChartWidget",
  component: VerticalBarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A Vertical Bar Chart",
    },
    chart: VerticalBarChartDefault.args as VerticalBarChartProps,
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof VerticalBarChartWidget>

export default meta

export const Default = {}
