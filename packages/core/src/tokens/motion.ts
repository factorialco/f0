/**
 * The motion vocabulary — durations and easings shared by everything that
 * moves as part of the application shell.
 *
 * One token because a single gesture is almost never drawn by a single
 * animation: opening the side panel moves the main content's padding, the
 * panel's own width and the canvas inset, and collapsing the sidebar moves
 * its slot and the nav itself. When those carry their own durations and curves
 * they cannot stay in step, and the seam between them is exactly where the
 * mismatch shows.
 *
 * Calibrated the same way as the chat's own vocabulary: short ease-out tweens
 * with NO overshoot — underdamped springs read as bounce.
 */
export const motionTokens = {
  duration: {
    /** Micro-presences: chips, dots, hover affordances. */
    micro: 0.12,
    /** Row entries and crossfades. */
    fast: 0.16,
    /** The shell's default — anything moving the panel/content seam. */
    base: 0.22,
    /** A surface changing what it is: entering or leaving fullscreen. */
    reveal: 0.3,
  },
  ease: {
    /** Fast start, soft landing, no overshoot (Material "emphasized decelerate"). */
    outSwift: [0.05, 0.7, 0.1, 1] as [number, number, number, number],
    /** Pure disappearances, where nothing has to be tracked on the way out. */
    in: [0.32, 0, 0.67, 0] as [number, number, number, number],
  },
  /**
   * How long a continuous gesture (a window drag) must hold still before it
   * counts as settled rather than mid-flight.
   */
  settleMs: 120,
}
