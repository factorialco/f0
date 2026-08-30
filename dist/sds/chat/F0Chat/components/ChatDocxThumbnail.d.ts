import { ReactNode } from 'react';
/**
 * First-page snapshot for the chat's Word card: docx-preview renders the
 * document at its natural page width into a hidden-overflow host, and the
 * result is scaled down to the card. Kept in its own module so docx-preview
 * (+ jszip) land in a lazy chunk fetched only when a card scrolls into view —
 * `ChatDocumentAttachmentCard` loads it via `React.lazy`. Default export
 * required by `lazy()`.
 */
declare const ChatDocxThumbnail: ({ url, width, onError, onRendered, }: {
    url: string;
    /** Target snapshot width in CSS pixels (the card crops the height). */
    width: number;
    /** The card falls back to the plain file chip when the document can't load. */
    onError: () => void;
    /** Document painted — the card crossfades its skeleton out. */
    onRendered: () => void;
}) => ReactNode;
export default ChatDocxThumbnail;
