import { BaseFilterDefinition } from '../filters';
import { FilterTypeDefinition } from '../types';
import { NumberFilterOptions, NumberFilterValue } from './NumberFilter';
export declare const numberFilter: FilterTypeDefinition<NumberFilterValue, NumberFilterOptions>;
export default numberFilter;
export type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
    options?: NumberFilterOptions;
};
