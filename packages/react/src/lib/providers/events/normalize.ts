import { EventValue } from "./types"

/**
 * Normalizes an arbitrary filter/preset value into a JSON-serializable
 * {@link EventValue} for analytics events.
 *
 * - scalars (`string` / `number` / `boolean`) pass through unchanged
 * - `Date` becomes an ISO string
 * - arrays and plain objects are normalized recursively (nested `Date`s become
 *   ISO strings; `undefined` entries are dropped from objects)
 * - `null` / `undefined` and non-serializable values (`function`, `symbol`,
 *   `bigint`) return `undefined`, signalling the caller that there is nothing
 *   meaningful to emit
 *
 * Before this existed, the emitter dropped any non-scalar value outright, so
 * date-range and number-range filters never produced a `filter-change` event.
 */
export const normalizeEventValue = (value: unknown): EventValue | undefined => {
  if (value === null || value === undefined) return undefined

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value
  }

  if (value instanceof Date) {
    return value.toISOString()
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeEventValue(item) ?? null)
  }

  if (typeof value === "object") {
    const result: Record<string, EventValue> = {}

    for (const [key, item] of Object.entries(value)) {
      const normalized = normalizeEventValue(item)

      if (normalized !== undefined) {
        result[key] = normalized
      }
    }

    return result
  }

  return undefined
}
