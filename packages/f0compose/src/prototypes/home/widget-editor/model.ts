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
  personalOrder?: string[]
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
  const order: unknown = Reflect.get(value, "personalOrder")
  const personalOrder = Array.isArray(order)
    ? order.filter((id): id is string => typeof id === "string")
    : undefined
  return { custom, selectedCustom, employees, personalOrder }
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
  const chosen = [...readWidgets(profile), ...data.selectedCustom]
  const ordered = [
    ...(data.personalOrder ?? []).filter((id) => chosen.includes(id)),
    ...chosen,
  ]
  return {
    personal: [...new Set([...data.employees, ...ordered])],
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
    personalOrder: personal,
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
      draft[scope].filter((id) => !saved[scope].includes(id)).length +
      (saved[scope].length === draft[scope].length &&
      saved[scope].every((id) => draft[scope].includes(id)) &&
      saved[scope].some((id, index) => draft[scope][index] !== id)
        ? 1
        : 0),
    0
  )
}

/** Employee defaults keep their leading positions; only personal extras move. */
export function reorderPersonal(
  selection: WidgetSelection,
  active: string,
  target: string
): WidgetSelection {
  if (
    selection.employees.includes(active) ||
    selection.employees.includes(target)
  )
    return selection
  const extras = selection.personal.filter(
    (id) => !selection.employees.includes(id)
  )
  const from = extras.indexOf(active),
    to = extras.indexOf(target)
  if (from < 0 || to < 0 || from === to) return selection
  extras.splice(from, 1)
  extras.splice(to, 0, active)
  return { ...selection, personal: [...selection.employees, ...extras] }
}

/** Admins can order the employee defaults in their own scope. */
export function reorderEmployees(
  selection: WidgetSelection,
  active: string,
  target: string
): WidgetSelection {
  const employees = [...selection.employees]
  const from = employees.indexOf(active),
    to = employees.indexOf(target)
  if (from < 0 || to < 0 || from === to) return selection
  employees.splice(from, 1)
  employees.splice(to, 0, active)
  return { ...selection, employees }
}
