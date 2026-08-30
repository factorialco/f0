import { DatePeriodsDefinition, GranularityDefinitionKey, NavigationGranularityKey } from '../../components/OneCalendar/granularities';
import { DateRangeComplete, WeekStartsOn } from '../../components/OneCalendar/types';
import { DatePickerValue, DatePreset } from './types';
export type CompareToDefKey = string;
export type CompareToDef = {
    label: string;
    value: {
        delta: number;
        units: GranularityDefinitionKey;
    } | ((value: DateRangeComplete) => DateRangeComplete | DateRangeComplete[]);
};
export type DatePickerCompareTo = Partial<Record<NavigationGranularityKey, CompareToDef[]>>;
export interface DatePickerPopupProps {
    onSelect?: (value: DatePickerValue | undefined) => void;
    value?: DatePickerValue;
    defaultValue?: DatePickerValue;
    presets?: DatePreset[];
    granularities?: NavigationGranularityKey[];
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    hideGoToCurrent?: boolean;
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    compareTo?: DatePickerCompareTo;
    defaultCompareTo?: CompareToDefKey;
    hideCalendarInput?: boolean;
    asChild?: boolean;
    onCompareToChange?: (compareTo: DateRangeComplete | DateRangeComplete[] | undefined) => void;
    weekStartsOn?: WeekStartsOn;
    /** When true, switching granularity only changes the view; selection and close happen only on a cell click. Default false. */
    selectOnCellOnly?: boolean;
    /**
     * Consumer-defined ranges (payroll cycles, academic terms…) offered as an
     * extra entry in the granularity selector. Its `label` names that entry.
     */
    periods?: DatePeriodsDefinition;
}
export declare function DatePickerPopup({ onSelect, defaultValue, presets, granularities, children, compareTo, defaultCompareTo, onCompareToChange, hideCalendarInput, value, asChild, weekStartsOn, selectOnCellOnly, periods, ...props }: DatePickerPopupProps): import("react").JSX.Element;
