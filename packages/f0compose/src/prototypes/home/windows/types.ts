import type { StackState } from "./stack"

export const windowIds = [
  "celebrations",
  "clockin",
  "communities",
  "events",
  "inbox",
  "insights",
  "preview",
] as const

export type WindowId = (typeof windowIds)[number]

/**
 * Widgets the stack OPENS with (per Oskar, 2026-09-01: "al abrir la home
 * por primera vez el widget de clock-in y el de communities esten
 * abiertos por defecto"). Order is the stacking order, and it matches the
 * frame's lateral column (2730:461616): the 176px Clock in card on top,
 * the tall widget below it — both inside one column, since a column holds
 * two (MAX_PER_COLUMN).
 *
 * It lives HERE rather than in the registry so `useWindows` can read it
 * without importing WindowsColumn — that would be a cycle. Only the
 * useState initializer reads it, so closing a widget keeps it closed for
 * the session; a reload lands on the default again.
 */
export const DEFAULT_OPEN_WINDOWS: WindowId[] = ["clockin", "communities"]

/** The widgets stack's state. The shape is shared with the Comms chats
 *  stack — see `StackState` in ./stack. */
export type WindowsState = StackState<WindowId>
