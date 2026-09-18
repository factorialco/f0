import {
  endOfMonth,
  isAfter,
  isBefore,
  isWithinInterval,
  startOfMonth,
} from "date-fns"
import { AnimatePresence, motion } from "motion/react"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { CalendarMode, DateRange } from "../../types"
import { isDateRange, rangeAfterPeriodClick } from "../periodClick"

/** The whole month a date falls in. */
const monthRange = (date: Date): DateRange => ({
  from: startOfMonth(date),
  to: endOfMonth(date),
})

/** A month cell's own classes: its size, its selection, its ends of a range. */
function monthCellClasses({
  compact,
  disabled,
  mode,
  isSelected,
  isStart,
  isEnd,
}: {
  compact: boolean
  disabled: boolean | undefined
  mode: CalendarMode
  isSelected: boolean
  isStart: boolean
  isEnd: boolean
}): string {
  return cn(
    "relative isolate flex items-center justify-center font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']",
    compact
      ? "h-8 rounded-sm after:rounded-sm"
      : "h-10 rounded-md after:rounded-md",
    !disabled &&
      "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover",
    disabled && "cursor-not-allowed text-f1-foreground-secondary",
    focusRing(),
    isSelected &&
      mode === "single" &&
      "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse",
    isSelected &&
      mode === "range" &&
      cn(
        "rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected",
        compact
          ? "[&:nth-child(4n+1)]:rounded-s-sm [&:nth-child(4n+4)]:rounded-e-sm"
          : "[&:nth-child(3n+1)]:rounded-s-md [&:nth-child(3n+3)]:rounded-e-md"
      ),
    (isStart || isEnd) &&
      mode === "range" &&
      "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse",
    isStart &&
      mode === "range" &&
      isEnd &&
      (compact ? "rounded-s-sm" : "rounded-s-md"),
    isEnd && mode === "range" && (compact ? "rounded-e-sm" : "rounded-e-md")
  )
}

/** The "today" underline, which has to stay legible over every cell state. */
function currentMonthDotClasses({
  compact,
  mode,
  isSelected,
  isStart,
  isEnd,
}: {
  compact: boolean
  mode: CalendarMode
  isSelected: boolean
  isStart: boolean
  isEnd: boolean
}): string {
  return cn(
    "absolute inset-x-0 z-20 mx-auto h-0.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
    compact ? "bottom-0.5 w-1" : "bottom-1 w-1.5",
    isSelected && mode === "single" && "bg-f1-background",
    (isStart || isEnd) && "bg-f1-background",
    !isStart &&
      !isEnd &&
      isSelected &&
      mode === "range" &&
      "bg-f1-background-selected-bold"
  )
}

interface MonthViewProps {
  mode: CalendarMode
  selected?: Date | DateRange | null
  onSelect?: (date: Date | DateRange | null) => void
  year: number
  motionDirection?: number
  minDate?: Date
  maxDate?: Date
  compact?: boolean
}

export function MonthView({
  mode,
  selected,
  onSelect,
  year,
  motionDirection = 1,
  minDate,
  maxDate,
  compact = false,
}: MonthViewProps) {
  const i18n = useI18n()

  const months = [
    { name: i18n.date.month.january, index: 0 },
    { name: i18n.date.month.february, index: 1 },
    { name: i18n.date.month.march, index: 2 },
    { name: i18n.date.month.april, index: 3 },
    { name: i18n.date.month.may, index: 4 },
    { name: i18n.date.month.june, index: 5 },
    { name: i18n.date.month.july, index: 6 },
    { name: i18n.date.month.august, index: 7 },
    { name: i18n.date.month.september, index: 8 },
    { name: i18n.date.month.october, index: 9 },
    { name: i18n.date.month.november, index: 10 },
    { name: i18n.date.month.december, index: 11 },
  ]

  const today = new Date()

  // Handle click on a month
  const handleMonthClick = (monthIndex: number) => {
    const clicked = monthRange(new Date(year, monthIndex, 1))

    if (mode === "single") {
      // Return the full month range
      onSelect?.(clicked)
      return
    }

    if (mode === "range") {
      onSelect?.(
        rangeAfterPeriodClick({ selected, clicked, periodRangeOf: monthRange })
      )
    }
  }

  // Get if the month is the current month
  const isCurrentMonth = (monthIndex: number): boolean => {
    return monthIndex === today.getMonth() && year === today.getFullYear()
  }

  // Check if a month is selected
  const isMonthSelected = (monthIndex: number): boolean => {
    if (!selected) {
      return false
    }

    if (!isDateRange(selected)) {
      return (
        selected.getMonth() === monthIndex && selected.getFullYear() === year
      )
    }
    if (selected.from && selected.to) {
      const current = new Date(year, monthIndex, 15)
      return isWithinInterval(current, {
        start: selected.from,
        end: selected.to,
      })
    } else if (selected.from) {
      return (
        selected.from.getMonth() === monthIndex &&
        selected.from.getFullYear() === year
      )
    }

    return false
  }

  // Check if the month is the start of the range
  const isRangeStart = (monthIndex: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.from) {
      return false
    }

    return (
      selected.from.getMonth() === monthIndex &&
      selected.from.getFullYear() === year
    )
  }

  // Check if the month is the end of the range
  const isRangeEnd = (monthIndex: number): boolean => {
    if (!selected || !isDateRange(selected) || !selected.to) {
      return false
    }

    return (
      selected.to.getMonth() === monthIndex &&
      selected.to.getFullYear() === year
    )
  }

  const motionVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? (compact ? 20 : 40) : compact ? -20 : -40,
    }),
    visible: { opacity: 1, x: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? (compact ? -20 : -40) : compact ? 20 : 40,
    }),
  }

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={motionDirection}>
      <motion.div
        key={year}
        className={cn(
          "grid gap-y-3",
          compact ? "grid-cols-2 gap-y-2" : "grid-cols-3"
        )}
        custom={motionDirection}
        variants={motionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: compact ? 0.1 : 0.15,
          ease: [0.455, 0.03, 0.515, 0.955],
        }}
      >
        {months.map((month) => {
          const isCurrent = isCurrentMonth(month.index)
          const isSelected = isMonthSelected(month.index)
          const isStart = isRangeStart(month.index)
          const isEnd = isRangeEnd(month.index)

          const selectedDate = new Date(year, month.index, 1)
          const monthStart = startOfMonth(selectedDate)
          const monthEnd = endOfMonth(selectedDate)

          const disabled =
            (minDate && isBefore(monthStart, minDate)) ||
            (maxDate && isAfter(monthEnd, maxDate))

          return (
            <button
              type="button"
              key={month.index}
              onClick={() => handleMonthClick(month.index)}
              disabled={disabled}
              className={monthCellClasses({
                compact,
                disabled,
                mode,
                isSelected,
                isStart,
                isEnd,
              })}
            >
              <span>{month.name}</span>
              {isCurrent ? (
                <div
                  className={currentMonthDotClasses({
                    compact,
                    mode,
                    isSelected,
                    isStart,
                    isEnd,
                  })}
                />
              ) : null}
            </button>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}
