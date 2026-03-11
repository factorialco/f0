import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { type ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"

import type { ChatDashboardConfig } from "../../F0ChatDashboard/types"
import { F0ChatReportCard } from "../F0ChatReportCard"

const wrapper = ({ children }: { children: ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const sampleConfig: ChatDashboardConfig = {
  title: "Headcount Overview",
  description: "Company-wide headcount breakdown",
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
      id: "chart-2",
      title: "Salary distribution",
      type: "chart",
      chart: { type: "line" },
      computation: {
        datasetId: "employees",
        xAxis: "department",
        yAxis: "salary",
        aggregation: "avg",
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
      columns: [{ id: "name", label: "Name" }],
      computation: { datasetId: "employees" },
    },
  ],
}

describe("F0ChatReportCard", () => {
  it("renders the dashboard title", () => {
    render(<F0ChatReportCard config={sampleConfig} onView={() => {}} />, {
      wrapper,
    })
    expect(screen.getByText("Headcount Overview")).toBeInTheDocument()
  })

  it("renders the dashboard description", () => {
    render(<F0ChatReportCard config={sampleConfig} onView={() => {}} />, {
      wrapper,
    })
    expect(
      screen.getByText("Company-wide headcount breakdown")
    ).toBeInTheDocument()
  })

  it("shows item count summary", () => {
    render(<F0ChatReportCard config={sampleConfig} onView={() => {}} />, {
      wrapper,
    })
    expect(screen.getByText("2 charts, 1 metric, 1 table")).toBeInTheDocument()
  })

  it("calls onView with config when clicked", async () => {
    const onView = vi.fn()
    render(<F0ChatReportCard config={sampleConfig} onView={onView} />, {
      wrapper,
    })

    await userEvent.click(screen.getByText("Headcount Overview"))
    expect(onView).toHaveBeenCalledWith(sampleConfig)
  })
})
