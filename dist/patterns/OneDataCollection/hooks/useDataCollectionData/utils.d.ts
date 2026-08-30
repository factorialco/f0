/**
 * Merges global (source-level) filters with lane-specific filters by
 * intersecting array filters. On disjoint arrays the lane's own values win,
 * since downstream adapters collapse `[]` to "no filter" rather than "match
 * nothing". For non-array filters the lane wins.
 */
export declare function mergeFiltersWithIntersection<T extends Record<string, unknown>>(globalFilters: T, laneFilters: T): T;
