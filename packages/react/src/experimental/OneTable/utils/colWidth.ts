import { ColumnWidth, columnWidths } from "./sizes"

export const colWidthIsNumber = (width: ColumnWidth): width is number =>
  typeof width === "number"

export const getColWidth = (
  width: ColumnWidth
): number | string | undefined => {
  if (colWidthIsNumber(width)) {
    return width
  }
  return columnWidths[width]
}

export const isFillWidth = (width: ColumnWidth | undefined): boolean =>
  width === "fill"

/**
 * Resolves a column's `width`/`minWidth` pair into cell styles.
 *
 * Sized columns pin all three properties so the column cannot shrink or grow
 * when the table is scrolled.
 *
 * A `fill` column is the opposite: it should follow the viewport, not its text.
 * That takes two halves, and neither works alone — the percentage is what makes
 * the column absorb the table's leftover width, while dropping the `maxWidth`
 * and floor lets the cell's own wrapper keep the column's minimum small. With
 * only the percentage a nowrap cell still forces the table to scroll; with only
 * the small floor the column collapses to nothing.
 */
export const getColSizing = (
  width: ColumnWidth,
  minWidth?: ColumnWidth
): Pick<React.CSSProperties, "width" | "maxWidth" | "minWidth"> => {
  const colWidth = getColWidth(width)

  if (isFillWidth(width)) {
    return {
      width: colWidth,
      maxWidth: undefined,
      minWidth: minWidth !== undefined ? getColWidth(minWidth) : 0,
    }
  }

  return {
    width: colWidth,
    maxWidth: colWidth,
    minWidth: minWidth !== undefined ? getColWidth(minWidth) : colWidth,
  }
}
