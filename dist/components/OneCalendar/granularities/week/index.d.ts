import { DateRange, DateRangeComplete, WeekStartsOn } from '../../types';
import { GranularityDefinition } from '../types';
export { getEndOfWeek, getIsSameWeek, getStartOfWeek } from './weekUtils';
export declare function toWeekGranularityDateRange<T extends Date | DateRange | undefined | null>(date: T, weekStartsOn?: WeekStartsOn): T extends Date | DateRange ? DateRangeComplete : T;
export declare const createWeekGranularity: (weekStartsOn?: WeekStartsOn) => GranularityDefinition;
export declare const weekGranularity: GranularityDefinition;
