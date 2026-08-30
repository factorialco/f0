import { ReactNode } from 'react';
import { F0PdfViewerAction } from '../types';
/**
 * Word pane for F0PdfViewer's kind="docx": docx-preview renders the document
 * with its page layout (breaks, headers/footers) into a scrollable container,
 * under a toolbar with download and the host's custom actions.
 * Kept in its own module so docx-preview (+ jszip) stay in a lazy chunk —
 * F0PdfViewer loads it via `React.lazy`. Default export required by `lazy()`.
 */
declare const DocxViewer: ({ url, filename, withCredentials, actions, }: {
    url: string;
    filename?: string;
    withCredentials?: boolean;
    actions?: F0PdfViewerAction[];
}) => ReactNode;
export default DocxViewer;
