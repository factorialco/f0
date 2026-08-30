import {
  endOfISOWeek,
  endOfWeek,
  isSameISOWeek,
  isSameWeek,
  startOfISOWeek,
  startOfWeek,
} from "date-fns"

import { WeekStartDay, WeekStartsOn } from "../../types"

export const getStartOfWeek = (date: Date, weekStartsOn: WeekStartsOn) => {
  return weekStartsOn === WeekStartDay.Monday
    ? startOfISOWeek(date)
    : startOfWeek(date, { weekStartsOn })
}

export const getEndOfWeek = (date: Date, weekStartsOn: WeekStartsOn) => {
  return weekStartsOn === WeekStartDay.Monday
    ? endOfISOWeek(date)
    : endOfWeek(date, { weekStartsOn })
}

export const getIsSameWeek = (
  dateLeft: Date,
  dateRight: Date,
  weekStartsOn: WeekStartsOn
) => {
  return weekStartsOn === WeekStartDay.Monday
    ? isSameISOWeek(dateLeft, dateRight)
    : isSameWeek(dateLeft, dateRight, { weekStartsOn })
}
