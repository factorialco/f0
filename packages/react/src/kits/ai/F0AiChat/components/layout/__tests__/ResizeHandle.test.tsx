import { fireEvent, render } from "@testing-library/react"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { ResizeHandle } from "../ResizeHandle"

const noop = () => {}

// The handle only listens for document mousemove while `isResizing` is true,
// so the harness owns that state (as ChatWindow does in production).
const Harness = ({
  side,
  onResize,
}: {
  side: "left" | "right"
  onResize: (delta: number) => void
}) => {
  const [isResizing, setIsResizing] = useState(false)
  return (
    <ResizeHandle
      onResize={onResize}
      onReset={noop}
      isResizing={isResizing}
      setIsResizing={setIsResizing}
      side={side}
    />
  )
}

const dragBy = (side: "left" | "right", from: number, to: number) => {
  const onResize = vi.fn()
  const { container } = render(<Harness side={side} onResize={onResize} />)
  const handle = container.firstChild as HTMLElement

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
})
