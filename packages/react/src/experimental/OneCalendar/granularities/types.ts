import { ReactNode } from "react"

import { TranslationsType } from "@/lib/providers/i18n"

import {
  CalendarMode,
  CalendarView,
  DateRange,
  DateRangeComplete,
  DateRangeString,
  WeekStartsOn,
} from "../types"

export type DateNavigationOptions = {
  min?: Date
  max?: Date
}

export type PrevNextDateNavigation = {
  prev: DateRange | false
  next: DateRange | false
}

export type DateStringFormat = "default" | "long"

export interface GranularityDefinition {
  // The mode of the calendar that this granularity is used in (single by default)
  calendarMode?: CalendarMode
  // The view of the calendar that this granularity is used in
  calendarView: CalendarView
  // Week starts on day (only used by week granularity)
  weekStartsOn?: WeekStartsOn
  // Label for the granularity in the calendar view
  label: (viewDate: Date, i18n: TranslationsType) => ReactNode
  // Format the date to a date range with dates as string
  toRangeString: (
    date: Date | DateRange | undefined | null,
    i18n: TranslationsType,
    format?: DateStringFormat
  ) => DateRangeString
  // Convert the date to a date range (e.g for day granularity, this will be the start and end of the day)
  toRange: <T extends Date | DateRange | undefined | null>(
    date: T
  ) => T extends Date | DateRange ? DateRangeComplete : T
  // Format the date to a string (e.g W12 2025 -> W13 2025)
  toString: (
    date: Date | DateRange | undefined | null,
    i18n: TranslationsType,
    format?: DateStringFormat
  ) => string
  // Calculate the maximum width of the string representation of the date
  toStringMaxWidth: () => number
  // Default placeholder text for the input field, derived from the format pattern
  placeholder: () => string
  // Parse the date range string to a date range
  fromString: (
    dateStr: string | DateRangeString,
    i18n: TranslationsType
  ) => DateRange | null
  // Calculate the next date form the UI View (e.g for day granularity, this will be the next month)
  navigateUIView: (viewDate: Date, direction: -1 | 1) => Date
  // Calculate the next date form the selected date (e.g for day granularity, this will be the next day)
  navigate: (date: Date, direction: -1 | 1) => Date
  // Calculate the view date from a date
  getViewDateFromDate: (date: Date) => Date
  // Render the calendar view (this is only used in the Calendar component to render the view internally, in other component use the `calendarView` prop to pass it to the Calendar component)
  render: (renderProps: {
    mode: CalendarMode
    selected: Date | DateRange | null
    onSelect: (date: Date | DateRange | null) => void
    month: Date
    onMonthChange: (date: Date) => void
    motionDirection: number
    minDate?: Date
    maxDate?: Date
    setViewDate: (date: Date) => void
    viewDate: Date
    compact?: boolean
    weekStartsOn?: WeekStartsOn
  }) => ReactNode
  // Adds a delta to a date range
  add: (date: DateRangeComplete, delta: number) => DateRangeComplete
  // Gets the previous and next date range from a date range
  getPrevNext(
    date: DateRange,
    options: DateNavigationOptions
  ): PrevNextDateNavigation
}

export type GranularityDefinitionSimple = Pick<
  GranularityDefinition,
  "toRangeString" | "toString"
>
