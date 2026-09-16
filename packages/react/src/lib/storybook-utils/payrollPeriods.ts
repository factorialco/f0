import { DatePeriod } from "@/components/OneCalendar/granularities"

/**
 * Payroll-style cycles for the date navigator's `periods` stories: labelled by
 * month, but each one runs from the 25th of the previous month to the 24th of
 * its own — the case no calendar granularity can express.
 */
export const payrollPeriods = (years: number[]): DatePeriod[] =>
  years.flatMap((year) =>
    Array.from({ length: 12 }, (_, month) => ({
      label: new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(new Date(year, month, 1)),
      from: new Date(year, month - 1, 25),
      to: new Date(year, month, 24),
    }))
  )
