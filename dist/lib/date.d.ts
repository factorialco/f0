declare function formatTime(date: Date): string;
declare function formatTime24Hours(date: Date): string;
declare function getAbbreviateMonth(date: Date): string;
declare function getDayOfMonth(date: Date): number;
declare function getAgo(date: Date, addSuffix?: boolean): string;
type GetDisplayDateBasedOnDurationOptions = {
    yesterdayRelative?: boolean;
};
declare function getDisplayDateBasedOnDuration(date: Date, { yesterdayRelative }?: GetDisplayDateBasedOnDurationOptions): string;
type DateGroup = "today" | "yesterday" | "lastWeek" | "lastMonth" | number;
declare const categorizeItemsByDate: <T extends Record<D, Date>, D extends keyof T>(items: T[], dateField: D) => Record<DateGroup, T[]>;
type DateGranularity = "day" | "week" | "month" | "year";
declare function setDateGranularity(date: Date, granularity: DateGranularity): Date;

export { type DateGranularity, categorizeItemsByDate, formatTime, formatTime24Hours, getAbbreviateMonth, getAgo, getDayOfMonth, getDisplayDateBasedOnDuration, setDateGranularity };
