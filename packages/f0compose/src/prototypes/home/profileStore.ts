import { useSyncExternalStore } from "react"

/**
 * Which profile the prototype is being viewed as (Figma 2694:55469, per
 * Oskar 2026-08-31). Admin is the manager Home this prototype has always
 * shown; employee is the self-service view — a much smaller nav and a
 * "For you" + "Quick actions" canvas instead of the Needs-you queue.
 *
 * Module store for the same reason as the others here: the rail's user
 * menu, the nav panel and the canvas are sibling React trees. Persisted,
 * because switching profile is a deliberate act you expect to survive a
 * reload while you look around.
 */

export type ProfileId = "admin" | "employee"

const STORAGE_KEY = "f0compose:home:profile"

function load(): ProfileId {
  if (typeof window === "undefined") return "admin"
  return window.localStorage.getItem(STORAGE_KEY) === "employee"
    ? "employee"
    : "admin"
}

let profile: ProfileId = load()
const listeners = new Set<() => void>()

export function useProfile(): ProfileId {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => profile
  )
}

export function setProfile(next: ProfileId) {
  if (profile === next) return
  profile = next
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Persistence is best-effort.
  }
  listeners.forEach((listener) => listener())
}

export const PROFILE_LABELS: Record<ProfileId, string> = {
  admin: "Admin",
  employee: "Employee",
}
