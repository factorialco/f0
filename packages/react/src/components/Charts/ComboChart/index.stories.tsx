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
  revenue: {
    label: "Revenue",
  },
  customers: {
    label: "Customers",
  },
}

export const Default: Meta<typeof ComboChart<typeof teamsDataConfig>> = {
  args: {
    dataConfig: teamsDataConfig,
    data: [
      {
        label: "Marketing",
        values: { headcount: 8, pv: 24, revenue: 45, customers: 12 },
      },
      {
        label: "Sales",
        values: { headcount: 100, pv: 14, revenue: 78, customers: 89 },
      },
      {
        label: "Engineering",
        values: { headcount: 56, pv: 98, revenue: 23, customers: 34 },
      },
      {
        label: "Product",
        values: { headcount: 32, pv: 39, revenue: 67, customers: 45 },
      },
      {
        label: "Design",
        values: { headcount: 16, pv: 48, revenue: 34, customers: 23 },
      },
      {
        label: "Finance",
        values: { headcount: 12, pv: 38, revenue: 56, customers: 67 },
      },
      {
        label: "Legal",
        values: { headcount: 5, pv: 43, revenue: 12, customers: 8 },
      },
    ],
    bar: {
      categories: ["headcount", "revenue"],
    },
    line: {
      categories: ["pv", "customers"],
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
  },
}

export const SingleCategories: Meta<typeof ComboChart<typeof teamsDataConfig>> =
  {
    args: {
      dataConfig: teamsDataConfig,
      data: [
        {
          label: "Marketing",
          values: { headcount: 8, pv: 24, revenue: 45, customers: 12 },
        },
        {
          label: "Sales",
          values: { headcount: 100, pv: 14, revenue: 78, customers: 89 },
        },
        {
          label: "Engineering",
          values: { headcount: 56, pv: 98, revenue: 23, customers: 34 },
        },
        {
          label: "Product",
          values: { headcount: 32, pv: 39, revenue: 67, customers: 45 },
        },
        {
          label: "Design",
          values: { headcount: 16, pv: 48, revenue: 34, customers: 23 },
        },
        {
          label: "Finance",
          values: { headcount: 12, pv: 38, revenue: 56, customers: 67 },
        },
        {
          label: "Legal",
          values: { headcount: 5, pv: 43, revenue: 12, customers: 8 },
        },
      ],
      bar: {
        categories: "headcount",
      },
      line: {
        categories: "pv",
        dot: false,
      },
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
      {
        label: "Marketing",
        values: { headcount: 8, pv: 24, revenue: 45, customers: 12 },
      },
      {
        label: "Sales",
        values: { headcount: 100, pv: 14, revenue: 78, customers: 89 },
      },
      {
        label: "Engineering",
        values: { headcount: 56, pv: 98, revenue: 23, customers: 34 },
      },
      {
        label: "Product",
        values: { headcount: 32, pv: 39, revenue: 67, customers: 45 },
      },
      {
        label: "Design",
        values: { headcount: 16, pv: 48, revenue: 34, customers: 23 },
      },
      {
        label: "Finance",
        values: { headcount: 12, pv: 38, revenue: 56, customers: 67 },
      },
      {
        label: "Legal",
        values: { headcount: 5, pv: 43, revenue: 12, customers: 8 },
      },
    ],
    line: {
      categories: "pv",
      dot: true,
    },
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
