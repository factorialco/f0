import { type F0MeetingAction, type F0MeetingActionInput } from "../../types"

const isFullAction = (
  action: F0MeetingActionInput
): action is F0MeetingAction =>
  typeof (action as F0MeetingAction).label === "string" &&
  (action as F0MeetingAction).icon !== undefined

/**
 * Merges the actions F0 synthesizes from the runtime with the host's own.
 *
 * Reusing a core id PATCHES the synthesized action instead of appending a
 * second one, so a host can restyle or relabel the mic button — or hide it —
 * without reimplementing what it does. Unknown ids are appended after the last
 * action of their group, keeping related controls together.
 */
export const mergeActions = (
  core: F0MeetingAction[],
  host: F0MeetingActionInput[] = [],
  order: string[] = []
): F0MeetingAction[] => {
  const byId = new Map(core.map((action) => [action.id, action]))
  const appended: F0MeetingAction[] = []

  for (const action of host) {
    const existing = byId.get(action.id)
    if (existing) {
      byId.set(action.id, { ...existing, ...action })
      continue
    }
    // A patch for an id that does not exist has nothing to patch. Dropping it
    // silently would hide a typo in a core id, which is exactly the mistake
    // this shape invites.
    if (!isFullAction(action)) {
      console.warn(
        `[F0Meeting] Ignoring action patch for unknown id "${action.id}".`
      )
      continue
    }
    byId.set(action.id, action)
    appended.push(action)
  }

  const merged: F0MeetingAction[] = []

  for (const { id } of core) {
    const action = byId.get(id)
    if (action) merged.push(action)
    // Keep host additions next to the group they declared.
    for (const extra of appended) {
      const resolved = byId.get(extra.id)
      if (!resolved || merged.includes(resolved)) continue
      if (extra.group && extra.group === action?.group) merged.push(resolved)
    }
  }

  for (const extra of appended) {
    const resolved = byId.get(extra.id)
    if (resolved && !merged.includes(resolved)) merged.push(resolved)
  }

  const visible = merged.filter((action) => !action.hidden)
  if (order.length === 0) return visible

  const rank = new Map(order.map((id, index) => [id, index]))
  return [...visible].sort((a, b) => {
    const rankA = rank.get(a.id)
    const rankB = rank.get(b.id)
    if (rankA === undefined && rankB === undefined) return 0
    if (rankA === undefined) return 1
    if (rankB === undefined) return -1
    return rankA - rankB
  })
}
