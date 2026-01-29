import { WeekStartDay, WeekStartsOn } from "../types"
import { dayGranularity } from "./day"
import { halfyearGranularity } from "./halfyear"
import { monthGranularity } from "./month"
import { quarterGranularity } from "./quarter"
import { rangeGranularity } from "./range"
import { GranularityDefinition } from "./types"
import { createWeekGranularity, weekGranularity } from "./week"
import { yearGranularity } from "./year"
export * from "./consts"
export * from "./types"

export const granularityDefinitions: Record<string, GranularityDefinition> = {
  day: dayGranularity,
  week: weekGranularity,
  month: monthGranularity,
  quarter: quarterGranularity,
  halfyear: halfyearGranularity,
  year: yearGranularity,
  range: rangeGranularity,
} as const

export type GranularityDefinitionKey = keyof typeof granularityDefinitions

/**
 * Get granularity definitions with week granularity configured with the specified weekStartsOn.
 * The week granularity is only created when needed (lazy creation).
 */
export function getGranularityDefinitions(
  weekStartsOn?: WeekStartsOn
): Record<string, GranularityDefinition> {
  const effectiveWeekStartsOn = weekStartsOn ?? WeekStartDay.Monday

  // Only create week granularity if it's different from the default
  // Otherwise, return the static definitions directly
  if (effectiveWeekStartsOn === WeekStartDay.Monday) {
    return granularityDefinitions
  }

  return {
    ...granularityDefinitions,
    week: createWeekGranularity(effectiveWeekStartsOn),
  }
}
