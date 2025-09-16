import type { Variant } from "@/components/tags/F0TagStatus"
import type { RecordType } from "@/experimental/OneDataCollection/types"
import type { ReactNode } from "react"

export type KanbanLaneAttributes<TRecord extends RecordType> = {
  id?: string
  title?: string
  /** For now, we pass concrete items to enable visual iteration without a data source */
  items: TRecord[]
  /** Optional empty state per lane */
  emptyState?: ReactNode
  /** Visual loading states per lane */
  loading?: boolean
  loadingMore?: boolean
  hasMore?: boolean
  fetchMore?: () => void
  /** Optional layout per-lane */
  maxHeight?: number
  /** Visual variant to mirror project status */
  variant?: Variant
  /** Total number of items in the lane (for display in header) */
  total?: number
  /** Future: filters that would be applied to the shared data source */
  filters?: Partial<Record<string, unknown>>
}

export interface KanbanProps<TRecord extends RecordType> {
  /**
   * Lanes configuration. While the data source adapter is not ready, each lane
   * carries its concrete items so we can iterate visually.
   */
  lanes: ReadonlyArray<KanbanLaneAttributes<TRecord>>

  /** Render a card for a given record */
  renderCard: (
    item: TRecord,
    index: number,
    total: number,
    laneId?: string
  ) => ReactNode

  /** Extract a stable key for a given record */
  getKey: (item: TRecord, index: number, laneId?: string) => string | number

  /** Optional CSS classes for root */
  className?: string

  /** Optional DnD configuration to enable droppable lanes */
  dnd?: {
    instanceId: symbol
    getIndexById: (laneId: string, id: string) => number
    onMove?: (
      fromLaneId: string,
      toLaneId: string,
      sourceId: string,
      toIndex: number | null
    ) => Promise<void>
  }

  /**
   * Future: a shared data source config. We mirror the DataCollection idea of
   * having a common source and per-lane filters. Left undefined while backend
   * integration is pending.
   */
  // dataSource?: DataSource<...> // intentionally omitted for now
  // filters?: FiltersDefinition // example alignment
}

export type { RecordType }
