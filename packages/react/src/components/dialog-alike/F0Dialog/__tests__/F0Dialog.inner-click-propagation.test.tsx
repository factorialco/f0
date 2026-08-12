import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Dialog } from "../index"

/**
 * The dialog box stops propagation of clicks coming out of its contents, so they
 * are not treated as outside-clicks and do not reach a clickable ancestor
 * rendering the dialog (React propagates synthetic events along the component
 * tree, so a portal does not isolate them).
 *
 * It must stop React's propagation ONLY. `e.stopPropagation()` forwards to
 * `nativeEvent.stopPropagation()`, which halts the DOM event at React's root
 * container — and anything delegating events at `document` then never observes
 * the click. React 16 delegates every event there, so a widget embedded in a
 * dialog that mounts its own React 16 root (e.g. the Cronofy Elements
 * availability grid) becomes unusable: silently, with `mousedown` still flowing
 * so its hover states look healthy.
 */
describe("dialog-alike F0Dialog inner click propagation", () => {
  let overlayRoot: HTMLElement

  beforeEach(() => {
    overlayRoot = document.createElement("div")
    overlayRoot.id = "f0-overlay-root"
    document.body.appendChild(overlayRoot)
  })

  afterEach(() => {
    overlayRoot.remove()
    vi.clearAllMocks()
  })

  const clickInner = (
    event = new MouseEvent("click", { bubbles: true, cancelable: true })
  ) => {
    screen.getByTestId("inner").dispatchEvent(event)
    return event
  }

  it("does not reach a clickable ancestor rendering the dialog", () => {
    const ancestorHandler = vi.fn()

    render(
      <div onClick={ancestorHandler}>
        <F0Dialog
          isOpen
          modal
          onClose={vi.fn()}
          title="Modal inside a clickable row"
        >
          <button type="button" data-testid="inner" />
        </F0Dialog>
      </div>
    )

    clickInner()

    expect(ancestorHandler).not.toHaveBeenCalled()
  })

  it("does not reach a clickable ancestor in non-modal mode either", () => {
    const ancestorHandler = vi.fn()

    render(
      <div onClick={ancestorHandler}>
        <F0Dialog
          isOpen
          onClose={vi.fn()}
          title="Non-modal inside a clickable row"
        >
          <button type="button" data-testid="inner" />
        </F0Dialog>
      </div>
    )

    clickInner()

    expect(ancestorHandler).not.toHaveBeenCalled()
  })

  it("never stops the DOM event, so embedded React roots still get the click", () => {
    render(
      <F0Dialog
        isOpen
        modal
        onClose={vi.fn()}
        title="Modal with an embedded React root"
      >
        <button type="button" data-testid="inner" />
      </F0Dialog>
    )

    const event = new MouseEvent("click", { bubbles: true, cancelable: true })
    const stopNativePropagation = vi.fn()
    const stopOriginal = event.stopPropagation.bind(event)
    event.stopPropagation = () => {
      stopNativePropagation()
      stopOriginal()
    }

    clickInner(event)

    expect(stopNativePropagation).not.toHaveBeenCalled()
  })
})
