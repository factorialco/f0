import { ChevronDown, ChevronRight } from "lucide-react"
import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { Add, ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { NestedRowProps } from "@/patterns/OneDataCollection/visualizations/collection/Table/components/Row"
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
  const { collections } = useI18n()
  const firstCellWithChildren = isFirstCellWithChildren(
    firstCell,
    !!nestedRowProps?.rowWithChildren
  )
  const contentExpandable = !!nestedRowProps?.contentExpandable
  // A leaf's panel toggle. Kept off `expanded`/`onExpand`, which belong to the
  // children: a leaf is handed its parent's handler, and the tree connector
  // keys off `expanded`.
  const showExpander = firstCellWithChildren || (firstCell && contentExpandable)
  // Every first cell in a table that uses `renderExpandedContent` reserves the
  // box, so a row that cannot expand still lines up with the rows that can.
  const reservesExpander =
    showExpander || (firstCell && !!nestedRowProps?.contentExpanderColumn)
  const expanded = firstCellWithChildren
    ? !!nestedRowProps?.expanded
    : !!nestedRowProps?.contentExpanded
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
        depth: !reservesExpander ? depth + 1 : depth,
      })
    : undefined

  const isActionRow = onLoadMoreChildren || onAddRow

  const chevronBoxVars = {
    "--chevron-parent-size": `${CHEVRON_PARENT_SIZE}px`,
    "--chevron-size": `${CHEVRON_SIZE}px`,
    "--spacing-factor": `${SPACING_FACTOR}px`,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        width !== "auto" && "overflow-hidden",
        "relative z-[1] h-full",
        reservesExpander && "flex items-center gap-2"
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
          className={cn(
            "pointer-events-auto flex items-center w-full h-full",
            detailedVariant && "pl-3"
          )}
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
        <div
          className={cn(
            "pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"
          )}
        >
          <F0Button
            variant="ghost"
            size="md"
            icon={ArrowDown}
            label={collections.table.seeMoreChildren}
            onClick={(e) => {
              e.stopPropagation()
              onLoadMoreChildren?.()
            }}
          />
        </div>
      ) : (
        <>
          {showExpander ? (
            <button
              type="button"
              aria-expanded={expanded}
              id={
                contentExpandable && !firstCellWithChildren
                  ? nestedRowProps?.expandToggleId
                  : undefined
              }
              // Only while the panel is rendered — a dangling IDREF is an axe
              // finding.
              aria-controls={
                contentExpandable && !firstCellWithChildren && expanded
                  ? nestedRowProps?.expandPanelId
                  : undefined
              }
              className={cn(
                "flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center",
                "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled",
                focusRing()
              )}
              style={chevronBoxVars}
              // The cell forwards clicks to the row's link; the expander must
              // not navigate.
              onClick={(e) => {
                e.stopPropagation()
                if (firstCellWithChildren) {
                  nestedRowProps?.onExpand?.()
                } else {
                  nestedRowProps?.onExpandContent?.()
                }
              }}
            >
              <span className="sr-only">
                {expanded
                  ? collections.table.collapseRow
                  : collections.table.expandRow}
              </span>
              {expanded ? (
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none shrink-0"
                  size={CHEVRON_SIZE}
                />
              ) : (
                <ChevronRight
                  aria-hidden="true"
                  className="pointer-events-none shrink-0"
                  size={CHEVRON_SIZE}
                />
              )}
            </button>
          ) : (
            <div
              className="flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center"
              style={chevronBoxVars}
            />
          )}
          <div
            className={cn(
              reservesExpander && "min-w-0 w-full h-full",
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
