import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { ChatDashboardConfig } from "../types"

const mockCloseCanvas = vi.fn()
const mockCanvasContent = {
  type: "dashboard",
  title: "Test",
  toolCallId: "tc-1",
}

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    canvasContent: mockCanvasContent,
    closeCanvas: mockCloseCanvas,
  }),
}))

import { DashboardCard } from "../DashboardCard"

const baseConfig: ChatDashboardConfig = {
  title: "Headcount Overview",
  items: [],
}

describe("DashboardCard", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockCanvasContent.type = "dashboard"
    mockCanvasContent.toolCallId = "tc-1"
  })

  it("renders the dashboard title", () => {
    render(
      <DashboardCard config={baseConfig} onView={vi.fn()} toolCallId="tc-1" />
    )

    expect(screen.getByText("Headcount Overview")).toBeInTheDocument()
  })

  it("renders the report label as description", () => {
    render(
      <DashboardCard config={baseConfig} onView={vi.fn()} toolCallId="tc-1" />
    )

    expect(screen.getByText("Report")).toBeInTheDocument()
  })

  it("shows Close button when canvas content matches toolCallId", () => {
    render(
      <DashboardCard config={baseConfig} onView={vi.fn()} toolCallId="tc-1" />
    )

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  it("shows Open button when toolCallId does not match", () => {
    render(
      <DashboardCard
        config={baseConfig}
        onView={vi.fn()}
        toolCallId="tc-other"
      />
    )

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("shows Open button when canvas content is a different type", () => {
    mockCanvasContent.type = "survey"

    render(
      <DashboardCard config={baseConfig} onView={vi.fn()} toolCallId="tc-1" />
    )

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("calls onView with config when clicking Open", async () => {
    const user = userEvent.setup()
    const onView = vi.fn()
    mockCanvasContent.toolCallId = "tc-other"

    render(
      <DashboardCard config={baseConfig} onView={onView} toolCallId="tc-1" />
    )

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(onView).toHaveBeenCalledWith(baseConfig)
  })

  it("calls closeCanvas when clicking Close", async () => {
    const user = userEvent.setup()

    render(
      <DashboardCard config={baseConfig} onView={vi.fn()} toolCallId="tc-1" />
    )

    await user.click(screen.getByRole("button", { name: "Close" }))
    expect(mockCloseCanvas).toHaveBeenCalledTimes(1)
  })
})
