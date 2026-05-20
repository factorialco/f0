import { useSyncExternalStore } from "react"

const values = new Map<string, boolean>()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function notify() {
  listeners.forEach((listener) => listener())
}

export function setCostsByLegalEntityToggle(groupId: string, value: boolean) {
  values.set(groupId, value)
  notify()
}

export function useCostsByLegalEntityToggle(
  groupId: string,
  defaultValue: boolean
) {
  return useSyncExternalStore(subscribe, () => values.get(groupId) ?? defaultValue)
}
