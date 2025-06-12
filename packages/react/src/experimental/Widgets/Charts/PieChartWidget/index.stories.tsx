import type { Meta } from "@storybook/react-vite"

import { containerStoryArgs, WidgetDecorator } from "../storybook-utils"
import { PieChartWidget } from "./index"

const meta = {
  title: "Widgets/Charts/PieChartWidget",
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
    chart: {
      dataConfig: {
        january: {
          label: "January",
        },
        february: {
          label: "February",
        },
        march: {
          label: "March",
        },
        april: {
          label: "April",
        },
        may: {
          label: "May",
        },
      },
      data: [
        { label: "january", value: 186 },
        { label: "february", value: 305 },
        { label: "march", value: 237 },
        { label: "april", value: 73 },
        { label: "may", value: 209 },
      ],
    },
  },
  decorators: [WidgetDecorator],
} satisfies Meta<typeof PieChartWidget>

export default meta

export const Default = {}
