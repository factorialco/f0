/**
 * @deprecated Use SelectionMode from types.ts instead
 * Internal value type modes - kept for backwards compatibility
 */
export const valueTypeMode = ["single", "multiple"] as const
export type ValueTypeMode = (typeof valueTypeMode)[number]
