import type { Meta, StoryObj } from "@storybook/react-vite"

import { AreaChartProps } from "../../../Charts/AreaChart"
import { Default as AreaChartDefault } from "../../../Charts/AreaChart/__stories__/AreaChart.stories"
import { containerStoryArgs, WidgetDecorator } from "../../storybook-utils"
import { AreaChartWidget } from "../index"

const meta: Meta<typeof AreaChartWidget> = {
  title: "Kits/Widgets/Charts/AreaChartWidget",
  component: AreaChartWidget,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
    chromatic: { diffThreshold: 0.5 },
  },
  args: {
    ...containerStoryArgs,
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
    },
    chart: AreaChartDefault.args as AreaChartProps,
  },
  decorators: [WidgetDecorator],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithYAxis: Story = {
  args: {
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
    },
    chart: {
      ...(AreaChartDefault.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}

export const WithComment: Story = {
  args: {
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
      comment: "44.000 $",
    },
    chart: {
      ...(AreaChartDefault.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}

export const WithBlur: Story = {
  args: {
    canBeBlurred: true,
    header: {
      ...containerStoryArgs.header,
      title: "An area chart",
      comment: "44.000 $",
    },
    chart: {
      ...(AreaChartDefault.args as AreaChartProps),
      yAxis: {
        hide: false,
      },
    },
  },
}
