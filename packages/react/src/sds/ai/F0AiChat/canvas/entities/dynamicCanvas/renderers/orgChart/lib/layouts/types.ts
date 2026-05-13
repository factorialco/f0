export interface PositionedElement {
  id: string
  x: number
  y: number
  width: number
  height: number
  data: Record<string, unknown>
  type: "node" | "group" | "label"
  parentId?: string
  rowIndex?: number
  colIndex?: number
}

export interface LayoutResult {
  elements: PositionedElement[]
  bounds: {
    minX: number
    minY: number
    maxX: number
    maxY: number
    width: number
    height: number
  }
}

export type LayoutAlgorithm = (
  data: Record<string, unknown>[],
  config: Record<string, unknown>
) => LayoutResult
