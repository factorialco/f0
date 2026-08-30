import { ReactNode } from 'react';
import { F0PdfViewerAction } from '../types';
/**
 * Text pane for F0PdfViewer's kind="text": `.md` files render as a sanitized
 * markdown document (see `parseMarkdownDocument`), everything else
 * (txt/log/json) as monospaced plain text. Lazy-loaded by F0PdfViewer (the
 * remark pipeline isn't free); default export required by `lazy()`.
 */
declare const TextViewer: ({ url, name, mimeType, withCredentials, actions, }: {
    url: string;
    name: string;
    mimeType?: string;
    withCredentials?: boolean;
    actions?: F0PdfViewerAction[];
}) => ReactNode;
export default TextViewer;
