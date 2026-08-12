import { type CSSProperties, ReactNode } from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { cn } from "@/lib/utils"

/** What the sortable state hands to the widget being rendered. */
export interface SortableWidgetState {
  isDragging: boolean
}

export interface SortableWidgetProps {
  id: string
  /** A locked widget can neither be picked up nor displaced by another. */
  disabled?: boolean
  children: (state: SortableWidgetState) => ReactNode
}

/**
 * One draggable widget in an editable column. THE WHOLE CARD IS THE HANDLE and
 * there is no handle glyph: dragging is always available (no edit mode to enter
 * first), so a permanent grip icon on every widget would be chrome the user
 * never asked for. The grab cursor is the affordance; `WidgetContainer`'s sensor
 * is what keeps a press on a row or a button from becoming a drag.
 *
 * The card the pointer carries is NOT this one: while dragging, this in-list
 * card turns invisible (still holding its slot for the shuffle) and a clone
 * follows the pointer in `WidgetContainer`'s DragOverlay, whose dropAnimation
 * owns the settle. Hiding rather than dimming: two copies of the same card is
 * noise, and the overlay one is the real thing visually.
 *
 * A `disabled` (locked) widget is neither draggable nor a drop target, so a
 * pinned widget can't be picked up OR pushed out of its place.
 */
export const SortableWidget = ({
  id,
  disabled = false,
  children,
}: SortableWidgetProps) => {
  const { listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id, disabled })

  const style: CSSProperties = {
    // VERTICAL ONLY: a column is one dimension, so the neighbours' shuffles
    // ignore any horizontal component. dnd-kit reports both axes; dropping x
    // here is the same thing `restrictToVerticalAxis` does, without taking on
    // @dnd-kit/modifiers for it.
    transform: CSS.Translate.toString(transform && { ...transform, x: 0 }),
    transition: transition ?? undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        !disabled && "cursor-grab active:cursor-grabbing",
        // The overlay clone is the visible card while this one is dragged;
        // this stays in the flow (invisible, not display-none) so the other
        // widgets shuffle around a real gap.
        isDragging && "invisible"
      )}
      // dnd-kit's `attributes` are deliberately NOT spread: they make the whole
      // card `role="button"` + focusable, which nests the widget's own links
      // and buttons inside an interactive element (an axe `nested-interactive`
      // violation) — and only a PointerSensor is wired, so they bought no
      // keyboard support anyway. Keyboard reordering wants a KeyboardSensor
      // with the Widget's handle as its activator; until then the card is a
      // pointer-only drag surface.
      {...(disabled ? {} : listeners)}
    >
      {children({ isDragging })}
    </div>
  )
}
