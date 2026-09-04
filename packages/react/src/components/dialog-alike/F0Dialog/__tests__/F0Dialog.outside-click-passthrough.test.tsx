import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Dialog } from "../index"

/**
 * A dismissible dialog closes when you click outside it — and that same click
 * must land on whatever you clicked. Otherwise dismissing costs one click and
 * acting costs a second, which reads as the app ignoring the first one.
 *
 * The scrim is what used to eat it: `showOverlay` (dim what is behind) was read
 * as `modal` (trap the user), so every dialog that dimmed also became
 * Radix-modal, and a modal's overlay captures pointer events by design.
 */
describe("dialog-alike F0Dialog outside click", () => {
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

  const renderDialog = () =>
    render(
      <div>
        <button data-testid="behind" type="button">
          Another task
        </button>
        <F0Dialog isOpen onClose={vi.fn()} title="Group">
          <div data-testid="inner">content</div>
        </F0Dialog>
      </div>
    )

  const scrim = () =>
    Array.from(document.querySelectorAll<HTMLElement>("div")).find((node) =>
      node.className.includes("bg-f1-background-overlay")
    )

  it("dims the background", () => {
    renderDialog()

    expect(scrim()).toBeDefined()
  })

  it("does not let the scrim capture the click that dismisses it", () => {
    renderDialog()

    const overlay = scrim()

    // Both the class and the inline style: the inline one wins, so a fix that
    // only changed the class would still swallow the click.
    expect(overlay?.className).toContain("pointer-events-none")
    expect(overlay?.style.pointerEvents).toBe("none")
  })

  it("leaves the content itself clickable", () => {
    const innerHandler = vi.fn()

    render(
      <F0Dialog isOpen onClose={vi.fn()} title="Group">
        <button data-testid="inner" onClick={innerHandler} type="button">
          A task
        </button>
      </F0Dialog>
    )

    screen.getByTestId("inner").click()

    expect(innerHandler).toHaveBeenCalledTimes(1)
  })
})
