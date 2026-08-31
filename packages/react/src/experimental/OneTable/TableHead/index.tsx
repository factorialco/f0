import { AnimatePresence, motion } from "motion/react"

import { TableHead as TableHeadRoot } from "@/ui/table"

import { F0Icon, IconType } from "../../../components/F0Icon"
import { ArrowDown, InfoCircleLine } from "../../../icons/app"
import { InfoHint, type InfoHintContent } from "../../../lib/InfoHint"
import { OneEllipsis } from "../../../lib/OneEllipsis"
import { cn, focusRing } from "../../../lib/utils"
import { getColWidth } from "../utils/colWidth"
import { ColumnWidth } from "../utils/sizes"
import { useTable } from "../utils/TableContext"

/**
 * Structured help copy for a column header. The same shape every other
 * ⓘ affordance takes — see {@link InfoHintContent}, where `label` defaults to
 * the column label when the header's children are a string.
 *
 * A table-specific name for a shape that is no longer table-specific: the
 * canonical export is `InfoHintContent`, and this stays as an alias so
 * existing imports keep working.
 */
export type TableHeaderInfo = InfoHintContent

interface TableHeadProps {
  children: React.ReactNode

  /**
   * The width of the header cell. If not provided, the width will be "auto"
   * @default "auto"
   */
  width?: ColumnWidth

  /**
   * Optional minimum width for the header cell. When provided, overrides the
   * minWidth derived from `width`, allowing the column to grow past `width`
   * while never shrinking below this value.
   */
  minWidth?: ColumnWidth

  /**
   * When true, the header cell will stick in the specified position when scrolling horizontally
   * @default undefined
   */
  sticky?: { left?: number; right?: never } | { left?: never; right?: number }

  /**
   * The current sort direction of this column. "none" indicates no sorting,
   * "asc" sorts ascending (A-Z, 1-9), and "desc" sorts descending (Z-A, 9-1)
   * @default "none"
   */
  sortState?: "none" | "asc" | "desc"

  /**
   * Callback fired when the header is clicked to sort.
   * Use this to handle toggling between sort states.
   */
  onSortClick?: () => void

  /**
   * Callback fired when the header cell is clicked, for cells that are
   * actionable beyond sorting. Like {@link onSortClick}, the whole cell is the
   * target — see the note on the cell's click handler.
   */
  onClick?: () => void

  /**
   * Optional header info. When provided, displays an info icon next to the
   * header content. Pass a string for a short text tooltip, or a
   * {@link TableHeaderInfo} object for a structured hoverable card.
   */
  info?: string | TableHeaderInfo

  /**
   * Icon to display when info is provided.
   * @default InfoCircleLine
   */
  infoIcon?: IconType

  /**
   * When true, the header cell will not be visible.
   * @default false
   */
  hidden?: boolean

  /**
   * Emphasizes the cell with a subtle gray background, drawing attention to a
   * highlighted column.
   * @default false
   */
  highlighted?: boolean

  /**
   * Alingment of the cell
   * @default "left"
   */
  align?: "left" | "right"

  /**
   * The class name of the header cell
   */
  className?: string

  /**
   * The number of columns this header cell should span
   */
  colSpan?: number
}

