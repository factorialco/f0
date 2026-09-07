import { describe, expect, it, vi } from "vitest"

import {
  userEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { F0Dialog } from "../index"

/**
 * A footer with TWO secondary actions: `F0Dialog` renders them as a split
 * button — the first as the button, the rest behind its chevron.
 *
 * Both facts below were broken until the menu was portalled into the dialog
 * itself. Portalled to the body it sat OUTSIDE the dialog's focus trap, which
 * kept pulling focus back while the menu pushed it out: with nothing focused
 * the two recursed until the call stack gave out (the test run hung), and with
 * a focused field in the dialog the menu closed in the same tick it opened —
 * so pressing the chevron did nothing at all.
 */
const renderDialog = (onSaveDraft: () => void) =>
  render(
    <F0Dialog
      isOpen
      title="Write a post"
      onClose={vi.fn()}
      primaryAction={{ label: "Continue", onClick: vi.fn() }}
      secondaryAction={[
        { value: "schedule", label: "Schedule post", onClick: vi.fn() },
        { value: "draft", label: "Save as draft", onClick: onSaveDraft },
      ]}
    >
      <label>
        Title
        <input type="text" />
      </label>
    </F0Dialog>
  )

describe("a dialog footer with more than one secondary action", () => {
  it("opens the chevron's menu and runs what it holds", async () => {
    const onSaveDraft = vi.fn()
    renderDialog(onSaveDraft)

    expect(screen.getByRole("button", { name: "Schedule post" })).toBeVisible()

    await userEvent.click(screen.getByTestId("button-menu"))
    await userEvent.click(
      await screen.findByRole("menuitem", { name: "Save as draft" })
    )

    // The menu defers its item's click by a frame (see `renderDropdownItem`).
    await waitFor(() => expect(onSaveDraft).toHaveBeenCalledTimes(1))
  })

  it("still opens with a field in the dialog focused", async () => {
    // The case the body portal failed: focus inside the trap, menu outside it.
    renderDialog(vi.fn())

    await userEvent.type(screen.getByRole("textbox", { name: /title/i }), "Hi")
    await userEvent.click(screen.getByTestId("button-menu"))

    expect(
      await screen.findByRole("menuitem", { name: "Save as draft" })
    ).toBeVisible()
  })

  it("keeps the menu inside the dialog, not in the body", async () => {
    renderDialog(vi.fn())

    await userEvent.click(screen.getByTestId("button-menu"))
    const menu = await screen.findByRole("menu")

    expect(menu.closest('[role="dialog"]')).not.toBeNull()
  })
})
