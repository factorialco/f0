import { Calendar } from "@/ui/calendar"
import { endOfISOWeek, startOfISOWeek } from "date-fns"
import { AnimatePresence, motion } from "motion/react"
import {
  DayClickEventHandler,
  DateRange as DayPickerDateRange,
} from "react-day-picker"
import { useL10n } from "../../../../lib/providers/l10n"
import { DateRange } from "../../types"
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
}: WeekViewProps) {
  const { locale } = useL10n()

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

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.selected) {
      onSelect?.(null)
      return
    }

    const weekStart = startOfISOWeek(day)
    const weekEnd = endOfISOWeek(day)

    onSelect?.({
      from: weekStart,
      to: weekEnd,
    })
  }

  const selectedValue: DayPickerDateRange | undefined =
    selected instanceof Date
      ? {
          from: startOfISOWeek(selected),
          to: endOfISOWeek(selected),
        }
      : selected || undefined

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
          month={month}
          onMonthChange={onMonthChange}
          locale={getLocale(locale)}
          weekStartsOn={1}
          showOutsideDays={true}
          showWeekNumber
          fixedWeeks={false}
          compact={compact}
        />
      </motion.div>
    </AnimatePresence>
  )
}
