import { type CSSProperties, ReactNode } from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { cn } from "@/lib/utils"

/**
 * The drop settle, tuned to feel like SurveyFormBuilder's: that builder
 * reorders with motion's `Reorder` (`layout="position"`), whose default layout
 * spring is underdamped — the card eases into its slot with a slight
 * overshoot over ~400ms. This curve is the CSS approximation of that spring.
 */
const DROP_TRANSITION = "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)"

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
  const { listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id, disabled })

  const style: CSSProperties = {
    // VERTICAL ONLY: a column is one dimension, so the card follows the pointer
    // up and down and ignores its horizontal travel. dnd-kit reports both axes;
    // dropping x here is the same thing `restrictToVerticalAxis` does, without
    // taking on @dnd-kit/modifiers for it.
    transform: CSS.Translate.toString(transform && { ...transform, x: 0 }),
    // dnd-kit only supplies a transition WHILE sorting; on release it is null,
    // so the card would snap to its slot. The spring fallback carries it there
    // (mid-sort shuffles keep dnd-kit's own transition — springing every
    // displacement while dragging would jitter).
    transition: transition ?? DROP_TRANSITION,
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
      // dnd-kit's `attributes` are deliberately NOT spread: they make the whole
      // card `role="button"` + focusable, which nests the widget's own links
      // and buttons inside an interactive element (an axe `nested-interactive`
      // violation) — and only a PointerSensor is wired, so they bought no
      // keyboard support anyway. Keyboard reordering wants a KeyboardSensor
      // with the Widget's handle as its activator; until then the card is a
      // pointer-only drag surface.
      {...(disabled ? {} : listeners)}
    >
      {children({ draggable: !disabled, isDragging })}
    </div>
  )
}
