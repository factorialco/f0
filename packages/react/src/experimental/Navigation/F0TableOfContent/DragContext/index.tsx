import { createContext, ReactNode, useContext, useState } from "react"

interface DragContextType {
  isDragging: boolean
  setIsDragging: (isDragging: boolean) => void
  draggedItemId: string | null
  setDraggedItemId: (id: string | null) => void
}

const DragContext = createContext<DragContextType | undefined>(undefined)

export function DragProvider({ children }: { children: ReactNode }) {
  const [isDragging, setIsDragging] = useState(false)
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null)
  return (
    <DragContext.Provider value={{ isDragging, setIsDragging, draggedItemId, setDraggedItemId }}>
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
