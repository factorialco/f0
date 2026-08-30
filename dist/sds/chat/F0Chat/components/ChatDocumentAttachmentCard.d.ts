import { ReactNode } from 'react';
import { IconType } from '../../../../components/F0Icon';
import { F0ChatFileAttachment } from '../types';
import { ChatDocumentKind } from '../utils/attachments';
/**
 * Document card with a type badge and name over a cropped snapshot of the
 * content — the first PDF page, the first sheet's cells, the first Word page,
 * or the first lines of text. Clicking the snapshot opens the fullscreen
 * viewer ({@link ChatDocumentPreview}), which owns its download action. A
 * document that can't load falls back to the plain downloadable file chip.
 */
export declare const ChatDocumentAttachmentCard: ({ file, kind, cornerClass, action, previewDisabled, compact, surfaceClassName, }: {
    file: F0ChatFileAttachment;
    kind: ChatDocumentKind;
    /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
    cornerClass?: string;
    /** Optional card action, e.g. Remove inside the composer. */
    action?: {
        label: string;
        icon: IconType;
        onClick: () => void;
    };
    /** Prevent opening a transient local URL before its upload completes. */
    previewDisabled?: boolean;
    /** Render as a square thumbnail in compact surfaces such as the composer. */
    compact?: boolean;
    /** Sender-aware surface supplied by a transcript message. */
    surfaceClassName?: string;
}) => ReactNode;
