import { Matcher } from 'react-day-picker';
import { GranularityDefinition } from './granularities';
import { DateRange, DateRangeComplete, DateRangeString } from './types';
/**
 * Converts a date-fns format string to a human-readable placeholder pattern.
 * e.g. "dd/MM/yyyy" → "dd/mm/yyyy", "'W'I yyyy" → "Wnn yyyy"
 */
export declare const formatToPlaceholder: (formatStr: string) => string;
/**
 * The tighter of two optional bounds: the later of two lower bounds, the
 * earlier of two upper ones. An absent bound constrains nothing.
 */
export declare const latestDate: (a?: Date, b?: Date) => Date | undefined;
export declare const earliestDate: (a?: Date, b?: Date) => Date | undefined;
export declare const toDateRange: (value: Date | DateRange | undefined | null) => DateRange | undefined;
/**
 * Returns true if the date is valid or undefined or null
 * @param date
 * @returns
 */
export declare const isValidOrEmptyDate: (date: Date | undefined | null) => boolean;
/**
 * Returns true if the date is valid
 * @param date
 * @returns
 */
export declare const isValidDate: (date: Date | undefined | null) => boolean;
/**
 * Returns the date range string from a string or DateRangeString
 * @param value
 * @returns
 */
export declare const toDateRangeString: (value: undefined | string | DateRangeString) => DateRangeString | undefined;
export declare const formatDate: (date: Date, formatStr: string) => string;
/**
 * Formats the date range to a string
 * @param date
 * @param formatStr
 * @returns
 */
export declare const formatDateRange: (date: Date | DateRange | undefined | null, formatStr: string) => DateRangeString;
export declare const formatDateToString: (date: Date | DateRange | undefined | null, formatStr: string) => string;
export declare function toGranularityDateRange<T extends Date | DateRange | undefined | null>(date: Date | DateRange | undefined | null, fromFn: (date: Date) => Date, toFn: (date: Date) => Date): T extends Date | DateRange ? DateRangeComplete : T;
/**
 * Checks if the data is before or equal
 * @param date
 * @param min
 * @returns
 */
export declare const isBeforeOrEqual: (date: Date, min: Date | undefined) => boolean;
/**
 * Checks if the data is after or equal
 * @param date
 * @param max
 * @returns
 */
export declare const isAfterOrEqual: (date: Date, max: Date | undefined) => boolean;
/**
 * Converts a date range to a calendar picker matcher
 * @param minDate
 * @param maxDate
 * @returns
 */
export declare const toCalendarPickerMatcher: ({ minDate, maxDate, }: {
    minDate?: Date;
    maxDate?: Date;
}) => Matcher | Matcher[];
/**
 * Check if the date is active
 * @param date
 * @param granularity
 * @param contraints
 * @returns
 */
export declare const isActiveDate: (date: Date | undefined | null, granularity: GranularityDefinition, { minDate, maxDate }: {
    minDate?: Date;
    maxDate?: Date;
}) => boolean;
