import { BaseFilterDefinition } from '..';
import { FilterTypeDefinition } from '../types';
import { SearchFilterOptions } from './SearchFilter';
export declare const searchFilter: FilterTypeDefinition<string | {
    value: string;
    strict: boolean;
}, SearchFilterOptions, string | {
    value: string;
    strict: boolean;
}, true>;
export default searchFilter;
export type SearchFilterDefinition = BaseFilterDefinition<"search">;
