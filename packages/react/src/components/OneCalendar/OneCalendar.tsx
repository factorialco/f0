import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { cn } from "@/lib/utils"
import { Input } from "@/ui/input"
import {
  CalendarHeaderDropdowns,
  getYearBounds,
} from "./components/CalendarHeaderDropdowns"
import {
  DatePeriodsDefinition,
  GranularityDefinition,
  NavigationGranularityKey,
  resolveGranularityDefinition,
  GranularityDefinitionSimple,
  getGranularityDefinitions,
} from "./granularities"
import {
  CalendarMode,
  CalendarSelection,
  CalendarView,
  DateRangeString,
  WeekStartDay,
  WeekStartsOn,
} from "./types"
import { earliestDate, isActiveDate, latestDate, toDateRange } from "./utils"

const privateProps = ["compact"] as const

interface OneCalendarInternalProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: CalendarSelection) => void
  defaultMonth?: Date
  defaultSelected?: CalendarSelection
  showNavigation?: boolean
  showInput?: boolean
  minDate?: Date
  maxDate?: Date
  compact?: boolean
  weekStartsOn?: WeekStartsOn
  /** When true, a granularity change updates the view without emitting `onSelect`. Default false. */
  selectOnCellOnly?: boolean
  /** Consumer-defined ranges rendered by the `periods` view. */
  periods?: DatePeriodsDefinition
}

export type OneCalendarProps = Omit<
  OneCalendarInternalProps,
  (typeof privateProps)[number]
>

export const getGranularitySimpleDefinition = (
  granularityKey: NavigationGranularityKey
): GranularityDefinitionSimple => {
  const granularity = resolveGranularityDefinition(granularityKey)
  return {
    toRangeString: granularity.toRangeString,
    toString: granularity.toString,
  }
}

export const getGranularityDefinition = (
  granularityKey: NavigationGranularityKey
): GranularityDefinition => resolveGranularityDefinition(granularityKey)

/** The typed date fields, above the calendar. */
const CalendarDateInputs = ({
  mode,
  value,
  error,
  onChange,
  onCommit,
  onNavigate,
}: {
  mode: CalendarMode
  value: DateRangeString
  /** Which end failed to parse. */
  error: { from: boolean; to: boolean }
  onChange: (value: DateRangeString) => void
  /** The typed text is read as a date on blur and on Enter. */
  onCommit: (input: "from" | "to") => void
  /** Up and down step the date under the caret. */
  onNavigate: (input: "from" | "to", direction: -1 | 1) => void
}) => {
  const i18n = useI18n()

  const keyDown =
    (input: "from" | "to") => (e: ReactKeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onCommit(input)
      }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault()
        onNavigate(input, e.key === "ArrowDown" ? -1 : 1)
      }
    }

  return (
    <div className="mb-2 flex gap-2">
      <Input
        label={i18n.date.from}
        hideLabel
        error={error.from}
        value={value.from}
        placeholder={mode === "range" ? i18n.date.from : i18n.date.date}
        onBlur={() => onCommit("from")}
        onKeyDown={keyDown("from")}
        onChange={(from) => onChange({ ...value, from })}
      />
      {mode === "range" ? (
        <Input
          label={i18n.date.to}
          hideLabel
          error={error.to}
          value={value.to}
          placeholder={i18n.date.to}
          onBlur={() => onCommit("to")}
          onKeyDown={keyDown("to")}
          onChange={(to) => onChange({ ...value, to })}
        />
      ) : null}
    </div>
  )
}

/**
 * The calendar's header: the period's name (or the dropdowns that let you pick
 * it) and the two arrows either side of it.
 */
const CalendarHeader = ({
  label,
  dropdowns,
  viewDate,
  onViewDateChange,
  minDate,
  maxDate,
  compact,
  canNavigate,
  onNavigate,
}: {
  /** The plain period name, shown when there are no dropdowns. */
  label: ReactNode
  /** Which dropdowns this granularity offers, if any. */
  dropdowns: "month-year" | "year" | null
  viewDate: Date
  onViewDateChange: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  compact: boolean
  canNavigate: (direction: -1 | 1) => boolean
  onNavigate: (direction: -1 | 1) => void
}) => {
  const i18n = useI18n()
  const l10n = useL10n()

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        compact ? "mx-2 pb-2" : "pb-3"
      )}
    >
      {dropdowns ? (
        <CalendarHeaderDropdowns
          viewDate={viewDate}
          onViewDateChange={onViewDateChange}
          showMonth={dropdowns === "month-year"}
          locale={l10n.locale}
          minDate={minDate}
          maxDate={maxDate}
          compact={compact}
        />
      ) : (
        <div
          className={cn(
            "font-medium text-f1-foreground",
            compact ? "text-md" : "text-lg"
          )}
        >
          {label}
        </div>
      )}
      <div className={cn("flex items-center", compact ? "gap-1" : "gap-2")}>
        <F0Button
          onClick={() => onNavigate(-1)}
          variant="outline"
          label={i18n.navigation.previous}
          hideLabel
          icon={ChevronLeft}
          size="sm"
          disabled={!canNavigate(-1)}
        />
        <F0Button
          onClick={() => onNavigate(1)}
          variant="outline"
          label={i18n.navigation.next}
          hideLabel
          icon={ChevronRight}
          size="sm"
          disabled={!canNavigate(1)}
        />
      </div>
    </div>
  )
}

