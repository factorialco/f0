import { CalendarMode, DateRange } from '../../types';
interface YearViewProps {
    mode: CalendarMode;
    selected?: Date | DateRange | null;
    onSelect?: (date: Date | DateRange | null) => void;
    decade: number;
    motionDirection?: number;
    minDate?: Date;
    maxDate?: Date;
}
export declare function YearView({ mode, selected, onSelect, decade, motionDirection, minDate, maxDate, }: YearViewProps): import("react").JSX.Element;
export {};
