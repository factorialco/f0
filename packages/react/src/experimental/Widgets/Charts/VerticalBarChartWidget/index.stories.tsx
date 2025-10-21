import type { Meta } from "@storybook/react-vite"

import { VerticalBarChartProps } from "../../../../components/Charts/VerticalBarChart"
import { Default as VerticalBarChartDefault } from "../../../../components/Charts/VerticalBarChart/index.stories"
import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"
import { VerticalBarChartWidget } from "./index"

const meta = {
  title: "Widgets/Charts/VerticalBarChartWidget",
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
