import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { DraggableF0Card } from "./DraggableF0Card"

export function DraggableStoryCard({
  id,
  title,
  description,
  index,
}: {
  id: string
  title: string
  description?: string
  index: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [overEdge, setOverEdge] = useState<"top" | "bottom" | null>(null)

  useEffect(() => {
    if (!ref.current) return
    return dropTargetForElements({
      element: ref.current,
      getData: ({ input, element }) =>
        attachClosestEdge(
          { type: "list-card-target", id, index },
          {
            input,
            element,
            allowedEdges: ["top", "bottom"],
          }
        ),
      onDragEnter: ({ self, source }) => {
        if (source?.data?.id === id) {
          setOverEdge(null)
          return
        }
        const edge = extractClosestEdge(self.data)
        setOverEdge(edge === "top" || edge === "bottom" ? edge : null)
      },
      onDrag: ({ self, source }) => {
        if (source?.data?.id === id) {
          setOverEdge(null)
          return
        }
        const edge = extractClosestEdge(self.data)
        setOverEdge(edge === "top" || edge === "bottom" ? edge : null)
      },
      onDragLeave: () => setOverEdge(null),
      onDrop: () => setOverEdge(null),
    })
  }, [id, index])

  return (
    <div ref={ref} className="relative w-full py-2">
      {overEdge === "top" && (
        <div className="absolute inset-x-0 top-0 z-10 mt-[-2px] h-[4px] bg-f1-border-hover" />
      )}
      <DraggableF0Card title={title} description={description} drag={{ id, type: "list-card" }} />
      {overEdge === "bottom" && (
        <div className="absolute inset-x-0 bottom-0 z-10 mb-[-2px] h-[4px] bg-f1-border-hover" />
      )}
    </div>
  )
}
