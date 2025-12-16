import { TagVariant } from "../F0Tag/F0Tag"

// Generic type helper to create tag data types
type TagDataType<T extends string> = Omit<
  Extract<TagVariant, { type: T }>,
  "type" | "description"
>

export const tagTypes = [
  "dot",
  "person",
  "team",
  "company",
  "alert",
  "status",
  "balance",
  "raw",
] as const

export type TagType = (typeof tagTypes)[number]

// Define tag types using the generic helper
type TagTypeMapping = {
  dot: TagDataType<"dot">
  person: TagDataType<"person">
  team: TagDataType<"team">
  company: TagDataType<"company">
  alert: TagDataType<"alert">
  status: TagDataType<"status">
  balance: TagDataType<"balance">
  raw: TagDataType<"raw">
}

export type F0TagListProps<T extends TagType> = {
  /**
   * The type of tags to display. Only one type can be used at a time.
   */
  type: T

  /**
   * Array of tag data corresponding to the specified type.
   */
  tags: Array<TagTypeMapping[T]>

  /**
   * The maximum number of tags to display.
   * @default 4
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number
}
