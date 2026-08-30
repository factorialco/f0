import { DatePeriod } from '../../components/OneCalendar/granularities';
/**
 * Payroll-style cycles for the date navigator's `periods` stories: labelled by
 * month, but each one runs from the 25th of the previous month to the 24th of
 * its own — the case no calendar granularity can express.
 */
export declare const payrollPeriods: (years: number[]) => DatePeriod[];
