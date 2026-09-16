/**
 * Vertical alignment of value displays rendered inside a table cell.
 *
 * Table cells are `align-top` (see `ui/table.tsx`) so that a value tall enough to
 * stretch the row — a wrapped `longText` — starts at the top of it instead of
 * floating in the middle. The side effect is that *short* values stick to the top
 * too, and because `min-height` does not apply to `display: table-cell`, the
 * `min-h-[48px]` on the cell never held the row open either: the row collapsed onto
 * its tallest value and every other value hugged the top padding above it. A row of
 * plain text came out 36px tall, the same row with a 26px tag 42px, and in that
 * second row the text sat 3px above the tag's center.
 *
 * The fix is a fixed-height band rather than a per-type padding nudge (a bare
 * `pt-0.5` on text made that cell taller than its avatar-only siblings, which grew
 * the row and left the shorter cells with uneven gaps — the band adds the same
 * offset without adding height). Cell content is centered inside a 24px band, so
 * every value display shares one center. When a value is taller than the band the
 * row grows around it, but the band stays pinned to the top, so the short cells keep
 * sitting beside that value's first line instead of drifting to the middle of a much
 * taller row.
 *
 * 24px is the content height a cell's own loading state reserves (`min-h-[24px]` in
 * `experimental/OneTable/TableCell`), so a row does not change height when its data
 * arrives. It also leaves a row's height set by its own content: text-only rows come
 * out at 41px and a row with a tag at 43px, rather than every row being padded up to
 * a uniform floor. (Each includes the 1px the row spends on its own separator; see
 * the cell padding in `ui/table.tsx`.)
 */

/**
 * Height of the band. The Tailwind classes below have to spell out values derived
 * from this one — they can't be built at runtime, since Tailwind only emits classes
 * it can see literally. `const.test.ts` holds the two in sync.
 */
export const TABLE_CELL_BAND_PX = 24

/** Line box of `text-base`, the single line every cell's value aligns on. */
export const TABLE_CELL_LINE_PX = 20

/**
 * Applied by the table visualization to the wrapper around every cell's value.
 * `min-h-6` is {@link TABLE_CELL_BAND_PX}; keep it in sync with the skeleton's
 * `min-h-[24px]` in `experimental/OneTable/TableCell`, or rows change height when
 * their data arrives.
 */
export const tableCellContentClassName = "min-h-6 items-center"

export const tableDisplayClassNames = {
  text: "",
  avatar: "",
  avatarList: "",
  /**
   * Values that wrap can't be centered in the band: once they are taller than it,
   * centering is a no-op and their first line would sit above the single-line
   * cells beside them. Pinning them to the top of the band and offsetting by half
   * its slack — `(24 - 20) / 2` = 2px, against one line of `text-base` — puts their
   * first line on the same baseline as every other cell, wrapped or not.
   */
  multiline: "self-start pt-0.5",
}
