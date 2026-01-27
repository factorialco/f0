import { addDays, differenceInDays, endOfDay, startOfDay } from "date-fns"

import { DateRangeComplete } from "../../types"
import { isAfterOrEqual, isBeforeOrEqual } from "../../utils"
import { dayGranularity, toDayGranularityDateRange } from "../day"
import { GranularityDefinition } from "../types"
/**
 * This is a special case of the day granularity.
 * It is used to render a range of dates.
 * It is not a real granularity, but a way to render a range of dates.
 */

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfDay(addDays(date.from, delta)),
    to: endOfDay(addDays(date.to, delta)),
  }
}

export const rangeGranularity: GranularityDefinition = {
  ...dayGranularity,
  calendarMode: "range",
  add,
  getPrevNext: (value, options) => {
    const dateRange = toDayGranularityDateRange(value)
    if (!dateRange) {
      return {
        prev: false,
        next: false,
      }
    }

    const { from, to } = dateRange

    const delta = differenceInDays(to, from) + 1

    const { from: prevFrom, to: prevTo } = add({ from, to }, -delta)
    const { from: nextFrom, to: nextTo } = add({ from, to }, delta)

    const minWithGranularity = options.min && startOfDay(options.min)
    const maxWithGranularity = options.max && endOfDay(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  calendarView: "day",
  render: (renderProps) => {
    return dayGranularity.render({ ...renderProps, mode: "range" })
  },
}
