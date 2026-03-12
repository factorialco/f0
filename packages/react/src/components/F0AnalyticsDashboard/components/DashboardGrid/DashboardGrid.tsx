import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  MeasuringStrategy,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable"
import { LayoutGroup, motion } from "motion/react"
import { useCallback, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import type { DropdownItem as DropdownItemType } from "@/experimental/Navigation/Dropdown"

import { Delete, Minus, Plus } from "@/icons/app"
import { cn } from "@/lib/utils"

import type {
  DashboardItem as DashboardItemType,
  DashboardItemLayout,
} from "../../types"

import { ChartItem } from "../ChartItem/ChartItem"
import { CollectionItem } from "../CollectionItem/CollectionItem"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { MetricItem } from "../MetricItem/MetricItem"

const colSpanClasses: Record<1 | 2 | 3, string> = {
  1: "@3xl:col-span-1",
  2: "@3xl:col-span-2",
  3: "@3xl:col-span-3",
}

const CHART_ASPECT_RATIO = 1
const CHART_ASPECT_RATIO_MOBILE = 3 / 2
const CHART_ASPECT_RATIO_FULL = 0.75
const GRID_GAP = 16
const GRID_COLS = 3

interface DashboardGridProps<Filters extends FiltersDefinition> {
  items: DashboardItemType<Filters>[]
  filters: FiltersState<Filters>
  editMode?: boolean
  onLayoutChange?: (layout: DashboardItemLayout[]) => void
}

/**
 * Responsive CSS grid: single column on mobile, 3 columns on md+.
 *
 * When `editMode` is true, items are always draggable and each gets a
 * dropdown menu with Make larger / Make smaller / Delete actions.
 *
 * Instead of transform-based sorting (which breaks with multi-column items),
 * this uses DOM reordering during drag combined with Framer Motion layout
 * animations for smooth, iOS-like repositioning of all grid items.
 */
export function DashboardGrid<Filters extends FiltersDefinition>({
  items,
  filters,
  editMode,
  onLayoutChange,
}: DashboardGridProps<Filters>) {
  const observerRef = useRef<ResizeObserver | null>(null)
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const [colSpanOverrides, setColSpanOverrides] = useState<
    Record<string, 1 | 2 | 3>
  >({})

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  )

  const [orderOverride, setOrderOverride] = useState<string[] | null>(null)
  const orderBeforeDragRef = useRef<string[] | null>(null)

  const getEffectiveSpan = (item: DashboardItemType<Filters>): 1 | 2 | 3 =>
    colSpanOverrides[item.id] ?? item.colSpan ?? 1

  const emitLayout = useCallback(
    (
      orderedItems: DashboardItemType<Filters>[],
      spans: Record<string, 1 | 2 | 3>
    ) => {
      onLayoutChange?.(
        orderedItems.map((item) => ({
          id: item.id,
          colSpan: spans[item.id] ?? item.colSpan ?? 1,
        }))
      )
    },
    [onLayoutChange]
  )

  const displayedItems =
    orderOverride !== null
      ? orderOverride
          .map((id) => items.find((i) => i.id === id))
          .filter((i): i is DashboardItemType<Filters> => i !== undefined)
      : items

  const gridRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
    if (!node) return

    const updateHeight = () => {
      const gridWidth = node.clientWidth
      const isMd = gridWidth >= 768
      const columnWidth = isMd
        ? (gridWidth - GRID_GAP * (GRID_COLS - 1)) / GRID_COLS
        : gridWidth
      const aspectRatio = isMd ? CHART_ASPECT_RATIO : CHART_ASPECT_RATIO_MOBILE
      const aspectRatioFull = isMd
        ? CHART_ASPECT_RATIO_FULL
        : CHART_ASPECT_RATIO_MOBILE
      node.style.setProperty(
        "--chart-row-height",
        `${Math.round(columnWidth / aspectRatio)}px`
      )
      node.style.setProperty(
        "--chart-row-height-full",
        `${Math.round(columnWidth / aspectRatioFull)}px`
      )
    }

    updateHeight()
    observerRef.current = new ResizeObserver(updateHeight)
    observerRef.current.observe(node)
  }, [])

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
    orderBeforeDragRef.current = orderOverride
  }

  // Reorder items in real-time as the dragged item moves over others.
  // This triggers a DOM reorder; Framer Motion layout handles the animation.
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    setOrderOverride((current) => {
      const currentOrder = current ?? items.map((i) => i.id)
      const oldIndex = currentOrder.indexOf(String(active.id))
      const newIndex = currentOrder.indexOf(String(over.id))
      if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex)
        return current
      return arrayMove([...currentOrder], oldIndex, newIndex)
    })
  }

  const handleDragEnd = (_event: DragEndEvent) => {
    setActiveId(null)
    // Only emit if order actually changed during drag
    if (orderOverride !== orderBeforeDragRef.current) {
      emitLayout(displayedItems, colSpanOverrides)
    }
  }

  const handleDragCancel = () => {
    setActiveId(null)
    setOrderOverride(orderBeforeDragRef.current)
  }

  const handleDelete = (itemId: string) => {
    const remaining = displayedItems.filter((i) => i.id !== itemId)
    setOrderOverride(remaining.map((i) => i.id))
    emitLayout(remaining, colSpanOverrides)
  }

  const handleMakeLarger = (itemId: string) => {
    const current = getEffectiveSpan(
      displayedItems.find((i) => i.id === itemId)!
    )
    if (current >= 3) return
    const newSpans = {
      ...colSpanOverrides,
      [itemId]: (current + 1) as 1 | 2 | 3,
    }
    setColSpanOverrides(newSpans)
    emitLayout(displayedItems, newSpans)
  }

  const handleMakeSmaller = (itemId: string) => {
    const current = getEffectiveSpan(
      displayedItems.find((i) => i.id === itemId)!
    )
    if (current <= 1) return
    const newSpans = {
      ...colSpanOverrides,
      [itemId]: (current - 1) as 1 | 2 | 3,
    }
    setColSpanOverrides(newSpans)
    emitLayout(displayedItems, newSpans)
  }

  const buildActions = (
    item: DashboardItemType<Filters>
  ): DropdownItemType[] | undefined => {
    if (!editMode || !onLayoutChange) return undefined

    const span = getEffectiveSpan(item)
    const actions: DropdownItemType[] = []

    if (span < 3) {
      actions.push({
        label: "Make larger",
        icon: Plus,
        onClick: () => handleMakeLarger(item.id),
      })
    }

    if (span > 1) {
      actions.push({
        label: "Make smaller",
        icon: Minus,
        onClick: () => handleMakeSmaller(item.id),
      })
    }

    actions.push(
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        critical: true,
        onClick: () => handleDelete(item.id),
      }
    )

    return actions
  }

  const activeItem = activeId
    ? displayedItems.find((item) => item.id === activeId)
    : null

  const renderCell = (item: DashboardItemType<Filters>) => {
    const span = getEffectiveSpan(item)
    const isChart = item.type === "chart"
    const heightVar =
      span === 3 ? "var(--chart-row-height-full)" : "var(--chart-row-height)"
    const actions = buildActions(item)

    if (editMode) {
      return (
        <SortableGridCell
          key={item.id}
          id={item.id}
          className={cn(colSpanClasses[span])}
          style={isChart ? { height: heightVar } : undefined}
        >
          <DashboardGridItem item={item} filters={filters} actions={actions} />
        </SortableGridCell>
      )
    }

    return (
      <div
        key={item.id}
        className={cn(colSpanClasses[span])}
        style={isChart ? { height: heightVar } : undefined}
      >
        <DashboardGridItem item={item} filters={filters} actions={actions} />
      </div>
    )
  }

  const grid = (
    <div className="grid grid-cols-1 gap-4 @3xl:grid-cols-3">
      {displayedItems.map(renderCell)}
    </div>
  )

  if (editMode) {
    return (
      <div ref={gridRef} className="@container">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          measuring={{
            droppable: {
              strategy: MeasuringStrategy.Always,
            },
          }}
        >
          <SortableContext items={displayedItems.map((i) => i.id)}>
            <LayoutGroup>
              <div className="grid grid-cols-1 gap-4 @3xl:grid-cols-3">
                {displayedItems.map(renderCell)}
              </div>
            </LayoutGroup>
          </SortableContext>
          <DragOverlay
            dropAnimation={{
              duration: 250,
              easing: "cubic-bezier(0.2, 0, 0, 1)",
            }}
          >
            {activeItem ? (
              <div className="rounded-lg border border-solid border-f1-border bg-f1-background shadow-xl">
                <DashboardGridItem item={activeItem} filters={filters} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    )
  }

  return (
    <div ref={gridRef} className="@container">
      {grid}
    </div>
  )
}

/**
 * Sortable grid cell that uses Framer Motion layout animations
 * instead of dnd-kit's transform-based positioning.
 *
 * This approach works correctly with CSS Grid and variable-width items
 * (different colSpans). Items physically reorder in the DOM during drag,
 * and `layout="position"` animates only the position change with a spring.
 */
function SortableGridCell({
  id,
  className,
  style,
  children,
}: {
  id: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id })

  return (
    <motion.div
      ref={setNodeRef}
      layout="position"
      className={cn(
        className,
        "cursor-grab active:cursor-grabbing",
        isDragging && "opacity-0"
      )}
      style={style}
      transition={{
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      }}
      {...attributes}
      {...listeners}
    >
      {children}
    </motion.div>
  )
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
