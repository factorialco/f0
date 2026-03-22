import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

const mockSetEditMode = vi.fn()
const mockHandleSave = vi.fn()
const mockHandleDiscard = vi.fn()
let mockEditMode = false

vi.mock("../DashboardContext", () => ({
  useDashboardCanvas: () => ({
    editMode: mockEditMode,
    setEditMode: mockSetEditMode,
    handleSave: mockHandleSave,
    handleDiscard: mockHandleDiscard,
  }),
}))

import { DashboardHeader } from "../DashboardHeader"

describe("DashboardHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEditMode = false
  })

  it("renders the title", () => {
    render(<DashboardHeader title="My Dashboard" onClose={vi.fn()} />)

    expect(screen.getByText("My Dashboard")).toBeInTheDocument()
  })

  it("renders a close button that calls onClose", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<DashboardHeader title="Test" onClose={onClose} />)

    await user.click(screen.getByRole("button", { name: "Close dashboard" }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("renders the Edit button in view mode", () => {
    mockEditMode = false

    render(<DashboardHeader title="Test" onClose={vi.fn()} />)

    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument()
  })

  it("calls setEditMode when clicking Edit", async () => {
    const user = userEvent.setup()
    mockEditMode = false

    render(<DashboardHeader title="Test" onClose={vi.fn()} />)

    await user.click(screen.getByRole("button", { name: "Edit" }))
    expect(mockSetEditMode).toHaveBeenCalledWith(true)
  })

  it("renders Save and Discard buttons in edit mode", () => {
    mockEditMode = true

    render(<DashboardHeader title="Test" onClose={vi.fn()} />)

    expect(
      screen.getByRole("button", { name: "Save changes" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Discard" })).toBeInTheDocument()
  })

  it("calls handleSave when clicking Save", async () => {
    const user = userEvent.setup()
    mockEditMode = true

    render(<DashboardHeader title="Test" onClose={vi.fn()} />)

    await user.click(screen.getByRole("button", { name: "Save changes" }))
    expect(mockHandleSave).toHaveBeenCalledTimes(1)
  })

  it("calls handleDiscard when clicking Discard", async () => {
    const user = userEvent.setup()
    mockEditMode = true

    render(<DashboardHeader title="Test" onClose={vi.fn()} />)

    await user.click(screen.getByRole("button", { name: "Discard" }))
    expect(mockHandleDiscard).toHaveBeenCalledTimes(1)
  })
})
