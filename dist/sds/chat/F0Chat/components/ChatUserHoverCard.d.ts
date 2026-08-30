import { ReactNode } from 'react';
import { F0ChatUser } from '../types';
/**
 * Wraps a trigger (a sender avatar/name, or the DM header) in a hover card that
 * shows the person's identity in an {@link F0Card}, with a "View profile" link —
 * the same affordance as the AI chat mention cards.
 */
export declare const ChatUserHoverCard: ({ user, children, }: {
    user: F0ChatUser;
    children: ReactNode;
}) => ReactNode;
