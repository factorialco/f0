/**
 * Vertical alignment of value displays rendered inside a table cell.
 *
 * Table cells are `align-top` (see `ui/table.tsx`) so that a value tall enough to
 * stretch the row — a wrapped `longText` — starts at the top of it instead of
 * floating in the middle. The side effect is that *short* values stick to the top
 * too, and because `min-height` does not apply to `display: table-cell`, the
 * `min-h-[48px]` on the cell never held the row open either: the row collapsed onto
 * its tallest value and every other value hugged the top padding above it. A row of
 * plain text came out 36px tall, the same row with a 26px tag 42px, and each value
 * landed on a different center — text 3px above the tag's, an action button 5px
 * below it.
 *
 * The fix is a fixed-height band rather than a per-type padding nudge (an earlier
 * `pt-0.5` on text made that cell taller than its avatar-only siblings, which grew
 * the row and left the shorter cells with uneven gaps). Cell content is centered
 * inside a 32px band — the intended 48px row minus the cell's `py-2` — which both
 * restores that row height and gives every value display one shared center. When a
 * tall value stretches the row the band stays pinned to the top, so the short cells
 * keep sitting beside that value's first line instead of drifting to the middle of a
 * much taller row.
 */

/**
 * Applied by the table visualization to the wrapper around every cell's value.
 * `min-h-8` is the 32px band; keep it in sync with `min-h-[48px]` in `ui/table.tsx`.
 */
export const tableCellContentClassName = "min-h-8 items-center"

export const tableDisplayClassNames = {
  text: "",
  avatar: "",
  avatarList: "",
  /**
   * Values that wrap can't be centered in the band: once they are taller than it,
   * centering is a no-op and their first line would sit above the single-line
   * cells beside them. Pinning them to the top of the band and offsetting by half
   * its slack — `(32 - 20) / 2` = 6px, one line of `text-base` — puts their first
   * line on the same baseline as every other cell, wrapped or not.
   */
  multiline: "self-start pt-1.5",
}
