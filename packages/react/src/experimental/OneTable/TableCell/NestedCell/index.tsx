import { F0Button } from "@/components/F0Button"
import { NestedRowProps } from "@/experimental/OneDataCollection/visualizations/collection/Table/components/Row"
import { ArrowDown } from "@/icons/app"
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
  firstCell: boolean
  nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean
    tableWithChildren?: boolean
  }
  children: React.ReactNode
  onClick?: () => void
}

export const NestedCell = ({
  width,
  linkRef,
  firstCell,
  nestedRowProps,
  children,
  onClick,
}: NestedCellProps) => {
  const firstCellWithChildren = isFirstCellWithChildren(
    firstCell,
    !!nestedRowProps?.rowWithChildren
  )
  const firstCellWithDepth = isFirstCellWithDepth(
    firstCell,
    nestedRowProps?.depth ?? 0
  )
  const firstCellWithNoChildrenAndTableChildren =
    isFirstCellWithNoChildrenAndTableChildren(
      firstCell,
      !!nestedRowProps?.rowWithChildren,
      !!nestedRowProps?.tableWithChildren
    )

  const marginLeft = firstCellWithDepth
    ? getNestedMarginLeft(nestedRowProps?.depth ?? 0)
    : undefined

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
      {nestedRowProps?.onLoadMoreChildren ? (
        <>
          <div
            className={cn(
              "pointer-events-auto cursor-pointer rounded-2xs hover:bg-f1-foreground-disabled"
            )}
          >
            <F0Button
              variant="neutral"
              size="sm"
              icon={ArrowDown}
              label="Load more"
              onClick={(e) => {
                e.stopPropagation()
                nestedRowProps?.onLoadMoreChildren?.()
              }}
            />
          </div>
        </>
      ) : (
        <>
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
                nestedRowProps?.onExpand?.()
              }
            }}
          >
            {firstCellWithChildren &&
              (nestedRowProps?.expanded ? (
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
        </>
      )}
    </div>
  )
}
