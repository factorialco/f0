import { useSyncExternalStore } from "react"

/**
 * Whether the second-level panel is showing. It lives out here because
 * two sibling trees need it: the nav owns it, and the canvas navbar
 * draws the way-back button when it is closed (Angel, 2026-09-14 — with
 * Home collapsed by default there was nothing to click).
 *
 * The section it belongs to stays in `HomeNav`; only this flag is shared.
 */

const STORAGE_KEY = "f0compose:home:nav-open"
const SECTION_KEY = "f0compose:home:nav-section"

function load(): boolean {
  if (typeof window === "undefined") return true
  const stored = window.localStorage.getItem(STORAGE_KEY)
  // Home opens with no second level: its canvas is the composer, and the
  // panel holds only the history behind it.
  if (stored === null)
    return window.localStorage.getItem(SECTION_KEY) !== "home"
  return stored !== "closed"
}

let open = load()
const listeners = new Set<() => void>()

export function useNavPanelOpen(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => open,
    () => open
  )
}

export function setNavPanelOpen(next: boolean) {
  if (open === next) return
  open = next
  try {
    window.localStorage.setItem(STORAGE_KEY, next ? "open" : "closed")
  } catch {
    // Persistence is best-effort.
  }
  listeners.forEach((listener) => listener())
}
