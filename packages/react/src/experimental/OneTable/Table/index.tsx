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

export interface TableProps {
  children: React.ReactNode
  loading?: boolean
  fixedHeader?: boolean
}

function TableBase({ children, loading = false }: TableProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolledRight, setIsScrolledRight] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setIsScrolled(container.scrollLeft > 0)
      setIsScrolledRight(
        container.scrollWidth - container.scrollLeft - container.clientWidth > 0
      )
    }

    handleScroll()
    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <TableContext.Provider
      value={{ isScrolled, setIsScrolled, isScrolledRight, setIsScrolledRight }}
    >
      {/* The overlay lives OUTSIDE the scroll container (as a sibling) so it
          always covers the visible viewport: `absolute inset-0` inside an
          `overflow-auto` element only covers the first scroll page, so the
          spinner scrolled out of view (and could paint past the widget's
          rounded boundary) when the table was scrolled. */}
      <div className="relative h-full w-full">
        <div ref={containerRef} className="h-full w-full overflow-auto">
          <TableRoot
            className={cn(
              loading && "select-none opacity-50 transition-opacity"
            )}
            aria-live={loading ? "polite" : undefined}
            aria-busy={loading ? "true" : undefined}
          >
            {children}
          </TableRoot>
        </div>
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
      {/* Clip the fixed-size placeholder rows: the skeleton has no scroll
          container of its own, so without this it paints past short
          containers (e.g. a small dashboard widget card). */}
      <div className="h-full w-full overflow-hidden">
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
      </div>
    </TableContext.Provider>
  )
}

export const OneTable = withSkeleton(TableBase, TableSkeleton)
