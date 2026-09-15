/**
 * How much room the room has, as one answer the whole surface agrees on.
 *
 * The grid and the action bar already size themselves from their own measured
 * box. What did not was the CHROME around them: a 60px title bar and an 80px
 * action bar are fine in a full-screen room and absurd in a 280×282 window,
 * where together they take half the height and leave the video the other half.
 *
 * Derived from the window's own box rather than the viewport, because the two
 * are unrelated: a 300px floating window on a 2560px screen is a small room.
 */
export type MeetingDensity = "tight" | "compact" | "regular"

export type DensityBox = { width: number; height: number }

/**
 * Title-bar height per density. The window is a flex column, so this is the
 * only place it is decided — nothing computes `100% - header` any more.
 */
export const HEADER_HEIGHT: Record<MeetingDensity, number> = {
  tight: 44,
  compact: 48,
  regular: 60,
}

/**
 * Action-bar height per density.
 *
 * `tight` still clears a 32px control with 10px of air above and below. Going
 * lower buys pixels the video cannot use: below roughly a 16:9 slice the grid
 * starts dropping people into the overflow chip anyway.
 */
export const CONTROLS_HEIGHT: Record<MeetingDensity, number> = {
  tight: 52,
  compact: 64,
  regular: 80,
}

/**
 * Both axes, and the tighter one wins.
 *
 * Width alone is not enough: a short wide window is just as starved, because
 * what eats the video there is the chrome's HEIGHT. Keyed so the default
 * floating window (360×340) lands on `compact` and only a window near its
 * minimum goes `tight` — the step should be something you have to ask for by
 * dragging, not something the default state sits on.
 */
export const densityFor = ({ width, height }: DensityBox): MeetingDensity => {
  if (width < 330 || height < 300) {
    return "tight"
  }
  if (width < 620 || height < 460) {
    return "compact"
  }
  return "regular"
}
