import { UniqueIdentifier } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export interface SortableBlockProps {
  id: UniqueIdentifier
  children: React.ReactNode
}

export const SortableBlock = ({ id, children }: SortableBlockProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    flex: "1 1",
    display: "flex",
    flexDirection: "column" as const,
  }

  console.log(style)

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}
