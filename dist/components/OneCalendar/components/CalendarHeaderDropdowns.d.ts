/**
 * How many years the year dropdown reaches back (without `minDate`) and
 * forward (without `maxDate`) from the current year. Wide enough to cover
 * any birthday or far-future deadline without rendering an unbounded list;
 * consumers narrow it by setting explicit `minDate`/`maxDate`.
 */
export declare const DEFAULT_YEARS_RANGE = 120;
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
/**
 * Year range for the header dropdowns and arrow navigation. Bounds come from
 * `minDate`/`maxDate` when set, otherwise a wide window centered on the
 * current year so both distant birthdays and far-future dates are reachable.
 *
 * The window bounds NAVIGATION, not selection — selection is limited only by
 * the consumer's `minDate`/`maxDate`. Because a consumer-allowed value can
 * legitimately sit outside the default window (e.g. a very old date with
 * only `maxDate` set), the range always stretches to include `viewYear` so
 * the dropdown can display it.
 */
export declare function getYearBounds(currentYear: number, minDate?: Date, maxDate?: Date, viewYear?: number): {
    fromYear: number;
    toYear: number;
};
/**
 * Descending list of selectable years, spanning `getYearBounds`.
 */
export declare function buildYearOptions(currentYear: number, minDate?: Date, maxDate?: Date, viewYear?: number): SelectOption[];
/**
 * The 12 months for the given year, localized. A month is disabled when it
 * falls entirely outside `minDate`/`maxDate`. The compact calendar uses the
 * "short" format ("Sep", "sept.") so the trigger fits its narrower header at
 * a fixed width across locales.
 */
export declare function buildMonthOptions(year: number, locale: string, minDate?: Date, maxDate?: Date, format?: "long" | "short"): SelectOption[];
interface CalendarHeaderDropdownsProps {
    /** The month/year currently in view (first of the month). */
    viewDate: Date;
    /** Emits the new view date when the user picks a month or year. */
    onViewDateChange: (date: Date) => void;
    /** When false, only the year dropdown is shown (e.g. the month granularity). */
    showMonth: boolean;
    /** Locale used to label the months, matching the granularity `label()`. */
    locale?: string;
    minDate?: Date;
    maxDate?: Date;
    /**
     * Compact calendars (e.g. the filter-picker date filter) have a ~240px
     * header budget: narrower triggers and short month names keep the
     * dropdowns and arrows from overflowing it.
     */
    compact?: boolean;
}
/**
 * Month + year selectors for the calendar header. Replaces the static
 * "October 2026" label so users can jump directly to a distant month/year
 * (e.g. a birthday) instead of clicking the prev/next arrows dozens of times.
 */
export declare function CalendarHeaderDropdowns({ viewDate, onViewDateChange, showMonth, locale, minDate, maxDate, compact, }: CalendarHeaderDropdownsProps): import("react").JSX.Element;
export {};
