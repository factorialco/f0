/**
 * Dismissal rules for the calendar popover.
 *
 * The calendar header's month and year pickers are selects, and a select always
 * portals its listbox out of the calendar — into the surrounding dialog's
 * container, or `document.body`. Radix therefore reports using one as an
 * interaction outside the calendar, which would dismiss it and leave the month
 * and year unpickable.
 */

/** The shape of Radix's outside-interaction events that these rules depend on. */
export interface OutsideInteractionEvent {
  target: EventTarget | null
  preventDefault: () => void
}

/**
 * Whether `target` sits in a listbox that one of `owner`'s own triggers opened,
 * following the `aria-controls` link every select trigger carries.
 *
 * Ownership has to come from the trigger rather than the listbox itself: unrelated
 * selects in the same dialog render the same shape, and interacting with those must
 * still dismiss the calendar.
 */
export const isDropdownOwnedBy = (
  target: EventTarget | null,
  owner: Element | null
) => {
  if (!(target instanceof Element) || !owner) return false
  const listbox = target.closest('[role="listbox"]')
  if (!listbox?.id) return false
  // Compared as attribute values rather than matched in a selector: Radix ids carry
  // colons, which a selector would need escaping for, and `CSS.escape` is missing in
  // some environments (jsdom) — throwing here would break dismissal outright.
  return Array.from(owner.querySelectorAll("[aria-controls]")).some(
    (trigger) => trigger.getAttribute("aria-controls") === listbox.id
  )
}

/** Whether `target` is a wrapper that the calendar itself lives inside. */
export const hostsElement = (
  target: EventTarget | null,
  element: Element | null
) => target instanceof Element && element !== null && target.contains(element)

/**
 * The calendar survives two reports that are not real outside interactions: its own
 * dropdowns, and — for focus only — an ancestor of the calendar, which is where the
 * dialog's focus scope parks focus while a dropdown mounts. Pointer events keep the
 * default behaviour for that ancestor, so a genuine click elsewhere in the dialog
 * still closes the calendar.
 */
export const createCalendarDismissalHandlers = (
  getCalendar: () => Element | null
) => ({
  onPointerDownOutside: (event: OutsideInteractionEvent) => {
    if (isDropdownOwnedBy(event.target, getCalendar())) event.preventDefault()
  },
  onFocusOutside: (event: OutsideInteractionEvent) => {
    const calendar = getCalendar()
    if (
      isDropdownOwnedBy(event.target, calendar) ||
      hostsElement(event.target, calendar)
    ) {
      event.preventDefault()
    }
  },
})
