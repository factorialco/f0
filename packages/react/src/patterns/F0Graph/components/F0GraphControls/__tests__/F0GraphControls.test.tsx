import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { F0GraphControls } from "../F0GraphControls"

describe("F0GraphControls", () => {
  it("renders fit view, zoom in, and zoom out buttons by default", () => {
    render(<F0GraphControls />)

    expect(screen.queryByLabelText("Find me")).not.toBeInTheDocument()
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

  it("calls onFocusUser when the Find me button is clicked", async () => {
    const handler = vi.fn()
    render(<F0GraphControls onFocusUser={handler} />)

    await userEvent.click(screen.getByLabelText("Find me"))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it("hides the Find me button when onFocusUser is not provided", () => {
    render(<F0GraphControls />)
    expect(screen.queryByLabelText("Find me")).not.toBeInTheDocument()
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
