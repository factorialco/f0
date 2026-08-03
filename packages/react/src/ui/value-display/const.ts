/**
 * Class names applied to value-display content when rendered inside a table cell.
 *
 * Table cells are `align-top` so that tall, multi-line values (e.g. longText) align
 * to the top of the row instead of floating in its vertical center. Single-line
 * values must NOT receive an extra top padding: a per-type nudge (previously
 * `pt-0.5` on text) makes that cell taller than its avatar-only siblings, so the
 * row grows and the shorter cells end up with uneven top/bottom gaps — most visible
 * on square (team) avatars. Keeping every single-line type flush with the cell
 * padding makes all of them the same height, so the row is symmetric while
 * multi-line values still top-align.
 */
export const tableDisplayClassNames = {
  text: "",
  avatar: "",
  avatarList: "",
}
