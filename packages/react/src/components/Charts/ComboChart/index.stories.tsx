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

const hiresConfig = {
  hires: {
    label: "Number of hires",
  },
  critical: {
    label: "Critical hires",
    color: "categorical-5",
  },
}

export const Default: Meta<typeof ComboChart<typeof hiresConfig>> = {
  args: {
    dataConfig: hiresConfig,
    data: [
      {
        label: "January",
        values: { hires: 24, critical: 4 },
      },
      {
        label: "February",
        values: { hires: 32, critical: 12 },
      },
      {
        label: "March",
        values: { hires: 28, critical: 3 },
      },
      {
        label: "April",
        values: { hires: 36, critical: 9 },
      },
      {
        label: "May",
        values: { hires: 22, critical: 4 },
      },
    ],
    bar: {
      categories: ["hires"],
    },
    scatter: {
      categories: ["critical"],
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value + " hires",
    },
    legend: true,
  },
}

const trainingsConfig = {
  trainings: {
    label: "Number of trainings",
  },
  completion: {
    label: "Completion rate",
    color: "categorical-5",
  },
}

export const BarAndLine: Meta<typeof ComboChart<typeof trainingsConfig>> = {
  args: {
    dataConfig: trainingsConfig,
    data: [
      {
        label: "January",
        values: { trainings: 100, completion: 80 },
      },
      {
        label: "February",
        values: { trainings: 120, completion: 90 },
      },
      {
        label: "March",
        values: { trainings: 110, completion: 85 },
      },
      {
        label: "April",
        values: { trainings: 130, completion: 95 },
      },
      {
        label: "May",
        values: { trainings: 140, completion: 100 },
      },
    ],
    bar: {
      categories: ["trainings"],
    },
    line: {
      categories: ["completion"],
      dot: true,
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    legend: true,
  },
}

const departmentConfig = {
  applicants: {
    label: "Applicants",
  },
  interviews: {
    label: "Interviews",
  },
  hires: {
    label: "Hires",
  },
}

export const Biaxial: Meta<typeof ComboChart<typeof departmentConfig>> = {
  args: {
    dataConfig: departmentConfig,
    data: [
      {
        label: "Engineering",
        values: { applicants: 120, interviews: 100, hires: 30 },
      },
      {
        label: "Product",
        values: { applicants: 100, interviews: 92, hires: 25 },
      },
      {
        label: "Design",
        values: { applicants: 110, interviews: 100, hires: 28 },
      },
    ],
    bar: {
      categories: ["applicants", "interviews"],
      axisLabel: "Count",
      hideAxis: false,
      axisPosition: "left",
    },
    line: {
      categories: ["hires"],
      dot: true,
      axisLabel: "Hires",
      hideAxis: false,
      axisPosition: "right",
      lineType: "linear",
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value}`,
    },
    legend: true,
  },
}
