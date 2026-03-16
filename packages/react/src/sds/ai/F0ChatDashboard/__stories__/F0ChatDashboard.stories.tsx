import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { ChatDashboardConfig } from "../types"

import { F0ChatDashboard } from "../F0ChatDashboard"

const sampleConfig: ChatDashboardConfig = {
  title: "Headcount Overview",
  fetchSpecs: {
    employees: {
      fetch: [{ toolId: "fetchEmployees", args: {} }],
      query: "SELECT department, salary, contract FROM fetchemployees",
    },
  },
  items: [
    {
      id: "headcount-chart",
      title: "Headcount by department",
      description: "Number of employees per department",
      type: "chart",
      chart: { type: "bar" },
      computation: {
        datasetId: "employees",
        xAxis: "department",
        yAxis: "*",
        aggregation: "count",
        sortBy: "value",
        sortOrder: "desc",
      },
    },
    {
      id: "total-employees",
      title: "Total employees",
      type: "metric",
      computation: {
        datasetId: "employees",
        aggregation: "count",
      },
    },
  ],
}

const sampleApiConfig = {
  baseUrl: "/api",
  headers: {},
}

const meta = {
  component: F0ChatDashboard,
  title: "AI/F0ChatDashboard",
  tags: ["autodocs"],
} satisfies Meta<typeof F0ChatDashboard>

export default meta
type Story = StoryObj<typeof F0ChatDashboard>

export const Default: Story = {
  args: {
    config: sampleConfig,
    apiConfig: sampleApiConfig,
  },
}

export const WithMetricOnly: Story = {
  args: {
    config: {
      ...sampleConfig,
      items: [sampleConfig.items[1]],
    },
    apiConfig: sampleApiConfig,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    config: sampleConfig,
    apiConfig: sampleApiConfig,
  },
}
