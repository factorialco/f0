import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type DragEvent,
} from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { DropdownItem as DropdownItemType } from "@/experimental/Navigation/Dropdown"

import { F0Icon } from "@/components/F0Icon"
import Handle from "@/icons/app/Handle"
import { cn } from "@/lib/utils"

import type {
  DashboardItem as DashboardItemType,
  DashboardItemLayout,
} from "../../types"

import { ChartItem } from "../ChartItem/ChartItem"
import { CollectionItem } from "../CollectionItem/CollectionItem"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { MetricItem } from "../MetricItem/MetricItem"

const GAP = 12
const MAX_PER_ROW = 4
const NARROW_THRESHOLD = 640

/** Default row height in px, determined by the tallest item type. */
const ROW_HEIGHTS: Record<string, number> = {
  chart: 336,
  metric: 144,
  collection: 480,
}
const DEFAULT_ROW_HEIGHT = 336

/** Minimum heights per item type to ensure content is always readable. */
const MIN_ROW_HEIGHTS: Record<string, number> = {
  chart: 240,
  metric: 120,
  collection: 300,
}
const DEFAULT_MIN_ROW_HEIGHT = 120

// ─── Types ──────────────────────────────────────────────────────

type Row = {
  ids: string[]
  height: number
}

interface DashboardGridProps<Filters extends FiltersDefinition> {
  items: DashboardItemType<Filters>[]
  filters: FiltersState<Filters>
  editMode?: boolean
  onLayoutChange?: (layout: DashboardItemLayout[]) => void
  /** Incrementing counter that forces the grid to reset rows to initial layout. */
  resetKey?: number
  /** Called when a chart item's type is changed */
  onTransformChart?: (
    itemId: string,
    newType: string,
    orientation?: "vertical" | "horizontal"
  ) => void
  /**
   * Notifies the parent when the grid enters/exits a "fill height" mode —
   * triggered by click-to-fullscreen on a multi-item dashboard. The parent
   * (`F0AnalyticsDashboard`) uses this to switch its root layout to the same
   * `flex-1 h-full` chain that single-item dashboards use, so the fullscreen
   * item fills the remaining viewport without producing scroll.
   */
  onFullscreenChange?: (isFullscreen: boolean) => void
}

// ─── Component ──────────────────────────────────────────────────

/**
 * Flex-row dashboard grid with drag-and-drop reordering and row resize.
 *
 * All items in a row share equal width (`flex: 1`).
 * In edit mode, items can be dragged between rows (max MAX_PER_ROW per row)
 * and rows can be vertically resized via a bottom handle.
 */
