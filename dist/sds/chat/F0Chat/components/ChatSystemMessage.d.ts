import { ReactNode } from 'react';
import { F0ChatSystemMessage as F0ChatSystemMessageType } from '../types';
/**
 * System row for membership events, minimal text line — "@Pedro, @Juan and
 * 5 more were added to the group" — the visual sibling of
 * {@link DateTimeSeparator}. Each `@name` reads in the secondary colour and
 * opens the person's profile hover card (with its "View profile" link), the
 * same affordance as sender avatars. Names beyond {@link MAX_MEMBER_NAMES}
 * (plus the host's `remainingCount`) collapse into the localized "and N more".
 * Without a structured payload the row falls back to the plain `body` text
 * (e.g. an unknown GetStream system message), and renders nothing when both
 * are absent.
 */
export declare const ChatSystemMessage: ({ message, }: {
    message: F0ChatSystemMessageType;
}) => ReactNode;
