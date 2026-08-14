import { describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  screen,
  userEvent,
  zeroRender as render,
} from "@/testing/test-utils"

import { PointActionPopover } from "../components/ChartItem/PointActionPopover"

const anchor = { clientX: 400, clientY: 300 }

describe("PointActionPopover", () => {
  it("renders nothing without an anchor", () => {
    render(
      <PointActionPopover anchor={null} onAsk={vi.fn()} onDismiss={vi.fn()} />
    )

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("offers the single action and reports it", async () => {
    const onAsk = vi.fn()
    render(
      <PointActionPopover anchor={anchor} onAsk={onAsk} onDismiss={vi.fn()} />
    )

    await userEvent.click(screen.getByRole("button", { name: "Ask One" }))

    expect(onAsk).toHaveBeenCalledTimes(1)
  })

  it("dismisses on Escape", () => {
    const onDismiss = vi.fn()
    render(
      <PointActionPopover
        anchor={anchor}
        onAsk={vi.fn()}
        onDismiss={onDismiss}
      />
    )

    fireEvent.keyDown(document, { key: "Escape" })

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it("dismisses on a pointer press outside", () => {
    const onDismiss = vi.fn()
    render(
      <PointActionPopover
        anchor={anchor}
        onAsk={vi.fn()}
        onDismiss={onDismiss}
      />
    )

    fireEvent.pointerDown(document.body)

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it("survives a press on the action itself without dismissing first", () => {
    const onDismiss = vi.fn()
    const onAsk = vi.fn()
    render(
      <PointActionPopover anchor={anchor} onAsk={onAsk} onDismiss={onDismiss} />
    )

    // The outside-press listener is capture-phase, so it would otherwise fire
    // before the button's own click and tear the popover down mid-gesture.
    fireEvent.pointerDown(screen.getByRole("button", { name: "Ask One" }))

    expect(onDismiss).not.toHaveBeenCalled()
  })

  it("portals out of the widget so the card cannot clip it", () => {
    const { container } = render(
      <PointActionPopover anchor={anchor} onAsk={vi.fn()} onDismiss={vi.fn()} />
    )

    // Charts live inside `overflow-hidden` cards and scroll containers.
    expect(container).toBeEmptyDOMElement()
    expect(screen.getByRole("button", { name: "Ask One" })).toBeInTheDocument()
  })
})
