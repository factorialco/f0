import { DateRange, DateRangeComplete } from '../../types';
import { GranularityDefinition } from '../types';
import { DatePeriod, DatePeriodsDefinition } from './types';
/**
 * Snaps a date to the period that contains it. A date outside every period —
 * or a picker with no periods at all — keeps its own range so min/max bounds
 * and persisted values stay usable.
 */
export declare function toPeriodsGranularityDateRange<T extends Date | DateRange | undefined | null>(date: T, periods: DatePeriod[]): T extends Date | DateRange ? DateRangeComplete : T;
export declare const createPeriodsGranularity: (definition: DatePeriodsDefinition) => GranularityDefinition;
export declare const periodsGranularity: GranularityDefinition;
export * from './types';
