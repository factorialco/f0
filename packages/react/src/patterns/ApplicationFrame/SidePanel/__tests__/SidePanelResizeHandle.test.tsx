import { fireEvent, render, screen } from "@testing-library/react"
import { useState } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { SidePanelResizeHandle as ResizeHandle } from "../SidePanelResizeHandle"

const noop = () => {}

const MIN = 240
const MAX = 600
const VALUE = 400

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
  onReset = noop,
  value = VALUE,
}: {
  side: "left" | "right"
  onResize: (delta: number) => void
  onReset?: () => void
  value?: number
}) => {
  const [isResizing, setIsResizing] = useState(false)
  return (
    <ResizeHandle
      onResize={onResize}
      onReset={onReset}
      isResizing={isResizing}
      setIsResizing={setIsResizing}
      side={side}
      value={value}
      minValue={MIN}
      maxValue={MAX}
    />
  )
}

/** The focusable separator, which is what carries the pointer/key handlers. */
const separator = () => screen.getByRole("separator")

const startDrag = (side: "left" | "right", from: number) => {
  const onResize = vi.fn()
  render(<Harness side={side} onResize={onResize} />)
  fireEvent.mouseDown(separator(), { clientX: from })
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
    const { unmount } = render(<Harness side="left" onResize={onResize} />)
    fireEvent.mouseDown(separator(), { clientX: 500 })
    fireEvent.mouseMove(document, { clientX: 530 })

    unmount()
    expect(onResize).toHaveBeenCalledWith(30)
  })
})

describe("ResizeHandle accessibility", () => {
  it("exposes the current width and its range on a focusable separator", () => {
    render(<Harness side="right" onResize={noop} />)

    const handle = separator()
    expect(handle).toHaveAttribute("aria-orientation", "vertical")
    expect(handle).toHaveAttribute("aria-valuenow", String(VALUE))
    expect(handle).toHaveAttribute("aria-valuemin", String(MIN))
    expect(handle).toHaveAttribute("aria-valuemax", String(MAX))
    expect(handle).toHaveAttribute("aria-valuetext", `${VALUE} pixels`)
    expect(handle).toHaveAttribute("tabindex", "0")
  })

  // Arrows follow the SCREEN, not "wider/narrower": on a left-docked panel the
  // separator has to travel the way the key points, or it moves against the
  // hand that pushed it.
  it.each([
    ["right", "ArrowLeft", 16],
    ["right", "ArrowRight", -16],
    ["left", "ArrowRight", 16],
    ["left", "ArrowLeft", -16],
  ] as const)(
    "%s-docked: %s moves the separator by %i",
    (side, key, expected) => {
      const onResize = vi.fn()
      render(<Harness side={side} onResize={onResize} />)

      fireEvent.keyDown(separator(), { key })
      expect(onResize).toHaveBeenCalledWith(expected)
    }
  )

  it("Home and End jump to the ends of the allowed range", () => {
    const onResize = vi.fn()
    render(<Harness side="right" onResize={onResize} />)

    fireEvent.keyDown(separator(), { key: "Home" })
    expect(onResize).toHaveBeenLastCalledWith(MIN - VALUE)

    fireEvent.keyDown(separator(), { key: "End" })
    expect(onResize).toHaveBeenLastCalledWith(MAX - VALUE)
  })

  it("Enter restores the default width instead of nudging", () => {
    const onReset = vi.fn()
    const onResize = vi.fn()
    render(<Harness side="right" onResize={onResize} onReset={onReset} />)

    fireEvent.keyDown(separator(), { key: "Enter" })
    expect(onReset).toHaveBeenCalledTimes(1)
    expect(onResize).not.toHaveBeenCalled()
  })

  it("ignores keys it does not own", () => {
    const onResize = vi.fn()
    render(<Harness side="right" onResize={onResize} />)

    fireEvent.keyDown(separator(), { key: "a" })
    fireEvent.keyDown(separator(), { key: "ArrowUp" })
    expect(onResize).not.toHaveBeenCalled()
  })

  // Resizing is the drag and the keyboard, and nothing else. A floating
  // control on the seam was tried and removed: it is centred on the panel's
  // inner edge, so half of it lives outside the window — where the shell's
  // `clipPath` (the wipe that opens and closes the panel) slices it off,
  // whatever its z-index and however the frame is stacked.
  it("renders no controls of its own on the seam", () => {
    render(<Harness side="right" onResize={noop} />)

    expect(screen.queryAllByRole("button")).toHaveLength(0)
  })
})
