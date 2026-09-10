import { useSyncExternalStore } from "react"

/** Minimal external store, mirroring the prototype's useSyncExternalStore-based stores. */
export function createStore<T>(initial: T) {
  let state = initial
  const subs = new Set<() => void>()
  const get = () => state
  const subscribe = (fn: () => void) => {
    subs.add(fn)
    return () => {
      subs.delete(fn)
    }
  }
  return {
    get,
    set(next: T) {
      state = next
      subs.forEach((fn) => fn())
    },
    subscribe,
    use(): T {
      return useSyncExternalStore(subscribe, get, get)
    },
  }
}

export function readLocal(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeLocal(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* ignore */
  }
}
