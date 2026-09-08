import { describe, expect, it } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { DetailsItemsList } from ".."

describe("DetailsItemsList", () => {
  it("forwards each row's id so it can be scrolled to", () => {
    render(
      <DetailsItemsList
        tableView
        details={[
          {
            id: "details-performance",
            title: "Performance",
            content: { type: "item", text: "4.2 / 5" },
          },
          { title: "Goals", content: { type: "item", text: "68%" } },
        ]}
      />
    )

    expect(document.getElementById("details-performance")).toContainElement(
      screen.getByText("Performance")
    )
    expect(screen.getByText("Goals").closest("[id]")).toBeNull()
  })
})
