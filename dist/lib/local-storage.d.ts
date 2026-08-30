/**
 * Safe localStorage read with JSON parsing and fallback.
 */
export declare function readFromLocalStorage<T>(key: string, fallback: T): T;
/**
 * Safe localStorage write with JSON serialization.
 * Silently ignores errors (e.g. quota exceeded, unavailable).
 */
export declare function writeToLocalStorage<T>(key: string, value: T): void;
