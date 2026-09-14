import type { ModuleId } from "@factorialco/f0-react"

import type { ProfileId } from "../profileStore"

import { FOR_YOU } from "../EmployeeCanvas"
import { needsYouTasks } from "../fixtures"
import { inboxNotifications } from "./inboxNotifications"

/**
 * The Inbox lists the SAME work the canvas does (per Oskar, 2026-09-01) —
 * the admin's approval queue, or the employee's "For you" — just in the
 * inbox row design. One fixture, two presentations.
 *
 * Lifted out of HomeNav so the ticket panel can resolve a row's title
 * without importing the nav (which would be a cycle).
 */
/**
 * `request` is something waiting on YOU; `notification` is something that
 * happened. The split arrived on 2026-09-14 with the rail's Bell — Angel:
 * "se me solapa notifications e Inbox, colapsaría en 1" — so the two now
 * share one list and one first-level destination, separated by a preset
 * rather than by a second icon.
 */
export type InboxKind = "request" | "notification"

export type InboxPreset = "all" | InboxKind

export type InboxTask = {
  id: string
  title: string
  meta: string
  module: ModuleId
  avatarSeed: string
  kind: InboxKind
}

export function inboxTasks(profile: ProfileId): InboxTask[] {
  const requests: InboxTask[] =
    profile === "employee"
      ? FOR_YOU.map((item) => ({
          id: item.id,
          title: item.title,
          meta: item.meta ?? "",
          module: item.module,
          avatarSeed: item.avatarSeed,
          kind: "request" as const,
        }))
      : needsYouTasks.map((task) => ({
          id: task.id,
          title: task.title,
          meta: task.subtitle,
          module: task.module,
          avatarSeed: task.avatarSeed,
          kind: "request" as const,
        }))
  return [...requests, ...inboxNotifications()]
}

/**
 * The rows still open — what the nav LIST shows. Separate from
 * `inboxTasks` on purpose: `taskTitle` looks ids up through that one, and
 * a task One has cleared must still resolve to its own title rather than
 * to "Ticket".
 */
export function openInboxTasks(
  profile: ProfileId,
  removed: string[],
  preset: InboxPreset = "all"
): InboxTask[] {
  return inboxTasks(profile)
    .filter((task) => !removed.includes(task.id))
    .filter((task) => preset === "all" || task.kind === preset)
}

/** How many rows each preset would show — the chips carry their count. */
export function inboxPresetCounts(
  profile: ProfileId,
  removed: string[]
): Record<InboxPreset, number> {
  const open = openInboxTasks(profile, removed)
  return {
    all: open.length,
    request: open.filter((task) => task.kind === "request").length,
    notification: open.filter((task) => task.kind === "notification").length,
  }
}

/** Every task across both profiles, for looking a title up by id. */
export function taskTitle(id: string): string {
  const all = [...inboxTasks("admin"), ...inboxTasks("employee")]
  return all.find((t) => t.id === id)?.title ?? "Ticket"
}
