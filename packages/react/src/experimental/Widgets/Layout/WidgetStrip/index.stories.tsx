import type { Meta, StoryObj } from "@storybook/react-vite"

import { AreaChartWidget } from "../../Charts/AreaChartWidget"
import { WidgetStrip } from "./index"

import { AreaChartProps } from "../../../../components/Charts/AreaChart"
import AreaChartWidgetStoriesMeta from "../../Charts/AreaChartWidget/index.stories"
import { BarChartWidget } from "../../Charts/BarChartWidget"
import BarChartWidgetStoriesMeta from "../../Charts/BarChartWidget/index.stories"
import { ComposeChartContainerProps } from "../../Charts/ChartContainer"
import { LineChartWidget } from "../../Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "../../Charts/LineChartWidget/index.stories"
import { PieChartWidget } from "../../Charts/PieChartWidget"
import PieChartWidgetStoriesMeta from "../../Charts/PieChartWidget/index.stories"
import { Widget } from "../../Widget"

/* eslint-disable react/jsx-key */
const widgets = [
  <AreaChartWidget
    {...(AreaChartWidgetStoriesMeta.args as ComposeChartContainerProps<AreaChartProps>)}
  />,
  <LineChartWidget {...LineChartWidgetStoriesMeta.args} />,
  <PieChartWidget {...PieChartWidgetStoriesMeta.args} />,
  <BarChartWidget {...BarChartWidgetStoriesMeta.args} />,
  <Widget header={{ title: "A form widget", subtitle: "Enter your data" }}>
    <p>
      Never gonna give you up. Never gonna let you down. Never gonna turn around and desert you.
    </p>
  </Widget>,
]
/* eslint-enable react/jsx-key */

const meta = {
  title: "Widgets/Layout/WidgetStrip",
  component: WidgetStrip,
  tags: ["autodocs", "experimental"],
  args: {
    children: Array.from({ length: 4 }, (_, i) => widgets[i % widgets.length]),
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof WidgetStrip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Single: Story = {
  args: {
    children: [widgets[0]],
  },
}

export const Overflow: Story = {
  args: {
    children: Array.from({ length: 4 }, (_, i) => widgets[i % widgets.length]),
  },
}

const headcountDataConfig = {
  employees: { label: "Employees" },
}

const headcountData = [
  { label: "July", values: { employees: 100 } },
  { label: "August", values: { employees: 140 } },
  { label: "September", values: { employees: 210 } },
  { label: "October", values: { employees: 240 } },
  { label: "November", values: { employees: 230 } },
  { label: "December", values: { employees: 250 } },
]

const promotionDataConfig = {
  employeeRate: { label: "Employees", color: "hsl(var(--chart-2))" },
}

const promotionData = [
  { label: "July", values: { employeeRate: 9 } },
  { label: "August", values: { employeeRate: 30 } },
  { label: "September", values: { employeeRate: 12 } },
  { label: "October", values: { employeeRate: 11 } },
  { label: "November", values: { employeeRate: 15 } },
  { label: "December", values: { employeeRate: 20 } },
]

const turnoverDataConfig = {
  rate: { label: "Rate", color: "hsl(var(--chart-3))" },
}

const turnoverData = [
  { label: "July", values: { rate: 0.4 } },
  { label: "August", values: { rate: 0.6 } },
  { label: "September", values: { rate: 1 } },
  { label: "October", values: { rate: 1.1 } },
  { label: "November", values: { rate: 1 } },
  { label: "December", values: { rate: 1.6 } },
]

export const EmployeesList: Story = {
  args: {
    children: [
      <AreaChartWidget
        key="headcount"
        {...AreaChartWidgetStoriesMeta.args}
        header={{
          title: "Headcount",
          subtitle: undefined,
          link: undefined,
        }}
        summaries={[
          {
            label: "Now",
            value: 250,
          },
          {
            label: "Last month",
            value: 230,
          },
        ]}
        chart={{
          lineType: "natural",
          dataConfig: headcountDataConfig,
          data: headcountData,
          xAxis: AreaChartWidgetStoriesMeta.args!.chart!.xAxis,
          yAxis: { hide: true },
        }}
      />,
      <AreaChartWidget
        {...AreaChartWidgetStoriesMeta.args}
        key="promotion"
        header={{
          title: "Promotion rate",
          subtitle: undefined,
          link: undefined,
        }}
        summaries={[
          {
            label: "Rate",
            value: 20,
            postfixUnit: "%",
          },
        ]}
        chart={{
          lineType: "natural",
          dataConfig: promotionDataConfig,
          data: promotionData,
          xAxis: AreaChartWidgetStoriesMeta.args!.chart!.xAxis,
          yAxis: { hide: true },
        }}
      />,
      <AreaChartWidget
        key="turnover"
        {...AreaChartWidgetStoriesMeta.args}
        header={{
          title: "Turnover rate",
          subtitle: undefined,
          link: undefined,
        }}
        chart={{
          lineType: "natural",
          dataConfig: turnoverDataConfig,
          data: turnoverData,
          xAxis: AreaChartWidgetStoriesMeta.args!.chart!.xAxis,
          yAxis: { hide: true },
        }}
      />,
    ],
  },
}

export const Skeleton: Story = {
  render() {
    return <WidgetStrip.Skeleton />
  },
}
