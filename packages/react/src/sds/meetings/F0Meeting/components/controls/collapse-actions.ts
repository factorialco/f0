import { type F0MeetingAction, type F0MeetingSurfaceMode } from "../../types"

export const ACTION_SIZE = 40
export const ACTION_GAP = 8
/** The permanent "more" button, which never collapses. */
export const OVERFLOW_SLOT = 40
/** A mute toggle fused with its device chevron. */
export const MEDIA_CONTROL_SIZE = 89
/** "Leave" carries its label, so it is wider than an icon button. */
export const LEAVE_SIZE = 72

/**
 * Device pickers are not standalone buttons: they are the chevron half of the
 * control they configure, and the bar draws them there. They still travel in
 * the action array so a host can patch or remove them by id.
 */
export const PICKER_IDS: ReadonlySet<string> = new Set([
  "core:microphoneSettings",
  "core:cameraSettings",
])

const PAIRED_PICKER: Record<string, string> = {
  "core:microphone": "core:microphoneSettings",
  "core:camera": "core:cameraSettings",
}

export type CollapseResult = {
  visible: F0MeetingAction[]
  overflow: F0MeetingAction[]
}

const DEFAULT_PRIORITY = 50

/**
 * How much horizontal room one action claims.
 *
 * Measuring this properly matters: with every control counted as 40px, a bar
 * holding an 89px media pair and a 72px "Leave" thought it had far more room
 * than it did, and a side panel collapsed controls that would have fitted.
 */
const widthOf = (
  action: F0MeetingAction,
  present: ReadonlySet<string>
): number => {
  if (PICKER_IDS.has(action.id)) return 0
  if (action.id === "core:leave") return LEAVE_SIZE
  const picker = PAIRED_PICKER[action.id]
  if (picker) return present.has(picker) ? MEDIA_CONTROL_SIZE : ACTION_SIZE
  return ACTION_SIZE
}

/** Total width of a set of actions, gaps included. */
const measure = (
  actions: F0MeetingAction[],
  present: ReadonlySet<string>
): number => {
  const widths = actions
    .map((action) => widthOf(action, present))
    .filter((width) => width > 0)
  if (widths.length === 0) return 0
  return (
    widths.reduce((total, width) => total + width, 0) +
    ACTION_GAP * (widths.length - 1)
  )
}

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

  const present = new Set(applicable.map((action) => action.id))
  // The "more" button is always drawn, so its slot is never available.
  const budget = barWidth - OVERFLOW_SLOT - ACTION_GAP

  if (barWidth <= 0 || measure(applicable, present) <= budget) {
    return { visible: applicable, overflow: [] }
  }

  const ranked = [...applicable].sort((a, b) => {
    const pinned = Number(Boolean(b.pinned)) - Number(Boolean(a.pinned))
    if (pinned !== 0) return pinned
    return (b.priority ?? DEFAULT_PRIORITY) - (a.priority ?? DEFAULT_PRIORITY)
  })

  // Take actions in rank order while they fit. A picker rides along with its
  // toggle rather than competing with it, so the pair is never split in half.
  const kept = new Set<string>()
  const chosen: F0MeetingAction[] = []
  for (const action of ranked) {
    if (PICKER_IDS.has(action.id)) continue
    const candidate = [...chosen, action]
    if (measure(candidate, present) > budget && !action.pinned) continue
    chosen.push(action)
    kept.add(action.id)
    const picker = PAIRED_PICKER[action.id]
    if (picker && present.has(picker)) kept.add(picker)
  }

  return {
    visible: applicable.filter((action) => kept.has(action.id)),
    overflow: applicable.filter(
      (action) => !kept.has(action.id) && !PICKER_IDS.has(action.id)
    ),
  }
}
