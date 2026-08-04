import { type CSSProperties, ReactNode } from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { cn } from "@/lib/utils"

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
    // VERTICAL ONLY: a column is one dimension, so the card follows the pointer
    // up and down and ignores its horizontal travel. dnd-kit reports both axes;
    // dropping x here is the same thing `restrictToVerticalAxis` does, without
    // taking on @dnd-kit/modifiers for it.
    transform: CSS.Translate.toString(transform && { ...transform, x: 0 }),
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
      // The WHOLE card is the drag surface — the handle beside the title is the
      // affordance that says so, not the only place you can grab.
      //
      // While dragging, a SOLID backdrop sits behind the card: `Card`'s own
      // background is translucent, so lifted over the page (and over whatever it
      // passes) it would otherwise show the content beneath through it.
      className={cn(
        !disabled && "cursor-grab active:cursor-grabbing",
        isDragging && "rounded-xl bg-f1-background"
      )}
      {...(disabled ? {} : attributes)}
      {...(disabled ? {} : listeners)}
    >
      {children({ draggable: !disabled, isDragging })}
    </div>
  )
}
