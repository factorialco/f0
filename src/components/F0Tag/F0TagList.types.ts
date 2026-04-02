import type {
  F0TagAlertProps,
  F0TagBalanceProps,
  F0TagCompanyProps,
  F0TagDotProps,
  F0TagPersonProps,
  F0TagRawProps,
  F0TagStatusProps,
  F0TagTeamProps,
} from "./F0Tag.types"

/**
 * Supported homogeneous tag types for `F0TagList`.
 */
export const F0_TAG_LIST_TYPES = [
  "dot",
  "person",
  "team",
  "company",
  "alert",
  "status",
  "balance",
  "raw",
] as const

export type F0TagListType = (typeof F0_TAG_LIST_TYPES)[number]

type F0TagListTypeMapping = {
  dot: F0TagDotProps
  person: F0TagPersonProps
  team: F0TagTeamProps
  company: F0TagCompanyProps
  alert: F0TagAlertProps
  status: F0TagStatusProps
  balance: F0TagBalanceProps
  raw: F0TagRawProps
}

/**
 * Data-driven list API for rendering multiple tags of the same semantic type.
 */
export type F0TagListProps<T extends F0TagListType> = {
  /**
   * Tag variant type to render for all list items.
   */
  type: T
  /**
   * Array of tag props matching the selected `type`.
   */
  tags: Array<F0TagListTypeMapping[T]>
  /**
   * Maximum number of visible tags before showing overflow counter.
   * @default 4
   */
  max?: number
  /**
   * Optional external remaining count to add to computed overflow.
   */
  remainingCount?: number
  /**
   * Optional className for the list container.
   */
  className?: string
}
