import { screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { DialogPosition, F0DialogContext } from "@/patterns/F0Dialog"
import { zeroRender as render } from "@/testing/test-utils"

import { DatePickerPopup } from "../DatePickerPopup"

// The calendar header's year and month dropdowns are selects, and selects portal
// into the dialog's container. If the calendar itself stays in `document.body` it
// sits after that container in document order and, at the shared z-index, paints
// over the dropdowns it owns — leaving the year unpickable (FCT-59810).
const renderInDialog = (position: DialogPosition) => {
  const portalContainer = document.createElement("div")
  document.body.appendChild(portalContainer)

  render(
    <F0DialogContext.Provider
      value={{
        open: true,
        onClose: vi.fn(),
        shownBottomSheet: false,
        position,
        portalContainer,
      }}
    >
      <DatePickerPopup onSelect={vi.fn()} asChild>
        <button>Trigger</button>
      </DatePickerPopup>
    </F0DialogContext.Provider>
  )

  return portalContainer
}

describe("DatePickerPopup portal container", () => {
  it.each(["center", "fullscreen"] as const)(
    "renders the calendar inside the dialog container for %s dialogs",
    async (position) => {
      const user = userEvent.setup()
      const portalContainer = renderInDialog(position)

      await user.click(screen.getByRole("button", { name: "Trigger" }))

      expect(portalContainer).toContainElement(screen.getByRole("dialog"))
    }
  )

  it.each(["left", "right"] as const)(
    "keeps the calendar in the body for %s panels, which have no focus trap to escape",
    async (position) => {
      const user = userEvent.setup()
      const portalContainer = renderInDialog(position)

      await user.click(screen.getByRole("button", { name: "Trigger" }))

      expect(portalContainer).not.toContainElement(screen.getByRole("dialog"))
    }
  )

  it("keeps the calendar in the body when there is no dialog", async () => {
    const user = userEvent.setup()
    render(
      <DatePickerPopup onSelect={vi.fn()} asChild>
        <button>Trigger</button>
      </DatePickerPopup>
    )

    await user.click(screen.getByRole("button", { name: "Trigger" }))

    expect(screen.getByRole("dialog").closest("body")).toBe(document.body)
  })
})
