import { FC } from 'react';
import { CalendarEventProps } from '../CalendarEvent';
export interface CalendarEventListProps {
    events: CalendarEventProps[];
    /**
     * The space between events, in px. Applies to BOTH paths — the overflow list
     * and `showAllItems` — so a list that stops overflowing keeps its rhythm.
     */
    gap?: number;
    showAllItems?: boolean;
    minSize?: number;
}
export declare const CalendarEventList: FC<CalendarEventListProps>;
