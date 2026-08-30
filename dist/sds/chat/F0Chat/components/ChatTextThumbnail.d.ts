import { ReactNode } from 'react';
/**
 * Plain-text snapshot for the chat's text/markdown card (the raw source, not
 * rendered markdown — like a file manager's preview). Lazy-loaded by
 * `ChatDocumentAttachmentCard`; default export required by `lazy()`.
 */
declare const ChatTextThumbnail: ({ url, onError, onRendered, }: {
    url: string;
    /** The card falls back to the plain file chip when the file can't load. */
    onError: () => void;
    /** Text painted — the card crossfades its skeleton out. */
    onRendered: () => void;
}) => ReactNode;
export default ChatTextThumbnail;
