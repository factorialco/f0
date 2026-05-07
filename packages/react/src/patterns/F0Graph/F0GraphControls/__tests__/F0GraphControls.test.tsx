import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { F0GraphControls } from "../F0GraphControls"

describe("F0GraphControls", () => {
  it("renders mode, fit view, zoom in, and zoom out buttons", () => {
    render(<F0GraphControls />)

    expect(screen.getByLabelText("Select mode")).toBeInTheDocument()
    expect(screen.getByLabelText("Fit to view")).toBeInTheDocument()
    expect(screen.getByLabelText("Zoom in")).toBeInTheDocument()
    expect(screen.getByLabelText("Zoom out")).toBeInTheDocument()
  })

  it("calls onZoomIn when zoom in is clicked", async () => {
    const handler = vi.fn()
    render(<F0GraphControls onZoomIn={handler} />)

    await userEvent.click(screen.getByLabelText("Zoom in"))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it("calls onZoomOut when zoom out is clicked", async () => {
    const handler = vi.fn()
    render(<F0GraphControls onZoomOut={handler} />)

    await userEvent.click(screen.getByLabelText("Zoom out"))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it("calls onFitView when fit to view is clicked", async () => {
    const handler = vi.fn()
    render(<F0GraphControls onFitView={handler} />)

    await userEvent.click(screen.getByLabelText("Fit to view"))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it("calls onModeChange when select mode is clicked while in pan mode", async () => {
    const handler = vi.fn()
    render(<F0GraphControls mode="pan" onModeChange={handler} />)

    await userEvent.click(screen.getByLabelText("Select mode"))
    expect(handler).toHaveBeenCalledWith("select")
  })

  it("has ARIA toolbar role", () => {
    render(<F0GraphControls />)

    expect(screen.getByRole("toolbar")).toBeInTheDocument()
  })

  it("all buttons have aria-labels", () => {
    render(<F0GraphControls />)

    const buttons = screen.getAllByRole("button")
    buttons.forEach((button) => {
      expect(button).toHaveAttribute("aria-label")
    })
  })
})
