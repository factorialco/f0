import { RecordType } from '../../../../hooks/datasource';
import { InFilterDefinition } from '.';
import { FilterTypeSchema } from '../types';
import { InFilterOptionItem, InFilterOptions } from './types';
export declare function getCacheKey<T, R extends RecordType = RecordType>(schema: FilterTypeSchema<InFilterOptions<T, R>>): string;
/**
 * Cache a label for a specific value in a schema
 */
export declare function cacheLabel<T>(cacheKey: string, value: T, label: string): void;
/**
 * Get a cached label for a specific value in a schema
 */
export declare function getCachedLabel<T>(cacheKey: string, value: T): string | undefined;
/**
 * Cache a contextual label for a nested child filter value.
 * Stores "ParentLabel > ChildLabel" so chips can display parent context.
 */
export declare function cacheNestedLabel(filterKey: string, value: unknown, label: string): void;
/**
 * Get a cached contextual label for a nested child filter value.
 */
export declare function getNestedCachedLabel(filterKey: string, value: unknown): string | undefined;
/**
 * Clear cached labels for a schema (useful when schema changes)
 */
export declare function clearLabelCache(cacheKey: string): void;
export declare function loadOptions<T>(cacheKey: string, optionsDef: InFilterOptionItem<T>[] | Promise<InFilterOptionItem<T>[]> | (() => Promise<InFilterOptionItem<T>[]> | InFilterOptionItem<T>[]), cache?: boolean): Promise<InFilterOptionItem<T>[]>;
export declare function useLoadOptions<T, R extends RecordType = RecordType>({ schema, search, }: {
    schema: InFilterDefinition<T, R>;
    search: string | undefined;
}): {
    options: InFilterOptionItem<T>[];
    isLoading: boolean;
    error: Error | null;
    setOptions: import('react').Dispatch<import('react').SetStateAction<InFilterOptionItem<T>[]>>;
    loadOptions: (clearCache?: boolean) => Promise<void>;
    loadMore: (() => void) | undefined;
    hasMore: boolean;
};
