import { CalendarMode, CalendarView, DateRange } from '../../../../components/OneCalendar/types';
import { FilterTypeComponentProps } from '../types';
export type DateFilterOptions = {
    minDate?: Date;
    maxDate?: Date;
    mode?: CalendarMode;
    defaultSelected?: Date | DateRange | null;
    view?: CalendarView;
};
export type DateFilterComponentProps = FilterTypeComponentProps<Date | DateRange | undefined, DateFilterOptions> & {
    isCompactMode?: boolean;
};
/**
 * A date filter component that provides date picker.
 */
export declare function DateFilter({ value, onChange, schema, isCompactMode, }: DateFilterComponentProps): import("react").JSX.Element;
