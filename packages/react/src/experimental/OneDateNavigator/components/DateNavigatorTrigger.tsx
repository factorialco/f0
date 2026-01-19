import { forwardRef, useEffect, useMemo, useState } from "react"

import type {
  DateRange,
  DateRangeComplete,
  GranularityDefinition,
} from "@/experimental/OneCalendar"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { granularityDefinitions } from "@/experimental/OneCalendar/granularities"
import {
  isAfterOrEqual,
  isBeforeOrEqual,
} from "@/experimental/OneCalendar/utils"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { GranularityDefinitionKey } from "../../OneCalendar/granularities"
import { DatePickerValue } from "../types"

type DateNavigatorTriggerProps = {
  value: DatePickerValue | undefined
  compareToValue?: DateRangeComplete | DateRangeComplete[]
  disabled?: boolean
  error?: boolean
  className?: string
  highlighted?: boolean
  onDateChange?: (date: DateRange) => void
  onClick?: () => void
  navigation?: boolean
  granularity?: GranularityDefinition
  minDate?: Date
  maxDate?: Date
  hideGoToCurrent?: boolean
}

const DateNavigatorTrigger = forwardRef<
  HTMLDivElement,
  DateNavigatorTriggerProps
>(
  (
    {
      value,
      compareToValue,
      onDateChange,
      disabled,
      error,
      className,
      highlighted,
      onClick,
      navigation,
      granularity,
      hideGoToCurrent,
      ...props
    }: DateNavigatorTriggerProps,
    ref
  ) => {
    const i18n = useI18n()

    const currentLabel = useMemo(() => {
      if (!value || !value.value) {
        return [i18n.date.selectDate]
      }

      // Use the granularity prop if provided, otherwise fall back to static definitions
      const granularityToUse =
        granularity || granularityDefinitions[value.granularity]

      const values = [
        value.value,
        Array.isArray(compareToValue) ? compareToValue[0] : compareToValue,
      ]
        .filter((v) => v !== undefined)
        .sort((a, b) => a?.from.getTime() - b?.from.getTime())

      return values.map((v) => granularityToUse.toString(v, i18n, "long"))
    }, [value, i18n, compareToValue, granularity])

    const label = useMemo(() => {
      return Object.values(currentLabel).join(" ⸱ ")
    }, [currentLabel])

    const handleNavigation = (date: DateRange | false) => {
      if (!date) {
        return
      }
      onDateChange?.(date)
    }

    const minDate = useMemo(() => {
      if (!props.minDate) {
        return undefined
      }
      return granularity?.toRange(props.minDate)?.from
    }, [props.minDate, granularity])

    const maxDate = useMemo(() => {
      if (!props.maxDate) {
        return undefined
      }
      return granularity?.toRange(props.maxDate)?.to
    }, [props.maxDate, granularity])

    const [currentDate, setCurrentDate] = useState<DateRange | null>(null)
    useEffect(() => {
      setCurrentDate(granularity?.toRange(new Date()) ?? null)

      const checkGoToCurrentIsAvailable = () => {
        const currentDate = granularity?.toRange(new Date()) ?? null
        if (
          currentDate &&
          isAfterOrEqual(currentDate.from, minDate) &&
          isBeforeOrEqual(currentDate.to || currentDate.from, maxDate)
        ) {
          setCurrentDate(currentDate)
        } else {
          setCurrentDate(null)
        }
      }
      const interval = setInterval(() => {
        checkGoToCurrentIsAvailable()
      }, 60000)
      checkGoToCurrentIsAvailable()

      return () => clearInterval(interval)
    }, [granularity, minDate, maxDate])

    const nextPrev = value?.value
      ? granularity?.getPrevNext(value?.value, {
          min: minDate,
          max: maxDate,
        })
      : undefined

    const handleClickCurrentDate = () => {
      // Recalculate the current date based on the granularity
      const currentDate = granularity?.toRange(new Date())
      if (!currentDate) {
        return
      }
      onDateChange?.(currentDate)
    }

    type GranularityTranslations = {
      [key in GranularityDefinitionKey]: {
        currentDate: string
      }
    }
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
          "[%>*] py-1",
          focusRing("focus:ring-f1-border-hover"),
          disabled &&
            "cursor-not-allowed bg-f1-background-secondary opacity-50",
          error && "ring-f1-border-critical-bold",
          className
        )}
        // Prevent the date picker from being triggered when the user clicks on the input
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={cn(
            "flex flex-1 gap-1",
            navigation ? "justify-between" : "justify-center"
          )}
        >
          {navigation && (
            <F0Button
              size="sm"
              variant="ghost"
              icon={ChevronLeft}
              label="Previous"
              hideLabel
              disabled={!nextPrev?.prev}
              onClick={() => handleNavigation(nextPrev?.prev ?? false)}
            />
          )}
          <ButtonInternal
            fontSize="md"
            size="sm"
            variant="ghost"
            label={label}
            onClick={onClick}
            disabled={disabled}
            style={{ minWidth: granularity?.toStringMaxWidth() }}
            className={cn(highlighted && "bg-f1-background-secondary-hover")}
          />
          {navigation && (
            <F0Button
              variant="ghost"
              icon={ChevronRight}
              label="Next"
              hideLabel
              size="sm"
              fontSize="md"
              disabled={!nextPrev?.next}
              onClick={() => handleNavigation(nextPrev?.next ?? false)}
            />
          )}
        </div>
        {!hideGoToCurrent && currentDate && (
          <div className="border-l-solid flex-shrink-0 border-[#f00]">
            <F0Button
              fontSize="md"
              size="sm"
              variant="ghost"
              label={
                (i18n.date.granularities as GranularityTranslations)[
                  value?.granularity ?? "day"
                ]?.currentDate
              }
              onClick={handleClickCurrentDate}
            />
          </div>
        )}
      </div>
    )
  }
)

// Add display name for better debugging
DateNavigatorTrigger.displayName = "DatePickerTrigger"

export { DateNavigatorTrigger as DatePickerTrigger }