export function TableHead({
  children,
  width = "auto",
  minWidth,
  sortState = "none",
  onSortClick,
  onClick,
  info,
  infoIcon = InfoCircleLine,
  sticky,
  hidden = false,
  highlighted = false,
  align = "left",
  className,
  colSpan,
}: TableHeadProps) {
  const { isScrolled, isScrolledRight } = useTable()

  const isStickyLeft = sticky?.left !== undefined
  const isStickyRight = sticky?.right !== undefined
  const isSticky = isStickyLeft || isStickyRight
  const stickyLeft = sticky?.left ?? 0
  const stickyRight = sticky?.right ?? 0

  const hasContent = onSortClick || info

  // The whole cell is the click target, not just the control drawn inside it:
  // a 20px icon that only appears on hover is a small thing to aim at, and the
  // cell already lights up on hover to advertise the hit area. The controls
  // stay real buttons — for focus, `aria-*` and AT — but hold no handler of
  // their own; their click bubbles up to here, so pointer and keyboard both
  // arrive through one path. Anything else interactive in the cell has to stop
  // propagation, or it would trigger this on the way out.
  const handleCellClick =
    onSortClick || onClick
      ? () => {
          onSortClick?.()
          onClick?.()
        }
      : undefined

  const content = (
    <>
      <div
        className={cn(
          "flex items-center whitespace-nowrap",
          hasContent && "gap-1",
          align === "right" && "flex-row-reverse"
        )}
      >
        {typeof children === "string" ? (
          <OneEllipsis className={cn(width !== "auto" && "overflow-hidden")}>
            {children}
          </OneEllipsis>
        ) : (
          <div
            className={cn("truncate", width !== "auto" && "overflow-hidden")}
          >
            {children}
          </div>
        )}
        {hasContent && (
          <div className="flex items-center">
            {info && (
              <div
                className="flex h-6 w-6 items-center justify-center text-f1-foreground-secondary"
                // Reading the column's help text is not asking to sort by it.
                onClick={(event) => event.stopPropagation()}
              >
                <InfoHint
                  info={info}
                  icon={infoIcon}
                  label={typeof children === "string" ? children : undefined}
                />
              </div>
            )}
            {onSortClick && (
              <motion.button
                className={cn(
                  "relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100",
                  focusRing()
                )}
                aria-label="Sort"
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.1 }}
              >
                <AnimatePresence>
                  <motion.div
                    key="sort-arrow"
                    className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center"
                    animate={{
                      rotate: sortState === "desc" ? 0 : 180,
                      x: sortState === "none" ? -3 : 0,
                      y: sortState === "none" ? -1 : 0,
                      scale: sortState === "none" ? 0.9 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.175, 0.885, 0.32, 1.275],
                    }}
                  >
                    <F0Icon icon={ArrowDown} size="xs" />
                  </motion.div>
                  {sortState === "none" && (
                    <motion.div
                      key="sort-arrow-secondary"
                      className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center"
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
                      animate={{ opacity: 1, x: 3, y: 1, scale: 0.9 }}
                      exit={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.175, 0.885, 0.32, 1.275],
                      }}
                    >
                      <F0Icon icon={ArrowDown} size="xs" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        )}
      </div>
    </>
  )

  const colWidth = getColWidth(width)
  const colMinWidth = minWidth !== undefined ? getColWidth(minWidth) : colWidth

  return (
    <TableHeadRoot
      className={cn(
        "group h-11",
        "bg-f1-background",
        isSticky &&
          (isScrolled || isScrolledRight) &&
          "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']",
        isSticky && "sticky",
        // The tint is a background-image over the opaque header background,
        // not a bg-color swap: an alpha bg-color would let the `thead::before`
        // top rule bleed through and double up with the one painted on top.
        highlighted &&
          "bg-[linear-gradient(hsl(var(--neutral-2)),hsl(var(--neutral-2)))]",
        hidden && "after:hidden",
        handleCellClick && "cursor-pointer",
        className
      )}
      data-highlighted={highlighted ? "true" : undefined}
      onClick={handleCellClick}
      tabIndex={sticky ? 0 : undefined}
      colSpan={colSpan}
      // Min and max width is needed to prevent the cell from shrinking or expanding when the table is scrolled
      style={{
        width: colWidth,
        maxWidth: colWidth,
        minWidth: colMinWidth,
        left: stickyLeft,
        right: stickyRight,
      }}
      role={hidden ? "presentation" : undefined}
      aria-sort={
        onSortClick
          ? sortState === "asc"
            ? "ascending"
            : sortState === "desc"
              ? "descending"
              : "none"
          : undefined
      }
    >
      <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary" />
      <AnimatePresence>
        {((isStickyLeft && isScrolled) ||
          (isStickyRight && isScrolledRight)) && (
          <motion.div
            key="shadow-gradient"
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
      {!hidden && content}
    </TableHeadRoot>
  )
}
