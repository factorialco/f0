import { DateRange, DateRangeComplete } from '../../types';
import { GranularityDefinition } from '../types';
export declare const DAY_FORMAT = "dd/MM/yyyy";
export declare function toDayGranularityDateRange<T extends Date | DateRange | undefined | null>(date: T): T extends Date | DateRange ? DateRangeComplete : T;
export declare const dayGranularity: GranularityDefinition;
