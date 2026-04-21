import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { DashboardCanvasContent } from "../../../../types"

vi.mock("../DashboardContext", () => ({
  useDashboardCanvas: () => ({
    isDirty: false,
    exportAsExcel: undefined,
    registerExport: vi.fn(),
  }),
}))

import { DashboardHeader } from "../DashboardHeader"

const baseContent: DashboardCanvasContent = {
  type: "dashboard",
  title: "My Dashboard",
  config: { title: "My Dashboard", items: [], fetchSpecs: {} },
  apiConfig: { baseUrl: "/copilotkit", headers: {} },
}

describe("DashboardHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the title", () => {
    render(<DashboardHeader content={baseContent} onClose={vi.fn()} />)

    expect(screen.getByText("My Dashboard")).toBeInTheDocument()
  })

  it("renders a close button that calls onClose", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<DashboardHeader content={baseContent} onClose={onClose} />)

    await user.click(screen.getByRole("button", { name: "Close dashboard" }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("does not show a save button", () => {
    render(<DashboardHeader content={baseContent} onClose={vi.fn()} />)

    expect(
      screen.queryByRole("button", { name: "Save" })
    ).not.toBeInTheDocument()
  })
})
