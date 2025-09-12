import type {
  CardMetadata,
  CardMetadataProperty,
} from "@/components/F0Card/types"
import type { IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useDataCollectionLanesData } from "@/experimental/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData"
import { useSelectableLanes } from "@/experimental/OneDataCollection/hooks/useSelectableLanes"
import {
  InfiniteScrollPaginatedResponse,
  PaginationInfo,
  type RecordType,
} from "@/hooks/datasource"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { useIsDev } from "@/lib/providers/user-platafform"
import { Kanban } from "@/ui/Kanban"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"
import type { KanbanProps } from "@/ui/Kanban/types"
import { useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  GroupingDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"
import { KanbanCollectionProps } from "./types"

export const KanbanCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  lanes,
  title,
  description,
  avatar,
  metadata: optionsMetadata,
  onMove,
  source,
  onSelectItems,
  onLoadError,
}: KanbanCollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const { lanesProvider, lanesHooks } = useDataCollectionLanesData<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => onLoadError(error),
  })

  const isDev = useIsDev()

  if (source.currentGrouping && isDev) {
    throw new Error("Grouping is not supported in Kanban yet")
  }

  const [instanceId] = useState(() => Symbol("kanban-visualization"))

  const idProvider = source.idProvider

  const lanesSignature = useMemo(() => {
    return JSON.stringify(
      Object.values(lanesHooks).map((laneHook) => laneHook.data)
    )
  }, [lanesHooks])

  const laneItems = useMemo(() => {
    return lanes.map((lane) => ({
      ...lane,
      items: lanesHooks[lane.id]?.data?.records || [],
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lanesSignature])

  const toCardMetadata = (
    items: ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  ): CardMetadata[] =>
    items.map(({ icon, property }) =>
      property.type === "file" ? { property } : { icon, property }
    )

  const isInfiniteScrollPaginationInfo = (
    paginationInfo: PaginationInfo | undefined | null
  ): paginationInfo is InfiniteScrollPaginatedResponse<unknown> => {
    return Boolean(paginationInfo && paginationInfo.type === "infinite-scroll")
  }

  const kanbanProps: KanbanProps<R> = {
    lanes: laneItems.map((l) => {
      const laneData = lanesHooks[l.id]
      const totalItems = laneData?.paginationInfo?.total

      const hasMore =
        isInfiniteScrollPaginationInfo(laneData?.paginationInfo) &&
        laneData?.paginationInfo?.hasMore
      return {
        id: l.id,
        title: l.title,
        items: l.items,
        variant: l.variant,
        total: totalItems,
        hasMore: hasMore,
        loading: laneData?.isLoading || false,
        loadingMore: laneData?.isLoadingMore || false,
        fetchMore: hasMore ? () => laneData.loadMore() : undefined,
      }
    }),
    loading: Object.values(lanesHooks).some(
      (laneHook) => laneHook.isInitialLoading
    ),
    getKey: (item, index) =>
      idProvider ? String(idProvider(item, index)) : index,
    renderCard: (item, index, total, laneId) => {
      const dragId = String(idProvider ? idProvider(item, index) : index)
      const itemId = source.selectable ? source.selectable(item) : item.id

      // Gets the lane useSelectable hook
      const useSelectable =
        lanesUseSelectable && laneId
          ? lanesUseSelectable.get(laneId)
          : undefined

      const isSelected =
        (typeof itemId === "string" || typeof itemId === "number") &&
        useSelectable &&
        useSelectable?.selectedItems.has(itemId)

      return (
        <KanbanCard
          key={dragId}
          drag={{ id: dragId, type: "list-card", data: { laneId } }}
          id={String(item.id)}
          index={index}
          total={total}
          laneId={laneId}
          showIndicator={allowReorder}
          title={title ? title(item) : String(index)}
          description={description ? description(item) : undefined}
          avatar={avatar ? avatar(item) : undefined}
          draggable={onMove !== undefined}
          metadata={
            optionsMetadata ? toCardMetadata(optionsMetadata(item)) : undefined
          }
          compact
          selectable={source.selectable !== undefined}
          selected={isSelected}
          onSelect={(selected) => {
            if (useSelectable) {
              useSelectable.handleSelectItemChange(item, selected)
            }
          }}
        />
      )
    },
  }

  // Fine-grained reorder only when no sort order is applied
  const allowReorder = source.currentSortings === null

  // Build index maps per lane when needed
  const laneIndexMaps = useMemo(() => {
    const maps = new Map<string, Map<string, number>>()
    laneItems.forEach((lane) => {
      const map = new Map<string, number>()
      lane.items.forEach((item, index) => {
        const itemId = String(idProvider ? idProvider(item as R, index) : index)
        map.set(itemId, index)
      })
      maps.set(lane.id, map)
    })
    return maps
  }, [laneItems, idProvider])

  kanbanProps.dnd = {
    instanceId: instanceId,
    getIndexById: (laneId: string, id: string) => {
      const idx = laneIndexMaps.get(laneId)?.get(id) ?? -1
      return allowReorder ? idx : -1
    },
    onMove: onMove
      ? async (
          fromLaneId: string,
          toLaneId: string,
          sourceId: string,
          toIndex: number | null
        ) => {
          // Find the source record by sourceId
          const sourceLane = laneItems.find((lane) => lane.id === fromLaneId)
          const sourceRecord = sourceLane?.items.find((item, index) => {
            const itemId = String(
              idProvider ? idProvider(item as R, index) : index
            )
            return itemId === sourceId
          })

          if (!sourceRecord) {
            console.error(
              `Source record with id ${sourceId} not found in lane ${fromLaneId}`
            )
            return
          }

          // Find the destiny record and position
          let destinyRecord:
            | { record: R; position: "above" | "below" }
            | undefined

          if (toIndex !== null) {
            const destinyLane = laneItems.find((lane) => lane.id === toLaneId)
            if (destinyLane && destinyLane.items.length > 0) {
              if (toIndex === 0) {
                // Moving to the top
                destinyRecord = {
                  record: destinyLane.items[0] as R,
                  position: "above",
                }
              } else if (toIndex >= destinyLane.items.length) {
                // Moving to the bottom
                destinyRecord = {
                  record: destinyLane.items[destinyLane.items.length - 1] as R,
                  position: "below",
                }
              } else {
                // Moving between items
                destinyRecord = {
                  record: destinyLane.items[toIndex] as R,
                  position: "above",
                }
              }
            }
          }

          // If no destiny record found, we're moving to an empty lane or to the end
          if (!destinyRecord) {
            const destinyLane = laneItems.find((lane) => lane.id === toLaneId)
            if (destinyLane && destinyLane.items.length > 0) {
              // Moving to the end of a non-empty lane
              destinyRecord = {
                record: destinyLane.items[destinyLane.items.length - 1] as R,
                position: "below",
              }
            } else {
              // Moving to an empty lane - use the source record as reference
              destinyRecord = {
                record: sourceRecord as R,
                position: "below",
              }
            }
          }

          await onMove(fromLaneId, toLaneId, sourceRecord as R, destinyRecord)
        }
      : undefined,
  }

  /**
   * Selection
   */

  const lanesDef = useMemo(() => {
    return lanes.map((lane) => ({
      id: lane.id,
      data: lanesHooks[lane.id]?.data || {
        type: "flat",
        records: [],
        groups: [],
      },
      paginationInfo: lanesHooks[lane.id]?.paginationInfo || null,
    }))
  }, [lanes, lanesHooks])

  const { lanesSelectProvider, lanesUseSelectable } = useSelectableLanes<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(lanesDef, source, (selectItemsStatus, clearCallback) => {
    onSelectItems?.(selectItemsStatus, clearCallback)
  })

  return (
    <>
      {lanesProvider}
      {lanesSelectProvider}
      {!onMove ? (
        <Kanban<R> {...kanbanProps} />
      ) : (
        <DndProvider driver={createAtlaskitDriver(instanceId)}>
          <Kanban<R> {...kanbanProps} />
        </DndProvider>
      )}
    </>
  )
}
