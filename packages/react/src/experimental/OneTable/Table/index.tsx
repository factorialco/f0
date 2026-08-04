import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { Table as TableRoot } from "@/ui/table"

import { withSkeleton } from "../../../lib/skeleton"
import { Spinner } from "@/ui/Spinner"
import { TableBody } from "../TableBody"
import { TableCell } from "../TableCell"
import { TableHead } from "../TableHead"
import { TableHeader } from "../TableHeader"
import { TableRow } from "../TableRow"
import { TableContext } from "../utils/TableContext"

export type TableScroll = "self" | "page"

export interface TableProps {
  children: React.ReactNode
  loading?: boolean

  /**
   * Which element provides the scrollport that sticky rows pin to.
   *
   * - `"self"`: the table scrolls inside its own container. The container must
   *   be height-constrained for that to happen, otherwise it grows to fit the
   *   rows and the sticky header pins to a box that is itself scrolled away.
   * - `"page"`: the table creates no scrollport of its own, so sticky rows pin
   *   to the closest scrolling ancestor — normally the page. Use this when the
   *   table sits in a page that scrolls as a whole. Horizontal scrolling moves
   *   to that ancestor too.
   *
   * @default "self"
   */
  scroll?: TableScroll
}

/**
 * Closest ancestor that scrolls. Used in `"page"` mode, where the horizontal
 * offset that drives the frozen-column shadows lives on an ancestor rather
 * than on our own container.
 */
function getScrollParent(element: HTMLElement): HTMLElement | null {
  let node = element.parentElement
  while (node) {
    const { overflowX, overflowY } = getComputedStyle(node)
    if (/auto|scroll|overlay/.test(`${overflowX} ${overflowY}`)) {
      return node
    }
    node = node.parentElement
  }
  return null
}

function TableBase({ children, loading = false, scroll = "self" }: TableProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolledRight, setIsScrolledRight] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scroller = scroll === "page" ? getScrollParent(container) : container
    if (!scroller) return

    const handleScroll = () => {
      setIsScrolled(scroller.scrollLeft > 0)
      setIsScrolledRight(
        scroller.scrollWidth - scroller.scrollLeft - scroller.clientWidth > 0
      )
    }

    handleScroll()
    scroller.addEventListener("scroll", handleScroll)

    return () => {
      scroller.removeEventListener("scroll", handleScroll)
    }
  }, [scroll])

  return (
    <TableContext.Provider
      value={{ isScrolled, setIsScrolled, isScrolledRight, setIsScrolledRight }}
    >
      <div
        ref={containerRef}
        className={cn(
          "relative w-full",
          scroll === "self" && "h-full overflow-auto"
        )}
      >
        <TableRoot
          className={cn(loading && "select-none opacity-50 transition-opacity")}
          aria-live={loading ? "polite" : undefined}
          aria-busy={loading ? "true" : undefined}
        >
          {children}
        </TableRoot>
        <AnimatePresence>
          {loading && (
            <motion.div
              className="absolute inset-0 flex cursor-progress items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Spinner />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TableContext.Provider>
  )
}

interface TableSkeletonProps {
  /**
   * The number of columns to display in the skeleton loading state.
   * Each column will contain a loading placeholder.
   * @default 5
   */
  columns?: number
}

function TableSkeleton({ columns = 5 }: TableSkeletonProps) {
  return (
    <TableContext.Provider
      value={{
        isScrolled: false,
        setIsScrolled: () => {},
        isScrolledRight: false,
        setIsScrolledRight: () => {},
      }}
    >
      <TableRoot
        className="cursor-progress"
        role="presentation"
        aria-hidden="true"
      >
        <TableHeader>
          <TableRow>
            {Array.from({ length: columns }).map((_, i) => (
              <TableHead key={`skeleton-header-${i}`}>
                <Skeleton className="h-4 w-[80px]" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <TableRow key={`skeleton-row-${rowIndex}`}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                  <Skeleton className="h-4 w-[80px]" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </TableContext.Provider>
  )
}

export const OneTable = withSkeleton(TableBase, TableSkeleton)
