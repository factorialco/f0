// Copied from PR48 railMode.ts, head a195443436423c374df591ed4c1e64f6624a8760.
const PANEL_MARGIN_PX = 8
export function railPanelTop({
  anchorOffsetTop,
  stripScrollTop = 0,
  panelHeight,
  containerHeight,
  margin = PANEL_MARGIN_PX,
}: {
  anchorOffsetTop: number
  stripScrollTop?: number
  panelHeight: number
  containerHeight: number
  margin?: number
}): number {
  return clampIntoContainer(
    anchorOffsetTop - stripScrollTop,
    panelHeight,
    containerHeight,
    margin
  )
}

/**
 * Keep a floating box inside the page, given where it WANTS to be.
 *
 * The one clamp both floating things on the rail share, so a panel and a badge can't end up
 * following different rules about the edges of the page.
 */
function clampIntoContainer(
  wanted: number,
  elementHeight: number,
  containerHeight: number,
  margin: number
): number {
  const lowest = containerHeight - elementHeight - margin
  // An element TALLER than the page can't be clamped into it — the bottom bound lands above
  // the top bound. Pin it to the top and let it scroll inside itself instead (see
  // `railPanelMaxHeight`), rather than letting the clamp push it off the top of the page.
  if (lowest <= margin) return margin
  return Math.min(Math.max(wanted, margin), lowest)
}
