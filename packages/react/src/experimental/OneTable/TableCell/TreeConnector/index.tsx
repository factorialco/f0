import type { TableVisualizationType } from "@/patterns/OneDataCollection/types"

import { NestedRowProps } from "@/patterns/OneDataCollection/visualizations/collection/Table/components/Row"
import { cn } from "@/lib/utils"

import {
  BUTTON_HEIGHT,
  CHEVRON_PARENT_SIZE,
  CHEVRON_SIZE,
  CONNECTOR_WIDTH,
  CONNECTOR_WIDTH_WITH_CHILDREN,
  getNestedMarginLeft,
  isFirstCellExpanded,
  isFirstCellWithDepth,
  LINE_WIDTH,
  PADDING_TOP,
  SELECTABLE_EDITABLE_ROW_OFFSET,
  SELECTABLE_ROW_OFFSET,
  SPACING_FACTOR,
} from "../utils/nested"

interface TreeConnectorProps {
  firstCell: boolean
  nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean
    tableWithChildren?: boolean
    selectableRow?: boolean
  }
  fromVisualization?: TableVisualizationType
}

export const connectorVariables = (
  height: number,
  nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean
    tableWithChildren?: boolean
    selectableRow?: boolean
  },
  fromVisualization?: TableVisualizationType
) => {
  const { rowWithChildren, nestedVariant, onLoadMoreChildren, onAddRow } =
    nestedRowProps ?? {}

  const isDetailedVariant = nestedVariant === "detailed"
  const isActionRow = onLoadMoreChildren || onAddRow

  const horizontalOffset = isActionRow
    ? BUTTON_HEIGHT / 2 - PADDING_TOP
    : CHEVRON_PARENT_SIZE / 2 - PADDING_TOP

  const connectorWidth =
    rowWithChildren && !isActionRow
      ? CONNECTOR_WIDTH_WITH_CHILDREN
      : isDetailedVariant
        ? CONNECTOR_WIDTH - 6
        : CONNECTOR_WIDTH

  const lineHeight =
    height !== 0 &&
    `calc(${height}px - ${CHEVRON_PARENT_SIZE + PADDING_TOP}px )`

  const editableTableVars =
    fromVisualization === "editableTable"
      ? {
          "--horizontal-offset": `${horizontalOffset + (isDetailedVariant ? 12 : 8)}px`,
          "--starting-y": "52px",
          ...(lineHeight
            ? {
                "--line-height": `calc(${lineHeight} - ${isDetailedVariant ? 12 : 0}px)`,
              }
            : {}),
        }
      : {}

  const rowOffset =
    fromVisualization === "editableTable"
      ? SELECTABLE_EDITABLE_ROW_OFFSET
      : SELECTABLE_ROW_OFFSET

  return {
    "--line-left": `-${2 * CHEVRON_SIZE - (nestedRowProps?.selectableRow ? rowOffset : 0)}px`,
    "--line-width": LINE_WIDTH,
    "--horizontal-offset": `${horizontalOffset}px`,
    "--horizontal-left": `calc(4px - ${nestedRowProps?.selectableRow ? rowOffset : 0}px)`,
    "--horizontal-height": `${SPACING_FACTOR / 2}px`,
    "--connector-width": `${connectorWidth}px`,
    ...(lineHeight ? { "--line-height": lineHeight } : {}),
    "--starting-y": "40px",
    ...editableTableVars,
  }
}

export const childVerticalConnectorStyles =
  "h-full overflow-visible " +
  "before:absolute " +
  "before:left-[var(--horizontal-left)] " +
  "before:top-0 " +
  "before:bottom-0 " +
  "before:w-[var(--line-width)] " +
  "before:bg-f1-foreground-disabled " +
  "before:content-['']"

export const childVerticalConnectorLastStyles =
  "h-full overflow-visible " +
  "before:absolute " +
  "before:left-[var(--horizontal-left)] " +
  "before:top-0 " +
  "before:h-[var(--horizontal-offset)] " +
  "before:w-[var(--line-width)] " +
  "before:bg-f1-foreground-disabled " +
  "before:content-['']"

export const horizontalConnectorStyles =
  "after:absolute " +
  "after:left-[var(--horizontal-left)] " +
  "after:top-[var(--horizontal-offset)] " +
  "after:h-[var(--horizontal-height)] " +
  "after:w-[var(--connector-width)] " +
  "after:rounded-bl-[var(--horizontal-height)] " +
  "after:content-[''] " +
  "after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]"

export const TreeConnector = ({
  firstCell,
  nestedRowProps,
  fromVisualization,
}: TreeConnectorProps) => {
  const firstCellWithDepth = isFirstCellWithDepth(
    firstCell,
    nestedRowProps?.depth ?? 0
  )
  const firstCellExpanded = isFirstCellExpanded(
    nestedRowProps?.expanded ?? false,
    firstCell
  )
  const typeBasic =
    nestedRowProps === undefined || nestedRowProps?.nestedVariant === "basic"
  const typeDetailed = nestedRowProps?.nestedVariant === "detailed"

  const basicOrWithChildren = typeBasic || nestedRowProps?.rowWithChildren
  const detailedWithActionRow =
    typeDetailed &&
    (nestedRowProps?.onLoadMoreChildren || nestedRowProps?.onAddRow)
  const isLastChild = nestedRowProps?.isLastChild ?? false
  const isLastSibling = nestedRowProps?.isLastSibling ?? isLastChild

  const marginLeft = firstCellWithDepth
    ? getNestedMarginLeft({
        depth: nestedRowProps?.depth ?? 0,
        padding: 0,
      })
    : undefined
  const connectorHeight = nestedRowProps?.connectorHeight ?? 0

  if (
    !firstCellExpanded &&
    !firstCellWithDepth &&
    !nestedRowProps?.rowWithChildren
  ) {
    return null
  }

  return (
    <div
      className={cn(
        "absolute inset-0 h-full",
        nestedRowProps?.parentHasChildren &&
          firstCellWithDepth &&
          (isLastSibling
            ? childVerticalConnectorLastStyles
            : childVerticalConnectorStyles),
        nestedRowProps?.parentHasChildren &&
          firstCellWithDepth &&
          basicOrWithChildren &&
          !detailedWithActionRow &&
          horizontalConnectorStyles
      )}
      style={{
        marginLeft,
        ...connectorVariables(
          connectorHeight,
          nestedRowProps,
          fromVisualization
        ),
      }}
    />
  )
}
