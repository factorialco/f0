export type { F0DocumentKind, F0PdfScale, F0PdfViewerAction, F0PdfViewerProps, } from './types';
export { pdfScales } from './types';
export { configurePdfWorker } from './pdfWorker';
/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export declare const F0PdfViewer: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<import('./types').F0PdfViewerProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: () => import("react").JSX.Element;
}>;
