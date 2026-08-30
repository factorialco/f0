import { CalendarMode, DateRange } from '../../types';
interface MonthViewProps {
    mode: CalendarMode;
    selected?: Date | DateRange | null;
    onSelect?: (date: Date | DateRange | null) => void;
    year: number;
    motionDirection?: number;
    minDate?: Date;
    maxDate?: Date;
    compact?: boolean;
}
export declare function MonthView({ mode, selected, onSelect, year, motionDirection, minDate, maxDate, compact, }: MonthViewProps): import("react").JSX.Element;
export {};
