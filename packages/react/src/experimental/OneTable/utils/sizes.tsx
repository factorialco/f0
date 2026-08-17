export const columnWidths = {
  auto: undefined,
  fit: 1,
  /**
   * Takes whatever width the table has left over instead of the width its own
   * content asks for. See {@link getColSizing} for why that needs a percentage.
   */
  fill: "100%",
} as const

export type ColumnWidth = keyof typeof columnWidths | number
