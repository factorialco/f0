import { TableCell as TableCellRoot } from "@/ui/table"
import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"
import { Link } from "../../../lib/linkHandler"
import { useI18n } from "../../../lib/providers/i18n"
import { cn } from "../../../lib/utils"
import { useTable } from "../utils/TableContext"
import { getColWidth } from "../utils/colWidth"

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

  return (
    <TableCellRoot
      colSpan={colSpan}
      className={cn(
        firstCell && "peer font-medium",
        isSticky &&
          isScrolled &&
          "bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] group-hover:before:bg-f1-background-hover",
        isSticky && "sticky z-10",
        isStickyRight &&
          "bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] group-hover:before:bg-f1-background-hover",
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
      <div
        className={cn(
          "[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]",
          "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]",
          "[&:has(a)]:relative [&:has(a)]:z-[1]",
          "pointer-events-none"
        )}
      >
        <div
          className={
            (cn(width !== "auto" && "overflow-hidden"), "relative z-[1]")
          }
          onClick={() => {
            // Force the link to be clicked even if the element pointer-events: auto
            linkRef.current?.click()
            onClick?.()
          }}
        >
          {children}
        </div>
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
    </TableCellRoot>
  )
}
