import React, { createContext, useContext, useState } from "react"

interface DragContextType {
  isDragging: boolean
  setIsDragging: (isDragging: boolean) => void
  draggedItemId: string | null
  setDraggedItemId: (id: string | null) => void
}

const DragContext = createContext<DragContextType | undefined>(undefined)

export function DragProvider({ children }: { children: React.ReactNode }) {
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
    return {
      isDragging: false,
      setIsDragging: () => {},
      draggedItemId: null,
      setDraggedItemId: () => {},
    }
  }

  return context
}
