import { DateRange, DateRangeComplete } from '../../types';
import { DatePeriod } from './types';
export declare const sortPeriods: (periods: DatePeriod[]) => DatePeriod[];
export declare const toPeriodRange: (period: DatePeriod) => DateRangeComplete;
/**
 * The period a date falls into. Periods are consumer-provided so they may
 * overlap or leave gaps: the first match wins and a date in a gap has no period.
 */
export declare const findPeriodByDate: (periods: DatePeriod[], date: Date | undefined | null) => DatePeriod | undefined;
export declare const findPeriodIndex: (periods: DatePeriod[], date: Date | DateRange | undefined | null) => number;
/**
 * The year a period is filed under in the view. Consumer periods are labelled
 * by where they end — a "January 2026" payroll cycle runs from 25 Dec 2025 —
 * so the end date, not the start, decides the year.
 */
export declare const periodYear: (period: DatePeriod) => number;
export declare const periodsOfYear: (periods: DatePeriod[], year: number) => DatePeriod[];
export declare const formatPeriodRange: (period: DatePeriod, locale?: string) => string;
