import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { ChatDashboardConfig } from "../types"

const mockOpenCanvas = vi.fn()
const mockCloseCanvas = vi.fn()
const mockCanvasContent = {
  type: "dashboard",
  title: "Test",
  toolCallId: "tc-1",
}

let mockToolCallId: string | undefined = "tc-1"

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    canvasContent: mockCanvasContent,
    openCanvas: mockOpenCanvas,
    closeCanvas: mockCloseCanvas,
  }),
}))

vi.mock("../../../../components/messages/AssistantMessage", () => ({
  useToolCallId: () => mockToolCallId,
}))

vi.mock("../../../../hooks/useAutoOpenCanvas", () => ({
  useAutoOpenCanvas: vi.fn(),
}))

import { DashboardCard } from "../DashboardCard"

const baseConfig: ChatDashboardConfig = {
  title: "Headcount Overview",
  items: [],
}

const baseApiConfig = {
  baseUrl: "/copilotkit",
  headers: {} as Record<string, string>,
}

describe("DashboardCard", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockCanvasContent.type = "dashboard"
    mockCanvasContent.toolCallId = "tc-1"
    mockToolCallId = "tc-1"
  })

  it("renders the dashboard title", () => {
    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    expect(screen.getByText("Headcount Overview")).toBeInTheDocument()
  })

  it("renders the report label as description", () => {
    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    expect(screen.getByText("Report")).toBeInTheDocument()
  })

  it("shows Close button when canvas content matches toolCallId", () => {
    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  it("shows Open button when toolCallId does not match", () => {
    mockToolCallId = "tc-other"

    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("shows Open button when canvas content is a different type", () => {
    mockCanvasContent.type = "survey"

    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("calls openCanvas with config when clicking Open", async () => {
    const user = userEvent.setup()
    mockCanvasContent.toolCallId = "tc-other"

    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(mockOpenCanvas).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "dashboard",
        title: "Headcount Overview",
        toolCallId: "tc-1",
      })
    )
  })

  it("calls closeCanvas when clicking Close", async () => {
    const user = userEvent.setup()

    render(<DashboardCard config={baseConfig} apiConfig={baseApiConfig} />)

    await user.click(screen.getByRole("button", { name: "Close" }))
    expect(mockCloseCanvas).toHaveBeenCalledTimes(1)
  })
})
