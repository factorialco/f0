import { CalendarMode, DateRange } from '../../types';
interface QuarterViewProps {
    mode: CalendarMode;
    selected: Date | DateRange | null;
    onSelect?: (date: Date | DateRange) => void;
    year: number;
    motionDirection?: number;
    minDate?: Date;
    maxDate?: Date;
}
export declare const QuarterView: ({ mode, selected, onSelect, year, motionDirection, minDate, maxDate, }: QuarterViewProps) => import("react").JSX.Element;
export {};
