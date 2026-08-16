import { type F0Rect } from "../types"
import { clamp } from "../utils/aspect"
import { type Viewport } from "./placement"
import { PANEL_GAP, PANEL_MAX_WIDTH, PANEL_MIN_WIDTH } from "./window-constants"

export const panelWidthFor = (area: Viewport, requested: number): number =>
  clamp(
    requested,
    PANEL_MIN_WIDTH,
    // Never more than half the area: a "panel" wider than the content it sits
    // next to has stopped being a panel.
    Math.max(PANEL_MIN_WIDTH, Math.min(PANEL_MAX_WIDTH, area.width / 2))
  )

/**
 * The card the side panel occupies, inside the area it is allowed to use.
 *
 * That area is the application frame's content region — NOT the viewport. The
 * panel belongs between the navigation and the content, the same place the chat
 * panel takes; anchoring it to the viewport would park it on top of the sidebar.
 *
 * `width` is the SLOT the frame reserves. The card is inset inside it by
 * `PANEL_GAP` on every side, which is what leaves the seam on its right rather
 * than making the content provide one.
 */
export const panelRect = (area: F0Rect, width: number): F0Rect => {
  const slot = panelWidthFor({ width: area.width, height: area.height }, width)
  return {
    x: area.x + PANEL_GAP,
    y: area.y + PANEL_GAP,
    width: slot - PANEL_GAP * 2,
    height: Math.max(0, area.height - PANEL_GAP * 2),
  }
}

/** The whole viewport as a rect, for hosts that publish no content area. */
export const viewportRect = (viewport: Viewport): F0Rect => ({
  x: 0,
  y: 0,
  width: viewport.width,
  height: viewport.height,
})
