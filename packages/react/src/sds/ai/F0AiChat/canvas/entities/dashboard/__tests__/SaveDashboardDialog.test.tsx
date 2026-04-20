import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { SaveDashboardDialog } from "../SaveDashboardDialog"

describe("SaveDashboardDialog", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    onSave: vi.fn().mockResolvedValue(undefined),
    defaultTitle: "My Dashboard",
    defaultDescription: "",
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders with the default title pre-filled", () => {
    render(<SaveDashboardDialog {...defaultProps} />)

    expect(screen.getByDisplayValue("My Dashboard")).toBeInTheDocument()
  })

  it("renders the dialog title", () => {
    render(<SaveDashboardDialog {...defaultProps} />)

    expect(screen.getByText("Save dashboard")).toBeInTheDocument()
  })

  it("calls onSave with title and description when save is clicked", async () => {
    const user = userEvent.setup()
    const onSave = vi.fn().mockResolvedValue(undefined)

    render(<SaveDashboardDialog {...defaultProps} onSave={onSave} />)

    await user.click(screen.getByRole("button", { name: "Save" }))

    expect(onSave).toHaveBeenCalledWith("My Dashboard", "")
  })

  it("calls onClose when cancel is clicked", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<SaveDashboardDialog {...defaultProps} onClose={onClose} />)

    await user.click(screen.getByRole("button", { name: "Cancel" }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("does not render when isOpen is false", () => {
    render(<SaveDashboardDialog {...defaultProps} isOpen={false} />)

    expect(screen.queryByText("Save dashboard")).not.toBeInTheDocument()
  })

  it("pre-fills description when provided", () => {
    render(
      <SaveDashboardDialog
        {...defaultProps}
        defaultDescription="A test description"
      />
    )

    expect(screen.getByDisplayValue("A test description")).toBeInTheDocument()
  })
})
