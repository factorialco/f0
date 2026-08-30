import { F0DocumentKind } from '../../../../components/F0PdfViewer';
import { F0ChatAttachedKind, F0ChatAttachment, F0ChatCardAttachment, F0ChatFileAttachment, F0ChatImageAttachment, F0ChatLocationAttachment, F0ChatVoiceAttachment } from '../types';
/** Compact binary size used in composer validation messages. */
export declare const formatFileSize: (bytes: number) => string;
/** Whether a generic file attachment can render in the native F0 video player. */
export declare const isVideoFileAttachment: (file: F0ChatFileAttachment) => boolean;
/**
 * Document families with an in-chat preview (Slack-style snapshot card + the
 * fullscreen F0PdfViewer, which routes by this same kind). Anything else —
 * PowerPoint, binary `.doc`, archives… — keeps the plain download chip.
 */
export type ChatDocumentKind = F0DocumentKind;
/**
 * Which preview family a file belongs to, or null for chip-only files.
 * MIME first, extension as the fallback for transports that don't send one.
 */
export declare const documentPreviewKind: (file: F0ChatFileAttachment) => ChatDocumentKind | null;
/** False when the file is too big to parse in the browser for a preview. */
export declare const withinPreviewSizeLimit: (file: F0ChatFileAttachment, kind: ChatDocumentKind) => boolean;
/**
 * Attachment family for reporting, mirroring how the transcript renders it.
 *
 * Deliberately unlike {@link partitionChatAttachments} in one way: a document
 * too large to preview is still a document here. Previewability is a rendering
 * concern; "what kinds of files do people share" is not.
 */
export declare const attachedKindOf: (attachment: F0ChatImageAttachment | F0ChatFileAttachment) => F0ChatAttachedKind;
export type PartitionedChatAttachments = {
    images: F0ChatImageAttachment[];
    videos: F0ChatFileAttachment[];
    documents: {
        file: F0ChatFileAttachment;
        kind: ChatDocumentKind;
    }[];
    files: F0ChatFileAttachment[];
    locations: F0ChatLocationAttachment[];
    voices: F0ChatVoiceAttachment[];
    cards: F0ChatCardAttachment[];
};
/** Classifies each attachment exactly once for the transcript renderer. */
export declare const partitionChatAttachments: (attachments: F0ChatAttachment[]) => PartitionedChatAttachments;
