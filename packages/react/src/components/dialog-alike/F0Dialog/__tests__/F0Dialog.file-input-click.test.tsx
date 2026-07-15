import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Dialog } from "../index"

/**
 * Regression cover for the native file picker not opening inside a dialog-alike
 * F0Dialog (and therefore inside F0Wizard, which renders via this dialog).
 *
 * Root cause: the dialog content `<div>` used to call `e.preventDefault()` on
 * every bubbling `click`. A hidden `<input type="file">` lives inside the
 * dialog, and the f0 file field opens the OS picker by calling
 * `fileInputRef.current.click()`. That programmatic click bubbles up through
 * the content div; `preventDefault()` on the bubbling event cancels the file
 * chooser's default action, so no picker appears. `stopPropagation()` alone is
 * enough to keep inner clicks from being treated as outside-clicks, so the fix
 * drops `preventDefault()` and keeps `stopPropagation()`.
 *
 * We can't observe the OS picker in jsdom, so we assert the property that
 * governs it: a bubbling click originating on an element inside the dialog must
 * NOT end up `defaultPrevented`.
 */
describe("dialog-alike F0Dialog does not swallow inner click defaults", () => {
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

  it("leaves a bubbling click from an inner file input un-prevented (modal)", () => {
    render(
      <F0Dialog isOpen modal onClose={vi.fn()} title="Wizard-like modal">
        <input type="file" data-testid="file-input" className="hidden" />
      </F0Dialog>
    )

    const input = screen.getByTestId("file-input")

    // Simulate the f0 file field opening the picker: a real bubbling,
    // cancelable click dispatched on the hidden input.
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
    input.dispatchEvent(clickEvent)

    // If the dialog content preventDefault's this, the browser would suppress
    // the file chooser. It must stay un-prevented.
    expect(clickEvent.defaultPrevented).toBe(false)
  })

  it("leaves a bubbling click un-prevented in non-modal mode too", () => {
    render(
      <F0Dialog isOpen onClose={vi.fn()} title="Non-modal">
        <input type="file" data-testid="file-input" className="hidden" />
      </F0Dialog>
    )

    const input = screen.getByTestId("file-input")
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
    input.dispatchEvent(clickEvent)

    expect(clickEvent.defaultPrevented).toBe(false)
  })
})
