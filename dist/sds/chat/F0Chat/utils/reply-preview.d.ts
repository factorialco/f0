import { F0ChatAttachment } from '../types';
/** Preview thumbnail URL for a quoted message, if it carries any image. */
export declare const replyThumbnailUrl: (attachments?: F0ChatAttachment[]) => string | undefined;
/**
 * One-line description of a message's attachments, for the reply quote + the
 * composer chip. `null` when there are none. `name` is only set for a lone file
 * (so the caller can show the real filename); otherwise counts drive a
 * pluralised, localized label the caller resolves.
 */
export type AttachmentSummary = {
    kind: "photo";
    count: number;
} | {
    kind: "file";
    count: number;
    name?: string;
} | {
    kind: "location";
} | {
    kind: "voice";
} | {
    kind: "mixed";
    count: number;
};
export declare const summariseAttachments: (attachments?: F0ChatAttachment[]) => AttachmentSummary | null;
