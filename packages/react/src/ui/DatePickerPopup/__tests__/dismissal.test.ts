import { afterEach, describe, expect, it, vi } from "vitest"

import { createCalendarDismissalHandlers } from "../dismissal"

/**
 * Builds the DOM the calendar actually produces inside a dialog: the calendar
 * popover holds the select trigger, while the listbox that trigger opens is
 * portaled out of it, next to the calendar rather than inside it.
 */
const buildCalendarInDialog = ({
  listboxId = "month-listbox",
}: { listboxId?: string } = {}) => {
  const dialog = document.createElement("div")
  dialog.setAttribute("role", "dialog")
  document.body.appendChild(dialog)

  const calendar = document.createElement("div")
  dialog.appendChild(calendar)

  const trigger = document.createElement("button")
  trigger.setAttribute("aria-controls", listboxId)
  calendar.appendChild(trigger)

  const listbox = document.createElement("div")
  listbox.setAttribute("role", "listbox")
  listbox.id = listboxId
  dialog.appendChild(listbox)

  const option = document.createElement("div")
  option.setAttribute("role", "option")
  listbox.appendChild(option)

  return { dialog, calendar, trigger, listbox, option }
}

/** A listbox belonging to some other select in the same dialog. */
const addUnrelatedDropdown = (dialog: Element) => {
  const trigger = document.createElement("button")
  trigger.setAttribute("aria-controls", "other-listbox")
  dialog.appendChild(trigger)

  const listbox = document.createElement("div")
  listbox.setAttribute("role", "listbox")
  listbox.id = "other-listbox"
  dialog.appendChild(listbox)

  return { trigger, listbox }
}

const outsideEvent = (target: EventTarget | null) => ({
  target,
  preventDefault: vi.fn(),
})

afterEach(() => {
  document.body.innerHTML = ""
})

describe("calendar dismissal handlers", () => {
  describe("focus reported outside the calendar", () => {
    it("keeps the calendar for its own dropdown", () => {
      const { calendar, listbox } = buildCalendarInDialog()
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(listbox)
      onFocusOutside(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it("keeps the calendar for an option inside its own dropdown", () => {
      const { calendar, option } = buildCalendarInDialog()
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(option)
      onFocusOutside(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it("keeps the calendar when focus parks on a wrapper hosting it", () => {
      const { calendar, dialog } = buildCalendarInDialog()
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(dialog)
      onFocusOutside(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it("dismisses for a dropdown belonging to another select", () => {
      const { calendar, dialog } = buildCalendarInDialog()
      const { listbox } = addUnrelatedDropdown(dialog)
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(listbox)
      onFocusOutside(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })
  })

  describe("pointer reported outside the calendar", () => {
    it("keeps the calendar while an option in its own dropdown is clicked", () => {
      const { calendar, option } = buildCalendarInDialog()
      const { onPointerDownOutside } = createCalendarDismissalHandlers(
        () => calendar
      )

      const event = outsideEvent(option)
      onPointerDownOutside(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it("dismisses on a real click elsewhere in the surrounding dialog", () => {
      const { calendar, dialog } = buildCalendarInDialog()
      const { onPointerDownOutside } = createCalendarDismissalHandlers(
        () => calendar
      )

      // The same target the focus rule tolerates: a click on it must still close.
      const event = outsideEvent(dialog)
      onPointerDownOutside(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })
  })

  describe("targets that carry no ownership", () => {
    it("dismisses for a listbox with no id to link back to a trigger", () => {
      const { calendar, listbox } = buildCalendarInDialog()
      listbox.removeAttribute("id")
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(listbox)
      onFocusOutside(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it("resolves ownership for the colon-bearing ids Radix generates", () => {
      // A selector-based lookup would need escaping for these, and would throw
      // wherever `CSS.escape` is unavailable.
      const { calendar, listbox } = buildCalendarInDialog({
        listboxId: "radix-:r5:",
      })
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(listbox)
      onFocusOutside(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it("dismisses for a non-element target", () => {
      const { calendar } = buildCalendarInDialog()
      const { onFocusOutside } = createCalendarDismissalHandlers(() => calendar)

      const event = outsideEvent(window)
      onFocusOutside(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it("dismisses before the calendar has mounted", () => {
      const { listbox } = buildCalendarInDialog()
      const { onFocusOutside } = createCalendarDismissalHandlers(() => null)

      const event = outsideEvent(listbox)
      onFocusOutside(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })
  })
})
