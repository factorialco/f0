/**
 * Check whether a file's MIME type matches an allowed pattern.
 * Supports exact matches ("application/pdf") and wildcard patterns ("image/*").
 */
export declare function matchesMimeType(fileType: string, pattern: string): boolean;
/**
 * Filter files against the allowed MIME types list.
 * Returns only files whose type matches at least one allowed pattern.
 * If no allowedMimeTypes are configured, all files pass through.
 */
export declare function filterByMimeType(files: File[], allowedMimeTypes: string | string[] | undefined): File[];
