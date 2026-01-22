import { subDays, subMonths, subYears } from "date-fns"

import { granularityDefinitions } from "@/experimental/OneCalendar/granularities"

import { DatePreset } from "./types"

export const predefinedPresets: Record<string, DatePreset> = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => granularityDefinitions.day.toRange(new Date()),
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => granularityDefinitions.day.toRange(subDays(new Date(), 1)),
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () =>
      granularityDefinitions.day.toRange({
        from: subDays(new Date(), 7),
        to: new Date(),
      }),
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => granularityDefinitions.week.toRange(new Date()),
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => granularityDefinitions.week.toRange(subDays(new Date(), 7)),
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => granularityDefinitions.month.toRange(new Date()),
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => granularityDefinitions.month.toRange(subMonths(new Date(), 1)),
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => granularityDefinitions.month.toRange(subMonths(new Date(), 3)),
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => granularityDefinitions.month.toRange(subMonths(new Date(), 6)),
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => granularityDefinitions.quarter.toRange(new Date()),
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () =>
      granularityDefinitions.quarter.toRange(subMonths(new Date(), 3)),
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => granularityDefinitions.halfyear.toRange(new Date()),
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () =>
      granularityDefinitions.halfyear.toRange(subMonths(new Date(), 6)),
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => granularityDefinitions.year.toRange(subYears(new Date(), 1)),
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => granularityDefinitions.year.toRange(subYears(new Date(), 3)),
  },
} as const
