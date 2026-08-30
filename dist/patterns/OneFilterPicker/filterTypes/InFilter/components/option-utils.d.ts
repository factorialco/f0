import { InFilterOptionItem, InFilterOptions } from '../types';
/**
 * Recursively checks whether an option or any of its nested children
 * match the search term.
 */
export declare function optionMatchesSearch<T>(option: InFilterOptionItem<T>, term: string): boolean;
/**
 * Recursively checks whether any descendant option (at any depth)
 * is currently selected in allFiltersValue.
 */
export declare function hasSelectedDescendant<T>(option: InFilterOptionItem<T>, allFiltersValue?: Record<string, unknown>): boolean;
/**
 * Collects all nested child filter keys from an InFilter's options.
 * Used to determine if a parent filter should show an active indicator
 * when any of its nested children have selections.
 */
export declare function collectNestedFilterKeys<T>(filterOptions: InFilterOptions<T>): string[];
