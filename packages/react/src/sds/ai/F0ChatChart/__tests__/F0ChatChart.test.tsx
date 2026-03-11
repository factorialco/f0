import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { F0ChatChart } from "../F0ChatChart"

// F0DataChart uses ECharts which needs a DOM canvas — mock it to avoid
// heavy setup in unit tests. We only verify the wrapper renders the
// surrounding card with title/description.
vi.mock("@/components/F0DataChart/F0DataChart", () => ({
  F0DataChart: () => <div data-testid="mock-chart" />,
}))

describe("F0ChatChart", () => {
  it("renders title and description for a bar chart", () => {
    render(
      <F0ChatChart
        type="bar"
        title="Headcount by department"
        description="Engineering leads"
        categories={["Engineering", "Sales"]}
        series={[{ name: "Employees", data: [42, 38] }]}
      />
    )
    expect(screen.getByText("Headcount by department")).toBeInTheDocument()
    expect(screen.getByText("Engineering leads")).toBeInTheDocument()
    expect(screen.getByTestId("mock-chart")).toBeInTheDocument()
  })

  it("renders a line chart", () => {
    render(
      <F0ChatChart
        type="line"
        title="Monthly hires"
        categories={["Jan", "Feb", "Mar"]}
        series={[{ name: "Hires", data: [8, 12, 10] }]}
      />
    )
    expect(screen.getByText("Monthly hires")).toBeInTheDocument()
  })

  it("renders a pie chart", () => {
    render(
      <F0ChatChart
        type="pie"
        title="Contract types"
        segments={[
          { name: "Full-time", value: 185 },
          { name: "Part-time", value: 32 },
        ]}
      />
    )
    expect(screen.getByText("Contract types")).toBeInTheDocument()
  })

  it("renders a funnel chart", () => {
    render(
      <F0ChatChart
        type="funnel"
        title="Hiring pipeline"
        stages={[
          { name: "Applied", value: 320 },
          { name: "Hired", value: 4 },
        ]}
      />
    )
    expect(screen.getByText("Hiring pipeline")).toBeInTheDocument()
  })

  it("renders without description", () => {
    render(
      <F0ChatChart
        type="bar"
        title="Absences"
        categories={["Sick", "Vacation"]}
        series={[{ name: "Days", data: [24, 45] }]}
      />
    )
    expect(screen.getByText("Absences")).toBeInTheDocument()
  })
})
