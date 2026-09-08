import { describe, expect, it } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { DataList } from ".."

describe("DataList.RecordItem", () => {
  it("renders the title, description and detail tag", () => {
    render(
      <DataList>
        <DataList.RecordItem
          title="Q4 2025 review"
          description="Feb 28, 2026"
          detail={{ type: "status-tag", text: "4.2 / 5", variant: "positive" }}
        />
      </DataList>
    )

    expect(screen.getByText("Q4 2025 review")).toBeInTheDocument()
    expect(screen.getByText("Feb 28, 2026")).toBeInTheDocument()
    expect(screen.getByText("4.2 / 5")).toBeInTheDocument()
  })

  it("renders without description or detail", () => {
    render(
      <DataList>
        <DataList.RecordItem title="Weekly 1:1" />
      </DataList>
    )

    expect(screen.getByRole("listitem")).toHaveTextContent("Weekly 1:1")
  })

  it("makes the whole row the link for a navigate action", () => {
    render(
      <DataList>
        <DataList.RecordItem
          title="Q4 2025 review"
          description="Feb 28, 2026"
          action={{ type: "navigate", href: "/reviews/q4-2025" }}
        />
      </DataList>
    )

    const link = screen.getByRole("link", { name: /Q4 2025 review/ })
    expect(link).toHaveAttribute("href", "/reviews/q4-2025")
    expect(link).toHaveTextContent("Feb 28, 2026")
  })

  it("does not render a chevron on a navigate row", () => {
    render(
      <DataList>
        <DataList.RecordItem
          title="Q4 2025 review"
          action={{ type: "navigate", href: "/reviews/q4-2025" }}
        />
      </DataList>
    )

    expect(screen.getByRole("link").querySelector("svg")).toBeNull()
  })

  it("renders a progress bar with its percentage", () => {
    render(
      <DataList>
        <DataList.RecordItem
          title="Ship pricing experiment"
          progress={{ value: 90 }}
        />
      </DataList>
    )

    expect(
      screen.getByRole("progressbar", {
        name: "Ship pricing experiment progress",
      })
    ).toHaveAttribute("aria-valuenow", "90")
    expect(screen.getByText("90%")).toBeInTheDocument()
  })

  it("scales progress to max and shows a custom label", () => {
    render(
      <DataList>
        <DataList.RecordItem
          title="Hire two engineers"
          progress={{ value: 1, max: 2, label: "1 of 2" }}
        />
      </DataList>
    )

    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "50"
    )
    expect(screen.getByText("1 of 2")).toBeInTheDocument()
  })

  it("copies the title, not the description, for a copy action", () => {
    render(
      <DataList>
        <DataList.RecordItem
          title="Q4 2025 review"
          description="Feb 28, 2026"
          action={{ type: "copy" }}
        />
      </DataList>
    )

    expect(
      screen.getByRole("button", { name: "Copy Q4 2025 review" })
    ).toBeInTheDocument()
  })
})
