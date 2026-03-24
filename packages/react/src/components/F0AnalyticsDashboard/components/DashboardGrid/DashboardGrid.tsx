import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import type { DropdownItem as DropdownItemType } from "@/experimental/Navigation/Dropdown"

import { F0Button } from "@/components/F0Button"
import {
  F0GridStack,
  type GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"
import { Minus } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type {
  DashboardItem as DashboardItemType,
  DashboardItemLayout,
} from "../../types"

import { ChartItem } from "../ChartItem/ChartItem"
import { CollectionItem } from "../CollectionItem/CollectionItem"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { MetricItem } from "../MetricItem/MetricItem"

const GRID_GAP = 6
const GRID_COLS = 12

const CELL_HEIGHT = 48

/** Container width below which items are forced to full-width (1 per row). */
const NARROW_THRESHOLD = 640

interface DashboardGridProps<Filters extends FiltersDefinition> {
  items: DashboardItemType<Filters>[]
  filters: FiltersState<Filters>
  editMode?: boolean
  onLayoutChange?: (layout: DashboardItemLayout[]) => void
}

/**
 * Dashboard grid powered by GridStack via F0GridStack.
 *
 * When `editMode` is true, items are draggable and resizable with a delete button.
 * When false, items are locked in place.
 *
 * When the container is narrower than NARROW_THRESHOLD, all items are forced to
 * 12 columns (one per row) regardless of their configured colSpan.
 */
export function DashboardGrid<Filters extends FiltersDefinition>({
  items,
  filters,
  editMode,
  onLayoutChange,
}: DashboardGridProps<Filters>) {
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set())
  const [positionSyncKey, setPositionSyncKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isNarrow, setIsNarrow] = useState(false)

  // Measure container width to decide single-column layout
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIsNarrow(entry.contentRect.width < NARROW_THRESHOLD)
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Reset deleted items and force position sync when exiting edit mode
  const prevEditModeRef = useRef(editMode)
  useEffect(() => {
    if (prevEditModeRef.current && !editMode) {
      setDeletedIds(new Set())
      setPositionSyncKey((k) => k + 1)
    }
    prevEditModeRef.current = editMode
  }, [editMode])

  // Force position sync when switching between narrow/wide
  const prevIsNarrowRef = useRef(isNarrow)
  useEffect(() => {
    if (prevIsNarrowRef.current !== isNarrow) {
      setPositionSyncKey((k) => k + 1)
    }
    prevIsNarrowRef.current = isNarrow
  }, [isNarrow])

  const getEffectiveSpan = (item: DashboardItemType<Filters>): number => {
    if (isNarrow) return 12
    if (item.colSpan) return item.colSpan
    if (item.type === "metric") return 3
    if (item.type === "collection") return 12
    return 6
  }

  const getEffectiveRowSpan = (item: DashboardItemType<Filters>): number => {
    if (item.rowSpan) return item.rowSpan
    if (item.type === "chart") return 7
    if (item.type === "metric") return 3
    return 10
  }

  const handleDelete = useCallback(
    (itemId: string) => {
      setDeletedIds((prev) => new Set(prev).add(itemId))
      const remaining = items.filter((i) => i.id !== itemId)
      const remainingPacked = packItems(
        remaining,
        getEffectiveSpan,
        getEffectiveRowSpan
      )
      onLayoutChange?.(
        remaining.map((item, i) => ({
          id: item.id,
          colSpan: getEffectiveSpan(item),
          rowSpan: getEffectiveRowSpan(item),
          x: remainingPacked[i].x,
          y: remainingPacked[i].y,
        }))
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, onLayoutChange, isNarrow]
  )

  const handleChange = useCallback(
    (widgets: GridStackReactWidget[]) => {
      const sorted = [...widgets].sort(
        (a, b) => (a.y ?? 0) - (b.y ?? 0) || (a.x ?? 0) - (b.x ?? 0)
      )
      onLayoutChange?.(
        sorted.map((w) => ({
          id: w.id,
          colSpan: Math.max(1, Math.min(12, w.w ?? 1)),
          rowSpan: Math.max(1, Math.min(10, w.h ?? 1)),
          x: w.x ?? 0,
          y: w.y ?? 0,
        }))
      )
    },
    [onLayoutChange]
  )

  const visibleItems = items.filter((i) => !deletedIds.has(i.id))
  const packed = packItems(visibleItems, getEffectiveSpan, getEffectiveRowSpan)

  const allowedSizes: { w: number; h: number }[] = []
  for (let w = 1; w <= 12; w++) {
    for (let h = 1; h <= 10; h++) {
      allowedSizes.push({ w, h })
    }
  }
  const { t } = useI18n()

  const widgets: GridStackReactWidget[] = visibleItems.map((item, i) => ({
    id: item.id,
    w: getEffectiveSpan(item),
    h: getEffectiveRowSpan(item),
    // In narrow mode, always use packed positions (ignore saved x/y)
    x: isNarrow ? packed[i].x : (item.x ?? packed[i].x),
    y: isNarrow ? packed[i].y : (item.y ?? packed[i].y),
    allowedSizes,
    content: (
      <div className="relative h-full">
        {editMode && (
          <div
            className="absolute -left-2 -top-2 z-20"
            role="presentation"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <F0Button
              variant="outline"
              hideLabel
              icon={Minus}
              label={t("actions.delete")}
              onClick={() => handleDelete(item.id)}
              size="sm"
            />
          </div>
        )}
        <DashboardGridItem item={item} filters={filters} />
      </div>
    ),
  }))

  const gridOptions = useMemo(
    () => ({
      column: GRID_COLS,
      cellHeight: CELL_HEIGHT,
      cellHeightThrottle: 100,
      margin: GRID_GAP,
      float: false,
      animate: true,
    }),
    []
  )

  return (
    <div ref={containerRef}>
      <F0GridStack
        options={gridOptions}
        static={!editMode || isNarrow}
        widgets={widgets}
        onChange={editMode && !isNarrow ? handleChange : undefined}
        forcePositionSync={positionSyncKey}
      />
    </div>
  )
}

/**
 * Greedy left-to-right, top-to-bottom bin-packing to compute initial
 * (x, y) positions for each item, preserving array order.
 */
function packItems<T>(
  items: T[],
  getColSpan: (item: T) => number,
  getRowSpan: (item: T) => number
): { x: number; y: number }[] {
  const heights = new Array(GRID_COLS).fill(0) as number[]

  return items.map((item) => {
    const w = getColSpan(item)
    const h = getRowSpan(item)

    let bestX = 0
    let bestY = Infinity

    for (let x = 0; x <= GRID_COLS - w; x++) {
      const maxH = Math.max(...heights.slice(x, x + w))
      if (maxH < bestY) {
        bestY = maxH
        bestX = x
      }
    }

    for (let c = bestX; c < bestX + w; c++) {
      heights[c] = bestY + h
    }

    return { x: bestX, y: bestY }
  })
}

function DashboardGridItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
}: {
  item: DashboardItemType<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItemType[]
}) {
  switch (item.type) {
    case "chart":
      return <ChartItem item={item} filters={filters} actions={actions} />
    case "metric":
      return <MetricItem item={item} filters={filters} actions={actions} />
    case "collection":
      return <CollectionItem item={item} filters={filters} actions={actions} />
    default: {
      const unknownItem = item as DashboardItemType<Filters>
      return (
        <DashboardItem
          title={unknownItem.title ?? "Unknown"}
          isLoading={false}
          error={
            new Error(
              `Unknown dashboard item type: "${(unknownItem as { type: string }).type}"`
            )
          }
        >
          {null}
        </DashboardItem>
      )
    }
  }
}
