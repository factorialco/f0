import { ReactNode } from 'react';
import { F0ChatChannel } from '../types';
/**
 * What sits where the composer would be on a channel the current user can't
 * post in. Without it a read-only surface simply ended at the last message,
 * which reads as a bug rather than as a rule.
 *
 * The sentence names whoever *can* post ("Only Factorial can send messages"),
 * so it belongs to the host — F0 can't know it, and the host is the one with
 * the translations. `channel.readOnlyNotice` when set, a generic line otherwise.
 */
export declare const ChatReadOnlyNotice: ({ channel, }: {
    channel: F0ChatChannel;
}) => ReactNode;
