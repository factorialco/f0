import type { Variant } from "@/components/tags/F0TagStatus"
import type { RecordType } from "@/hooks/datasource"
import { ReactNode } from "react"

export interface LaneProps<Record extends RecordType> {
  /**
   * The title of the card
   */
  title?: string

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
}
