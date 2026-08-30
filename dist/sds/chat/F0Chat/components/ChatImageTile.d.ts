import { ReactNode } from 'react';
import { F0ChatImageAttachment } from '../types';
/**
 * One photo in the transcript mosaic.
 *
 * The cell — not the image — owns the box, through `aspect-ratio`. That is the
 * whole point: the space a photo will occupy is known before a single byte
 * arrives, so nothing in the transcript is measured twice and the row never
 * resizes under the reader.
 *
 * Nothing pulses while it loads. The cell already carries the sender's tint, so
 * an empty cell reads as a quiet surface rather than a hole; when the host can
 * supply a `blurUrl`, that tiny image sits blurred underneath instead and the
 * photo resolves out of it. Both are the real file arriving, not a stand-in
 * for it.
 */
export declare const ChatImageTile: ({ image, aspectRatio, spanFull, surfaceClassName, label, onOpen, overlay, }: {
    image: F0ChatImageAttachment;
    /** Width ÷ height for the cell, from the album layout. */
    aspectRatio: number;
    /** The 1-up and the 3-up hero span both grid columns. */
    spanFull: boolean;
    surfaceClassName?: string;
    label: string;
    onOpen: () => void;
    /** `+N` cover or the message's timestamp, drawn above the photo. */
    overlay?: ReactNode;
}) => ReactNode;