export function DashboardGrid<Filters extends FiltersDefinition>({
  items,
  filters,
  editMode,
  onLayoutChange,
  resetKey,
  onTransformChart,
  onFullscreenChange,
}: DashboardGridProps<Filters>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isNarrow, setIsNarrow] = useState(false)
  const [fullscreenItemId, setFullscreenItemId] = useState<string | null>(null)

  // Notify the parent whenever click-fullscreen state flips so it can apply
  // the fill-height layout (same chain that single-item dashboards use).
  useEffect(() => {
    onFullscreenChange?.(!!fullscreenItemId)
  }, [fullscreenItemId, onFullscreenChange])

  // Build item lookup
  const itemMap = useMemo(() => {
    const map = new Map<string, DashboardItemType<Filters>>()
    for (const item of items) map.set(item.id, item)
    return map
  }, [items])

  // ─── Rows state ─────────────────────────────────────────────
  const [rows, setRows] = useState<Row[]>(() => buildInitialRows(items))

  // Sync rows when items change from outside
  const prevItemIdsRef = useRef(items.map((i) => i.id).join(","))
  useEffect(() => {
    const newIds = items.map((i) => i.id).join(",")
    if (newIds !== prevItemIdsRef.current) {
      prevItemIdsRef.current = newIds
      setRows(buildInitialRows(items))
    }
  }, [items])

  // Reset rows to initial layout when resetKey changes (discard)
  const prevResetKeyRef = useRef(resetKey)
  useEffect(() => {
    if (resetKey !== undefined && resetKey !== prevResetKeyRef.current) {
      prevResetKeyRef.current = resetKey
      setRows(buildInitialRows(items))
    }
  }, [resetKey, items])

  // ─── Narrow detection ───────────────────────────────────────
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

  // Exit fullscreen if the item is no longer in the grid (deleted, filtered, etc.)
  useEffect(() => {
    if (fullscreenItemId && !itemMap.has(fullscreenItemId)) {
      setFullscreenItemId(null)
    }
  }, [fullscreenItemId, itemMap])

  // ─── Emit layout changes ────────────────────────────────────
  const emitLayout = useCallback(
    (newRows: Row[]) => {
      if (!onLayoutChange) return
      const layout: DashboardItemLayout[] = []
      let y = 0
      for (const row of newRows) {
        const colSpan = Math.floor(12 / Math.max(1, row.ids.length))
        const rowSpan = Math.round(row.height / 48)
        // `itemHeight` carries the pixel-accurate row height so consumers
        // can persist a real px value (resize handle is pixel-precise);
        // `rowSpan` stays as a rounded fallback for legacy consumers.
        const itemHeight = row.height
        let x = 0
        for (const id of row.ids) {
          layout.push({ id, colSpan, rowSpan, itemHeight, x, y })
          x += colSpan
        }
        y += rowSpan
      }
      onLayoutChange(layout)
    },
    [onLayoutChange]
  )

  // ─── Delete ─────────────────────────────────────────────────
  const handleDelete = useCallback(
    (itemId: string) => {
      setRows((prev) => {
        const next = prev
          .map((row) => ({
            ...row,
            ids: row.ids.filter((id) => id !== itemId),
          }))
          .filter((row) => row.ids.length > 0)
        emitLayout(next)
        return next
      })
    },
    [emitLayout]
  )

  // ─── DnD state ──────────────────────────────────────────────
  const [dragId, setDragId] = useState<string | null>(null)
  const [dropTarget, setDropTarget] = useState<
    | { type: "into-row"; rowIdx: number; position: number }
    | { type: "new-row"; afterRowIdx: number }
    | null
  >(null)

  const handleDragStart = useCallback((id: string) => {
    setDragId(id)
  }, [])

  const handleDragEnd = useCallback(() => {
    if (dragId && dropTarget) {
      setRows((prev) => {
        // Remove from source
        let next = prev.map((row) => ({
          ...row,
          ids: row.ids.filter((id) => id !== dragId),
        }))

        const item = itemMap.get(dragId)
        const newRowHeight = item ? resolveItemHeight(item) : DEFAULT_ROW_HEIGHT

        if (dropTarget.type === "new-row") {
          // Insert a new row after afterRowIdx
          const insertAt = dropTarget.afterRowIdx + 1
          next.splice(insertAt, 0, {
            ids: [dragId],
            height: newRowHeight,
          })
        } else if (dropTarget.rowIdx >= next.length) {
          // Drop at the very end
          next.push({ ids: [dragId], height: newRowHeight })
        } else {
          // Insert into existing row
          const adjPos = Math.min(
            dropTarget.position,
            next[dropTarget.rowIdx].ids.length
          )
          next[dropTarget.rowIdx].ids.splice(adjPos, 0, dragId)

          // Expand row height if the new item needs more space
          const minHeight = getMinRowHeight(next[dropTarget.rowIdx], itemMap)
          if (next[dropTarget.rowIdx].height < minHeight) {
            next[dropTarget.rowIdx] = {
              ...next[dropTarget.rowIdx],
              height: minHeight,
            }
          }
        }

        // Remove empty rows
        next = next.filter((row) => row.ids.length > 0)
        emitLayout(next)
        return next
      })
    }

    setDragId(null)
    setDropTarget(null)
  }, [dragId, dropTarget, emitLayout, itemMap])

  const handleRowDragOver = useCallback(
    (e: DragEvent, rowIdx: number) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = "move"

      if (rowIdx >= rows.length) {
        setDropTarget({ type: "new-row", afterRowIdx: rows.length - 1 })
        return
      }

      const row = rows[rowIdx]
      const isFromThisRow = dragId ? row.ids.includes(dragId) : false
      if (row.ids.length >= MAX_PER_ROW && !isFromThisRow) return

      // If dragging the only item in this row over itself, don't set
      // a drop target here — let the gap drop zones handle it instead.
      if (isFromThisRow && row.ids.length === 1) {
        setDropTarget(null)
        return
      }

      // Find insert position based on mouse x
      const rowEl = e.currentTarget as HTMLElement
      const cards = rowEl.querySelectorAll("[data-card-id]")
      let insertPos = row.ids.length
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect()
        if (e.clientX < rect.left + rect.width / 2) {
          insertPos = i
          break
        }
      }

      setDropTarget({ type: "into-row", rowIdx, position: insertPos })
    },
    [rows, dragId]
  )

  /** Handle drag over the gap between rows — creates a new row */
  const handleGapDragOver = useCallback((e: DragEvent, afterRowIdx: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDropTarget({ type: "new-row", afterRowIdx })
  }, [])

  // ─── Row resize ─────────────────────────────────────────────
  const startResize = useCallback(
    (rowIdx: number, startY: number) => {
      const startHeight = rows[rowIdx].height
      const minHeight = getMinRowHeight(rows[rowIdx], itemMap)
      const onMove = (e: MouseEvent) => {
        const newHeight = Math.max(minHeight, startHeight + e.clientY - startY)
        setRows((prev) =>
          prev.map((row, i) =>
            i === rowIdx ? { ...row, height: newHeight } : row
          )
        )
      }
      const onUp = () => {
        document.removeEventListener("mousemove", onMove)
        document.removeEventListener("mouseup", onUp)
        setRows((prev) => {
          emitLayout(prev)
          return prev
        })
      }
      document.addEventListener("mousemove", onMove)
      document.addEventListener("mouseup", onUp)
    },
    [rows, emitLayout]
  )

  // ─── Render ─────────────────────────────────────────────────
  const displayRows = isNarrow
    ? rows.flatMap((row) =>
        row.ids.map((id) => ({
          ids: [id],
          height: row.height,
        }))
      )
    : rows

  const canDrag = !!editMode && !isNarrow
  const isNewRowTarget = (afterIdx: number) =>
    dragId &&
    dropTarget?.type === "new-row" &&
    dropTarget.afterRowIdx === afterIdx

  // ─── Single-item dashboard — auto-fullscreen, no collapse ───────
  // When the dashboard has exactly one item (e.g. the `tables` skill's
  // single-collection output), skip grid layout entirely and render that
  // item at full width. The container relies on the parent flex chain
  // (`F0AnalyticsDashboard` → grid wrapper → here) to provide the available
  // height — `h-full` then fills exactly that, so there's no scroll. We
  // deliberately DO NOT forward an `onFullscreenChange` handler so
  // DashboardItem hides its maximize button (`hasFullscreen` gates on the
  // callback being defined) — there is nothing to maximize or collapse to
  // when only one item exists.
  if (items.length === 1) {
    const soleItem = items[0]
    return (
      <div ref={containerRef} className="flex h-full min-h-0 flex-col">
        <DashboardGridItem
          item={soleItem}
          filters={filters}
          editMode={editMode}
          onDelete={handleDelete}
          onTransformChart={onTransformChart}
          isFullscreen
        />
      </div>
    )
  }

  // ─── Fullscreen mode — single item fills the grid ────────
  // Same fill-height layout as the single-item case: relies on the parent
  // flex chain (`F0AnalyticsDashboard` reacts to `onFullscreenChange`) so the
  // item fills the remaining viewport without pushing extra layout below.
  if (fullscreenItemId) {
    const fullscreenItem = itemMap.get(fullscreenItemId)
    if (fullscreenItem) {
      return (
        <div ref={containerRef} className="flex h-full min-h-0 flex-col">
          <DashboardGridItem
            item={fullscreenItem}
            filters={filters}
            editMode={editMode}
            onDelete={handleDelete}
            onTransformChart={onTransformChart}
            isFullscreen
            onFullscreenChange={(fs) =>
              setFullscreenItemId(fs ? fullscreenItemId : null)
            }
          />
        </div>
      )
    }
    // Item not found — the cleanup effect will exit fullscreen on the next cycle
    return null
  }

  return (
    <div ref={containerRef} className="flex flex-col" style={{ gap: GAP }}>
      {displayRows.map((row, ri) => {
        const isDropRow =
          dragId && dropTarget?.type === "into-row" && dropTarget.rowIdx === ri

        return (
          <div key={ri} className="relative">
            {/* Gap drop zone BEFORE this row (between rows) */}
            {canDrag && ri > 0 && (
              <RowGapDropZone
                active={!!isNewRowTarget(ri - 1)}
                isDragging={!!dragId}
                onDragOver={(e) => handleGapDragOver(e, ri - 1)}
              />
            )}
            <div
              className={cn(
                "flex rounded-lg transition-colors duration-200",
                isDropRow && "bg-f1-background-hover"
              )}
              style={{ gap: GAP, height: row.height }}
              onDragOver={canDrag ? (e) => handleRowDragOver(e, ri) : undefined}
              onDrop={canDrag ? () => {} : undefined}
            >
              {row.ids.map((id, ci) => {
                const item = itemMap.get(id)
                if (!item) return null
                const isDragging = dragId === id
                const showIndicatorBefore =
                  isDropRow &&
                  dropTarget?.type === "into-row" &&
                  dropTarget.position === ci
                const showIndicatorAfter =
                  isDropRow &&
                  dropTarget?.type === "into-row" &&
                  dropTarget.position === row.ids.length &&
                  ci === row.ids.length - 1

                return (
                  <RowItem
                    key={id}
                    id={id}
                    isDragging={isDragging}
                    showIndicatorBefore={!!showIndicatorBefore}
                    showIndicatorAfter={!!showIndicatorAfter}
                    draggable={canDrag}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  >
                    <DashboardGridItem
                      item={item}
                      filters={filters}
                      editMode={editMode}
                      onDelete={handleDelete}
                      onTransformChart={onTransformChart}
                      onFullscreenChange={(fs) =>
                        setFullscreenItemId(fs ? id : null)
                      }
                    />
                  </RowItem>
                )
              })}
            </div>
            {/* Row resize handle — only in edit mode */}
            {canDrag && (
              <div
                className="group/resize absolute -bottom-3.5 mx-auto flex h-3 w-full items-center justify-center hover:cursor-ns-resize"
                onMouseDown={(e) => {
                  e.preventDefault()
                  startResize(ri, e.clientY)
                }}
              >
                <div className="h-1 w-16 rounded-full bg-transparent transition-colors group-hover/resize:bg-f1-foreground-tertiary" />
              </div>
            )}
          </div>
        )
      })}

      {/* Drop zone after last row — creates a new row at the end */}
      {canDrag && (
        <RowGapDropZone
          active={!!isNewRowTarget(displayRows.length - 1)}
          isDragging={!!dragId}
          onDragOver={(e) => handleGapDragOver(e, displayRows.length - 1)}
        />
      )}
    </div>
  )
}

