import type { Meta, StoryObj } from "@storybook/react-vite"

import { AreaChartProps } from "@/kits/Charts/AreaChart"
import { AreaChartWidget } from "@/kits/WidgetCharts/AreaChartWidget"
import AreaChartWidgetStoriesMeta from "@/kits/WidgetCharts/AreaChartWidget/__stories__/AreaChartWidget.stories"
import { BarChartWidget } from "@/kits/WidgetCharts/BarChartWidget"
import BarChartWidgetStoriesMeta from "@/kits/WidgetCharts/BarChartWidget/__stories__/BarChartWidget.stories"
import { ComposeChartContainerProps } from "@/kits/WidgetCharts/ChartContainer"
import { LineChartWidget } from "@/kits/WidgetCharts/LineChartWidget"
import LineChartWidgetStoriesMeta from "@/kits/WidgetCharts/LineChartWidget/__stories__/LineChartWidget.stories"
import { PieChartWidget } from "@/kits/WidgetCharts/PieChartWidget"
import PieChartWidgetStoriesMeta from "@/kits/WidgetCharts/PieChartWidget/__stories__/PieChartWidget.stories"
import { RadialProgressWidget } from "@/kits/WidgetCharts/RadialProgressWidget"
import RadialProgressWidgetStoriesMeta from "@/kits/WidgetCharts/RadialProgressWidget/__stories__/RadialProgressWidget.stories"
import { VerticalBarChartWidget } from "@/kits/WidgetCharts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "@/kits/WidgetCharts/VerticalBarChartWidget/__stories__/VerticalBarChartWidget.stories"
import { Widget } from "../../Widget"
import { Dashboard } from "./index"

/* eslint-disable react/jsx-key */
const widgets = [
  <AreaChartWidget
    {...(AreaChartWidgetStoriesMeta.args as ComposeChartContainerProps<AreaChartProps>)}
  />,
  <Widget header={{ title: "A form widget" }}>
    <p>
      Never gonna give you up. Never gonna let you down. Never gonna turn around
      and desert you.
    </p>
  </Widget>,
  <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
  <BarChartWidget {...BarChartWidgetStoriesMeta.args} />,
  <PieChartWidget {...PieChartWidgetStoriesMeta.args} />,
  <VerticalBarChartWidget {...VerticalBarChartWidgetStoriesMeta.args} />,
  <RadialProgressWidget {...RadialProgressWidgetStoriesMeta.args} />,
]
/* eslint-enable react/jsx-key */

const meta = {
  title: "Kits/Widgets/Layout/Dashboard",
  component: Dashboard,
  tags: ["autodocs", "experimental"],
  argTypes: {
    widgetWidth: {
      control: "select",
      options: [undefined, "sm", "md", "lg"],
    },
  },
  args: {
    widgetWidth: "sm",
    children: Array.from({ length: 20 }, (_, i) => widgets[i % widgets.length]),
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Skeleton: Story = {
  render() {
    return <Dashboard.Skeleton />
  },
}

export const Small: Story = {
  args: {
    children: Array.from({ length: 4 }, (_, i) => widgets[i % widgets.length]),
  },
}
