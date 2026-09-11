/**
 * The frame's side panel: the resizable, fullscreen-able space beside the page.
 *
 * Deliberately a LEAF — nothing here may import `../index`, `../FrameProvider`
 * or `@/kits/**`. The AI chat is one occupant of this panel, so the dependency
 * only ever points that way.
 */
export { DEFAULT_CHAT_WIDTH, MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "./constants"
export {
  clampPanelWidth,
  panelBoundsFor,
  resolvePanelWidth,
  SPLIT_MIN_FRAME,
  type PanelBounds,
} from "./panelWidth"
export { SidePanelResizeHandle } from "./SidePanelResizeHandle"
export {
  usePersistedState,
  type UsePersistedStateOptions,
} from "./usePersistedState"
