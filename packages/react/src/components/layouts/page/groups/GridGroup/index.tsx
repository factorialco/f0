import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable"
import { useDeepCompareEffect } from "@reactuses/core"
import { useState } from "react"
import { SortableBlock } from "./components/SortableBlock"

interface SortableBlockItem {
  id: string
  render: React.ReactNode
}

export interface GridGroupProps {
  blocks: SortableBlockItem[]
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

export const GridGroup = ({
  blocks,
  sortable: _sortable = false,
  onSort: _onSort = () => {},
}: GridGroupProps) => {
  const [items, setItems] = useState<SortableBlockItem[]>([])

  useDeepCompareEffect(() => {
    setItems(
      blocks.map((block, index) => ({
        id: block.id ?? index.toString(),
        render: block.render,
      }))
    )
  }, [blocks])

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    console.log(over)
    setActiveId(null)

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((block) => block.id === active.id)
        const newIndex = items.findIndex((block) => block.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="flex flex-wrap items-stretch gap-4">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items}>
          {items.map((block) => (
            <SortableBlock key={block.id} id={block.id}>
              {block.render}
            </SortableBlock>
          ))}
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <SortableBlock id={activeId}>
              {items.find((block) => block.id === activeId)?.render}
            </SortableBlock>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
