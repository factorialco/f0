import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  screen,
  userEvent,
  zeroRender as render,
} from "@/testing/test-utils"

import { ResizeHandle } from "../ResizeHandle"

const noop = () => {}

// The handle only listens for document mousemove while `isResizing` is true,
// so the harness owns that state (as ChatWindow does in production).
const Harness = ({
  side,
  onResize,
  onReset = noop,
}: {
  side: "left" | "right"
  onResize: (delta: number) => void
  onReset?: () => void
}) => {
  const [isResizing, setIsResizing] = useState(false)
  return (
    <ResizeHandle
      onResize={onResize}
      onReset={onReset}
      isResizing={isResizing}
      setIsResizing={setIsResizing}
      side={side}
      value={360}
      minValue={300}
      maxValue={712}
    />
  )
}

const dragBy = (side: "left" | "right", from: number, to: number) => {
  const onResize = vi.fn()
  render(<Harness side={side} onResize={onResize} />)
  const handle = screen.getByRole("separator")

  fireEvent.mouseDown(handle, { clientX: from })
  fireEvent.mouseMove(document, { clientX: to })
  return onResize
}

describe("ResizeHandle drag direction", () => {
  it("right-docked: dragging the handle leftward widens (positive delta)", () => {
    // Move left: clientX 500 -> 480 => startX - clientX = +20.
    expect(dragBy("right", 500, 480)).toHaveBeenCalledWith(20)
  })

  it("left-docked: dragging the handle rightward widens (positive delta)", () => {
    // Move right: clientX 500 -> 520 => clientX - startX = +20.
    expect(dragBy("left", 500, 520)).toHaveBeenCalledWith(20)
  })

  it("exposes the current width through an adjustable separator", () => {
    render(<Harness side="right" onResize={vi.fn()} />)

    const handle = screen.getByRole("separator", {
      name: "Resize side panel",
    })
    expect(handle).toHaveAttribute("aria-orientation", "vertical")
    expect(handle).toHaveAttribute("aria-valuemin", "300")
    expect(handle).toHaveAttribute("aria-valuemax", "712")
    expect(handle).toHaveAttribute("aria-valuenow", "360")
    expect(handle).toHaveAttribute("aria-valuetext", "360 pixels")
  })

  it.each([
    ["right", "ArrowLeft", 16],
    ["right", "ArrowRight", -16],
    ["left", "ArrowLeft", -16],
    ["left", "ArrowRight", 16],
    ["right", "Home", -60],
    ["right", "End", 352],
  ] as const)(
    "%s-docked: %s resizes by %i pixels",
    async (side, key, expectedDelta) => {
      const onResize = vi.fn()
      render(<Harness side={side} onResize={onResize} />)

      const handle = screen.getByRole("separator")
      handle.focus()
      await userEvent.keyboard(`{${key}}`)

      expect(onResize).toHaveBeenCalledWith(expectedDelta)
    }
  )

  it("resets to the default width with Enter", async () => {
    const onReset = vi.fn()
    render(<Harness side="right" onResize={vi.fn()} onReset={onReset} />)

    screen.getByRole("separator").focus()
    await userEvent.keyboard("{Enter}")

    expect(onReset).toHaveBeenCalledOnce()
  })

  it("offers increase and decrease buttons as pointer alternatives to dragging", async () => {
    const onResize = vi.fn()
    render(<Harness side="right" onResize={onResize} />)

    await userEvent.click(
      screen.getByRole("button", { name: "Increase side panel width" })
    )
    await userEvent.click(
      screen.getByRole("button", { name: "Decrease side panel width" })
    )

    expect(onResize).toHaveBeenNthCalledWith(1, 16)
    expect(onResize).toHaveBeenNthCalledWith(2, -16)
  })
})
