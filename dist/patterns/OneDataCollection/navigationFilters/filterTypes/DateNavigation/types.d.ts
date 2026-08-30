import { DateRange, DateRangeComplete } from '../../../../../components/OneCalendar';
import { DatePeriodsDefinition, NavigationGranularityKey } from '../../../../../components/OneCalendar/granularities/index';
import { DatePreset } from '../../../../../ui/DatePickerPopup';
import { NavigationFilterComponentProps, NavigationFilterDefinitionBase } from '../../types';
export type DateNavigationOptions = {
    granularity?: NavigationGranularityKey[] | NavigationGranularityKey;
    defaultGranularity?: NavigationGranularityKey;
    min?: Date;
    max?: Date;
    presets?: DatePreset[];
    hideGoToCurrent?: boolean;
    /**
     * Consumer-defined ranges (payroll cycles, academic terms…) navigable as an
     * extra entry in the granularity selector, named by its `label`.
     */
    periods?: DatePeriodsDefinition;
};
export type DateNavigatorFilterDefinition = NavigationFilterDefinitionBase<Date | DateRange | DateValue> & {
    type: "date-navigator";
} & DateNavigationOptions;
export type DateValue = {
    value: DateRangeComplete;
    valueString: string;
    granularity: NavigationGranularityKey;
};
export type DateNavigationProps = NavigationFilterComponentProps<DateValue>;
