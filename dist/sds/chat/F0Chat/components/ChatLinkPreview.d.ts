import { ReactNode } from 'react';
import { F0ChatLinkPreview } from '../types';
/**
 * Open Graph cards nested at the top of the bubble (WhatsApp-style). One link →
 * a full card with its preview image; several links → compact stacked rows with
 * title/description/host only (Slack-style unfurls, no image wall). Each card
 * opens its link in a new tab. Rendered above the body, mirroring the reply
 * quote's nesting.
 */
export declare const ChatLinkPreview: ({ previews, isMine, isFirstOfRun, }: {
    previews: F0ChatLinkPreview[];
    /** The host bubble's side — picks which top corner hugs the bubble. */
    isMine?: boolean;
    /** Mirrors the bubble's tail-side top corner, like the reply quote. */
    isFirstOfRun?: boolean;
}) => ReactNode;
