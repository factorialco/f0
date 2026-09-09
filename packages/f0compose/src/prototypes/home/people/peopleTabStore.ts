import { useSyncExternalStore } from "react"

/**
 * Which People tab is selected.
 *
 * A module store rather than component state because the People screen is
 * now a window body, and a maximized widget or chat unmounts the whole
 * canvas — and with it the window. The window itself comes back from
 * `?view`, but a `useState` tab would come back as "people" and silently
 * throw away the tab you were on.
 *
 * Same shape and same call as `peopleFocusStore`: not persisted, because a
 * reload should land on the designed tab.
 */

export type PeopleTabId =
  | "people"
  | "activity"
  | "teams"
  | "org-chart"
  | "roles"

let tab: PeopleTabId = "people"
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function usePeopleTab(): PeopleTabId {
  return useSyncExternalStore(
    subscribe,
    () => tab,
    () => tab
  )
}

export function setPeopleTab(next: PeopleTabId) {
  if (tab === next) return
  tab = next
  listeners.forEach((listener) => listener())
}
