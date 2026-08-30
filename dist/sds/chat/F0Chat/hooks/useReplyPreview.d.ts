import { IconType } from '../../../../components/F0Icon';
import { F0ChatAttachment } from '../types';
export type ReplyPreview = {
    /** Leading glyph for a media-only preview (omitted when a caption is shown). */
    icon?: IconType;
    /** One line: the caption if present, otherwise a localized media descriptor. */
    label: string;
    /** Image thumbnail to show alongside the text, if the quote has one. */
    thumbnailUrl?: string;
};
/**
 * Resolves the one-line preview (icon + label + thumbnail) for a quoted message
 * or a composer reply, covering every shape: plain text, a caption with media, a
 * single/many photos, a named file, several files, and mixed attachments.
 *
 * The attachment icon is set whenever there ARE attachments — even alongside a
 * caption — so a file sent with a sentence still reads as a file. The caption
 * wins as the label (falling back to a media descriptor), and the image
 * thumbnail rides along regardless.
 */
export declare const useReplyPreview: (input: {
    body?: string;
    attachments?: F0ChatAttachment[];
}) => ReplyPreview;
