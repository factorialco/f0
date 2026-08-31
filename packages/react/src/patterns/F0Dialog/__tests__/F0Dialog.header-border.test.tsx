import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Dialog } from "../index"

describe("patterns F0Dialog header border", () => {
  const renderDialog = (props?: { hideHeaderBorder?: boolean }) =>
    render(
      <F0Dialog isOpen onClose={vi.fn()} title="Members" {...props}>
        <div>content</div>
      </F0Dialog>
    )

  const headerRow = () => {
    const row = screen.getByText("Members").closest("div.justify-between")
    if (!row) throw new Error("F0Dialog header row not found")
    return row
  }

  it("draws a line under the title row by default", () => {
    renderDialog()

    expect(headerRow()).toHaveClass("border-b")
  })

  it("drops the line when hideHeaderBorder is set", () => {
    renderDialog({ hideHeaderBorder: true })

    expect(headerRow()).not.toHaveClass("border-b")
  })
})
