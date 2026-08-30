import { FileAttachmentProps } from './types';
/**
 * Renders a single file attachment row.
 * Handles two modes:
 * - New upload (entry.file): triggers useUpload, shows progress
 * - Pre-existing (entry.initialFile): displays immediately, no upload
 *
 * The `position` prop controls border-radius for grouped lists:
 * - "single": full radius (standalone)
 * - "top" / "middle" / "bottom": partial radius for grouped lists
 */
export declare function FileAttachment({ entry, useUpload, onUploadComplete, onRemove, onError, disabled, position, className, translations, }: FileAttachmentProps): import("react").JSX.Element;
