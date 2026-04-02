import { Meta } from "@storybook/react-vite"

import { BarChart } from "./index"

const meta: Meta = {
  title: "Charts/BarChart",
  component: BarChart,
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
}

export const Default: Meta<typeof BarChart<typeof teamsDataConfig>> = {
  args: {
    dataConfig: teamsDataConfig,
    data: [
      { label: "Marketing", values: { headcount: 8 } },
      { label: "Sales", values: { headcount: 100 } },
      { label: "Engineering", values: { headcount: 56 } },
      { label: "Product", values: { headcount: 32 } },
      { label: "Design", values: { headcount: 16 } },
      { label: "Finance", values: { headcount: 12 } },
      { label: "Legal", values: { headcount: 5 } },
    ],
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

const teamsByOfficeDataConfig = {
  headcount: {
    label: "Headcount",
  },
  openPositions: {
    label: "Open positions",
  },
  turnovers: {
    label: "Turnovers",
  },
}

export const MultipleBars: Meta<
  typeof BarChart<typeof teamsByOfficeDataConfig>
> = {
  args: {
    dataConfig: teamsByOfficeDataConfig,
    data: [
      {
        label: "New York",
        values: {
          headcount: 145,
          openPositions: 12,
          turnovers: 8,
        },
      },
      {
        label: "London",
        values: {
          headcount: 89,
          openPositions: 8,
          turnovers: 19,
        },
      },
      {
        label: "Barcelona",
        values: {
          headcount: 67,
          openPositions: 40,
          turnovers: 4,
        },
      },
      {
        label: "Berlin",
        values: {
          headcount: 90,
          openPositions: 30,
          turnovers: 3,
        },
      },
      {
        label: "Remote",
        values: {
          headcount: 96,
          openPositions: 22,
          turnovers: 2,
        },
      },
    ],
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

const financialDataConfig = {
  profit: {
    label: "Profit",
    color: "feedback-positive",
  },
  losses: {
    label: "Losses",
    color: "feedback-negative",
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
