import { DateRange, DateRangeComplete, GranularityDefinition } from '../../../components/OneCalendar';
import { DatePickerValue } from '../types';
type DateNavigatorTriggerProps = {
    value: DatePickerValue | undefined;
    compareToValue?: DateRangeComplete | DateRangeComplete[];
    disabled?: boolean;
    error?: boolean;
    className?: string;
    highlighted?: boolean;
    onDateChange?: (date: DateRange) => void;
    onClick?: () => void;
    navigation?: boolean;
    granularity?: GranularityDefinition;
    minDate?: Date;
    maxDate?: Date;
    hideGoToCurrent?: boolean;
};
declare const DateNavigatorTrigger: import('react').ForwardRefExoticComponent<DateNavigatorTriggerProps & import('react').RefAttributes<HTMLDivElement>>;
export { DateNavigatorTrigger as DatePickerTrigger };
