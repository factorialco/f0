import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { DropdownItem as DropdownItemType } from "@/experimental/Navigation/Dropdown"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

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

  // Sync rows when externally-owned item layout changes.
  const prevItemLayoutSignatureRef = useRef(buildItemLayoutSignature(items))
  useEffect(() => {
    const newLayoutSignature = buildItemLayoutSignature(items)
    if (newLayoutSignature !== prevItemLayoutSignatureRef.current) {
      prevItemLayoutSignatureRef.current = newLayoutSignature
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

  /**
   * Auto-grow: when an item's loaded content genuinely needs more vertical
   * space than its row provides (`requiredHeight` > 0, reported by `RowItem`
   * only on real overflow), grow that row to fit. The row height is only ever
   * raised here — never lowered — so the user's manual resize stays intact.
   * Measuring the flex-stretched wrapper itself would always return the
   * current row height and turn the resize handle into a grow-only ratchet.
   */
  const handleItemContentHeightChange = useCallback(
    (itemId: string, requiredHeight: number) => {
      if (requiredHeight <= 0) return
      const needed = Math.ceil(requiredHeight)

      setRows((prev) => {
        const rowIdx = prev.findIndex((row) => row.ids.includes(itemId))
        if (rowIdx === -1 || prev[rowIdx].height >= needed) return prev

        const next = [...prev]
        next[rowIdx] = { ...next[rowIdx], height: needed }
        return next
      })
    },
    []
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

  // Refs let the document-level pointer handlers read the latest layout
  // without being re-bound mid-drag (and dodge stale-closure reorders).
  const rowsRef = useRef(rows)
  rowsRef.current = rows
  const itemMapRef = useRef(itemMap)
  itemMapRef.current = itemMap
  const dragIdRef = useRef<string | null>(null)
  const dropTargetRef = useRef<typeof dropTarget>(null)
  dropTargetRef.current = dropTarget
  const ghostRef = useRef<HTMLDivElement | null>(null)

  const commitDrop = useCallback(
    (draggedId: string, target: NonNullable<typeof dropTarget>) => {
      setRows((prev) => {
        let next = prev.map((row) => ({
          ...row,
          ids: row.ids.filter((rowItemId) => rowItemId !== draggedId),
        }))

        const item = itemMapRef.current.get(draggedId)
        const newRowHeight = item ? resolveItemHeight(item) : DEFAULT_ROW_HEIGHT

        if (target.type === "new-row") {
          next.splice(target.afterRowIdx + 1, 0, {
            ids: [draggedId],
            height: newRowHeight,
          })
        } else if (target.rowIdx >= next.length) {
          next.push({ ids: [draggedId], height: newRowHeight })
        } else {
          const adjPos = Math.min(
            target.position,
            next[target.rowIdx].ids.length
          )
          next[target.rowIdx].ids.splice(adjPos, 0, draggedId)
          const minHeight = getMinRowHeight(
            next[target.rowIdx],
            itemMapRef.current
          )
          if (next[target.rowIdx].height < minHeight) {
            next[target.rowIdx] = { ...next[target.rowIdx], height: minHeight }
          }
        }

        next = next.filter((row) => row.ids.length > 0)
        emitLayout(next)
        return next
      })
    },
    [emitLayout]
  )

  // Resolve the drop target geometrically from the cursor position instead
  // of relying on native `dragover` hitting a specific element. Top third of
  // a row → insert above it, bottom third → below, middle → merge into it
  // (side by side) when there's room. Every widget is now reorderable by
  // dragging over any other — no thin between-row strip to hit, and it works
  // over a chart canvas or a full-width row all the same.
  const resolveDropTarget = useCallback(
    (clientX: number, clientY: number): typeof dropTarget => {
      const rowEls = containerRef.current
        ? Array.from(
            containerRef.current.querySelectorAll<HTMLElement>(
              "[data-dashboard-row]"
            )
          )
        : []
      const cur = rowsRef.current
      if (rowEls.length === 0 || rowEls.length !== cur.length) return null

      const rects = rowEls.map((el) => el.getBoundingClientRect())
      // Nearest row band, splitting the gap between rows at its midpoint.
      let i = rects.length - 1
      for (let k = 0; k < rects.length - 1; k++) {
        if (clientY < (rects[k].bottom + rects[k + 1].top) / 2) {
          i = k
          break
        }
      }

      const rect = rects[i]
      const row = cur[i]
      const draggedId = dragIdRef.current
      const isFromThisRow = draggedId ? row.ids.includes(draggedId) : false
      const third = rect.height / 3

      if (clientY < rect.top + third)
        return { type: "new-row", afterRowIdx: i - 1 }
      if (clientY > rect.bottom - third)
        return { type: "new-row", afterRowIdx: i }

      // Middle third → merge into the row.
      if (isFromThisRow && row.ids.length === 1) return null
      if (row.ids.length >= MAX_PER_ROW && !isFromThisRow)
        return { type: "new-row", afterRowIdx: i }

      const cards = rowEls[i].querySelectorAll("[data-card-id]")
      let position = row.ids.length
      for (let c = 0; c < cards.length; c++) {
        const cr = cards[c].getBoundingClientRect()
        if (clientX < cr.left + cr.width / 2) {
          position = c
          break
        }
      }
      return { type: "into-row", rowIdx: i, position }
    },
    []
  )

  const handleGripPointerDown = useCallback(
    (id: string, e: React.PointerEvent) => {
      // Only the primary (left) button drags. `typeof` guard: in real
      // browsers `button` is always a number (0 for left), but keep going
      // when it's absent so the gesture isn't wrongly suppressed.
      if (typeof e.button === "number" && e.button !== 0) return
      e.preventDefault()
      e.stopPropagation()

      dragIdRef.current = id
      dropTargetRef.current = null
      setDragId(id)
      setDropTarget(null)

      const move = (ev: PointerEvent) => {
        const ghost = ghostRef.current
        if (ghost) {
          ghost.style.transform = `translate(${ev.clientX + 12}px, ${ev.clientY + 16}px)`
        }
        const next = resolveDropTarget(ev.clientX, ev.clientY)
        if (JSON.stringify(next) !== JSON.stringify(dropTargetRef.current)) {
          dropTargetRef.current = next
          setDropTarget(next)
        }
      }
      const up = () => {
        document.removeEventListener("pointermove", move)
        document.removeEventListener("pointerup", up)
        const draggedId = dragIdRef.current
        const target = dropTargetRef.current
        if (draggedId && target) commitDrop(draggedId, target)
        dragIdRef.current = null
        dropTargetRef.current = null
        setDragId(null)
        setDropTarget(null)
      }
      document.addEventListener("pointermove", move)
      document.addEventListener("pointerup", up)
    },
    [commitDrop, resolveDropTarget]
  )

  // ─── Row resize ─────────────────────────────────────────────
  const startResize = useCallback(
    (
      rowIdx: number,
      startY: number,
      startHeight: number,
      contentMinHeight: number
    ) => {
      const minHeight = Math.max(
        getMinRowHeight(rows[rowIdx], itemMap),
        contentMinHeight
      )
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
    [rows, emitLayout, itemMap]
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
        // Collections (tables) render their full page of rows — if the row
        // box is shorter than that content, the overflow would paint over the
        // next row. `overflow-y: clip` makes that structurally impossible no
        // matter what height was persisted or measured (auto-grow normally
        // resizes the row first; the clip is the guarantee for when it
        // can't). A CSS intrinsic floor (`min-height: fit-content`) does NOT
        // work here: the card's inner `flex-1` (basis-0) chains contribute
        // zero intrinsic height. Scoped to collection rows; chart canvases
        // and metrics never overflow their row.
        const hasCollection = row.ids.some(
          (id) => itemMap.get(id)?.type === "collection"
        )

        return (
          <div key={ri} className="relative">
            {/* Drop line before this row. The first row also gets one so an
                item can be reordered to the very top (afterRowIdx -1). */}
            {canDrag && <RowGapDropZone active={!!isNewRowTarget(ri - 1)} />}
            <div
              data-dashboard-row=""
              className={cn(
                "flex rounded-lg transition-colors duration-200",
                isDropRow && "bg-f1-background-hover"
              )}
              style={{
                gap: GAP,
                height: row.height,
                // `visible` x-overflow keeps the floating drag handle
                // (offset past the row's left edge) from being cut off —
                // `clip`, unlike `hidden`, allows the combination.
                ...(hasCollection
                  ? {
                      overflowY: "clip" as const,
                      overflowX: "visible" as const,
                    }
                  : {}),
              }}
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
                    onGripPointerDown={handleGripPointerDown}
                    onContentHeightChange={handleItemContentHeightChange}
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
                  const rowEl =
                    e.currentTarget.parentElement?.querySelector<HTMLElement>(
                      "[data-dashboard-row]"
                    )
                  // Start from the RENDERED height, not `row.height` state:
                  // the fit-content floor can hold the row taller than state
                  // (e.g. a persisted height smaller than the loaded table),
                  // and starting from the smaller state value would make the
                  // handle feel detached from the cursor.
                  const renderedHeight = Math.max(
                    rowEl?.getBoundingClientRect().height ?? 0,
                    row.height
                  )
                  // Charts are excluded from content measurement: their
                  // canvas is sized FROM the row, so measuring them reads
                  // back the current height and would make the row
                  // unshrinkable.
                  const measurableCardIds = new Set(
                    row.ids.filter((id) => itemMap.get(id)?.type !== "chart")
                  )
                  startResize(
                    ri,
                    e.clientY,
                    renderedHeight,
                    getRowContentMinHeight(rowEl, measurableCardIds)
                  )
                }}
              >
                <div className="h-1 w-16 rounded-full bg-transparent transition-colors group-hover/resize:bg-f1-foreground-tertiary" />
              </div>
            )}
          </div>
        )
      })}

      {/* Drop line after the last row — reorder to the very bottom */}
      {canDrag && (
        <RowGapDropZone active={!!isNewRowTarget(displayRows.length - 1)} />
      )}

      {/* Floating ghost that tracks the cursor during a pointer drag. Its
          position is written imperatively in the pointermove handler so the
          grid doesn't re-render on every mouse move. */}
      {dragId && (
        <div
          ref={ghostRef}
          className="pointer-events-none fixed left-0 top-0 z-50 max-w-xs truncate rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm font-medium text-f1-foreground shadow-lg"
          style={{ transform: "translate(-9999px, -9999px)" }}
        >
          {itemMap.get(dragId)?.title ?? ""}
        </div>
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
  onGripPointerDown,
  onContentHeightChange,
  children,
}: {
  id: string
  isDragging: boolean
  showIndicatorBefore: boolean
  showIndicatorAfter: boolean
  draggable: boolean
  onGripPointerDown: (id: string, e: React.PointerEvent) => void
  onContentHeightChange: (id: string, height: number) => void
  children: React.ReactNode
}) {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = itemRef.current
    if (!el) return

    // Deliberately NOT rAF-scheduled: rAF never fires in hidden/background
    // tabs, and a re-rendering parent can re-run this effect (cancelling the
    // pending frame) faster than rAF fires — both starve the measurement
    // entirely and let a too-short row keep its overflowing table. A
    // microtask always drains, in every tab state, on every commit.
    let disposed = false
    let queued = false

    const measure = () => {
      queued = false
      if (disposed) return
      // Report only genuine overflow: the wrapper is flex-stretched to the
      // row height, so its own height always equals the row's — a useless
      // (and ratcheting) signal. `scrollHeight` exceeds `clientHeight` only
      // when content truly needs more space; report 0 otherwise so the grid
      // leaves the user-controlled row height alone.
      const requiredHeight =
        el.scrollHeight > el.clientHeight + 1 ? el.scrollHeight : 0
      onContentHeightChange(id, requiredHeight)
    }

    const scheduleMeasure = () => {
      if (queued) return
      queued = true
      queueMicrotask(measure)
    }

    measure()

    const resizeObserver = new ResizeObserver(scheduleMeasure)
    resizeObserver.observe(el)

    // `attributes: true` matters: nested collections re-layout themselves
    // asynchronously after a container resize by writing style attributes.
    // That can push content into overflow without changing the wrapper's
    // size (no ResizeObserver event) and without adding/removing nodes (no
    // childList event) — attribute mutations are the only visible signal.
    const mutationObserver = new MutationObserver(scheduleMeasure)
    mutationObserver.observe(el, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    })

    return () => {
      disposed = true
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [id, onContentHeightChange])

  return (
    <>
      {showIndicatorBefore && <DropIndicator />}
      <div
        ref={itemRef}
        data-card-id={id}
        className={cn(
          "group/rowitem relative min-w-0 flex-1 transition-opacity duration-150",
          isDragging && "opacity-40 scale-[0.97]"
        )}
      >
        {canDrag && (
          // Pointer-based drag (not native HTML5 DnD): a `pointerdown` on the
          // grip starts a document-tracked gesture. Native drag was unusable
          // here — its ghost never tracked the cursor over a chart canvas, and
          // arming depended on the grip sitting inside the draggable card's
          // box, so the grip's outer half and full-width charts never dragged.
          // `touch-none` stops touch scrolling from stealing the gesture.
          <div
            onPointerDown={(e) => onGripPointerDown(id, e)}
            className="shadow-sm absolute -left-3 top-2.5 z-20 flex cursor-grab touch-none items-center justify-center rounded bg-f1-background p-2 opacity-0 transition-opacity hover:bg-f1-background-hover active:cursor-grabbing group-hover/rowitem:opacity-100"
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

/**
 * Purely-visual drop line between rows. The pointer-drag resolves its target
 * geometrically from the cursor, so this no longer needs to be a hit target —
 * it only renders the highlighted line at the active boundary. It reserves a
 * little height while active so the line has room to show between rows.
 */
function RowGapDropZone({ active }: { active: boolean }) {
  return (
    <div
      className="pointer-events-none relative flex items-center justify-center transition-all"
      style={{ minHeight: active ? 12 : 0 }}
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

function buildItemLayoutSignature<Filters extends FiltersDefinition>(
  items: DashboardItemType<Filters>[]
): string {
  return JSON.stringify(
    items.map((item) => [
      item.id,
      item.type,
      item.itemHeight ?? null,
      item.rowSpan ?? null,
      item.x ?? null,
      item.y ?? null,
      item.colSpan ?? null,
    ])
  )
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

/**
 * Minimum height the row's content requires, measured from the live DOM at
 * resize start. Only the given cards are measured — callers pass every
 * non-chart card: collection/metric content has an intrinsic height (rows of
 * data, text) that must stay fully visible, while a chart canvas is sized
 * FROM the row, so measuring it would read back the current row height and
 * re-create the grow-only ratchet this replaced.
 *
 * The row is momentarily collapsed (height/min-height 0) so each card's
 * `scrollHeight` reports pure content height instead of the flex-stretched
 * wrapper height. Content height can itself depend on the container height
 * (horizontal scrollbars appear, toolbars wrap), so a second pass re-reads
 * at the height found by the first pass and keeps the larger value. Styles
 * are restored synchronously in the same task, so nothing paints in between.
 */
function getRowContentMinHeight(
  rowEl: HTMLElement | null | undefined,
  measurableCardIds: ReadonlySet<string>
): number {
  if (!rowEl || measurableCardIds.size === 0) return 0
  const prevHeight = rowEl.style.height
  const prevMinHeight = rowEl.style.minHeight

  const measure = () => {
    let min = 0
    for (const card of Array.from(
      rowEl.querySelectorAll<HTMLElement>("[data-card-id]")
    )) {
      const id = card.dataset.cardId
      if (id && measurableCardIds.has(id)) {
        min = Math.max(min, card.scrollHeight)
      }
    }
    return min
  }

  rowEl.style.minHeight = "0px"
  rowEl.style.height = "0px"
  const collapsed = measure()
  rowEl.style.height = `${collapsed}px`
  const settled = Math.max(collapsed, measure())

  rowEl.style.height = prevHeight
  rowEl.style.minHeight = prevMinHeight
  return settled
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
