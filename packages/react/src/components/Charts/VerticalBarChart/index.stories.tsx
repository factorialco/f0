import { Meta } from "@storybook/react-vite"
import { VerticalBarChart } from "./index"

const dataConfig = {
  value: {
    label: "Value",
  },
}

const meta: Meta<typeof VerticalBarChart<typeof dataConfig>> = {
  title: "Charts/VerticalBarChart",
  component: VerticalBarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-96 w-full max-w-md">
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
  args: {
    dataConfig,
    data: [
      { label: "Employee Satisfaction", values: { value: 85 } },
      { label: "Retention Rate", values: { value: 92 } },
      { label: "Training Completion", values: { value: 78 } },
      { label: "Performance Score", values: { value: 88 } },
      { label: "Recruitment Efficiency", values: { value: 100 } },
    ],
    yAxis: {
      width: 100,
    },
  },
}

export default meta

export const Default = {}

const multiDataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
}

export const MultipleValues: Meta<
  typeof VerticalBarChart<typeof multiDataConfig>
> = {
  args: {
    dataConfig: multiDataConfig,
    data: [
      { label: "January", values: { mobile: 4000, desktop: 2400 } },
      { label: "February", values: { mobile: 3000, desktop: 1398 } },
      { label: "March", values: { mobile: 2000, desktop: 4000 } },
      { label: "April", values: { mobile: 1500, desktop: 8000 } },
      { label: "May", values: { mobile: 2000, desktop: 6000 } },
    ],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) =>
        `${Number.isNaN(parseFloat(value)) ? value : (parseFloat(value) / 100).toFixed(2) + "€"}`,
    },
    valueFormatter: (value: string | number | undefined) =>
      `${Number.isNaN(Number(value)) ? value : (Number(value) / 100).toFixed(2) + "€"}`,
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
