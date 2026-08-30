import { FiltersDefinition, FiltersState } from './types';
/**
 * Serializes filters state into a base64 string for URL sharing.
 *
 * @example
 * ```ts
 * const filters = { search: "test", status: ["active"] };
 * const serialized = serializeFilters(filters);
 * // -> "eyJzZWFyY2giOiJ0ZXN0Iiwic3RhdHVzIjpbImFjdGl2ZSJdfQ=="
 * ```
 */
export declare function serializeFilters<Definition extends FiltersDefinition>(filters: FiltersState<Definition>): string;
/**
 * Deserializes a base64 string back into a filters state object.
 * @throws {Error} If the string is not valid base64 or JSON
 *
 * @example
 * ```ts
 * const filters = deserializeFilters(serializedString);
 * // -> { search: "test", status: ["active"] }
 * ```
 */
export declare function deserializeFilters<Definition extends FiltersDefinition>(serialized: string): FiltersState<Definition>;
/**
 * Updates URL search params with serialized filters for bookmarkable/shareable state.
 * Uses replaceState to avoid creating new history entries.
 */
export declare function updateUrlWithFilters<Definition extends FiltersDefinition>(filters: FiltersState<Definition>, paramName?: string): void;
/**
 * Reads and deserializes filters from URL search params.
 * Returns null if no filters found or if deserialization fails.
 */
export declare function getFiltersFromUrl<Definition extends FiltersDefinition>(paramName?: string): FiltersState<Definition> | null;
