import { useSyncExternalStore } from "react"

import type { ProfileId } from "./profileStore"

/**
 * Which Tools modules you have pinned to the first level of the
 * navigation (Angel, 2026-09-14: "permitir que los usuarios pineen
 * modulos del segundo nivel en el primero… permitiría reducir la
 * navegación a estos usuarios").
 *
 * The polarity is the OPPOSITE of `pinnedStore`, deliberately: that one
 * persists REMOVALS because its rows are seeded in code, while a rail pin
 * is something you added, so the list itself is the state. What persists
 * is still the thing the user actually did.
 *
 * Labels, not slugs: `HUB_ICONS[label]` resolves the glyph and the rail
 * reads exactly what the Tools row said. Per profile, because a Payroll
 * pin is meaningless in the employee catalog.
 *
 * Module store rather than component state for the usual reason here —
 * the rail, the Tools panel and the canvas are sibling React trees.
 */

export const RAIL_PIN_LIMIT = 3

const STORAGE_KEY = "f0compose:home:rail-pins"

/** One pin each, so the affordance is discoverable on a fresh load. */
const SEED: Record<ProfileId, string[]> = {
  admin: ["Time tracking"],
  employee: ["Time off"],
}

function load(): Record<ProfileId, string[]> {
  if (typeof window === "undefined") return SEED
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return SEED
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== "object") return SEED
    const read = (key: ProfileId) => {
      const value = (parsed as Record<string, unknown>)[key]
      return Array.isArray(value)
        ? value.filter((item): item is string => typeof item === "string")
        : SEED[key]
    }
    return { admin: read("admin"), employee: read("employee") }
  } catch {
    // A hand-edited key should cost you your pins, not the whole rail.
    return SEED
  }
}

let pins = load()
const listeners = new Set<() => void>()

function emit(next: Record<ProfileId, string[]>) {
  pins = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Persistence is best-effort.
  }
  listeners.forEach((listener) => listener())
}

/** The whole record is the snapshot — a per-profile slice would allocate
 *  a new array on every read and spin `useSyncExternalStore`. */
export function useRailPins(profile: ProfileId): string[] {
  const all = useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => pins,
    () => pins
  )
  return all[profile]
}

export function isRailPinned(profile: ProfileId, label: string): boolean {
  return pins[profile].includes(label)
}

export function pinToRail(profile: ProfileId, label: string) {
  const current = pins[profile]
  if (current.includes(label) || current.length >= RAIL_PIN_LIMIT) return
  emit({ ...pins, [profile]: [...current, label] })
}

export function unpinFromRail(profile: ProfileId, label: string) {
  if (!pins[profile].includes(label)) return
  emit({
    ...pins,
    [profile]: pins[profile].filter((item) => item !== label),
  })
}
