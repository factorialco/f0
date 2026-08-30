import { ReactNode } from 'react';
import { F0ChatFileAttachment } from '../types';
/**
 * An inline chat video powered by F0VideoPlayer. The player owns playback,
 * keyboard shortcuts, speed, volume, captions, download and fullscreen; chat
 * adds the file-specific download action, message sizing and chained corners.
 */
export declare const ChatVideoAttachment: ({ file, cornerClass, className, surfaceClassName, meta, }: {
    file: F0ChatFileAttachment;
    cornerClass: string;
    /** Optional sizing override for compact surfaces such as the composer. */
    className?: string;
    /** Sender-aware surface supplied by a transcript message. */
    surfaceClassName?: string;
    /** Scrim + timestamp, when this card is the last thing in its message. */
    meta?: ReactNode;
}) => ReactNode;
