import { Modifier } from '@dnd-kit/core';
/**
 * THE CARD ONLY EVER GOES UP AND DOWN. A widget belongs to its column — there is
 * no dragging one from the rail into the main area — so the horizontal half of
 * the pointer's travel has nothing it could mean: it would offer a move that
 * cannot happen, and drift the card out from under the column it is reordering.
 *
 * dnd-kit reports both axes and the DragOverlay follows both; dropping x here is
 * what `restrictToVerticalAxis` does, without taking on `@dnd-kit/modifiers` for
 * one line. The in-list cards drop x for the same reason (see `SortableWidget`),
 * which is the shuffle; this is the card under the pointer.
 */
export declare const verticalOnly: Modifier;
