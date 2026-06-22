import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { act, screen, within, zeroRender as render } from "@/testing/test-utils"

import { toasts } from "../imperative"
import { ToastProvider } from "../ToastProvider"

/**
 * Regression cover for firing a toast while the AI chat is in fullscreen and a
 * dialog is open.
 *
 * In `ApplicationFrame` the fullscreen chat paints at `z-20` **inside** a
 * `relative isolate` stacking context, as a sibling of `#content` (`z-10`).
 * Dialogs escape that isolate by portaling to the top-level `#f0-overlay-root`
 * and paint at `z-50`. For a toast to sit on top of *all* of that it must:
 *   1. portal to `#f0-overlay-root` too (escaping the isolate → above the chat), and
 *   2. render at a higher z-index than the dialogs (`z-[100]` > `z-50`).
 *
 * jsdom can't measure paint order, so we assert those two structural properties
 * (the visual hit-test lives in the Storybook story, run under test-storybook).
 */
describe("toasts over a fullscreen AI chat + dialog", () => {
  let overlayRoot: HTMLElement
  let content: HTMLElement
  let fullscreenChat: HTMLElement

  beforeEach(() => {
    toasts.closeAll()

    // Mirror the ApplicationFrame shell: an isolate (`#content`) holding the
    // fullscreen chat, followed by the top-level overlay root (as F0Provider
    // renders it). Order matters — later siblings win at equal z-index.
    content = document.createElement("div")
    content.id = "content"
    content.className = "isolate"

    fullscreenChat = document.createElement("div")
    fullscreenChat.id = "fake-fullscreen-chat"
    content.appendChild(fullscreenChat)

    overlayRoot = document.createElement("div")
    overlayRoot.id = "f0-overlay-root"

    document.body.append(content, overlayRoot)
  })

  afterEach(() => {
    toasts.closeAll()
    content.remove()
    overlayRoot.remove()
  })

  it("portals the toast into #f0-overlay-root, escaping the chat's stacking context", async () => {
    render(
      <ToastProvider>
        <div />
      </ToastProvider>
    )

    act(() => {
      toasts.open({ title: "On top of the chat" })
    })

    // The toast renders in the overlay root...
    const toast = await within(overlayRoot).findByText("On top of the chat")
    expect(overlayRoot).toContainElement(toast)

    // ...and never inside #content or the fullscreen chat subtree.
    expect(within(content).queryByText("On top of the chat")).toBeNull()
    expect(fullscreenChat.contains(toast)).toBe(false)
  })

  it("renders the toast layer above the dialog layer (z-[100] > z-50)", async () => {
    render(
      <ToastProvider>
        <div />
      </ToastProvider>
    )

    act(() => {
      toasts.open({ title: "Above the dialog" })
    })
    await within(overlayRoot).findByText("Above the dialog")

    // The toast container is the portal's root element; it carries z-[100],
    // which beats the dialog overlay/content z-50 in the shared overlay root.
    const container = overlayRoot.firstElementChild as HTMLElement | null
    expect(container?.className).toContain("z-[100]")
  })

  it("anchors the toast layer to the content region, not the full viewport", async () => {
    render(
      <ToastProvider>
        <div />
      </ToastProvider>
    )

    act(() => {
      toasts.open({ title: "Anchored to content" })
    })
    await within(overlayRoot).findByText("Anchored to content")

    // With #content present the fixed layer is sized to its box (explicit
    // geometry) so it sits in the content's bottom-left corner — clear of the
    // sidebar — rather than filling the viewport (`inset: 0`).
    const container = overlayRoot.firstElementChild as HTMLElement
    expect(container.style.width).not.toBe("")
    expect(container.style.inset).toBe("")
  })

  it("keeps the overlay root outside the isolate so it paints above the chat", () => {
    render(
      <ToastProvider>
        <div />
      </ToastProvider>
    )

    // The overlay root is a sibling of #content (not nested in the isolate)...
    expect(content.contains(overlayRoot)).toBe(false)
    // ...and comes after it in the DOM, so it wins the equal-z-index paint.
    expect(
      content.compareDocumentPosition(overlayRoot) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("falls back to document.body when no overlay root is mounted", async () => {
    overlayRoot.remove()

    render(
      <ToastProvider>
        <div />
      </ToastProvider>
    )

    act(() => {
      toasts.open({ title: "Fallback toast" })
    })

    // Without #f0-overlay-root the toast still renders (into document.body),
    // never trapped inside the simulated #content isolate.
    const toast = await screen.findByText("Fallback toast")
    expect(toast).toBeInTheDocument()
    expect(content.contains(toast)).toBe(false)
  })
})
