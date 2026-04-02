import { AnimatePresence, motion } from "motion/react"
import { useCallback } from "react"
import {
  SelectRangeEventHandler,
  SelectSingleEventHandler,
} from "react-day-picker"

import { useL10n } from "@/lib/providers/l10n"
import { Calendar } from "@/ui/calendar"

import {
  CalendarMode,
  DateRange,
  WeekStartDay,
  WeekStartsOn,
} from "../../types"
import { getLocale, toCalendarPickerMatcher } from "../../utils"

interface DayViewProps {
  mode: CalendarMode
  selected?: Date | DateRange | null
  onSelect?: (date: Date | DateRange | null) => void
  month: Date
  onMonthChange?: (month: Date) => void
  motionDirection?: number
  minDate?: Date
  maxDate?: Date
  compact?: boolean
  weekStartsOn?: WeekStartsOn
}

/**
 * Checks if a DateRange spans multiple days (not just a single day).
 * A range with from and to on the same day is considered incomplete
 * because the user is still selecting the end date.
 */
const isMultiDayRange = (range: DateRange | null | undefined): boolean => {
  if (!range?.from || !range?.to) return false
  // Check if from and to are on different days
  return range.from.toDateString() !== range.to.toDateString()
}

export function DayView({
  mode,
  selected,
  onSelect,
  month,
  onMonthChange,
  motionDirection = 1,
  minDate,
  maxDate,
  compact = false,
  weekStartsOn,
}: DayViewProps) {
  const { locale, date } = useL10n()

  const effectiveWeekStartsOn =
    weekStartsOn ?? date?.weekStartsOn ?? WeekStartDay.Monday

  const disabled = toCalendarPickerMatcher({ minDate, maxDate })

  /**
   * Custom range selection handler that resets when a complete range exists.
   * When the user already has a complete range (from + to) and clicks a new date,
   * we start a fresh selection instead of modifying the existing range.
   */
  const handleRangeSelect: SelectRangeEventHandler = useCallback(
    (range) => {
      if (!onSelect) return

      const previousRange = selected as DateRange | undefined
      const hadMultiDayRange = isMultiDayRange(previousRange)

      // If we had a multi-day range, start fresh with just the clicked date
      if (hadMultiDayRange && range?.from) {
        // Determine which date the user clicked by comparing with the previous range
        // If 'from' changed, the user clicked on what became the new 'from'
        // If 'to' changed, the user clicked on what became the new 'to'
        const fromChanged =
          range.from.getTime() !== previousRange?.from?.getTime()
        const toChanged = range.to?.getTime() !== previousRange?.to?.getTime()

        // The clicked date is whichever one changed (default to from if both changed)
        const clickedDate =
          fromChanged || !toChanged ? range.from : (range.to ?? range.from)

        // Start a new range with only the clicked date
        onSelect({ from: clickedDate, to: undefined })
      } else if (range?.from) {
        // Normal behavior: building a range
        onSelect({ from: range.from, to: range.to })
      } else {
        onSelect(null)
      }
    },
    [onSelect, selected]
  )

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

  if (mode === "single") {
    return (
      <AnimatePresence
        mode="popLayout"
        initial={false}
        custom={motionDirection}
      >
        <motion.div
          key={month.toISOString()}
          variants={motionVariants}
          custom={motionDirection}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] }}
        >
          <Calendar
            mode="single"
            disabled={disabled}
            selected={selected as Date}
            onSelect={onSelect as SelectSingleEventHandler}
            month={month}
            locale={getLocale(locale)}
            weekStartsOn={effectiveWeekStartsOn}
            compact={compact}
          />
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={motionDirection}>
      <motion.div
        key={month.toISOString()}
        variants={motionVariants}
        custom={motionDirection}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] }}
      >
        <Calendar
          key={month.toISOString()}
          mode="range"
          disabled={disabled}
          selected={selected as DateRange}
          onSelect={handleRangeSelect}
          month={month}
          onMonthChange={onMonthChange}
          locale={getLocale(locale)}
          weekStartsOn={effectiveWeekStartsOn}
          compact={compact}
        />
      </motion.div>
    </AnimatePresence>
  )
}
