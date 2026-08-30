import { ReactNode } from 'react';
/**
 * In-chat fullscreen document viewer, mirroring {@link ChatImagePreview}: a
 * modal portaled to `document.body` (above the chat panel and its host) with a
 * click-anywhere-to-close backdrop. The content is {@link F0PdfViewer} routing
 * by document `kind` — the full pdf.js viewer for PDFs, an Excel-style grid
 * for spreadsheets, docx-preview for Word, and a rendered document for
 * text/markdown. Every kind carries the viewer's toolbar, and Close rides in
 * it as a custom action (no floating band on top).
 */
export declare const ChatDocumentPreview: () => ReactNode;
