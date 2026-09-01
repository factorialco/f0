/**
 * How the navigation is presented right now.
 *
 *  - `docked`     in the flow, holding its width open beside the content
 *  - `collapsed`  out of the flow; a hover brings it back over the content
 *  - `overlay`    a drawer: it covers the content and takes a scrim with it
 *
 * A fourth, `rail` (a narrow icon-only column that is always present), is the
 * obvious next step and is why this is a named union rather than a boolean —
 * but it is not built yet.
 */
export type SidebarMode = "docked" | "collapsed" | "overlay"

/** What the user last chose, deliberately. Survives reloads. */
export type SidebarPreference = "expanded" | "collapsed"

export type SidebarModeInput = {
  /**
   * The viewport is too small to seat the navigation beside the content.
   * Note this is not purely a device question today: an open chat panel widens
   * what counts as "compact", because the panel is competing for the same room.
   */
  isCompactViewport: boolean
  preference: SidebarPreference
}

/**
 * The single place that decides how the navigation is presented.
 *
 * Pure and total, so the whole matrix is testable without a DOM — and, more
 * to the point, so there is exactly one answer. This used to be spread across
 * a `useMemo`, two competing effects and a media query whose breakpoint moved,
 * which is how the same state ended up looking different depending on whether
 * you clicked your way into it or reloaded into it.
 */
export const resolveSidebarMode = ({
  isCompactViewport,
  preference,
}: SidebarModeInput): SidebarMode => {
  if (isCompactViewport) return "overlay"
  return preference === "expanded" ? "docked" : "collapsed"
}

/**
 * Whether a toggle in this mode is expressing a lasting preference.
 *
 * Opening the drawer on a narrow window is not a statement about how you like
 * your desktop laid out — it is a thing you do to see the menu. Persisting it
 * is what used to leave people with a collapsed sidebar they never asked for.
 */
export const modePersistsPreference = (mode: SidebarMode): boolean =>
  mode !== "overlay"
