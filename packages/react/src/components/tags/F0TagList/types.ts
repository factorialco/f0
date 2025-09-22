import { TagVariant } from "../Tag"

// Generic type helper to create tag data types
type TagDataType<T extends string> = Omit<
  Extract<TagVariant, { type: T }>,
  "type" | "description"
>

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

export type TagType = keyof TagTypeMapping

type WithTooltipDescription = {
  description?: string
}

export type Props<T extends TagType> = {
  /**
   * The type of tags to display. Only one type can be used at a time.
   */
  type: T

  /**
   * Array of tag data corresponding to the specified type.
   */
  tags: Array<TagTypeMapping[T] & WithTooltipDescription>

  /**
   * The maximum number of tags to display.
   * @default 4
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * The layout of the tag list.
   * - "fill" - Tags will expand to fill the available width, with overflow items shown in a counter
   * - "compact" - Tags will be stacked together up to the max limit, with remaining shown in counter
   * @default "compact"
   */
  layout?: "fill" | "compact"
}
