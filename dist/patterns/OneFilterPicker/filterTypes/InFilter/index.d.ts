import { RecordType } from '../../../../hooks/datasource';
import { BaseFilterDefinition } from '..';
import { FilterTypeDefinition } from '../types';
import { InFilterOptions } from './types';
export declare const inFilter: FilterTypeDefinition<string[], InFilterOptions<string>>;
export default inFilter;
export type InFilterDefinition<T = string | number, R extends RecordType = RecordType> = BaseFilterDefinition<"in"> & {
    options: InFilterOptions<T, R>;
};
