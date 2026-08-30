import { ReactNode } from 'react';
import { F0ChatLocationAttachment } from '../types';
/**
 * A shared location (WhatsApp-style): a clean, non-interactive vector map
 * preview (MapLibre + OpenFreeMap — keyless and free for commercial use) with
 * an F0 pin on the point. Map-only card — the place name, when present, is the
 * link's accessible label. Clicking anywhere opens the point in Google Maps in
 * a new tab; the map is pointer-inert so the click always lands on the
 * surrounding link.
 */
export declare const ChatLocationAttachment: ({ location, cornerClass, surfaceClassName, meta, }: {
    location: F0ChatLocationAttachment;
    /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
    cornerClass?: string;
    /** Sender-aware surface supplied by a transcript message. */
    surfaceClassName?: string;
    /** Scrim + timestamp, when this card is the last thing in its message. */
    meta?: ReactNode;
}) => ReactNode;
