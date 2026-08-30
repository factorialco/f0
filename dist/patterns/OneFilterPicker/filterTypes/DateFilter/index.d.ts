import { DateRange } from '../../../../components/OneCalendar/types';
import { BaseFilterDefinition } from '../filters';
import { FilterTypeDefinition } from '../types';
import { DateFilterOptions } from './DateFilter';
export declare const dateFilter: FilterTypeDefinition<Date | DateRange | undefined, DateFilterOptions>;
export default dateFilter;
export type DateFilterDefinition = BaseFilterDefinition<"date"> & {
    options?: DateFilterOptions;
};
