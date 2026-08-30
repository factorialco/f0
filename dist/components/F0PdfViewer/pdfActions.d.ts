import { PDFDocumentProxy } from '../../ui/pdf';
export declare const printPdf: (pdf: PDFDocumentProxy | null) => Promise<void>;
export declare const downloadPdf: (pdf: PDFDocumentProxy | null, filename: string) => Promise<void>;
/** Download for the non-PDF kinds. Fetched into a blob first: the anchor
 * `download` attribute is ignored on cross-origin URLs, so a direct link to a
 * CDN text/csv file would navigate the app to the raw file instead. */
export declare const downloadFromUrl: (url: string, filename?: string, withCredentials?: boolean) => Promise<void>;
