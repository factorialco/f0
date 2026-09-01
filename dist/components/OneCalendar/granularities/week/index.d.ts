import { DateRange, DateRangeComplete, WeekStartsOn } from '../../types';
import { GranularityDefinition } from '../types';
export declare const getStartOfWeek: (date: Date, weekStartsOn: WeekStartsOn) => Date;
export declare const getEndOfWeek: (date: Date, weekStartsOn: WeekStartsOn) => Date;
export declare const getIsSameWeek: (dateLeft: Date, dateRight: Date, weekStartsOn: WeekStartsOn) => boolean;
export declare function toWeekGranularityDateRange<T extends Date | DateRange | undefined | null>(date: T, weekStartsOn?: WeekStartsOn): T extends Date | DateRange ? DateRangeComplete : T;
export declare const createWeekGranularity: (weekStartsOn?: WeekStartsOn) => GranularityDefinition;
export declare const weekGranularity: GranularityDefinition;
