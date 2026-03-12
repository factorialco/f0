import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0ChatReportCard } from "../F0ChatReportCard"
import type { ChatDashboardConfig } from "../../F0ChatDashboard/types"

const sampleConfig: ChatDashboardConfig = {
  title: "Headcount Overview",
  description: "Company-wide headcount breakdown by department",
  fetchSpecs: {
    employees: {
      fetch: [{ toolId: "fetchEmployees", args: {} }],
      query: "SELECT * FROM fetchemployees",
    },
  },
  items: [
    {
      id: "chart-1",
      title: "Headcount by department",
      type: "chart",
      chart: { type: "bar" },
      computation: {
        datasetId: "employees",
        xAxis: "department",
        yAxis: "*",
        aggregation: "count",
      },
    },
    {
      id: "metric-1",
      title: "Total employees",
      type: "metric",
      computation: {
        datasetId: "employees",
        aggregation: "count",
      },
    },
    {
      id: "table-1",
      title: "Employee list",
      type: "collection",
      columns: [
        { id: "name", label: "Name" },
        { id: "department", label: "Department" },
      ],
      computation: { datasetId: "employees" },
    },
  ],
}

const meta = {
  component: F0ChatReportCard,
  title: "AI/F0ChatReportCard",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0ChatReportCard>

export default meta
type Story = StoryObj<typeof F0ChatReportCard>

export const Default: Story = {
  args: {
    config: sampleConfig,
    onView: () => {},
  },
}

export const ChartsOnly: Story = {
  args: {
    config: {
      ...sampleConfig,
      items: [sampleConfig.items[0]],
    },
    onView: () => {},
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    config: sampleConfig,
    onView: () => {},
  },
}
