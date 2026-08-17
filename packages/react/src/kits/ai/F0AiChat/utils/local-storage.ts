/**
 * Safe localStorage read with JSON parsing and fallback.
 */
export function readFromLocalStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

/**
 * Safe localStorage write with JSON serialization.
 * Silently ignores errors (e.g. quota exceeded, unavailable).
 */
export function writeToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}
