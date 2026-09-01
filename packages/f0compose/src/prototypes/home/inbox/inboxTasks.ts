import type { ModuleId } from "@factorialco/f0-react"

import type { ProfileId } from "../profileStore"

import { FOR_YOU } from "../EmployeeCanvas"
import { needsYouTasks } from "../fixtures"

/**
 * The Inbox lists the SAME work the canvas does (per Oskar, 2026-09-01) —
 * the admin's approval queue, or the employee's "For you" — just in the
 * inbox row design. One fixture, two presentations.
 *
 * Lifted out of HomeNav so the ticket panel can resolve a row's title
 * without importing the nav (which would be a cycle).
 */
export type InboxTask = {
  id: string
  title: string
  meta: string
  module: ModuleId
  avatarSeed: string
}

export function inboxTasks(profile: ProfileId): InboxTask[] {
  return profile === "employee"
    ? FOR_YOU.map((item) => ({
        id: item.id,
        title: item.title,
        meta: item.meta ?? "",
        module: item.module,
        avatarSeed: item.avatarSeed,
      }))
    : needsYouTasks.map((task) => ({
        id: task.id,
        title: task.title,
        meta: task.subtitle,
        module: task.module,
        avatarSeed: task.avatarSeed,
      }))
}

/** Every task across both profiles, for looking a title up by id. */
export function taskTitle(id: string): string {
  const all = [...inboxTasks("admin"), ...inboxTasks("employee")]
  return all.find((t) => t.id === id)?.title ?? "Ticket"
}
