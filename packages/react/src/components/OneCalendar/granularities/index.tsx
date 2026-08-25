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

export type GranularityDefinitionsOptions = {
  weekStartsOn?: WeekStartsOn
  periods?: DatePeriodsDefinition
}

const periodsSignature = (definition: DatePeriodsDefinition): string =>
  [
    definition.label ?? "",
    definition.header ?? "",
    ...definition.periods.map(
      (period) =>
        `${period.label}|${period.description ?? ""}|${period.from.getTime()}|${period.to.getTime()}`
    ),
  ].join("|~|")

/**
 * Every other definition is a module-level singleton, so callers can rely on a
 * stable identity to memoize. A periods definition is built from consumer data
 * that is often an inline literal — a fresh object on every render — which
 * would produce a fresh definition on every render and defeat those memos.
 * Keying the built definition on its content restores the stable identity.
 */
const periodsDefinitionCache = new Map<string, GranularityDefinition>()
const PERIODS_CACHE_LIMIT = 8

const getPeriodsGranularity = (
  definition: DatePeriodsDefinition
): GranularityDefinition => {
  const key = periodsSignature(definition)
  const cached = periodsDefinitionCache.get(key)
  if (cached) {
    return cached
  }

  const created = createPeriodsGranularity(definition)
  if (periodsDefinitionCache.size >= PERIODS_CACHE_LIMIT) {
    const oldest = periodsDefinitionCache.keys().next().value
    if (oldest !== undefined) {
      periodsDefinitionCache.delete(oldest)
    }
  }
  periodsDefinitionCache.set(key, created)
  return created
}

/**
 * Get granularity definitions with week granularity configured with the specified weekStartsOn.
 * The week granularity is only created when needed (lazy creation).
 *
 * The `periods` granularity is only selectable once the consumer supplies its
 * periods; without them it renders an empty list.
 *
 * Accepts a bare `weekStartsOn` for the original call style, or an options
 * object when more than the week start is configured.
 */
export function getGranularityDefinitions(
  options?: WeekStartsOn | GranularityDefinitionsOptions
): Record<string, GranularityDefinition> {
  const { weekStartsOn, periods } =
    typeof options === "number" ? { weekStartsOn: options } : (options ?? {})

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
    periods: getPeriodsGranularity(periods),
  }
}
