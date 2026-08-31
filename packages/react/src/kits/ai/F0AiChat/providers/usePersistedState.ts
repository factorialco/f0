import { useEffect, useState } from "react"

import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/local-storage"

/**
 * State persisted to localStorage. Reads the stored value once on mount
 * (no re-reads, so a delayed mount of the provider still picks up the
 * persisted value), and writes back whenever the state changes.
 *
 * @param key       localStorage key.
 * @param fallback  Value when nothing is stored or the stored value
 *                  fails `validate`.
 * @param validate  Optional predicate. Run against the stored value;
 *                  when it returns false the `fallback` is used.
 * @param shouldWrite Optional predicate that gates persistence. Defaults
 *                  to "always write". Useful for transient sub-states
 *                  that shouldn't be persisted (e.g. visualizationMode's
 *                  "canvas" overlay).
 * @param debounceMs Delay before persisting. Default 0 — durable state must
 *                  survive the tab closing on the next tick. Only continuous
 *                  values need it (the panel width changes once per frame for
 *                  the length of a drag, and each write is a synchronous
 *                  `localStorage.setItem`).
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
