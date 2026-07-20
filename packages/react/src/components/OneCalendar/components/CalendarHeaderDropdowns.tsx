import { endOfMonth, isAfter, isBefore, startOfMonth } from "date-fns"
import { useMemo } from "react"

import { F0Select } from "@/components/F0Select"
import { useI18n } from "@/lib/providers/i18n"

/**
 * How many years back the year dropdown reaches when no `minDate` is given.
 * Wide enough to cover any birthday without rendering an unbounded list.
 */
export const DEFAULT_YEARS_BACK = 120

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Selectable year range for the header dropdowns. Bounds come from
 * `minDate`/`maxDate` when set, otherwise a wide window ending at the current
 * year so distant birthdays are reachable. Arrow navigation is clamped to
 * this same range (see OneCalendar), so the view can never drift outside it.
 */
export function getYearBounds(
  currentYear: number,
  minDate?: Date,
  maxDate?: Date
): { fromYear: number; toYear: number } {
  const fromYear = minDate
    ? minDate.getFullYear()
    : currentYear - DEFAULT_YEARS_BACK
  const toYear = maxDate ? maxDate.getFullYear() : currentYear
  return {
    fromYear: Math.min(fromYear, toYear),
    toYear: Math.max(fromYear, toYear),
  }
}

/**
 * Descending list of selectable years, spanning `getYearBounds`.
 */
export function buildYearOptions(
  currentYear: number,
  minDate?: Date,
  maxDate?: Date
): SelectOption[] {
  const { fromYear, toYear } = getYearBounds(currentYear, minDate, maxDate)
  const options: SelectOption[] = []
  for (let year = toYear; year >= fromYear; year--) {
    options.push({ value: String(year), label: String(year) })
  }
  return options
}

/**
 * The 12 months for the given year, localized. A month is disabled when it
 * falls entirely outside `minDate`/`maxDate`.
 */
export function buildMonthOptions(
  year: number,
  locale: string,
  minDate?: Date,
  maxDate?: Date
): SelectOption[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: "long" })
  return Array.from({ length: 12 }, (_, month) => {
    const monthDate = new Date(year, month, 1)
    const disabled = Boolean(
      (minDate && isBefore(endOfMonth(monthDate), minDate)) ||
      (maxDate && isAfter(startOfMonth(monthDate), maxDate))
    )
    return {
      // A stable, locale-independent reference date so day-31 months don't skip.
      value: String(month),
      label: formatter.format(new Date(2000, month, 1)),
      disabled,
    }
  })
}

interface CalendarHeaderDropdownsProps {
  /** The month/year currently in view (first of the month). */
  viewDate: Date
  /** Emits the new view date when the user picks a month or year. */
  onViewDateChange: (date: Date) => void
  /** When false, only the year dropdown is shown (e.g. the month granularity). */
  showMonth: boolean
  /** Locale used to label the months, matching the granularity `label()`. */
  locale?: string
  minDate?: Date
  maxDate?: Date
}

/**
 * Month + year selectors for the calendar header. Replaces the static
 * "October 2026" label so users can jump directly to a distant month/year
 * (e.g. a birthday) instead of clicking the prev/next arrows dozens of times.
 */
export function CalendarHeaderDropdowns({
  viewDate,
  onViewDateChange,
  showMonth,
  locale = "en-US",
  minDate,
  maxDate,
}: CalendarHeaderDropdownsProps) {
  const i18n = useI18n()

  const yearOptions = useMemo(
    () => buildYearOptions(new Date().getFullYear(), minDate, maxDate),
    [minDate, maxDate]
  )

  const monthOptions = useMemo(
    () => buildMonthOptions(viewDate.getFullYear(), locale, minDate, maxDate),
    [locale, viewDate, minDate, maxDate]
  )

  const handleMonthChange = (value: string) => {
    onViewDateChange(new Date(viewDate.getFullYear(), Number(value), 1))
  }

  const handleYearChange = (value: string) => {
    onViewDateChange(new Date(Number(value), viewDate.getMonth(), 1))
  }

  return (
    <div className="flex items-center gap-1">
      {showMonth && (
        // Fixed width so the trigger (and the popover around it) doesn't
        // resize when switching between short and long month names.
        <div className="w-[8.5rem]">
          <F0Select
            size="sm"
            label={i18n.date.selectMonth}
            hideLabel
            placeholder={i18n.date.selectMonth}
            options={monthOptions}
            value={String(viewDate.getMonth())}
            onChange={handleMonthChange}
            fitContentWidth
          />
        </div>
      )}
      <div className="w-[6rem]">
        <F0Select
          size="sm"
          label={i18n.date.selectYear}
          hideLabel
          placeholder={i18n.date.selectYear}
          showSearchBox
          options={yearOptions}
          value={String(viewDate.getFullYear())}
          onChange={handleYearChange}
          fitContentWidth
        />
      </div>
    </div>
  )
}
