import { motion } from "motion/react"

import type { TableVisualizationType } from "@/experimental/OneDataCollection/types"

import { TableCell, TableRow } from "@/experimental/OneTable"
import {
  getAnimationVariants,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { cn } from "@/lib/utils"

import { SummariesDefinition } from "../../../../../summary"
import { TableColumnDefinition } from "../../types"

type SummaryRowProps<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  label?: string
  data: Record<string, unknown>
  emptyPlaceholder?: string
  sticky?: boolean
  keyPrefix: string
  definitions: Record<string, { type: "sum" | "count" }>
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  selectable: boolean
  showItemActions: boolean
  checkColumnWidth: number
  getStickyPosition: (index: number) => { left: number } | undefined
  typeLabels: Record<"sum" | "count", string>
  fromVisualization: TableVisualizationType
  animationIndex?: number
  initialAnimationState?: "hidden" | "visible"
}

const MotionTableRow = motion.create(TableRow)

export const SummaryRow = <
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>({
  label,
  data,
  emptyPlaceholder = "-",
  sticky = false,
  keyPrefix,
  definitions,
  columns,
  selectable,
  showItemActions,
  checkColumnWidth,
  getStickyPosition,
  typeLabels,
  fromVisualization = "table",
  animationIndex,
  initialAnimationState = "visible",
}: SummaryRowProps<R, Sortings, Summaries>) => {
  const contentClassName = cn(
    "flex w-full min-w-0 items-center",
    fromVisualization === "editableTable" ? "min-h-8" : "min-h-6"
  )

  const summaryRowContent = (
    <>
      {selectable && (
        <TableCell
          width={checkColumnWidth}
          sticky={sticky ? { left: 0 } : undefined}
          fromVisualization={fromVisualization}
        >
          {label && (
            <div className={contentClassName}>
              <div className="font-medium text-f1-foreground-secondary">
                {label}
              </div>
            </div>
          )}
        </TableCell>
      )}
      {columns.map((column, cellIndex) => (
        <TableCell
          key={`${keyPrefix}-summary-${String(column.label)}`}
          firstCell={cellIndex === 0}
          width={column.width}
          sticky={sticky ? getStickyPosition(cellIndex) : undefined}
          fromVisualization={fromVisualization}
        >
          {(() => {
            const summaryDefinition = column.summary
              ? definitions[column.summary]
              : undefined

            return (
              <div
                className={cn(
                  contentClassName,
                  column.align === "right" ? "justify-end" : ""
                )}
              >
                {cellIndex === 0 && !selectable && label ? (
                  <div className="font-medium text-f1-foreground-secondary">
                    {label}
                  </div>
                ) : column.summary && summaryDefinition ? (
                  <div className="flex gap-1">
                    <span className="text-f1-foreground-secondary">
                      {typeLabels[summaryDefinition.type]}
                    </span>
                    {`${data[column.summary] ?? "-"}`}
                  </div>
                ) : (
                  emptyPlaceholder
                )}
              </div>
            )
          })()}
        </TableCell>
      ))}
      {showItemActions && (
        <>
          <th className="hidden md:table-cell"></th>
          <TableCell
            key={`${keyPrefix}-summary-actions`}
            width={68}
            sticky={sticky ? { right: 0 } : undefined}
            className="table-cell md:hidden"
          >
            {""}
          </TableCell>
        </>
      )}
    </>
  )

  const rowClassName = cn(
    sticky &&
      "sticky bottom-0 z-10 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background",
    "font-medium"
  )

  if (animationIndex !== undefined) {
    return (
      <MotionTableRow
        key={`${keyPrefix}-summary-row`}
        className={rowClassName}
        variants={getAnimationVariants()}
        initial={initialAnimationState}
        animate="visible"
        exit="hidden"
        custom={animationIndex}
        layout
      >
        {summaryRowContent}
      </MotionTableRow>
    )
  }

  return (
    <TableRow key={`${keyPrefix}-summary-row`} className={rowClassName}>
      {summaryRowContent}
    </TableRow>
  )
}
