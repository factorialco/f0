import { ReactNode } from 'react';
import { F0PdfViewerAction } from '../types';
/**
 * Spreadsheet pane for F0PdfViewer's kind="sheet": an Excel-style grid (letter
 * columns, numbered rows) under a toolbar carrying one tab per sheet plus
 * download and the host's custom actions. Kept in its own module so SheetJS
 * stays in a lazy chunk — F0PdfViewer loads it via `React.lazy`. Default
 * export required by `lazy()`.
 */
declare const SheetViewer: ({ url, filename, withCredentials, actions, }: {
    url: string;
    filename?: string;
    withCredentials?: boolean;
    actions?: F0PdfViewerAction[];
}) => ReactNode;
export default SheetViewer;
