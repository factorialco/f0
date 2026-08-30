import { EventValue } from './types';
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
export declare const normalizeEventValue: (value: unknown) => EventValue | undefined;
