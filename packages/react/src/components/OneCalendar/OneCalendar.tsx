import { useCallback, useEffect, useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { withDataTestId } from "@/lib/data-testid"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { cn } from "@/lib/utils"
import { Input } from "@/ui/input"

import {
  GranularityDefinition,
  GranularityDefinitionKey,
  GranularityDefinitionSimple,
  getGranularityDefinitions,
  granularityDefinitions,
} from "./granularities/index"
import {
  CalendarMode,
  CalendarView,
  DateRange,
  DateRangeString,
  WeekStartDay,
  WeekStartsOn,
} from "./types"
import {
  CalendarHeaderDropdowns,
  getYearBounds,
} from "./components/CalendarHeaderDropdowns"
import { isActiveDate, toDateRange } from "./utils"

const privateProps = ["compact"] as const

interface OneCalendarInternalProps {
  mode: CalendarMode
  view: CalendarView
  onSelect?: (date: Date | DateRange | null) => void
  defaultMonth?: Date
  defaultSelected?: Date | DateRange | null
  showNavigation?: boolean
  showInput?: boolean
  minDate?: Date
  maxDate?: Date
  compact?: boolean
  weekStartsOn?: WeekStartsOn
  /** When true, a granularity change updates the view without emitting `onSelect`. Default false. */
  selectOnCellOnly?: boolean
}

export type OneCalendarProps = Omit<
  OneCalendarInternalProps,
  (typeof privateProps)[number]
>

export const getGranularitySimpleDefinition = (
  granularityKey: GranularityDefinitionKey
): GranularityDefinitionSimple => {
  const granularity = granularityDefinitions[granularityKey]
  if (!granularity) {
    throw new Error(
      `Granularity simple definition for view ${granularityKey} not found`
    )
  }
  return {
    toRangeString: granularity.toRangeString,
    toString: granularity.toString,
  }
}

export const getGranularityDefinition = (
  granularityKey: GranularityDefinitionKey
): GranularityDefinition => {
  const granularity = granularityDefinitions[granularityKey]
  if (!granularity) {
    throw new Error(`Granularity definition ${granularityKey} not found`)
  }
  return granularity
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
    if (defaultMonth) return defaultMonth
    const today = new Date()
    if (minDate && today < minDate) return minDate
    if (maxDate && today > maxDate) return maxDate
    return today
  }, [defaultMonth, minDate, maxDate])

  const [viewDate, setViewDate] = useState<Date>(effectiveDefaultMonth)

  const [selected, setSelectedInternal] = useState<Date | DateRange | null>(
    defaultSelected
  )

  const [motionDirection, setMotionDirection] = useState(1)

  const granularity = useMemo(() => {
    const definitions = getGranularityDefinitions(effectiveWeekStartsOn)
    return definitions[view]
  }, [view, effectiveWeekStartsOn])

  const setSelected = useCallback(
    (date: Date | DateRange | null) => {
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
  // dropdowns; the month view spans a year, so it gets a year dropdown only.
  // Every other view keeps its plain label.
  const headerDropdowns =
    granularity.calendarView === "day" || granularity.calendarView === "week"
      ? "month-year"
      : granularity.calendarView === "month"
        ? "year"
        : null

  // Views with header dropdowns clamp arrow navigation to the year dropdown's
  // range, so the view can never land on a year the dropdown can't display.
  // Selection is NOT clamped to this window — it is bounded only by the
  // consumer's minDate/maxDate. A consumer-allowed value outside the default
  // window stretches the range (viewYear) so the dropdown can display it.
  const yearBounds = headerDropdowns
    ? getYearBounds(
        new Date().getFullYear(),
        minDate,
        maxDate,
        viewDate.getFullYear()
      )
    : null

  const canNavigate = (direction: -1 | 1) => {
    if (!yearBounds) return true
    const year = granularity.navigateUIView(viewDate, direction).getFullYear()
    return year >= yearBounds.fromYear && year <= yearBounds.toYear
  }

  // Handle ui view navigation
  const navigate = (direction: -1 | 1) => {
    if (!canNavigate(direction)) return
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
  const handleSelect = (date: Date | DateRange | null) => {
    if (!date) return

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
      if (!range) return

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

  return (
    <div className="flex flex-col">
      {showInput && (
        <div className="mb-2 flex gap-2">
          <Input
            label={i18n.date.from}
            hideLabel
            error={!!inputError.from}
            value={inputValue.from}
            placeholder={mode === "range" ? i18n.date.from : i18n.date.date}
            onBlur={() => handleInputChange("from")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInputChange("from")
              }
              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault()
                handleInputNavigate("from", e.key === "ArrowDown" ? -1 : 1)
              }
            }}
            onChange={(value) => setInputValue({ ...inputValue, from: value })}
          />
          {mode === "range" && (
            <Input
              label={i18n.date.to}
              hideLabel
              error={!!inputError.to}
              value={inputValue.to}
              placeholder={i18n.date.to}
              onBlur={() => handleInputChange("to")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInputChange("to")
                }
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                  e.preventDefault()
                  handleInputNavigate("to", e.key === "ArrowDown" ? -1 : 1)
                }
              }}
              onChange={(value) => setInputValue({ ...inputValue, to: value })}
            />
          )}
        </div>
      )}
      {showNavigation && (
        <div
          className={cn(
            "flex items-center justify-between",
            compact ? "mx-2 pb-2" : "pb-3"
          )}
        >
          {headerDropdowns ? (
            <CalendarHeaderDropdowns
              viewDate={viewDate}
              onViewDateChange={handleHeaderDateChange}
              showMonth={headerDropdowns === "month-year"}
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
              {getHeaderLabel()}
            </div>
          )}
          <div className={cn("flex items-center", compact ? "gap-1" : "gap-2")}>
            <F0Button
              onClick={() => navigate(-1)}
              variant="outline"
              label={i18n.navigation.previous}
              hideLabel
              icon={ChevronLeft}
              size="sm"
              disabled={!canNavigate(-1)}
            />
            <F0Button
              onClick={() => navigate(1)}
              variant="outline"
              label={i18n.navigation.next}
              hideLabel
              icon={ChevronRight}
              size="sm"
              disabled={!canNavigate(1)}
            />
          </div>
        </div>
      )}
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
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as OneCalendarInternalProps)

  return <OneCalendarInternal {...publicProps} />
}

OneCalendarBase.displayName = "OneCalendar"

export const OneCalendar = withDataTestId(OneCalendarBase)

// Export internal component and types for advanced usage
export { OneCalendarInternal, type OneCalendarInternalProps }
