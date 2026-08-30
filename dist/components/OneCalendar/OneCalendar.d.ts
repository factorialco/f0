import { DatePeriodsDefinition, GranularityDefinition, NavigationGranularityKey, GranularityDefinitionSimple } from './granularities/index';
import { CalendarMode, CalendarView, DateRange, WeekStartsOn } from './types';
declare const privateProps: readonly ["compact"];
interface OneCalendarInternalProps {
    mode: CalendarMode;
    view: CalendarView;
    onSelect?: (date: Date | DateRange | null) => void;
    defaultMonth?: Date;
    defaultSelected?: Date | DateRange | null;
    showNavigation?: boolean;
    showInput?: boolean;
    minDate?: Date;
    maxDate?: Date;
    compact?: boolean;
    weekStartsOn?: WeekStartsOn;
    /** When true, a granularity change updates the view without emitting `onSelect`. Default false. */
    selectOnCellOnly?: boolean;
    /** Consumer-defined ranges rendered by the `periods` view. */
    periods?: DatePeriodsDefinition;
}
export type OneCalendarProps = Omit<OneCalendarInternalProps, (typeof privateProps)[number]>;
export declare const getGranularitySimpleDefinition: (granularityKey: NavigationGranularityKey) => GranularityDefinitionSimple;
export declare const getGranularityDefinition: (granularityKey: NavigationGranularityKey) => GranularityDefinition;
declare const OneCalendarInternal: ({ mode, view, onSelect, defaultMonth, defaultSelected, showNavigation, showInput, minDate, maxDate, compact, weekStartsOn, selectOnCellOnly, periods, }: OneCalendarInternalProps) => import("react").JSX.Element;
export declare const OneCalendar: import('../../lib/data-testid').WithDataTestIdReturnType<{
    (props: OneCalendarProps): import("react").JSX.Element;
    displayName: string;
}>;
export { OneCalendarInternal, type OneCalendarInternalProps };
