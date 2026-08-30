import { ReactNode } from 'react';
/**
 * First-page snapshot for the chat's PDF card. Kept in its own module so
 * react-pdf/pdf.js (heavy) land in a lazy chunk fetched only when a PDF card
 * scrolls into view — `ChatDocumentAttachmentCard` loads it via `React.lazy`.
 * Default export required by `lazy()`.
 */
declare const ChatPdfThumbnail: ({ url, width, onError, onRendered, }: {
    url: string;
    /** Rendered page width in CSS pixels (the card crops the height). */
    width: number;
    /** The card falls back to the plain file chip when the document can't load. */
    onError: () => void;
    /** First page painted — the card crossfades its skeleton out. */
    onRendered: () => void;
}) => ReactNode;
export default ChatPdfThumbnail;
