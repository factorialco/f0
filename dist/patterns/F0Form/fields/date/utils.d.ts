import { HourCycle } from '../../../../lib/providers/user-platafform/types';
/**
 * Extracts time string (HH:mm) from a Date
 */
export declare function dateToTimeString(date: Date | undefined): string;
/**
 * Converts a time string (HH:mm) to a Date object.
 * Uses today's date as the base.
 */
export declare function timeStringToDate(timeString: string): Date | undefined;
/**
 * Combines a date and time string into a single Date object
 */
export declare function combineDateAndTime(date: Date | undefined, timeString: string | undefined): Date | undefined;
/**
 * Formats a Date as a time string in the given hour cycle
 * (e.g. "08:00 PM" for 12h, "20:00" for 24h).
 */
export declare function dateToDisplayTime(date: Date | undefined, hourCycle: HourCycle): string;
/**
 * Parses a time string in the given hour cycle back to a Date (today's date as
 * base). Returns undefined when the input isn't a valid time.
 */
export declare function displayTimeToDate(input: string, hourCycle: HourCycle): Date | undefined;
