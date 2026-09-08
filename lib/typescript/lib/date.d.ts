export declare function formatTime(date: Date): string;
export declare function formatTime24Hours(date: Date): string;
export declare function getAbbreviateMonth(date: Date): string;
export declare function getDayOfMonth(date: Date): number;
export declare function getAgo(date: Date, addSuffix?: boolean): string;
type GetDisplayDateBasedOnDurationOptions = {
    yesterdayRelative?: boolean;
};
export declare function getDisplayDateBasedOnDuration(date: Date, { yesterdayRelative }?: GetDisplayDateBasedOnDurationOptions): string;
type DateGroup = "today" | "yesterday" | "lastWeek" | "lastMonth" | number;
export declare const categorizeItemsByDate: <T extends Record<D, Date>, D extends keyof T>(items: T[], dateField: D) => Record<DateGroup, T[]>;
export type DateGranularity = "day" | "week" | "month" | "year";
export declare function setDateGranularity(date: Date, granularity: DateGranularity): Date;
export {};
//# sourceMappingURL=date.d.ts.map