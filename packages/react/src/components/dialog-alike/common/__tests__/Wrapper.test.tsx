import { describe, expect, it, vi, beforeEach } from "vitest"

import { forwardRef, type ReactNode } from "react"

import { zeroRender as render } from "@/testing/test-utils"

import { DialogWrapper } from "../Wrapper"

// Spy on the props DialogWrapper hands to DialogContent. Hoisted so the vi.mock
// factory can reference it. This mirrors the sibling F0Drawer test's approach of
// mocking the internal and asserting the wiring.
const { dialogContentSpy } = vi.hoisted(() => ({ dialogContentSpy: vi.fn() }))

vi.mock("../dialog-primitive", () => ({
  // Passthrough so its children always render.
  Dialog: ({ children }: { children?: ReactNode }) => <>{children}</>,
  // forwardRef so the ref DialogWrapper passes doesn't warn; the spy records
  // props. The ref is attached to the div so DialogWrapper's content-width
  // observer has a real node to measure.
  DialogContent: forwardRef<HTMLDivElement, { children?: ReactNode }>(
    function DialogContentMock(props, ref) {
      dialogContentSpy(props)
      return (
        <div ref={ref} data-testid="dialog-content">
          {props.children}
        </div>
      )
    }
  ),
}))

// Force the desktop (Dialog) branch so DialogContent renders — on small screens
// DialogWrapper swaps in a Drawer instead.
vi.mock("../utils", () => ({
  useIsSmallScreen: () => false,
}))

// Isolate DialogWrapper: the provider only supplies context + renders children.
vi.mock("../DialogWrapperProvider", () => ({
  DialogWrapperProvider: ({ children }: { children?: ReactNode }) => (
    <>{children}</>
  ),
}))

describe("DialogWrapper portal target", () => {
  const baseProps = {
    isOpen: true,
    onOpenChange: vi.fn(),
    onClose: vi.fn(),
    children: <div>Content</div>,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("portals center modals to #f0-overlay-root", () => {
    render(<DialogWrapper {...baseProps} position="center" />)

    expect(dialogContentSpy).toHaveBeenCalledWith(
      expect.objectContaining({ defaultContainerId: "f0-overlay-root" })
    )
  })

  it.each(["left", "right"] as const)(
    "docks %s drawers in #content",
    (position) => {
      render(<DialogWrapper {...baseProps} position={position} />)

      expect(dialogContentSpy).toHaveBeenCalledWith(
        expect.objectContaining({ defaultContainerId: "content" })
      )
    }
  )

  it("forwards an explicit container override to DialogContent", () => {
    const container = document.createElement("div")

    render(
      <DialogWrapper {...baseProps} position="center" container={container} />
    )

    expect(dialogContentSpy).toHaveBeenCalledWith(
      expect.objectContaining({ container })
    )
  })
})

describe("DialogWrapper onWidthChange", () => {
  const baseProps = {
    isOpen: true,
    onOpenChange: vi.fn(),
    onClose: vi.fn(),
    children: <div>Content</div>,
    position: "right" as const,
  }

  // jsdom has no ResizeObserver and no real layout, so stub both: a no-op
  // observer (mount already emits once directly) and a fixed measured width.
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      }
    )
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      width: 492,
    } as DOMRect)
  })

  it("reports the content width once the drawer mounts", () => {
    const onWidthChange = vi.fn()
    render(<DialogWrapper {...baseProps} onWidthChange={onWidthChange} />)

    expect(onWidthChange).toHaveBeenCalledWith(492)
  })

  it("reports 0 when the drawer unmounts so the offset can be cleared", () => {
    const onWidthChange = vi.fn()
    const { unmount } = render(
      <DialogWrapper {...baseProps} onWidthChange={onWidthChange} />
    )
    onWidthChange.mockClear()

    unmount()

    expect(onWidthChange).toHaveBeenCalledWith(0)
  })
})
