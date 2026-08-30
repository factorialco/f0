import { DateRange, DateRangeComplete } from '../../types';
import { GranularityDefinition } from '../types';
export declare function toMonthGranularityDateRange<T extends Date | DateRange | undefined | null>(date: T): T extends Date | DateRange ? DateRangeComplete : T;
export declare const monthGranularity: GranularityDefinition;
