import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import { useMemo, useState } from "react"
import { SortableBlock } from "./components/SortableBlock"

export interface GridGroupProps {
  blocks: {
    id?: string
    render: React.ReactNode
  }[]
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

export const GridGroup = ({
  blocks,
  sortable = false,
  onSort = () => {},
}: GridGroupProps) => {
  const localBlocks = useMemo(() => {
    return blocks.map((block, index) => ({
      id: index.toString(),
      ...block,
    }))
  }, [blocks])

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = () => {
    setActiveId(null)
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={localBlocks.map((block) => block.id)}>
          {localBlocks.map((block) => (
            <SortableBlock key={block.id} id={block.id}>
              {block.render}
            </SortableBlock>
          ))}
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <SortableBlock id={activeId}>
              {localBlocks.find((block) => block.id === activeId)?.render}
            </SortableBlock>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
