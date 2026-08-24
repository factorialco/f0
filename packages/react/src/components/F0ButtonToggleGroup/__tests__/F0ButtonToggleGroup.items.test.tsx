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
    color: "positive" as const,
    className: "[&_svg]:w-7",
  },
  { value: "drop", label: "Drop", icon: MockIcon, color: "critical" as const },
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
    expect(keep).toHaveClass("[&_svg]:w-7")
    expect(keep).toHaveClass("w-full")
  })

  /**
   * A per-item `color` is what makes a group of items that mean different things
   * readable: the selected one wears its colour, the rest stay muted.
   */
  it("gives each item its own colour, and only once selected", () => {
    zeroRender(<F0ButtonToggleGroup items={items} value="keep" />)

    expect(screen.getByRole("radio", { name: "Keep" })).toHaveClass(
      "text-f1-icon-positive"
    )
    const drop = screen.getByRole("radio", { name: "Drop" })
    expect(drop).not.toHaveClass("text-f1-icon-critical")
    expect(drop).toHaveClass("text-f1-icon")
  })

  it("keeps the selected item's data-state when it also has a tooltip", () => {
    zeroRender(<F0ButtonToggleGroup items={items} value="keep" />)

    expect(screen.getByRole("radio", { name: "Keep" })).toHaveAttribute(
      "data-state",
      "on"
    )
  })
})
