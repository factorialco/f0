import { NestedRowProps } from "@/experimental/OneDataCollection/visualizations/collection/Table/components/Row"
import { cn } from "@/lib/utils"
import {
  CHEVRON_SIZE,
  getNestedMarginLeft,
  isFirstCellExpanded,
  isFirstCellWithDepth,
  LINE_WIDTH,
  SPACING_FACTOR,
} from "../utils/nested"

interface TreeConnectorProps {
  firstCell: boolean
  nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean
    tableWithChildren?: boolean
  }
}

export const connectorVariables = (height: string) => {
  return {
    "--line-left": `-${2 * CHEVRON_SIZE}px`,
    "--line-width": LINE_WIDTH,
    "--horizontal-offset": `${CHEVRON_SIZE / 2}px`,
    "--horizontal-height": `${SPACING_FACTOR / 2}px`,
    "--line-top": `-${2 * CHEVRON_SIZE}px`,
    "--line-height": height,
  }
}

export const verticalConnectorStyles =
  "h-full overflow-visible " +
  "before:absolute " +
  "before:-left-[var(--line-left)] " +
  "before:-top-[var(--line-top)] " +
  "before:h-[var(--line-height)] " +
  "before:w-[var(--line-width)] " +
  "before:bg-f1-foreground-disabled " +
  "before:content-['']"

export const horizontalConnectorStyles =
  "after:absolute " +
  "after:left-[var(--horizontal-offset)] " +
  "after:top-[var(--horizontal-offset)] " +
  "after:h-[var(--horizontal-height)] " +
  "after:w-4 " +
  "after:rounded-bl-[var(--horizontal-height)] " +
  "after:content-[''] " +
  "after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]"

export const TreeConnector = ({
  firstCell,
  nestedRowProps,
}: TreeConnectorProps) => {
  const firstCellWithDepth = isFirstCellWithDepth(
    firstCell,
    nestedRowProps?.depth ?? 0
  )
  const firstCellExpanded = isFirstCellExpanded(
    nestedRowProps?.expanded ?? false,
    firstCell
  )
  const typeBasic = nestedRowProps?.nestedVariant === "basic"
  const typeDetailed = nestedRowProps?.nestedVariant === "detailed"

  const detailedWithChildren = typeDetailed && nestedRowProps?.rowWithChildren
  const marginLeft = firstCellWithDepth
    ? getNestedMarginLeft(nestedRowProps?.depth ?? 0)
    : undefined
  const connectorHeight = nestedRowProps?.connectorHeight
    ? `${nestedRowProps?.connectorHeight}px`
    : "0px"

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
        firstCellExpanded && verticalConnectorStyles,
        firstCellWithDepth &&
          (typeBasic || detailedWithChildren) &&
          horizontalConnectorStyles,
        firstCellWithDepth && !nestedRowProps?.rowWithChildren && "after:w-8"
      )}
      style={{
        marginLeft,
        ...connectorVariables(connectorHeight),
      }}
    />
  )
}
