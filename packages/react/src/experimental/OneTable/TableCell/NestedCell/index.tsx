import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  CHEVRON_SIZE,
  getNestedMarginLeft,
  isFirstCellWithChildren,
  isFirstCellWithDepth,
  isFirstCellWithNoChildrenAndTableChildren,
  SPACING_FACTOR,
} from "../utils/nested"

interface NestedCellProps {
  width?: number | "auto"
  linkRef: React.RefObject<HTMLAnchorElement>
  hasChildren: boolean
  firstCell: boolean
  depth: number
  expandedLevels: number
  children: React.ReactNode
  tableWithChildren?: boolean
  onClick?: () => void
  onExpand?: () => void
}

export const NestedCell = ({
  width,
  linkRef,
  hasChildren,
  firstCell,
  depth,
  expandedLevels,
  children,
  tableWithChildren = false,
  onClick,
  onExpand,
}: NestedCellProps) => {
  const firstCellWithChildren = isFirstCellWithChildren(firstCell, hasChildren)
  const firstCellWithDepth = isFirstCellWithDepth(firstCell, depth)
  const firstCellWithNoChildrenAndTableChildren =
    isFirstCellWithNoChildrenAndTableChildren(
      firstCell,
      hasChildren,
      tableWithChildren
    )

  const marginLeft = firstCellWithDepth ? getNestedMarginLeft(depth) : undefined

  return (
    <div
      className={cn(
        width !== "auto" && "overflow-hidden",
        "relative z-[1]",
        firstCellWithChildren && "flex items-center gap-2"
      )}
      style={{ marginLeft }}
      onClick={() => {
        // Force the link to be clicked even if the element pointer-events: auto
        linkRef.current?.click()
        onClick?.()
      }}
    >
      <div
        className={cn(
          "h-[var(--chevron-size)] w-[var(--chevron-size)]",
          firstCellWithChildren &&
            "pointer-events-auto cursor-pointer rounded-2xs hover:bg-f1-foreground-disabled"
        )}
        style={
          {
            ...{
              "--chevron-size": `${CHEVRON_SIZE}px`,
              "--spacing-factor": `${SPACING_FACTOR}px`,
            },
          } as React.CSSProperties
        }
        onClick={(e) => {
          if (firstCellWithChildren) {
            e.stopPropagation()
            onExpand?.()
          }
        }}
      >
        {firstCellWithChildren &&
          (expandedLevels > 0 ? (
            <ChevronDown
              className="pointer-events-none shrink-0"
              size={CHEVRON_SIZE}
            />
          ) : (
            <ChevronRight
              className="pointer-events-none shrink-0"
              size={CHEVRON_SIZE}
            />
          ))}
      </div>
      <div
        className={cn(
          firstCellWithChildren && "min-w-0",
          firstCellWithNoChildrenAndTableChildren &&
            "pl-[var(--spacing-factor)]",
          "relative"
        )}
      >
        {children}
      </div>
    </div>
  )
}
