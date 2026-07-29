import { useMemo, useState } from "react"

import type { KanbanOnMove, KanbanProps } from "@/ui/Kanban/types"

import { type RecordType } from "@/hooks/datasource"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { Kanban } from "@/ui/Kanban"

type KanbanBoardProps<R extends RecordType> = {
  lanes: KanbanProps<R>["lanes"]
  renderCard: KanbanProps<R>["renderCard"]
  getKey: KanbanProps<R>["getKey"]
  onCreate?: KanbanProps<R>["onCreate"]
  onMove?: KanbanOnMove<R>
  idProvider?: (item: R, index?: number) => string | number | symbol
  allowReorder: boolean
  loading: boolean
}

/**
 * Renders a single Kanban board (a set of lanes) for a given set of items.
 * Owns everything that must be scoped to one board: its DnD instance, the
 * per-lane index maps and the Kanban render. Data fetching and selection live
 * in KanbanCollection so they are shared across boards (grouping renders one
 * KanbanBoard per group).
 */
export const KanbanBoard = <R extends RecordType>({
  lanes,
  renderCard,
  getKey,
  onCreate,
  onMove,
  idProvider,
  allowReorder,
  loading,
}: KanbanBoardProps<R>) => {
  const [instanceId] = useState(() => Symbol("kanban-visualization"))

  // Build index maps per lane so DnD can resolve an item's position
  const laneIndexMaps = useMemo(() => {
    const maps = new Map<string, Map<string, number>>()
    lanes.forEach((lane) => {
      const map = new Map<string, number>()
      lane.items.forEach((item, index) => {
        const rawId = idProvider
          ? idProvider(item, index)
          : ((item as unknown as { id?: string | number })?.id ?? index)
        map.set(String(rawId), index)
      })
      maps.set(String(lane.id), map)
    })
    return maps
  }, [lanes, idProvider])

  const dnd = useMemo<NonNullable<KanbanProps<R>["dnd"]>>(
    () => ({
      instanceId,
      getIndexById: (laneId: string, id: string) => {
        const idx = laneIndexMaps.get(laneId)?.get(id) ?? -1
        return allowReorder ? idx : -1
      },
      onMove,
    }),
    [instanceId, laneIndexMaps, allowReorder, onMove]
  )

  const kanbanProps = useMemo<KanbanProps<R>>(
    () => ({
      lanes,
      loading,
      getKey,
      renderCard,
      onCreate,
      dnd,
    }),
    [lanes, loading, getKey, renderCard, onCreate, dnd]
  )

  return !onMove ? (
    <Kanban<R> {...kanbanProps} />
  ) : (
    <DndProvider driver={createAtlaskitDriver(instanceId)}>
      <Kanban<R> {...kanbanProps} />
    </DndProvider>
  )
}
