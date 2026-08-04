import { type CSSProperties, ReactNode } from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

/** What the sortable state hands to the widget being rendered. */
export interface SortableWidgetState {
  /** Show the widget's own drag handle. False for a locked widget. */
  draggable: boolean
  isDragging: boolean
}

export interface SortableWidgetProps {
  id: string
  /** A locked widget can neither be picked up nor displaced by another. */
  disabled?: boolean
  children: (state: SortableWidgetState) => ReactNode
}

/**
 * One draggable widget in an editable column. It contributes no drag chrome of
 * its own: the f0 `Widget` already draws a handle beside its title when
 * `draggable`, so this reports the sortable state through its render callback
 * and lets the design system own the affordance.
 *
 * dnd-kit's listeners sit on a wrapper rather than on the handle itself — the
 * handle lives inside `Widget`, so the events reach it by bubbling.
 *
 * A `disabled` (locked) widget is neither draggable nor a drop target, so a
 * pinned widget can't be picked up OR pushed out of its place.
 */
export const SortableWidget = ({
  id,
  disabled = false,
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
    // The dragged card rides above its neighbours so the gap it will land in
    // stays readable underneath.
    zIndex: isDragging ? 10 : undefined,
    position: "relative",
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(disabled ? {} : attributes)}
      {...(disabled ? {} : listeners)}
    >
      {children({ draggable: !disabled, isDragging })}
    </div>
  )
}
