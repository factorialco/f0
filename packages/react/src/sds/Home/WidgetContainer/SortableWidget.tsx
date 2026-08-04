import { type CSSProperties, ReactNode } from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { F0Icon } from "@/components/F0Icon"
import { Sort } from "@/icons/app"
import { cn } from "@/lib/utils"

export interface SortableWidgetProps {
  /** Classes for the drag handle, so it matches the widget header controls. */
  handleClassName?: string
  id: string
  /** A locked widget can neither be picked up nor displaced by another. */
  disabled?: boolean
  children: ReactNode
}

/**
 * One draggable widget in an editable column. The drag surface is a HANDLE in
 * the widget's top-left — styled like its header controls — rather than the
 * whole card: a widget body is full of links, and making all of it draggable
 * would swallow them.
 *
 * A `disabled` (locked) widget is neither draggable nor a drop target, so a
 * pinned widget can't be picked up OR pushed out of its place.
 */
export const SortableWidget = ({
  id,
  disabled = false,
  handleClassName,
  children,
}: SortableWidgetProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled })

  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    // The dragged card rides above its neighbours and dims slightly, so the gap
    // it will land in stays readable underneath.
    zIndex: isDragging ? 10 : undefined,
    opacity: isDragging ? 0.85 : undefined,
    position: "relative",
  }

  return (
    <div ref={setNodeRef} style={style}>
      {children}
      {disabled ? null : (
        <button
          type="button"
          aria-label="Reorder widget"
          className={cn(handleClassName, "cursor-grab active:cursor-grabbing")}
          {...attributes}
          {...listeners}
        >
          <F0Icon size="sm" icon={Sort} className="text-f1-icon-bold" />
        </button>
      )}
    </div>
  )
}
