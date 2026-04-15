import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

const mockOpenCanvas = vi.fn()
const mockCloseCanvas = vi.fn()
let mockCanvasContent: Record<string, unknown> | null = null

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    canvasContent: mockCanvasContent,
    openCanvas: mockOpenCanvas,
    closeCanvas: mockCloseCanvas,
  }),
}))

// Track calls to useAutoOpenCanvas so we can verify the hook is wired up
const mockUseAutoOpenCanvas = vi.fn()
vi.mock("../../../../hooks/useAutoOpenCanvas", () => ({
  useAutoOpenCanvas: (...args: unknown[]) => mockUseAutoOpenCanvas(...args),
}))

import { FormCard } from "../FormCard"

describe("FormCard", () => {
  const defaultProps = {
    formName: "edit-employee",
    formDescription: "Edit an employee",
    module: "people" as const,
    cardTitle: "Edit Employee",
    cardDescription: "Fill in the employee details",
  }

  beforeEach(() => {
    vi.clearAllMocks()
    mockCanvasContent = null
  })

  it("renders title and description", () => {
    render(<FormCard {...defaultProps} />)

    expect(screen.getByText("Edit Employee")).toBeInTheDocument()
    expect(screen.getByText("Fill in the employee details")).toBeInTheDocument()
  })

  it("shows Open button when not active", () => {
    render(<FormCard {...defaultProps} />)

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("shows Close button when active", () => {
    mockCanvasContent = { type: "form", formName: "edit-employee" }

    render(<FormCard {...defaultProps} />)

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  it("calls openCanvas with form content when clicking Open", async () => {
    const user = userEvent.setup()

    render(<FormCard {...defaultProps} />)

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(mockOpenCanvas).toHaveBeenCalledWith({
      type: "form",
      title: "Edit Employee",
      description: "Fill in the employee details",
      formName: "edit-employee",
      formDescription: "Edit an employee",
      formModule: "people",
    })
  })

  it("calls closeCanvas when clicking Close", async () => {
    const user = userEvent.setup()
    mockCanvasContent = { type: "form", formName: "edit-employee" }

    render(<FormCard {...defaultProps} />)

    await user.click(screen.getByRole("button", { name: "Close" }))
    expect(mockCloseCanvas).toHaveBeenCalledTimes(1)
  })

  it("calls useAutoOpenCanvas with formName to auto-open on first render", () => {
    render(<FormCard {...defaultProps} />)

    expect(mockUseAutoOpenCanvas).toHaveBeenCalledWith(
      "edit-employee",
      expect.any(Function)
    )
  })

  it("auto-open callback triggers openCanvas with correct content", () => {
    render(<FormCard {...defaultProps} />)

    // Extract the open callback passed to useAutoOpenCanvas and invoke it
    const openCallback = mockUseAutoOpenCanvas.mock.calls[0][1] as () => void
    openCallback()

    expect(mockOpenCanvas).toHaveBeenCalledWith({
      type: "form",
      title: "Edit Employee",
      description: "Fill in the employee details",
      formName: "edit-employee",
      formDescription: "Edit an employee",
      formModule: "people",
    })
  })
})
