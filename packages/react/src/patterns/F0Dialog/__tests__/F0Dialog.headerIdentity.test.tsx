import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0Dialog } from ".."

/**
 * The header's parts — close button, status, tabs strip, actions — used to be
 * declared inside F0DialogHeader. A component declared during render is a new
 * type on every pass, so React unmounted the old one and mounted a replacement
 * rather than updating it. The DOM was rebuilt each time, taking focus and
 * anything the subtree held with it, on every re-render of the dialog: a title
 * change, a status tick, a parent state update.
 *
 * Node identity is the direct way to see it. The same element before and after
 * a re-render means React updated in place instead of remounting.
 */
describe("patterns F0Dialog header identity", () => {
  it("keeps the close button mounted across a re-render", () => {
    const { rerender } = render(
      <F0Dialog isOpen title="Notification settings" onClose={vi.fn()}>
        <div>content</div>
      </F0Dialog>
    )

    const before = screen.getByRole("button", { name: "Close" })

    rerender(
      <F0Dialog isOpen title="Notification preferences" onClose={vi.fn()}>
        <div>content</div>
      </F0Dialog>
    )

    expect(screen.getByRole("button", { name: "Close" })).toBe(before)
  })

  // Focus is what a keyboard user loses when the button underneath them is
  // replaced mid-interaction.
  it("holds focus on the close button across a re-render", () => {
    const { rerender } = render(
      <F0Dialog isOpen title="Notification settings" onClose={vi.fn()}>
        <div>content</div>
      </F0Dialog>
    )

    const closeButton = screen.getByRole("button", { name: "Close" })
    closeButton.focus()
    expect(closeButton).toHaveFocus()

    rerender(
      <F0Dialog isOpen title="Notification preferences" onClose={vi.fn()}>
        <div>content</div>
      </F0Dialog>
    )

    expect(screen.getByRole("button", { name: "Close" })).toHaveFocus()
  })
})
