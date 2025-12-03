import { NestedRowProps } from "@/experimental/OneDataCollection/visualizations/collection/Table/components/Row"

export const SPACING_FACTOR = 32
export const CHEVRON_PARENT_SIZE = 24
export const CHEVRON_SIZE = 18
export const LINE_WIDTH = "1px"
export const PADDING_TOP = 8
export const BUTTON_HEIGHT = 32

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

export const isFirstCellExpanded = (expanded: boolean, firstCell: boolean) => {
  return expanded && firstCell
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

export const emptyDetailedCellClassName = (
  nestedRowProps?: NestedRowProps & { rowWithChildren?: boolean }
) => {
  const { nestedVariant, onLoadMoreChildren, rowWithChildren } =
    nestedRowProps ?? {}

  return (
    nestedVariant === "detailed" &&
    !onLoadMoreChildren &&
    !rowWithChildren &&
    "has-[span:only-child:empty]:pt-0.5 " +
      " has-[span:only-child:empty]:before:static" +
      " has-[span:only-child:empty]:before:opacity-[0.5]" +
      " has-[span:only-child:empty]:before:content-['N/A']"
  )
}
