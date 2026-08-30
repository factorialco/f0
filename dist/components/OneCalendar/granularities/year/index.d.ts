import { DateRange, DateRangeComplete } from '../../types';
import { GranularityDefinition } from '../types';
export declare function toYearGranularityDateRange<T extends Date | DateRange | undefined | null>(date: T): T extends Date | DateRange ? DateRangeComplete : T;
export declare const yearGranularity: GranularityDefinition;
