export type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear"

export type CalendarMode = "single" | "range"

export type CalendarDate = {
  day: number
  month: number
  year: number
}

export type DateRange = {
  from: Date
  to?: Date
}

export type DateRangeComplete = Required<DateRange>

export type DateRangeString = {
  from: string
  to?: string
}

export type DateRangeError = {
  from: boolean
  to: boolean
}
