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
    color: "categorical-3",
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

const salesConfig = {
  revenue: {
    label: "Revenue (M$)",
  },
  customers: {
    label: "Customers (K)",
  },
}

export const Biaxial: Meta<typeof ComboChart<typeof salesConfig>> = {
  args: {
    dataConfig: salesConfig,
    data: [
      {
        label: "Q1",
        values: { revenue: 120, customers: 45 },
      },
      {
        label: "Q2",
        values: { revenue: 150, customers: 52 },
      },
      {
        label: "Q3",
        values: { revenue: 180, customers: 48 },
      },
      {
        label: "Q4",
        values: { revenue: 200, customers: 55 },
      },
    ],
    bar: {
      categories: ["revenue"],
      axisLabel: "Revenue (M$)",
      hideAxis: false,
      axisPosition: "left",
    },
    line: {
      categories: ["customers"],
      dot: true,
      axisLabel: "Customers (K)",
      hideAxis: false,
      axisPosition: "right",
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

const performanceConfig = {
  sales: {
    label: "Sales (K$)",
  },
  leads: {
    label: "Leads",
  },
  conversion: {
    label: "Conversion (%)",
  },
}

export const FlexibleAxes: Meta<typeof ComboChart<typeof performanceConfig>> = {
  args: {
    dataConfig: performanceConfig,
    data: [
      {
        label: "Week 1",
        values: { sales: 45, leads: 120, conversion: 2.5 },
      },
      {
        label: "Week 2",
        values: { sales: 52, leads: 135, conversion: 3.1 },
      },
      {
        label: "Week 3",
        values: { sales: 38, leads: 98, conversion: 2.8 },
      },
      {
        label: "Week 4",
        values: { sales: 61, leads: 150, conversion: 3.4 },
      },
    ],
    bar: {
      categories: ["sales"],
      axisLabel: "Sales (K$)",
      hideAxis: false,
      axisPosition: "right", // Sales on right axis
    },
    line: {
      categories: ["leads"],
      dot: true,
      axisLabel: "Leads",
      hideAxis: false,
      axisPosition: "left", // Leads on left axis
    },
    scatter: {
      categories: ["conversion"],
      axisLabel: "Conversion (%)",
      hideAxis: false,
      axisPosition: "right", // Conversion on right axis (same as sales)
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

export const GlobalOverride: Meta<typeof ComboChart<typeof performanceConfig>> =
  {
    args: {
      dataConfig: performanceConfig,
      data: [
        {
          label: "Week 1",
          values: { sales: 45, leads: 120, conversion: 2.5 },
        },
        {
          label: "Week 2",
          values: { sales: 52, leads: 135, conversion: 3.1 },
        },
        {
          label: "Week 3",
          values: { sales: 38, leads: 98, conversion: 2.8 },
        },
        {
          label: "Week 4",
          values: { sales: 61, leads: 150, conversion: 3.4 },
        },
      ],
      bar: {
        categories: ["sales"],
        axisLabel: "Sales (K$)",
        hideAxis: false, // Per-chart: show axis
        axisPosition: "left",
      },
      line: {
        categories: ["leads"],
        dot: true,
        axisLabel: "Leads",
        hideAxis: false, // Per-chart: show axis
        axisPosition: "right",
      },
      scatter: {
        categories: ["conversion"],
        axisLabel: "Conversion (%)",
        hideAxis: false, // Per-chart: show axis
        axisPosition: "right",
      },
      xAxis: {
        hide: false,
        tickFormatter: (value: string) => value,
      },
      yAxis: {
        hide: true, // Global: hide ALL axes (overrides per-chart settings)
        tickFormatter: (value: string) => `${value}`,
      },
      legend: true,
    },
  }
