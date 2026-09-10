import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { F0Dialog } from "@/components/dialog-alike/F0Dialog"
import {
  act,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import { CoachmarkProvider } from "../CoachmarkProvider"
import { coachmarks } from "../imperative"
import type { CoachmarkOptions } from "../types"

/**
 * A dialog is a question the page has to answer before it can be used again, so
 * a coachmark — an aside about that page — has no business painting over one or
 * swallowing a press meant for it. It stands down instead of closing: nobody
 * dismissed it, and the reader gets their step back when the dialog goes.
 */

const Page = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <CoachmarkProvider>
      <button id="filters">Filters</button>
      <button onClick={() => setDialogOpen(true)}>Open the dialog</button>
      <F0Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Save this view"
      >
        {/* Closed from inside: a press on the page outside the dialog is one
            the dialog closes on its own, which would race the toggle. */}
        <button onClick={() => setDialogOpen(false)}>Done</button>
      </F0Dialog>
    </CoachmarkProvider>
  )
}

const open = (options: CoachmarkOptions) => {
  act(() => {
    coachmarks.open(options)
  })
}

const panel = () => screen.getByRole("dialog", { name: "Filters got smarter" })

const openDialog = () => screen.getByRole("button", { name: "Open the dialog" })

const closeDialog = () => screen.getByRole("button", { name: "Done" })

const shield = () =>
  document.querySelector<HTMLElement>("[data-f0-coachmark-blocker]")

describe("a coachmark and a dialog at once", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  it("sits in its own layer, under the one dialogs paint in", async () => {
    render(<Page />)
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    await screen.findByRole("dialog", { name: "Filters got smarter" })

    // Both under `z-50` (1250 in the f0 scale), which is where every dialog
    // paints — so a dialog portalled into the same overlay root wins whichever
    // of the two mounted first. jsdom cannot measure paint order; the classes
    // are the property that decides it.
    expect(panel()).toHaveClass("z-[1240]")
    expect(panel()).not.toHaveClass("z-50")
    expect(shield()).toHaveClass("z-[1239]")
  })

  it("stands down while a dialog is open, and comes back when it closes", async () => {
    render(<Page />)
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    await screen.findByRole("dialog", { name: "Filters got smarter" })
    expect(panel()).not.toHaveClass("invisible")

    await userEvent.click(openDialog())
    await screen.findByRole("dialog", { name: "Save this view" })

    // The dim goes with the panel: a shield still swallowing presses over an
    // open dialog is the worse half of the same bug.
    await waitFor(() => expect(panel()).toHaveClass("invisible"))
    expect(shield()).toHaveClass("invisible")

    await userEvent.click(closeDialog())

    await waitFor(() => expect(panel()).not.toHaveClass("invisible"))
    expect(shield()).not.toHaveClass("invisible")
  })

  it("never shows a frame over a dialog that was already open", async () => {
    render(<Page />)
    await userEvent.click(openDialog())
    await screen.findByRole("dialog", { name: "Save this view" })

    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    await screen.findByRole("dialog", { name: "Filters got smarter" })

    // The order that used to decide it: both layers were `z-50`, so whichever
    // mounted last won, and a coachmark opening onto an open dialog painted
    // over it. Asserted without waiting — a frame late is a frame on top.
    expect(panel()).toHaveClass("invisible")
    expect(shield()).toHaveClass("invisible")

    // And it did not close the dialog on its way in. A dialog that is not
    // modal dismisses itself when focus leaves it, so the panel taking focus
    // as it opened — which is what it does for every other coachmark — shut
    // the dialog it had just stood down for.
    expect(
      screen.getByRole("dialog", { name: "Save this view" })
    ).toBeInTheDocument()
    expect(panel()).not.toHaveFocus()
  })

  it("stays open through a dialog rather than being dismissed by it", async () => {
    const onEnd = vi.fn()
    render(<Page />)
    open({
      targetElement: "#filters",
      steps: [
        { title: "Filters got smarter" },
        { title: "And they are saveable" },
      ],
      onEnd,
    })
    await screen.findByRole("dialog", { name: "Filters got smarter" })

    await userEvent.click(openDialog())
    await screen.findByRole("dialog", { name: "Save this view" })
    await userEvent.click(closeDialog())

    // Same coachmark, same step, and nothing was reported as an ending.
    await waitFor(() => expect(panel()).not.toHaveClass("invisible"))
    expect(screen.getByText("1/2")).toBeInTheDocument()
    expect(onEnd).not.toHaveBeenCalled()
  })

  it("does not stand down for a popover, which is a dialog to the DOM too", async () => {
    render(<Page />)
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    await screen.findByRole("dialog", { name: "Filters got smarter" })

    // What a select or a dropdown opening inside the step being explained looks
    // like: Radix gives its content `role="dialog"` as well, and only the
    // popper wrapper tells the two apart. The coachmark's own panel is one of
    // these, so getting this wrong would have it hide itself on sight.
    const popper = document.createElement("div")
    popper.setAttribute("data-radix-popper-content-wrapper", "")
    popper.innerHTML = '<div role="dialog" data-state="open">Pick a date</div>'
    document.body.append(popper)

    await waitFor(() => expect(screen.getByText("Pick a date")).toBeVisible())
    expect(panel()).not.toHaveClass("invisible")

    popper.remove()
  })
})
