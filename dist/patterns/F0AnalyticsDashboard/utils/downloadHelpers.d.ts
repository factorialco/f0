/**
 * `columns` is used as the header row. By default rows are also looked up by
 * the column string, so duplicate labels collide. Pass `keys` (parallel to
 * `columns`) when row keys differ from headers (e.g. stable column ids vs.
 * human-readable labels) to avoid the collision.
 */
export declare function downloadAsExcel(columns: string[], rows: Record<string, unknown>[], filename: string, keys?: string[]): void;
/**
 * Same `keys` semantics as `downloadAsExcel`: header strings come from
 * `columns`, row values are read by `keys ?? columns`.
 */
export declare function downloadAsCsv(columns: string[], rows: Record<string, unknown>[], filename: string, keys?: string[]): void;
/**
 * Download a data URL (e.g. from ECharts getDataURL) as an image file.
 */
export declare function downloadAsImage(dataUrl: string, filename: string, ext: "png" | "jpg"): void;
/**
 * Create an Excel workbook with multiple sheets and trigger download.
 * Each entry becomes a separate sheet.
 */
export declare function downloadMultiSheetExcel(sheets: {
    name: string;
    columns: string[];
    rows: Record<string, unknown>[];
    /** Row-lookup keys parallel to `columns`; see {@link downloadAsExcel}. */
    keys?: string[];
}[], filename: string): void;
