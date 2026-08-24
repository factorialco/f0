import React from "react"
import { describe, expect, it } from "vitest"

import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { F0ButtonToggleGroup } from "../F0ButtonToggleGroup"

const MockIcon = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg ref={ref} {...props}>
    <title>Mock Icon</title>
  </svg>
))
MockIcon.displayName = "MockIcon"

const items = [
  {
    value: "keep",
    label: "Keep",
    icon: MockIcon,
    tooltip: "Keep this file",
    className: "text-f1-icon-positive",
  },
  { value: "drop", label: "Drop", icon: MockIcon },
]

describe("F0ButtonToggleGroup per-item options", () => {
  it("puts a per-item tooltip on its own button", async () => {
    zeroRender(<F0ButtonToggleGroup items={items} value="keep" />)

    await userEvent.hover(screen.getByRole("radio", { name: "Keep" }))

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toHaveTextContent("Keep this file")
    })

    // The item without a tooltip keeps the plain native title.
    expect(screen.getByRole("radio", { name: "Drop" })).toHaveAttribute(
      "title",
      "Drop"
    )
  })

  it("applies a per-item className without dropping the group's own", () => {
    zeroRender(<F0ButtonToggleGroup items={items} value="keep" fullWidth />)

    const keep = screen.getByRole("radio", { name: "Keep" })
    expect(keep).toHaveClass("text-f1-icon-positive")
    expect(keep).toHaveClass("w-full")
  })

  it("keeps the selected item's data-state when it also has a tooltip", () => {
    zeroRender(<F0ButtonToggleGroup items={items} value="keep" />)

    expect(screen.getByRole("radio", { name: "Keep" })).toHaveAttribute(
      "data-state",
      "on"
    )
  })
})
