import type { StackState } from "./stack"

export const windowIds = [
  "celebrations",
  "clockin",
  "communities",
  "events",
  "inbox",
  "insights",
  "preview",
  "payslip",
  "holidays",
  "recruitment",
  "documents",
  "shifts",
] as const

export type WindowId = (typeof windowIds)[number]

/** Complement the central updates with two persistent widgets in the original
 * stack. Saved user arrangements are managed by setup/widgetPreferences. */
export const DEFAULT_OPEN_WINDOWS: WindowId[] = ["payslip", "recruitment"]

/** The widgets stack's state. The shape is shared with the Comms chats
 *  stack — see `StackState` in ./stack. */
export type WindowsState = StackState<WindowId>
