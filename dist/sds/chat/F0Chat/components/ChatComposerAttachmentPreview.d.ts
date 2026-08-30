import { ReactNode } from 'react';
import { F0ChatComposableAttachment } from '../types';
/**
 * Preview for an attachment waiting in the composer. Images and videos use
 * compact media thumbnails, previewable documents reuse the message snapshot,
 * and voice/location attachments keep their native representation. Unknown
 * files use the same square footprint with their file-type avatar.
 */
declare const ChatComposerAttachmentPreviewContent: ({ attachment, uploading, onRemove, }: {
    attachment: F0ChatComposableAttachment;
    uploading: boolean;
    onRemove: () => void;
}) => ReactNode;
/**
 * Draft attachments reuse the transcript's leaf components, which report
 * consumption events. Marking the surface stops "I previewed my own unsent
 * file" being recorded as "I opened something someone shared with me".
 */
export declare const ChatComposerAttachmentPreview: (props: Parameters<typeof ChatComposerAttachmentPreviewContent>[0]) => ReactNode;
export {};
