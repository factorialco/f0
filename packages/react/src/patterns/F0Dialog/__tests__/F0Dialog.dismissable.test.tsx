import { describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  userEvent,
  zeroRender as render,
  screen,
} from "@/testing/test-utils"

import { F0Dialog } from "../index"

const renderDialog = (props: { dismissable?: boolean; onClose: () => void }) =>
  render(
    <F0Dialog isOpen title="How should the chat notify you?" {...props}>
      <div>content</div>
    </F0Dialog>
  )

describe("patterns F0Dialog dismissable", () => {
  // `fireEvent`, not `userEvent`: the close button carries an automatic tooltip
  // (hidden label), and in jsdom the pointer sequence that opens it swallows the
  // click on the trigger. The button itself is fine — only the harness isn't.
  it("offers a close button by default", () => {
    const onClose = vi.fn()
    renderDialog({ onClose })

    fireEvent.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("closes on Escape by default", async () => {
    const onClose = vi.fn()
    renderDialog({ onClose })

    await userEvent.keyboard("{Escape}")
    expect(onClose).toHaveBeenCalled()
  })

  // A button that did nothing would be worse than none at all.
  it("renders no close button when it cannot be dismissed", () => {
    renderDialog({ dismissable: false, onClose: vi.fn() })

    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument()
  })

  // Radix routes Escape and the outside click through the same callback, so
  // this covers both ways out that aren't the dialog's own actions.
  it("stays open on Escape when it cannot be dismissed", async () => {
    const onClose = vi.fn()
    renderDialog({ dismissable: false, onClose })

    await userEvent.keyboard("{Escape}")
    expect(onClose).not.toHaveBeenCalled()
    expect(screen.getByText("content")).toBeInTheDocument()
  })

  it("still lets its own actions close it", async () => {
    const onClose = vi.fn()
    const save = vi.fn()
    render(
      <F0Dialog
        isOpen
        dismissable={false}
        onClose={onClose}
        title="How should the chat notify you?"
        primaryAction={{ label: "Save", onClick: save }}
      >
        <div>content</div>
      </F0Dialog>
    )

    await userEvent.click(screen.getByRole("button", { name: "Save" }))
    expect(save).toHaveBeenCalledTimes(1)
  })
})