// ─── RowItem ────────────────────────────────────────────────────

function RowItem({
  id,
  isDragging,
  showIndicatorBefore,
  showIndicatorAfter,
  draggable: canDrag,
  onDragStart,
  onDragEnd,
  children,
}: {
  id: string
  isDragging: boolean
  showIndicatorBefore: boolean
  showIndicatorAfter: boolean
  draggable: boolean
  onDragStart: (id: string) => void
  onDragEnd: () => void
  children: React.ReactNode
}) {
  // Track whether the drag started from the handle. If not, cancel it.
  const fromHandleRef = useRef(false)

  return (
    <>
      {showIndicatorBefore && <DropIndicator />}
      <div
        data-card-id={id}
        draggable={canDrag}
        onDragStart={
          canDrag
            ? (e) => {
                if (!fromHandleRef.current) {
                  e.preventDefault()
                  return
                }
                e.dataTransfer.effectAllowed = "move"
                e.dataTransfer.setData("text/plain", id)
                onDragStart(id)
              }
            : undefined
        }
        onDragEnd={
          canDrag
            ? () => {
                fromHandleRef.current = false
                onDragEnd()
              }
            : undefined
        }
        className={cn(
          "group/rowitem relative min-w-0 flex-1 transition-opacity duration-150",
          isDragging && "opacity-40 scale-[0.97]"
        )}
      >
        {canDrag && (
          <div
            className="shadow-sm absolute -left-3 top-2.5 z-20 flex cursor-grab items-center justify-center rounded bg-f1-background p-2 opacity-0 transition-opacity hover:bg-f1-background-hover active:cursor-grabbing group-hover/rowitem:opacity-100"
            onMouseDown={() => {
              fromHandleRef.current = true
            }}
            onMouseUp={() => {
              fromHandleRef.current = false
            }}
            aria-label="Drag to reorder"
          >
            <F0Icon icon={Handle} size="xs" />
          </div>
        )}
        {children}
      </div>
      {showIndicatorAfter && <DropIndicator />}
    </>
  )
}

