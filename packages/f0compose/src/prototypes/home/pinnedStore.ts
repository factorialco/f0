import type { IconType } from "@factorialco/f0-react"

import { Comment, Plane } from "@factorialco/f0-react/icons/app"
import { useSyncExternalStore } from "react"

import type { ProfileId } from "./profileStore"

/**
 * Which Pinned rows you have removed (per Oskar, 2026-09-09: "los items de
 * la seccion pinned tambien deberian poder borrarse, como los de recents").
 *
 * Stores the REMOVALS, not the list — the same shape as `needsYouStore`,
 * and for the same two reasons. The seed stays in code, so a pin keeps a
 * real `IconType` instead of a string that some map has to turn back into
 * a component; and what persists is the thing the user actually did, which
 * is the only part worth surviving a reload.
 *
 * Module store rather than component state because the nav panel unmounts
 * whenever a widget maximizes, and a `useState` list would quietly restore
 * a row you had deleted.
 *
 * Keyed by id across both profiles: the two seeds have distinct ids, so
 * deleting the manager's pin leaves the employee's alone.
 */

export type PinnedItem = { id: string; label: string; icon: IconType }

/** Straight from the frame: a manager pins their triage queue, an employee
 *  pins their own holidays. */
const PINNED_SEED: Record<ProfileId, PinnedItem[]> = {
  admin: [{ id: "inbox-triage", label: "Inbox triage", icon: Comment }],
  employee: [{ id: "my-holidays", label: "My holidays", icon: Plane }],
}

const STORAGE_KEY = "f0compose:home:pinned-removed"

function load(): string[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed)
      ? parsed.filter((v) => typeof v === "string")
      : []
  } catch {
    // A hand-edited or half-written key should cost you your pins, not the
    // whole panel.
    return []
  }
}

let removed: string[] = load()
const listeners = new Set<() => void>()

function emit(next: string[]) {
  removed = next
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function useRemoved(): string[] {
  return useSyncExternalStore(
    subscribe,
    () => removed,
    () => removed
  )
}

/** The pins still standing for this profile. */
export function usePinned(profile: ProfileId): PinnedItem[] {
  const gone = useRemoved()
  return PINNED_SEED[profile].filter((item) => !gone.includes(item.id))
}

export function removePinned(id: string) {
  if (removed.includes(id)) return
  emit([...removed, id])
}

/** No caller yet — the prototype has no "pin this" affordance, so without
 *  a way back a deleted pin is gone for the session. Kept because it is
 *  the other half of the store and one line to wire to a menu row. */
export function restorePinned(id: string) {
  if (!removed.includes(id)) return
  emit(removed.filter((v) => v !== id))
}
