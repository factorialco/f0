import { cn, focusRing } from "@/lib/utils"
import { endOfMonth, isAfter, isBefore, isWithinInterval, startOfMonth } from "date-fns"
import { AnimatePresence, motion } from "motion/react"
import { CalendarMode, DateRange } from "../../types"

export const getHalfYearFromMonth = (month: number): number => (month < 6 ? 1 : 2)

export const getHalfYearRange = (halfYear: number, year: number): DateRange => {
  const firstMonth = halfYear === 1 ? 0 : 6 // Jan for H1, Jul for H2
  const lastMonth = halfYear === 1 ? 5 : 11 // Jun for H1, Dec for H2

  const from = startOfMonth(new Date(year, firstMonth, 1))
  const to = endOfMonth(new Date(year, lastMonth + 1, 0)) // Last day of the last month

  return { from, to }
}

interface HalfYearViewProps {
  mode: CalendarMode
  selected: Date | DateRange | null
  onSelect: (date: Date | DateRange) => void
  year: number
  motionDirection?: number
  minDate?: Date
  maxDate?: Date
}

export const HalfYearView = ({
  mode,
  selected,
  onSelect,
  year,
  minDate,
  maxDate,
  motionDirection = 1,
}: HalfYearViewProps) => {
  const halfYears = [1, 2]
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentHalfYear = getHalfYearFromMonth(today.getMonth())
  const baseYear = Math.floor(year / 5) * 5
  const years = Array.from({ length: 5 }, (_, i) => baseYear + i)

  // Check if a value is a DateRange
  const isDateRange = (value: unknown): value is DateRange => {
    return Boolean(value && typeof value === "object" && ("from" in value || "to" in value))
  }

  // Handle click on a half year
  const handleHalfYearClick = (halfYear: number, year: number) => {
    const halfYearRange = getHalfYearRange(halfYear, year)

    if (mode === "single") {
      // For single selection, use the first day of the half-year
      onSelect?.(halfYearRange.from)
    } else if (mode === "range") {
      if (!selected || !isDateRange(selected)) {
        // Start of range
        onSelect?.({
          from: halfYearRange.from,
          to: undefined,
        })
      } else if (selected && selected.from && !selected.to) {
        // Complete the range
        const fromDate = selected.from
        const fromHalfYear = getHalfYearFromMonth(fromDate.getMonth())
        const fromYear = fromDate.getFullYear()

        if (fromHalfYear === halfYear && fromYear === year) {
          // If clicking the same half-year, select just that half-year
          onSelect?.({
            from: halfYearRange.from,
            to: halfYearRange.to,
          })
        } else {
          // Create a range between the two half-years
          const fromHalfYearRange = getHalfYearRange(fromHalfYear, fromYear)

          const start = isBefore(fromHalfYearRange.from, halfYearRange.from)
            ? fromHalfYearRange.from
            : halfYearRange.from

          const end = isAfter(fromHalfYearRange.to!, halfYearRange.to!)
            ? fromHalfYearRange.to
            : halfYearRange.to

          onSelect?.({
            from: start,
            to: end,
          })
        }
      } else {
        // Start a new range
        onSelect?.({
          from: halfYearRange.from,
          to: undefined,
        })
      }
    }
  }

  // Check if a half-year is selected
  const isHalfYearSelected = (halfYear: number, year: number): boolean => {
    if (!selected) return false

    const halfYearRange = getHalfYearRange(halfYear, year)

    if (!isDateRange(selected)) {
      // Single date selection
      const selectedMonth = selected.getMonth()
      const selectedHalfYear = getHalfYearFromMonth(selectedMonth)
      return selectedHalfYear === halfYear && selected.getFullYear() === year
    } else {
      // Range selection
      const from = selected.from
      const to = selected.to

      if (from && to) {
        // Check if any part of the half-year is within the selected range
        const isWithinRange =
          isWithinInterval(halfYearRange.from, { start: from, end: to }) ||
          (!!halfYearRange.to && isWithinInterval(halfYearRange.to, { start: from, end: to })) ||
          (isBefore(halfYearRange.from, from) &&
            !!halfYearRange.to &&
            isAfter(halfYearRange.to, to))

        return isWithinRange
      } else if (from) {
        // Check if the from date is in this half-year
        const fromHalfYear = getHalfYearFromMonth(from.getMonth())
        return fromHalfYear === halfYear && from.getFullYear() === year
      }
    }

    return false
  }

  // Check if a half-year is the current half-year
  const isCurrentHalfYear = (halfYear: number, year: number): boolean => {
    return halfYear === currentHalfYear && year === currentYear
  }

  // Check if a half-year is the start of a range
  const isRangeStart = (halfYear: number, year: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.from) return false

    const from = selected.from
    const fromHalfYear = getHalfYearFromMonth(from.getMonth())
    return fromHalfYear === halfYear && from.getFullYear() === year
  }

  // Check if a half-year is the end of a range
  const isRangeEnd = (halfYear: number, year: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.to) return false

    const to = selected.to
    const toHalfYear = getHalfYearFromMonth(to.getMonth())
    return toHalfYear === halfYear && to.getFullYear() === year
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
          <div key={yearValue} className="flex items-center justify-center gap-3 pl-1.5">
            <div className="text-medium text-right text-sm tabular-nums text-f1-foreground-secondary">
              {yearValue}
            </div>
            <div className="flex flex-1">
              {halfYears.map((halfYear) => {
                const isSelected = isHalfYearSelected(halfYear, yearValue)
                const isCurrent = isCurrentHalfYear(halfYear, yearValue)
                const isStart = isRangeStart(halfYear, yearValue)
                const isEnd = isRangeEnd(halfYear, yearValue)

                const halfYearRange = getHalfYearRange(halfYear, yearValue)
                const disabled =
                  (minDate && isBefore(halfYearRange.from, minDate)) ||
                  (maxDate && halfYearRange.to && isAfter(halfYearRange.to, maxDate))

                return (
                  <button
                    key={`${yearValue}-H${halfYear}`}
                    onClick={() => handleHalfYearClick(halfYear, yearValue)}
                    disabled={disabled}
                    className={cn(
                      "relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums",
                      "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']",
                      disabled && "cursor-not-allowed text-f1-foreground-secondary",
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
                    <span className="z-10 font-medium">H{halfYear}</span>
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
