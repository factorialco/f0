export type SheetGrid = {
    /** Tab name from the workbook. */
    name: string;
    /** Formatted cell text (dates/numbers as Excel would display them). */
    rows: string[][];
    /** True when the sheet had more rows than the cap. */
    truncatedRows: boolean;
};
/**
 * Parses a workbook (xlsx/xls/csv — SheetJS sniffs the format) into plain
 * string grids, capped so a huge sheet can't freeze the preview. The cap is
 * applied through the parse `range`, so out-of-range cells are never
 * materialized.
 */
export declare const parseWorkbook: (data: ArrayBuffer, { maxRows, maxCols }: {
    maxRows: number;
    maxCols: number;
}) => SheetGrid[];
/** Column header letters (A, B, …, Z, AA…) for the widest row of a grid. */
export declare const columnLetters: (rows: string[][]) => string[];
/** Fetches and parses a spreadsheet attachment. Throws on HTTP/parse errors.
 * Sends credentials by default, matching the viewer's PDF path. */
export declare const fetchWorkbook: (url: string, { maxRows, maxCols, withCredentials, }: {
    maxRows: number;
    maxCols: number;
    withCredentials?: boolean;
}) => Promise<SheetGrid[]>;
