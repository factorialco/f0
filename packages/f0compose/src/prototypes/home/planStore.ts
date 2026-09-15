import { useSyncExternalStore } from "react"

/**
 * Which modules the company has contracted — simulated, so the prototype
 * can show both halves of Angel's answer to the Tools problem
 * (2026-09-14): "cuando no tengan muchos módulos contratados, si una
 * empresa solo tiene el módulo de time, por qué en vez de Tools no le
 * enseñamos directamente Time como elemento en el primer nivel".
 *
 * Under a small plan the rail stops being a door to a catalog and simply
 * IS the catalog; under the full suite nothing changes. Switchable from
 * the preferences screen, beside the admin/employee switch.
 */

export type PlanId = "full" | "time" | "time-people"

export const PLAN_LABELS: Record<PlanId, string> = {
  full: "Full suite",
  time: "Time only",
  "time-people": "Time + People",
}

/** `null` means everything. Labels match the Tools catalog exactly. */
export const PLAN_MODULES: Record<PlanId, string[] | null> = {
  full: null,
  time: ["Routines", "AI Activity", "Time tracking", "Time off", "Shifts", "Marketplace"],
  "time-people": [
    "Routines",
    "AI Activity",
    "Time tracking",
    "Time off",
    "Shifts",
    "Organization",
    "People",
    "Documents",
    "Policies",
    "Marketplace",
  ],
}

/**
 * Above this many contracted modules the rail keeps the generic "Tools"
 * door. At or below it, the modules themselves take the slot — four is
 * what fits beside Home/Messages/Inbox/Calendar/Files without the rail
 * needing to scroll.
 */
export const RAIL_PROMOTE_MAX = 4

const STORAGE_KEY = "f0compose:home:plan"

function load(): PlanId {
  if (typeof window === "undefined") return "full"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "time" || stored === "time-people" ? stored : "full"
}

let plan: PlanId = load()
const listeners = new Set<() => void>()

export function usePlan(): PlanId {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => plan,
    () => plan
  )
}

export function setPlan(next: PlanId) {
  if (plan === next) return
  plan = next
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Persistence is best-effort.
  }
  listeners.forEach((listener) => listener())
}
