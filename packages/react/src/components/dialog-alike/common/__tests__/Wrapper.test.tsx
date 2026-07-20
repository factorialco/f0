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
  // forwardRef so the ref DialogWrapper passes doesn't warn; the spy records props.
  DialogContent: forwardRef(function DialogContentMock(
    props: { children?: ReactNode },
    _ref
  ) {
    dialogContentSpy(props)
    return <div data-testid="dialog-content">{props.children}</div>
  }),
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

  it("applies h-full to DialogContent when fullHeight is set", () => {
    render(<DialogWrapper {...baseProps} position="center" fullHeight />)

    expect(dialogContentSpy).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining("h-full") })
    )
  })

  it("does not apply h-full to DialogContent when fullHeight is unset", () => {
    render(<DialogWrapper {...baseProps} position="center" />)

    const { className } = dialogContentSpy.mock.calls[0][0]
    expect(className).not.toMatch(/(^|\s)h-full(\s|$)/)
  })

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
