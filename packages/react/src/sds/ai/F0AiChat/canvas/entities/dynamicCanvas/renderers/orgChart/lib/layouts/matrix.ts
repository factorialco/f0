import type { LayoutAlgorithm, PositionedElement } from "./types"

interface MatrixConfig {
  nodeWidth: number
  nodeHeight: number
  cellGap: number
  rowField: string
  columnField: string
  rowHeaderWidth?: number
  columnHeaderHeight?: number
  clusterBy?: string[]
}

export const matrixLayout: LayoutAlgorithm = (data, rawConfig) => {
  const config = rawConfig as unknown as MatrixConfig
  const nodeWidth = config.nodeWidth ?? 180
  const nodeHeight = config.nodeHeight ?? 80
  const cellGap = config.cellGap ?? 10
  const rowField = config.rowField ?? "role"
  const columnField = config.columnField ?? "domain"
  const rowHeaderWidth = config.rowHeaderWidth ?? 120
  const columnHeaderHeight = config.columnHeaderHeight ?? 40
  const clusterBy = config.clusterBy ?? []

  const getRowKey = (row: Record<string, unknown>) => {
    const rowValue = String(row[rowField] ?? "Unknown")
    if (clusterBy.length === 0) return rowValue
    const clusterValue = clusterBy
      .map((field) => String(row[field] ?? "Unknown"))
      .join(" / ")
    return `${clusterValue} › ${rowValue}`
  }

  // Get unique rows and columns
  const rows = [...new Set(data.map((r) => getRowKey(r)))]
  const cols = [
    ...new Set(data.map((r) => String(r[columnField] ?? "Unknown"))),
  ]

  // Group data by (row, column) intersection
  const cellData = new Map<string, Record<string, unknown>[]>()

  for (const row of data) {
    const rowKey = getRowKey(row)
    const colKey = String(row[columnField] ?? "Unknown")
    const key = `${rowKey}||${colKey}`
    if (!cellData.has(key)) {
      cellData.set(key, [])
    }
    cellData.get(key)!.push(row)
  }

  const elements: PositionedElement[] = []

  // Column headers
  for (let c = 0; c < cols.length; c++) {
    elements.push({
      id: `col-header-${c}`,
      x: rowHeaderWidth + c * (nodeWidth + cellGap),
      y: 0,
      width: nodeWidth,
      height: columnHeaderHeight,
      data: { __type: "column-header", name: cols[c] },
      type: "label",
      colIndex: c,
    })
  }

  // Row headers and cells
  for (let r = 0; r < rows.length; r++) {
    const rowY = columnHeaderHeight + cellGap + r * (nodeHeight + cellGap)

    // Row header
    elements.push({
      id: `row-header-${r}`,
      x: 0,
      y: rowY,
      width: rowHeaderWidth,
      height: nodeHeight,
      data: { __type: "row-header", name: rows[r] },
      type: "label",
      rowIndex: r,
    })

    // Cells
    for (let c = 0; c < cols.length; c++) {
      const key = `${rows[r]}||${cols[c]}`
      const items = cellData.get(key) ?? []

      elements.push({
        id: `cell-${r}-${c}`,
        x: rowHeaderWidth + c * (nodeWidth + cellGap),
        y: rowY,
        width: nodeWidth,
        height: nodeHeight,
        data: {
          __items: items,
          __row: rows[r],
          __col: cols[c],
          __count: items.length,
          ...items[0],
        },
        type: "node",
        rowIndex: r,
        colIndex: c,
      })
    }
  }

  // Compute bounds
  const totalWidth = rowHeaderWidth + cols.length * (nodeWidth + cellGap)
  const totalHeight =
    columnHeaderHeight + cellGap + rows.length * (nodeHeight + cellGap)

  return {
    elements,
    bounds: {
      minX: 0,
      minY: 0,
      maxX: totalWidth,
      maxY: totalHeight,
      width: totalWidth,
      height: totalHeight,
    },
  }
}
