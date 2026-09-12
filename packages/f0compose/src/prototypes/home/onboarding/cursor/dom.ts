export type ElementPosition =
  | 'center'
  | 'left'
  | 'right'
  | 'right-outside'
  | 'left-outside'
  | 'bottom-outside'

// How far BELOW the target's bottom edge 'bottom-outside' parks the tip. Sized to
// clear a table header (h-11) and land in the upper part of the row beneath it,
// so the pointer reads as aiming at the row rather than at the header itself.
const BOTTOM_OUTSIDE_OFFSET_PX = 16

export function getCoordinates(
  element: HTMLElement,
  position: ElementPosition = 'center'
): { x: number; y: number } {
  const rect = element.getBoundingClientRect()

  // Seeded with the element's own centre instead of left unassigned. An
  // unrecognised `position` — a value the engine's allowlist knows but this switch
  // doesn't yet, or a stale copy of this module after a hot reload — used to leave
  // `x` undefined, which becomes `left: undefinedpx`. The browser drops that
  // declaration, the stylesheet's `left: 50%; top: 50%` takes over, and the cursor
  // parks in the middle of the PAGE with nothing in the console to explain it.
  // Degrading to the middle of the TARGET keeps the pointer where it belongs.
  let x = rect.left + rect.width / 2
  let y = rect.top + rect.height / 2
  switch (position) {
    case 'center':
      x = rect.left + rect.width / 2
      break
    case 'left':
      x = rect.left + rect.width * 0.2
      break
    case 'right':
      x = rect.left + rect.width * 0.8
      break
    case 'right-outside':
      // Tip sits just past the right edge AND near the bottom of the
      // element. The cursor body extends down-right from its tip, so
      // anchoring the tip at the bottom-right corner pushes the body
      // entirely outside the element (right & below) — no overlap on
      // label / input content, regardless of element height.
      x = rect.right + 6
      y = rect.bottom - 4
      break
    case 'left-outside':
      // Mirror of 'right-outside' for elements pinned to the far-right of
      // the viewport (e.g. controls inside the One panel), where a
      // right-outside pointer would land off-screen. Tip sits just past the
      // LEFT edge, near the bottom.
      x = rect.left - 6
      y = rect.bottom - 4
      break
    case 'bottom-outside':
      // Same horizontal placement as 'right-outside', but the tip drops BELOW
      // the element instead of stopping at its bottom edge. For a stable anchor
      // that sits above the thing the step is really about — a column header
      // standing in for the rows under it, which are replaced whenever the list
      // refetches — this puts the pointer in the row while still being pinned to
      // the header.
      x = rect.right + 6
      y = rect.bottom + BOTTOM_OUTSIDE_OFFSET_PX
      break
  }

  // Keep the pointer's painted body inside the viewport. The cursor box is
  // 44×44px translated (-8, -11) from its anchor, so the body spans
  // [x-8, x+36] × [y-11, y+33]; a 'right-outside' anchor on an element flush
  // with the window edge (e.g. a sidepanel-footer submit) would clip most of
  // the pointer off-screen. Only out-of-range anchors move — in-viewport
  // pointers keep their exact position, so existing tours are unaffected.
  const margin = 8
  x = Math.max(8 + margin, Math.min(x, window.innerWidth - 36 - margin))
  y = Math.max(11 + margin, Math.min(y, window.innerHeight - 33 - margin))

  return { x, y }
}
