import { useEffect, useState } from "react"

/** Safe localStorage read with JSON parsing and fallback. */
export function readFromLocalStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

/** Safe localStorage write. Silently ignores quota or availability errors. */
export function writeToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

/**
 * State persisted to localStorage. Reads the stored value once on mount (no
 * re-reads, so a delayed mount of the provider still picks up the persisted
 * value), and writes back whenever the state changes.
 *
 * @param key         localStorage key.
 * @param fallback    Value when nothing is stored or the stored value fails
 *                    `validate`.
 * @param validate    Optional predicate run against the stored value; when it
 *                    returns false the `fallback` is used.
 * @param shouldWrite Optional predicate that gates persistence. Defaults to
 *                    "always write". Useful for transient sub-states that
 *                    should not be persisted.
 * @param debounceMs  Delay before persisting. Default 0 — durable state must
 *                    survive a reload that happens immediately after the
 *                    change. Raise it only for values that churn.
 */
export function usePersistedState<T>(
  key: string,
  fallback: T,
  validate?: (stored: unknown) => stored is T,
  shouldWrite?: (value: T) => boolean,
  debounceMs = 0
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return fallback
    const stored = readFromLocalStorage<unknown>(key, null)
    if (stored === null) return fallback
    if (validate && !validate(stored)) return fallback
    return stored as T
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    if (shouldWrite && !shouldWrite(value)) return
    if (debounceMs <= 0) {
      writeToLocalStorage(key, value)
      return
    }
    const timer = window.setTimeout(
      () => writeToLocalStorage(key, value),
      debounceMs
    )
    return () => window.clearTimeout(timer)
  }, [key, value, shouldWrite, debounceMs])

  return [value, setValue]
}
