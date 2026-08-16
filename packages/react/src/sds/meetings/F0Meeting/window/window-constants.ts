/** Gap kept between the window and the viewport edges. */
export const WINDOW_MARGIN = 12

export const WINDOW_MIN_WIDTH = 280
/** 16:9 of the minimum width plus the header and control bar. */
export const WINDOW_MIN_HEIGHT = 218

export const WINDOW_DEFAULT_WIDTH = 360
export const WINDOW_DEFAULT_HEIGHT = 260

export const MINIMIZED_WIDTH = 280
export const MINIMIZED_HEIGHT = 56

/** How close to a corner the window's centre must land to snap to it. */
export const SNAP_THRESHOLD = 88

/** Movement needed before a pointer-down counts as a drag rather than a click. */
export const DRAG_THRESHOLD = 5

/** Side panel widths, matching the chat's so the two panels feel like siblings. */
export const PANEL_DEFAULT_WIDTH = 360
export const PANEL_MIN_WIDTH = 300
export const PANEL_MAX_WIDTH = 712
/**
 * Seam around the side panel, so it reads as a card and not as a wall. Matches
 * the chat panel's `p-1`; the window is `fixed`, so where the chat gets this
 * from its container's padding, we inset the rect instead.
 */
export const PANEL_GAP = 4

export const KEYBOARD_STEP = 16
export const KEYBOARD_STEP_LARGE = 48

export const WINDOW_HEADER_HEIGHT = 36
export const WINDOW_CONTROLS_HEIGHT = 52

export const PLACEMENT_STORAGE_KEY = "ONE-meeting-window"
export const MODE_STORAGE_KEY = "ONE-meeting-mode"
