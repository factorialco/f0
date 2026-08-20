import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Dialog } from "../index"

describe("patterns F0Dialog tabs strip", () => {
  const tabs = [
    { id: "pending", label: "Pending" },
    { id: "acknowledged", label: "Acknowledged" },
  ]

  const renderWithTabs = () =>
    render(
      <F0Dialog
        isOpen
        onClose={vi.fn()}
        title="Acknowledgements"
        tabs={tabs}
        activeTabId="pending"
        setActiveTabId={vi.fn()}
      >
        <div>content</div>
      </F0Dialog>
    )

  it("keeps the clipping wrapper unshrinkable so scrollable content cannot squeeze the tabs", () => {
    renderWithTabs()

    const strip = screen.getByRole("navigation").closest("div.overflow-hidden")

    expect(strip).not.toBeNull()
    expect(strip).toHaveClass("shrink-0")
  })
})
