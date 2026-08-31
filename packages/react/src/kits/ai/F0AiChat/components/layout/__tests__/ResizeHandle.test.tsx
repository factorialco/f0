import { fireEvent, render } from "@testing-library/react"
import { useState } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { ResizeHandle } from "../ResizeHandle"

const noop = () => {}

let frames: FrameRequestCallback[] = []
const flushFrame = () => {
  const pending = frames
  frames = []
  pending.forEach((callback) => callback(0))
}

beforeEach(() => {
  frames = []
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frames.push(callback)
    return frames.length
  })
  vi.stubGlobal("cancelAnimationFrame", noop)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

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

const startDrag = (side: "left" | "right", from: number) => {
  const onResize = vi.fn()
  const { container } = render(<Harness side={side} onResize={onResize} />)
  const handle = container.firstChild as HTMLElement
  fireEvent.mouseDown(handle, { clientX: from })
  return onResize
}

const dragBy = (side: "left" | "right", from: number, to: number) => {
  const onResize = startDrag(side, from)
  fireEvent.mouseMove(document, { clientX: to })
  flushFrame()
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

describe("ResizeHandle frame coalescing", () => {
  // Pointer samples outrun paint (120Hz trackpads), and every applied delta
  // re-lays-out the panel — including a synchronous re-measure of every
  // rendered transcript row.
  it("applies one accumulated delta per frame, not one per pointer sample", () => {
    const onResize = startDrag("left", 500)

    fireEvent.mouseMove(document, { clientX: 505 })
    fireEvent.mouseMove(document, { clientX: 512 })
    fireEvent.mouseMove(document, { clientX: 520 })
    expect(onResize).not.toHaveBeenCalled()

    flushFrame()
    expect(onResize).toHaveBeenCalledTimes(1)
    expect(onResize).toHaveBeenCalledWith(20)
  })

  it("does not drop the last sample when the gesture ends between frames", () => {
    const onResize = vi.fn()
    const { container, unmount } = render(
      <Harness side="left" onResize={onResize} />
    )
    fireEvent.mouseDown(container.firstChild as HTMLElement, { clientX: 500 })
    fireEvent.mouseMove(document, { clientX: 530 })

    unmount()
    expect(onResize).toHaveBeenCalledWith(30)
  })
})
