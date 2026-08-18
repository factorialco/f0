import { WeekStartDay, WeekStartsOn } from "../types"
import { dayGranularity } from "./day"
import { halfyearGranularity } from "./halfyear"
import { monthGranularity } from "./month"
import {
  createPeriodsGranularity,
  DatePeriodsDefinition,
  periodsGranularity,
} from "./periods"
import { quarterGranularity } from "./quarter"
import { rangeGranularity } from "./range"
import { GranularityDefinition } from "./types"
import { createWeekGranularity, weekGranularity } from "./week"
import { yearGranularity } from "./year"
export * from "./consts"
export * from "./periods/types"
export * from "./types"

export const granularityDefinitions = {
  day: dayGranularity,
  week: weekGranularity,
  month: monthGranularity,
  quarter: quarterGranularity,
  halfyear: halfyearGranularity,
  year: yearGranularity,
  range: rangeGranularity,
  periods: periodsGranularity,
} as const satisfies Record<string, GranularityDefinition>

export type GranularityDefinitionKey = keyof typeof granularityDefinitions

/**
 * Get granularity definitions with week granularity configured with the specified weekStartsOn.
 * The week granularity is only created when needed (lazy creation).
 *
 * The `periods` granularity is only selectable once the consumer supplies its
 * periods; without them it renders an empty list.
 */
export function getGranularityDefinitions(
  weekStartsOn?: WeekStartsOn,
  periods?: DatePeriodsDefinition
): Record<string, GranularityDefinition> {
  const effectiveWeekStartsOn = weekStartsOn ?? WeekStartDay.Monday

  // Only create week granularity if it's different from the default
  // Otherwise, return the static definitions directly
  const definitions =
    effectiveWeekStartsOn === WeekStartDay.Monday
      ? granularityDefinitions
      : {
          ...granularityDefinitions,
          week: createWeekGranularity(effectiveWeekStartsOn),
        }

  if (!periods) {
    return definitions
  }

  return {
    ...definitions,
    periods: createPeriodsGranularity(periods),
  }
}
