import { type F0Rect } from "../types"
import { type Viewport } from "./placement"

/** The whole viewport as a rect, for hosts that publish no content area. */
export const viewportRect = (viewport: Viewport): F0Rect => ({
  x: 0,
  y: 0,
  width: viewport.width,
  height: viewport.height,
})
