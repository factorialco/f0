import { CalendarMode, DateRange } from '../../types';
export declare const getHalfYearFromMonth: (month: number) => number;
export declare const getHalfYearRange: (halfYear: number, year: number) => DateRange;
interface HalfYearViewProps {
    mode: CalendarMode;
    selected: Date | DateRange | null;
    onSelect: (date: Date | DateRange) => void;
    year: number;
    motionDirection?: number;
    minDate?: Date;
    maxDate?: Date;
}
export declare const HalfYearView: ({ mode, selected, onSelect, year, minDate, maxDate, motionDirection, }: HalfYearViewProps) => import("react").JSX.Element;
export {};