function DropIndicator() {
  return (
    <div className="mx-[-2px] w-1 flex-shrink-0 self-stretch py-2">
      <div className="h-full w-full rounded-full bg-f1-background-secondary-hover" />
    </div>
  )
}

/** Horizontal drop zone between rows — expands when dragging to make it easy to target. */
function RowGapDropZone({
  active,
  isDragging,
  onDragOver,
}: {
  active: boolean
  /** Whether any drag is in progress (expands the hit area) */
  isDragging: boolean
  onDragOver: (e: DragEvent<HTMLDivElement>) => void
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center transition-all",
        isDragging ? "py-4" : ""
      )}
      style={{ minHeight: isDragging ? 32 : 0 }}
      onDragOver={onDragOver}
      onDrop={(e) => e.preventDefault()}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full transition-colors",
          active ? "bg-f1-background-secondary-hover" : "bg-transparent"
        )}
      />
    </div>
  )
}

// ─── Layout helpers ─────────────────────────────────────────────

/**
 * Build initial rows from items.
 *
 * If items have saved `y` coordinates (from a previous edit), groups
 * them by `y` to preserve the saved row structure. Otherwise falls
 * back to greedy packing by slot weight.
 */
function buildInitialRows<Filters extends FiltersDefinition>(
  items: DashboardItemType<Filters>[]
): Row[] {
  // Check if items have saved positions
  const hasSavedPositions = items.some((item) => item.y !== undefined)

  if (hasSavedPositions) {
    return buildRowsFromPositions(items)
  }

  return buildRowsGreedy(items)
}

