import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, within } from "@/testing/test-utils"

import { F0Dialog } from "../index"

/**
 * Regression cover for opening an F0Dialog while the AI chat is in fullscreen.
 *
 * In `ApplicationFrame` the fullscreen chat paints at `z-20` **inside** a
 * `relative isolate` stacking context, as a sibling of `#content` (`z-10`).
 * Anything portaled into `#content` is therefore trapped below the chat.
 *
 * Center and fullscreen dialogs escape by portaling to the top-level
 * `#f0-overlay-root`, which lives outside that isolate — so the dialog and its
 * overlay paint above the chat. Side panels (left/right) intentionally stay
 * docked inside `#content`.
 *
 * jsdom can't measure paint order, so we assert the structural property that
 * guarantees it: where the dialog lands when it portals.
 */
describe("patterns F0Dialog over a fullscreen AI chat", () => {
  let overlayRoot: HTMLElement
  let content: HTMLElement
  let fullscreenChat: HTMLElement

  beforeEach(() => {
    // Mirror the ApplicationFrame shell: an isolate (`#content`) that holds the
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
    content.remove()
    overlayRoot.remove()
    vi.clearAllMocks()
  })

  it.each(["center", "fullscreen"] as const)(
    "portals a %s dialog into #f0-overlay-root, escaping the chat's stacking context",
    (position) => {
      render(
        <F0Dialog
          isOpen
          onClose={vi.fn()}
          position={position}
          title="On top of the chat"
        >
          <p>Body</p>
        </F0Dialog>
      )

      const dialog = within(overlayRoot).getByText("On top of the chat")
      expect(overlayRoot).toContainElement(dialog)

      // Never inside #content or the fullscreen chat subtree.
      expect(within(content).queryByText("On top of the chat")).toBeNull()
      expect(fullscreenChat.contains(dialog)).toBe(false)
    }
  )

  it.each(["left", "right"] as const)(
    "docks a %s side panel inside #content",
    (position) => {
      render(
        <F0Dialog
          isOpen
          onClose={vi.fn()}
          position={position}
          title="Docked side panel"
        >
          <p>Body</p>
        </F0Dialog>
      )

      const dialog = within(content).getByText("Docked side panel")
      expect(content).toContainElement(dialog)
      expect(within(overlayRoot).queryByText("Docked side panel")).toBeNull()
    }
  )

  it("keeps the overlay root outside the isolate so it paints above the chat", () => {
    render(
      <F0Dialog isOpen onClose={vi.fn()} title="On top of the chat">
        <p>Body</p>
      </F0Dialog>
    )

    expect(content.contains(overlayRoot)).toBe(false)
    expect(
      content.compareDocumentPosition(overlayRoot) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })
})
