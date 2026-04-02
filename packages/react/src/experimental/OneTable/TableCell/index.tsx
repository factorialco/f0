import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"

import type { TableVisualizationType } from "@/patterns/DataCollection/types"

import { ReferenceType } from "@/patterns/DataCollection/visualizations/collection/Table"
import { NestedRowProps } from "@/patterns/DataCollection/visualizations/collection/Table/components/Row"
import { Skeleton } from "@/ui/skeleton"
import { TableCell as TableCellRoot } from "@/ui/table"

import { Link } from "../../../lib/linkHandler"
import { useI18n } from "../../../lib/providers/i18n"
import { cn } from "../../../lib/utils"
import { getColWidth } from "../utils/colWidth"
import { useTable } from "../utils/TableContext"
import { NestedCell } from "./NestedCell"
import { TreeConnector } from "./TreeConnector"
import {
  isFirstCellWithChildren,
  isFirstCellWithTableChildren,
  SPACING_FACTOR,
} from "./utils/nested"

interface TableCellProps {
  children: React.ReactNode

  /**
   * The URL to navigate to when the cell is clicked
   */
  href?: string

  /**
   * The onClick handler for the cell
   */
  onClick?: () => void

  /**
   * Defines if the cell is the first cell in the row
   * @default false
   */
  firstCell?: boolean

  /**
   * The width of the cell
   */
  width?: number | "auto"

  /**
   * When true, the header cell will stick in the specified position when scrolling horizontally
   * @default undefined
   */
  sticky?: { left?: number; right?: never } | { left?: never; right?: number }

  /**
   * The number of columns the cell should span
   */
  colSpan?: number

  /**
   * The class name of the cell
   */
  className?: string

  /**
   * Defines if the cell is loading
   * @default false
   */

  loading?: boolean
  /**
   * The props for the nested row
   */
  nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean
    tableWithChildren?: boolean
    selectableRow?: boolean
  }
  /**
   * The visualization the cell is being rendered in
   */
  fromVisualization?: TableVisualizationType

  referenceRowType?: ReferenceType
}

const stripedLines =
  "repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)"

const stickyScrolledBase =
  "before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']"

const stickyScrollClasses: Record<ReferenceType, string> = {
  none: `bg-f1-background ${stickyScrolledBase} before:bg-f1-background group-hover:before:bg-f1-background-hover`,
  striped: `bg-f1-background bg-[${stripedLines}] [background-size:100%_100px] ${stickyScrolledBase} before:bg-[${stripedLines},_var(--f1-background)] before:[background-size:100%_100px,_100%_100%] group-hover:before:bg-[${stripedLines},_var(--f1-background-hover)] group-hover:before:[background-size:100%_100px,_100%_100%]`,
}

export function TableCell({
  children,
  href,
  onClick,
  width = "auto",
  firstCell = false,
  sticky,
  colSpan,
  className,
  loading = false,
  nestedRowProps,
  fromVisualization,
  referenceRowType = "none",
}: TableCellProps) {
  const { isScrolled, isScrolledRight } = useTable()
  const { actions } = useI18n()

  const isStickyLeft = sticky?.left !== undefined
  const isStickyRight = sticky?.right !== undefined
  const isSticky = isStickyLeft || isStickyRight
  const stickyLeft = sticky?.left
  const stickyRight = sticky?.right

  const colWidth = getColWidth(width)

  const linkRef = useRef<HTMLAnchorElement>(null)
  const depth = nestedRowProps?.depth ?? 0
  const isDetailedVariant = nestedRowProps?.nestedVariant === "detailed"

  const firstCellMarginLeft = isFirstCellWithTableChildren(
    firstCell,
    !!nestedRowProps?.tableWithChildren
  ) && {
    marginLeft: `${(depth + (isDetailedVariant ? 0 : 1)) * SPACING_FACTOR}px`,
  }

  return (
    <TableCellRoot
      colSpan={colSpan}
      className={cn(
        "h-full",
        firstCell && "peer font-medium",
        isSticky && isScrolled && stickyScrollClasses[referenceRowType],
        isSticky && "sticky z-10",
        isStickyRight && stickyScrollClasses[referenceRowType],
        href && "cursor-pointer",
        className
      )}
      // Min and max width is needed to prevent the cell from shrinking or expanding when the table is scrolled
      style={{
        width: colWidth,
        maxWidth: colWidth,
        minWidth: colWidth,
        left: stickyLeft,
        right: stickyRight,
      }}
    >
      <AnimatePresence>
        {((isStickyLeft && isScrolled) ||
          (isStickyRight && isScrolledRight)) && (
          <motion.div
            key="cell-shadow-gradient"
            className={cn(
              "absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent",
              isStickyLeft && "-right-4 bg-gradient-to-r",
              isStickyRight && "-left-4 bg-gradient-to-l"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {firstCell && nestedRowProps?.tableWithChildren && (
        <TreeConnector
          firstCell={firstCell}
          nestedRowProps={nestedRowProps}
          fromVisualization={fromVisualization}
        />
      )}

      {loading && (
        <div
          style={{ ...firstCellMarginLeft }}
          className={cn(
            "flex h-full items-center",
            fromVisualization === "editableTable"
              ? "min-h-[32px]"
              : "min-h-[24px]"
          )}
        >
          <Skeleton className="h-4 w-full" />
        </div>
      )}

      {!loading && (
        <>
          <div
            className={cn(
              "[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]",
              "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]",
              "[&:has(a)]:relative [&:has(a)]:z-[1]",
              "pointer-events-none h-full items-start"
            )}
          >
            {isFirstCellWithChildren(
              firstCell,
              !!nestedRowProps?.rowWithChildren
            ) ? (
              <NestedCell
                linkRef={linkRef}
                firstCell={firstCell}
                nestedRowProps={nestedRowProps}
              >
                {children}
              </NestedCell>
            ) : (
              <div
                className={cn(
                  width !== "auto" && "overflow-hidden",
                  "relative z-[1] h-full"
                )}
                style={{
                  ...firstCellMarginLeft,
                }}
                onClick={() => {
                  // Force the link to be clicked even if the element pointer-events: auto
                  linkRef.current?.click()
                  onClick?.()
                }}
              >
                {children}
              </div>
            )}
          </div>
          {href && (
            <Link
              ref={linkRef}
              href={href}
              className="pointer-events-auto absolute inset-0 !z-0 block"
              tabIndex={firstCell ? undefined : -1}
            >
              <span className="sr-only">{actions.view}</span>
            </Link>
          )}
          {onClick && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
              data-testid="table-cell-action-button"
              className="table-cell-action-button absolute inset-0 !z-0 block"
              tabIndex={firstCell ? undefined : -1}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onClick()
                }
              }}
            >
              <span className="sr-only">{actions.view}</span>
            </button>
          )}
        </>
      )}
    </TableCellRoot>
  )
}
