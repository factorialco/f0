import { ReactNode } from 'react';
/**
 * First-sheet snapshot for the chat's spreadsheet card. Kept in its own module
 * so SheetJS lands in a lazy chunk fetched only when a card scrolls into view —
 * `ChatDocumentAttachmentCard` loads it via `React.lazy`. Default export
 * required by `lazy()`.
 */
declare const ChatSheetThumbnail: ({ url, onError, onRendered, }: {
    url: string;
    /** The card falls back to the plain file chip when the sheet can't load. */
    onError: () => void;
    /** Grid painted — the card crossfades its skeleton out. */
    onRendered: () => void;
}) => ReactNode;
export default ChatSheetThumbnail;
