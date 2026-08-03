export type EventScalar = string | number | boolean | undefined | null

/**
 * A JSON-serializable event value. Scalars and arrays are emitted as-is; object
 * values (for example a date-range or number-range filter) are normalized to a
 * nested record of scalars via `normalizeEventValue` before being emitted, so
 * consumers never receive `Date` instances or other non-serializable values.
 */
export type EventValue =
  | EventScalar
  | EventValue[]
  | { [key: string]: EventValue }

export type EventName =
  | "datacollection.filter-change"
  | "datacollection.sorting-change"
  | "datacollection.preset-click"

export type EventParams = Record<string, EventValue>

export type EventCatcherFunction = (
  eventName: EventName,
  params: EventParams
) => void
