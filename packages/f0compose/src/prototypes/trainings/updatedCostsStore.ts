import { useSyncExternalStore } from "react"

const storageKey = "f0compose:trainings:updated-costs"
const changedStorageKey = "f0compose:trainings:changed-costs"

function readStoredMovementIds(key: string) {
  if (typeof window === "undefined") return new Set<string>()

  const value = window.localStorage.getItem(key)
  if (!value) return new Set<string>()

  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? new Set<string>(parsed) : new Set<string>()
  } catch {
    return new Set<string>()
  }
}

function storeMovementIds(key: string, movementIds: Set<string>) {
  if (typeof window === "undefined") return

  window.localStorage.setItem(key, JSON.stringify([...movementIds]))
}

let updatedMovementIds = readStoredMovementIds(storageKey)
let changedMovementIds = readStoredMovementIds(changedStorageKey)
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function notify() {
  listeners.forEach((listener) => listener())
}

function getUpdatedMovementIds() {
  return updatedMovementIds
}

function getTriggeredChangedMovementIds() {
  return changedMovementIds
}

export function markCostsChanged(movementId: string | null | undefined) {
  if (!movementId) return

  const nextChanged = new Set(changedMovementIds)
  nextChanged.add(movementId)
  changedMovementIds = nextChanged

  const nextUpdated = new Set(updatedMovementIds)
  nextUpdated.delete(movementId)
  updatedMovementIds = nextUpdated
  storeMovementIds(storageKey, updatedMovementIds)
  storeMovementIds(changedStorageKey, changedMovementIds)

  notify()
}

export function markCostsUpdated(movementIds: string[]) {
  const next = new Set(updatedMovementIds)
  for (const movementId of movementIds) {
    next.add(movementId)
  }
  updatedMovementIds = next
  storeMovementIds(storageKey, updatedMovementIds)

  const nextChanged = new Set(changedMovementIds)
  for (const movementId of movementIds) {
    nextChanged.delete(movementId)
  }
  changedMovementIds = nextChanged
  storeMovementIds(changedStorageKey, changedMovementIds)

  notify()
}

export function useUpdatedMovementIds() {
  return useSyncExternalStore(subscribe, getUpdatedMovementIds)
}

export function useTriggeredChangedMovementIds() {
  return useSyncExternalStore(subscribe, getTriggeredChangedMovementIds)
}
