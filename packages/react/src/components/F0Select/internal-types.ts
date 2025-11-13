export const valueTypeMode = ["single", "multiple", "chunked"] as const
export type ValueTypeMode = (typeof valueTypeMode)[number]
