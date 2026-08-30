import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * Attachments shown above a message bubble — images render inline (clickable to
 * open the in-chat lightbox); videos render as wide, inline F0VideoPlayers;
 * previewable documents (pdf/sheet/docx/text) get a Slack-style snapshot card
 * (clickable to open the fullscreen viewer); other files use
 * {@link F0FileItem} with a download action, mirroring the AI chat's file
 * rendering. Multiple videos stack vertically so each keeps the largest useful
 * playback area. A lone image, video, location, voice and document cards follow
 * the bubble's chained corners (run-aware); file chips can't.
 */
export declare const ChatMessageAttachments: ({ message, isMine, isFirstOfRun, isLastOfRun, hasAvatar, }: {
    message: F0ChatMessage;
    isMine: boolean;
    /** Run flags — the media cards tuck their tail-side corners like the bubble. */
    isFirstOfRun?: boolean;
    isLastOfRun?: boolean;
    /** An avatar sits beside this row: only then does the run end on a point. */
    hasAvatar?: boolean;
}) => ReactNode;
