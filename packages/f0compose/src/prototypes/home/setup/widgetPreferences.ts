import { useSyncExternalStore } from "react"
import type { ProfileId } from "../profileStore"

import {
  DEFAULT_OPEN_WINDOWS,
  windowIds,
  type WindowId,
} from "../windows/types"

const key = (profile: ProfileId) =>
  `f0compose:home:fixed-widgets:${profile}`
export const WIDGET_CHANGE_EVENT = "home:fixed-widgets-change"
const PREFERENCES_CHANGED = "home:widget-preferences-changed"
export function readWidgets(profile: ProfileId): WindowId[] {
  try {
    const raw = localStorage.getItem(key(profile))
    if (!raw) return [...DEFAULT_OPEN_WINDOWS]
    const parsed: unknown = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      // Upgrade the previous demo default; keep other saved arrangements.
      if (
        localStorage.getItem(`${key(profile)}:version`) !== "2" &&
        parsed.length === 2 &&
        parsed.includes("clockin") &&
        parsed.includes("communities")
      )
        return [...DEFAULT_OPEN_WINDOWS]
      return parsed.filter((id): id is WindowId => windowIds.includes(id))
    }
  } catch {
    /* The session still works when storage is unavailable. */
  }
  return [...DEFAULT_OPEN_WINDOWS]
}
export function persistWidgets(profile: ProfileId, widgets: WindowId[]) {
  try {
    const next = JSON.stringify(widgets)
    localStorage.setItem(`${key(profile)}:version`, "2")
    if (localStorage.getItem(key(profile)) === next) return
    localStorage.setItem(key(profile), next)
    window.dispatchEvent(new Event(PREFERENCES_CHANGED))
  } catch {
    /* Best effort. */
  }
}
export function changeWidgets(profile: ProfileId, widgets: WindowId[]) {
  const previous = readWidgets(profile)
  try {
    localStorage.setItem(`${key(profile)}:undo`, JSON.stringify(previous))
  } catch {
    /* Best effort. */
  }
  persistWidgets(profile, widgets)
  window.dispatchEvent(
    new CustomEvent(WIDGET_CHANGE_EVENT, { detail: { profile, widgets } })
  )
}
export function undoWidgets(profile: ProfileId): boolean {
  try {
    const raw = localStorage.getItem(`${key(profile)}:undo`)
    if (!raw) return false
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return false
    const widgets = parsed.filter((id): id is WindowId =>
      windowIds.includes(id)
    )
    changeWidgets(profile, widgets)
    return true
  } catch {
    return false
  }
}

// Subscribe to preference changes from both the interview and original menu.
// A string snapshot remains stable across React renders.
export function useFixedWidgets(profile: ProfileId): WindowId[] {
  const value = useSyncExternalStore(
    (listener) => {
      window.addEventListener(PREFERENCES_CHANGED, listener)
      return () => window.removeEventListener(PREFERENCES_CHANGED, listener)
    },
    () => readWidgets(profile).join(",")
  )
  return value ? (value.split(",") as WindowId[]) : []
}
