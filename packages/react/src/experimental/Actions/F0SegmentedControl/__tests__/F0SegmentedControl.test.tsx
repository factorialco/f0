import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ICON_ONLY_TOOLTIP_DELAY_MS } from "@/experimental/Overlays/Tooltip"
import { List, Table } from "@/icons/app"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0SegmentedControl } from "../F0SegmentedControl"

const iconItems = [
  { value: "list", label: "List", icon: List },
  { value: "table", label: "Table", icon: Table },
]

/**
 * Real timers on purpose: fake ones deadlock `userEvent.hover` (see
 * `Tooltip.emptyContent.test.tsx`). The early assertion has to land inside the
 * delay window, so this margin is what makes a shorter delay — the 700ms
 * `TooltipInternal` default, or `instant`'s 100ms — fail the test.
 */
const EARLY_MARGIN_MS = 200

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** Radix's tooltip trigger merges this class onto whatever it wraps. */
const TOOLTIP_TRIGGER_CLASS = "pointer-events-auto"
/** `sr-only`, but only where the pointer can hover. */
const HOVER_ONLY_HIDDEN_LABEL = "[@media(hover:hover)]:sr-only"

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
    render(
      <F0SegmentedControl
        items={defaultItems}
        value="day"
        onChange={onChange}
      />
    )
    await userEvent.click(screen.getByText("Week"))
    expect(onChange).toHaveBeenCalledWith("week")
  })

  it("does not deselect the current segment when clicked again", async () => {
    const onChange = vi.fn()
    render(
      <F0SegmentedControl
        items={defaultItems}
        value="day"
        onChange={onChange}
      />
    )
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

  it("hides the label only where the pointer can hover when hideLabels is set", () => {
    render(<F0SegmentedControl items={iconItems} hideLabels />)
    // Visually hidden on hover-capable pointers, on screen on touch, and in
    // the accessibility tree either way.
    expect(screen.getByText("Table")).toHaveClass(HOVER_ONLY_HIDDEN_LABEL)
    expect(screen.getByRole("radio", { name: "Table" })).toBeInTheDocument()
  })

  it("waits for the pointer to rest before naming an icon-only segment", async () => {
    render(<F0SegmentedControl items={iconItems} hideLabels />)

    await userEvent.hover(screen.getByRole("radio", { name: "Table" }))

    // A pointer sweeping across the control must open nothing.
    await sleep(ICON_ONLY_TOOLTIP_DELAY_MS - EARLY_MARGIN_MS)
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()

    await waitFor(
      () => expect(screen.getByRole("tooltip")).toHaveTextContent("Table"),
      { timeout: EARLY_MARGIN_MS * 3 }
    )
  })

  it("keeps the selected segment marked while a tooltip wraps it", () => {
    render(<F0SegmentedControl items={iconItems} value="table" hideLabels />)

    expect(screen.getByRole("radio", { name: "Table" })).toHaveAttribute(
      "data-state",
      "on"
    )
    expect(screen.getByRole("radio", { name: "List" })).toHaveAttribute(
      "data-state",
      "off"
    )
  })

  it("wraps only the segments whose label is hidden in a tooltip", () => {
    const { unmount } = render(
      <F0SegmentedControl items={iconItems} hideLabels />
    )
    expect(screen.getByRole("radio", { name: "Table" })).toHaveClass(
      TOOLTIP_TRIGGER_CLASS
    )
    unmount()

    render(<F0SegmentedControl items={defaultItems} />)
    expect(screen.getByRole("radio", { name: "Week" })).not.toHaveClass(
      TOOLTIP_TRIGGER_CLASS
    )
  })

  it("keeps the label visible for items without an icon even with hideLabels", () => {
    render(
      <F0SegmentedControl items={[{ value: "a", label: "Alpha" }]} hideLabels />
    )
    expect(screen.getByText("Alpha")).not.toHaveClass(HOVER_ONLY_HIDDEN_LABEL)
  })

  it("keeps the label visible on a disabled icon-only segment", () => {
    // A disabled segment can be neither hovered nor focused, so a tooltip
    // could never recover its name.
    render(
      <F0SegmentedControl
        items={[{ ...iconItems[0], disabled: true }, iconItems[1]]}
        hideLabels
      />
    )
    expect(screen.getByText("List")).not.toHaveClass(HOVER_ONLY_HIDDEN_LABEL)
    expect(screen.getByText("Table")).toHaveClass(HOVER_ONLY_HIDDEN_LABEL)
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

  it("forwards ariaLabel to the underlying radiogroup", () => {
    render(<F0SegmentedControl items={defaultItems} ariaLabel="View mode" />)
    expect(screen.getByRole("group", { name: "View mode" })).toBeInTheDocument()
  })

  it("forwards ariaLabelledBy to the underlying radiogroup", () => {
    render(
      <>
        <span id="seg-label">Pick a view</span>
        <F0SegmentedControl items={defaultItems} ariaLabelledBy="seg-label" />
      </>
    )
    expect(
      screen.getByRole("group", { name: "Pick a view" })
    ).toBeInTheDocument()
  })
})
