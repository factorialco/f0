import { Meta } from "@storybook/react-vite"
import { VerticalBarChart } from "./index"

const meta: Meta = {
  title: "Charts/VerticalBarChart",
  component: VerticalBarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-96 w-full">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showRatio: {
      control: {
        type: "boolean",
      },
    },
  },
}

export default meta

const hiresDataConfig = {
  hires: {
    label: "Successful hires",
  },
}

export const Default: Meta<typeof VerticalBarChart<typeof hiresDataConfig>> = {
  args: {
    dataConfig: hiresDataConfig,
    data: [
      { label: "Sarah Johnson", values: { hires: 28 } },
      { label: "Michael Chen", values: { hires: 25 } },
      { label: "Emma Thompson", values: { hires: 23 } },
      { label: "James Wilson", values: { hires: 21 } },
      { label: "Olivia Martinez", values: { hires: 19 } },
      { label: "David Brown", values: { hires: 18 } },
      { label: "Sophie Davis", values: { hires: 16 } },
      { label: "Alexander Lee", values: { hires: 15 } },
      { label: "Isabella Garcia", values: { hires: 14 } },
      { label: "Thomas Anderson", values: { hires: 12 } },
    ],
    yAxis: {
      hide: false,
      width: 120,
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value} hires`,
    },
    label: true,
  },
}

const hiresBySeniorityDataConfig = {
  junior: {
    label: "Junior hires",
  },
  senior: {
    label: "Senior hires",
  },
}

export const MultipleBars: Meta<
  typeof VerticalBarChart<typeof hiresBySeniorityDataConfig>
> = {
  args: {
    dataConfig: hiresBySeniorityDataConfig,
    data: [
      { label: "Sarah Johnson", values: { junior: 18, senior: 10 } },
      { label: "Michael Chen", values: { junior: 15, senior: 10 } },
      { label: "Emma Thompson", values: { junior: 14, senior: 9 } },
      { label: "James Wilson", values: { junior: 12, senior: 9 } },
      { label: "Olivia Martinez", values: { junior: 11, senior: 8 } },
      { label: "David Brown", values: { junior: 10, senior: 8 } },
      { label: "Sophie Davis", values: { junior: 9, senior: 7 } },
      { label: "Alexander Lee", values: { junior: 8, senior: 7 } },
      { label: "Isabella Garcia", values: { junior: 8, senior: 6 } },
      { label: "Thomas Anderson", values: { junior: 7, senior: 5 } },
    ],
    yAxis: {
      hide: false,
      width: 120,
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value} hires`,
    },
    colorScheme: "categorical",
  },
}

const dataConfig = {
  value: {
    label: "Value",
  },
}

export const WithRatios: Meta<typeof VerticalBarChart<typeof dataConfig>> = {
  args: {
    dataConfig: dataConfig,
    data: [
      { label: "Yes", values: { value: 140 } },
      { label: "No", values: { value: 60 } },
    ],
    label: true,
    showRatio: true,
    valueFormatter: (value: string | number | undefined) => `${value} pers.`,
  },
}
