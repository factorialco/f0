import { useSyncExternalStore } from "react"
import { CommunityPostSkeleton } from "@factorialco/f0-react/dist/experimental"
import { FactorialAgentIcon } from "../FactorialAgentIcon"
import type { ProfileId } from "../profileStore"

const listeners = new Set<() => void>()
const refreshing = new Set<ProfileId>()
const timers = new Map<ProfileId, ReturnType<typeof setTimeout>>()
const notify = () => listeners.forEach((listener) => listener())

// Visual simulation only. Agreements are saved immediately, so leaving during
// this finite transition cannot lose the user's selection.
export function refreshHome(profile: ProfileId) {
  clearTimeout(timers.get(profile))
  refreshing.add(profile)
  notify()
  timers.set(
    profile,
    setTimeout(() => {
      refreshing.delete(profile)
      timers.delete(profile)
      notify()
    }, 1500)
  )
}

export function useHomeRefreshing(profile: ProfileId) {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => refreshing.has(profile)
  )
}

// Original One working-state composition, with the approved bot artwork.
export function HomeWorking() {
  return (
    <div
      role="status"
      className="flex items-center gap-2"
      data-home-working
    >
      <FactorialAgentIcon width={24} height={24} />
      <p className="shine-text text-pretty">Updating your home…</p>
    </div>
  )
}

export function HomeLoadingSkeleton() {
  return (
    <div
      aria-label="Loading home content"
      aria-busy="true"
      data-home-skeleton
    >
      <CommunityPostSkeleton />
    </div>
  )
}
