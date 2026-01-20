import { Calendar } from "@/ui/calendar"
import { getEndOfWeek, getStartOfWeek } from "./index"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useMemo } from "react"
import {
  DayClickEventHandler,
  SelectRangeEventHandler,
  DateRange as DayPickerDateRange,
} from "react-day-picker"

import { Calendar } from "@/ui/calendar"

import { useL10n } from "../../../../lib/providers/l10n"
import { DateRange, WeekStartDay, WeekStartsOn } from "../../types"
import { getLocale, toCalendarPickerMatcher } from "../../utils"

interface WeekViewProps {
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

export function WeekView({
  selected,
  onSelect,
  month,
  onMonthChange,
  motionDirection = 1,
  minDate,
  maxDate,
  compact = false,
  weekStartsOn,
}: WeekViewProps) {
  const { locale, date } = useL10n()

  const effectiveWeekStartsOn =
    weekStartsOn ?? date?.weekStartsOn ?? WeekStartDay.Monday

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

  const getWeekRangeFromDate = useCallback(
    (date: Date) => {
      const normalizedDay = new Date(date)
      normalizedDay.setHours(0, 0, 0, 0)
      return {
        from: getStartOfWeek(normalizedDay, effectiveWeekStartsOn),
        to: getEndOfWeek(normalizedDay, effectiveWeekStartsOn),
      }
    },
    [effectiveWeekStartsOn]
  )

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.selected) {
      onSelect?.(null)
      return
    }

    onSelect?.(getWeekRangeFromDate(day))
  }

  const handleSelect: SelectRangeEventHandler = (range) => {
    if (!range) {
      onSelect?.(null)
    }
  }

  const selectedValue: DayPickerDateRange | undefined = useMemo(() => {
    if (!selected) return undefined

    const dateToUse = selected instanceof Date ? selected : selected.from
    return getWeekRangeFromDate(dateToUse)
  }, [selected, getWeekRangeFromDate, effectiveWeekStartsOn])

  const disabled = toCalendarPickerMatcher({ minDate, maxDate })

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={motionDirection}>
      <motion.div
        key={month.toISOString()}
        variants={motionVariants}
        custom={motionDirection}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: compact ? 0.1 : 0.15,
          ease: [0.455, 0.03, 0.515, 0.955],
        }}
      >
        <Calendar
          key={month.toISOString()}
          mode="range"
          disabled={disabled}
          selected={selectedValue}
          onDayClick={handleDayClick}
          onSelect={handleSelect}
          month={month}
          onMonthChange={onMonthChange}
          locale={getLocale(locale)}
          weekStartsOn={effectiveWeekStartsOn}
          showOutsideDays={true}
          showWeekNumber
          fixedWeeks={false}
          compact={compact}
        />
      </motion.div>
    </AnimatePresence>
  )
}
