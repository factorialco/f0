import { useSyncExternalStore } from "react"

import type { ProfileId } from "../profileStore"

import { readWidgets, changeWidgets } from "../setup/widgetPreferences"
import { windowIds, type WindowId } from "../windows/types"

export type CustomWidget = {
  id: string
  title: string
  topic: string
  context: string
  format: string
}
export type WidgetScope = "personal" | "employees"
export type WidgetSelection = Record<WidgetScope, string[]>
type WidgetCatalog = {
  custom: CustomWidget[]
  selectedCustom: string[]
  employees: string[]
}
function isCustomWidget(value: unknown): value is CustomWidget {
  if (!value || typeof value !== "object") return false
  return ["id", "title", "topic", "context", "format"].every(
    (key) =>
      key in value &&
      typeof Reflect.get(value, key) === "string" &&
      Reflect.get(value, key).trim().length > 0
  )
}
function parseCatalog(value: unknown): WidgetCatalog {
  if (!value || typeof value !== "object")
    throw new Error("Invalid widget catalog")
  const custom: unknown = Reflect.get(value, "custom")
  const selectedCustom: unknown = Reflect.get(value, "selectedCustom")
  const employees: unknown = Reflect.get(value, "employees")
  if (
    !Array.isArray(custom) ||
    !custom.every(isCustomWidget) ||
    !Array.isArray(selectedCustom) ||
    !selectedCustom.every((id) => typeof id === "string") ||
    !Array.isArray(employees) ||
    !employees.every((id) => typeof id === "string")
  )
    throw new Error("Invalid widget catalog")
  return { custom, selectedCustom, employees }
}
const eventName = "home:widget-catalog-changed"
const key = (profile: ProfileId) => `f0compose:home:widget-catalog:${profile}`
const cache = new Map<string, string>()
const empty = JSON.stringify({
  custom: [],
  selectedCustom: [],
  employees: ["clockin", "events", "communities"],
})
function snapshot(profile: ProfileId) {
  try {
    return (
      localStorage.getItem(key(profile)) ?? cache.get(key(profile)) ?? empty
    )
  } catch {
    return cache.get(key(profile)) ?? empty
  }
}
export function readCatalog(profile: ProfileId) {
  try {
    return parseCatalog(JSON.parse(snapshot(profile)))
  } catch {
    return parseCatalog(JSON.parse(empty))
  }
}
function write(profile: ProfileId, value: WidgetCatalog) {
  const json = JSON.stringify(value)
  cache.set(key(profile), json)
  try {
    localStorage.setItem(key(profile), json)
  } catch {
    /* Keep this session usable. */
  }
  window.dispatchEvent(new Event(eventName))
}
export function useWidgetCatalog(profile: ProfileId) {
  useSyncExternalStore(
    (listener) => {
      window.addEventListener(eventName, listener)
      window.addEventListener("storage", listener)
      return () => {
        window.removeEventListener(eventName, listener)
        window.removeEventListener("storage", listener)
      }
    },
    () => snapshot(profile)
  )
  return readCatalog(profile)
}
export function readSelection(profile: ProfileId): WidgetSelection {
  const data = readCatalog(profile)
  return {
    personal: [...readWidgets(profile), ...data.selectedCustom],
    employees: data.employees,
  }
}
export function saveSelection(profile: ProfileId, selection: WidgetSelection) {
  const data = readCatalog(profile)
  const valid = (id: string) =>
    isBuiltin(id) || data.custom.some((widget) => widget.id === id)
  const personal = [...new Set(selection.personal.filter(valid))]
  write(profile, {
    ...data,
    selectedCustom: personal.filter((id) => !isBuiltin(id)),
    employees: [...new Set(selection.employees.filter(valid))],
  })
  changeWidgets(profile, personal.filter(isBuiltin))
}
export function isBuiltin(id: string): id is WindowId {
  return windowIds.some((value) => value === id)
}
export function addCustomWidget(profile: ProfileId, widget: CustomWidget) {
  if (!isCustomWidget(widget)) throw new Error("Incomplete widget definition")
  const data = readCatalog(profile)
  if (data.custom.some((item) => item.id === widget.id)) return
  write(profile, { ...data, custom: [...data.custom, widget] })
}
export function countChanges(saved: WidgetSelection, draft: WidgetSelection) {
  return (["personal", "employees"] as const).reduce(
    (total, scope) =>
      total +
      saved[scope].filter((id) => !draft[scope].includes(id)).length +
      draft[scope].filter((id) => !saved[scope].includes(id)).length,
    0
  )
}
