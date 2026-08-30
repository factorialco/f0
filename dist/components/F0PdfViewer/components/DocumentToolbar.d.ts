import { ReactNode } from 'react';
import { F0PdfViewerAction } from '../types';
export type DocumentZoom = {
    /** Current zoom factor (1 = 100%), always one of the fixed scales. */
    scale: number;
    zoomIn: () => void;
    zoomOut: () => void;
    setScale: (scale: number) => void;
};
/**
 * Zoom state for the non-PDF panes. The panes apply `scale` to their content
 * via CSS `zoom` (which reflows, so scrolling/sticky headers keep working) and
 * hand the controls to {@link DocumentToolbar}. Same fixed steps as the PDF
 * toolbar; no page-width/page-fit — there's no page geometry to fit to.
 */
export declare const useDocumentZoom: () => DocumentZoom;
/**
 * Toolbar for the non-PDF panes (sheet/docx/text), mirroring PdfToolbar's
 * surface and layout: kind-specific controls on the left (the sheet switcher;
 * no titles, same as the PDF toolbar), zoom in the middle, download + the
 * host's custom actions on the right. Rendered in every pane state — download
 * stays reachable even when the preview itself fails.
 */
export declare const DocumentToolbar: ({ url, filename, withCredentials, actions, zoom, children, }: {
    url: string;
    filename?: string;
    withCredentials?: boolean;
    actions?: F0PdfViewerAction[];
    /** Wire from {@link useDocumentZoom} to show the zoom controls. */
    zoom?: DocumentZoom;
    /** Kind-specific left-side content. */
    children?: ReactNode;
}) => ReactNode;
