import { isAfter, isBefore, isWithinInterval } from "date-fns"
import { AnimatePresence, motion } from "motion/react"

import { cn, focusRing } from "@/lib/utils"

import { CalendarMode, DateRange } from "../../types"

const getQuarterFromMonth = (month: number): number => {
  return Math.floor(month / 3) + 1
}

const getQuarterMonths = (quarter: number): number[] =>
  quarter >= 1 && quarter <= 4
    ? [0, 1, 2].map((n) => n + (quarter - 1) * 3)
    : []

const getQuarterRange = (quarter: number, year: number): DateRange => {
  const months = getQuarterMonths(quarter)
  const firstMonth = months[0]
  const lastMonth = months[months.length - 1]

  const from = new Date(year, firstMonth, 1)
  const to = new Date(year, lastMonth + 1, 0)

  return { from, to }
}

interface QuarterViewProps {
  mode: CalendarMode
  selected: Date | DateRange | null
  onSelect?: (date: Date | DateRange) => void
  year: number
  motionDirection?: number
  minDate?: Date
  maxDate?: Date
}

export const QuarterView = ({
  mode,
  selected,
  onSelect,
  year,
  motionDirection = 1,
  minDate,
  maxDate,
}: QuarterViewProps) => {
  const quarters = [1, 2, 3, 4]
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentQuarter = getQuarterFromMonth(today.getMonth())
  const baseYear = Math.floor(year / 5) * 5
  const years = Array.from({ length: 5 }, (_, i) => baseYear + i)

  // Check if a value is a DateRange
  const isDateRange = (value: unknown): value is DateRange => {
    return Boolean(
      value && typeof value === "object" && ("from" in value || "to" in value)
    )
  }

  // Handle click on a quarter
  const handleQuarterClick = (quarter: number, year: number) => {
    const quarterRange = getQuarterRange(quarter, year)

    if (mode === "single") {
      onSelect?.(quarterRange.from)
    } else if (mode === "range") {
      if (!selected || !isDateRange(selected)) {
        onSelect?.({
          from: quarterRange.from,
          to: undefined,
        })
      } else if (selected && selected.from && !selected.to) {
        const fromDate = selected.from
        const fromQuarter = getQuarterFromMonth(fromDate.getMonth())
        const fromYear = fromDate.getFullYear()

        if (fromQuarter === quarter && fromYear === year) {
          // If clicking the same quarter, select just that quarter
          onSelect?.({
            from: quarterRange.from,
            to: quarterRange.to,
          })
        } else {
          // Create a range between the two quarters
          const fromQuarterRange = getQuarterRange(fromQuarter, fromYear)

          const start = isBefore(fromQuarterRange.from, quarterRange.from)
            ? fromQuarterRange.from
            : quarterRange.from

          const end = isAfter(fromQuarterRange.to!, quarterRange.to!)
            ? fromQuarterRange.to
            : quarterRange.to

          onSelect?.({
            from: start,
            to: end,
          })
        }
      } else {
        // Start a new range
        onSelect?.({
          from: quarterRange.from,
          to: undefined,
        })
      }
    }
  }

  // Check if a quarter is selected
  const isQuarterSelected = (quarter: number, year: number): boolean => {
    if (!selected) return false

    const quarterRange = getQuarterRange(quarter, year)
    if (!quarterRange.to) return false

    if (!isDateRange(selected)) {
      // Single date selection
      const selectedMonth = selected.getMonth()
      const selectedQuarter = getQuarterFromMonth(selectedMonth)
      return selectedQuarter === quarter && selected.getFullYear() === year
    } else {
      // Range selection
      const from = selected.from
      const to = selected.to

      if (from && to) {
        // Check if any part of the quarter is within the selected range
        return (
          isWithinInterval(quarterRange.from, { start: from, end: to }) ||
          isWithinInterval(quarterRange.to, { start: from, end: to }) ||
          (isBefore(quarterRange.from, from) && isAfter(quarterRange.to, to))
        )
      } else if (from) {
        // Check if the from date is in this quarter
        const fromQuarter = getQuarterFromMonth(from.getMonth())
        return fromQuarter === quarter && from.getFullYear() === year
      }
    }

    return false
  }

  // Check if a quarter is the current quarter
  const isCurrentQuarter = (quarter: number, year: number): boolean => {
    return quarter === currentQuarter && year === currentYear
  }

  // Check if a quarter is the start of a range
  const isRangeStart = (quarter: number, year: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.from) return false

    const from = selected.from
    const fromQuarter = getQuarterFromMonth(from.getMonth())
    return fromQuarter === quarter && from.getFullYear() === year
  }

  // Check if a quarter is the end of a range
  const isRangeEnd = (quarter: number, year: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.to) return false

    const to = selected.to
    const toQuarter = getQuarterFromMonth(to.getMonth())
    return toQuarter === quarter && to.getFullYear() === year
  }

  const motionVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? 40 : -40,
    }),
    visible: { opacity: 1, x: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? -40 : 40,
    }),
  }

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={motionDirection}>
      <motion.div
        key={year}
        className="flex flex-col gap-4"
        custom={motionDirection}
        variants={motionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] }}
      >
        {years.map((yearValue) => (
          <div
            key={yearValue}
            className="flex items-center justify-center gap-3 pl-1.5"
          >
            <div className="text-medium text-right text-sm tabular-nums text-f1-foreground-secondary">
              {yearValue}
            </div>
            <div className="flex flex-1">
              {quarters.map((quarter) => {
                const isSelected = isQuarterSelected(quarter, yearValue)
                const isCurrent = isCurrentQuarter(quarter, yearValue)
                const isStart = isRangeStart(quarter, yearValue)
                const isEnd = isRangeEnd(quarter, yearValue)

                const quarterRange = getQuarterRange(quarter, yearValue)
                const disabled =
                  (minDate && isBefore(quarterRange.from, minDate)) ||
                  (maxDate &&
                    quarterRange.to &&
                    isAfter(quarterRange.to, maxDate))

                return (
                  <button
                    key={`${yearValue}-Q${quarter}`}
                    onClick={() => handleQuarterClick(quarter, yearValue)}
                    disabled={disabled}
                    className={cn(
                      "relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums",
                      "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']",
                      disabled &&
                        "cursor-not-allowed text-f1-foreground-secondary",
                      !disabled && "hover:after:bg-f1-background-hover",
                      focusRing(),
                      (isStart || isEnd) && "after:inset-x-0",
                      isSelected &&
                        "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse",
                      isSelected &&
                        !isStart &&
                        !isEnd &&
                        mode === "range" &&
                        "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"
                    )}
                  >
                    {isStart && (
                      <div className="absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" />
                    )}
                    {isEnd && (
                      <div className="absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" />
                    )}
                    <span className="z-10 font-medium">Q{quarter}</span>
                    {isCurrent && (
                      <div
                        className={cn(
                          "absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
                          isSelected && mode === "single" && "bg-f1-background",
                          (isStart || isEnd) && "bg-f1-background",
                          !isStart &&
                            !isEnd &&
                            isSelected &&
                            mode === "range" &&
                            "bg-f1-background-selected-bold"
                        )}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
