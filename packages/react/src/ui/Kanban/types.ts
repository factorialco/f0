import type { ReactNode } from "react"

import type { Variant } from "@/components/tags/F0TagStatus"
import type { RecordType } from "@/hooks/datasource"

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

  /** Whether the kanban is in loading state */
  loading?: boolean

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

  /** Optional callback triggered when requesting a new record in a lane */
  onCreate?: KanbanOnCreate

  /** Optional DnD configuration to enable droppable lanes */
  dnd?: {
    instanceId: symbol
    getIndexById: (laneId: string, id: string) => number
    onMove?: KanbanOnMove<TRecord>
  }
}

export type KanbanOnCreate = (laneId: string) => void | Promise<void>

export type KanbanOnMove<TRecord extends RecordType> = (
  fromLaneId: string,
  toLaneId: string,
  sourceRecord: TRecord,
  destinyRecord: { record: TRecord; position: "above" | "below" } | null
) => Promise<TRecord>

export type KanbanOnMoveParam =
  | {
      fromLaneId: string
      toLaneId: string
      sourceId: string
      indexOfTarget: null
      position: null
    }
  | {
      fromLaneId: string
      toLaneId: string
      sourceId: string
      indexOfTarget: number
      position: "above" | "below"
    }

// (Removed) Leave/Insert split: we simplified to a single onMove orchestrated by Kanban

export type { RecordType }
