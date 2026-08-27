import type { Modifier } from "@dnd-kit/core"

import type { HomeWidgetItem } from "../slotRenderers"

/**
 * THE WIDGETS PINNED TO THE TOP of a column: the run of locked ones before the
 * first free widget.
 *
 * A locked widget further down the column is deliberately not one of these.
 * There are free slots above it, so there is still somewhere legal to drag a
 * card to up there — only a run that starts at the very top has NOTHING behind
 * it, and only then is "up" a direction with no meaning.
 */
export const topPins = (widgets: HomeWidgetItem[]): HomeWidgetItem[] => {
  const firstFree = widgets.findIndex((widget) => !widget.locked)
  return widgets.slice(0, firstFree < 0 ? widgets.length : firstFree)
}

/**
 * HOW FAR UP A CARD MAY GO in this column: the bottom edge of that pinned run,
 * in viewport coordinates. `null` when the top isn't pinned at all — and also
 * when the pinned cards are not in the DOM to be measured, which a virtualized
 * column that has scrolled them away can do; a limit guessed from cards that
 * aren't there would be worse than no limit.
 *
 * Measured ONCE, as the drag starts, because that is the frame of reference the
 * rest of the gesture is in: dnd-kit measures the dragged card's box then too
 * and reports the travel as a delta on top of it, so a ceiling re-measured
 * mid-drag would be compared against a box from before the column scrolled.
 */
export const lockedCeiling = (
  widgets: HomeWidgetItem[],
  column: HTMLElement | null
): number | null => {
  const bottoms = topPins(widgets).flatMap((widget) => {
    const box = column
      ?.querySelector(`[data-widget-id="${widget.id}"]`)
      ?.getBoundingClientRect()
    return box ? [box.bottom] : []
  })

  return bottoms.length > 0 ? Math.max(...bottoms) : null
}

/**
 * THE CARD STOPS AT THE PINS RATHER THAN PASSING THEM. Widgets locked to the
 * top of a column cannot give up their slots, so a card carried above them is
 * being offered a move that will be refused: it drifts over the pinned cards,
 * covers them, and then springs back to where it came from with a toast for an
 * explanation. Refusing at the end of the gesture is refusing too late — the
 * card should simply not go there, the way a scroll stops at the top of a page.
 *
 * `ceiling` is read through a getter rather than passed by value so the
 * modifier can be built once per column and still see the limit measured at
 * drag start: dnd-kit reads its `modifiers` prop on every pointer move, and a
 * modifier rebuilt mid-gesture is a new dependency for it every frame.
 */
export const noHigherThan =
  (ceiling: () => number | null): Modifier =>
  ({ transform, draggingNodeRect, activeNodeRect }) => {
    const limit = ceiling()
    // The overlay clone is what the pointer carries, so it is the box being
    // held above the pins; without an overlay dnd-kit hands the same rect for
    // both, and `activeNodeRect` is the fallback for the frames before the
    // clone has been measured.
    const top = (draggingNodeRect ?? activeNodeRect)?.top

    if (limit == null || top == null) return transform

    // The card's TOP edge, not its middle: passing the pins means overlapping
    // them at all, and a card whose top is exactly on the limit is sitting in
    // the first slot it is allowed to have.
    return { ...transform, y: Math.max(transform.y, limit - top) }
  }
