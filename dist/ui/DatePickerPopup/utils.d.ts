import { DatePickerValue } from './types';
/**
 * Revives a `DatePickerValue` whose `from`/`to` may have been serialized to
 * strings before reaching us.
 *
 * The date range is typed as `Date` objects, but a value that has round-tripped
 * through `JSON.stringify`/`JSON.parse` — e.g. a `OneDataCollection`
 * `date-navigator` filter restored from persisted storage — arrives with
 * `from`/`to` as ISO strings. Downstream consumers (the equality check, the
 * trigger label, granularity math) all call `Date` methods such as
 * `.getTime()`, so a string `from` throws
 * `TypeError: from.getTime is not a function`.
 *
 * Returns the original reference untouched when the range is already made of
 * real `Date` objects (the common case), so this adds no re-render churn.
 */
export declare const reviveDatePickerValue: (value: DatePickerValue | undefined) => DatePickerValue | undefined;
export declare const isSameDatePickerValue: (a: DatePickerValue | undefined, b: DatePickerValue | undefined) => boolean;
