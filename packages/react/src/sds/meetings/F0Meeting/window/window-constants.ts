import { CONTROLS_HEIGHT, HEADER_HEIGHT } from "../layout/density"

/** Gap kept between the window and the viewport edges. */
export const WINDOW_MARGIN = 12

export const WINDOW_MIN_WIDTH = 280

/**
 * 16:9 of the minimum width, plus the chrome a window this small actually
 * draws. Derived rather than written down: the old 282 was computed from "a
 * 60px header and a 64px control bar" when the bar had been 80px for a while,
 * so the smallest window the user could reach still had its video squeezed.
 */
export const WINDOW_MIN_HEIGHT =
  Math.round((WINDOW_MIN_WIDTH * 9) / 16) +
  HEADER_HEIGHT.tight +
  CONTROLS_HEIGHT.tight

export const WINDOW_DEFAULT_WIDTH = 360
/** 16:9 of the default width, plus the chrome at the density it lands on. */
export const WINDOW_DEFAULT_HEIGHT =
  Math.round((WINDOW_DEFAULT_WIDTH * 9) / 16) +
  HEADER_HEIGHT.compact +
  CONTROLS_HEIGHT.compact

export const MINIMIZED_WIDTH = 280
export const MINIMIZED_HEIGHT = 56

/** How close to a corner the window's centre must land to snap to it. */
export const SNAP_THRESHOLD = 88

/** Movement needed before a pointer-down counts as a drag rather than a click. */
export const DRAG_THRESHOLD = 5

export const KEYBOARD_STEP = 16
export const KEYBOARD_STEP_LARGE = 48

export const PLACEMENT_STORAGE_KEY = "ONE-meeting-window"
export const MODE_STORAGE_KEY = "ONE-meeting-mode"
