import { endOfMonth, isAfter, isBefore, startOfMonth } from "date-fns"
import { useMemo } from "react"

import { F0Select } from "@/components/F0Select"
import { useI18n } from "@/lib/providers/i18n"

/**
 * How many years the year dropdown reaches back (without `minDate`) and
 * forward (without `maxDate`) from the current year. Wide enough to cover
 * any birthday or far-future deadline without rendering an unbounded list;
 * consumers narrow it by setting explicit `minDate`/`maxDate`.
 */
export const DEFAULT_YEARS_RANGE = 120

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Year range for the header dropdowns and arrow navigation. Bounds come from
 * `minDate`/`maxDate` when set, otherwise a wide window centered on the
 * current year so both distant birthdays and far-future dates are reachable.
 *
 * The window bounds NAVIGATION, not selection — selection is limited only by
 * the consumer's `minDate`/`maxDate`. Because a consumer-allowed value can
 * legitimately sit outside the default window (e.g. a very old date with
 * only `maxDate` set), the range always stretches to include `viewYear` so
 * the dropdown can display it.
 */
export function getYearBounds(
  currentYear: number,
  minDate?: Date,
  maxDate?: Date,
  viewYear?: number
): { fromYear: number; toYear: number } {
  const fromYear = minDate
    ? minDate.getFullYear()
    : currentYear - DEFAULT_YEARS_RANGE
  const toYear = maxDate
    ? maxDate.getFullYear()
    : currentYear + DEFAULT_YEARS_RANGE
  return {
    fromYear: Math.min(fromYear, toYear, viewYear ?? Infinity),
    toYear: Math.max(fromYear, toYear, viewYear ?? -Infinity),
  }
}

/**
 * Descending list of selectable years, spanning `getYearBounds`.
 */
export function buildYearOptions(
  currentYear: number,
  minDate?: Date,
  maxDate?: Date,
  viewYear?: number
): SelectOption[] {
  const { fromYear, toYear } = getYearBounds(
    currentYear,
    minDate,
    maxDate,
    viewYear
  )
  const options: SelectOption[] = []
  for (let year = toYear; year >= fromYear; year--) {
    options.push({ value: String(year), label: String(year) })
  }
  return options
}

/**
 * The 12 months for the given year, localized. A month is disabled when it
 * falls entirely outside `minDate`/`maxDate`. The compact calendar uses the
 * "short" format ("Sep", "sept.") so the trigger fits its narrower header at
 * a fixed width across locales.
 */
export function buildMonthOptions(
  year: number,
  locale: string,
  minDate?: Date,
  maxDate?: Date,
  format: "long" | "short" = "long"
): SelectOption[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: format })
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
  /**
   * Compact calendars (e.g. the filter-picker date filter) have a ~240px
   * header budget: narrower triggers and short month names keep the
   * dropdowns and arrows from overflowing it.
   */
  compact?: boolean
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
  compact = false,
}: CalendarHeaderDropdownsProps) {
  const i18n = useI18n()

  const yearOptions = useMemo(
    () =>
      buildYearOptions(
        new Date().getFullYear(),
        minDate,
        maxDate,
        viewDate.getFullYear()
      ),
    [minDate, maxDate, viewDate]
  )

  const monthOptions = useMemo(
    () =>
      buildMonthOptions(
        viewDate.getFullYear(),
        locale,
        minDate,
        maxDate,
        compact ? "short" : "long"
      ),
    [locale, viewDate, minDate, maxDate, compact]
  )

  const handleMonthChange = (value: string) => {
    onViewDateChange(new Date(viewDate.getFullYear(), Number(value), 1))
  }

  const handleYearChange = (value: string) => {
    onViewDateChange(new Date(Number(value), viewDate.getMonth(), 1))
  }

  return (
    // min-w-0 lets the header shrink this side instead of pushing the
    // prev/next arrows out of the container.
    <div className="flex min-w-0 items-center gap-1">
      {showMonth && (
        // Fixed width so the trigger (and the popover around it) doesn't
        // resize when switching between short and long month names. Compact
        // pairs a narrower trigger with short month labels: 5.5rem fits the
        // widest short month of the supported locales ("sept." fr) plus the
        // field's chrome.
        <div className={compact ? "w-[5.5rem]" : "w-[8.5rem]"}>
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
      <div className={compact ? "w-[5.5rem]" : "w-[6rem]"}>
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
