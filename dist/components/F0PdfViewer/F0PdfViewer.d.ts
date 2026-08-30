import { F0PdfViewerProps } from './types';
/**
 * Routes by document `kind`: "pdf" (default) keeps the full pdf.js viewer and
 * its toolbar, exactly as before; the other kinds render a read-only pane in
 * the same surface. Split in two components so the PDF path's hooks don't run
 * for other kinds (and vice versa).
 */
export declare const F0PdfViewerBase: import('react').ForwardRefExoticComponent<F0PdfViewerProps & import('react').RefAttributes<HTMLDivElement>>;
