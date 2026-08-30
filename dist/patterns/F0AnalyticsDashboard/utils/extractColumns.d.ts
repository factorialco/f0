/**
 * Extract column names from an array of records, filtering out internal keys.
 * Keys starting with `_` or that are Symbols are excluded.
 */
export declare function extractColumns(records: Record<string, unknown>[]): string[];
