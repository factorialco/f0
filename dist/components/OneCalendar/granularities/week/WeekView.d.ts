import { DateRange, WeekStartsOn } from '../../types';
interface WeekViewProps {
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
export declare function WeekView({ selected, onSelect, month, onMonthChange, motionDirection, minDate, maxDate, compact, weekStartsOn, }: WeekViewProps): import("react").JSX.Element;
export {};