/** Group items by saved `y` coordinate to reconstruct saved rows. */
function buildRowsFromPositions<Filters extends FiltersDefinition>(
  items: DashboardItemType<Filters>[]
): Row[] {
  // Sort by y then x to ensure correct row grouping
  const sorted = [...items].sort(
    (a, b) => (a.y ?? 0) - (b.y ?? 0) || (a.x ?? 0) - (b.x ?? 0)
  )

  const rowMap = new Map<number, { ids: string[]; maxHeight: number }>()

  for (const item of sorted) {
    const y = item.y ?? 0
    const h = resolveItemHeight(item)

    let entry = rowMap.get(y)
    if (!entry) {
      entry = { ids: [], maxHeight: 0 }
      rowMap.set(y, entry)
    }
    entry.ids.push(item.id)
    if (h > entry.maxHeight) entry.maxHeight = h
  }

  // Convert map to sorted array of rows
  return [...rowMap.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, entry]) => ({ ids: entry.ids, height: entry.maxHeight }))
}

/** Greedy bin-packing for items without saved positions. */
function buildRowsGreedy<Filters extends FiltersDefinition>(
  items: DashboardItemType<Filters>[]
): Row[] {
  const rows: Row[] = []
  let currentIds: string[] = []
  let currentSlots = 0
  let currentMaxHeight = 0

  for (const item of items) {
    const weight = getSlotWeight(item)
    const h = resolveItemHeight(item)

    if (currentSlots + weight > MAX_PER_ROW && currentIds.length > 0) {
      rows.push({ ids: currentIds, height: currentMaxHeight })
      currentIds = []
      currentSlots = 0
      currentMaxHeight = 0
    }

    currentIds.push(item.id)
    currentSlots += weight
    if (h > currentMaxHeight) currentMaxHeight = h
  }
  if (currentIds.length > 0) {
    rows.push({ ids: currentIds, height: currentMaxHeight })
  }

  return rows
}

