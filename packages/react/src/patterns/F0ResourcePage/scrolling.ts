const scrolls = (element: HTMLElement) => {
  // The computed value is the real answer, since the overflow usually comes
  // from a class. The inline one is the fallback for environments whose
  // computed style does not resolve it, jsdom among them.
  const overflowY =
    getComputedStyle(element).overflowY || element.style.overflowY
  return (
    overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay"
  )
}

/**
 * The thing that actually scrolls above this node. `Navigation/Page` owns a
 * scrolling body, so a resource page mounted inside one has to listen there
 * rather than on the window.
 */
export const scrollParentOf = (node: HTMLElement): HTMLElement | Window => {
  let current = node.parentElement
  while (current) {
    if (scrolls(current)) return current
    current = current.parentElement
  }
  return window
}

/**
 * Whether the scroller is an element rather than the window.
 *
 * `instanceof Window` is not dependable here: under jsdom the realm the test
 * runs in is not always the one the class comes from, so the check quietly says
 * false and the window is treated as an element. Ask what it can do instead,
 * which is true in either realm.
 */
export const isElementScroller = (
  scroller: HTMLElement | Window
): scroller is HTMLElement =>
  typeof (scroller as HTMLElement).getBoundingClientRect === "function"

/**
 * Where content stops being hidden behind the sticky chrome, in viewport
 * coordinates. Everything above this line is either covered by the header or
 * scrolled out of the scrollport entirely.
 */
export const readingLineOf = (
  scroller: HTMLElement | Window,
  chromeHeight: number
): number =>
  (isElementScroller(scroller) ? scroller.getBoundingClientRect().top : 0) +
  chromeHeight

/**
 * The section with this id, as long as it is inside the given column. Looked up
 * by id rather than with a selector, so an id that is not a valid CSS
 * identifier needs no escaping: `CSS.escape` is missing under jsdom, and the
 * ids come from the caller so they cannot be assumed to be tidy.
 */
export const sectionById = (
  container: HTMLElement,
  id: string
): HTMLElement | null => {
  const section = document.getElementById(id)
  return section && container.contains(section) ? section : null
}
