import { AnimatePresence, motion } from "motion/react"
import {
  SelectRangeEventHandler,
  SelectSingleEventHandler,
} from "react-day-picker"

import { useL10n } from "@/lib/providers/l10n"
import { Calendar } from "@/ui/calendar"

import { CalendarMode, DateRange } from "../../types"
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
}: DayViewProps) {
  const { locale } = useL10n()

  const disabled = toCalendarPickerMatcher({ minDate, maxDate })

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
            weekStartsOn={1}
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
          onSelect={onSelect as SelectRangeEventHandler}
          month={month}
          onMonthChange={onMonthChange}
          locale={getLocale(locale)}
          weekStartsOn={1}
          compact={compact}
        />
      </motion.div>
    </AnimatePresence>
  )
}
