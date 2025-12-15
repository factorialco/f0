import { ColumnWidth, columnWidths } from "./sizes"

export const colWidthIsNumber = (width: ColumnWidth): width is number => typeof width === "number"

export const getColWidth = (width: ColumnWidth): number | undefined => {
  if (colWidthIsNumber(width)) {
    return width
  }
  return columnWidths[width]
}
