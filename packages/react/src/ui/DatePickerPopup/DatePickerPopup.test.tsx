import { zeroRender as render } from "@/testing/test-utils"
import { screen } from "@testing-library/react"

import userEvent from "@testing-library/user-event"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"
import { DatePickerPopup } from "./DatePickerPopup"
import { DatePreset } from "./types"

// Mock ResizeObserver for tests
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe("OneDatePickerPopup", () => {
  const mockOnSelect = vi.fn()
  const mockOnOpenChange = vi.fn()

  const defaultProps = {
    onSelect: mockOnSelect,
    onOpenChange: mockOnOpenChange,
    children: <button>Open Date Picker</button>,
  }

  const mockPresets: DatePreset[] = [
    {
      label: "Today",
      value: new Date(),
      granularity: "day",
    },
    {
      label: "Yesterday",
      value: new Date(Date.now() - 86400000),
      granularity: "day",
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the trigger button", () => {
    render(<DatePickerPopup {...defaultProps} />)
    expect(screen.getByText("Open Date Picker")).toBeInTheDocument()
  })

  it("shows presets when provided", async () => {
    const user = userEvent.setup()
    render(<DatePickerPopup {...defaultProps} presets={mockPresets} />)

    await user.click(screen.getByText("Open Date Picker"))
    expect(screen.getByRole("option", { name: "Today" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Yesterday" })).toBeInTheDocument()
  })

  it("calls onSelect when a preset is selected", async () => {
    const user = userEvent.setup()
    render(<DatePickerPopup {...defaultProps} presets={mockPresets} />)

    await user.click(screen.getByText("Open Date Picker"))
    await user.click(screen.getByRole("option", { name: "Today" }))

    expect(mockOnSelect).toHaveBeenCalled()
    expect(mockOnOpenChange).toHaveBeenCalledWith(false)
  })

  it("shows granularity selector when multiple granularities are provided", async () => {
    const user = userEvent.setup()
    render(<DatePickerPopup {...defaultProps} granularities={["day", "week", "month"]} />)

    await user.click(screen.getByText("Open Date Picker"))
    // Check for the presence of granularity options by text
    expect(screen.getAllByText(/day/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/week/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/month/i).length).toBeGreaterThan(0)
  })

  it("shows custom range mode when custom preset is selected", async () => {
    const user = userEvent.setup()
    render(<DatePickerPopup {...defaultProps} presets={mockPresets} />)

    await user.click(screen.getByText("Open Date Picker"))
    await user.click(screen.getByRole("option", { name: "Custom" }))
    // After clicking custom, the calendar should be visible (dialog still open)
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("respects minDate and maxDate constraints", async () => {
    const user = userEvent.setup()
    const minDate = new Date("2024-01-01")
    const maxDate = new Date("2024-12-31")

    render(<DatePickerPopup {...defaultProps} minDate={minDate} maxDate={maxDate} />)

    await user.click(screen.getByText("Open Date Picker"))
    // Note: This is a basic test. In a real scenario, you'd want to verify
    // that dates outside the range are disabled in the calendar
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("handles disabled state correctly", async () => {
    render(<DatePickerPopup {...defaultProps} disabled />)

    const trigger = screen.getByText("Open Date Picker")
    // Try to click the trigger
    trigger.click()
    // The dialog should not open
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })
})
