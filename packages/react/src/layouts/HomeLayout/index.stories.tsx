import type { Meta, StoryObj } from "@storybook/react-vite"

import { AreaChartWidget } from "@/experimental/Widgets/Charts/AreaChartWidget"
import AreaChartWidgetStoriesMeta from "@/kits/WidgetCharts/AreaChartWidget/__stories__/AreaChartWidget.stories"
import { BarChartWidget } from "@/experimental/Widgets/Charts/BarChartWidget"
import BarChartWidgetStoriesMeta from "@/kits/WidgetCharts/BarChartWidget/__stories__/BarChartWidget.stories"
import { ComposeChartContainerProps } from "@/experimental/Widgets/Charts/ChartContainer"
import { LineChartWidget } from "@/experimental/Widgets/Charts/LineChartWidget"
import LineChartWidgetStoriesMeta from "@/kits/WidgetCharts/LineChartWidget/__stories__/LineChartWidget.stories"
import { RadialProgressWidget } from "@/experimental/Widgets/Charts/RadialProgressWidget"
import RadialProgressWidgetStoriesMeta from "@/kits/WidgetCharts/RadialProgressWidget/__stories__/RadialProgressWidget.stories"
import { VerticalBarChartWidget } from "@/experimental/Widgets/Charts/VerticalBarChartWidget"
import VerticalBarChartWidgetStoriesMeta from "@/kits/WidgetCharts/VerticalBarChartWidget/__stories__/VerticalBarChartWidget.stories"
import {
  WidgetInboxList,
  WidgetInboxListProps,
} from "@/experimental/Widgets/Content/Lists/WidgetInboxList"
import { Default as WidgetInboxListDefaultStory } from "@/experimental/Widgets/Content/Lists/WidgetInboxList/index.stories"
import { Widget } from "@/experimental/Widgets/Widget"
import { Placeholder } from "@/lib/storybook-utils/placeholder"

import { AreaChartProps } from "../../components/Charts/AreaChart"
import { HomeLayout } from "./index"

const widgets = [
  <AreaChartWidget
    key="area-chart"
    {...(AreaChartWidgetStoriesMeta.args as ComposeChartContainerProps<AreaChartProps>)}
  />,
  <Widget key="never-gonna" header={{ title: "A form widget" }}>
    <WidgetInboxList
      {...(WidgetInboxListDefaultStory.args as WidgetInboxListProps)}
    />
  </Widget>,
  <LineChartWidget key="line-chart" {...LineChartWidgetStoriesMeta.args} />,
  <BarChartWidget key="bar-chart" {...BarChartWidgetStoriesMeta.args} />,
  <VerticalBarChartWidget
    key="vertical-bar-chart"
    {...VerticalBarChartWidgetStoriesMeta.args}
  />,
  <RadialProgressWidget
    key="radial-progress"
    {...RadialProgressWidgetStoriesMeta.args}
  />,
]

const meta = {
  title: "HomeLayout",
  component: HomeLayout,
  tags: ["autodocs"],
  args: {
    children: (
      <div>
        <Placeholder className="h-[1500px]">Content</Placeholder>
      </div>
    ),
    widgets: Array.from({ length: 6 }, (_, i) => widgets[i]),
  },
} satisfies Meta<typeof HomeLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: meta.args,
  globals: {
    viewport: {
      value: "reset",
      isRotated: false,
    },
  },
}

export const Mobile: Story = {
  globals: {
    viewport: {
      value: "iphone14pro",
      isRotated: false,
    },
  },
}

export const Tablet: Story = {
  globals: {
    viewport: {
      value: "ipad",
      isRotated: false,
    },
  },
}
