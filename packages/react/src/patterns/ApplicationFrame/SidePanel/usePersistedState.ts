import { useEffect, useState } from "react"
import { readFromLocalStorage, writeToLocalStorage } from "@/lib/local-storage"

export type UsePersistedStateOptions<T> = {
  /** localStorage key. */
  key: string
  /**
   * Keys this state used to be stored under, newest first. Read once on mount
   * when `key` holds nothing, so a rename does not reset everyone's preference.
   * Never written back to — the next change lands on `key` alone, and the old
   * entries are left intact so a rollback still finds them.
   */
  legacyKeys?: string[]
  /** Value when nothing is stored or the stored value fails `validate`. */
  fallback: T
  /** Run against the stored value; when it returns false the `fallback` is used. */
  validate?: (stored: unknown) => stored is T
  /**
   * Gates persistence. Defaults to "always write". Useful for transient
   * sub-states that shouldn't be persisted (e.g. visualizationMode's
   * "canvas" overlay).
   */
  shouldWrite?: (value: T) => boolean
  /**
   * Delay before persisting. Default 0 — durable state must survive the tab
   * closing on the next tick. Only continuous values need it (the panel
   * width changes once per frame for the length of a drag, and each write
   * is a synchronous `localStorage.setItem`).
   */
  debounceMs?: number
}

/**
 * State persisted to localStorage. Reads the stored value once on mount
 * (no re-reads, so a delayed mount of the provider still picks up the
 * persisted value), and writes back whenever the state changes.
 */
export function usePersistedState<T>({
  key,
  legacyKeys,
  fallback,
  validate,
  shouldWrite,
  debounceMs = 0,
}: UsePersistedStateOptions<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return fallback
    }
    // The new key wins whenever it holds something valid; the legacy ones are
    // only consulted to adopt a value written before the rename.
    for (const candidate of [key, ...(legacyKeys ?? [])]) {
      const stored = readFromLocalStorage<unknown>(candidate, null)
      if (stored === null) {
        continue
      }
      if (validate && !validate(stored)) {
        continue
      }
      return stored as T
    }
    return fallback
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    if (shouldWrite && !shouldWrite(value)) {
      return
    }
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
