import { ReactNode } from "react"
import { RecordType } from "../OneDataCollection/types"

export interface OneLaneProps<Record extends RecordType> {
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
   * The maximum height of the lane in pixels
   */
  maxHeight?: number

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
}
