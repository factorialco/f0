import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0ChatDashboard } from "../F0ChatDashboard"
import type { ChatDashboardConfig } from "../types"

const sampleConfig: ChatDashboardConfig = {
  title: "Headcount Overview",
  description: "Company-wide headcount breakdown",
  datasets: {
    employees: {
      columns: ["department", "salary", "contract"],
      rows: [
        { department: "Engineering", salary: 80000, contract: "Full-time" },
        { department: "Engineering", salary: 90000, contract: "Full-time" },
        { department: "Engineering", salary: 75000, contract: "Part-time" },
        { department: "Sales", salary: 60000, contract: "Full-time" },
        { department: "Sales", salary: 65000, contract: "Contractor" },
        { department: "Marketing", salary: 55000, contract: "Full-time" },
      ],
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
  },
}

export const WithMetricOnly: Story = {
  args: {
    config: {
      ...sampleConfig,
      items: [sampleConfig.items[1]],
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    config: sampleConfig,
  },
}
