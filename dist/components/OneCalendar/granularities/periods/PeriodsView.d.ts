import { DateRange } from '../../types';
import { DatePeriod } from './types';
interface PeriodsViewProps {
    periods: DatePeriod[];
    header?: string;
    year: number;
    motionDirection?: number;
    selected?: Date | DateRange | null;
    onSelect?: (date: DateRange) => void;
    minDate?: Date;
    maxDate?: Date;
    compact?: boolean;
}
export declare function PeriodsView({ periods, header, year, motionDirection, selected, onSelect, minDate, maxDate, compact, }: PeriodsViewProps): import("react").JSX.Element;
export {};
