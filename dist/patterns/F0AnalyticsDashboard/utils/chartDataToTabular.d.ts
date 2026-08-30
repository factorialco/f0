import { DashboardChartConfig, DashboardChartData } from '../types';
interface TabularResult {
    /** Header labels, in order. May contain duplicates — they come from data. */
    columns: string[];
    rows: Record<string, unknown>[];
    /**
     * Stable row-lookup keys, parallel to `columns`. Set when a header label is
     * user-controlled and could therefore collide with another column: rows are
     * keyed by these instead, so two columns sharing a label stay distinct.
     * Absent when every header is a safe literal.
     */
    keys?: string[];
}
/**
 * Convert chart data + config into a tabular format suitable for Excel/CSV export.
 */
export declare function chartDataToTabular(config: DashboardChartConfig, data: DashboardChartData): TabularResult;
export {};
