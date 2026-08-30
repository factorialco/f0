import { ReactNode } from 'react';
import { TranslationsType } from '../../../lib/providers/i18n';
import { CalendarMode, CalendarView, DateRange, DateRangeComplete, DateRangeString, WeekStartsOn } from '../types';
export type DateNavigationOptions = {
    min?: Date;
    max?: Date;
};
export type PrevNextDateNavigation = {
    prev: DateRange | false;
    next: DateRange | false;
};
export type DateStringFormat = "default" | "long";
export interface GranularityDefinition {
    calendarMode?: CalendarMode;
    calendarView: CalendarView;
    weekStartsOn?: WeekStartsOn;
    selectorLabel?: string;
    hideDateInput?: boolean;
    getViewDateBounds?: () => {
        min?: Date;
        max?: Date;
    } | undefined;
    label: (viewDate: Date, i18n: TranslationsType, locale?: string) => ReactNode;
    toRangeString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat) => DateRangeString;
    toRange: <T extends Date | DateRange | undefined | null>(date: T) => T extends Date | DateRange ? DateRangeComplete : T;
    toString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat, locale?: string) => string;
    toStringMaxWidth: () => number;
    placeholder: () => string;
    fromString: (dateStr: string | DateRangeString, i18n: TranslationsType) => DateRange | null;
    navigateUIView: (viewDate: Date, direction: -1 | 1) => Date;
    navigate: (date: Date, direction: -1 | 1) => Date;
    getViewDateFromDate: (date: Date) => Date;
    render: (renderProps: {
        mode: CalendarMode;
        selected: Date | DateRange | null;
        onSelect: (date: Date | DateRange | null) => void;
        month: Date;
        onMonthChange: (date: Date) => void;
        motionDirection: number;
        minDate?: Date;
        maxDate?: Date;
        setViewDate: (date: Date) => void;
        viewDate: Date;
        compact?: boolean;
        weekStartsOn?: WeekStartsOn;
    }) => ReactNode;
    add: (date: DateRangeComplete, delta: number) => DateRangeComplete;
    getPrevNext(date: DateRange, options: DateNavigationOptions): PrevNextDateNavigation;
}
export type GranularityDefinitionSimple = Pick<GranularityDefinition, "toRangeString" | "toString">;
