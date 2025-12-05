import { NestedRowProps } from "@/experimental/OneDataCollection/visualizations/collection/Table/components/Row"

export const SPACING_FACTOR = 32
export const CHEVRON_PARENT_SIZE = 24
export const CHEVRON_SIZE = 18
export const LINE_WIDTH = "1px"
export const PADDING_TOP = 8
export const BUTTON_HEIGHT = 32
export const BUTTON_PADDING = 4
export const CONNECTOR_WIDTH = 40
export const CONNECTOR_WIDTH_WITH_CHILDREN =
  CONNECTOR_WIDTH - CHEVRON_PARENT_SIZE

export const getNestedMarginLeft = ({
  depth,
  padding = 0,
}: {
  depth: number
  padding?: number
}) => {
  return `${depth * SPACING_FACTOR + padding}px`
}

export const getNestedMarginLeftForLoadMore = ({
  depth,
  isDetailedVariant,
}: {
  depth: number
  isDetailedVariant: boolean
}) => {
  return getNestedMarginLeft({
    depth,
    padding: isDetailedVariant ? -BUTTON_HEIGHT / 2 : -BUTTON_PADDING,
  })
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

export const isFirstCellDetailed = (
  firstCell: boolean,
  nestedRowProps?: NestedRowProps & { rowWithChildren?: boolean }
) => {
  return firstCell && nestedRowProps?.nestedVariant === "detailed"
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
