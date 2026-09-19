/**
 * Whether an element can absorb a scroll of its own. An `overflow` container
 * that grew to fit its content reports no scroll range, and `scrollTo` on it
 * is a no-op.
 */
export function canScroll(element: HTMLElement): boolean {
  return element.scrollHeight > element.clientHeight + 1
}

/**
 * Brings a section anchor into view.
 *
 * Scrolling the form's own container keeps the movement contained when that
 * container has a scroll range (a dialog, the canvas panel). In an unbounded
 * layout the container grew to fit the form and only an ancestor scrolls, so
 * the anchor drives the scroll itself.
 */
export function scrollSectionIntoView(
  container: HTMLElement | null,
  element: HTMLElement
): void {
  if (container && canScroll(container)) {
    container.scrollTo({
      top: element.offsetTop - container.offsetTop,
      behavior: "smooth",
    })
    return
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" })
}
