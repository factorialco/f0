import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { cn, focusRing } from "@/lib/utils"

import { DateRange } from "../../types"
import { isAfterOrEqual, isBeforeOrEqual, toDateRange } from "../../utils"
import { DatePeriod } from "./types"
import {
  findPeriodByDate,
  formatPeriodRange,
  periodsOfYear,
  toPeriodRange,
} from "./utils"

interface PeriodsViewProps {
  periods: DatePeriod[]
  header?: string
  year: number
  motionDirection?: number
  selected?: Date | DateRange | null
  onSelect?: (date: DateRange) => void
  minDate?: Date
  maxDate?: Date
  compact?: boolean
}

export function PeriodsView({
  periods,
  header,
  year,
  motionDirection = 1,
  selected,
  onSelect,
  minDate,
  maxDate,
  compact = false,
}: PeriodsViewProps) {
  const i18n = useI18n()
  const l10n = useL10n()

  const selectedRef = useRef<HTMLButtonElement>(null)

  // A year can hold more periods than the list shows at once: open it on the
  // selected one.
  useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: "nearest" })
  }, [])

  const selectedPeriod = findPeriodByDate(
    periods,
    toDateRange(selected ?? undefined)?.from
  )

  const yearPeriods = periodsOfYear(periods, year)

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
    <div className="flex flex-col gap-2">
      {header && (
        <div className="px-2 font-medium text-f1-foreground-secondary">
          {header}
        </div>
      )}
      <AnimatePresence
        mode="popLayout"
        initial={false}
        custom={motionDirection}
      >
        <motion.div
          key={year}
          className={cn(
            "grid max-h-72 grid-cols-2 overflow-y-auto",
            compact ? "gap-0.5" : "gap-1"
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
          {yearPeriods.length === 0 ? (
            <div className="col-span-2 py-4 text-center text-f1-foreground-secondary">
              {i18n.date.granularities.periods.empty}
            </div>
          ) : (
            yearPeriods.map((period) => {
              const range = toPeriodRange(period)
              const isSelected = period === selectedPeriod
              const disabled =
                !isAfterOrEqual(range.to, minDate) ||
                !isBeforeOrEqual(range.from, maxDate)

              return (
                <button
                  type="button"
                  key={`${period.label}-${range.from.getTime()}`}
                  ref={isSelected ? selectedRef : undefined}
                  onClick={() => onSelect?.(range)}
                  disabled={disabled}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex flex-col items-start rounded-md text-left transition-colors duration-100",
                    compact ? "gap-0 px-2 py-1" : "gap-0.5 px-3 py-2",
                    !disabled && !isSelected && "hover:bg-f1-background-hover",
                    isSelected && "bg-f1-background-selected",
                    disabled && "cursor-not-allowed opacity-50",
                    focusRing()
                  )}
                >
                  <span
                    className={cn(
                      "font-medium text-f1-foreground",
                      isSelected && "text-f1-foreground-selected"
                    )}
                  >
                    {period.label}
                  </span>
                  <span className="text-sm text-f1-foreground-secondary">
                    {formatPeriodRange(period, l10n.locale)}
                  </span>
                </button>
              )
            })
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
