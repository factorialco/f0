export const windowIds = [
  "celebrations",
  "communities",
  "events",
  "inbox",
  "insights",
  "preview",
] as const

export type WindowId = (typeof windowIds)[number]

export type WindowsState = {
  /** Open windows, top of the stack first. */
  open: WindowId[]
  /** Vertical space share per open window (parallel to `open`). */
  weights: number[]
  /** Column width in px. */
  columnWidth: number
  /** Window currently maximized inside the column, if any. */
  maximized: WindowId | null
}
