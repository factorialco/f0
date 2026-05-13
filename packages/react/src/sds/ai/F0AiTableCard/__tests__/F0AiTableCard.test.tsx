import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0AiTableCard } from "../F0AiTableCard"

describe("F0AiTableCard", () => {
  it("renders column headers using raw column ids when no labels are given", () => {
    render(
      <F0AiTableCard
        dataset={{
          columns: ["name", "department"],
          rows: [{ name: "Ada", department: "Engineering" }],
        }}
      />
    )

    expect(
      screen.getByRole("columnheader", { name: "name" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", { name: "department" })
    ).toBeInTheDocument()
  })

  it("prefers columnLabels over raw column ids when provided", () => {
    render(
      <F0AiTableCard
        dataset={{
          columns: ["employee_name"],
          rows: [{ employee_name: "Ada" }],
          columnLabels: { employee_name: "Employee" },
        }}
      />
    )

    expect(
      screen.getByRole("columnheader", { name: "Employee" })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("columnheader", { name: "employee_name" })
    ).toBeNull()
  })

  it("renders one row per dataset entry", () => {
    render(
      <F0AiTableCard
        dataset={{
          columns: ["name"],
          rows: [{ name: "Ada" }, { name: "Grace" }, { name: "Alan" }],
        }}
      />
    )

    // 1 header row + 3 data rows
    expect(screen.getAllByRole("row")).toHaveLength(4)
  })

  it("renders null and undefined cells as empty strings", () => {
    render(
      <F0AiTableCard
        dataset={{
          columns: ["name", "manager"],
          rows: [{ name: "Ada", manager: null }],
        }}
      />
    )

    const cells = screen.getAllByRole("cell")
    expect(cells[0]).toHaveTextContent("Ada")
    expect(cells[1]).toHaveTextContent("")
  })

  it("returns null when the dataset has no columns", () => {
    const { container } = render(
      <F0AiTableCard dataset={{ columns: [], rows: [] }} />
    )

    expect(container).toBeEmptyDOMElement()
  })
})
