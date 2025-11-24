import { NestedVariant } from "@/hooks/datasource/types/nested.typings"
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
  hasChildren: boolean
  depth: number
  expandedLevels: number
  type?: NestedVariant
}

export const connectorVariables = (
  expandedLevels: number,
  type: NestedVariant
) => {
  const height =
    type === "detailed"
      ? `calc(${expandedLevels + 1} * 100% - ${SPACING_FACTOR + CHEVRON_SIZE / 2}px)`
      : `calc(${expandedLevels} * 100% - ${SPACING_FACTOR}px)`

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
  hasChildren,
  depth,
  expandedLevels,
  type = "basic",
}: TreeConnectorProps) => {
  const firstCellWithDepth = isFirstCellWithDepth(firstCell, depth)
  const firstCellExpanded = isFirstCellExpanded(expandedLevels, firstCell)
  const typeBasic = type === "basic"
  const typeDetailed = type === "detailed"

  const detailedWithChildren = typeDetailed && hasChildren

  if (!firstCellExpanded && !firstCellWithDepth && !hasChildren) {
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
        firstCellWithDepth && !hasChildren && "after:w-8"
      )}
      style={{
        marginLeft: firstCellWithDepth ? getNestedMarginLeft(depth) : undefined,
        ...connectorVariables(expandedLevels, type),
      }}
    />
  )
}
