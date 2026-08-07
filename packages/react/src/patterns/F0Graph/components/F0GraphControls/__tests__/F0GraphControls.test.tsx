import { userEvent } from "@testing-library/user-event"
import { createRef } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  act,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

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

  it("exposes its toolbar role with an accessible name", () => {
    render(<F0GraphControls />)

    expect(
      screen.getByRole("toolbar", { name: "Graph navigation" })
    ).toBeInTheDocument()
  })

  it("all buttons have aria-labels", () => {
    render(<F0GraphControls />)

    const buttons = screen.getAllByRole("button")
    buttons.forEach((button) => {
      expect(button).toHaveAttribute("aria-label")
    })
  })

  it("uses custom labels as the button accessible names", () => {
    render(
      <F0GraphControls
        onFocusUser={vi.fn()}
        labels={{
          findMe: "Center on my node",
          fitView: "Show every node",
          zoomIn: "Increase graph zoom",
          zoomOut: "Decrease graph zoom",
        }}
      />
    )

    expect(screen.getByLabelText("Center on my node")).toBeInTheDocument()
    expect(screen.getByLabelText("Show every node")).toBeInTheDocument()
    expect(screen.getByLabelText("Increase graph zoom")).toBeInTheDocument()
    expect(screen.getByLabelText("Decrease graph zoom")).toBeInTheDocument()
  })

  it("keeps localized defaults for labels that are not overridden", () => {
    render(<F0GraphControls labels={{ zoomIn: "Increase scale" }} />)

    expect(screen.getByLabelText("Fit to view")).toBeInTheDocument()
    expect(screen.getByLabelText("Increase scale")).toBeInTheDocument()
    expect(screen.getByLabelText("Zoom out")).toBeInTheDocument()
  })

  it("renders Find me first when it is available", () => {
    render(<F0GraphControls onFocusUser={vi.fn()} />)

    expect(
      screen
        .getAllByRole("button")
        .map((button) => button.getAttribute("aria-label"))
    ).toEqual(["Find me", "Fit to view", "Zoom in", "Zoom out"])
  })

  it("forwards its ref to the toolbar", () => {
    const ref = createRef<HTMLDivElement>()

    render(<F0GraphControls ref={ref} />)

    expect(ref.current).toBe(screen.getByRole("toolbar"))
  })

  it("shows and clears the Find me loading state for async actions", async () => {
    let resolveAction: () => void = () => {}
    const pendingAction = new Promise<void>((resolve) => {
      resolveAction = resolve
    })
    const onFocusUser = vi.fn(() => pendingAction)

    render(<F0GraphControls onFocusUser={onFocusUser} />)

    const findMe = screen.getByRole("button", { name: "Find me" })
    await userEvent.click(findMe)

    expect(onFocusUser).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(findMe).toBeDisabled())

    act(() => resolveAction())
    await waitFor(() => expect(findMe).toBeEnabled())
  })
})
