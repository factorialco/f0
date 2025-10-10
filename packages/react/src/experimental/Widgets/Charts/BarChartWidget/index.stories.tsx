import type { Meta } from "@storybook/react-vite"

import { BarChartProps } from "../../../../components/Charts/BarChart"
import { Default as BarChartDefault } from "../../../../components/Charts/BarChart/index.stories"
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"
import { BarChartWidget } from "./index"

const meta = {
  title: "Widgets/Charts/BarChartWidget",
  component: BarChartWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A bar chart",
    },
    chart: BarChartDefault.args as BarChartProps,
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof BarChartWidget>

export default meta

export const Default = {}
