export type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear" | "periods";
export type CalendarMode = "single" | "range";
export type CalendarDate = {
    day: number;
    month: number;
    year: number;
};
export type DateRange = {
    from: Date;
    to?: Date;
};
export type DateRangeComplete = Required<DateRange>;
export type DateRangeString = {
    from: string;
    to?: string;
};
export type DateRangeError = {
    from: boolean;
    to: boolean;
};
export declare const WeekStartDay: {
    readonly Sunday: 0;
    readonly Monday: 1;
    readonly Tuesday: 2;
    readonly Wednesday: 3;
    readonly Thursday: 4;
    readonly Friday: 5;
    readonly Saturday: 6;
};
export type WeekStartsOn = (typeof WeekStartDay)[keyof typeof WeekStartDay];
