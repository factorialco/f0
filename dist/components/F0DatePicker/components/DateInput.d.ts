import { GranularityDefinition, NavigationGranularityKey } from '../../OneCalendar';
import { DateStringFormat } from '../../OneCalendar/granularities/types';
import { InputFieldProps } from '../../F0InputField';
import { DatePickerValue } from '../types';
declare const DateInput: import('react').ForwardRefExoticComponent<{
    value: DatePickerValue | undefined;
    className?: string;
    onDateChange?: (date: DatePickerValue | undefined) => void;
    onClick?: () => void;
    granularity: GranularityDefinition & {
        key: NavigationGranularityKey;
    };
    onOpenChange?: (open: boolean) => void;
    onClear?: () => void;
    minDate?: Date;
    maxDate?: Date;
    showIcon?: boolean;
    displayFormat?: DateStringFormat;
} & Pick<InputFieldProps<string>, "label" | "className" | "size" | "transparent" | "status" | "loading" | "disabled" | "placeholder" | "required" | "error" | "hideLabel" | "hint" | "labelIcon" | "readonly" | "clearable"> & import('react').RefAttributes<HTMLInputElement>>;
export { DateInput };
