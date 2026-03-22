import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { ChatDashboardConfig } from "../types"

import { F0ChatDashboard } from "../DashboardContent"

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
  title: "AI/F0AiChat/Canvas/Dashboard",
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

const radarConfig: ChatDashboardConfig = {
  title: "Candidate Comparison",
  fetchSpecs: {
    candidates: {
      fetch: [{ toolId: "fetchAtsFeedbacks", args: {} }],
      query:
        "SELECT candidateName, rating, communication, technical, teamwork FROM feedbacks",
    },
  },
  items: [
    {
      id: "candidate-radar",
      title: "Top Candidates Overview",
      sourceDescription: "Based on 12 feedbacks from 4 evaluators",
      type: "chart",
      colSpan: 12,
      rowSpan: 10,
      chart: { type: "radar", showArea: true, showLegend: true },
      computation: {
        datasetId: "candidates",
        seriesColumn: "candidateName",
        indicators: [
          { column: "rating", label: "Overall Rating" },
          { column: "communication", label: "Communication" },
          { column: "technical", label: "Technical Skills" },
          { column: "teamwork", label: "Teamwork" },
        ],
        limit: 5,
        sortBy: "rating",
        sortOrder: "desc",
      },
    },
  ],
}

export const WithRadarChart: Story = {
  args: {
    config: radarConfig,
    apiConfig: sampleApiConfig,
  },
}

const pieConfig: ChatDashboardConfig = {
  title: "Department Distribution",
  fetchSpecs: {
    employees: {
      fetch: [{ toolId: "fetchEmployees", args: {} }],
      query: "SELECT department, salary FROM fetchemployees",
    },
  },
  items: [
    {
      id: "dept-pie",
      title: "Headcount by Department",
      type: "chart",
      colSpan: 6,
      rowSpan: 7,
      chart: { type: "pie", showLegend: true, showPercentage: true },
      computation: {
        datasetId: "employees",
        nameColumn: "department",
        valueColumn: "*",
        aggregation: "count",
        sortBy: "value",
        sortOrder: "desc",
      },
    },
  ],
}

export const WithPieChart: Story = {
  args: {
    config: pieConfig,
    apiConfig: sampleApiConfig,
  },
}

const gaugeConfig: ChatDashboardConfig = {
  title: "Team Health",
  fetchSpecs: {
    scores: {
      fetch: [{ toolId: "fetchReviewEvaluation", args: {} }],
      query: "SELECT score FROM evaluations",
    },
  },
  items: [
    {
      id: "avg-score",
      title: "Average Performance Score",
      type: "chart",
      colSpan: 4,
      rowSpan: 5,
      chart: { type: "gauge", min: 0, max: 100, showValue: true },
      computation: {
        datasetId: "scores",
        aggregation: "avg",
        column: "score",
        min: 0,
        max: 100,
        name: "Avg Score",
      },
    },
  ],
}

export const WithGaugeChart: Story = {
  args: {
    config: gaugeConfig,
    apiConfig: sampleApiConfig,
  },
}

const heatmapConfig: ChatDashboardConfig = {
  title: "Absence Patterns",
  fetchSpecs: {
    absences: {
      fetch: [{ toolId: "fetchLeaves", args: {} }],
      query: "SELECT dayOfWeek, month, hours FROM leaves",
    },
  },
  items: [
    {
      id: "absence-heatmap",
      title: "Absences by Day and Month",
      type: "chart",
      colSpan: 12,
      rowSpan: 8,
      chart: {
        type: "heatmap",
        showLabels: true,
        showVisualMap: true,
      },
      computation: {
        datasetId: "absences",
        xAxis: "month",
        yAxis: "dayOfWeek",
        valueColumn: "hours",
        aggregation: "sum",
      },
    },
  ],
}

export const WithHeatmapChart: Story = {
  args: {
    config: heatmapConfig,
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
