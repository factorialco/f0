import { ChevronDown, ChevronRight } from "lucide-react"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { NestedRowProps } from "@/experimental/OneDataCollection/visualizations/collection/Table/components/Row"
import { Add, ArrowDown } from "@/icons/app"
import { cn } from "@/lib/utils"

import {
  CHEVRON_PARENT_SIZE,
  CHEVRON_SIZE,
  getNestedMarginLeft,
  getNestedMarginLeftForLoadMore,
  isFirstCellDetailed,
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
  const detailedVariant = isFirstCellDetailed(firstCell, nestedRowProps)

  const onLoadMoreChildren = nestedRowProps?.onLoadMoreChildren
  const onAddRow = nestedRowProps?.onAddRow
  const depth = nestedRowProps?.depth ?? 0

  const marginLeft = firstCellWithDepth
    ? getNestedMarginLeft({
        depth: !firstCellWithChildren ? depth + 1 : depth,
      })
    : undefined

  const isActionRow = onLoadMoreChildren || onAddRow

  return (
    <div
      className={cn(
        width !== "auto" && "overflow-hidden",
        "relative z-[1] h-full",
        firstCellWithChildren && "flex items-center gap-2"
      )}
      style={{
        marginLeft: isActionRow
          ? getNestedMarginLeftForLoadMore({
              depth: depth + (detailedVariant ? 0 : 1),
              isDetailedVariant: detailedVariant,
            })
          : marginLeft,
      }}
      onClick={() => {
        // Force the link to be clicked even if the element pointer-events: auto
        if (!isActionRow) {
          linkRef.current?.click()
          onClick?.()
        }
      }}
    >
      {onAddRow ? (
        <div
          className={cn("pointer-events-auto flex items-center w-full h-full")}
        >
          {onAddRow.actions.length === 1 ? (
            <F0Button
              variant="outline"
              size="sm"
              icon={onAddRow.actions[0].icon ?? Add}
              label={onAddRow.actions[0].label}
              onClick={(e) => {
                e.stopPropagation()
                onAddRow.actions[0].onClick?.()
              }}
              loading={onAddRow.actions[0].loading}
              disabled={onAddRow.actions[0].disabled}
            />
          ) : onAddRow.actions.some((a) => a.description !== undefined) ? (
            <F0ButtonDropdown
              mode="dropdown"
              variant="outline"
              size="sm"
              trigger={onAddRow.label}
              disabled={onAddRow.actions.every((a) => a.disabled)}
              loading={onAddRow.actions.some((a) => a.loading)}
              items={onAddRow.actions.map((action, index) => ({
                value: index.toString(),
                label: action.label,
                icon: action.icon,
                description: action.description,
              }))}
              onClick={(value) => {
                const action = onAddRow.actions[Number(value)]
                action?.onClick?.()
              }}
            />
          ) : (
            <F0ButtonDropdown
              variant="outline"
              size="sm"
              disabled={onAddRow.actions.every((a) => a.disabled)}
              loading={onAddRow.actions.some((a) => a.loading)}
              items={onAddRow.actions.map((action, index) => ({
                value: index.toString(),
                label: action.label,
                icon: action.icon,
              }))}
              onClick={(value) => {
                const action = onAddRow.actions[Number(value)]
                action?.onClick?.()
              }}
            />
          )}
        </div>
      ) : onLoadMoreChildren ? (
        <>
          <div
            className={cn(
              "pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"
            )}
          >
            <F0Button
              variant="ghost"
              size="md"
              icon={ArrowDown}
              label="See more"
              onClick={(e) => {
                e.stopPropagation()
                onLoadMoreChildren?.()
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={cn(
              "flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center",
              firstCellWithChildren &&
                "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"
            )}
            style={
              {
                ...{
                  "--chevron-parent-size": `${CHEVRON_PARENT_SIZE}px`,
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
              firstCellWithChildren && "min-w-0 w-full",
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