const OneCalendarInternal = ({
  mode = "single",
  view = "month",
  onSelect,
  defaultMonth,
  defaultSelected = null,
  showNavigation = true,
  showInput = false,
  minDate,
  maxDate,
  compact = false,
  weekStartsOn,
  selectOnCellOnly = false,
  periods,
}: OneCalendarInternalProps) => {
  const i18n = useI18n()
  const l10n = useL10n()

  const effectiveWeekStartsOn =
    weekStartsOn ?? l10n.date?.weekStartsOn ?? WeekStartDay.Monday

  // When nothing is selected, open the calendar on the month closest to today
  // that is within the allowed range: today when it falls inside the range,
  // otherwise the nearest bound (e.g. a start date acting as the end date's
  // minDate). An explicit `defaultMonth` always takes precedence.
  const effectiveDefaultMonth = useMemo(() => {
    if (defaultMonth) {
      return defaultMonth
    }
    const today = new Date()
    if (minDate && today < minDate) {
      return minDate
    }
    if (maxDate && today > maxDate) {
      return maxDate
    }
    return today
  }, [defaultMonth, minDate, maxDate])

  const [viewDate, setViewDate] = useState<Date>(effectiveDefaultMonth)

  const [selected, setSelectedInternal] =
    useState<CalendarSelection>(defaultSelected)

  const [motionDirection, setMotionDirection] = useState(1)

  const granularity = useMemo(() => {
    const definitions = getGranularityDefinitions({
      weekStartsOn: effectiveWeekStartsOn,
      periods,
    })
    return definitions[view]
  }, [view, effectiveWeekStartsOn, periods])

  const setSelected = useCallback(
    (date: CalendarSelection) => {
      setSelectedInternal(date)

      // Set the input value
      setInputValue(granularity.toRangeString(date, i18n))

      const newViewDate = granularity.getViewDateFromDate(
        date instanceof Date
          ? date
          : date?.from || date?.to || effectiveDefaultMonth
      )

      if (newViewDate !== granularity.getViewDateFromDate(viewDate)) {
        setViewDate(newViewDate)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only needs to be rebuilt when the granularity or effectiveDefaultMonth changes
    [granularity, effectiveDefaultMonth]
  )

  useEffect(() => {
    setSelected(defaultSelected)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only needs to be run when the defaultSelected changes
  }, [defaultSelected])

  // Get header label
  const getHeaderLabel = () => granularity.label(viewDate, i18n, l10n.locale)

  // The day/week views span a month, so they get both month and year
  // dropdowns; the month and periods views span a year, so they get a year
  // dropdown only. Every other view keeps its plain label.
  const headerDropdowns =
    granularity.calendarView === "day" || granularity.calendarView === "week"
      ? "month-year"
      : granularity.calendarView === "month" ||
          granularity.calendarView === "periods"
        ? "year"
        : null

  // A view that owns a finite set of dates (the periods list) narrows the
  // header to the years it can actually show, so the dropdown never offers a
  // year with nothing in it. Consumer bounds still apply on top.
  const viewDateBounds = granularity.getViewDateBounds?.()
  const headerMinDate = latestDate(minDate, viewDateBounds?.min)
  const headerMaxDate = earliestDate(maxDate, viewDateBounds?.max)

  // Views with header dropdowns clamp arrow navigation to the year dropdown's
  // range, so the view can never land on a year the dropdown can't display.
  // Selection is NOT clamped to this window — it is bounded only by the
  // consumer's minDate/maxDate. A consumer-allowed value outside the default
  // window stretches the range (viewYear) so the dropdown can display it.
  const yearBounds = headerDropdowns
    ? getYearBounds(
        new Date().getFullYear(),
        headerMinDate,
        headerMaxDate,
        viewDate.getFullYear()
      )
    : null

  const canNavigate = (direction: -1 | 1) => {
    if (!yearBounds) {
      return true
    }
    const year = granularity.navigateUIView(viewDate, direction).getFullYear()
    return year >= yearBounds.fromYear && year <= yearBounds.toYear
  }

  // Handle ui view navigation
  const navigate = (direction: -1 | 1) => {
    if (!canNavigate(direction)) {
      return
    }
    const newDate = granularity.navigateUIView(viewDate, direction)
    setMotionDirection(direction)
    setViewDate(newDate)
  }

  // Jump straight to a month/year from the dropdowns, animating in the
  // direction of travel like the prev/next arrows do.
  const handleHeaderDateChange = (newDate: Date) => {
    setMotionDirection(newDate.getTime() >= viewDate.getTime() ? 1 : -1)
    setViewDate(newDate)
  }

  // Handle selection of a date
  const handleSelect = (date: CalendarSelection) => {
    if (!date) {
      return
    }

    date = granularity.toRange(date)

    setSelected(date)
    onSelect?.(date)
  }

  const [inputValue, setInputValue] = useState<DateRangeString>({
    from: "",
    to: "",
  })

  const [inputError, setInputError] = useState<{
    from: boolean
    to: boolean
  }>({
    from: false,
    to: false,
  })

  const handleInputChange = (input: "from" | "to") => {
    setSelectFromInput(input, inputValue)
  }

  const isSelectableDate = useCallback(
    (date: Date | undefined | null) => {
      if (!date) {
        return false
      }

      return isActiveDate(date, granularity, {
        minDate,
        maxDate,
      })
    },
    [granularity, minDate, maxDate]
  )

  const setSelectFromInput = (
    input: "from" | "to",
    inputValue: DateRangeString
  ) => {
    const newDate = granularity.fromString(inputValue, i18n)
    const error = !isSelectableDate(newDate?.[input])

    setInputError((prev) => ({
      ...prev,
      [input]: error,
    }))

    if (!error) {
      handleSelect(newDate)
    }
  }

  // When the granularity changes, the range to the correct granularity
  useEffect(
    () => {
      const range = toDateRange(selected)
      if (!range) {
        return
      }

      // Convert the range to the correct granularity reducing the range to the correct granularity
      const newRange =
        mode === "range"
          ? granularity.toRange(range)
          : granularity.toRange(range.from)

      // setSelected updates the view without emitting; handleSelect emits.
      if (selectOnCellOnly) {
        setSelected(newRange)
      } else {
        handleSelect(newRange)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we dont want to re-render when the granularity changes
    [granularity]
  )

  useEffect(() => {
    const range = toDateRange(selected)

    const { from, to } = granularity.toRangeString(
      range ? range : { from: new Date(), to: undefined },
      i18n
    )
    setInputValue({
      from: from || "",
      to: to || "",
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we dont want to re-render when the i18n changes
  }, [granularity, selected])

  const handleInputNavigate = (input: "from" | "to", direction: -1 | 1) => {
    const currentDate = inputValue[input]
      ? granularity.fromString(inputValue[input], i18n)
      : undefined
    const newDate = currentDate
      ? granularity.navigate(currentDate.from, direction)
      : undefined

    if (isSelectableDate(newDate)) {
      const newInputValue = {
        ...inputValue,
        [input]: granularity.toRangeString(newDate, i18n).from,
      }
      setSelectFromInput(input, newInputValue)
      setInputValue(newInputValue)
    }
  }

  // A granularity that owns the full set of selectable values has nothing to
  // type into.
  const showDateInputs = showInput && !granularity.hideDateInput

  return (
    <div className="flex flex-col">
      {showDateInputs ? (
        <CalendarDateInputs
          mode={mode}
          value={inputValue}
          error={{ from: !!inputError.from, to: !!inputError.to }}
          onChange={setInputValue}
          onCommit={handleInputChange}
          onNavigate={handleInputNavigate}
        />
      ) : null}
      {showNavigation ? (
        <CalendarHeader
          label={getHeaderLabel()}
          dropdowns={headerDropdowns}
          viewDate={viewDate}
          onViewDateChange={handleHeaderDateChange}
          minDate={headerMinDate}
          maxDate={headerMaxDate}
          compact={compact}
          canNavigate={canNavigate}
          onNavigate={navigate}
        />
      ) : null}
      <div className="relative">
        {granularity.render({
          mode,
          selected,
          onSelect: handleSelect,
          month: viewDate,
          onMonthChange: setViewDate,
          motionDirection,
          setViewDate,
          viewDate,
          minDate,
          maxDate,
          compact,
          weekStartsOn: effectiveWeekStartsOn,
        })}
      </div>
    </div>
  )
}

const OneCalendarBase = (props: OneCalendarProps) => {
  const publicProps = privateProps.reduce<OneCalendarInternalProps>(
    (acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    },
    props
  )

  return <OneCalendarInternal {...publicProps} />
}

OneCalendarBase.displayName = "OneCalendar"

export const OneCalendar = withDataTestId(OneCalendarBase)

// Export internal component and types for advanced usage
export { OneCalendarInternal, type OneCalendarInternalProps }
