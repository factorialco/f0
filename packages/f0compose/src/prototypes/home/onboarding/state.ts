import { useSyncExternalStore } from "react"
import type { ProfileId } from "../profileStore"

export type OnboardingState = {
  screen: "welcome" | "tour" | "preferences" | "connections" | "complete"
  tourStep: number
  tourPaused: boolean
  selected: ("personal" | "team" | "work")[]
  custom: string
  customActive: boolean
  usedDefaults: boolean
  hidden: boolean
  suggestReport: boolean
}
const defaults: OnboardingState = {
  screen: "welcome",
  tourStep: 0,
  tourPaused: false,
  selected: [],
  custom: "",
  customActive: false,
  usedDefaults: false,
  hidden: false,
  suggestReport: false,
}
function restore(value: unknown): OnboardingState {
  if (!value || typeof value !== "object") return { ...defaults }
  const record = value as Record<string, unknown>
  return {
    screen:
      record.screen === "tour" ||
      record.screen === "preferences" ||
      record.screen === "connections" ||
      record.screen === "complete"
        ? record.screen
        : "welcome",
    tourStep:
      typeof record.tourStep === "number" &&
      Number.isInteger(record.tourStep) &&
      record.tourStep >= 0 &&
      record.tourStep < 4
        ? record.tourStep
        : 0,
    tourPaused: record.tourPaused === true,
    selected: Array.isArray(record.selected)
      ? record.selected.filter(
          (id): id is OnboardingState["selected"][number] =>
            id === "personal" || id === "team" || id === "work"
        )
      : [],
    custom: typeof record.custom === "string" ? record.custom : "",
    customActive: record.customActive === true,
    usedDefaults: record.usedDefaults === true,
    hidden: record.hidden === true,
    suggestReport: record.suggestReport === true,
  }
}
export const SUMMARY_OPTIONS = [
  { id: "personal", label: "My tasks, deadlines and reminders" },
  { id: "team", label: "Team updates and requests to review" },
  { id: "work", label: "Updates on projects, hiring and other work I oversee" },
] as const
const listeners = new Set<() => void>()
const snapshots = new Map<ProfileId, OnboardingState>()
const key = (profile: ProfileId) => `f0compose:home:onboarding-v2:${profile}`
export function getOnboarding(profile: ProfileId): OnboardingState {
  const current = snapshots.get(profile)
  if (current) return current
  let value = restore({})
  try {
    value = restore(JSON.parse(localStorage.getItem(key(profile)) ?? "{}"))
  } catch {
    /* Unavailable storage leaves the current visit usable. */
  }
  snapshots.set(profile, value)
  return value
}
export function updateOnboarding(
  profile: ProfileId,
  patch: Partial<OnboardingState>
) {
  const next = restore({ ...getOnboarding(profile), ...patch })
  snapshots.set(profile, next)
  try {
    localStorage.setItem(key(profile), JSON.stringify(next))
  } catch {
    /* Session state remains available. */
  }
  listeners.forEach((listener) => listener())
}
export function useOnboarding(profile: ProfileId) {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => getOnboarding(profile)
  )
}
export function reopenOnboarding(
  profile: ProfileId,
  screen: "welcome" | "preferences" = "welcome"
) {
  updateOnboarding(profile, { screen, hidden: false })
}

export function startNavigationTour(profile: ProfileId) {
  updateOnboarding(profile, {
    screen: "tour",
    hidden: false,
    tourPaused: false,
  })
}
