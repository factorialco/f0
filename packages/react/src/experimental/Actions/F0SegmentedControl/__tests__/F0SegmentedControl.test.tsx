import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { List, Table } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0SegmentedControl } from "../F0SegmentedControl"

const defaultItems = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
]

describe("F0SegmentedControl", () => {
  it("renders all segments", () => {
    render(<F0SegmentedControl items={defaultItems} />)
    expect(screen.getByText("Day")).toBeInTheDocument()
    expect(screen.getByText("Week")).toBeInTheDocument()
    expect(screen.getByText("Month")).toBeInTheDocument()
  })

  it("selects first item by default when no value is provided", () => {
    render(<F0SegmentedControl items={defaultItems} />)
    expect(screen.getByText("Day").closest("[data-state]")).toHaveAttribute(
      "data-state",
      "on"
    )
  })

  it("selects the provided value", () => {
    render(<F0SegmentedControl items={defaultItems} value="week" />)
    expect(screen.getByText("Week").closest("[data-state]")).toHaveAttribute(
      "data-state",
      "on"
    )
  })

  it("calls onChange when a segment is clicked", async () => {
    const onChange = vi.fn()
    render(<F0SegmentedControl items={defaultItems} value="day" onChange={onChange} />)
    await userEvent.click(screen.getByText("Week"))
    expect(onChange).toHaveBeenCalledWith("week")
  })

  it("does not deselect the current segment when clicked again", async () => {
    const onChange = vi.fn()
    render(<F0SegmentedControl items={defaultItems} value="day" onChange={onChange} />)
    await userEvent.click(screen.getByText("Day"))
    expect(onChange).not.toHaveBeenCalled()
  })

  it("disables all segments when disabled prop is true", () => {
    render(<F0SegmentedControl items={defaultItems} disabled />)
    const buttons = screen.getAllByRole("radio")
    buttons.forEach((btn) => expect(btn).toBeDisabled())
  })

  it("disables individual segment when item.disabled is true", () => {
    const items = [
      { value: "day", label: "Day" },
      { value: "week", label: "Week", disabled: true },
    ]
    render(<F0SegmentedControl items={items} />)
    expect(screen.getByText("Week").closest("button")).toBeDisabled()
    expect(screen.getByText("Day").closest("button")).not.toBeDisabled()
  })

  it("renders icons when provided", () => {
    const items = [
      { value: "list", label: "List", icon: List },
      { value: "table", label: "Table", icon: Table },
    ]
    render(<F0SegmentedControl items={items} />)
    const svgs = document.querySelectorAll("svg")
    expect(svgs.length).toBe(2)
  })
})
