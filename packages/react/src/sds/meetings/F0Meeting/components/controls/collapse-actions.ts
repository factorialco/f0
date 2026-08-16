import { type F0MeetingAction, type F0MeetingSurfaceMode } from "../../types"

export const ACTION_SIZE = 40
export const ACTION_GAP = 4
export const BAR_PADDING = 8
export const OVERFLOW_SLOT = 44

export type CollapseResult = {
  visible: F0MeetingAction[]
  overflow: F0MeetingAction[]
}

const DEFAULT_PRIORITY = 50

/**
 * Decides which actions stay in the bar. Capacity is derived from the measured
 * bar width rather than from each button's box: measuring per-button forces a
 * layout on every render and makes the bar visibly jump as it settles.
 *
 * Ranking picks what survives; rendering keeps the ORIGINAL order, so controls
 * never swap places as the window is resized.
 */
export const collapseActions = (
  actions: F0MeetingAction[],
  barWidth: number,
  mode: F0MeetingSurfaceMode
): CollapseResult => {
  const applicable = actions.filter(
    (action) => !action.modes || action.modes.includes(mode)
  )

  // A minimized pill has room for the essentials only, and no overflow menu:
  // opening a menu from a 56px bar is worse than not offering the action.
  if (mode === "minimized") {
    return {
      visible: applicable.filter((action) => action.pinned),
      overflow: [],
    }
  }

  const capacity = Math.floor(
    (barWidth - BAR_PADDING * 2 + ACTION_GAP) / (ACTION_SIZE + ACTION_GAP)
  )

  if (barWidth <= 0 || applicable.length <= capacity) {
    return { visible: applicable, overflow: [] }
  }

  const keep = Math.max(
    applicable.filter((action) => action.pinned).length,
    capacity - 1
  )

  const ranked = [...applicable].sort((a, b) => {
    const pinned = Number(Boolean(b.pinned)) - Number(Boolean(a.pinned))
    if (pinned !== 0) return pinned
    return (b.priority ?? DEFAULT_PRIORITY) - (a.priority ?? DEFAULT_PRIORITY)
  })

  const kept = new Set(ranked.slice(0, keep).map((action) => action.id))

  return {
    visible: applicable.filter((action) => kept.has(action.id)),
    overflow: applicable.filter((action) => !kept.has(action.id)),
  }
}
