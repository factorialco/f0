/**
 * What the panel remembers between sessions.
 *
 * The `ONE-ai-chat-*` names are what these were called while the panel
 * belonged to the AI chat. They persist the panel — its width, whether it was
 * open, which view was in it — none of which is about One, so they were
 * renamed to the component that actually owns them.
 *
 * The old names stay readable through `legacyKeys` (see `usePersistedState`)
 * and are never written to again. They are left in place deliberately: a user
 * who lands back on an older build after a rollback still finds their
 * preferences where that build looks for them.
 */
export const SIDE_PANEL_WIDTH_KEY = "f0-side-panel-width"
export const SIDE_PANEL_OPEN_KEY = "f0-side-panel-open"
export const SIDE_PANEL_LAYOUT_KEY = "f0-side-panel-layout"
export const SIDE_PANEL_VIEW_ID_KEY = "f0-side-panel-view-id"

export const LEGACY_SIDE_PANEL_WIDTH_KEYS = ["ONE-ai-chat-width"]
export const LEGACY_SIDE_PANEL_OPEN_KEYS = ["ONE-ai-chat-open"]
export const LEGACY_SIDE_PANEL_LAYOUT_KEYS = ["ONE-ai-chat-visualization-mode"]
export const LEGACY_SIDE_PANEL_VIEW_ID_KEYS = ["ONE-ai-chat-panel-content-id"]

/**
 * The width is the only continuously-changing persisted value: a drag would
 * otherwise mean one synchronous `localStorage.setItem` per animation frame.
 */
export const SIDE_PANEL_WIDTH_PERSIST_DEBOUNCE_MS = 150
