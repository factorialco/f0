/**
 * THE CARD THE POINTER CARRIES while a widget is dragged: a static COPY of the
 * real card's DOM, taken as the drag starts.
 *
 * It used to be a second RENDER of the widget in the DragOverlay, and a second
 * render is a second mount: the copy's slot content started over while the
 * original — hidden, holding its slot — kept the state you had built up. A
 * carousel showed its first page for the length of the drag and snapped back on
 * release; a clock restarted; a scrolled list went to the top.
 *
 * A copy of the DOM cannot do that. It has no state to start over and runs no
 * effects: it is the card exactly as it looked when you picked it up. What it
 * cannot carry is anything that isn't IN the DOM — a canvas's pixels, a playing
 * video — which goes blank in the ghost and is whole again on release.
 */
export const takeCardGhost = (
  card: Element | null | undefined
): HTMLElement | null => {
  const copy = card?.cloneNode(true)

  if (!(copy instanceof HTMLElement)) return null

  // The original goes invisible while dragged and may carry the sortable's own
  // transform; the copy is the one you see, and it stands still.
  copy.classList.remove("invisible")
  copy.style.transform = "none"
  copy.style.transition = "none"
  // NOT a second copy of the app's ids, and not somewhere to tab into: a
  // duplicated id breaks every `aria-*` and label that points at one, and a
  // ghost is a picture rather than a control.
  copy.removeAttribute("id")
  copy.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"))
  copy.setAttribute("aria-hidden", "true")
  copy.setAttribute("inert", "")

  return copy
}

export interface PageSurfaceGhost {
  node: HTMLElement
  offset: { top: number; left: number; width: number; height: number }
}

/** A copy of the page's own surface, placed so it lines up under `card`. */
export const takePageSurface = (
  surface: Element | null | undefined,
  card: Element | null | undefined
): PageSurfaceGhost | null => {
  if (!surface || !card) return null

  const copy = surface.cloneNode(true)
  if (!(copy instanceof HTMLElement)) return null

  copy.classList.remove("-z-10")
  copy.style.position = "absolute"
  copy.style.inset = "0"
  copy.style.top = "0"
  copy.style.left = "0"
  copy.style.right = "auto"
  copy.style.bottom = "auto"
  copy.style.width = "100%"
  copy.style.height = "100%"
  copy.removeAttribute("id")
  copy.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"))
  copy.setAttribute("aria-hidden", "true")
  copy.setAttribute("inert", "")

  const from = surface.getBoundingClientRect()
  const to = card.getBoundingClientRect()

  return {
    node: copy,
    offset: {
      top: from.top - to.top,
      left: from.left - to.left,
      width: from.width,
      height: from.height,
    },
  }
}
