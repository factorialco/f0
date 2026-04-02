import type { Meta } from "@storybook/react-vite"

import { PieChartProps } from "@/kits/Charts/PieChart"
import { Default as PieChartDefault } from "@/kits/Charts/PieChart/__stories__/PieChart.stories"
import { containerStoryArgs, WidgetDecorator } from "../../storybook-utils"
import { PieChartWidget } from "../index"

const meta = {
  title: "Widget/Charts/PieChartWidget",
  component: PieChartWidget,
  parameters: {
    layout: "centered",
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
  tags: ["autodocs", "experimental"],
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "A pie chart",
    },
    chart: PieChartDefault.args as PieChartProps,
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof PieChartWidget>

export default meta

export const Default = {}
