import type { Meta } from "@storybook/react-vite"

import { LineChart } from "./index"

const singleDataConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
}

const meta: Meta<typeof LineChart<typeof singleDataConfig>> = {
  component: LineChart,
  title: "Charts/LineChart",
  argTypes: {
    lineType: {
      control: { type: "select" },
      options: ["natural", "linear"],
      description: "Determines the type of line curve",
    },
  },
  args: {
    lineType: "natural",
  },
  decorators: [
    (Story) => (
      <div className="h-52 w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default: Meta<typeof LineChart<typeof singleDataConfig>> = {
  args: {
    dataConfig: singleDataConfig,
    xAxis: {
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: true,
      tickFormatter: (value: string) =>
        `${Number.isNaN(parseFloat(value)) ? value : (parseFloat(value) / 100).toFixed(2) + " €"}`,
    },
    data: [
      { label: "January", values: { desktop: 186 } },
      { label: "February", values: { desktop: 305 } },
      { label: "March", values: { desktop: 237 } },
      { label: "April", values: { desktop: 73 } },
      { label: "May", values: { desktop: 209 } },
      { label: "June", values: { desktop: 214 } },
    ],
  },
}

const multiDataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
    dashed: true,
  },
}

export const MultipleLines: Meta<typeof LineChart<typeof multiDataConfig>> = {
  args: {
    dataConfig: multiDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    data: [
      { label: "January", values: { desktop: 186, mobile: 120 } },
      { label: "February", values: { desktop: 305, mobile: 180 } },
      { label: "March", values: { desktop: 237, mobile: 150 } },
      { label: "April", values: { desktop: 73, mobile: 90 } },
      { label: "May", values: { desktop: 209, mobile: 160 } },
      { label: "June", values: { desktop: 214, mobile: 200 } },
    ],
  },
}
