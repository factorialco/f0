import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { EntityRefDetails } from "../EntityRefDetails"

describe("EntityRefDetails", () => {
  it("returns null when rows is empty", () => {
    const { container } = render(<EntityRefDetails rows={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders each row label and value", () => {
    render(
      <EntityRefDetails
        rows={[
          { label: "Location", value: "Remote" },
          {
            label: "Line Manager",
            value: <span data-testid="lm">Jane Doe</span>,
          },
        ]}
      />
    )
    expect(screen.getByText("Location")).toBeInTheDocument()
    expect(screen.getByText("Remote")).toBeInTheDocument()
    expect(screen.getByText("Line Manager")).toBeInTheDocument()
    expect(screen.getByTestId("lm")).toHaveTextContent("Jane Doe")
  })

  it("renders a row whose value is a ReactNode (e.g., status tag)", () => {
    render(
      <EntityRefDetails
        rows={[
          { label: "Reason", value: "New Position" },
          {
            label: "Status",
            value: <span data-testid="status">Approved</span>,
          },
        ]}
      />
    )
    expect(screen.getByText("Reason")).toBeInTheDocument()
    expect(screen.getByText("New Position")).toBeInTheDocument()
    expect(screen.getByText("Status")).toBeInTheDocument()
    expect(screen.getByTestId("status")).toHaveTextContent("Approved")
  })

  it("renders a row with no label (value only)", () => {
    render(
      <EntityRefDetails
        rows={[
          { label: "Reason", value: "New Position" },
          { value: <span data-testid="pill">Approved</span> },
        ]}
      />
    )
    expect(screen.queryByText("Status")).not.toBeInTheDocument()
    expect(screen.getByTestId("pill")).toHaveTextContent("Approved")
  })
})