/** Minimum height for a row based on the item types it contains. */
function getMinRowHeight<Filters extends FiltersDefinition>(
  row: Row,
  itemMap: Map<string, DashboardItemType<Filters>>
): number {
  let min = DEFAULT_MIN_ROW_HEIGHT
  for (const id of row.ids) {
    const item = itemMap.get(id)
    if (!item) continue
    const h = MIN_ROW_HEIGHTS[item.type] ?? DEFAULT_MIN_ROW_HEIGHT
    if (h > min) min = h
  }
  return min
}

function getSlotWeight<Filters extends FiltersDefinition>(
  item: DashboardItemType<Filters>
): number {
  if (item.type === "metric") return 1
  if (item.type === "chart") return 2
  if (item.type === "collection") return MAX_PER_ROW
  return 2
}

/**
 * Resolve an item's height in pixels for grid row sizing.
 *
 * Precedence (highest to lowest):
 *   1. `itemHeight` (canonical, in pixels) — emitted by both the agent
 *      and the resize handle, supports pixel-accurate persistence.
 *   2. `rowSpan * 48` (legacy, in 48-unit increments) — kept so existing
 *      persisted layouts keep rendering at the same size.
 *   3. Type-specific default (`ROW_HEIGHTS[item.type]`).
 */
function resolveItemHeight<Filters extends FiltersDefinition>(
  item: DashboardItemType<Filters>
): number {
  if (item.itemHeight && item.itemHeight > 0) return item.itemHeight
  if (item.rowSpan) return item.rowSpan * 48
  return ROW_HEIGHTS[item.type] ?? DEFAULT_ROW_HEIGHT
}

// ─── Item renderer ──────────────────────────────────────────────

function DashboardGridItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
  editMode,
  onDelete,
  onTransformChart,
  isFullscreen,
  onFullscreenChange,
}: {
  item: DashboardItemType<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItemType[]
  editMode?: boolean
  onDelete?: (id: string) => void
  onTransformChart?: (
    itemId: string,
    newType: string,
    orientation?: "vertical" | "horizontal"
  ) => void
  isFullscreen?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
}) {
  switch (item.type) {
    case "chart":
      return (
        <ChartItem
          item={item}
          filters={filters}
          actions={actions}
          editMode={editMode}
          handleDelete={onDelete}
          onTransformChart={onTransformChart}
          isFullscreen={isFullscreen}
          onFullscreenChange={onFullscreenChange}
        />
      )
    case "metric":
      return (
        <MetricItem
          item={item}
          filters={filters}
          actions={actions}
          editMode={editMode}
          handleDelete={onDelete}
          isFullscreen={isFullscreen}
          onFullscreenChange={onFullscreenChange}
        />
      )
    case "collection":
      return (
        <CollectionItem
          item={item}
          filters={filters}
          actions={actions}
          editMode={editMode}
          handleDelete={onDelete}
          isFullscreen={isFullscreen}
          onFullscreenChange={onFullscreenChange}
        />
      )
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
