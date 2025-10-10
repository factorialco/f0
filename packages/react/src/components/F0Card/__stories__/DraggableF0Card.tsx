import { useDraggable } from "@/lib/dnd/hooks"
import { DragConfig } from "@/ui/Kanban/components/KanbanCard"
import { useRef } from "react"
import { F0Card } from "../F0Card"

export function DraggableF0Card<T = unknown>({
  drag,
  ...props
}: { drag: DragConfig<T> } & React.ComponentProps<typeof F0Card>) {
  const ref = useRef<HTMLDivElement | null>(null)

  useDraggable<T>({
    ref: ref as React.RefObject<HTMLElement>,
    payload: { kind: drag.type ?? "f0-card", id: drag.id, data: drag.data },
  })

  return <F0Card ref={ref} {...props} />
}
