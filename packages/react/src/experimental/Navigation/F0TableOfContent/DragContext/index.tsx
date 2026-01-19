import { createContext, ReactNode, useContext, useState } from "react"

interface DragContextType {
  isDragging: boolean
  setIsDragging: (isDragging: boolean) => void
  draggedItemId: string | null
  setDraggedItemId: (id: string | null) => void
  dragOverItemId: string | null
  setDragOverItemId: (id: string | null) => void
  dragOverPosition: "before" | "after" | "inside" | null
  setDragOverPosition: (position: "before" | "after" | "inside" | null) => void
}

const DragContext = createContext<DragContextType | undefined>(undefined)

export function DragProvider({ children }: { children: ReactNode }) {
  const [isDragging, setIsDragging] = useState(false)
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null)
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null)
  const [dragOverPosition, setDragOverPosition] = useState<
    "before" | "after" | "inside" | null
  >(null)
  return (
    <DragContext.Provider
      value={{
        isDragging,
        setIsDragging,
        draggedItemId,
        setDraggedItemId,
        dragOverItemId,
        setDragOverItemId,
        dragOverPosition,
        setDragOverPosition,
      }}
    >
      {children}
    </DragContext.Provider>
  )
}

export function useDragContext() {
  const context = useContext(DragContext)
  if (!context) {
    throw new Error("useDragContext must be used within a DragProvider")
  }
  return context
}
