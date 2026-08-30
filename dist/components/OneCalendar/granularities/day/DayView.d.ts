import { CalendarMode, DateRange, WeekStartsOn } from '../../types';
interface DayViewProps {
    mode: CalendarMode;
    selected?: Date | DateRange | null;
    onSelect?: (date: Date | DateRange | null) => void;
    month: Date;
    onMonthChange?: (month: Date) => void;
    motionDirection?: number;
    minDate?: Date;
    maxDate?: Date;
    compact?: boolean;
    weekStartsOn?: WeekStartsOn;
}
export declare function DayView({ mode, selected, onSelect, month, onMonthChange, motionDirection, minDate, maxDate, compact, weekStartsOn, }: DayViewProps): import("react").JSX.Element;
export {};
