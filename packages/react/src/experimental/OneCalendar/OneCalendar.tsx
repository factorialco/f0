import { ChevronLeft, ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Input } from "@/ui/input"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Button } from "../../components/Actions/Button"
import { useI18n } from "../../lib/providers/i18n"
import {
  GranularityDefinition,
  GranularityDefinitionKey,
  granularityDefinitions,
  GranularityDefinitionSimple,
} from "./granularities/index"
import { CalendarMode, CalendarView, DateRange, DateRangeString } from "./types"
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
  defaultMonth = new Date(),
  defaultSelected = null,
  showNavigation = true,
  showInput = false,
  minDate,
  maxDate,
  compact = false,
}: OneCalendarInternalProps) => {
  const i18n = useI18n()

  const [viewDate, setViewDate] = useState<Date>(defaultMonth)

  const [selected, setSelectedInternal] = useState<Date | DateRange | null>(
    defaultSelected
  )

  const [motionDirection, setMotionDirection] = useState(1)

  const granularity = useMemo(() => granularityDefinitions[view], [view])

  const setSelected = useCallback(
    (date: Date | DateRange | null) => {
      setSelectedInternal(date)

      // Set the input value
      setInputValue(granularity.toRangeString(date, i18n))

      const newViewDate = granularity.getViewDateFromDate(
        date instanceof Date ? date : date?.from || date?.to || new Date()
      )

      if (newViewDate !== granularity.getViewDateFromDate(viewDate)) {
        setViewDate(newViewDate)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only needs to be rebuilt when the granularity changes
    [granularity]
  )

  useEffect(() => {
    setSelected(defaultSelected)
  }, [defaultSelected, setSelected])

  useEffect(() => {
    // setSelected(defaultSelected)
  }, [defaultSelected, setSelected])

  // Handle ui view navigation
  const navigate = (direction: -1 | 1) => {
    const newDate = granularity.navigateUIView(viewDate, direction)
    setMotionDirection(direction)
    setViewDate(newDate)
  }

  // Get header label
  const getHeaderLabel = () => granularity.label(viewDate, i18n)

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

      const newRange = granularity.toRange(range.from)

      handleSelect(newRange)
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
          <div
            className={cn(
              "font-medium text-f1-foreground",
              compact ? "text-md" : "text-lg"
            )}
          >
            {getHeaderLabel()}
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              label={i18n.navigation.previous}
              hideLabel
              round
              icon={ChevronLeft}
              size="sm"
            />
            <Button
              onClick={() => navigate(1)}
              variant="outline"
              label={i18n.navigation.next}
              hideLabel
              round
              icon={ChevronRight}
              size="sm"
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

export const OneCalendar = OneCalendarBase

// Export internal component and types for advanced usage
export { OneCalendarInternal, type OneCalendarInternalProps }
