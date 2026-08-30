import { ReactNode } from 'react';
/** What the sortable state hands to the widget being rendered. */
export interface SortableWidgetState {
    isDragging: boolean;
}
export interface SortableWidgetProps {
    id: string;
    /** A locked widget can neither be picked up nor displaced by another. */
    disabled?: boolean;
    children: (state: SortableWidgetState) => ReactNode;
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
export declare const SortableWidget: ({ id, disabled, children, }: SortableWidgetProps) => import("react").JSX.Element;
