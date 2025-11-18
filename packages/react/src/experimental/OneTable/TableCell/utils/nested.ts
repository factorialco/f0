export const SPACING_FACTOR = 24
export const CHEVRON_SIZE = 16
export const LINE_WIDTH = "1px"

export const getNestedMarginLeft = (depth: number, padding: number = 0) => {
  return `${depth * SPACING_FACTOR + padding}px`
}

export const isFirstCellWithDepth = (firstCell: boolean, depth: number) => {
  return firstCell && depth > 0
}

export const isFirstCellWithChildren = (
  firstCell: boolean,
  hasChildren: boolean
) => {
  return firstCell && hasChildren
}

export const isFirstCellExpanded = (
  expandedLevels: number,
  firstCell: boolean
) => {
  return expandedLevels > 0 && firstCell
}

export const isFirstCellWithTableChildren = (
  firstCell: boolean,
  tableWithChildren: boolean
) => {
  return firstCell && tableWithChildren
}

export const isFirstCellWithNoChildrenAndTableChildren = (
  firstCell: boolean,
  hasChildren: boolean,
  tableWithChildren: boolean
) => {
  return (
    !hasChildren && isFirstCellWithTableChildren(firstCell, tableWithChildren)
  )
}
