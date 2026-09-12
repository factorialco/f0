import { useSyncExternalStore } from "react"

const preparing = new Set<string>()
const listeners = new Set<() => void>()
const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}
export function setHomePreparing(profile: string, value: boolean) {
  if (preparing.has(profile) === value) return
  if (value) preparing.add(profile)
  else preparing.delete(profile)
  listeners.forEach(listener => listener())
}
export function useHomePreparing(profile: string) {
  return useSyncExternalStore(subscribe, () => preparing.has(profile), () => false)
}
