/**
 * Check whether a file's MIME type matches an allowed pattern.
 * Supports exact matches ("application/pdf") and wildcard patterns ("image/*").
 */
export function matchesMimeType(fileType: string, pattern: string): boolean {
  if (pattern === "*/*") return true
  if (pattern.endsWith("/*")) {
    const prefix = pattern.slice(0, pattern.indexOf("/"))
    return fileType.startsWith(prefix + "/")
  }
  return fileType === pattern
}

/**
 * Filter files against the allowed MIME types list.
 * Returns only files whose type matches at least one allowed pattern.
 * If no allowedMimeTypes are configured, all files pass through.
 */
export function filterByMimeType(
  files: File[],
  allowedMimeTypes: string | string[] | undefined
): File[] {
  if (!allowedMimeTypes) return files
  const patterns = Array.isArray(allowedMimeTypes)
    ? allowedMimeTypes
    : [allowedMimeTypes]
  if (patterns.length === 0) return files
  return files.filter((file) =>
    patterns.some((pattern) => matchesMimeType(file.type, pattern))
  )
}
