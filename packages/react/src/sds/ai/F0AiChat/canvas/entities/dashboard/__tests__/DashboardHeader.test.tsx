import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

vi.mock("../DashboardContext", () => ({
  useDashboardCanvas: () => ({
    isDirty: false,
    exportAsExcel: undefined,
    registerExport: vi.fn(),
  }),
}))

import { DashboardHeader } from "../DashboardHeader"

describe("DashboardHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks()
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
})
