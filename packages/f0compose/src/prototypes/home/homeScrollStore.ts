import { useSyncExternalStore } from "react"

/**
 * Whether Home's composer has scrolled out of sight (Angel, 2026-09-15).
 * It lives out here because the canvas owns the scroll while the navbar's
 * One switch and the entry context that gates it are elsewhere in the
 * tree: once the input has gone under the top of the content, the switch
 * is how you reach One. The threshold is measured, not a constant: it is
 * the point where the input meets that edge.
 */
let scrolled = false
const listeners = new Set<() => void>()

export function setHomeScrolled(next: boolean) {
  if (next === scrolled) return
  scrolled = next
  listeners.forEach((listener) => listener())
}

export function useHomeScrolled(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => scrolled,
    () => scrolled
  )
}
