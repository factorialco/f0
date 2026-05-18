import { ReactNode } from "react"

import type { IconType } from "@/components/F0Icon"
import type { Variant } from "@/components/tags/F0TagStatus"
import type { RecordType } from "@/hooks/datasource"

export interface LaneSelection {
  /** Required: callback fired when the header checkbox toggles. */
  onSelectAll: (checked: boolean) => void
  /** Required: visually-hidden accessible label for the checkbox. */
  selectAllLabel: string
  /** Whether the checkbox is checked (all loaded items in lane selected). */
  selected?: boolean
  /** Whether the checkbox is in indeterminate state (partial selection). */
  indeterminate?: boolean
}

export interface LaneSelectAllItemsConfig {
  onSelectAllItems: () => void
  selectAllItemsLabel: string
  loadedSelectionLabel: string
  allItemsSelectedLabel?: string
  allItemsSelected?: boolean
  totalItems?: number
}

export interface LaneProps<Record extends RecordType> {
  /**
   * The title of the card
   */
  title?: string
  /**
   * Primary action triggered from the lane header (top-right).
   */
  onPrimaryAction?: () => void
  primaryActionIcon?: IconType
  primaryActionLabel?: string

  /**
   * The items to display in the lane
   */
  items: Record[]

  /**
   * Function to render each item as a card
   */
  renderCard: (item: Record, index: number) => ReactNode

  /**
   * Function to extract unique key from each item
   */
  getKey: (item: Record, index: number) => string | number

  /**
   * Content to show when there are no items
   */
  emptyState?: ReactNode

  /**
   * Whether the lane is in loading state
   */
  loading?: boolean

  /**
   * Whether the lane has more items to load
   */
  hasMore?: boolean

  /**
   * Whether the lane is in loading more state
   */
  loadingMore?: boolean

  /**
   * Function to fetch more items. This is used to fetch more items when the lane is at the bottom of the viewport.
   */
  fetchMore?: () => void

  /**
   * The variant of the lane
   */
  variant?: Variant

  /**
   * The total number of items in the lane (for display in header)
   * If not provided, defaults to items.length
   */
  total?: number
  /**
   * Action triggered from the lane footer button, usually to create new items.
   */
  onFooterAction?: () => void
  footerActionLabel?: string
  footerActionIcon?: IconType
  /**
   * Index at which to show a drop placeholder/skeleton during drag operations.
   * If undefined, no placeholder is shown.
   */
  dropPlaceholderIndex?: number

  /**
   * Per-lane select-all configuration. Presence enables the header checkbox.
   * `onSelectAll` and `selectAllLabel` are required when provided.
   */
  selection?: LaneSelection
  /**
   * Secondary "select all items across pages" banner shown under the header.
   * Only rendered when this object is provided.
   */
  selectAllItems?: LaneSelectAllItemsConfig
}
