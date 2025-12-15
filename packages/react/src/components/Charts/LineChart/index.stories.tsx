import type { Meta } from "@storybook/react-vite"

import { LineChart } from "./index"

const meta: Meta = {
  component: LineChart,
  title: "Charts/LineChart",
  argTypes: {
    lineType: {
      control: { type: "select", options: ["natural", "linear"] },
      description: "Determines the type of line curve",
      defaultValue: "natural",
    },
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

const timeToHireDataConfig = {
  timeToHire: {
    label: "Time to hire",
  },
}

export const Default: Meta<typeof LineChart<typeof timeToHireDataConfig>> = {
  args: {
    dataConfig: timeToHireDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value} days`,
    },
    data: [
      { label: "January", values: { timeToHire: 24 } },
      { label: "February", values: { timeToHire: 17 } },
      { label: "March", values: { timeToHire: 25 } },
      { label: "April", values: { timeToHire: 30 } },
      { label: "May", values: { timeToHire: 10 } },
      { label: "June", values: { timeToHire: 26 } },
    ],
    lineType: "linear",
  },
}

const timeToHireBySeniorityDataConfig = {
  junior: {
    label: "Junior",
  },
  mid: {
    label: "Mid",
  },
  senior: {
    label: "Senior",
  },
}

export const MultipleLines: Meta<typeof LineChart<typeof timeToHireBySeniorityDataConfig>> = {
  args: {
    dataConfig: timeToHireBySeniorityDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value} days`,
    },
    data: [
      {
        label: "January",
        values: { junior: 18, mid: 28, senior: 45 },
      },
      {
        label: "February",
        values: { junior: 15, mid: 25, senior: 42 },
      },
      {
        label: "March",
        values: { junior: 28, mid: 30, senior: 55 },
      },
      {
        label: "April",
        values: { junior: 16, mid: 26, senior: 40 },
      },
      {
        label: "May",
        values: { junior: 14, mid: 24, senior: 38 },
      },
      {
        label: "June",
        values: { junior: 20, mid: 24, senior: 44 },
      },
    ],
    lineType: "linear",
  },
}
