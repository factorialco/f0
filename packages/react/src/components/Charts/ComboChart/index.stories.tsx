import { Meta } from "@storybook/react-vite"
import { ComboChart } from "./index"

const meta: Meta = {
  title: "Charts/ComboChart",
  component: ComboChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-100 h-52">
        <Story />
      </div>
    ),
  ],
}

export default meta

const teamsDataConfig = {
  headcount: {
    label: "Headcount",
  },
  pv: {
    label: "Page Views",
  },
}

export const Default: Meta<typeof ComboChart<typeof teamsDataConfig>> = {
  args: {
    dataConfig: teamsDataConfig,
    data: [
      { label: "Marketing", values: { headcount: 8, pv: 24 } },
      { label: "Sales", values: { headcount: 100, pv: 14 } },
      { label: "Engineering", values: { headcount: 56, pv: 98 } },
      { label: "Product", values: { headcount: 32, pv: 39 } },
      { label: "Design", values: { headcount: 16, pv: 48 } },
      { label: "Finance", values: { headcount: 12, pv: 38 } },
      { label: "Legal", values: { headcount: 5, pv: 43 } },
    ],
    bar: "headcount",
    line: "pv",
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
  },
}

export const BarOnly: Meta<typeof ComboChart<typeof teamsDataConfig>> = {
  args: {
    dataConfig: teamsDataConfig,
    data: [
      { label: "Marketing", values: { headcount: 8, pv: 24 } },
      { label: "Sales", values: { headcount: 100, pv: 14 } },
      { label: "Engineering", values: { headcount: 56, pv: 98 } },
      { label: "Product", values: { headcount: 32, pv: 39 } },
      { label: "Design", values: { headcount: 16, pv: 48 } },
      { label: "Finance", values: { headcount: 12, pv: 38 } },
      { label: "Legal", values: { headcount: 5, pv: 43 } },
    ],
    bar: "headcount",
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value}`,
    },
  },
}

export const LineOnly: Meta<typeof ComboChart<typeof teamsDataConfig>> = {
  args: {
    dataConfig: teamsDataConfig,
    data: [
      { label: "Marketing", values: { headcount: 8, pv: 24 } },
      { label: "Sales", values: { headcount: 100, pv: 14 } },
      { label: "Engineering", values: { headcount: 56, pv: 98 } },
      { label: "Product", values: { headcount: 32, pv: 39 } },
      { label: "Design", values: { headcount: 16, pv: 48 } },
      { label: "Finance", values: { headcount: 12, pv: 38 } },
      { label: "Legal", values: { headcount: 5, pv: 43 } },
    ],
    line: "pv",
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value}`,
    },
  },
}
