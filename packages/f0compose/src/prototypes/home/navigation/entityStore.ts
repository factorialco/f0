import { useSyncExternalStore } from "react"

import factorial from "./assets/factorial.svg"

/**
 * Which legal entity you are looking at. Lifted out of `RailMenus` on
 * 2026-09-14, when the rail logo became a switcher too (Angel: the company
 * selector belongs at the top of the first-level nav, which is where
 * people already look for it) — the profile menu keeps its own list, and
 * with two consumers a `useState` inside one of them would drift.
 *
 * Module store for the same reason as `profileStore`: the rail, the panel
 * and the canvas are sibling React trees.
 */

export type Entity = { id: string; name: string; src?: string }

export const ENTITIES: Entity[] = [
  { id: "factorial", name: "Factorial", src: factorial },
  { id: "test-de-verdad", name: "Test de verdad" },
]

const STORAGE_KEY = "f0compose:home:legal-entity"

function load(): string {
  if (typeof window === "undefined") return ENTITIES[0].id
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return ENTITIES.some((entity) => entity.id === stored)
    ? stored!
    : ENTITIES[0].id
}

let selected = load()
const listeners = new Set<() => void>()

export function useEntity(): Entity {
  const id = useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => selected,
    () => selected
  )
  return ENTITIES.find((entity) => entity.id === id) ?? ENTITIES[0]
}

export function setEntity(id: string) {
  if (selected === id) return
  selected = id
  try {
    window.localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // Persistence is best-effort.
  }
  listeners.forEach((listener) => listener())
}
