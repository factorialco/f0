import { FilterTypeKey, FilterTypes } from './filters';
export declare const getFilterType: <T extends FilterTypeKey>(type: T) => FilterTypes[T];
