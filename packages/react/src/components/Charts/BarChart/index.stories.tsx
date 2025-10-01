import { Meta } from "@storybook/react-vite"
import { BarChart } from "./index"

const dataConfig = {
  desktop: {
    label: "Desktop",
  },
}

const meta: Meta<typeof BarChart<typeof dataConfig>> = {
  title: "Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-100 h-96 max-w-md">
        <Story />
      </div>
    ),
  ],
  args: {
    dataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    data: [
      { label: "January", values: { desktop: 4000 } },
      { label: "February", values: { desktop: 3000 } },
      { label: "March", values: { desktop: 2000 } },
      { label: "April", values: { desktop: 1500 } },
      { label: "May", values: { desktop: 2000 } },
    ],
    onClick: (data) => {
      console.log("Bar clicked", data)
    },
  },
}

export default meta

export const Default: Meta<typeof BarChart> = {}

const dataMultiConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  tablet: {
    label: "Tablet",
  },
}

export const MultipleValues: Meta<typeof BarChart<typeof dataMultiConfig>> = {
  args: {
    dataConfig: dataMultiConfig,
    data: [
      {
        label: "January",
        values: { desktop: 2400, mobile: 4000, tablet: 3000 },
      },
      {
        label: "February",
        values: { desktop: 1398, mobile: 3000, tablet: 2500 },
      },
      { label: "March", values: { desktop: 4000, mobile: 2000, tablet: 3500 } },
      { label: "April", values: { desktop: 8000, mobile: 1500, tablet: 4500 } },
      { label: "May", values: { desktop: 6000, mobile: 2000, tablet: 5000 } },
    ],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
  },
}

const financialDataConfig = {
  profit: {
    label: "Profit",
  },
  losses: {
    label: "Losses",
  },
}

export const FinancialValues: Meta<
  typeof BarChart<typeof financialDataConfig>
> = {
  args: {
    type: "stacked-by-sign",
    dataConfig: financialDataConfig,
    data: [
      {
        label: "January",
        values: { profit: 4000, losses: -1200 },
      },
      {
        label: "February",
        values: { profit: 3200, losses: -800 },
      },
      {
        label: "March",
        values: { profit: 5000, losses: -3000 },
      },
      {
        label: "April",
        values: { profit: 7000, losses: -1000 },
      },
      {
        label: "May",
        values: { profit: 4500, losses: -1500 },
      },
    ],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value + " €",
    },
  },
}
