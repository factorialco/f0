import { durationUnits } from "./types"
import type { DurationFields, DurationUnit } from "./types"

export const UNIT_ORDER: DurationUnit[] = [...durationUnits]

export const DEFAULT_UNITS: DurationUnit[] = ["hours", "minutes"]

export const SECONDS_PER_UNIT: Record<DurationUnit, number> = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1,
}

const COARSER_UNIT: Partial<Record<DurationUnit, DurationUnit>> = {
  hours: "days",
  minutes: "hours",
  seconds: "minutes",
}

const AUTO_MAX: Partial<Record<DurationUnit, number>> = {
  hours: 23,
  minutes: 59,
  seconds: 59,
}

export function secondsToFields(totalSeconds: number): DurationFields {
  const safe = Number.isFinite(totalSeconds) ? totalSeconds : 0
  let remaining = Math.max(0, Math.floor(safe))

  const days = Math.floor(remaining / SECONDS_PER_UNIT.days)
  remaining = remaining % SECONDS_PER_UNIT.days

  const hours = Math.floor(remaining / SECONDS_PER_UNIT.hours)
  remaining = remaining % SECONDS_PER_UNIT.hours

  const minutes = Math.floor(remaining / SECONDS_PER_UNIT.minutes)
  const seconds = remaining % SECONDS_PER_UNIT.minutes

  return { days, hours, minutes, seconds }
}

export function fieldsToSeconds(fields: DurationFields): number {
  return UNIT_ORDER.reduce(
    (total, unit) => total + fields[unit] * SECONDS_PER_UNIT[unit],
    0
  )
}

export function getAutoMax(
  unit: DurationUnit,
  visibleUnits: DurationUnit[]
): number | undefined {
  const coarser = COARSER_UNIT[unit]
  if (coarser && visibleUnits.includes(coarser)) {
    return AUTO_MAX[unit]
  }
  return undefined
}

export function secondsToVisibleFields(
  totalSeconds: number,
  visibleUnits: DurationUnit[]
): DurationFields {
  const safe = Number.isFinite(totalSeconds) ? totalSeconds : 0
  let remaining = Math.max(0, Math.floor(safe))

  const fields: DurationFields = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const ordered = UNIT_ORDER.filter((u) => visibleUnits.includes(u))

  for (const unit of ordered) {
    fields[unit] = Math.floor(remaining / SECONDS_PER_UNIT[unit])
    remaining = remaining % SECONDS_PER_UNIT[unit]
  }

  return fields
}

export function clampValue(val: number, max: number | undefined): number {
  if (max != null && val > max) return max
  if (val < 0) return 0
  return val
}
