import { F0ChatUser } from '../types';
/** Tailwind text-colour class for a group sender's name, matching their avatar. */
export declare const senderNameColorClass: (user: F0ChatUser) => string;
/** Tailwind background class for an incoming bubble, matching its sender. */
export declare const senderBubbleColorClass: (user: F0ChatUser) => string;
/**
 * Background for any top-level surface owned by a message.
 *
 * Own bubbles stay neutral in both themes — `f1-background-tertiary` (4%) no
 * longer separates from the transcript now that the incoming tints are this
 * strong, so this is the `-secondary` step (10%). In dark that lands at the
 * same OKLab lightness as the coloured bubbles, so a run of mine reads as the
 * same weight as everyone else's, only without the hue.
 */
export declare const messageSurfaceColorClass: (user: F0ChatUser, isMine: boolean) => string;
